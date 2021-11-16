import { React, memo } from 'react';
import './index.css';

const Menu = ({ menu }) => {
  return (
    <ul>
      {menu.map((item, index) => (
        <li key={index} className="menu-item">
          <img className="photo" src={item.img} alt="food" />
          <div className="item-info">
            <header>
              <h4>{item.title}</h4>
              <p className="price">{item.price}</p>
            </header>
            <p className="item-text">{item.desc}</p>
          </div>
        </li>)
      )}
    </ul>
  );
};

export default memo(Menu);
