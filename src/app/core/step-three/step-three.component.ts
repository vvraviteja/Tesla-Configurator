import { Component, OnInit } from '@angular/core';

import { StepConfigService } from '../../shared/services/step-config.service';
import { Color, Model} from '../../shared/models/model-color-config.model';
import { ConfigOptions } from '../../shared/models/config-options.model';
import { TotalCostPipe } from '../../shared/pipes/total-cost.pipe';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss'],
  providers: [TotalCostPipe]
})
export class StepThreeComponent implements OnInit {
  model!: Model;
  configOptions!: ConfigOptions;
  color!: Color;

  constructor(private stepConfigService: StepConfigService) {}
  
  ngOnInit() {
    this.model = this.stepConfigService.getSelectedModel();
    this.color = this.stepConfigService.getSelectedColor();
    this.configOptions = this.stepConfigService.getSelectedConfig();
   }

}

