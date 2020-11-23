import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoginButtonComponent } from './home-login-button.component';

describe('HomeLoginButtonComponent', () => {
  let component: HomeLoginButtonComponent;
  let fixture: ComponentFixture<HomeLoginButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLoginButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLoginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
