import Head from 'next/head';

const MainHead = () => (
    <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
        <title>Chum! Login</title>
    </Head>
)

class MainLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const uid = sessionStorage.getItem('uid');
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyA_jxtJEs6tK8IddeWE33shq1oTV2CYppc",
            authDomain: "szia-e86a9.firebaseapp.com",
            databaseURL: "https://szia-e86a9.firebaseio.com",
            projectId: "szia-e86a9",
            storageBucket: "szia-e86a9.appspot.com",
            messagingSenderId: "110429429267"
        };
        firebase.initializeApp(config);
        const db = firebase.firestore();
        db.settings({timestampsInSnapshots: true})

        db.collection('users').doc(uid).get()
            .then(doc => {
                this.setState({
                    userName: doc.data().userName,
                    uid
                })
            })
    }

    render() {
        return (
            <div className="container">
                <MainHead />
                <div className="row">
                    <h1>{this.state.userName}</h1>
                </div>
                {this.children}
                <script
                    src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                    integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="
                    crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
                <script src="https://www.gstatic.com/firebasejs/5.7.0/firebase-app.js"></script>
                <script src="https://www.gstatic.com/firebasejs/5.7.0/firebase-firestore.js"></script>
            </div>
        )
    }
}

export default MainLayout;