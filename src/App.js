import Calculator from './components/pages/Calculator';
import ClockList from './components/pages/ClockList';
import Form from './components/pages/Form';

function App(){
  const quantities = [1,2,3];
  return (
    <div>
      <Calculator />
      <Form />
      {/* <Clock area="Dhaka" /> */}
      <ClockList quantities={quantities} />
    </div>
  );
};

export default App;
