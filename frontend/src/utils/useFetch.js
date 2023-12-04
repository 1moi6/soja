import { useContext } from "react";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";
import AuthContext from "../context/AuthContext";

let useFetch = () => {
  let { authtokens, setAuthtokens, setUser } = useContext(AuthContext);

  let baseURL = "http://127.0.0.1:8000";

  let originalRequest = async (url, config) => {
    url = `${baseURL}${url}`;
    let response = await fetch(url, config);
    let data = {};
    try {
      data = await response.json();
    } catch (error) {
      data = {};
    }
    return { response, data };
  };

  let refreshToken = async (authtokens) => {
    let response = await fetch(baseURL + "/auth/api/token/refresh/", {
      method: "POST",
      body: JSON.stringify({ refresh: authtokens.refresh }),
    });
    let data = await response.json();
    localStorage.setItem("authtokens", JSON.stringify(data));
    setAuthtokens(data);
    let decoded = jwtDecode(authtokens.access);
    setUser({
      email: decoded.email,
      fname: decoded.firstname,
      lname: decoded.lastname,
    });
    return data;
  };

  let callFetch = async (url, config) => {
    const user = jwtDecode(authtokens.access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (isExpired) {
      authtokens = await refreshToken(authtokens);
    }

    config["headers"] = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authtokens?.access}`,
    };

    let { response, data } = await originalRequest(url, config);
    return { response, data };
  };

  return callFetch;
};

export default useFetch;
