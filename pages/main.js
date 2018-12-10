import MainLayout from '../components/mainLayout';
const axios = require('axios');

function LocationSwitch(props) {
    if (props.permission) {
        return (
            <div className="switch">
                <label>
                    Off
                    <input type="checkbox" onClick={props.onClick} />
                    <span className="lever" />
                    On
                </label>
            </div>
        )
    }
    else {
        return (
            <p>You have disabled location services. In order to use chum you must enable them in your browser's settings</p>
        )
    }
}

function Chum(props) {
    return (
        <div>Chum1</div>
    )
}

function ChumList(props) {
    return (
        <table>
        </table>
    )
}

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLocating: false,
            locationEnabled: true,
            watchNumber: 0,
            lat: 0,
            lon: 0,
            acc: 0,
            zip: ''
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

    locationSwitchHandler = () => {
        if (this.state.isLocating) {
            clearInterval(this.state.intervalNumber);
            navigator.geolocation.clearWatch(this.state.watchNumber);
            this.setState({ isLocating: false });
            axios.post('/api/v1/location/off', {
                zip: this.state.zip,
                uid: sessionStorage.getItem('uid')
            });
        }
        else {
            const watchNumber = navigator.geolocation.watchPosition(position => {
                const uid = sessionStorage.getItem('uid');
                this.setState({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                    acc: position.coords.accuracy,
                });
                axios.post('/api/v1/location/on', {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                    uid
                })
                    .then(zip => this.setState({ zip: zip.data.zip }));
            }, err => { if (err) throw err }, {
                    enableHighAccuracy: true,
                })
            this.setState({ isLocating: true, watchNumber: watchNumber });
            const interval = setInterval(() => {
                axios.post('/api/v1/location/chums', {
                    uid: sessionStorage.getItem('uid'),
                    zip: this.state.zip
                })
                    .then(chums => console.log(chums));
            }, 15000);
            this.setState({ intervalNumber: interval });
        }
    }

    render() {
        return (
            <MainLayout>
                <div className="row">
                    <LocationSwitch permission={this.state.locationEnabled} onClick={this.locationSwitchHandler} />
                </div>
                <p>Latitude: {this.state.lat}</p>
                <p>Longitude: {this.state.lon}</p>
                <p>Accuracy: {this.state.acc}</p>
                <p>Zip Code: {this.state.zip}</p>
            </MainLayout>
        )
    }
}

export default Main;