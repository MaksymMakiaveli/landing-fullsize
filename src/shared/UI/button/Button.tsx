import cl from 'classnames';

import type { ButtonHTMLAttributes } from 'react';

import './styles.scss';

export type ButtonProps = {
  variant?: 'primary' | 'secondary';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const { children, className, variant = 'primary', ...restProps } = props;

  const rootClasses = cl('ui-button', `ui-button--${variant}`, className);

  return (
    <button className={rootClasses} {...restProps}>
      <span className="ui-button-label">{children}</span>
    </button>
  );
};
