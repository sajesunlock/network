import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import db from "../service/dataService";
import AddCommunityForm from "../components/AddCommunityForm";
import ItemCommunity from "../components/ItemCommunity";
import Map from "../components/Map";
import Modal from "../components/Modal";

export default function Lookup() {
  const [community, setCommunity] = useState(null);
  const [isLogging, setisLogging] = useState(false);

    useEffect(() => {
        async function getCommunity() {
            const query = collection(db, "community");
            const data = await getDocs(query);
            setCommunity(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getCommunity();
    }, []);

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            // const uid = user.uid;
            setisLogging(true);
            // ...
            // console.log("uid", uid)
          } else {
            // User is signed out
            // ...
            console.log("user is logged out");
          }
      });
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
    // Sign-out successful.
        // navigate("/lookup/community");
        window.location.reload();
        console.log("Signed out successfully");
    }).catch((error) => {
    // An error happened.
    });
  };

  return (
    <div className="container-fluid">
        <div className="row mt-3 p-0">
            <div className="col-8">
                <Map community={community} />
            </div>
            <div className="col-4">
              <ItemCommunity community={community} />
              <hr />
              <h3 className="titre">Ajouter community</h3>
              {isLogging ? (
                <>
                <AddCommunityForm />
                <button onClick={handleLogout} className="btn btn-danger btn-block">Logout</button>
                </>
               ) :
              <Modal /> }
            </div>
        </div>
    </div>
  );
}
