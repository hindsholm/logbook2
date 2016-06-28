import { Component, OnInit } from '@angular/core';
import * as ol from 'openlayers';

@Component({
    moduleId: module.id,
    selector: 'lb-map',
    templateUrl: 'map.component.html',
    styleUrls: ['map.component.css']
})
export class MapComponent implements OnInit {

    map: ol.Map;
    center: ol.Coordinate = [10.1, 56.7];

    ngOnInit() {
        let landMap = new ol.layer.Tile({
            source: new ol.source.OSM()
        });
        let seaMap = new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: 'http://t1.openseamap.org/seamark/{z}/{x}/{y}.png'
            })
        });
        let track = new ol.layer.Vector({
            source: new ol.source.Vector({
                url: 'app/tracks/20140905.gpx',
                format: new ol.format.GPX()
            }),
        });
        let view = new ol.View({
            center: ol.proj.fromLonLat(this.center, 'EPSG:3857'),
            zoom: 12
        });
        this.map = new ol.Map({
            target: 'map',
            layers: [landMap, seaMap, track],
            view: view
        });
    }

}
