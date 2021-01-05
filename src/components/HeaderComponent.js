import React from 'react';
import { Link } from 'react-router-dom';

// Icon imports
import { Menu, EmojiObjects } from '@material-ui/icons';

const HeaderComponent = (props) => {
  const {
    routes,
    underlineRef,
    aboutLinkRef,
    portfolioLinkRef,
    testimonialsLinkRef,
    contactLinkRef,
    atTop,
    updateNavLocation,
    setSidenavShowing,
    prevRoute,
    darkMode,
    setDarkMode,
    darkTextHovered,
    setDarkTextHovered,
  } = props.data;

  return (
    <header className="navbar-fixed">
      <nav className={'nav-wrapper ' + (atTop ? '' : 'shadow')}>
        {/* Main navbar list */}
        <ul>
          <li id="sidenav-trigger">
            <a href="#!" onClick={() => setSidenavShowing(true)}>
              <Menu />
            </a>
          </li>
          <li id="brand-logo" style={{ position: 'relative' }}>
            <Link
              style={{ position: 'relative' }}
              to={routes.portfolio}
              onClick={() =>
                updateNavLocation(routes.portfolio, false, true, prevRoute)
              }
            >
              Matthew Lin
            </Link>
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  width: '10rem',
                  left: '2px',
                  display: 'flex',
                  justifyContent: 'flex-start',
                }}
              >
                <p
                  className={`dark-header-text ${darkTextHovered && 'hovered'}`}
                  onMouseOver={() => {
                    setDarkTextHovered(true);
                  }}
                >
                  &nbsp; ^ try dark mode
                </p>
                <button
                  className={`dark-mode-toggle ${!darkMode && 'dark-mode'}`}
                  onClick={() => {
                    if (!darkTextHovered) setDarkTextHovered(true);
                    const root = document.documentElement;
                    const changedColors = [
                      'accent',
                      'primary',
                      'contrast-light',
                      'contrast',
                    ];

                    for (let i = 0; i < changedColors.length; ++i) {
                      document.documentElement.style.setProperty(
                        `--color-${changedColors[i]}`,
                        getComputedStyle(root).getPropertyValue(
                          `--${!darkMode ? 'dark' : 'light'}-color-${
                            changedColors[i]
                          }`,
                        ),
                      );
                    }
                    setDarkMode(!darkMode);
                  }}
                >
                  <EmojiObjects style={{ width: '2rem', height: '3rem' }} />
                </button>
              </div>
            </div>
          </li>
          <li id="invisible-item"></li>
          <li>
            <Link
              to={routes.about}
              onClick={() => updateNavLocation(routes.about, false, true)}
              ref={aboutLinkRef}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={routes.portfolio}
              onClick={() => updateNavLocation(routes.portfolio, false, true)}
              ref={portfolioLinkRef}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to={routes.testimonials}
              onClick={() =>
                updateNavLocation(routes.testimonials, false, true)
              }
              ref={testimonialsLinkRef}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to={routes.contact}
              onClick={() => updateNavLocation(routes.contact, false, true)}
              ref={contactLinkRef}
            >
              Contact
            </Link>
          </li>
        </ul>
        <span id="underline" ref={underlineRef} />
      </nav>
    </header>
  );
};

export default HeaderComponent;
