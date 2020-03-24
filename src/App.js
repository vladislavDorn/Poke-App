import React, { Component } from "react";
import ApiService from "./services/apiService";
import DevTools from 'mobx-react-devtools'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

import PokemonList from "./components/pokemon/PokemonList";
import Spinner from "./components/spinner";
import Popup from "./components/popup";

class App extends Component {
  apiService = new ApiService();
  regex = /\/([0-9]*)\/$/;

  state = {
    isLoad: false,
    data: [],
    popup: false,
    currentPoke: null,
    limit: 20,
    offset: 0
  };

  componentDidMount() {
    this.getAllPoke();
  }

  getAllPoke = () => {
    this.setState({
      isLoad: false
    });
    this.apiService
      .getData(`pokemon?offset=${this.state.offset}&limit=${this.state.limit}`)
      .then(res => {
        res.results.forEach((el, i) => {
          this.apiService
            .getCurrentPoke(el.url.match(this.regex)[1])
            .then(res => {
              this.setState({ data: [...this.state.data, res] });
            });
          if (i === res.results.length - 1) {
            this.setState({ isLoad: true });
          }
        });
      });
  };

  openPopup = url => {
    this.setState({ popup: true });
    this.apiService.getCurrentPoke(url.match(this.regex)[1]).then(res => {
      this.setState({ currentPoke: res });
    });
  };

  closePopup = () => {
    this.setState({ popup: false, currentPoke: null });
  };

  changeLimit = e => {
    this.setState({ limit: +e.target.textContent });
  };

  render() {
    const { isLoad, data, popup, currentPoke } = this.state;
    return (
      <>
        <div className="container">
          {isLoad && data.length ? <PokemonList data={data} /> : <Spinner />}
        </div>
        {popup ? <Popup currentPoke={currentPoke} /> : null}
      </>
    );
  }
}

export default App;