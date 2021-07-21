import React from 'react'

const Filter = (props) => {
    return (
        <div>
            <h2>Поиск</h2>
            <input placeholder="Поиск" onChange={props.changeValueFilter}/>
        </div>

    )
}
export default Filter