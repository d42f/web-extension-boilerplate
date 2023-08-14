import { createRoot } from 'react-dom/client';

import { Popup } from './Popup';
import './index.css';

function init() {
  const rootContainer = document.querySelector('#__root');
  if (!rootContainer) {
    throw new Error('Can not find Popup root element');
  }
  const root = createRoot(rootContainer);
  root.render(<Popup />);
}

init();
