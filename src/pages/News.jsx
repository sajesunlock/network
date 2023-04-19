import React from "react";

export default function News() {
  return (
    <div className="container mt-5">
      <h4 className="titre">Latest News</h4>
      <div className="row">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <div className="col-6 col-md-4 mt-3">
            <div className="card" style={{ cursor: "pointer" }}>
              <img src="https://webfoundation.org/docs/2019/08/Network.png" className="card-img-top" alt="..." />
              <div className="card-body card-footer">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
