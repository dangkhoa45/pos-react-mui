import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import POSPage from "./pages/POSPage";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <POSPage />
    </ThemeProvider>
  );
}
