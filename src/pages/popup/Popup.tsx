import { Button } from '@components/Button';
import styles from './Popup.module.css';

export const Popup = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Button>button</Button>
    </div>
  );
};
