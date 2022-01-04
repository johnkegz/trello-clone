import React from 'react'

function MoveColumnModal(props) {
    return (
        <div id="myModal" className={`modal ${props.showMoveColumnModal ? 'show' : 'hide'}`}>
          <div className="modalContent">
            <span className="close" onClick={() => props.handleCloseMoveModal()}>&times;</span>
            <p>Move column</p>
            <p>
            {props.columns.map(column => props.intialColumnId !== column.id && <div onClick={() => props.handelMoveColumn(column.id)}>{column.columnName}</div>)}
            </p>
          </div>
    
        </div>
      )
}

export default MoveColumnModal
