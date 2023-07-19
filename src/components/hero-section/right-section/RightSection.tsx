import moto from '@assets/images/moto.png';

import './styles.scss';

export const RightSection = () => {
  return (
    <div className="right-section">
      <div className="right-section-wrapper">
        <div className="right-section-image-box">
          <img src={moto} className="right-section-image" />
        </div>
      </div>
    </div>
  );
};
