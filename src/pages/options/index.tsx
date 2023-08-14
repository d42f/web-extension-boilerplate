import { createRoot } from 'react-dom/client';

import { Options } from './Options';
import './index.css';

const init = () => {
  const rootContainer = document.querySelector('#__root');
  if (!rootContainer) throw new Error('Can not find Options root element');
  const root = createRoot(rootContainer);
  root.render(<Options />);
};

init();
