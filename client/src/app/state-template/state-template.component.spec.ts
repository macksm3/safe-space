import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateTemplateComponent } from './state-template.component';

describe('StateTemplateComponent', () => {
  let component: StateTemplateComponent;
  let fixture: ComponentFixture<StateTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
