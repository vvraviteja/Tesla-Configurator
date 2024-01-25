import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StepNavigatorComponent } from './step-navigator.component';

describe('StepNavigatorComponent', () => {
  let component: StepNavigatorComponent;
  let fixture: ComponentFixture<StepNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StepNavigatorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
