var React = require('react');

var ReactNative = React;

ReactNative.StyleSheet = {
    create: function(styles) {
        return styles;
    }
};

//Yup, quite naive
class View extends React.Component {
  render() {
    return false;
  }
}
class Text extends React.Component {
  render() {
    return false;
  }
}
class TouchableHighlight extends React.Component {
  render() {
    return false;
  }
}
class ScrollView extends React.Component {
  render() {
    return false;
  }
}
class TextInput extends React.Component {
  render() {
    return false;
  }
}
class Navigator extends React.Component {
  render() {
    return false;
  }
  push(object) {
    return false;
  }
}

ReactNative.AppRegistry = {
  registerComponent: jest.genMockFn()
}

ReactNative.View = View;
ReactNative.Text = Text;
ReactNative.TouchableHighlight = TouchableHighlight;
ReactNative.Navigator = Navigator;
ReactNative.ScrollView = ScrollView;
ReactNative.TextInput = TextInput;

module.exports = ReactNative;
