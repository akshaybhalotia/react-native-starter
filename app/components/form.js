'use strict';
import React, {
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';
import Navbar from './navbar';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  _back() {
    this.props.navigator.pop();
  }

  render() {
    return (<View style={styles.container}>
      <Navbar>
        <TouchableHighlight onPress={this._back.bind(this)} style={styles.navButton}>
          <Text>Back</Text>
        </TouchableHighlight>
        <Text style={styles.title}>Sign Up</Text>
      </Navbar>
      <View style={styles.content}></View>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  navButton: {
    left: 8,
    top: 28,
    height: 24,
  },
  title: {
    left: 100,
    bottom: 5,
    width: 120,
    fontSize: 24,
    textAlign: 'center',
    position: 'absolute',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = Form;
module.exports.Styles = styles;
