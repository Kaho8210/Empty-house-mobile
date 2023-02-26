import { Grid } from '@mantine/core';

function Demo() {
  return (
    <div className="App">
    <Grid justify = "space-around">
      <Grid.Col style = {{maxWidth: 350}} sm ={4} xs = {4}>1</Grid.Col>
      <Grid.Col style = {{maxWidth: 350}} sm ={4} xs = {4}>2</Grid.Col>
      <Grid.Col style = {{maxWidth: 350}} sm ={4} xs = {4}>3</Grid.Col>
      
    </Grid>
    </div>
  );
}