import { Component, OnInit, ViewChild } from '@angular/core';
import { Track, TrackService } from './track/track.service';
import { MapComponent } from './map/map.component';

@Component({
    templateUrl: './trip-list.component.html',
    styleUrls: ['./trip.component.css']
})
export class TripListComponent implements OnInit {

    @ViewChild(MapComponent)
    map: MapComponent;

    tracks: Track[] = [];
    trackNumber: number = -1;
    errorMessage: string;

    constructor(private trackService: TrackService) {
    }

    ngOnInit() {
        this.trackService.getTracks()
            .subscribe(
                tracks => this.tracks = tracks,
                error => this.errorMessage = <any>error);
    }

    loadTrack(index: number) {
        this.trackNumber = index;
        this.map.gpx = this.tracks[index].url;
    }

}
