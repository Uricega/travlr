import { Routes } from '@angular/router';
import { TripList } from './trip-list/trip-list';
import { AddTrip } from './add-trip/add-trip';

export const routes: Routes = [
  {
    path: '',
    component: TripList
  },
  {
    path: 'add-trip',
    component: AddTrip
  }
];