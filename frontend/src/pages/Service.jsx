import React,{useState} from 'react'

const Service = () => {
  const [show,setShow] =useState(true);
  const toggleShow=() => {
    setShow(show===true?false:true)
  }
  return (
    <div>
      <button onClick={toggleShow}>{show?"Hide":"Show"}</button>
      {show&&<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit hic magnam aliquam omnis labore a recusandae mollitia unde veritatis ducimus similique vel facere at quas voluptatibus repellat, et ipsa voluptas.</h1>}
      <h1>Lorem ispum.</h1>
    </div>
  )
}

export default Service
