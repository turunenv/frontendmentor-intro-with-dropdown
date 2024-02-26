import { Header } from './components/Header';
import { MainPage } from './components/MainPage';
import { Footer } from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  //this will be removed soon, once desktop layout is implemented
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    //check window width on initial render
    if (window.innerWidth <= 768) {
      setIsDesktop(false);
    }
    //repeat the check on each resize event
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        setIsDesktop(false);
      } else {
        setIsDesktop(true);
      }
    });
  }, []);

  if (isDesktop) {
    return (
      <h1>
        The app can only be viewed on smaller screen sizes at this moment.
      </h1>
    );
  }

  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  );
}

export default App;
