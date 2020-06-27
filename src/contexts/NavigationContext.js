import React, {createContext, useRef} from 'react';
const NavigationContext = createContext();

const NavigationContextProvider = (props) => {
  const underlineRef = useRef(null);
  const aboutLinkRef = useRef(null);
  const portfolioLinkRef = useRef(null);
  const testimonialsLinkRef = useRef(null);
  const contactLinkRef = useRef(null);

  // Handles updating page when navigation link clicked
  const updateNavLocation = (
    linkRef,
    instant = false,
    fullRedirect = false,
  ) => {
    if (linkRef === null || typeof linkRef === 'undefined') {
      // We are going to a page which isn't found
      document.documentElement.scrollTop = 0;
      underlineRef.current.style.width = '0';
      return;
    }

    // Are we navigating to the page we're currently on?
    let samePage = false;

    const boundingRect = linkRef.current.getBoundingClientRect();

    const width = boundingRect.width;
    const height = boundingRect.height;
    const left = boundingRect.left;
    const top = boundingRect.top;

    if (
      Math.trunc(left) ===
      parseInt(underlineRef.current.style.left.slice(0, -2))
    )
      samePage = true;

    instant && (underlineRef.current.style.transition = 'none');
    underlineRef.current.style.width = `${width}px`;
    underlineRef.current.style.height = `3px`;
    underlineRef.current.style.left = `${left}px`;
    underlineRef.current.style.top = `${top + height - 10}px`;
    underlineRef.current.style.transform = 'none';
    instant &&
      setTimeout(
        () => (underlineRef.current.style.transition = 'all 0.35s ease-in-out'),
        10,
      );

    if (fullRedirect) {
      // Animate scroll to top if we're on the same page
      if (samePage) {
        const duration = 800;

        // Cancel if already on top
        if (document.scrollingElement.scrollTop === 0) return;

        const cosParameter = document.scrollingElement.scrollTop / 2;
        let scrollCount = 0,
          oldTimestamp = null;

        function step(newTimestamp) {
          if (oldTimestamp !== null) {
            // If duration is 0 scrollCount will be Infinity
            scrollCount += (Math.PI * (newTimestamp - oldTimestamp)) / duration;
            if (scrollCount >= Math.PI)
              return (document.scrollingElement.scrollTop = 0);
            document.scrollingElement.scrollTop =
              cosParameter + cosParameter * Math.cos(scrollCount);
          }
          oldTimestamp = newTimestamp;
          window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);
      } else {
        document.documentElement.scrollTop = 0;
      }
    }
  };

  return (
    <NavigationContext.Provider
      value={{
        underlineRef: underlineRef,
        aboutLinkRef: aboutLinkRef,
        portfolioLinkRef: portfolioLinkRef,
        testimonialsLinkRef: testimonialsLinkRef,
        contactLinkRef: contactLinkRef,
        updateNavLocation: updateNavLocation,
      }}>
      {props.children}
    </NavigationContext.Provider>
  );
};

export {NavigationContextProvider, NavigationContext};
