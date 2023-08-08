import Logo from "../assets/images/car-story-logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../utils/users";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const validateUser = (e) => {
    e.preventDefault();

    const encodedPass = window.btoa(password);

    let userFound = [];
    users.map((user) => {
        if(user.username == username) {
            userFound.push(user);
            if(user.encodedPass() == encodedPass) {
                navigate("/Home");
            } else {
              alert("Invalid Password")
            }
        }
    })
    if(userFound.length < 1) {
        alert("Invalid User Credentials")
    }
    setUsername(""); setPassword("");
  }

  return (
    <>
      <div className="container-fluid bg-light h-100vh">
        <div className="row h-100">
          <div className="container">
            <div className="row h-100 d-flex align-items-center">
              <div className="col-md-4 offset-md-4">
                <div className="login-container bg-dark border">
                  <form className="text-center">
                    <img
                      className="my-4"
                      src={Logo}
                      width={"70%"}
                      alt="The Car Story Logo"
                    />
                    <h1 className="h3 text-white mb-3 nunito-regular">
                      Please sign in
                    </h1>

                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        placeholder="Enter Username"
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <label htmlFor="username">Enter Username</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                    <button
                      className="w-100 btn btn-lg btn-primary"
                      type="submit"
                      onClick={(event) => validateUser(event)}
                    >
                      Sign in
                    </button>
                    <p className="mt-5 mb-3 text-muted">
                      © The Car Story - 2023
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <main className="form-signin">
        
      </main> */}
    </>
  );
};

export default Login;
