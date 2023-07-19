import { Button } from '@shared/UI';

import './styles.scss';

export const Actions = () => {
  return (
    <div className="actions">
      <Button variant="secondary">LOG IN</Button>
      <Button>SIGN UP</Button>
    </div>
  );
};
