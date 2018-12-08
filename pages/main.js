import MainLayout from '../components/mainLayout';

function LocationSwitch(props) {
    if(props.permission){
        return(
            <div className="switch">
                <label>
                    Off
                    <input type="checkbox" />
                    <span className="lever" />
                    On
                </label>
            </div>
        )
    }
    else{
        return (
            <p>You have disabled location services. In order to use chum you must enable them in your browser's settings</p>
        )
    }
}

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locationEnabled: true
        };
    }


    componentDidMount() {
        navigator.permissions.query({ name: 'geolocation' })
            .then(pStatus => {
                console.log(pStatus.state);
                if (pStatus.state === 'denied') {
                    this.setState({ locationEnabled: false });
                }
            })
    }

    render() {
        return (
            <MainLayout>
                <div className="row">
                    <LocationSwitch permission={this.state.locationEnabled} />
                </div>
            </MainLayout>
        )
    }
}

export default Main;