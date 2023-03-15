import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default function Map({ community, MyComponent }) {
  // console.log(community);
  const handleClick = (e) => {
    const { lat, lng } = e.latlng;
    console.log(lat, lng);
  };
  return (
    <MapContainer
      center={[18.971187, -72.285215]}
      zoom={8}
      scrollWheelZoom={false}
      onClick={handleClick}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MyComponent />
      {community ? community.map((itemPosition) => (
        <Marker position={[itemPosition.lat, itemPosition.long]}>
          <Popup>
          <Link to={`node/${itemPosition.id}`}>{itemPosition.name} <br /></Link>
          </Popup>
        </Marker>
      )) : ""}
    </MapContainer>
  );
}
