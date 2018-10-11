import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './store/reducers';

const store = createStore(Reducer);

const app = (
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>
	);

ReactDOM.render( app, document.getElementById('root'));
registerServiceWorker();