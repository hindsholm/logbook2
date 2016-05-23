import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Logbook2AppComponent } from '../app/logbook2.component';

beforeEachProviders(() => [Logbook2AppComponent]);

describe('App: Logbook2', () => {
  it('should create the app',
      inject([Logbook2AppComponent], (app: Logbook2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'Logbook\'',
      inject([Logbook2AppComponent], (app: Logbook2AppComponent) => {
    expect(app.title).toEqual('Logbook');
  }));
});
