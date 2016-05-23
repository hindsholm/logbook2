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
        this.map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                }),
                new ol.layer.Tile({
                    source: new ol.source.XYZ({
                        url: 'http://t1.openseamap.org/seamark/{z}/{x}/{y}.png'
                    })
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat(this.center, 'EPSG:3857'),
                zoom: 12
            })
        });
    }

}
