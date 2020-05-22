/**
 * IT18165258
 * Rajapakshe R.M.P.R.L
 * Y3.S1.09.2 - weekend
 */
import React, {Component} from 'react';
import AddNewItems from "./Components/AddNewItems";
import Item from "./Components/Item";
import List from "./Components/List";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from 'uuid';


class App extends Component {

    state={
        itemList:[],
        comList:[],
        id: uuid(), /*generate unique id*/
        item:'',
        editItem:false,
        completed:false
    };

    edit = (x) => {
        this.setState(
            {
                item: x.target.value
            }
        );
    };

    deleteItem = id =>{
        const todoItemes = this.state.itemList.filter(item => item.id != id)
        this.setState(
            {
                itemList: todoItemes
            }
        );
    };

    completed = id =>{


        const todoItemes = this.state.itemList.filter(item => item.id != id)
        const  completedList = this.state.itemList.find(item => item.id === id)
        this.setState(
            {
                comList: todoItemes,
                id: id,
                item: completedList.title,
                completed:true
            }
        );
    };



    editItem = id => {
        const todoItemes = this.state.itemList.filter(item => item.id != id)

        const  editItemArray = this.state.itemList.find(item => item.id === id);

        this.setState(
            {
                id: id,
                itemList: todoItemes,
                item: editItemArray.title,
                editItem: true
            }
        );
    };


    submit = (x) =>{
        x.preventDefault();
        const  newItem ={
            id:this.state.id,
            title:this.state.item
        };



      const itemArray = [...this.state.itemList,newItem]

        this.setState(
            {
                id: uuid(),
                itemList:itemArray,
                item:'',
                editItem: false

            }
        );
    };

    claerAll = ()=>{
        this.setState(
            {
                itemList:[]
            }
        )
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-5 mt-4">
                    <h1 className="text-center text-primary text"> Todo List</h1>

                        <AddNewItems item={this.state.item} edit ={this.edit} submit={this.submit} editItem={this.state.editItem}/>

                        <List itemList={this.state.itemList}  clearAll={this.claerAll} deleteItem={this.deleteItem} editItem={this.editItem} completed={this.completed} />
                                </div>
                </div>
            </div>


        );
    }
}

export default App;
