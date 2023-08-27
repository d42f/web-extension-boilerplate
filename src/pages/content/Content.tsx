import { useStore } from '@nanostores/react';

import Logo from '@assets/react.svg';
import { $toolbar } from '@store/toolbar';
import styles from './Content.module.scss';

export const Content = (): JSX.Element | null => {
  const toolbar = useStore($toolbar);

  return toolbar?.visible ? (
    <div className={`${styles.wrapper}`}>
      <Logo />
      Content component
    </div>
  ) : null;
};
