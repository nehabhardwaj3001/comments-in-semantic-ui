import React from 'react';
import './App.css';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import { Header } from 'semantic-ui-react';

function App() {
  return (
    <div className="ui container comments"  style={{display : "flex", flexDirection :" column"}}>

      <Header as='h3' dividing>
        Comments
      </Header>
      <ApprovalCard> <CommentDetail name = 'Neha' comment ="Nice!! " time ='2:00'/> </ApprovalCard>
      <ApprovalCard> <CommentDetail name = 'ram' comment =" wonderful!!" time='3:00'/> </ApprovalCard>
      <ApprovalCard> <CommentDetail name = 'shyam' comment =" beautiful!!" time = '4:00 ' /> </ApprovalCard>
      <ApprovalCard> <CommentDetail name = 'geeta' comment =" awesome!!" time='5:00'/> </ApprovalCard>
    </div>

  );
}

export default App;
