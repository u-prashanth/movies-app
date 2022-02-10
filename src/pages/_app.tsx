import '../styles/globals.scss'
import '../styles/nprogress.scss'
import { AppProps } from 'next/app'

import Router from 'next/router';
import NProgress from 'nprogress';


const handleOnChangeStart = () => {
	NProgress.configure({

	})
    NProgress.start();
}

const handleOnChangeComplete = () => {
    NProgress.done();
}

Router.events.on('routeChangeStart', handleOnChangeStart)
Router.events.on('routeChangeComplete', handleOnChangeComplete)


function App({ Component, pageProps }: AppProps) {
	return (
		<Component {...pageProps} />
  	)
}

export default App;
