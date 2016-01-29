'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  Navigator,
  View
} from 'react-native';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<View style={styles.navbarContainer}>
      {this.props.children}
    </View>);
  }
}

const styles = StyleSheet.create({
  navbarContainer: {
    backgroundColor: '#F0F0F0',
    height: 64,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

module.exports = Navbar;
