import LangProvider from "./components/Langprovider";
import Header from "./components/Header";
import "./App.css"

function App() {
  return (
    <LangProvider>
      <Header />
    </LangProvider>
  );
}

export default App;