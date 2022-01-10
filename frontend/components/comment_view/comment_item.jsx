import React from "react";
import ProfileImage from "../profile_view/profile_image";

export default function CommentItem(props) {
  const comment = props.comment;
  const timestamp = createTimestamp(new Date(), new Date(comment.created_at))
  const user = props.user;

  return (
    <div className='comment'>
      <ProfileImage user={props.user}/>
      <div className='content'>
        <header className='header'>
          <span className='name'>
            { user.name }
          </span>
        </header>
        <span className='date'>
          {timestamp}
        </span>
        <span className='body'>{comment.body}</span>
        <div className='action-buttons'>
          {actionButtons}
        </div>
      </div>
    </div>
  )
}