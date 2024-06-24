import React from 'react';
import MyCount from './MyCount';
import "../App.css";

const MyMenu = () => {
  return (
    <div>
      <h2>메뉴</h2>
      <MyCount fruitName="사과" />
      <MyCount fruitName="배" />
      <MyCount fruitName="귤" />
    </div>
  );
};

export default MyMenu;