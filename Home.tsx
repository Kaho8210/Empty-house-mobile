import React from 'react';
import { Button } from '@mantine/core';
import { Anchor } from '@mantine/core';

const Home: React.FC = () => {
const yellowbuttonStyle: React.CSSProperties = {
position: 'absolute',
width: '316px',
height: '60px',
left: '22px',
top: '126px',
background: '#F9C304',
borderRadius: '10px',
};

const orangebuttonStyle: React.CSSProperties = {
  position: 'absolute',
  width: '316px',
  height: '210px',
  left: '22px',
  top: '222px',
  background: 'rgba(255, 107, 0, 0.7)',
  borderRadius: '25px',
  };

const violetbuttonStyle: React.CSSProperties = {
  position: 'absolute',
  width: '316px',
  height: '210px',
  left: '22px',
  top: '468px',
  background: 'rgba(36, 0, 255, 0.7)',
  borderRadius: '25px',
};

const chara: React.CSSProperties = {
  position: 'absolute',
  width: '240px',
  height: '0px',
  left: '60px',
  top: '738px',
  color: '#000000',
};

return (
<div>
<Button style={yellowbuttonStyle}>
お知らせ
</Button>
<Button style={orangebuttonStyle}>
行事の開催
</Button>
<Button style={violetbuttonStyle}>
行事に参加
</Button>
<Anchor style={chara} href="https://" target="_blank">
以前に参加した行事を見る
</Anchor>
</div>
);
};

export default Home;