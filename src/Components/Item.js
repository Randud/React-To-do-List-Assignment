import React, {Component} from 'react';

class Item extends Component {
    render() {
        const {title,deleteItem,editItem,completed} = this.props;
        return (
           <li className="list-group-item d-flex justify-content-between my-2">
               <h6>{title}</h6>
                <div className="list-icon">
                   <span className="mx-2 text-dark" onClick={editItem}>
                    <i className="fas fa-pen"></i></span>
                    <span className="mx-2 text-dark" onClick={deleteItem}>
                    <i className="fas fa-trash"></i></span>
                    <span className="mx-2 text-dark" onClick={completed}>
                    <i className={completed ? "fas fa-trash" : "far fa-check-circle"}></i></span>
                </div>
           </li>
        );
    }
}

export default Item;