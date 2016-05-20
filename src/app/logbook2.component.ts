import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { MdToolbar } from '@angular2-material/toolbar';
import { MapComponent } from './map'

@Component({
  selector: 'logbook2-app',
  providers: [ROUTER_PROVIDERS],
  directives: [ROUTER_DIRECTIVES, MdToolbar, MapComponent],
  template:
      `<md-toolbar color="primary">
          <span>{{title}}</span>
      </md-toolbar>
      <map></map>`
})
export class Logbook2AppComponent {
  title = 'logbook2 works!';
}
