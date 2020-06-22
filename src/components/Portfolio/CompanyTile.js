import React from 'react';
import {Link} from 'react-router-dom';

const CompanyTile = (props) => {
  const {img, title, path} = props.data;
  return (
    <div className="company-tile z-depth-5">
      <img src={img}></img>
      <p className="tile-title">{title}</p>
      <p className="tile-main">{props.children}</p>
      <div className="ghost"></div>
      <Link to={path} className="tile-footer">
        View Details
      </Link>
    </div>
  );
};

export default CompanyTile;
