import { createRoot } from 'react-dom/client';

import styles from './index.module.css';
import { Content } from './Content';

const init = () => {
  const rootContainer = document?.createElement('div');
  if (rootContainer) {
    rootContainer.id = '__root';
    rootContainer.classList.add(styles.root);
    document.body.appendChild(rootContainer);
    const root = createRoot(rootContainer);
    root.render(<Content />);
  }
};

init();
