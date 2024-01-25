import { Component, OnDestroy, OnInit } from '@angular/core';

import { StepConfigService } from '../../shared/services/step-config.service';
import { Model } from '../../shared/models/model-color-config.model';
import { Observable, Subject } from 'rxjs';
import { Config, ConfigOptions } from '../../shared/models/config-options.model';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  configOptions$!: Observable<ConfigOptions>;
  selectedConfig!: Config;
  includeTow: boolean = false;
  includeYoke: boolean = false;

  constructor(private stepConfigService: StepConfigService) { }

  ngOnInit() {
    this.setPreviouslySelected();
    this.getConfigOptions(this.stepConfigService.getSelectedModel());
  }

  setPreviouslySelected() {
    const configOptions: ConfigOptions = this.stepConfigService.getSelectedConfig();
    this.selectedConfig = configOptions?.configs?.[0];
    this.includeTow = configOptions?.towHitch;
    this.includeYoke = configOptions?.yoke;
  }

  getConfigOptions(selectedModelAndColor: Model): void {
    this.configOptions$ = this.stepConfigService.getConfigOptions(selectedModelAndColor.code);
  }

  configChange(): void {
   this.isConfigSelected()? this.updateConfig(): this.clearConfig();
  }

  updateConfig(): void {
    this.stepConfigService.setSelectedConfig({
      configs: [this.selectedConfig],
      towHitch: this.includeTow,
      yoke: this.includeYoke
    })
  }

  clearConfig() {
    this.stepConfigService.setSelectedConfig({} as ConfigOptions);
  }

  isConfigSelected(): boolean {
    return typeof(this.selectedConfig) != 'string';
  }

  compareConfigs(firstConfig: Config, secondConfig: Config): boolean {
    return firstConfig && secondConfig ? firstConfig.id === secondConfig.id : firstConfig === secondConfig;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}

