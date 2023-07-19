import { Icon } from '../../Icon';

import { For } from '@shared/UI';

import './styles.scss';

const data = [
  'Lightweight aircraft grade aluminium frame',
  'Car grade lithium battery',
  'Self-balanced',
  'Plug n play',
  'Quick release adapter',
  'RFID key card',
];

export const RightSection = () => {
  const renderData = (label: string) => {
    return (
      <li key={label} className="product-right-section-list-item">
        <Icon name="success" />
        <span className="product-right-section-list-item-label">{label}</span>
      </li>
    );
  };

  return (
    <div className="product-right-section">
      <ul className="product-right-section-list">
        <For each={data} render={renderData} />
      </ul>
    </div>
  );
};
