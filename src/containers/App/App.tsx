// Third party libraries
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";

// Shared internal imports
import { RouteRenderer } from "routes";
import { Header } from "components/Layouts";
import { LightMode, DarkMode } from "themes";

// Internal imports
import { AppWrapper } from "./styles";

const App = () => {
  // HOOKS
  const [isDarkMode, setIsDarkMode] = useState(true);

  // CLIENTS
  const queryClient = new QueryClient();

  // HANDLERS
  const handleToogleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={isDarkMode ? DarkMode : LightMode}>
          <AppWrapper flexFlow="column nowrap">
            <Header handleClickDarkMode={handleToogleDarkMode} />
            <RouteRenderer />
          </AppWrapper>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
