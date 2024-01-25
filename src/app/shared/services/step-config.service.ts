import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';

import { API_CONFIG_URLS } from '../constants/api-url.constant';
import { ModelAndColor } from '../models/model-color-config.model';
import { ConfigOptions } from '../models/config-options.model';


@Injectable({
    providedIn: 'root'
})
export class StepConfigService {

    modelAndColorSubject = new ReplaySubject<ModelAndColor>();
    configOptionsSubject = new ReplaySubject<ConfigOptions>();

    constructor(private http: HttpClient) { }

    setSelectedModelAndColor(selectedModelAndColor: ModelAndColor): void {
        this.modelAndColorSubject.next(selectedModelAndColor);
    }

    setSelectedConfig(configOptions: ConfigOptions): void {
        this.configOptionsSubject.next(configOptions);
    }

    getModelAndColorConfig(): Observable<ModelAndColor[]> {
        return this.http.get(API_CONFIG_URLS.modelColorConfig) as Observable<ModelAndColor[]>;
    }

    getConfigOptions(modelId: string): Observable<ConfigOptions> {
        return this.http.get(`${API_CONFIG_URLS.configOption}${modelId}`) as Observable<ConfigOptions>;
    }
}