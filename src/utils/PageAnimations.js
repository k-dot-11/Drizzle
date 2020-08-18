export const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.4
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 0
    }
  };
  
  export const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.7
  };
  
  export const pageStyle = {
    position: "absolute"
  };