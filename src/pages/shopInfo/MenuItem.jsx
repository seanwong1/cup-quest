/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

const MenuItem = ({ item }) => {
  useEffect(() => {
    console.log('hello?');
  }, [])
  return (
    <div className="overview_menuItem">
      <h3>{item}</h3>
    </div>
  )
}

export default MenuItem;