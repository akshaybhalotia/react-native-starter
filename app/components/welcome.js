'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  Navigator,
  View
} from 'react-native';
import Form from './form';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = { textColor: '#2279FF' };
  }

  _proceedButtonPressed() {
    this.props.navigator.push({
      name: 'Sign Up',
      component: Form
    });
  }

  _highlight() {
    this.setState({ textColor: 'white' });
  }

  _unhighlight() {
    this.setState({ textColor: '#2279FF' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          Got started, edited index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <TouchableHighlight
          onPress={this._proceedButtonPressed.bind(this)}
          style={styles.action}
          activeOpacity={0.9}
          underlayColor='#2279FF'
          delayPressIn={40}
          onPressIn={this._highlight.bind(this)}
          onPressOut={this._unhighlight.bind(this)}
          >
          <Text style={{ color: this.state.textColor }}>Click here to proceed</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  action: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#2279FF',
  },
});

module.exports = Welcome;
module.exports.Styles = styles;
