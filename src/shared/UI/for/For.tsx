import { Children, useEffect, useState } from 'react';

import type { ReactNode } from 'react';

export type ForProps<T> = {
  each: T[];

  render: (item: T, index: number) => ReactNode;

  itemsLimit?: number;
};

export const For = <T,>(props: ForProps<T>) => {
  const { each, render, itemsLimit } = props;

  const [list, setList] = useState<T[]>([]);

  useEffect(() => {
    if (itemsLimit) {
      setList(each.slice(0, itemsLimit));
    } else {
      setList(each);
    }
  }, [itemsLimit, each]);

  return Children.toArray(list.map((item, index) => render(item, index)));
};
