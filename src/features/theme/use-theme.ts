import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import { useEffect } from 'react';

import { setTheme, Theme } from './theme-slice';
import { selectTheme } from './theme-selectors';

export const useTheme = (): [Theme, () => void] => {
  const dispatch = useAppDispatch();
  const theme = useSelector(selectTheme);

  const toggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return [theme, toggleTheme];
};
