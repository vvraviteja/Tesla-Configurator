import { Component, OnInit } from '@angular/core';
import { StepConfigService } from '../../shared/services/step-config.service';
import { Observable } from 'rxjs';
import { Color, Model } from '../../shared/models/model-color-config.model';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss'],
})
export class StepOneComponent implements OnInit {
  modelAndColorConfig$!: Observable<Model[]>;
  selectedModel!: Model;
  selectedColor!: Color;

  constructor(private stepConfigService: StepConfigService) { }

  ngOnInit() {
    this.modelAndColorConfig$ = this.stepConfigService.getModels();
    this.selectedModel = this.stepConfigService.getSelectedModel();
    this.selectedColor = this.stepConfigService.getSelectedColor();
  }

  modelChange(): void {
    this.isModelSelected() ? this.applyModelChanges() : this.clearModelChanges();
  }

  applyModelChanges() {
    this.selectedColor = this.selectedModel.colors[0];
    this.stepConfigService.setSelectedModel(this.selectedModel);
    this.colorChange();
  }

  clearModelChanges() {
    this.selectedColor = {} as Color;
    this.stepConfigService.setSelectedModel({} as Model);
    this.colorChange();
  }

  isModelSelected(): boolean {
    return typeof(this.selectedModel) != 'string';
  }

  colorChange(): void {
    this.stepConfigService.setSelectedColor(this.selectedColor);
  }

  compareModels(fistModel: Model, secondModel: Model): boolean {
    return fistModel && secondModel ? fistModel.code === secondModel.code : fistModel === secondModel;
  }

}

