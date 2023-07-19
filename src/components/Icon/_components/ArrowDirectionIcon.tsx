import { forwardRef } from 'react';

import type { SVGProps } from 'react';

export const ArrowDirectionIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props: SVGProps<SVGSVGElement>, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={10}
      viewBox="0 0 25 10"
      color="#F7EAE3"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="m24.5 5-6.035-5v4H.5v2h17.965v4L24.5 5Z" />
    </svg>
  ),
);
