import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodulistComponent } from './todulist.component';

describe('TodulistComponent', () => {
  let component: TodulistComponent;
  let fixture: ComponentFixture<TodulistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodulistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodulistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
