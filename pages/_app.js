// we can only import global css into _app.js

import '../styles/global.css'
export default function App({ Component, pageProps }) {
    console.log('in __app.js')
    return <Component {...pageProps} />
}