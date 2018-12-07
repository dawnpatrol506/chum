const fetch = require('isomorphic-unfetch');

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {thing: 1};

    }

    componentWillMount(){
        fetch('/api/v1/test')
            .then( r => r.json())
            .then(data => this.setState({thing: data.thing}));
    }

    render(){
        return (
            <div>
                <p>Testing {this.state.thing} </p>
            </div>
        )
    }
}

export default App;