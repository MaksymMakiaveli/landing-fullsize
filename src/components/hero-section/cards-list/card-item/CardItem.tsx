import './styles.scss';

export type CardItemProps = {
  label: string;
  name: string;
  suffix?: string;
};

export const CardItem = (props: CardItemProps) => {
  const { label, name, suffix } = props;

  return (
    <li className="card-item">
      <span className="card-item-label">
        {label} {suffix && <span className="card-item-label-suffix">{suffix}</span>}
      </span>
      <span className="card-item-name">{name}</span>
    </li>
  );
};
