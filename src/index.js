import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore';
import App from './containers/App';
const store = configureStore();

render(
    <AppContainer>
        <App store={store} history={history} />
    </AppContainer>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        const NewApp = require('./containers/App').default;
        render(
            <AppContainer>
                <NewApp store={store} history={history} />
            </AppContainer>,
            document.getElementById('app')
        );
    });
}
