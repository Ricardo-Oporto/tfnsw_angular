import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ScheduleDetailComponent } from './components/schedule-detail/schedule-detail.component';
import { RunningTimeDirective } from './directives/runningTime/running-time.directive';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    ScheduleDetailComponent,
    RunningTimeDirective
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
