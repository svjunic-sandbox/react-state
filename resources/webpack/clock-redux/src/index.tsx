import React from 'react';
import ReactDOM from 'react-dom';

import WebFont from 'webfontloader';
import { WEBFONT_FAMILIES } from '~/font.ts';

//import "~/index.scss";
import App from '~/App.tsx';

console.log(document.getElementById('app'));

WebFont.load({
  google: {
    families: WEBFONT_FAMILIES,
  },
});

ReactDOM.render(<App />, document.getElementById('app'));
