import React from 'react';
import {Link} from 'react-router-dom';

const HoverTile = (props) => {
  const {img, title, path} = props.data;
  return (
    <div className="hover-tile z-depth-5">
      <img src={img} alt=""></img>
      <p className="tile-title">{title}</p>
      <p className="tile-main">{props.children}</p>
      <div className="ghost"></div>
      <Link to={path} className="tile-footer">
        View Details
      </Link>
    </div>
  );
};

export default HoverTile;
