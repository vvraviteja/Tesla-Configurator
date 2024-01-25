
import { TestBed } from '@angular/core/testing';
import { StepConfigService } from './step-config.service';

describe('StepConfigService', () => {
  let service: StepConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StepConfigService]
    });
    service = TestBed.inject(StepConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});