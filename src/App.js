import React, { Component } from "react";
import ApiService from "./services/apiService";
import { observer } from "mobx-react";
import { observable, action } from "mobx";

import Header from "./components/header";
import PokemonList from "./components/pokemon/PokemonList";
import Spinner from "./components/spinner";
import Popup from "./components/popup";
import PaginationBtns from "./components/paginationBtns";

@observer
class App extends Component {
  apiService = new ApiService();
  regex = /\/([0-9]*)\/$/;

  @observable data = [];
  @observable isLoad = false;
  @observable popup = false;
  @observable limitChangerView = false;
  @observable currentPoke = null;
  @observable offset = 0;
  @observable limit = 20;

  componentDidMount() {
    this.getAllPoke();
  }

  getAllPoke = () => {
    this.isLoad = false;
    this.data = [];
    this.apiService
      .getData(`pokemon?offset=${this.offset}&limit=${this.limit}`)
      .then(this.getPoke);
  };

  render() {
    if (!this.isLoad) {
      return <Spinner />;
    }

    return (
      <>
        <Header
          limitChangerView={this.limitChangerView}
          limit={this.limit}
          toggleLimitChanger={this.toggleLimitChanger}
          changeLimit={this.changeLimit}
        />
        <div className="container">
          <PokemonList data={this.data} openPopup={this.openPopup} />
          <PaginationBtns nextPoke={this.nextPoke} prevPoke={this.prevPoke} />
        </div>
        {this.popup ? (
          <Popup currentPoke={this.currentPoke} closePopup={this.closePopup} />
        ) : null}
      </>
    );
  }

  @action
  getPoke = data => {
    data.results.forEach(async (el, i) => {
      try {
        const response = await this.apiService.getCurrentPoke(
          el.url.match(this.regex)[1]
        );
        this.data = [...this.data, response];
      } catch (e) {
        throw new Error(`Error ${e}`);
      }
      if (i === data.results.length - 1) {
        this.isLoad = true;
      }
    });
  };

  @action
  openPopup = e => {
    this.currentPoke = this.data.find(el => +el.id === +e.target.dataset.id);
    this.popup = true;
  };

  @action
  closePopup = () => {
    this.popup = false;
  };

  @action
  nextPoke = () => {
    this.offset += this.limit;
    this.getAllPoke();
  };

  @action
  prevPoke = () => {
    if (this.offset !== 0) {
      this.offset -= this.limit;
      this.getAllPoke();
    }
  };

  @action
  toggleLimitChanger = () => {
    this.limitChangerView = !this.limitChangerView;
  };

  @action
  changeLimit = e => {
    this.limit = +e.target.textContent
    this.offset = 0
    this.getAllPoke();
  };
}

export default App;
