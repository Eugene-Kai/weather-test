import * as React from 'react';

import { SvgProps } from '../interfaces';

const DayCloudySvg: React.FC<SvgProps> = ({ width, height, color = '#ccc', style }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
      <path
        d="M36.6667 16.6667C36.657 14.8948 36.0828 13.1721 35.0274 11.7487C33.972 10.3254 32.4904 9.27553 30.7977 8.75156C29.105 8.22759 27.2894 8.2568 25.6144 8.83496C23.9395 9.41311 22.4924 10.5101 21.4833 11.9667C19.5674 10.6778 17.3091 9.99273 15 10C11.9058 10 8.93836 11.2292 6.75043 13.4171C4.56251 15.605 3.33334 18.5725 3.33334 21.6667C3.33334 24.7609 4.56251 27.7283 6.75043 29.9162C8.93836 32.1042 11.9058 33.3333 15 33.3333H27.5C29.9298 33.3289 32.2588 32.3617 33.977 30.6436C35.6951 28.9255 36.6623 26.5965 36.6667 24.1667C36.6724 22.8343 36.3761 21.518 35.8 20.3167C36.3682 19.1837 36.6649 17.9341 36.6667 16.6667ZM28.3333 11.6667C29.6594 11.6667 30.9312 12.1934 31.8689 13.1311C32.8066 14.0688 33.3333 15.3406 33.3333 16.6667C33.3417 16.8054 33.3417 16.9446 33.3333 17.0833L33.2 17C32.8397 16.7144 32.4611 16.4528 32.0667 16.2167C31.6607 15.9887 31.2371 15.7936 30.8 15.6333L30.4 15.5C30.0663 15.388 29.7269 15.2934 29.3833 15.2167H28.9833C28.4966 15.0992 28 15.0267 27.5 15H24.5667C24.3833 14.7333 24.1833 14.4667 23.9833 14.2167C24.4175 13.4443 25.049 12.8012 25.8134 12.3532C26.5777 11.9051 27.4474 11.6682 28.3333 11.6667ZM27.5 30H15C12.7899 30 10.6703 29.122 9.10745 27.5592C7.54465 25.9964 6.66668 23.8768 6.66668 21.6667C6.66668 19.4565 7.54465 17.3369 9.10745 15.7741C10.6703 14.2113 12.7899 13.3333 15 13.3333C16.0865 13.3294 17.1629 13.5409 18.1671 13.9558C19.1712 14.3706 20.0831 14.9804 20.85 15.75C21.3849 16.2626 21.8399 16.8525 22.2 17.5C22.3469 17.7543 22.5583 17.9654 22.8129 18.1117C23.0676 18.258 23.3563 18.3345 23.65 18.3333H27.5C28.5104 18.3272 29.5045 18.5874 30.3822 19.0878C31.26 19.5881 31.9905 20.3109 32.5 21.1833C33.0553 22.0785 33.3443 23.1133 33.3333 24.1667C33.3333 25.7138 32.7188 27.1975 31.6248 28.2915C30.5308 29.3854 29.0471 30 27.5 30Z"
        fill={color}
      />
    </svg>
  );
};

export default DayCloudySvg;