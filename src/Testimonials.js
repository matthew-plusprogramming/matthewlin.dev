import React from 'react';
import './styles/page.scss';
import './styles/testimonials.scss';

import TestimonialCard from './components/Testimonials/TestimonialCard';

import personPlaceholder from './res/testimonials/person-placeholder.jpg';
import ashelyDuren from './res/testimonials/ashley-duren.jpg';
import raymondMitchell from './res/testimonials/raymond-mitchell.jpg';
import edisonJimenez from './res/testimonials/edison-jimenez.jpg';

const About = () => {
  return (
    <>
      <main id="testimonials">
        <div className="main-div">
          <div className="flex-row center">
            <h4 className="no-margin medium-text page-title">Testimonials</h4>
          </div>
          <div className="flex-row center fade-in-after-page-title-load flex-container">
            <h5>
              I have gotten the privilege of working with some amazing people
              over the last few years, here are some of their thoughts!
            </h5>
          </div>

          <div
            id="testimonial-cards"
            className="flex-col fade-in-after-page-title-load">
            <TestimonialCard
              img={edisonJimenez}
              name="Edison Jimenez"
              employment={[
                'CEO',
                'Programination',
                'https://programination.com',
              ]}
              text="Matthew is a great example of what it means to be a
              self-starter. No matter what projects we threw at him, Matthew
              always took the initiative to go above and beyond project
              requirements. I highly recommend Matthew's services to anyone
              looking to hire him."
              date="07/13/2020"
            />
            <TestimonialCard
              img={raymondMitchell}
              name="Raymond Mitchell"
              employment={[
                'Professor',
                'UCSD Extension',
                'https://extension.ucsd.edu/about-extension/raymond-mitchell-iii',
                'Director of Software Engineering',
                'Fairway Technologies',
                'https://fairwaytech.com/',
              ]}
              text="Matthew took my C/C++ III, C/C++ IV, and Data Structures &
              Algorithms courses at UCSD Extension. His enthusiasm to absorb as
              much knowledge as possible was impressive. He often had thoughtful
              and appropriate questions after class. He stands out as one of the
              top few students I've had in 10+ years of teaching. I am sure that
              he will go very far in whatever field he chooses. If you have an
              opportunity to work with him I'm sure you'll be as delighted as I
              was to have him in my classes. It was an honor to have a student
              like Matthew - they are very rare!"
              date="02/07/2019"
            />
            <TestimonialCard
              img={ashelyDuren}
              name="Ashley Duren"
              employment={[
                'Vice Principal',
                'Morse High School',
                'https://www.sandiegounified.org/schools/morse/vice-principal-ms-duren',
              ]}
              formerEmployment={[
                'Teacher',
                'Pacific Beach Middle School',
                'https://www.sandiegounified.org/schools/pacific-beach-middle',
              ]}
              text="Mathew is a self-starter with the inner fire to accomplish
              his goals. He knows what he wants and is not afraid of the hard
              work necessary to get there. I have no doubt Mathew will be a
              success in whatever path he chooses to traverse, and uncover new
              discoveries along the way. His ambitions and talents are
              inspiring!"
              date="01/31/2019"
            />
            <TestimonialCard
              img={personPlaceholder}
              name="Anton Corbin"
              employment={[
                'Computer Animation / Game Design Teacher',
                'Mission Bay High School',
                'https://www.sandiegounified.org/schools/mission-bay',
              ]}
              text="Mathew was a student in my Computer Animation class at
              Mission Bay High School. He has demonstrated an in-depth knowledge
              of computer programming concepts and his drive and curiosity for
              programming and problem solving will take him as far as he wants
              in the Computer Science field."
              date="01/23/2019"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
