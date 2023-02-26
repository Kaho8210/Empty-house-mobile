import React from 'react'
import { Button } from '@mantine/core';

const ParticipantHome = () => {
  return (
    <div> 
      <Button color="violet" radius="md" size="lg">
    行事の参加予定
  </Button>
  <Button color="violet" radius="md" size="lg">
      予約している行事
    </Button>
  </div>
    
  )
}

export default ParticipantHome;