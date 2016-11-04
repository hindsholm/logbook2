import { Component, OnInit, ViewChild } from '@angular/core';
import { Track, TrackService } from './track/track.service';
import { MapComponent } from './map/map.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    @ViewChild(MapComponent)
    map: MapComponent;

    tracks: Track[];
    track: Track;
    errorMessage: string;

    constructor(private trackService: TrackService) {
    }

    ngOnInit() {
        this.trackService.getTracks()
            .subscribe(
                tracks => this.tracks = tracks,
                error => this.errorMessage = <any>error);
    }

    loadTrack(track: Track) {
        this.track = track;
        this.map.gpx = track.url;
    }

}
