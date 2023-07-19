import { forwardRef } from 'react';

import type { SVGProps } from 'react';

export const SuccessIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={49}
    height={49}
    viewBox="0 0 49 49"
    color="42454A"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="m20.523.137 16.688 10.259-1.324 1.48-15.84-9.738L1.873 13.32v22.368l18.176 11.175L38.229 35.68V19.394l-15.32 18.04-11.241-16.488 11.24 6.549L49 6.712l-8.905 10.486v19.054c0 .397-.213.735-.524.897L20.517 48.87a.9.9 0 0 1-.945-.006L.476 37.11a1 1 0 0 1-.47-.858L0 12.747c0-.396.22-.734.53-.896L19.585.13a.89.89 0 0 1 .94.006Z"
    />
  </svg>
));
