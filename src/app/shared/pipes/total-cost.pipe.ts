import { Pipe, PipeTransform } from "@angular/core";
import { ConfigOptions } from "../models/config-options.model";

@Pipe({
    name: 'totalCost'
})
export class TotalCostPipe implements PipeTransform {
    transform(configPrice: number, price: number, towHitch: boolean, yoke: boolean): number {
        return configPrice + (price??0) + (towHitch ? 1000 : 0) + (yoke ? 1000 : 0)
    }
}