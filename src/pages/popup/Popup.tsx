import Logo from '@assets/react.svg';
import { Button } from '@components/Button';
import { toggle } from '@store/toolbar';
import styles from './Popup.module.scss';

export const Popup = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <Button size="small" variant="filled" theme="secondary" onClick={() => toggle()}>
        Toggle content component
      </Button>
      Popup component
    </div>
  );
};
