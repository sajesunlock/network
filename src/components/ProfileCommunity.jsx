import React from "react";
import ListImages from "./ListImages";

export default function ProfileCommunity({ data }) {
    console.log(data);
  return (
    <div className="container mt-3">
        <div className="row">
            <div className="col-12 bg-dark text-light rounded-lg">
                <div className="row">
                    <div className="col-md-4 col-12 mt-3">
                        <img className="rounded-circle col-12" src="https://www.shutterstock.com/image-vector/creative-network-concept-logo-design-260nw-633479948.jpg" alt="" />
                    </div>
                    <div className="col-md-8 col-12 display-4 mt-5">
                        {data.name}
                    </div>

                    <div className="col-12 mt-3">
                    <hr />
                        <h4>About us</h4>
                        <p style={{ fontSize: "1.1rem" }}>
                            {data.desc}
                        </p>
                    <hr />
                    </div>
                    <ListImages />
                </div>
            </div>
        </div>
    </div>
  );
}
