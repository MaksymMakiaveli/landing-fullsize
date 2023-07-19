import { Icon } from '../../Icon';

import { Button } from '@shared/UI';

import './styles.scss';

export const LeftSection = () => {
  return (
    <div className="left-section">
      <div className="left-section-wrapper">
        <div className="left-section-info">
          <h1 className="left-section-title">
            Let's ride. <br />
            <span className="left-section-title-bold">the future</span>
          </h1>

          <div className="left-section-divider" />

          <p className="left-section-description">Simple and sleek design with users in mind.</p>
        </div>
        <div className="left-section-actions">
          <div className="left-section-button-wrapper">
            <Button className="left-section-button">
              <Icon name="arrow-direction" />
            </Button>
            <span className="left-section-button-label">Buy now</span>
          </div>
        </div>
      </div>
    </div>
  );
};
