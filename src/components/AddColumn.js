import React from 'react'

function AddColumn(props) {
    return (
        <div className='addColumnContainer' onClick={() => props.setShowAddColumnModal(true)}>
                <div className=''>+</div>
                <div className=''>Add column</div>
        </div>
    )
}

export default AddColumn
