import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VermontComponent } from './vermont.component';

describe('VermontComponent', () => {
  let component: VermontComponent;
  let fixture: ComponentFixture<VermontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VermontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VermontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
