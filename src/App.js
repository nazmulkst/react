// import Text from './components/inheritance/Text';
import Bracket from './components/composition/Bracket';
import Emoji from './components/composition/Emoji';
import Text from './components/composition/Text';
import Counter from './components/HOC/Counter';
import Calculator from './components/pages/Calculator';
import ClickCounter from './components/pages/ClickCounter';
import ClockList from './components/pages/ClockList';
import Form from './components/pages/Form';
import HoverCounter from './components/pages/HoverCounter';
import ClickAction from './components/render/ClickAction';
import HoverAction from './components/render/HoverAction';

function App(){
  const quantities = [1,2,3];
  return (
    <div>
      <Counter>
      {(count, incrementCount) => (
        <ClickAction count={count} incrementCount={incrementCount} />
      )}
      </Counter>
      <Counter>
      {(count, incrementCount) => (
        <HoverAction count={count} incrementCount={incrementCount} />
      )}
      </Counter>
      {/* <Counter 
        render={(count, incrementCount) => (
        <ClickAction count={count} incrementCount={incrementCount} />
      )} /> */}
      {/* <Counter render={(count, incrementCount) => (
        <HoverAction count={count} incrementCount={incrementCount} />
      )} /> */}
      {/* <Counter name={(isLoggedIn) => isLoggedIn ? 'HI TEST' : 'Guest'} /> */}
      <ClickCounter />
      <HoverCounter />
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
