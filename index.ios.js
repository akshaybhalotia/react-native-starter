/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Navigator
} from 'react-native';
import Welcome from './app/components/welcome';
import Form from './app/components/form';

class AwesomeProject extends Component {

  renderScene(route, navigator) {
    var Component = route.component;
    console.log(require('util').inspect(Component, { depth: null }));
    return (
      <Component navigator={navigator} />
    )
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Welcome', component: Welcome }}
        renderScene={this.renderScene}
        />
    );
  }
}

var RouteStack = {
  welcome: {
    component: Welcome
  },
  form: {
    component: Form
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
