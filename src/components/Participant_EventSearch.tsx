import React from 'react';
import {Text,Input,Card,Image,Button,Container,Grid} from '@mantine/core';
import {VscListUnordered,VscSearch} from 'react-icons/vsc';
import './Participant_EventSearch.css';
const Participant_EventSearch = () => {
    return(
        <div>
        <div>
        <Text  className = "head">行事に参加する</Text> 
        </div>
        
            <Grid className = "searchfolder"> 
                <Grid.Col span = {1}>
                <Button 
                variant="light" 
                color="gray"
                leftIcon={ <VscSearch />}>
                </Button>
              
                </Grid.Col>
                <Grid.Col span = {6}>
                    <Input className = "search" placeholder = "検索"　/>
                    </Grid.Col>
               
                <Grid.Col span = {3}>
                    <Text>並べ替え</Text>
                    </Grid.Col>
                    <Grid.Col  span = {1}>
            
                    <VscListUnordered/>
                        
                </Grid.Col>
            </Grid>  
            
        
        <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
            <Grid.Col style ={{maxWidth:350}} sm={4} xs={4} span = {4}>
        <Card className = "card_1" shadow="sm" radius="md" withBorder>
            <Card.Section >
             <Image height = {260} 
             //src = ""
             />
            </Card.Section>
            <Text className = "cardtext">(行事名) </Text>
            <Text className = "cardtext"> 主催者:(主催者)</Text>
            <Text className = "cardtext"> 開催日時:(開催日時)</Text>
            <Text className = "cardtext"> 受付時間:〇月〇日〇時~〇月〇日〇時</Text>
            <Text className = "cardtext">          </Text>
            <Text className = "cardtext"> 行事の種類</Text>
            <Text className = "cardtext">(行事の種類)</Text>
            <Text className = "cardtext">内容</Text>
            <Text className = "cardtext">(内容)</Text>
            <Text className = "cardtext">参加人数:〇人</Text>
            <Text className = "cardtext">その他</Text>
            <Text className = "cardtext">(その他)</Text>
            <Button className = 'button'>予約画面へ</Button>
        </Card>
        </Grid.Col>

       <Grid.Col　style ={{maxWidth:350}} sm={4} xs={4} span = {4}>
        <Card className = "card_2" shadow="sm" radius="md" withBorder>
            <Card.Section>
             <Image height = {260} 
             //src = ""
             />
            </Card.Section>
            <Text className = "cardtext">(行事名) </Text>
            <Text className = "cardtext"> 主催者:(主催者)</Text>
            <Text className = "cardtext"> 開催日時:(開催日時)</Text>
            <Text className = "cardtext"> 受付時間:〇月〇日〇時~〇月〇日〇時</Text>
            <Text className = "cardtext">          </Text>
            <Text className = "cardtext"> 行事の種類</Text>
            <Text className = "cardtext">(行事の種類)</Text>
            <Text className = "cardtext">内容</Text>
            <Text className = "cardtext">(内容)</Text>
            <Text className = "cardtext">参加人数:〇人</Text>
            <Text className = "cardtext">その他</Text>
            <Text className = "cardtext">(その他)</Text>
            <Button className = 'button'>予約画面へ</Button>
        </Card>
        </Grid.Col> 

        </Grid>
        
       
        </div>
        

    )
}

export default Participant_EventSearch;