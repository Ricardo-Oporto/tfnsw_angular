import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Constants } from './shared/constants';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { of } from 'rxjs';
import response from '../assets/bus-services-data.json';

describe('AppComponent', () => {
  let app: AppComponent;

  class MockData {
    getBusRouteData() {
      return of(response.data);
    }
  }

  const data = response.data;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [AppComponent],
      providers: [{ provide: DataService, useClass: MockData }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should get the data', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.busRouteData).toEqual(data);
  }));
});
