import { Box, Container, createTheme, Stack, ThemeProvider } from "@mui/material";
import Feed from "./compents/Feed";
import Rightbar from "./compents/Rightbar";
import Sidebar from "./compents/Sidebar";
import Navbar from "./compents/Navbar";
import Add from "./compents/Add";
import { useState } from "react";


function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette:{
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box backgroundColor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-evenly">
      <Sidebar setMode={setMode} mode={mode}/>
      <Feed/>
      <Rightbar/>
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
