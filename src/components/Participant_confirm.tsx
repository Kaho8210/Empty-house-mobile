import React from 'react';
import {Text,Input,Card,Image,Button,Container,Grid} from '@mantine/core';
import {VscListUnordered,VscSearch} from 'react-icons/vsc';
import './Participant_confirm.css';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
const Participant_confirm = () => {
    return(
        <div>
      <div>
        <Text className = "text" c = "white">予約を確定します。</Text>
        <Text className = "text" c = "white">よろしいですか？</Text>
        <Text className = "text"> </Text>
        </div>

        <div>
            <Link to = "./confirmed">
        <Button className = "button" top = {250}>はい</Button>
        </Link>
        </div>

        <div>
            <Link to = "/home/participantHome/EventSearch/detail/">
        <Button className = "button" top = {350}>戻る</Button>
        </Link>
        </div>
        </div>
      
    )
}

export default Participant_confirm;