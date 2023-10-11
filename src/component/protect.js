import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fbAuth } from "../config/fbmthod";

export default function Protect({screen}) {
  // const {screen} = props;
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();


  let checkAuth = () => {
    setLoader(true);
  
    fbAuth().then(res=>{
    console.log(res,"res")
    setLoader(false);
  }).catch(err=>{
    setLoader(false);
    navigate("/login");
    console.log(err,"err")

  })

  }

useEffect(()=>{
  checkAuth()
},[])

  return loader?(

  <>
    <h1>
      loading...
    </h1>
  </>
  ) :(
    <screen/>
  )
  
}

