import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashPage } from './wash.page';

describe('WashPage', () => {
  let component: WashPage;
  let fixture: ComponentFixture<WashPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(WashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
