import React, {createContext, useRef} from 'react';
const NavigationContext = createContext();

const NavigationContextProvider = (props) => {
  const underlineRef = useRef(null);
  const aboutLinkRef = useRef(null);
  const portfolioLinkRef = useRef(null);
  const testimonialsLinkRef = useRef(null);
  const contactLinkRef = useRef(null);

  // Handles moving the underline when a link is clicked
  const updateNavLocation = (
    linkRef,
    instant = false,
    fullRedirect = false,
  ) => {
    const boundingRect = linkRef.current.getBoundingClientRect();

    const width = boundingRect.width;
    const height = boundingRect.height;
    const left = boundingRect.left;
    const top = boundingRect.top;

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

    if (fullRedirect) document.documentElement.scrollTop = 0;
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
