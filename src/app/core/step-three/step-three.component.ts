import { Component, OnDestroy, OnInit } from '@angular/core';
import { StepConfigService } from '../../shared/services/step-config.service';
import { ModelAndColor } from '../../shared/models/model-color-config.model';
import { ReplaySubject, Subject, takeUntil, tap } from 'rxjs';
import { ConfigOptions } from '../../shared/models/config-options.model';
import { TotalCostPipe } from '../../shared/pipes/total-cost.pipe';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss'],
  providers: [TotalCostPipe]
})
export class StepThreeComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  modelAndColorConfig$!: ReplaySubject<ModelAndColor>;
  configOptions$!: ReplaySubject<ConfigOptions>;

  constructor(private stepConfigService: StepConfigService) {
    
   }
  
  ngOnInit() {
    this.modelAndColorConfig$ = this.stepConfigService.modelAndColorSubject;
    this.configOptions$ = this.stepConfigService.configOptionsSubject;
   }

}

