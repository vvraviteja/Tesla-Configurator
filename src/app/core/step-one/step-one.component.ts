import { Component, OnInit } from '@angular/core';
import { StepConfigService } from '../../shared/services/step-config.service';
import { Observable } from 'rxjs';
import { Color, ModelAndColor } from '../../shared/models/model-color-config.model';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss'],
})
export class StepOneComponent implements OnInit {

  modelAndColorConfig$!: Observable<ModelAndColor[]>;
  selectedModelCode!: ModelAndColor;
  selectedColor!: Color;
  constructor(private stepConfigService: StepConfigService) { }

  ngOnInit() {
    this.modelAndColorConfig$ = this.stepConfigService.getModelAndColorConfig();
  }

  modelChange(): void {
    this.selectedColor = this.selectedModelCode.colors[0];
    this.updateConfiguration();
  }

  colorChange(): void {
    this.updateConfiguration();
  }
  
  updateConfiguration(): void {
    this.stepConfigService.setSelectedModelAndColor({
      ...this.selectedModelCode,
      colors: [this.selectedColor]
    });
  } 

}

