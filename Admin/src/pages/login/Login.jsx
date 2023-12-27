import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";          //use to navigate
import { AuthContext } from "../../context/AuthContext";  
import "./login.scss";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { user,loading, error, dispatch } = useContext(AuthContext); //

  console.log(user)
  const navigate = useNavigate()      //allows you to programmatically navigate to different routes in your application

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));   //example, if the id of the username input is "username", the code will update credentials.username with the new value entered by the user.
  };

  const handleClick = async (e) => {       //axios can use only in async 
    e.preventDefault();      //cann't lord given page     
    dispatch({ type: "LOGIN_START" });   //dispatch() fun cl to the type: "LOGIN_START" and lord that data
    try {
        const res = await axios.post("/auth/login", credentials);         //sends a POST request to the /auth/login endpoint with the credentials object as the payload. The credentials object contains the username and password entered by the user
        if (res.data.isAdmin) {
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });   //The res.data.details represents the data returned from the server after a successful login
            navigate("/")       //useNavigate hook (provided by React Router) to redirect the user to the home page ("/")
        }
        else {
            dispatch({
                type: "LOGIN_FAILURE", payload: { message: "You are not allowed!" },
            });
        }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;