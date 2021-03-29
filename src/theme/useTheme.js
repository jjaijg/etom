import { useEffect, useState } from 'react';
import { iterateNestedObj } from '../utils/helpers';
import { getFromLS, setToLS } from '../utils/storage';

const useTheme = (props) => {
  const themes = getFromLS('eToM-themes');
  const [theme, setTheme] = useState(themes.data.earth);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode) => {
    console.log('mode : ', mode, themes.data[mode]);
    if (mode) {
      setToLS('theme', themes.data[mode]);
      setTheme(themes.data[mode]);
    }
  };

  const getFonts = () => {
    return iterateNestedObj(themes.data, 'font');
  };

  useEffect(() => {
    const localTheme = getFromLS('theme');
    localTheme ? setTheme(localTheme) : setTheme(themes.data.earth);
    setThemeLoaded(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { theme, themeLoaded, setMode, getFonts };
};

export default useTheme;
