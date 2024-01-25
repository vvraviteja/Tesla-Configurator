import { Component, OnDestroy, OnInit } from '@angular/core';
import { StepConfigService } from '../../shared/services/step-config.service';
import { Model } from '../../shared/models/model-color-config.model';
import { Subject, takeUntil, tap } from 'rxjs';
import { ConfigOptions } from '../../shared/models/config-options.model';

@Component({
  selector: 'app-step-navigator',
  templateUrl: './step-navigator.component.html',
  styleUrls: ['./step-navigator.component.scss']
})
export class StepNavigatorComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  isStepTwoActive!: boolean;
  isStepThreeActive!: boolean;

  constructor(private stepConfigService: StepConfigService) { }

  ngOnInit() {
    this.stepConfigService.modelSubject$.pipe(
      tap((selectedModelAndColor: Model) => this.updateStepTwoRouterActiveState(selectedModelAndColor)),
      takeUntil(this.destroy$)
    ).subscribe();

    this.stepConfigService.configOptionsSubject$.pipe(
      tap((selectedConfig: ConfigOptions) => this.updateStepThreeRouterActiveState(selectedConfig)),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  updateStepTwoRouterActiveState(selectedModelAndColor: Model): void {
    this.isStepTwoActive = !!selectedModelAndColor.code && !!selectedModelAndColor.colors?.[0].code;
  }

  updateStepThreeRouterActiveState(selectedConfig: ConfigOptions): void {
    this.isStepThreeActive = !!selectedConfig.configs;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}

