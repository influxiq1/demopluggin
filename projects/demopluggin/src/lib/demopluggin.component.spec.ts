import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoplugginComponent } from './demopluggin.component';

describe('DemoplugginComponent', () => {
  let component: DemoplugginComponent;
  let fixture: ComponentFixture<DemoplugginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoplugginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoplugginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
