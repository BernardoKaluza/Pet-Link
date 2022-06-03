
import * as React from "react";

import ChatBot from 'react-simple-chatbot';

import { ThemeProvider } from 'styled-components';
let renderCounter = 0;

export default function Cart () {
    
  if (true) {
    renderCounter+=1;
    console.log(`renderCount: ${renderCounter}`);
  }

  
  const theme = { //Chat shit
    background: '#f5f8fb',
    fontFamily: 'Roboto',
    headerBgColor: '#ea6a47',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#ea6a47',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
  


  return(

   
    <div style = {{ marginLeft: '240px'}} >
     <ThemeProvider  theme={theme}>
      <ChatBot steps={[
         {
          id: '1',
          message: 'What is your name?',
          trigger: '2',
        },
        {
          id: '2',
          user: true,
          trigger: '3',
        },
        {
          id: '3',
          message: 'Hi {previousValue}, nice to meet you!',
          end: true,
        },
          
        ]} />;
      </ThemeProvider>

    </div>




  )
}