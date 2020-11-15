import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewhampshireComponent } from './newhampshire.component';

describe('NewhampshireComponent', () => {
  let component: NewhampshireComponent;
  let fixture: ComponentFixture<NewhampshireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewhampshireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewhampshireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
