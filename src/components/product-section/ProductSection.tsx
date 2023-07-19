import { LeftSection } from './left-section';
import { RightSection } from './right-section';

import './styles.scss';

export const ProductSection = () => {
  return (
    <section className="product-section">
      <div className="product-section-wrapper">
        <div className="product-section-header">
          <h2 className="product-section-title">Product Information</h2>
          <p className="product-section-subtitle">
            Our Scooter has following unique design and technology features:
          </p>
        </div>

        <div className="product-section-body">
          <div className="product-section-left">
            <LeftSection />
          </div>
          <div className="product-section-right">
            <RightSection />
          </div>
        </div>
      </div>
    </section>
  );
};
