import { createRoot } from 'react-dom/client';

import './style.css';

const rootContainer = document.createElement('div');
rootContainer.id = '__root';
document.body.appendChild(rootContainer);

const root = createRoot(rootContainer);
root.render(<div className="hello">content script loaded</div>);

try {
  console.log('content script loaded');
} catch (error) {
  console.error(error);
}
