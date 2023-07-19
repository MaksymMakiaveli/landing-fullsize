import { NavigationItem } from './navigation-item';

import { For } from '@shared/UI';

import './styles.scss';

const items = [{ label: 'PRODUCTS' }, { label: 'GALLERY' }, { label: 'CONTACT' }];

export const Navigation = () => {
  const renderItem = (item: (typeof items)[0]) => {
    return <NavigationItem label={item.label} key={item.label} />;
  };

  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <For each={items} render={renderItem} />
      </ul>
    </nav>
  );
};
