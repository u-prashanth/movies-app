import '../styles/globals.scss'
import '../styles/nprogress.scss'
import { AppProps } from 'next/app'

import Router from 'next/router';
import NProgress from 'nprogress';

// Redux
import { Provider } from 'react-redux';
import { store } from '../redux/store';


const handleOnChangeStart = () => {
    NProgress.start();
}

const handleOnChangeComplete = () => {
    NProgress.done();
}

Router.events.on('routeChangeStart', handleOnChangeStart)
Router.events.on('routeChangeComplete', handleOnChangeComplete)


function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
  	)
}

export default App;
