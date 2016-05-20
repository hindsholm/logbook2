import { Component, OnInit } from '@angular/core';
import * as ol from 'openlayers';

@Component({
    moduleId: module.id,
    selector: 'map',
    templateUrl: 'map.component.html',
    styleUrls: ['map.component.css']
})
export class MapComponent implements OnInit {

    map: ol.Map;

    ngOnInit() {
        this.map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.MapQuest({ layer: 'sat' })
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat(<ol.Coordinate>[10.1, 56.7], 'EPSG:3857'),
                zoom: 8
            })
        });
    }

}
