import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { StepOneComponent } from './core/step-one/step-one.component';
import { StepTwoComponent } from './core/step-two/step-two.component';
import { StepThreeComponent } from './core/step-three/step-three.component';

import { StepTwoGuard } from './guards/step-two.guard';
import { StepThreeGuard } from './guards/step-three.guard';

const routes: Routes = [
  { path: 'step1', component: StepOneComponent },
  { path: 'step2', component: StepTwoComponent, canActivate: [StepTwoGuard]},
  { path: 'step3', component: StepThreeComponent, canActivate: [StepThreeGuard]},
  { path: '**', redirectTo: 'step1' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
