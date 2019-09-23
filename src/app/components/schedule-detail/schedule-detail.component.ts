import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { Schedule } from 'src/app/shared/models';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleDetailComponent implements OnInit {
  @Input() schedule: Schedule;

  public showDetail = false;
  public note: string;
  public noteList = [];

  constructor() {}

  ngOnInit() {
    const x = '';
  }

  addNote = note => {
    if (!note) {
      return;
    }

    this.noteList.push(note);
    this.note = null;
  };
}
