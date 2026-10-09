import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Trip } from '../models/trip';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-add-trip',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-trip.html',
  styleUrl: './add-trip.css'
})
export class AddTrip {

  public newTrip: Trip = {
    code: '',
    name: '',
    length: '',
    start: '',
    resort: '',
    perPerson: '',
    image: '',
    description: ''
  };

  constructor(
    private tripData: TripData,
    private router: Router
  ) {}

  public addTrip(): void {
    this.tripData.addTrip(this.newTrip).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (error: any) => {
        console.log('Error adding trip:', error);
      }
    });
  }
}