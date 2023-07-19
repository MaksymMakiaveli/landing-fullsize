import { cloneElement } from 'react';

import cl from 'classnames';

import { iconCatalog } from './_constants';

import type { SVGProps } from 'react';

import './styles.scss';

export type IconProps = {
  name: keyof typeof iconCatalog;
} & Omit<SVGProps<SVGSVGElement>, 'name'>;

export const Icon = (props: IconProps) => {
  const { name, className, ...restProps } = props;

  const rootClasses = cl('svg-icon-wrapper', className);

  return <span className={rootClasses}>{cloneElement(iconCatalog[name], restProps)}</span>;
};
