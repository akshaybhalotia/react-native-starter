jest.dontMock('../navbar');

import React, {
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  Navigator,
  View
} from 'react-native';

var TestUtils = require('react-addons-test-utils');
var Navbar = require('../navbar');

describe("Navbar", function() {

  var result, navigator;
  beforeEach(function() {
    navigator = TestUtils.renderIntoDocument(
      <Navigator />
    );
    var renderer = TestUtils.createRenderer();
    renderer.render(<Navbar />);
    result = renderer.getRenderOutput();
  });

  it("renders a View", function() {
    expect(result.type).toBe(View);
  });
});
