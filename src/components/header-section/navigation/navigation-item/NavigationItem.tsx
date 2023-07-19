import './styles.scss';

type NavigationItemProps = {
  label: string;
};

export const NavigationItem = (props: NavigationItemProps) => {
  const { label } = props;

  return (
    <li className="navigation-item">
      <a href="#" className="navigation-item-link">
        {label}
      </a>
    </li>
  );
};
