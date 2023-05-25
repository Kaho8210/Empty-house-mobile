import React from 'react';
import { Button } from '@mantine/core';

const OrganizerHome: React.FC = () => {
  const orangeButtonStyle: React.CSSProperties = {
    position: 'absolute',
    width: '215px',
    height: '48px',
    left: '65px',
    background: 'rgba(255, 107, 0, 0.7)',
    boxShadow: '5px 5px 4px rgba(0, 0, 0, 0.45)',
    borderRadius: '9px',
  };

  return (
    <div>
      <Button style={{ ...orangeButtonStyle, top: '190px' }}>
        行事の開催予約
      </Button>
      <Button style={{ ...orangeButtonStyle, top: '310px' }}>
        行事の予約状況
      </Button>
      <Button style={{ ...orangeButtonStyle, top: '430px' }}>
        写真を掲載する
      </Button>
    </div>
  );
};

export default OrganizerHome;