import React, { Component } from 'react';
import './App.css';
import { getUrls, postUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      error: ''
    }
  }

  componentDidMount() {
    getUrls()
      .then(data => {
        console.log(data)
        this.setState({urls : data.urls})
      })
    .catch(() => this.setState({ error: 'Something went wrong'}))
  }

  submitUrl = (newUrl) => {
    postUrls(newUrl)
      .then(result => 
        this.setState({urls: [...this.state.urls, result]}))
      .catch(() => this.setState({ error: 'Please fill out the form before submitting'}))
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm submitUrl={this.submitUrl}/>
        </header>
        {this.state.urls.length && !this.state.error && 
          <UrlContainer urls={this.state.urls}/>
        }
      </main>
    );
  }
}

export default App;
