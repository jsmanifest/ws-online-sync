import React from 'react'

const context = {
  //
}

const AppContext = React.createContext(context)

class AppContextProvider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ...context,
    }
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export { AppContextProvider }

export default AppContext
