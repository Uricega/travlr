import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { Trip } from '../models/trip';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-trip.html',
  styleUrl: './edit-trip.css'
})
export class EditTrip implements OnInit {

  trip: Trip | null = null;
  errorMessage = '';

  constructor(
  private tripData: TripData,
  private route: ActivatedRoute,
  private router: Router,
  private cdr: ChangeDetectorRef
) {}

  ngOnInit(): void {
  const tripCode = this.route.snapshot.paramMap.get('tripCode');

  console.log('Trip code from URL:', tripCode);

  if (tripCode) {
    this.tripData.getTrip(tripCode).subscribe({
      next: (data) => {
        console.log('Trip received from API:', data);

        this.trip = {
          ...data,
          start: data.start ? data.start.substring(0, 10) : ''
       };

        this.cdr.detectChanges();

        console.log('Trip assigned to component:', this.trip);
      },
      error: (err) => {
        console.error('Error loading trip:', err);
        this.errorMessage = 'Unable to load trip.';
      }
    });
  }
  }

  updateTrip(): void {
    if (!this.trip) {
      return;
    }

    this.tripData.updateTrip(this.trip).subscribe({
      next: () => {
        alert('Trip updated successfully!');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Error updating trip:', err);
        this.errorMessage = 'Unable to update trip.';
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}