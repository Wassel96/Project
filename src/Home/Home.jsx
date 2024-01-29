import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [loginemail, setloginemail] = useState("");
  const [loginpw, setloginpw] = useState("");
  const [registreEmail, setregistreEmail] = useState('')
  const [registrePw, setregistrePW] = useState('')
  const [errorHandler, setError] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registreEmail,
        registrePw
      );
      console.log(user);
    } catch (error) {
      setError(error?.code);
      console.log(error?.code);
    }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginemail, loginpw);
      console.log(user);
    } catch (error) {
      console.log(error?.message);
      setError(error?.code);
      console.log(error?.code);
    }
  };

  function handleError() {
    switch (errorHandler) {
      case "auth/email-already-in-use":
        return "This email is already in use";
        break;
      case "auth/invalid-email":
        return "Invalid email";
        break;
      case "auth/missing-password":
        return "Password is mandatory";
        break;
      case "auth/missing-email":
        return "Email is mandatory";
        break;
      case "auth/weak-password":
        return "Password must be atleast 6 characters.";
        break;
      case "auth/wrong-password":
        return "Wrong password.";
        break;
      default:
        return errorHandler;
        break;
    }
  }



  return (

    <div className="registerLog">
      {/* <h2>registre</h2>
          <h4>email: </h4>
          <input type="text" onChange={(e) => setregistreEmail(e.target.value)} value={registreEmail} />
          <br />
          <h4>password: </h4>
          <input type="password" onChange={(e) => setregistrePW(e.target.value)} value={registrePw} />
          <br />
          <button onClick={register}>registre</button>
          <p>{handleError()}</p> */}



      <div className="login-box">

        <div className="container">
          <h2>login</h2>
          <div className="login-form">
            <h4>email: </h4>
            <input type="email" onChange={(e) => setloginemail(e.target.value)} value={loginemail} />
            <br />
            <h4>password: </h4>
            <input type="password" onChange={(e) => setloginpw(e.target.value)} value={loginpw} />
            <br />
            <button className="btn" onClick={login}>login</button>
            <p>{handleError()}</p>
          </div>
        </div>
        <div className="mobile-img ">

        </div>
      </div>

    </div>
  )
}

export default Home