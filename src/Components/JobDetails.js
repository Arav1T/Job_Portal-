import React from 'react'

export default function JobDetails(props) {
  // console.log(props.detailsValue.title)
  return (
    <div>
      <h3> {props.detailsValue.title} </h3>
     <p> {props.detailsValue.description} </p> 
     <i> {props.detailsValue.tag} </i> <br />
     <b> {props.detailsValue.stiped} </b>
     <p> {props.detailsValue.duration} </p>
     <p> {props.detailsValue.info} </p>
    </div>
  )
}
