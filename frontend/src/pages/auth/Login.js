import React, { useState, useEffect } from "react";
import { auth, googleAuthProvider } from "../../firebase";
import { toast } from "react-toastify";
import { Button } from "antd";
import { MailOutlined, GoogleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../slices/authSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";
import config from "../../config";

const createOrUpdateUser = async (user) => {
  return await axios.post(
    `${config.API_URL}/create-or-update-user`,
    {},
    {
      headers: {
        user,
      },
    }
  );
};

const Login = () => {
  const [email, setEmail] = useState("vikashkumar04081999@gmail.com");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  const { authSlice } = useSelector((state) => ({ ...state }));
  const data = localStorage.getItem("data");
  console.log(data.email);
  useEffect(() => {
    if (authSlice.token && authSlice) history("/");
  }, [authSlice]);

  let dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.table(email, password);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      // console.log(result);
      const { user } = result;
      const idTokenResult = await user.accessToken;
      // console.log(idTokenResult);

      createOrUpdateUser(idTokenResult)
        .then((res) => {
          // console.log(res);

          localStorage.setItem(
            "data",

            JSON.stringify({
              email: res.data.email,
              token: idTokenResult,
              name: res.data.name,
              role: res.data.role,
              id: res.data._id,
            })
          );

          dispatch(
            login({
              email: res.data.email,
              token: idTokenResult,
              name: res.data.name,
              role: res.data.role,
              id: res.data._id,
            })
          );
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };

  const googleLogin = async () => {
    signInWithPopup(auth, googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();
        dispatch(login({ email: user.email, token: idTokenResult }));
        history("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          autoFocus
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
        />
      </div>

      <br />
      <Button
        onClick={handleSubmit}
        type="primary"
        className="mb-3"
        block
        shape="round"
        icon={<MailOutlined />}
        size="large"
        disabled={!email || password.length < 6}
      >
        Login with Email/Password
      </Button>
    </form>
  );

  return (
    <div className="container p-5" style={{ position: "fixed", top: "10%" }}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <h4>Login</h4>
          )}
          {loginForm()}

          <Button
            onClick={googleLogin}
            type="danger"
            className="mb-3"
            block
            shape="round"
            icon={<GoogleOutlined />}
            size="large"
          >
            Login with Google
          </Button>

          <Link
            to="/forgot/password"
            className="float-right "
            style={{ color: "white" }}
          >
            Forgot Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
