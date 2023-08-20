import React from 'react';
import {Text,Input,Card,Image,Button,Container,Grid} from '@mantine/core';
import {VscListUnordered,VscSearch} from 'react-icons/vsc';
import './Participant_detail.css';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
const Participant_detail = () => {
    return(
        <div>
            <div>
                <Text className = "head"> 行事名:お茶会</Text>
            </div>

            <Card className = "Card1">
                <Image height = {260}  
              />
              </Card>

             <Card className = "Card2">
                <Text>住所: 会津若松市〇-XX</Text>
                <Text>築年数:30年</Text>
                <Text>利用可の人数:10人</Text>
                <Text>募集人数 : 5人（残り2人）</Text>
             </Card>

             <Card className = "Card3">
                <Text>日時: 2023年12月12日（火）</Text>
                <Text>14:00~16:00</Text>
                <Text>その他:食器持参</Text>
             </Card>
             <Link to = "./confirm">
             <Button className = "button"> 予約確定 </Button>
             </Link>
        </div>
    )
}

export default Participant_detail;