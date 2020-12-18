import React,{useState,useEffect} from 'react';

function TestJson() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <ul>
     {
       data && data.length>0 && data.map((item)=>
        <li key={item.id.toString()}>
          {item.title}
        </li>)
     }
    </ul>
  );
}

export default TestJson;