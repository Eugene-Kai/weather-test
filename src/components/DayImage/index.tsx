import React, { useMemo } from 'react';

import DayCloudySvg from '../../assets/DayCloudySvg';
import DayRainySvg from '../../assets/DayRainySvg';
import DaySunnySvg from '../../assets/DaySunnySvg';
import { DayType } from '../../interfaces';

type Props = {
  type: DayType;
  view: 'light' | 'dark';
  width: number;
  height: number;
};

const DayImage: React.FC<Props> = ({ type, view, width, height }) => {
  const Component = useMemo(() => {
    switch (type) {
      case DayType.cloudy:
        return DayCloudySvg;
      case DayType.rainy:
        return DayRainySvg;
      case DayType.sunny:
      default:
        return DaySunnySvg;
    }
  }, [type]);

  return <Component width={width} height={height} color={view === 'dark' ? '#000' : '#fff'} />;
};

export default DayImage;
