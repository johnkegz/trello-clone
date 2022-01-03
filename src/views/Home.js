import React from 'react'
import AddColumn from '../components/AddColumn'
import AddColumnModal from '../components/AddColumnModal'
import Column from '../components/Column'
import '../styles/styles.css'

function Home() {
    const [showAddColumnModal, setShowAddColumnModal] = React.useState(false);
    const [columns, setColumns] = React.useState([]);
    const [columnName, setColumnName] = React.useState('');

    const handleAddColumn = () => {
        
        setColumns([...columns, { id: columns.length + 1, name: columnName }])
        setShowAddColumnModal(false)
        setColumnName("")
        return 
    }

    console.log("+>", columnName)
    
    return (
        <div className='homeContainer'>
            {columns.map(column => <Column column={column} />)}
            <AddColumn setShowAddColumnModal={setShowAddColumnModal} />
            <AddColumnModal
                showAddColumnModal={showAddColumnModal}
                handleAddColumn={handleAddColumn}
                setColumnName={setColumnName}
                setShowAddColumnModal={setShowAddColumnModal}
                columnName={columnName}
            />
        </div>
    )
}

export default Home
