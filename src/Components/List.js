import React, {Component} from 'react';
import Item from "./Item";


class List extends Component {
    render() {
        const {itemList,clearAll,deleteItem,editItem,completed} = this.props;

        return (
            <ul className="list-group my-3 mt-2">
                <h2 className="text-center"> Item List</h2>

                {
                    itemList.reverse().map(item =>{
                        return(
                            <Item key={item.id} title={item.title} completed={this.completed} deleteItem={() => deleteItem(item.id)} editItem={() => editItem(item.id)} />
                    );
                })}

                <button className="btn btn-primary btn-rounded mt-2 mx-auto " onClick={clearAll}> Clear All</button>
            </ul>




        );
    }
}

export default List;