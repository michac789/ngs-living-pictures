import { createGlobalStyle } from 'styled-components';
import { colors } from './constants/colors';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
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
  ::-webkit-scrollbar-track {
    background-color: ${colors.Neutral200};
  }
`;
