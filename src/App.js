import React, { Component } from 'react';
import logo from './logo.svg';
import {
  Grid,
  Jumbotron,
  Tabs,
  Tab,
  Panel,
} from 'react-bootstrap'
import API from './utils/API'
import './App.css';
import Config from './components/Trainset/Config'


class App extends Component {
  state = {
    config: {},
    schedule: {},
    probe: {},
    deploy: {},
    key: 1
  }
  componentDidMount() {
    this.getConfig();
  }
  getConfig = () => {
    API.getConfig().then(res => {    
      this.setState({config: res.data}, ()=>{ console.log(this.state.config)})
    
    }).catch( error => {
      console.log(error)
    })
  }

  getSchedule = () => {


  }
  getProbe = () => {


  }
  getDeploy = () => {


  }
getInitialState() {
  return this.state.key;
}

handleSelect(keytab) {
  console.log(`selected ${keytab}`);
  this.setState({key: keytab});
}
  render() {
    return (
      <div>
        <Grid bsClass="container-fluid">
          <Grid bsclass="container">
            <Jumbotron>
              <img src={logo} className="App-logo" alt="logo" />
              <h1> sh3rp is an arse </h1>
            </Jumbotron>
          </Grid>
          <Grid bsClass="container">
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
              <Tab eventKey={1} title="Config">
                <Config config={this.state.config.data} messasge={this.state.config.message}/>
              </Tab>
              <Tab eventKey={2} title="Tab 2">
                <Panel header="THe turd burglers">
                  THings
                </Panel>
              </Tab>
              <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
            </Tabs>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
