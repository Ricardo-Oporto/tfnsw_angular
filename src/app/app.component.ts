import { Constants } from './shared/constants';
import { Schedule } from './shared/models';
import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = Constants.APP_TITLE;

  busRouteData: Schedule[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getBusRouteData().subscribe((data: Schedule[]) => {
      this.busRouteData = data;
    });
  }
}
