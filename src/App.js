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
import Schedule from './components/Trainset/Schedule'
import Probe from './components/Trainset/Probe'
import Deploy from './components/Trainset/Deploy'



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
    this.getSchedule();
    this.getProbe();
    this.getDeploy();

  }
  getConfig = () => {
    API.getConfig().then(res => {
      this.setState({ config: res.data })

    }).catch(error => {
      console.log(error)
    })
  }

  getSchedule = () => {
    API.getSchedule().then(res => {
      this.setState({ schedule: res.data })

    }).catch(error => {
      console.log(error)
    })

  }
  getProbe = () => {
    API.getProbe().then(res => {
      this.setState({ probe: res.data })

    }).catch(error => {
      console.log(error)
    })

  }
  getDeploy = () => {
    API.getDeploy().then(res => {
      this.setState({ deploy: res.data })

    }).catch(error => {
      console.log(error)
    })

  }
  getInitialState() {
    return this.state.key;
  }

  handleSelect(keytab) {
    this.setState({ key: keytab });
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
            <Tabs defaultActiveKey={1} id="tabs">
              <Tab eventKey={1} title="Config">
                <Config config={this.state.config.data} />
              </Tab>
              <Tab eventKey={2} title="Schedule">
                <Schedule schedule={this.state.schedule.data} />
              </Tab>
              <Tab eventKey={3} title="Probe">
                <Probe probe={this.state.probe.data} />       
              </Tab>
              <Tab eventKey={4} title="Deploy">
                <Deploy deploy={this.state.deploy.data} />
              </Tab>
            </Tabs>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
