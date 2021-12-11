import React, { useCallback, useMemo, useState } from 'react';

import { Day } from '../../interfaces';
import dayContext from './index';

const DayProvider: React.FC = ({ children }) => {
  const [day, setDay] = useState<Day | null>(null);

  const updateDay = useCallback((newDay: Day | null) => {
    setDay(newDay);
  }, []);

  const dayState = useMemo(() => {
    return { selectedDay: day, setSelectedDay: updateDay };
  }, [day, updateDay]);

  return <dayContext.Provider value={dayState}>{children}</dayContext.Provider>;
};

export default DayProvider;
