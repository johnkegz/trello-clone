import React from 'react'

function AddColumnModal(props) {
  return (
    <div id="myModal" className={`modal ${props.showAddColumnModal ? 'show' : 'hide'}`}>
      <div className="modalContent">
        <span className="close" onClick={() => props.handleClose()}>&times;</span>
        <p>Label column</p>
        <p>
            <input type='text' width='100%' name='column' value={props.columnName} value={props.columnName} onChange={(e) => props.setColumnName(e.target.value)}/>
            <input type='submit' value='Add' onClick={() => props.columnName !==""?props.handleAddColumn(): alert('Enter column name')}/>
        </p>
      </div>

    </div>
  )
}

export default AddColumnModal;
