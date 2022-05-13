import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathercontainerComponent } from './weathercontainer.component';

describe('WeathercontainerComponent', () => {
  let component: WeathercontainerComponent;
  let fixture: ComponentFixture<WeathercontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeathercontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeathercontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
