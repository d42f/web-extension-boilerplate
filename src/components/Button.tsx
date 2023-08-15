import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  className?: string;
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, children, ...rest },
  ref,
) {
  return (
    <button className={`${styles.button} ${className}`} ref={ref} {...rest}>
      {children}
    </button>
  );
});
