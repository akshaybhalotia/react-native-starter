jest.dontMock('../index.ios');

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
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
});

// const shallowRenderer = TestUtils.createRenderer();
//
// class MyComponent extends View {
//     render() {
//         return (<Text>Hello!</Text>);
//     }
// }
//
// shallowRenderer.render(<MyComponent>Hello</MyComponent>);
// let output = shallowRenderer.getRenderOutput();
//
// console.log(output);
