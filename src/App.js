import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect, useState } from "react";
import './App.css';

function App() {

  const [data, setData] = useState({});

   const getDataDetails = async () => {      
    const apiURL ="https://randomuser.me/api";
    await axios.get(apiURL)
      .then((res) => {
      console.log(res);
      setData(res.data.results[0]);
    })
    .catch((err) => {
      console.log(err)
    });
  }

  useEffect(() => {
    getDataDetails();
  }, []);

  const handleRefresh = () => {
    getDataDetails();
  }


  return (
    <div className="">     
      <div className="container w-25 mx-auto mt-25  bg-info p-2">          
        <h3 className=" text-white">Full Name</h3>
        <h5 className="text-white mb-4">{data?.name?.title} {data?.name?.first} {data?.name?.last}</h5>
        <h3 className="text-white">Email Address</h3>
        <h5 className="text-white mb-3">{data?.email}</h5>
        <button type="button" className="btn btn-danger text-white  fw-bold" onClick={handleRefresh}>REFRESH</button>          
      </div>      
    </div>
  );
}

export default App;
