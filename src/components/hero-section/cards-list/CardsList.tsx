import { CardItem } from './card-item';

import { For } from '@shared/UI';

import './styles.scss';

const cardsCollection = [
  {
    label: '105',
    suffix: 'lbs',
    name: 'Net Weight',
    key: '1',
  },
  {
    label: '26',
    suffix: 'mph',
    name: 'Top Speed',
    key: '2',
  },
  {
    label: '38',
    suffix: 'miles',
    name: 'Max Range',
    key: '3',
  },
  {
    label: '89',
    suffix: 'nm',
    name: 'Max Torques',
    key: '4',
  },
  {
    label: '22%',
    suffix: 'slope',
    name: 'Hill Climbing',
    key: '5',
  },
  {
    label: '2x',
    name: 'Hydraulic Disc Brakes',
    key: '6',
  },
];

export const CardsList = () => {
  const renderCards = (card: (typeof cardsCollection)[0]) => {
    return <CardItem key={card.key} label={card.label} name={card.name} suffix={card.suffix} />;
  };

  return (
    <ul className="cards-list">
      <For each={cardsCollection} render={renderCards} />
    </ul>
  );
};
