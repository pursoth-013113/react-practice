import React from "react";

const ListAndKey = () => {
  let data = [
    {
      _id: 1,
      name: "Pursothaman",
      email: "Pursothaman@gmail.com",
      age: 22,
      address: "abc colony",
    },
    {
      _id: 2,
      name: "Ram",
      email: "g4205622@gmail.com",
      age: 24,
      address: "zzz colon",
    },
    {
      _id: 3,
      name: "Pursothaman",
      email: "asdfgh@gmail.com",
      age: 27,
      address: "RRR colony",
    },
    {
      _id: 4,
      name: "Pursothaman",
      email: "abcd@gmail.com",
      age: 26,
      address: "YYY colony",
    },
  ];

  // const  forEachData = data.forEach()

  // const mapedData = data.map()

  // console.log(mapedData);

  // data = [];

  return (
    <div>
        {data?.length >= 1 ? (
          data?.map(({_id, name, email, age, address}, index) => (
            <div key = {_id}>
              <h1>Name: {name}</h1>
              <h1>Email ID: {email}</h1>
              <h1>Age: {age}</h1>
              <h1>address: {address}</h1>
            </div>
          
          ))
        )  : (
          <h1>No data found</h1>
        )   
        }
      
    </div>
  )
};

export default ListAndKey;
