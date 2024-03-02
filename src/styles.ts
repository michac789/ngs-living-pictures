import { createGlobalStyle } from 'styled-components';
import { breakpoints } from './constants/styles/breakpoints';
import { colors } from './constants/styles/colors';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
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
    background-color: ${colors.Neutral300};
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @media (max-width: ${breakpoints.medium}) {
    *::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    }
    *::-webkit-scrollbar-thumb {
      border-radius: 3px;
    }
  }

  @media (max-width: ${breakpoints.small}) {
    *::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    }
    *::-webkit-scrollbar-thumb {
      border-radius: 2px;
    }
  }
`;
