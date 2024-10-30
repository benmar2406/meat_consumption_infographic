const updatePath = (
    chartRef,
    meatIconRef,
    infoCircle1Ref,
    humansFed1Ref,
    infoCircle2Ref,
    humansFed2Ref,
    setPath1,
    setPath2,
    setPath3,
    setPath4,
    setPath5
) => {
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

            if (infoCircle1Ref.current && humansFed1Ref.current) {
              const infoCircle1Rect = infoCircle1Ref.current.getBoundingClientRect();
              const humansFed1Rect = humansFed1Ref.current.getBoundingClientRect();

              const startX = infoCircle1Rect.left + infoCircle1Rect.width / 2;
              const startY = infoCircle1Rect.bottom;
              
              const endX = humansFed1Rect.left + humansFed1Rect.width / 2;
              const endY = humansFed1Rect.top;
  
              setPath3(`M ${startX},${startY} C ${startX},${startY + 50} ${endX},${endY - 50} ${endX},${endY}`);

            if (chartRef.current && infoCircle2Ref.current) {
              const chartRect = chartRef.current.getBoundingClientRect();
              const infoCircle2Rect = infoCircle2Ref.current.getBoundingClientRect();

              const startX = chartRect.left + chartRect.width / 2;
              const startY = chartRect.bottom;
              
              const endX = infoCircle2Rect.left + infoCircle2Rect.width / 2;
              const endY = infoCircle2Rect.top;
  
              setPath4(`M ${startX},${startY} C ${startX},${startY + 50} ${endX},${endY - 50} ${endX},${endY}`);
            }

            if (infoCircle2Ref.current && infoCircle2Ref.current) {
              const infoCircle2Rect = infoCircle2Ref.current.getBoundingClientRect();
              const humansFed2Rect = humansFed2Ref.current.getBoundingClientRect();

              const startX = infoCircle2Rect.left + infoCircle2Rect.width / 2;
              const startY = infoCircle2Rect.bottom;
              
              const endX = humansFed2Rect.left + humansFed2Rect.width / 2;
              const endY = humansFed2Rect.top;
  
              setPath5(`M ${startX},${startY} C ${startX},${startY + 50} ${endX},${endY - 50} ${endX},${endY}`);
            }
          }
        }
      };

      export default updatePath;
