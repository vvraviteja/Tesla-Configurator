import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { API_CONFIG_URLS } from '../constants/api-url.constant';
import { Color, Model } from '../models/model-color-config.model';
import { ConfigOptions } from '../models/config-options.model';


@Injectable({
    providedIn: 'root'
})
export class StepConfigService {
    modelSubject$ = new Subject<Model>();
    configOptionsSubject$ = new Subject<ConfigOptions>();
    carPreviewSubject$ = new Subject<string>();
    model!: Model;
    configOptions!: ConfigOptions;
    selectedColor!: Color;

    constructor(private http: HttpClient) { }

    setSelectedModel(selectedModel: Model): void {
        this.modelSubject$.next(selectedModel);
        this.model = selectedModel;
        this.setSelectedConfig({} as ConfigOptions);
    }

    setSelectedConfig(configOptions: ConfigOptions): void {
        this.configOptionsSubject$.next(configOptions);
        this.configOptions = configOptions;
    }

    setSelectedColor(color: Color): void {
        this.selectedColor = color;
        (this.model.code && this.selectedColor.code) ?
            this.carPreviewSubject$.next(`/assets/${this.model.code}/${this.selectedColor.code}.jpg`) :
            this.carPreviewSubject$.next('');
    }

    getSelectedModel(): Model {
        return this.model;
    }

    getSelectedConfig(): ConfigOptions {
        return this.configOptions as ConfigOptions;
    }

    getSelectedColor(): Color {
        return this.selectedColor;
    }

    getModels(): Observable<Model[]> {
        return this.http.get(API_CONFIG_URLS.modelColorConfig) as Observable<Model[]>;
    }

    getConfigOptions(modelId: string): Observable<ConfigOptions> {
        return this.http.get(`${API_CONFIG_URLS.configOption}${modelId}`) as Observable<ConfigOptions>;
    }
}