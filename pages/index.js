const axios = require('axios');

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;

        this.setState({[name]: target.value});
    }

    handleSubmit = (event) => {
        axios.post('/api/v1/login', {
            first: this.state.first,
            last: this.state.last
        })
        .then(res => console.log(res))
        event.preventDefault();
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    First: 
                    <input name="first" type="text" value={this.state.first} onChange={this.handleChange} />
                </label>
                <label>
                    Last:
                    <input name="last" type="text" value={this.state.last} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default LoginForm;