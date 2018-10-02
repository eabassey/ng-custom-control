import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountMeComponent } from './count-me.component';

describe('CountMeComponent', () => {
  let component: CountMeComponent;
  let fixture: ComponentFixture<CountMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
