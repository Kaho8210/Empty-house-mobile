import React from 'react'
import {Button,Center} from '@mantine/core';
import "./ParticipantHome.css"

const ParticipantHome = () => {
  return (
    <div> 
      <div>
    <Button color="violet" radius="md" size="lg" top = {200}>
    行事の参加予定
  </Button>
</div>
<div>

  <Button color="violet" radius="md" size="lg" top = {300}>
      予約している行事
    </Button>
   
  </div>
  </div>
    
  )
}

export default ParticipantHome;