import React from 'react'
import Header from './Header'
import { useState } from 'react';

export default function About() {
  const [data, setData] = useState([]);

  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setData(data))

  return (
      <>
      <table >
        {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price} </td>
              <td>{}</td>
              <td><img height="50px" src={item.image}/></td>
             </tr>
          )
        )
        }
        </table>
         </>
  );
}
