import { Component, OnInit, Input } from '@angular/core';
import { Schedule } from 'src/app/shared/models';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.scss']
})
export class ScheduleDetailComponent implements OnInit {
  @Input() schedule: Schedule;

  public showDetail = false;
  public note: string;

  constructor() {}

  ngOnInit() {
    const x = '';
  }
}
