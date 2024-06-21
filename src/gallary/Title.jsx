import React, { memo } from 'react'

const Title = (props)=>{

    console.log(props.title)

    return(

        <div className='text-center'>
        <h1 className='text-balck'>{props.title}</h1>
        </div>


    );

}

export default memo(Title)

