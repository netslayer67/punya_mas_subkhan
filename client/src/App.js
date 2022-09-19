import { Routes, Route, Navigate } from "react-router-dom";

import React, { useContext, useEffect } from "react";
import { UserContext } from "./context/userContext";

import Navbars from "./component/Navbar";
import Homepages from "./pages/Homepages";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import Details from "./pages/Details";
import LoginForm from "./component/LoginForm";
import DetailAccount from "./pages/detail-account";
import AddPlan from "./pages/add-Plan";
import AdminPanel from "./pages/admin-panel";
import Listfilms from "./pages/Listfilms";
import AddFilm from "./pages/add-film";

import { API, setAuthToken } from "./config/api";

// init token on axios every time the app is refreshed
// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }

function App() {
  const [state, dispatch] = useContext(UserContext)

  // useEffect(() => {
  //   // Redirect Auth
  //   if (state.isLogin === false) {
  //     Navigate("/signin");
  //   } else {
  //     if (state.user.status === "admin") {
  //       Navigate("/complain-admin");
  //     } else if (state.user.status === "user") {
  //       Navigate("/");
  //     }
  //   }
  // }, [state]);

  // const checkUser = async () => {
  //   try {
  //     const response = await API.get("/check-auth");

  //     // If the token incorrect
  //     if (response.status === 404) {
  //       return dispatch({
  //         type: "AUTH_ERROR",
  //       });
  //     }

  //     // Get user data
  //     let payload = response.data.data.user;
  //     // Get token from local storage
  //     payload.token = localStorage.token;

  //     // Send data to useContext
  //     dispatch({
  //       type: "USER_SUCCESS",
  //       payload,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   checkUser();
  // }, []);

  async function checkAuth() {
    try {
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      const config = {
        Headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      };

      await API.get("/login", config, { validateStatus: () => true })
        .then((response) => {
          const payload = response.data.data.user;
          payload.token = localStorage.token;
          console.log("ini data user", payload);
          if (!payload) {
            return dispatch({
              type: "LOGIN_ERROR",
            });
          }

          dispatch({
            type: "LOGIN_SUCCESS",
            payload,
          });
          console.log("ini state", state);
        })
        .catch((err) => {
          dispatch({
            type: "LOGIN_ERROR",
          });
          console.log(state);
        });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (localStorage.token) {
      checkAuth();
    }
  }, []);

  return (
    <>
      <Navbars />
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/signin" component={<LoginForm />} />
        <Route path="/play/:id" element={<Details />} />
        <Route path="/account/:id" element={<DetailAccount />} />
        <Route path="/payment" element={<AddPlan />} />
        <Route path="/list-transaction" element={<AdminPanel />} />
        <Route path="/list-film" element={<Listfilms />} />
        <Route path="/add-film" element={<AddFilm />} />
      </Routes>
    </>
  );
}

export default App;
