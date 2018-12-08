import LoginLayout from '../components/loginLayout';
import axios from 'axios';

class SignUp extends React.Component {
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
        event.preventDefault();
        
        this.setState({ message: '' });
        if (this.state.password !== this.state.passwordRepeat) {
            console.log('mismatch');
            this.setState({
                errorMessage: 'Passwords do not match',
                password: '',
                passwordRepeat: ''
            });
            return;
        }

        axios.post('/api/v1/auth/signup', {
            user: this.state
        })
            .then(res => console.log(res.data));
    }

    render() {
        return (
            <LoginLayout>
                <div>
                    <p className="align-center red-text">{this.state.errorMessage}</p>
                </div>
                <form
                    onSubmit={this.handleSubmit}
                >
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="first" type="text" value={this.state.first} onChange={this.handleChange} />
                            <label for="first">First Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="last" type="text" value={this.state.last} onChange={this.handleChange} />
                            <label for="last">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="displayName" type="text" value={this.state.displayName} onChange={this.handleChange} />
                            <label for="displayName">Display Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                            <label for="email">E-mail Address</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                            <label for="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="passwordRepeat" type="password" value={this.state.passwordRepeat} onChange={this.handleChange} />
                            <label for="passwordRepeat">Repeat Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <button className="btn btn-medium" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </LoginLayout>
        )
    }
}

export default SignUp;