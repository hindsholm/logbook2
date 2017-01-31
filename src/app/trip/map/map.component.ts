import { Component, Input, OnInit } from '@angular/core';
import * as ol from 'openlayers';

@Component({
    selector: 'app-map',
    template: '<div id="map" class="map"></div>',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    map: ol.Map;
    trackLayer: ol.layer.Vector;

    constructor() {
        this.trackLayer = new ol.layer.Vector({
            source: new ol.source.Vector(),
            renderOrder: null
        });
    }

    ngOnInit() {
        let land = new ol.layer.Tile({
            // source: new ol.source.OSM()
            source: new ol.source.BingMaps({
                key: 'AvzjjrvdUbpbaSZt6mBxjJf6-edLi-QZ6FBVuMz1KWO90sNeGqG8mlpJNoOcr8zB',
                imagerySet: 'AerialWithLabels',
                maxZoom: 19
            })
        });
        let sea = new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: 'http://t1.openseamap.org/seamark/{z}/{x}/{y}.png',
                projection: undefined
            })
        });
        let view = new ol.View({
            center: ol.proj.fromLonLat([10.1, 56.7], 'EPSG:3857'),
            zoom: 12
        });
        this.map = new ol.Map({
            target: 'map',
            layers: [land, sea, this.trackLayer],
            view: view
        });
    }

    loadTrack(url: string) {
        let trackSrc = new ol.source.Vector({
            format: new ol.format.GPX(),
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
