'use strict';
import React, {
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  ScrollView,
  TextInput,
  View
} from 'react-native';

import Navbar from './navbar';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', password: '', dateOfBirth: '', description: '', agree: false };
  }

  _back() {
    this.props.navigator.pop();
  }

  nameChange(e) {
    this.setState({ name: e });
  }

  render() {
    return (<View style={styles.container}>
      <Navbar>
        <TouchableHighlight
          onPress={this._back.bind(this)}
          style={styles.navButton}
          underlayColor='#F0F0F0'>
          <Text style={styles.button}>Back</Text>
        </TouchableHighlight>
        <Text style={styles.title}>Sign Up</Text>
      </Navbar>
      <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <TextInput
            style={styles.textInput}
            onChangeText={this.nameChange.bind(this)}
            value={this.state.name}
            placeholder="Your name"
            />
        </ScrollView>
      </View>
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
  button: {
    fontSize: 16,
    color: '#2279FF',
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
  },
  textInput: {
    height: 20,
    width: 300,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1
  },
});

module.exports = Form;
module.exports.Styles = styles;
