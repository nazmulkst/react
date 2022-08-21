// import Text from './components/inheritance/Text';
import React from 'react';
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
import Section from './contexts/Section';
import ThemeContext from './contexts/ThemeContext';


class App extends React.Component{
  state = {
    theme: 'dark',
    switchTheme: () => {
      this.setState(({theme}) => {
        if(theme === 'dark'){
          return {
            theme: 'lite'
          }
        } else {
          return {
            theme: 'dark'
          }
        }
      })
    }
  }
  // const quantities = [1,2,3];
  
  // switchTheme = () => {
  //   this.setState(({theme}) => {
  //     if(theme === 'dark'){
  //       return {
  //         theme: 'lite'
  //       }
  //     } else {
  //       return {
  //         theme: 'dark'
  //       }
  //     }
  //   })
  // }
  render() {
    // const {theme} = this.state;
    return (
      <div>
         <ThemeContext.Provider value={this.state}><Section /></ThemeContext.Provider>
        <Counter>
        {/* <ThemeContext.Provider value={{theme, switchTheme: this.switchTheme}}><Section /></ThemeContext.Provider>
        <Counter> */}
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
        <ClockList quantities={[1,2,3]} area="Dhaka" />
      </div>
    );
  }
};

export default App;
