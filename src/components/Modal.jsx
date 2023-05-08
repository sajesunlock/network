import React from "react";

import LoginForm from "./LoginForm";

export default function Modal() {
  return (
    <>
        { /** Button trigger modal -->   */ }
        <button type="button" className="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModal">
        ajouter
        </button>

        { /** Modal -->  */ }
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <LoginForm />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
