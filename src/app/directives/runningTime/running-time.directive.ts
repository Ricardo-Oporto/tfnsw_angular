import { Status } from './../../shared/constants';
import {
  Directive,
  AfterViewInit,
  Input,
  ElementRef,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appRunningTime]'
})
export class RunningTimeDirective implements AfterViewInit {
  @Input('time') time: number;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    switch (true) {
      case this.time < 0:
        this.setStatus(Status.EARLY);
        break;
      case 0 < this.time && this.time <= 300:
        this.setStatus(Status.ON_TIME);
        break;
      case this.time > 300:
        this.setStatus(Status.LATE);
        break;
      default:
        this.setStatus(Status.UNKNOWN);
        break;
    }
  }

  setStatus = (status: Status) => {
    this.elRef.nativeElement.innerHTML = status;
    this.renderer.addClass(this.elRef.nativeElement, status.replace(' ', ''));
  };
}
