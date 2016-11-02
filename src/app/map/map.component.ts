import { Component, Input, OnInit } from '@angular/core';
import { Map, View, format, layer, proj, source } from 'openlayers';

@Component({
    selector: 'app-map',
    template: '<div id="map" class="map"></div>',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    map: Map;
    trackLayer: layer.Vector;

    constructor() {
        this.trackLayer = new layer.Vector({
            source: new source.Vector(),
            renderOrder: null
        });
    }

    ngOnInit() {
        let land = new layer.Tile({
            source: new source.OSM()
        });
        let sea = new layer.Tile({
            source: new source.XYZ({
                url: 'http://t1.openseamap.org/seamark/{z}/{x}/{y}.png',
                projection: undefined
            })
        });
        let view = new View({
            center: proj.fromLonLat([10.1, 56.7], 'EPSG:3857'),
            zoom: 12
        });
        this.map = new Map({
            target: 'map',
            layers: [land, sea, this.trackLayer],
            view: view
        });
    }

    loadTrack(url: string) {
        let trackSrc = new source.Vector({
            format: new format.GPX(),
            url: url
        });
        trackSrc.once('change', (e) => {
            if (this.map) {
                this.map.getView().fit(trackSrc.getExtent(), this.map.getSize());
            }
        });
        this.trackLayer.setSource(trackSrc);
    }

    @Input()
    set gpx(url: string) {
        this.loadTrack(url);
    }

    get gpx() {
        return <string> this.trackLayer.getSource().getUrl();
    }

}
