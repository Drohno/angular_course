import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayDetails = false;
  indexToApplyStyleAndClassConditionally = 4;
  arrayOfLogs = [];

  toggleDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.arrayOfLogs.push({ timestamp: new Date().toISOString() });
  }
}
