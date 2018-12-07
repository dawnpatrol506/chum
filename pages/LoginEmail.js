import LoginLayout from '../components/loginLayout';
const axios = require('axios');

class LoginEmail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;

        this.setState({ [name]: target.value });
    }

    handleSubmit = (event) => {
        axios.post('/api/v1/login', {
            email: this.state.email,
            password: this.state.password
        })
            .then(res => console.log(res))
        event.preventDefault();
    }

    render() {
        return (
            <LoginLayout>
                <div className="row">
                    <form
                        className="col s12"
                        onSubmit={this.handleSubmit}
                    >
                        <div className="row">
                            <div className="input-field col s12">
                                <input name="email" type="text" value={this.state.first} onChange={this.handleChange} />
                                <label for="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input name="password" type="password" value={this.state.last} onChange={this.handleChange} />
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input className="btn btn-small" type="submit" value="Submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </LoginLayout>
        )
    }
}

export default LoginEmail;