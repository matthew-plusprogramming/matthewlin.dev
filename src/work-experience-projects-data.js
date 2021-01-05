const data = {
  'work-experience': {
    robolink: {
      image: require('./res/robolink.png'),
      title: 'Robolink - STEM Intern',
      time:
        'Teaching STEM to kids of all ages. Holds year around robotics camps & produces educational STEM materials --- June 2019 - August 2019 (3 Months)',
      sections: [
        {
          title: 'Responsibilities:',
          notes: [
            'Instructed classes pertaining to STEM education utilizing Python & C++.',
            'Developed documentation for STEM learning materials using Python, HTML, and Markdown.',
          ],
        },
      ],
      links: ['Company Website', 'https://robolink.com'],
    },
    programination: {
      image: require('./res/programination.png'),
      title: 'Programination - Part Time SWE (Former intern)',
      time:
        'Creating high quality web and mobile applications of all kinds for clients --- June 2020 - Present',
      sections: [
        {
          title: 'General:',
          notes: [
            'Technologies: NodeJS, ReactJS, React Native, ExpressJS, GraphQL, Postgres.',
            'Worked on development teams for various company internal projects, and client projects.',
          ],
        },
        {
          title: 'Frontend:',
          notes: [
            'Utilized React Native on development team for several company clients.',
            "Implemented ghost blog functionality natively into the company's website.",
          ],
        },
        {
          title: 'Backend:',
          notes: [
            'Utilized NodeJS as back end developer for company clients.',
            "Implemented reverse proxy server to handle ghost blog & general backend tasks related to the company's website.",
          ],
        },
      ],
      links: ['Company Website', 'https://programination.com'],
    },
  },
  projects: {
    'fast-engine': {
      image: require('./res/projects/fast-engine.png'),
      title: 'Fast Engine',
      time: 'A simple game engine written in C++ using SDL',
      sections: [
        {
          title: 'Details:',
          notes: [
            'Created with C++/SDL.',
            "Created for my personal, and others' use to create games easily in C++.",
          ],
        },
      ],
      links: [
        'GitHub Page',
        'https://github.com/matthew-plusprogramming/FastEngine',
      ],
    },
    'matthewlin-dev': {
      image: require('./res/projects/matthewlin-dev.png'),
      title: 'matthewlin.dev',
      time: 'This website created with ReactJS, ExpressJS, and NodeJS',
      sections: [
        {
          title: 'Details:',
          notes: [
            'I started creating this site while I was learning react.',
            'Frontend written in ReactJS.',
            'Backend written in NodeJS & ExpressJS.',
          ],
        },
      ],
      links: [
        'This page',
        'https://matthewlin.dev/projects/matthewlin-dev',
        'This site',
        'https://matthewlin.dev',
      ],
    },
  },
};

export default data;
