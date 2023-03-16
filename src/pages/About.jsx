import React from "react";

export default function About() {
  return (
    <div className="container rounded bg-light p-5">
      <div className="row">
        <div className="col-md-8 col-12">
          <h2>Hi, we&lsquo;re ORC.</h2>
          <p className="pt-2 pl-3 text-about">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Animi suscipit cupiditate vitae dolore quibusdam ipsam mollitia aliquam
             at ea facilis assumenda quasi nulla,
            maxime consequuntur quia ex nesciunt rem ipsum. Dolore explicabo
             dolores nesciunt nobis totam, odit velit excepturi distinctio.
          </p>
        </div>
        <div className="col-md-4 col-12">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4350/4350908.png"
            alt=""
            width="100%"
          />
        </div>
        <div className="col-md-8">
          <img
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MjI3MDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Nzg4OTYyOTI&ixlib=rb-4.0.3&q=80&w=1080"
            alt=""
            width="100%"
            className="rounded-pill p-4"
          />
        </div>
        <div className="col-md-4 mt-4">
          <h2>Our Impact</h2>
            <div className="col-12 mb-4">
                <h6>We believe in sharing, in giving and in doing the right thing:
                </h6>
            </div>

              <div className="col-12 pl-4">
                <ol>
                  <li><i className="fa fa-check-circle-o" aria-hidden="true" /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li><i className="fa fa-check-circle-o" aria-hidden="true" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </li>
                </ol>
              </div>

        </div>
      </div>
    </div>
  );
}
