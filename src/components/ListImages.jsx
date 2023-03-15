import React from "react";

import { useGet } from "../hook/useGet";

export default function ListImages() {
    const [error, data] = useGet("https://api.unsplash.com/photos/random/?client_id=b8jZoE8Abr8UNpPxhIHt-fhLkIXic7lISEnBhaGG8ok&query=networking&count=12");
    if (data.length === 0) return `error ${error}`;
  return (
    <div className="row m-0">
    { data ?
    data.map((image) => (
        <div className="col-6 col-md-4 p-0 m-0">
            <img src={image.urls.regular} width="100%" height="350px" alt="" />
        </div>
    )) : "Loading"}
    </div>
  );
}
