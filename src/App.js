import { useEffect, useState, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import Loader from './components/loader';
import Navbar from './components/navbar';
import SideNav from './components/sidenav';
import { Container } from './styles/baseStyles';
import { GlobalStyles } from './theme/GlobalStyles';
import useTheme from './theme/useTheme';
// import HistoryPage1 from './pages/history';
const HistoryPage = lazy(() => import('./pages/history'));
const RocketPage = lazy(() => import('./pages/rockets'));

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [toggleTheme, setToggleTheme] = useState(true);
  const { theme, themeLoaded, getFonts, setMode } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  const handleMenuOpenState = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleToggleTheme = (e) => {
    if (e.target.checked) {
      setToggleTheme(true);
      setMode('earth');
    } else {
      setToggleTheme(false);
      setMode('mars');
    }
  };

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded, theme]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <Suspense fallback={<Loader />}>
            <GlobalStyles />
            <Navbar
              open={isMenuOpen}
              toggleMenu={handleMenuOpenState}
              isThemeToggled={toggleTheme}
              toggleTheme={handleToggleTheme}
            />
            <SideNav open={isMenuOpen} />
            <Container
              style={{ fontFamily: selectedTheme.font, marginTop: '80px' }}
            >
              <Switch>
                <Route path='/history' component={HistoryPage} />
                <Route path='/rockets' component={RocketPage} />
                <Route path='/' exact>
                  EtoM (Earth to Mars) is an informational websit about SpaceX
                </Route>
              </Switch>
            </Container>
          </Suspense>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
