import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../service/dataService";

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function getCommunity() {
        const query = collection(db, "blog");
        const data = await getDocs(query);
        setNews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getCommunity();
}, []);

console.log(news);

  return (
    <div className="container mt-5">
      <dov className="row">
        <div className="col-12">
        <div className="jumbotron jumbotron-fluid bg-dark rounded text-light pb-5 pt-5">
          <div className="container">
            <h1 className="display-4">Actualités</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </div>
        </div>
        </div>
      </dov>
      <div className="row">
        {news.map((i) => (
          <a href={i.link} className="col-12 col-md-4 mt-3">
            <div className="card" style={{ cursor: "pointer", borderRadius: "32px !important" }}>
              <img height={250} src={i.img ? i.img : "https://webfoundation.org/docs/2019/08/Network.png"} className="card-img-top" alt="..." />
              <div className="card-body card-footer">
                <h5 className="card-title">{i.title.substring(0, 50)} ...</h5>
              <p className="card-text">{i.desc.substring(0, 100)} ...</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="row mt-5">
        <div className="col-1 col-md-2 mx-auto">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="/#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link" href="/#">1</a></li>
            <li className="page-item"><a className="page-link" href="/#">2</a></li>
            <li className="page-item"><a className="page-link" href="/#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="/#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
        </div>
      </div>
    </div>
  );
}
