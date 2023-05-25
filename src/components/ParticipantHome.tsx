import React from 'react'
import {Button} from '@mantine/core';
import "./ParticipantHome.css"
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom" ;

const ParticipantHome = () => {
  return (
    <div> 
      <div>
        <Link to ="./EventSearch">
    <Button className = "button_1">
    行事の参加予定
  </Button>
  </Link>
</div>
<div>

  <Button className = "button_2">
      予約している行事
    </Button>
   
  </div>
  </div>
    
  )
}

export default ParticipantHome;