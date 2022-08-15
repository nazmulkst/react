// import Text from './components/inheritance/Text';
import Bracket from './components/composition/Bracket';
import Emoji from './components/composition/Emoji';
import Text from './components/composition/Text';
import Calculator from './components/pages/Calculator';
import ClockList from './components/pages/ClockList';
import Form from './components/pages/Form';

function App(){
  const quantities = [1,2,3];
  return (
    <div>
      <Emoji>
        {/* {({addEmoji}) => <Text addEmoji={addEmoji} />} */}
          {({addEmoji}) => (
            <Bracket>
              {({addBracket}) => (
                <Text addEmoji={addEmoji} addBracket={addBracket} />
              )}
            </Bracket>
          )}
      </Emoji>
      <Calculator />
      <Form />
      {/* <Clock area="Dhaka" /> */}
      <ClockList quantities={quantities} area="Dhaka" />
    </div>
  );
};

export default App;
