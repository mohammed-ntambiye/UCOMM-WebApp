import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonInfoCardComponent } from './person-info-card.component';

describe('PersonInfoCardComponent', () => {
  let component: PersonInfoCardComponent;
  let fixture: ComponentFixture<PersonInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
