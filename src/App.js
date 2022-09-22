import Layout from "./Layout/Layout";
import theme from "./theme";
import {ThemeProvider} from '@mui/material'
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <Layout />
      </ThemeProvider>
    </div>
  );
}

export default App;
