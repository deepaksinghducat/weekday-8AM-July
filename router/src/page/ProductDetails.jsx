import React from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

function ProductDetails() {

 const params= 	useParams();

 console.log(params);
  const navigate = useNavigate();

//   navigate('/')
useEffect(() => {
	//navigate('/')
},[params])

  return (
	<div>ProductDetails</div>
  )
}

export default ProductDetails