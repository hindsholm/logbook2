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
        let center = ol.proj.fromLonLat([10.1, 56.7], 'EPSG:3857');
        console.log(center);
        this.map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: center,
                zoom: 8
            })
        });
    }

}
