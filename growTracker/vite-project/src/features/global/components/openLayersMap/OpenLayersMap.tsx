import React, { useEffect } from 'react';
import { MapContainer } from '../../styles/MapContainer';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Vector as VectorLayer } from 'ol/layer';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';

const Coordinates = [32.109333, 34.855499];

const OpenLayersMap = () => {
  useEffect(() => {
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [ 10,10],
        zoom: 3, // זום נוכחי
      }),
    });

    // יצירת מקור ושכבת וקטורים להוספת הסימון (Marker)
    const vectorSource = new VectorSource({
      features: [new Feature(new Point([34, 1]))],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: new Style({
        image: new CircleStyle({
          radius: 8,
          fill: new Fill({ color: 'red' }),
          stroke: new Stroke({ color: 'white', width: 2 }),
        }),
      }),
    });

    map.addLayer(vectorLayer);

    return () => {
      map.dispose();
    };
  }, []);

  return <MapContainer id="map"></MapContainer>;
};

export default OpenLayersMap;
