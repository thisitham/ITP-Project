import React, { Component } from 'react'

export default class Open extends Component {
    render() {
        return (
            <div>
                 <a className="btn btn-success" href="/display/:id1/post/:id2">
                        <i className="fas fa-arrow-alt-circle-right"></i>&nbsp;Optional details
                     </a>
            </div>
        )
    }
}
