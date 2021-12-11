import React from 'react';

import { Day } from '../../interfaces';

export interface IDayContext {
  selectedDay: Day | null;
  setSelectedDay: (newDay: Day | null) => void;
}

const DayContext = React.createContext<IDayContext>({ selectedDay: null, setSelectedDay: () => {} });

export default DayContext;
