import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { TripRoutingModule } from './trip-routing.module';
import { TripListComponent } from './trip-list.component';
import { TripDetailComponent } from './trip-detail.component';
import { TrackService } from './track/track.service';
import { MapComponent } from './map/map.component';

@NgModule({
    declarations: [
        MapComponent,
        TripListComponent,
        TripDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        TripRoutingModule
    ],
    providers: [TrackService]
})
export class TripModule { }
