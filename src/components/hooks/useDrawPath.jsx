import { useEffect, useState, useCallback } from 'react';

const useDrawPath = (
    chartRef,
    meatIconRef,
    infoCircle1Ref,
    humansFed1Ref,
    infoCircle2Ref,
    humansFed2Ref
) => {
  const [path1, setPath1] = useState('');
  const [path2, setPath2] = useState('');
  const [path3, setPath3] = useState('');
  const [path4, setPath4] = useState('');
  const [path5, setPath5] = useState('');

  const updatePath = useCallback(() => {
      if (chartRef.current && meatIconRef.current) {
          const chartRect = chartRef.current.getBoundingClientRect();
          const meatRect = meatIconRef.current.getBoundingClientRect();
          const startX = chartRect.left + chartRect.width / 2;
          const startY = chartRect.bottom;
          const endX = meatRect.left + meatRect.width / 2;
          const endY = meatRect.top;
          setPath1(`M ${startX},${startY} C ${startX},${startY + 50} ${endX},${endY - 50} ${endX},${endY}`);
      }

      if (meatIconRef.current && infoCircle1Ref.current) {
          const meatRect = meatIconRef.current.getBoundingClientRect();
          const infoCircle1Rect = infoCircle1Ref.current.getBoundingClientRect();
          const startX = meatRect.left + meatRect.width / 2;
          const startY = meatRect.bottom;
          const endX = infoCircle1Rect.left + infoCircle1Rect.width / 2;
          const endY = infoCircle1Rect.top;
          setPath2(`M ${startX},${startY} C ${startX},${startY + 50} ${endX},${endY - 50} ${endX},${endY}`);
      }

      if (infoCircle1Ref.current && humansFed1Ref.current) {
          const infoCircle1Rect = infoCircle1Ref.current.getBoundingClientRect();
          const humansFed1Rect = humansFed1Ref.current.getBoundingClientRect();
          const startX = infoCircle1Rect.left + infoCircle1Rect.width / 2;
          const startY = infoCircle1Rect.bottom;
          const endX = humansFed1Rect.left + humansFed1Rect.width / 2;
          const endY = humansFed1Rect.top;
          setPath3(`M ${startX},${startY} C ${startX},${startY + 50} ${endX},${endY - 50} ${endX},${endY}`);
      }

      if (chartRef.current && infoCircle2Ref.current) {
          const chartRect = chartRef.current.getBoundingClientRect();
          const infoCircle2Rect = infoCircle2Ref.current.getBoundingClientRect();
          const startX = chartRect.left + chartRect.width / 2;
          const startY = chartRect.bottom;
          const endX = infoCircle2Rect.left + infoCircle2Rect.width / 2;
          const endY = infoCircle2Rect.top;
          setPath4(`M ${startX},${startY} C ${startX},${startY + 50} ${endX},${endY - 50} ${endX},${endY}`);
      }

      if (infoCircle2Ref.current && humansFed2Ref.current) {
          const infoCircle2Rect = infoCircle2Ref.current.getBoundingClientRect();
          const humansFed2Rect = humansFed2Ref.current.getBoundingClientRect();
          const startX = infoCircle2Rect.left + infoCircle2Rect.width / 2;
          const startY = infoCircle2Rect.bottom;
          const endX = humansFed2Rect.left + humansFed2Rect.width / 2;
          const endY = humansFed2Rect.top;
          setPath5(`M ${startX},${startY} C ${startX},${startY + 50} ${endX},${endY - 50} ${endX},${endY}`);
      }
  }, [chartRef, meatIconRef, infoCircle1Ref, humansFed1Ref, infoCircle2Ref, humansFed2Ref]);

  useEffect(() => {
      updatePath();

      window.addEventListener('resize', updatePath);
      window.addEventListener('scroll', updatePath);

      return () => {
          window.removeEventListener('resize', updatePath);
          window.removeEventListener('scroll', updatePath);
      };
  }, [updatePath]);

  return { path1, path2, path3, path4, path5 };
};

export default useDrawPath;
