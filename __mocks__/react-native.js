var React = require('react');

var ReactNative = React;

ReactNative.StyleSheet = {
    create: function(styles) {
        return styles;
    }
};

//Yup, quite naive
class View extends React.Component {}
class Text extends React.Component {}
class TouchableHighlight extends React.Component {}

ReactNative.AppRegistry = {
  registerComponent: jest.genMockFn()
}

ReactNative.View = View;
ReactNative.Text = Text;
ReactNative.TouchableHighlight = TouchableHighlight;

module.exports = ReactNative;
