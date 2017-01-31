import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Track, TrackService } from './track/track.service';
import { MapComponent } from './map/map.component';

@Component({
    templateUrl: './trip-detail.component.html',
    styleUrls: ['./trip.component.css']
})
export class TripDetailComponent implements OnInit {

    @ViewChild(MapComponent)
    map: MapComponent;

    tracks: Track[] = [];
    track: Track = { name: '', url: '' };
    errorMessage: string;

    constructor(private route: ActivatedRoute, private router: Router, private trackService: TrackService) {
    }

    ngOnInit() {
        this.trackService.getTracks()
            .subscribe(
                tracks => this.tracks = tracks,
                error => this.errorMessage = <any>error);
        this.route.params
            .switchMap(params => this.trackService.getTrack(params['id']))
            .subscribe(track => this.setTrack(track));
    }

    setTrack(track: Track) {
        this.track = track;
        this.map.gpx = track.url;
    }

    previous() {
        // this.loadTrack(this.trackNumber - 1);
    }

    next() {
        // this.loadTrack(this.trackNumber + 1);
    }

}
