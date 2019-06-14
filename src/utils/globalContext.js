import React from "react";

const GlobalContext = React.createContext({});

export class GlobalContextProvider extends React.Component {
  state = {
    title: ""
  };

  render() {
    return (
      <GlobalContext.Provider
        value={{
          title: this.state.title
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

// create the consumer as higher order component
export const withGlobalContext = ChildComponent => props => (
  <GlobalContext.Consumer>
    {context => <ChildComponent {...props} global={context} />}
  </GlobalContext.Consumer>
);
