import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalStartComponent } from './formal-start.component';

describe('FormalStartComponent', () => {
  let component: FormalStartComponent;
  let fixture: ComponentFixture<FormalStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormalStartComponent]
    });
    fixture = TestBed.createComponent(FormalStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
