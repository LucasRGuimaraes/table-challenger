import { ThemeProvider } from "@mui/material";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
