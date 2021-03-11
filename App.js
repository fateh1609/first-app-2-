import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 200 }}>
        <CustomButton buttonColor="red" message="error code:92" />
                <CustomButton buttonColor="blue" message="error code:57" />
                        <CustomButton buttonColor="green" message="error code:62" />
        <Text>Fateh's first App good</Text>
      </View>
    );
  }
}

class CustomButton extends React.Component {
  displayAlert=()=> {
    alert(this.props.message);
  }
  render() {
    return (
      <View>
        <Button title="Click me" color={this.props.buttonColor} onPress={this.displayAlert} />
      </View>
    );
  }
}
