
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'

// import 'leaflet/dist/leaflet.css';


export default function Map({ children, interactive = true, ...props }) {
  return (
    <MapContainer
      center={[-27.2092052,-49.6401092]}
      zoom={15}
      style={{ width: '100%', height: '100%' }}
      dragging={interactive}
      touchZoom={interactive}
      zoomControl={interactive}
      scrollWheelZoom={interactive}
      doubleClickZoom={interactive}
      {...props}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-122.4241,37.78,14.25,0,60/600x600?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
      />
      {children}
    </MapContainer>
  );
}
