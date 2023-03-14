import React from "react";

export default function ItemCommunity({ community }) {
  return (
    <div>
    {community ? community.map((item) => (
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button className="btn btn-block text-left" type="button" data-toggle="collapse" data-target={`#${item.id}`} aria-expanded="true" aria-controls="collapseOne">
                {item.name}
                <span className="badge badge-primary badge-pill float-right">antenne {item.id}</span>
              </button>
            </h2>
          </div>
          <div id={item.id} className="collapse">
            <div className="card-body">
              {item.desc}
            </div>
          </div>
        </div>
      </div>
    )) : ""}
    </div>
  );
}
