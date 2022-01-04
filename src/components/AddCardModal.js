import React from 'react'

function AddCardModal(props) {
    return (
        <div id="myModal" className={`modal ${props.showAddCard ? 'show' : 'hide'}`}>
            <div className="modalContent">
                <span className="close" onClick={() => props.handleClose()}>&times;</span>
                <p>Add Card</p>
                <p>
                    <p>Title</p>
                    <input type='text' width='100%' name='column' value={props.cardName} onChange={(e) => props.setCardName(e.target.value)} />
                    <p>Content</p>
                    <textarea id="w3review" name="w3review" rows="4" cols="50"  value={props.cardContent} onChange={(e) => props.setCardContent(e.target.value)} >
                    </textarea>
                    <input type='submit' value='Add' onClick={() => props.editCard?props.handleEdit(props.cardName, props.cardContent, props.cardId, props.columnID):props.handleAddCard()} />
                </p>
            </div>

        </div>
    )
}

export default AddCardModal
