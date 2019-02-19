import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";
import LanguageContext from "../context/LanguageContext";

class App extends Component {
  state = { language: 'english' };
  static contextType = LanguageContext;

  onLanguageChange = language => {
    console.log(this.context)
    this.setState({language})
  };

  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header language={() => this.onLanguageChange()} />
            <Switch>
              <Route path="/" exact component={StreamList} />
              <Route path="/streams/new" exact component={StreamCreate} />
              <Route path="/streams/edit/:id" exact component={StreamEdit} />
              <Route path="/streams/delete/:id" exact component={StreamDelete} />
              <Route path="/streams/:id" exact component={StreamShow} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
