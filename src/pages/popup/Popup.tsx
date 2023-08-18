import Logo from '@assets/react.svg';
import styles from './Popup.module.scss';

export const Popup = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Logo />
      Popup component
    </div>
  );
};
