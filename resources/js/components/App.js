import React, { Component } from 'react';
import Axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tasks: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handle change
    handleChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    // handle submit
    handleSubmit(e) {
        e.preventDefault();
        Axios.post('/tasks', {
            name: this.state.name
        }).then(response => {
            this.setState({
                tasks: [response.data, ...this.state.tasks],
                name: ''
            })
            // console.log('from handle submit', response);
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">React Component</div>

                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <textarea 
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                            className="form-control" 
                                            rows="5" 
                                            maxLength="255"
                                            placeholder="Create a new task" 
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Create Task</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
