// src/app/app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  seatStatus: number[] = Array(80).fill(0);

  reserveSeats(numSeats: number): void {
    let bookedSeats: number[] = [];

    for (let i = 0; i < this.seatStatus.length; i++) {
      if (this.seatStatus[i] === 0) {
        bookedSeats.push(i + 1); // Adding 1 because seat numbering starts from 1
      }

      if (bookedSeats.length === numSeats) {
        for (const seat of bookedSeats) {
          this.seatStatus[seat - 1] = 1;
        }
        break;
      }
    }
  }
}
