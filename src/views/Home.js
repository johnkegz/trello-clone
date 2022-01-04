import React from 'react'
import AddCardModal from '../components/AddCardModal'
import AddColumn from '../components/AddColumn'
import AddColumnModal from '../components/AddColumnModal'
import Card from '../components/Card'
import Column from '../components/Column'
import MoveColumnModal from '../components/MoveColumnModal'
import '../styles/styles.css'

function Home() {
    const [showAddColumnModal, setShowAddColumnModal] = React.useState(false);
    const [columns, setColumns] = React.useState([]);
    const [columnName, setColumnName] = React.useState('');
    const [showAddCard, setShowAddCard] = React.useState(false);
    const [cardName, setCardName] = React.useState('');
    const [cardContent, setCardContent] = React.useState('');
    const [cardId, setCardId] = React.useState(null);
    const [editCard, setEditCard] = React.useState(false);
    const [columnId, setColumnId] = React.useState(null);
    const [showMoveColumnModal, setShowMoveColumnModal] = React.useState(false);
    const [intialColumnId, setIntialColumnId] = React.useState(null);
    const [intialCardId, setIntialCardId] = React.useState(null);


    const handleClose = () => {
        setShowAddColumnModal(false)
        setShowAddCard(false)
        setEditCard(false)
        setColumnName('')
        setCardContent('')
        setCardName('')
        setCardId(null)
    }


    const handleAddColumn = () => {
        setColumns([...columns, { id: columns.length + 1, columnName: columnName, cards: [] }])
        setShowAddColumnModal(false)
        setColumnName("")
        return
    }

    const handleShowAddCard = (columnId) => {
        setShowAddCard(true)
        setColumnId(columnId)
        return
    }

    const handleAddCard = () => {
        const data = columns.map(column => {
            if (column.id === columnId) {
                return { id: column.id, columnName: column.columnName, cards: [...column.cards, { id: column.cards.length + 1, cardName: cardName, content: cardContent }] }
            }
            return column
        });
        setCardContent('')
        setCardName('')
        setShowAddCard(false)
        setEditCard(false)
        return setColumns(data)
    }

    const handleShowEdit = (name, content, id, columnId) => {
        setCardContent(content)
        setCardName(name)
        setCardId(id)
        setShowAddCard(true)
        setEditCard(true)
        setColumnId(columnId)
    }

    const handleEdit = (editedName, editedContent, cardId, columnID) => {
        const data = columns.map(column => {
            if (column.id === columnID) {
                let cardsResult = column.cards.map(card => {
                    if(card.id === cardId){
                        return { id: card.id, cardName: editedName, content: editedContent }
                    }
                    return card
                })
                return { id: column.id, columnName: column.columnName, cards: cardsResult }
            }
            return column
        });
        setCardContent('')
        setCardName('')
        setCardId(null)
        setShowAddCard(false)
        setEditCard(false)
        setColumnId(null)
        setColumns(data)
    }

    const handleShowMoveColumn = (cardId, columnId) => {


        setShowMoveColumnModal(true)
        setIntialColumnId(columnId)
        setIntialCardId(cardId)

        // setCardContent(content)
        // setCardName(name)
        // setCardId(id)
        // setShowAddCard(true)
        // setEditCard(true)
        // setColumnId(columnId)
    }

    const handelMoveColumn = (nextColumnId) => {
        
        const data1 = columns.find(column => column.id === intialColumnId);
        const data2 = data1.cards.find(card => card.id === intialCardId);
        
        const data3 = data1.cards.filter(card => card.id !== intialCardId);
        const data31 = data3.map((card, index) => ({ id: index+1, cardName: card.cardName, content: card.content }));
        const data4 = columns.map(column => {
            if (column.id === intialColumnId) {
                column.cards = data31
                return column
            }
            return column
        });

        const newData = data4.map(column => {
            if(column.id === nextColumnId){
                data2.id = column.cards.length + 1
                return { id: column.id, columnName: column.columnName, cards: [...column.cards, data2] }
            }
            return column
        })

        setColumns(newData)
        setShowMoveColumnModal(false)
        setIntialColumnId(null)
        setIntialCardId(null)
        return
    }

    const handleCloseMoveModal = () => {
        setShowMoveColumnModal(false)
        setShowMoveColumnModal(false)
        setIntialColumnId(null)
        setIntialCardId(null)
    }

    return (
        <div className='homeContainer'>
            {columns.map(column => (<Column column={column} handleShowAddCard={handleShowAddCard}>
                {column.cards.map(card => <Card
                    name={card.cardName}
                    content={card.content}
                    id={card.id}
                    columnId={column.id}
                    key={card.id}
                    handleShowEdit={handleShowEdit}
                    handleShowMoveColumn={handleShowMoveColumn}
                />)}
            </Column>))}
            <AddColumn setShowAddColumnModal={setShowAddColumnModal} />
            <AddColumnModal
                showAddColumnModal={showAddColumnModal}
                handleAddColumn={handleAddColumn}
                setColumnName={setColumnName}
                handleClose={handleClose}
                columnName={columnName}
            />
            <AddCardModal
                showAddCard={showAddCard}
                handleClose={handleClose}
                handleAddCard={handleAddCard}
                setCardName={setCardName}
                setCardContent={setCardContent}
                cardName={cardName}
                cardContent={cardContent}
                cardId={cardId}
                handleEdit={handleEdit}
                editCard={editCard}
                columnID={columnId}
            />
            <MoveColumnModal 
                showMoveColumnModal={showMoveColumnModal}
                columns={columns}
                handelMoveColumn={handelMoveColumn}
                handleCloseMoveModal={handleCloseMoveModal}
                intialColumnId={intialColumnId}
            />
        </div>
    )
}

export default Home
