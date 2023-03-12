import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

export default function Map() {
  return (
    <MapContainer center={[18.971187, -72.285215]} zoom={8} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[19.7, -72.6]}>
        <Popup>
        Limbe Carte <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
