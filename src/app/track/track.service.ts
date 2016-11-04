import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export interface Track {
    name: string;
    url: string;
}

@Injectable()
export class TrackService {

    static TRACK_URL = 'http://pemba.hindsholm.dk/tracks/';

    constructor(private http: Http) {
    }

    getTracks(): Observable<Track[]> {
        return this.http.get(TrackService.TRACK_URL)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response): Track[] {
        let dom = new DOMParser().parseFromString(res.text(), 'text/html'),
            links = Array.from(dom.links),
            tracks: Track[] = [];
        for (let link of links) {
            let href = link.getAttribute('href'),
                isGpx = href.match(/([^/]+)\.gpx$/);
            if (isGpx) {
                tracks.push({
                    name: isGpx[1].replace(/(\d{4})-?(\d{2})-?(\d{2})(.*)/, '$1-$2-$3$4') || isGpx[1],
                    url: TrackService.TRACK_URL + href
                });
            }
        };
        tracks.sort((a, b) => {
            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });
        return tracks;
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
