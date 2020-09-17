import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return(
            <>
                <button className="big-button" onClick= { function refreshPage(){window.location.reload();} }>
                    PLAY AGAIN?
                </button>
            </>
        )
    }
}