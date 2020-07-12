import React from 'react';
import {useLocation} from 'react-router-dom';

const WorkExperienceOrProjectPage = (props) => {
  const location = useLocation();

  return (
    <>
      <div className="main-div">
        <div className="wkexp-project-card z-depth-5">
          {/* <div className="tcard-header flex-row">
            <img src={props.img} alt="" />
            <div className="flex-col center flex-1">
              <h5 className="medium-text no-margin">{props.name}</h5>
              <h6 className="no-margin">{credential}</h6>
            </div>
          </div>
          <div className="tcard-body">
            <p>{props.text}</p>
          </div>
          <div className="tcard-footer">
            <p className="">~ {props.date}</p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default WorkExperienceOrProjectPage;
