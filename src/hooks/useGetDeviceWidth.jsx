  //check if desktpop or mobile width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [notDesktop, setNotDesktop] = useState();
  console.log(notDesktop)
    useEffect(() => {
        const handleResize = () =>  {
          setScreenWidth(window.innerWidth);
          setNotDesktop(screenWidth < 900);

        }
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [screenWidth]);