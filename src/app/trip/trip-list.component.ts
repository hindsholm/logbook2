import { Component, OnInit } from '@angular/core';
import { Track, TrackService } from './track/track.service';

@Component({
    templateUrl: './trip-list.component.html',
    styleUrls: ['./trip.component.css']
})
export class TripListComponent implements OnInit {

    tracks: Track[] = [];
    errorMessage: string;

    constructor(private trackService: TrackService) {
    }

    ngOnInit() {
        this.trackService.getTracks()
            .subscribe(
                tracks => this.tracks = tracks,
                error => this.errorMessage = <any>error);
    }

}
