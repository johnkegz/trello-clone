import React from 'react'

function Card(props) {
    const [showSelect, setShowSelect] = React.useState(false)
    return (
        <div className='cardContainer'>
            <div className='cardHeader'>
                <div className=''>{props.name}</div>
                <div>
                    <div className='elipseSelectContainer'>
                        <div className='elipse' onClick={() => setShowSelect(!showSelect)}>...</div>
                        {showSelect && <div className='elipseSelect'>
                            <div className='elipseSelectRow' onClick={() => {
                                setShowSelect(!showSelect)
                                props.handleShowMoveColumn(props.id, props.columnId)
                                return
                                }}>move</div>
                            <div className='elipseSelectRow' onClick={() => {
                                setShowSelect(!showSelect)
                                props.handleShowEdit(props.name, props.content, props.id, props.columnId)
                                return
                            }}>edit</div>
                        </div>}
                    </div>
                </div>

            </div>

            <div className='cardBody'>{props.content}</div>
        </div>
    )
}

export default Card
