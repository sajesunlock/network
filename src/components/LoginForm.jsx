/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const { user } = userCredential;
            window.location.reload();
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            alert("bad email or password try again");
        });
    };

    return (
        <div>
            <main>
                <section>
                    <div>
                        <p> ORC </p>
                        <form>
                            <div className="form-group">
                              <label htmlFor="exampleInputEmail1">Email address</label>
                              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                              <small id="emailHelp" className="form-text text-muted">We&apos;ll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">Password</label>
                              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                              <small id="emailHelp" className="form-text text-muted">8 charactere</small>
                            </div>
                            <button type="submit" onClick={onLogin} className="btn btn-primary btn-block">Login</button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}
export default Login;
