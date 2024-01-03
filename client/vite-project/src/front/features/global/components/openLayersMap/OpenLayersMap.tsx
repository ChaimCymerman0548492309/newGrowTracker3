import React, { useEffect } from 'react';
import { MapContainer } from '../../styles/MapContainer'
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';

const OpenLayersMap = () => {
  useEffect(() => {
    const map = new Map({
      target: 'map', // זהו ID של האלמנט שבו יוצג המפה
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });

    return () => {
      // מניח שכאשר הרכיב נעצר, תרצה להשמיד את המפה
      map.dispose();
    };
  }, []); // הוסף תלות כפי שצריך

  return (
    <MapContainer id="map">
      {/* אם רוצים להוסיף דברים נוספים לתוך המפה, נוסיף כאן */}
    </MapContainer>
  );
};

export default OpenLayersMap;
