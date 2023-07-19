import moto2 from '@assets/images/moto-2.png';

import './styles.scss';

export const LeftSection = () => {
  return (
    <div className="product-left-section">
      <div className="product-left-section-image-box">
        <img src={moto2} alt="scooter" className="product-left-section-image" />
      </div>
    </div>
  );
};
