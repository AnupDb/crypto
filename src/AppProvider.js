import React from "react";
const cc = require("cryptocompare");

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Dashboard",
      setPage: this.setPage,
      ...this.savedSettings(),
      confirmFavorites: this.confirmFavorites
    };
  }

  componentDidMount = () => {
    this.fetchCoins();
  };

  fetchCoins = async () => {
    let coinList = await cc.coinList().Data;
    this.setState({ coinList });
  };
  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: "Dashboard"
    });
    localStorage.setItem(
      "cryptoView",
      JSON.stringify({
        test: "hello"
      })
    );
  };

  savedSettings() {
    let cryptoView = JSON.parse(localStorage.getItem("cryptoView"));
    if (!cryptoView) {
      return { page: "Settings", firstVisit: true };
    }
  }

  setPage = page => {
    this.setState({ page });
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
