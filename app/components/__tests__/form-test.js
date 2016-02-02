jest.dontMock('../form');

import React, {
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  Navigator,
  ScrollView,
  TextInput,
  DatePickerIOS,
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
    expect(scrollview.props.children[0].type).toBe(TextInput);
    expect(scrollview.props.children[0].props.placeholder).toBe('Your name');
  });

  it("scrollview contains Email input", function() {
    var content = result.props.children[1];
    var scrollview = content.props.children;
    expect(scrollview.props.children[1].type).toBe(TextInput);
    expect(scrollview.props.children[1].props.placeholder).toBe('Email address');
  });

  it("scrollview contains Password input", function() {
    var content = result.props.children[1];
    var scrollview = content.props.children;
    expect(scrollview.props.children[2].type).toBe(TextInput);
    expect(scrollview.props.children[2].props.placeholder).toBe('Create a password');
  });

  it("scrollview contains Confirm Password input", function() {
    var content = result.props.children[1];
    var scrollview = content.props.children;
    expect(scrollview.props.children[3].type).toBe(TextInput);
    expect(scrollview.props.children[3].props.placeholder).toBe('Confirm password');
  });

  it("scrollview contains Date input", function() {
    var content = result.props.children[1];
    var scrollview = content.props.children;
    expect(scrollview.props.children[4].type).toBe(DatePickerIOS);
  });

  it("scrollview contains Bio input", function() {
    var content = result.props.children[1];
    var scrollview = content.props.children;
    expect(scrollview.props.children[5].type).toBe(TextInput);
    expect(scrollview.props.children[5].props.placeholder).toBe('Bio / Intro');
  });

  describe("", function() {

    var form, navigator, submitButton, backButton, datePicker;
    beforeEach(function() {
      var baseTime = new Date(2015, 1, 2);
      jasmine.clock().mockDate(baseTime);
      navigator = TestUtils.renderIntoDocument(
        <Navigator />
      );
      spyOn(navigator, 'pop');
      spyOn(Form.prototype, 'submitPressed');
      form = TestUtils.renderIntoDocument(
				<Form navigator={navigator}/>
				);
      var childElements = TestUtils.scryRenderedComponentsWithType(form, View);
      var mainView = childElements[0];
      var navbar = mainView.props.children[0];
      backButton = navbar.props.children.find(function(element, index, array) {
        return TestUtils.isElementOfType(element, TouchableHighlight);
      });
      var mainContent = mainView.props.children[1];
      var scrollView = mainContent.props.children;
      submitButton = scrollView.props.children.find(function(element, index, array) {
        return TestUtils.isElementOfType(element, TouchableHighlight);
      });
      datePicker = scrollView.props.children.find(function(element, index, array) {
        return TestUtils.isElementOfType(element, DatePickerIOS);
      });
    });

    it("has a maxDate 12 years ago", function() {
      expect(form.maxDate.getFullYear()).toEqual((new Date()).getFullYear() - 12);
    });

    it("pressing highlights text in submitButton", function() {
      submitButton.props.onPressIn();

      expect(form.state.submitButtonColor).toEqual('white');
    });

    it("releasing returns text in submitButton to normal", function() {
      submitButton.props.onPressOut();

      expect(form.state.submitButtonColor).toEqual('#2279FF');
    });

    it("pops to previous screen on pressing back", function() {
      backButton.props.onPress();

      expect(navigator.pop).toHaveBeenCalled();
    });

    it("submits sign up form", function() {
      submitButton.props.onPress();

      expect(Form.prototype.submitPressed).toHaveBeenCalled();
    });
  });
});
