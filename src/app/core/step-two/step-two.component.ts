import { Component, OnDestroy, OnInit } from '@angular/core';
import { StepConfigService } from '../../shared/services/step-config.service';
import { ModelAndColor } from '../../shared/models/model-color-config.model';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { Config, ConfigOptions } from '../../shared/models/config-options.model';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();
  configOptions$!: Observable<ConfigOptions>;

  selectectConfig!: Config;
  includeTow: boolean = false;
  includeYoke: boolean = false;

  constructor(private stepConfigService: StepConfigService) { }

  ngOnInit() {
    this.stepConfigService.modelAndColorSubject.pipe(
      tap((selectedModelAndColor: ModelAndColor) => this.getConfigOptions(selectedModelAndColor)),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  getConfigOptions(selectedModelAndColor: ModelAndColor): void {
    this.configOptions$ = this.stepConfigService.getConfigOptions(selectedModelAndColor.code);
  }

  configChange(): void {
    this.stepConfigService.setSelectedConfig({
      configs: [this.selectectConfig],
      towHitch: this.includeTow,
      yoke: this.includeYoke
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}

