import React, { memo } from 'react'

const Countbox = (props)=>{
    console.log(props.title)
    return (
        <div className='container'>
            
        <h1 className='text-center text-balck'>{props.count }</h1>

        </div>
    )
}
export default memo(Countbox);