jest.dontMock('../index.ios');

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

var TestUtils = require('react-addons-test-utils');
var AwesomeProject = require('../index.ios');
var styles = require('../index.ios').Styles;

describe("AwesomeProject", function() {

  var result;
  beforeEach(function() {
    var renderer = TestUtils.createRenderer();
    renderer.render(<AwesomeProject />);
    result = renderer.getRenderOutput();
  });

  it("renders a View", function() {
    expect(result.type).toBe(View);
  });

  it("contains Text", function() {
    expect(result.props.children).toContain(<Text style={styles.instructions}>Got started, edited index.ios.js</Text>);
  });

  it("contains Button", function() {
    expect(result.props.children).toContain(<TouchableHighlight
      onPress={jasmine.any(Function)}
      style={styles.action}
      activeOpacity = {0.8}
      underlayColor='red'
      >
      <Text>Click here to proceed</Text>
    </TouchableHighlight>);
  });

  describe("#_proceedButtonPressed", function() {
    
    var awesomeProject;
    beforeEach(function() {
      awesomeProject = TestUtils.renderIntoDocument(
				<AwesomeProject />
				);
    });
  });
});
