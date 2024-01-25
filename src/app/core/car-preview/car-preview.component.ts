import { Component, OnDestroy, OnInit } from '@angular/core';
import { StepConfigService } from '../../shared/services/step-config.service';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-car-preview',
  templateUrl: './car-preview.component.html',
  styleUrls: ['./car-preview.component.scss']
})
export class CarPreviewComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  imagePath!: string;

  constructor(private stepConfigService: StepConfigService) { }

  ngOnInit() {
    this.stepConfigService.carPreviewSubject$.pipe(
      tap((imagePath: string) => this.imagePath = imagePath),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}

