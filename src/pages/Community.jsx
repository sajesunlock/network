/* eslint-disable consistent-return */
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import ProfileCommunity from "../components/ProfileCommunity";
import db from "../service/dataService";

export default function Community() {
  const { communityId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getItem() {
      const docRef = doc(db, "community", communityId);
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log(docSnap.data());
            setData(docSnap.data());
        }
        console.log("Document does not exist");
      } catch (error) {
        console.log(error);
        return error;
      }
    }
  getItem();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(communityId);
  return (
    <div className="container-fuild">
      {data ?
        <ProfileCommunity data={data} />
        :
        "loading"}
        <Helmet>
          <title>
            Observatoire des Réseaux Communautaires |
             Cartographie du réseau Du Réseaux Communautaires
          </title>
          <meta
            name="description"
            content="liste des réseaux communautaires d'Haïti et leurs adresses."
          />
        </Helmet>
    </div>
  );
}
