import React from 'react'
import '../styles/styles.css'
import Card from './Card'

function Column(props) {
    return (
        <div className='columnContainer'>
            <div className='columnHeader'>
                <div className=''>{props.column.columnName}</div>
                <div className=''>...</div>
            </div>
            
            <div className='columnBody'>{props.children}
            <div className='' onClick={() => props.handleShowAddCard(props.column.id)}>Add card</div>
            </div>
           
            
        </div>
    )
}

export default Column
