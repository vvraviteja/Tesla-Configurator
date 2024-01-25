import {Component} from '@angular/core';
import { StepConfigService } from './shared/services/step-config.service';
import { tap } from 'rxjs';
import { ModelAndColor } from './shared/models/model-color-config.model';

@Component({
  selector: 'app-root',
  styleUrl: 'app.component.scss',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  imagePath!: string;
  constructor(private stepConfigService: StepConfigService) {
    this.stepConfigService.modelAndColorSubject.pipe(
      tap((selectedModelAndColor: ModelAndColor) => this.updateImage(selectedModelAndColor))
    ).subscribe();
  }

  updateImage(selectedModelAndColor: ModelAndColor): void {
    this.imagePath = `/assets/${selectedModelAndColor.code}/${selectedModelAndColor.colors[0].code}.jpg`;
  }
}
