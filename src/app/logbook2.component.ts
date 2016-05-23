import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { MdToolbar } from '@angular2-material/toolbar';
import { MapComponent } from './map';

@Component({
  selector: 'lb-app',
  providers: [ROUTER_PROVIDERS],
  directives: [ROUTER_DIRECTIVES, MdToolbar, MapComponent],
  template:
      `<md-toolbar color="primary">
          <span>{{title}}</span>
      </md-toolbar>
      <lb-map></lb-map>`
})
export class Logbook2AppComponent {
  title = 'Logbook';
}
