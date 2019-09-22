import { Component, OnInit, Input } from '@angular/core';
import { Schedule } from 'src/app/shared/models';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  @Input() scheduleList: Schedule[];

  constructor() {}

  ngOnInit() {}
}
