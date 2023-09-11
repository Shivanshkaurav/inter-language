import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ColorModeSwitcher from './ColorModeSwitcher'
import * as ReactDOM from 'react-dom/client';
import App from './App';
import "./i18n";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
    <App />
    <ColorModeSwitcher />
    </ChakraProvider>
    
  </StrictMode>
);
