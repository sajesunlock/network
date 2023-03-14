/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const { user } = userCredential;
            navigate("/home");
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    };

    return (
        <div>
            <main>
                <section>
                    <div>
                        <p> ORC </p>
                        <form>
                            <div>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                            <input
                              id="email-address"
                              name="email"
                              type="email"
                              required
                              placeholder="Email address"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            </div>

                            <div>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                  id="password"
                                  name="password"
                                  type="password"
                                  required
                                  placeholder="Password"
                                  onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div>
                                <button
                                  onClick={onLogin}
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                        <p className="text-sm text-white text-center">
                            No account yet? {" "}
                            <NavLink to="/signup">
                                Sign up
                            </NavLink>
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
export default Login;
