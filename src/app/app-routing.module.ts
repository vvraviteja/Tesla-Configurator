import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { StepOneComponent } from './core/step-one/step-one.component';
import { StepTwoComponent } from './core/step-two/step-two.component';
import { StepThreeComponent } from './core/step-three/step-three.component';

const routes: Routes = [
  { path: 'step1', component: StepOneComponent },
  { path: 'step2', component: StepTwoComponent},
  { path: 'step3', component: StepThreeComponent},
  { path: '**', redirectTo: 'step1' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
