'use strict';
import React, {
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  ScrollView,
  TextInput,
  DatePickerIOS,
  View
} from 'react-native';

import Navbar from './navbar';

class Form extends Component {
  constructor(props) {
    super(props);
    var now = new Date();
    var year = now.getFullYear();
    var desiredYear = year - 12;
    this.maxDate = new Date(desiredYear, now.getMonth(), now.getDay());
    this.state = { name: '', email: '', password: '', confirmPassword: '', dateOfBirth: this.maxDate, description: '', agree: false, submitButtonColor: '#2279FF' };
  }

  _back() {
    this.props.navigator.pop();
  }

  nameChanged(e) {
    this.setState({ name: e });
  }

  emailChanged(e) {
    this.setState({ email: e });
  }

  passwordChanged(e) {
    this.setState({ password: e });
  }

  confirmPasswordChanged(e) {
    this.setState({ confirmPassword: e });
  }

  dateOfBirthChanged(e) {
    this.setState({ dateOfBirth: e });
  }

  descriptionChanged(e) {
    this.setState({ description: e });
  }

  agreementChanged(e) {
    this.setState({ agree: e });
  }

  _highlight() {
    this.setState({ submitButtonColor: 'white' });
  }

  _unhighlight() {
    this.setState({ submitButtonColor: '#2279FF' });
  }

  submitPressed() {

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
            autoCorrect={false}
            style={styles.textInput}
            onChangeText={this.nameChanged.bind(this)}
            value={this.state.name}
            placeholder="Your name"
            />
          <TextInput
            autoCorrect={false}
            keyboardType='email-address'
            style={styles.textInput}
            onChangeText={this.emailChanged.bind(this)}
            value={this.state.email}
            placeholder="Email address"
            />
          <TextInput
            autoCorrect={false}
            secureTextEntry={true}
            style={styles.textInput}
            onChangeText={this.passwordChanged.bind(this)}
            value={this.state.password}
            placeholder="Create a password"
            />
          <TextInput
            autoCorrect={false}
            secureTextEntry={true}
            style={styles.textInput}
            onChangeText={this.confirmPasswordChanged.bind(this)}
            value={this.state.confirmPassword}
            placeholder="Confirm password"
            />
          <DatePickerIOS
            mode='date'
            onDateChange={this.dateOfBirthChanged.bind(this)}
            date={this.state.dateOfBirth}
            style={styles.datePicker}
            maximumDate={this.maxDate}
            />
          <TextInput
            autoCorrect={false}
            multiline={true}
            style={[styles.textInput, styles.textField]}
            onChangeText={this.descriptionChanged.bind(this)}
            value={this.state.description}
            placeholder="Bio / Intro"
            />
          <TouchableHighlight
            onPress={this.submitPressed.bind(this)}
            style={styles.action}
            activeOpacity={0.9}
            underlayColor='#2279FF'
            delayPressIn={40}
            onPressIn={this._highlight.bind(this)}
            onPressOut={this._unhighlight.bind(this)}>
            <Text style={{ color: this.state.submitButtonColor }}>Submit</Text>
          </TouchableHighlight>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 32,
    width: 300,
    padding: 4,
    marginTop: 12,
    borderWidth: 1,
    marginBottom: 12,
    borderColor: 'gray',
    backgroundColor: 'white',
  },
  textField: {
    height: 160,
  },
  datePicker: {
    width: 300,
  },
  action: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#2279FF',
  },
});

module.exports = Form;
module.exports.Styles = styles;
