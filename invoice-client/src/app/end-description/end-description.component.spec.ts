import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndDescriptionComponent } from './end-description.component';

describe('EndDescriptionComponent', () => {
  let component: EndDescriptionComponent;
  let fixture: ComponentFixture<EndDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
