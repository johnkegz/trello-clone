import React from 'react'
import '../styles/styles.css'

function Column(props) {console.log(props)
    return (
        <div className='columnContainer'>
            <div className='columnHeader'>
                <div className=''>{props.column.name}</div>
                <div className=''>...</div>
            </div>

            <div className='columnBody'>body</div>
        </div>
    )
}

export default Column
