import Usememo from "./Usememo";
import WithoutUsememo from "./WithoutUsememo";

function App() {
  return (
    <div className="App">
      <h1>Without UseMemo Hook</h1>
      <WithoutUsememo />
      <h1>UseMemo Hook</h1>
      <Usememo />
    </div>
  );
}

export default App;
// Ref :https://dmitripavlutin.com/react-usememo-hook/