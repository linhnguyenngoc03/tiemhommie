import { Container } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';

export const CheckInView = ({children} : any) => {
  const elementRef = useRef(null);
  const [isVisible, setIsvisible] = useState<any>(false)
  useEffect(() => {
    const checkIfVisible = () => {
      const element : any = elementRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const isVisible = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
      );
      setIsvisible(isVisible)
      // console.log(isVisible)
    };

    window.addEventListener('scroll', checkIfVisible);
    window.addEventListener('resize', checkIfVisible);

    // Kiểm tra lần đầu khi component được mount
    checkIfVisible();

    // Cleanup listener khi component unmount
    return () => {
      window.removeEventListener('scroll', checkIfVisible);
      window.removeEventListener('resize', checkIfVisible);
    };
  }, []);

  return (
    <>
    <div ref={elementRef}>
      {children}
    </div>
    <div style={{
      position: "fixed",
      width: "100%",
      bottom: "0",
      left: "0",
      display: isVisible? "none" : "block"
    }}>
      <div style={{
          boxShadow: "0px 0px 5px black"
      }}>{children}</div>
    </div>
    </>
  );
};
