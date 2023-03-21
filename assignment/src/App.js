import React, { useState } from "react";
import "./App.css";
import Content from "./component/Content";
import Navbar from "./component/Navbar";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const api = `https://reqres.in/api/users?page=1&per_page=9`;

  // Fetching data here
  const getData = async () => {
    setLoading(true);
    try {
      let res = await fetch(api);
      let data = await res.json();
      // setting the data here we get in response from api
      setData(data.data);
      setLoading(false);
      setError(false);
    } catch (err) {
      console.log(err);
      // If there is error in our application while fetching api
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Navbar triggerData={getData} />
      <Content error={error} loading={loading} data={data} />
    </div>
  );
}

export default App;
