jest.dontMock('../form');

import React, {
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  Navigator,
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
    expect(result.props.children).toContain(<Navbar><TouchableHighlight onPress={jasmine.any(Function)} style={styles.navButton}><Text>Back</Text></TouchableHighlight><Text style={styles.title}>Sign Up</Text></Navbar>);
  });
});
