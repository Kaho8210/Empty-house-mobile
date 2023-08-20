import React from 'react';
import {Text,Input,Card,Image,Button,Container,Grid} from '@mantine/core';
import {VscListUnordered,VscSearch} from 'react-icons/vsc';
import './Participant_confirmed.css';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
const Participant_confirmed = () => {
return(
    <div>
        
      <Text>予約を確定しました</Text>
      

      
      <Text>「行事の予約状況」ボタンから</Text>
      <Text c = "rgba(36, 0, 255, 0.7)">詳細を見る </Text>
      <Text> で予約の取り消しができます</Text>
      

      <Text>行事名</Text>
      <Text>(行事名)</Text>
      <Text>行事開催日</Text>
      <Text>(行事の開催日時)</Text>
      <Text>行事の種類</Text>
      <Text>(行事の種類)</Text>
      <Text>内容(必須)</Text>
      <Text>(行事の内容)</Text>
      <Text>応募人数</Text>
      <Text>(人数)</Text>
      <Text>その他</Text>

      <Link to = "/home">
      <Button top = {450} className = "button">ホームに戻る</Button>
      </Link>
        
    </div>
)
}

export default Participant_confirmed;