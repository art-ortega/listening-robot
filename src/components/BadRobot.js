import React from 'react'


const BadRobot = (props) => {
        return(
            <div>
                <h1>Bad Robot</h1>
                <p>I hear you saying {props.convert(props.value)}</p>
            </div>
        )
}

export default BadRobot
