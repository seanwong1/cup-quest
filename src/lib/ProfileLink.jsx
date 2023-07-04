import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProfileLink = (props) => {

  return (
    <Link to={{
      pathname: `/user/${props.name}`,
      state: {nanme: props.name}
    }}>
      <div className="profile-name" >{props.name}</div>
    </Link>
  )
}

export default ProfileLink;