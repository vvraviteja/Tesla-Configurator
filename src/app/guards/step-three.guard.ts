import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { StepConfigService } from '../shared/services/step-config.service';


@Injectable({
  providedIn: 'root'
})
export class StepThreeGuard implements CanActivate {

  constructor(private stepConfigService: StepConfigService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isModelSelected = this.stepConfigService.getSelectedModel();
    const isConfigSelected = this.stepConfigService.getSelectedConfig();
    if (!isModelSelected || !isConfigSelected ) {
      this.router.navigate(['/step1']);
      return false;
    }
    return true;
  }
}