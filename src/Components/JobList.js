import React from 'react'
import JobBox from './JobBox'
import { Link } from 'react-router-dom'
   

export default function JobList(props) {
    
    const content =(value,keys)=>{
        
        console.log(value)
        props.contents(value,keys)
    }
    return (
        
         <div>
        <Link to='/'>
        {props.list.map((data,i)=>{return <JobBox title={data.title} description={data.description} tag={data.tag} stiped={data.stiped} duration={data.duration} info={data.info} key={i} keys={`React${i}`} content={content}/>})}
        </Link>
        </div> 

        
    )
}
