import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//Components
import Featured from './featured';
import Subscriptions from './subscriptions';
import Blocks from './blocks';
import Poll from './poll';

const url_home = 'http://localhost:3004/home';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            home: ''
        }
    }

    componentDidMount() {
        fetch(url_home, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            this.setState({
                home: json
            })
        });
    }

    render() {
        return(
          <div>
            <Featured slides={this.state.home.slider} />
            <Subscriptions />
            <Blocks blocks={this.state.home.blocks}/>
            <Poll/>
          </div> 
        );
    }
}

export default Home;