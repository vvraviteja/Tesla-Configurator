import { NgModule } from "@angular/core";
import { TotalCostPipe } from "./pipes/total-cost.pipe";

@NgModule({
  declarations: [
    TotalCostPipe
  ],
  exports: [
    TotalCostPipe
  ]
})
export class SharedModule { }
