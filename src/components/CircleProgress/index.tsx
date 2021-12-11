import React, { useMemo } from 'react';
import styled from 'styled-components';

const HALF = 50;
const HORSESHOE = 76;

const Wrapper = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 390px) {
    height: 124px;
  }
`;

export type CircleProgressProps = {
  percents: number;
  bg?: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
  fill?: string;
  animationTime?: number;
  rotate?: number;
  onAnimationFinished?: () => void;
  cut?: 'none' | 'half' | 'horseshoe';
  children?: any;
};

const CircleProgress: React.FC<CircleProgressProps> = ({
  percents,
  color = '#fff',
  bg = '#5168B8',
  size = 80,
  strokeWidth = 6,
  fill = 'transparent',
  rotate = -90,
  cut = 'none',
}) => {
  const { radius, center, circumference, bgStrokeDashOffset, rotation, strokeDashOffset } = useMemo(() => {
    const r = size / 2 - strokeWidth / 2;
    const c = 2 * Math.PI * r;
    let bgStrokeValue = 100;
    let rt = rotate;
    if (cut !== 'none') {
      bgStrokeValue = cut === 'half' ? HALF : HORSESHOE;
      rt = cut === 'half' ? -180 : 134;
    }

    let preparedValue = percents;
    if (cut !== 'none') {
      preparedValue = cut === 'half' ? (percents * HALF) / 100 : (percents * HORSESHOE) / 100;
    }

    const sd = c - (c * preparedValue) / 100;

    return {
      radius: r,
      center: size / 2,
      circumference: c,
      bgStrokeDashOffset: c - (c * bgStrokeValue) / 100,
      rotation: rt,
      strokeDashOffset: sd,
    };
  }, [size, strokeWidth, rotate, cut, percents]);

  return (
    <Wrapper>
      <svg width={size} height={size}>
        <g>
          <circle
            cx={center}
            cy={center}
            r={radius}
            stroke={bg}
            strokeWidth={1}
            fill={fill}
            transform={`rotate(${rotation} ${center} ${center})`}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={bgStrokeDashOffset}
          />
          <circle
            cx={center}
            cy={center}
            transform={`rotate(${rotation} ${center} ${center})`}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill={fill}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashOffset}
            strokeLinecap="round"
          />
        </g>
      </svg>
    </Wrapper>
  );
};

export default CircleProgress;
