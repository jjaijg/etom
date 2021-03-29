import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import Navbar from './components/navbar';
import SideNav from './components/sidenav';
import { Container } from './styles/baseStyles';
import { GlobalStyles } from './theme/GlobalStyles';
import useTheme from './theme/useTheme';

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
          <GlobalStyles />
          <Navbar
            open={isMenuOpen}
            toggleMenu={handleMenuOpenState}
            isThemeToggled={toggleTheme}
            toggleTheme={handleToggleTheme}
          />
          <SideNav open={isMenuOpen} />
          <Container
            style={{ fontFamily: selectedTheme.font, marginTop: '60px' }}
          >
            <h1>Theme Builder</h1>
            <p>
              This is a theming system with a Theme Switcher and Theme Builder.
              Do you want to see the source code?
            </p>
          </Container>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
