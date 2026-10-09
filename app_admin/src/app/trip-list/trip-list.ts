import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Trip } from '../models/trip';
import { TripData } from '../services/trip-data';
import { TripCard } from '../trip-card/trip-card';

@Component({
  selector: 'app-trip-list',
  imports: [CommonModule, TripCard],
  templateUrl: './trip-list.html',
  styleUrl: './trip-list.css'
})
export class TripList implements OnInit {

  trips: Trip[] = [];

  constructor(
  private tripData: TripData,
  private cdr: ChangeDetectorRef,
  private router: Router
) {}

  ngOnInit(): void {
    this.getTrips();
  }

  private getTrips(): void {
    this.tripData.getTrips().subscribe({
      next: (value: Trip[]) => {
        console.log('Trips received:', value);
        console.log('Number received:', value.length);
        this.trips = value;
        this.cdr.detectChanges();
        console.log('Trips after assignment:', this.trips.length);
    },
      error: (error: any) => {
        console.log('Error retrieving trips:', error);
      }
    });
  }
  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }
}