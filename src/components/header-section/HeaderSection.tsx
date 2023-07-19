import { Icon } from '../Icon';
import { Actions } from './actions';
import { Navigation } from './navigation';

import './styles.scss';

export const HeaderSection = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-logo-wrapper">
          <Icon name="logo" />
        </div>
        <div className="header-list-wrapper">
          <Navigation />
        </div>
        <div className="header-actions-wrapper">
          <Actions />
        </div>
      </div>
    </header>
  );
};
