import React from "react";

import { useGet } from "../hook/useGet";

export default function ListImages() {
    const [error, data] = useGet("https://api.unsplash.com/photos/random/?client_id=b8jZoE8Abr8UNpPxhIHt-fhLkIXic7lISEnBhaGG8ok&query=networking&count=10");
    if (data.length === 0) return `error ${error}`;
  return (
    <div className="row">
    { data ?
    data.map((image) => (
        <div className="col-3 p-0 m-0">
            <img src={image.urls.regular} width="100%" height="350px" alt="" />
        </div>
    )) : "Loading"}
    </div>
  );
}
