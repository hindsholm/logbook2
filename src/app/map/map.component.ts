import { Component, OnInit } from '@angular/core';
import { Coordinate, layer, Map, proj, source, View } from 'openlayers';

@Component({
    selector: 'app-map',
    template: '<div id="map" class="map"></div>',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    map: Map;
    center: Coordinate = [10.1, 56.7];

    ngOnInit() {
        let landMap = new layer.Tile({
            source: new source.OSM()
        });
        let seaMap = new layer.Tile({
            source: new source.XYZ({
                url: 'http://t1.openseamap.org/seamark/{z}/{x}/{y}.png',
                projection: undefined
            })
        });
        let view = new View({
            center: proj.fromLonLat(this.center, 'EPSG:3857'),
            zoom: 12
        });
        this.map = new Map({
            target: 'map',
            layers: [landMap, seaMap],
            view: view
        });
    }

}
