import React from 'react'

function AddColumn(props) {
    return (
        <div className='addColumnContainer' onClick={() => props.setShowAddColumnModal(true)}>
                +  Add column
        </div>
    )
}

export default AddColumn
