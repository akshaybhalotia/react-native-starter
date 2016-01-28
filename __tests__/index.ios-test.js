jest.dontMock('../index.ios');

import React, {
  AppRegistry,
  Component,
  Navigator
} from 'react-native';

var TestUtils = require('react-addons-test-utils');
import AwesomeProject, {RouteStack} from '../index.ios';
import Welcome from '../app/components/welcome';

describe("AwesomeProject", function() {

  describe("", function() {
    var result;
    beforeEach(function() {
      var renderer = TestUtils.createRenderer();
      renderer.render(<AwesomeProject />);
      result = renderer.getRenderOutput();
    });

    it("renders a Navigator", function() {

      expect(result.type).toBe(Navigator);
    });

    it("renders Welcome component", function() {
      expect(result.props).toEqual({ initialRoute: { name: 'Welcome', component: Welcome }, renderScene: jasmine.any(Function) });
    });
  });

  describe("renders Welcome in renderScene", function() {

    var awesomeProject;
    beforeEach(function() {
      awesomeProject = TestUtils.renderIntoDocument(
        <AwesomeProject />
        );
    });

    it("", function() {
      var mock = jasmine.createSpy('navigator');
      var result = awesomeProject.renderScene(RouteStack.welcome, mock);

      expect(result).toEqual(<Welcome navigator={mock} />);
    });
  });
});
