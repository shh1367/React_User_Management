import React, { memo } from 'react'
const CountButton = (props) => {

    console.log(props.title)
    return(

        <div className='container text-center'>
            <button className='btn btn-info' onClick={props.setcount}>{props.title}</button>


        </div>
    )
}

export default memo(CountButton);