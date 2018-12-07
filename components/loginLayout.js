import Head from 'next/head';

const LoginHead = () => (
    <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
        <title>Chum! Login</title>
    </Head>
)
const LoginLayout = (props) => (
    <div
        className="container"
    >
        <LoginHead />
        <div className="row">
            <div
            className="center"
            >
                <h1>Chum!</h1>
                <p>Chum a little. Get a little chummy.</p>
            </div>
        </div>
        {props.children}
        <script
            src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="
            crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </div>
)

export default LoginLayout;