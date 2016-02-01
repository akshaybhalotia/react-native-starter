jest.dontMock('../form');

import React, {
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  Navigator,
  ScrollView,
  TextInput,
  View
} from 'react-native';

var TestUtils = require('react-addons-test-utils');
var Form = require('../form');
var styles = require('../form').Styles;
var Navbar = require('../navbar');

describe("Form", function() {

  var result;
  beforeEach(function() {
    var renderer = TestUtils.createRenderer();
    renderer.render(<Form />);
    result = renderer.getRenderOutput();
  });

  it("renders a View", function() {
    expect(result.type).toBe(View);
  });

  it("contains Navbar", function() {
    expect(result.props.children[0].type).toBe(Navbar);
  });

  it("navbar contains button", function() {
    var navbar = result.props.children[0];
    expect(navbar.props.children[0].type).toBe(TouchableHighlight);
  });

  it("navbar contains title", function() {
    var navbar = result.props.children[0];
    expect(navbar.props.children[1].type).toBe(Text);
  });

  it("contains Content", function() {
    expect(result.props.children[1].type).toBe(View);
  });

  it("content contains ScrollView", function() {
    var content = result.props.children[1];
    expect(content.props.children.type).toBe(ScrollView);
  });

  it("scrollview contains Name input", function() {
    var content = result.props.children[1];
    var scrollview = content.props.children;
    expect(scrollview.props.children.type).toBe(TextInput);
    expect(scrollview.props.children.props.placeholder).toBe('Your name');
  });
});
