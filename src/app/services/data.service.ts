import { BusDataServiceResponse } from './../shared/models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../shared/constants';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getBusRouteData = (url: string = Constants.DATA_URL) => {
    return this.http.get<BusDataServiceResponse>(url).pipe(
      map((response: BusDataServiceResponse) => {
        return response.data;
      })
    );
  };
}
