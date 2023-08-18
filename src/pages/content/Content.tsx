import Logo from '@assets/react.svg';
import styles from './Content.module.scss';

export const Content = (): JSX.Element => {
  return (
    <div className={`${styles.wrapper}`}>
      <Logo />
      Content component
    </div>
  );
};
