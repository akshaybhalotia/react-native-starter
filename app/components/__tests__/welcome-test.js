jest.dontMock('../welcome');

import React, {
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  Navigator,
  View
} from 'react-native';

var TestUtils = require('react-addons-test-utils');
var Welcome = require('../welcome');
var styles = require('../welcome').Styles;
var Navbar = require('../navbar');

describe("Welcome", function() {

  var result;
  beforeEach(function() {
    var renderer = TestUtils.createRenderer();
    renderer.render(<Welcome />);
    result = renderer.getRenderOutput();
  });

  it("renders a View", function() {
    expect(result.type).toBe(View);
  });

  it("contains Navbar", function() {
    expect(result.props.children).toContain(<Navbar><Text style={styles.title}>Welcome!</Text></Navbar>);
  });

  it("contains Text", function() {
    expect(result.props.children[1].props.children).toContain(<Text style={jasmine.any(Object)}>Got started, edited index.ios.js</Text>);
  });

  it("contains Button", function() {
    expect(result.props.children[1].props.children).toContain(<TouchableHighlight
      onPress={jasmine.any(Function)}
      style={styles.action}
      activeOpacity = {0.9}
      underlayColor='#2279FF'
      delayPressIn={40}
      onPressIn={jasmine.any(Function)}
      onPressOut={jasmine.any(Function)}
      >
      <Text style={{ color: '#2279FF' }}>Click here to proceed</Text>
    </TouchableHighlight>);
  });

  describe("has a button which on", function() {

    var welcome, navigator, button;
    beforeEach(function() {
      navigator = TestUtils.renderIntoDocument(
        <Navigator />
      );
      spyOn(navigator, 'push');
      welcome = TestUtils.renderIntoDocument(
				<Welcome navigator={navigator}/>
				);
      var childElements = TestUtils.scryRenderedComponentsWithType(welcome, View);
      var mainView = childElements[0];
      var mainContent = mainView.props.children[1];
      button = mainContent.props.children.find(function(element, index, array) {
        return TestUtils.isElementOfType(element, TouchableHighlight);
      });
    });

    it("pressing highlights text in button", function() {
      button.props.onPressIn();

      expect(welcome.state).toEqual({ textColor: 'white' });
    });

    it("releasing returns text in button to normal", function() {
      button.props.onPressOut();

      expect(welcome.state).toEqual({ textColor: '#2279FF' });
    });

    it("proceeds to sign up form", function() {
      button.props.onPress();

      expect(navigator.push).toHaveBeenCalled();
    });
  });
});
