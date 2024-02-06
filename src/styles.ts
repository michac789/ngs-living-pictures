import { createGlobalStyle } from 'styled-components';
import { colors } from './constants/colors';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  *::-webkit-scrollbar {
    width: 8px;
  }
  *::-webkit-scrollbar-thumb {
    background-color: ${colors.Neutral500};
    border-radius: 4px;
    border: none;
  }
  *::-webkit-scrollbar-thumb:hover {
    background-color: ${colors.Neutral600};
  }
`;
