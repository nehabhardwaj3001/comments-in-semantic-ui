import React from 'react';
import {faker}  from '@faker-js/faker';
import { Comment } from 'semantic-ui-react';

const CommentDetail = (props) => (
  <Comment.Group>
  
    <Comment>
      <Comment.Avatar src={faker.image.avatar()} />
      <Comment.Content>
        <Comment.Author as='a'>{props.name}</Comment.Author>
        <Comment.Metadata>
          <div>Today at {props.time}PM</div>
        </Comment.Metadata>
        <Comment.Text>{props.comment}</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

  </Comment.Group>
)

export default CommentDetail;
