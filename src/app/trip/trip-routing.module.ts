import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TripListComponent } from './trip-list.component';
import { TripDetailComponent } from './trip-detail.component';

const tripRoutes: Routes = [
    { path: 'trips', component: TripListComponent },
    { path: 'trips/:id', component: TripDetailComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(tripRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class TripRoutingModule { }
