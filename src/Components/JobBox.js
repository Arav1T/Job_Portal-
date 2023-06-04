import React from 'react'
import { Link } from 'react-router-dom'


export default function JobBox(props) {
  let OnclickInfo=()=>{
    props.content(`${props.title}`,`${props.keys}`)

  }
  return (
    
    <>
    <div className='bg-slate-300 hover:bg-slate-500 hover:shadow-lg border-2 border-gray-800 hover:shadow-slate-700 mt-2 w-3/4' >


    <Link to={`/${props.keys}`} >
    <div onClick={OnclickInfo} id={props.title} >
    <h3> {props.title} </h3>
     <p> {props.description} </p> 
     <i> {props.tag} </i> <br />
     <b> {props.stiped} </b>
     <p> {props.duration} </p>
     <p> {props.info} </p>

    </div>
    </Link>
    </div>
    </>
    
    
  )
}
