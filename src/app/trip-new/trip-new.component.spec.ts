import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripNewComponent } from './trip-new.component';

describe('TripNewComponent', () => {
  let component: TripNewComponent;
  let fixture: ComponentFixture<TripNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
