import React, {Component} from 'react';

class AddNewItems extends Component {
    render() {
        const {item,edit,submit,editItem} = this.props

        return( <div className="card card-body my-3">
            <form onSubmit={submit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                    </div>
                    <input type="text" className="form-control" value={item} onChange={edit} placeholder="add new item" required="true"/>
                </div>

                <button type="submit" className="btn btn-primary btn-rounded mt-2 mx-auto ">
                    Update List
                </button>
            </form>

        </div>
    );
    }
}

export default AddNewItems;
