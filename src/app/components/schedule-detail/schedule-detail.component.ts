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
export class ScheduleDetailComponent {
  @Input() schedule: Schedule;

  public showDetail = false;
  public note: string;
  public noteList = [];

  constructor() {}

  addNote = note => {
    if (!note) {
      return;
    }

    this.noteList.push(note);
    this.note = null;
  };
}
