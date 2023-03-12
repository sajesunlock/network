import React from "react";
import AddCommunityForm from "../components/AddCommunityForm";
import Map from "../components/Map";

export default function Lookup() {
  return (
    <div className="container-fluid">
        <div className="row mt-3 p-0">
            <div className="col-8">
                <Map />
            </div>
            <div className="col-4">

              <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h2 className="mb-0">
                        <button className="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Collapsible Group Item #1
                          <span className="badge badge-primary badge-pill float-right">14</span>
                        </button>
                      </h2>
                    </div>

                    <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div className="card-body">
                        Some placeholder content for the first accordion panel.
                        This panel is shown by default, thanks to the <code>.show</code> class.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h2 className="mb-0">
                        <button className="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                          Collapsible Group Item #1
                          <span className="badge badge-primary badge-pill float-right">14</span>
                        </button>
                      </h2>
                    </div>

                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                      <div className="card-body">
                        Some placeholder content for the first accordion panel.
                        This panel is shown by default, thanks to the <code>.show</code> class.
                      </div>
                    </div>
                  </div>
              </div>
              <hr />
              <AddCommunityForm />
            </div>
        </div>
    </div>
  );
}
