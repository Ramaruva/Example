import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function TaskPage() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const getTasks = () => {
    axios
      .get(`https://ajmalmiyan-json-mocker.herokuapp.com/tasks/2`)
      .then((res) => setData(res.data));
  };
  useEffect(() => {
    getTasks();
  }, []);
  const {title}=data;
  return (
    <>
      <h1>hi</h1>
       <h1>{title}</h1>
    </>
  );
}
export { TaskPage };
