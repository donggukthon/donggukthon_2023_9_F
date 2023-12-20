import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { loginState } from "../../store/atoms";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const setLoginState = useSetRecoilState(loginState);

  useEffect(() => {
    // Parse the URL to get the JWT
    const jwt = new URL(window.location.href).searchParams.get("jwt");

    if (jwt) {
      // If JWT exists, set it in the headers
      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

      // Set login state to true
      setLoginState(true);

      // Redirect to the home screen
      navigate("/");
      console.log("로그인!");
    }
  }, [navigate, location.search, setLoginState]);

  return (
    <div>
      {/* You can add a loading spinner or other UI elements here */}
      Logging in...
    </div>
  );
};

export default Login;
