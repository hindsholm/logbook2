import { Component, HostListener, OnInit } from '@angular/core';
import { Coordinate, layer, Map, proj, source, View } from 'openlayers';

@Component({
    selector: 'app-map',
    template: '<div id="map" class="map" [ngStyle]="style"></div>',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    map: Map;
    center: Coordinate = [10.1, 56.7];
    style = { 'height.px': 500 };

    ngOnInit() {
        this.setHeight(window.innerHeight);
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

    // Ugly hack for dynamically resizing the map div

    setHeight(height: number) {
        this.style['height.px'] = height - 100;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.setHeight(event.target.innerHeight);
    }

}
