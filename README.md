# Logbook - a sailing logbook

A sailing logbook featuring (well, not yet)

- GPX files for showing tracks on Openlayers map
- Analysis of tracks using Google Charts
- Historical weather data

The application is based on Angular2.

## Build

Because of an incorrect type definition for 
[ol.source.XYZ](http://openlayers.org/en/latest/apidoc/ol.source.XYZ.html), you need to change the definition in 
`typings/browser/ambient/openlayers/index.d.ts` to 

    class XYZ {
        constructor(options: any);
    }

