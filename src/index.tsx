import React from 'react';
import ReactDOM from 'react-dom';
import * as Yup from 'yup';
import { PTBR } from 'locales/yup/pt-BR';
import * as serviceWorker from './serviceWorker';

import 'assets/css/global.css';

import { App } from 'components/App';

serviceWorker.register();

Yup.setLocale(PTBR);

ReactDOM.render(<App />, document.getElementById('app-root'));
