import { beforeEach, beforeEachProviders, describe, expect, it, inject } from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MapComponent } from './map.component';

describe('Component: Map', () => {
    let builder: TestComponentBuilder;

    beforeEachProviders(() => [MapComponent]);

    beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
        builder = tcb;
    }));

    it('should inject the component', inject([MapComponent],
        (component: MapComponent) => {
            expect(component).toBeTruthy();
        })
    );

    it('should create the component', inject([], () => {
        return builder.createAsync(MapComponentTestComponent)
            .then((fixture: ComponentFixture<any>) => {
                let query = fixture.debugElement.query(By.directive(MapComponent));
                expect(query).toBeTruthy();
                expect(query.componentInstance).toBeTruthy();
            });
    }));
});

@Component({
    selector: 'lb-test',
    template: '<lb-map></lb-map>',
    directives: [MapComponent]
})
class MapComponentTestComponent {
}

