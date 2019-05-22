import React, { Component } from 'react';
import './Celebline.css';

export default class CelebLine extends Component {
    render() {
        return(
            <tr className="celebline">
                <td>
                    <img src={this.props.pictureUrl} alt="img"/>
                </td>
                <td>
                    <h3>{this.props.name}</h3>
                </td>
                <td>
                    <span>{this.props.popularity}</span>
                </td>
            </tr>);
    }
}
