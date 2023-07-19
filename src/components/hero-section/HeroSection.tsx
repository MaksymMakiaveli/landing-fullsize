import { CardsList } from './cards-list';
import { LeftSection } from './left-section';
import { RightSection } from './right-section';

import './styles.scss';

export const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-section-wrapper">
        <div className="hero-section-body">
          <div className="hero-section-left">
            <LeftSection />
          </div>
          <div className="hero-section-right">
            <RightSection />
          </div>
        </div>
        <div className="hero-section-cards-wrapper">
          <CardsList />
        </div>
      </div>
    </section>
  );
};
