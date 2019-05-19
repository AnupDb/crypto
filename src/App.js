import React from "react";
import AppLayout from "./AppLayout";
import "./App.css";
import AppBar from "./AppBar";
import { AppProvider } from "./AppProvider";
import Settings from "./settings/Settings";

function App() {
  return (
    <AppLayout className="App">
      <AppProvider>
        <AppBar />
        <Settings />
      </AppProvider>
    </AppLayout>
  );
}

export default App;
