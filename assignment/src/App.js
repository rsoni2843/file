import React, { useState } from "react";
import "./App.css";
import Content from "./component/Content";
import Navbar from "./component/Navbar";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function getData() {
    setLoading(true);
    fetch(`https://reqres.in/api/users?page=1&per_page=9`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }

  return (
    <div className="App">
      <Navbar triggerData={getData} />
      <Content error={error} loading={loading} data={data} />
    </div>
  );
}

export default App;
