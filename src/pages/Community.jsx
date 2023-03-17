/* eslint-disable consistent-return */
import React, { useState, useEffect } from "react";
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

  console.log(communityId);
  return (
    <div className="container-fuild">
      {data ?
        <ProfileCommunity data={data} />
        :
        "loading"}
    </div>
  );
}
