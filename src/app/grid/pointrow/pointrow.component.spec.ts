import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PointrowComponent } from './pointrow.component';

describe('PointrowComponent', () => {
  let component: PointrowComponent;
  let fixture: ComponentFixture<PointrowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PointrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
