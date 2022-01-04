import React from 'react'

function Card(props) {
    console.log(props, "=========================================")
    return (
        <div className='cardContainer'>
            <div className='cardHeader'>
                <div className=''>{props.name}</div>
                <div className='' onClick={() => props.handleShowEdit(props.name, props.content, props.id, props.columnId)}>edit</div>
            </div>

            <div className='cardBody'>{props.content}</div>
        </div>
    )
}

export default Card
