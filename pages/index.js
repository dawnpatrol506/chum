import LoginLayout from '../components/loginLayout';
import Link from 'next/link';
import axios from 'axios';
const firebase = require('firebase/app');
require('firebase/auth');
var config = {
    apiKey: "AIzaSyA_jxtJEs6tK8IddeWE33shq1oTV2CYppc",
    authDomain: "szia-e86a9.firebaseapp.com",
    databaseURL: "https://szia-e86a9.firebaseio.com",
    projectId: "szia-e86a9",
    storageBucket: "szia-e86a9.appspot.com",
    messagingSenderId: "110429429267"
};
firebase.initializeApp(config);
const auth = firebase.auth();

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    loginWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then(user => {
                if (user) {
                    axios.post('api/v1/auth/google', {
                        user: auth.currentUser
                    })
                    .then(data => {
                        sessionStorage.setItem('uid', data.data.uid);
                        try {location.replace('/main');}
                        catch(e) {location = '/main'}
                    })
                }
            })
            .catch(err => { if (err) throw err });
    }

    render() {
        return (
            <LoginLayout>
                <div className="row">
                    <Link className="col s12 center-align" href="/LoginEmail">
                        <button className="btn btn-medium center-align">Login with Email</button>
                    </Link>
                </div>
                <div className="row">
                    <button className="btn btn-medium center-align" onClick={this.loginWithGoogle}>Login with Google</button>
                </div>
                <div className="row">
                    <Link className="col s4 offset-s8" href="/signUp">
                        <a>Sign Up</a>
                    </Link>
                </div>
            </LoginLayout>
        )
    }
}

export default Index;