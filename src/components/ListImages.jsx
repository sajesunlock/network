/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

import { useGet } from "../hook/useGet";

export default function ListImages() {
  const [error, data] = useGet("https://api.unsplash.com/photos/random/?client_id=b8jZoE8Abr8UNpPxhIHt-fhLkIXic7lISEnBhaGG8ok&query=networking&count=12");
  if (data.length === 0) return `error ${error}`;

  return (
    <div className="row m-0">
    { data ?
    data.map((image) => (
        <div className="col-6 col-md-4 p-0 m-0">
          <Link data-toggle="modal" data-target={`#${image.id}`}>
            <img src={image.urls.regular} width="100%" height="100%" alt="" />
          </Link>
          <div className="modal fade" id={`${image.id}`} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <img src={image.urls.regular} width="100%" height="100%" alt="" />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )) : "Loading"}

    </div>
  );
}
