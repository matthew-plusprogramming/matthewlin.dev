import React from 'react';

const TestimonialCard = (props) => {
  const {employment, formerEmployment} = props;

  // Calculate employment jsx
  let credential = [];
  for (let i = 0; i < employment.length; i += 3) {
    credential.push(
      <span key={i}>
        {i !== 0 ? ' / ' : ''}
        {employment[i]} at{' '}
        <a href={employment[i + 2]} target="_blank" rel="noopener noreferrer">
          {employment[i + 1]}
        </a>
      </span>,
    );
  }
  // Calculate former employment jsx
  if (formerEmployment) {
    for (let i = 0; i < formerEmployment.length; i += 3) {
      credential.push(
        <span key={i + employment.length}>
          <i>
            {i === 0 ? ', ' : ' '}
            Formerly {formerEmployment[i]} at{' '}
            <a
              href={formerEmployment[i + 2]}
              target="_blank"
              rel="noopener noreferrer">
              {formerEmployment[i + 1]}
            </a>
          </i>
        </span>,
      );
    }
  }

  return (
    <div className="testimonial-card z-depth-5">
      <div className="tcard-header flex-row">
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
      </div>
    </div>
  );
};

export default TestimonialCard;
