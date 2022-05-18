import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native'

export default class MyButton extends Component {

      render() {
            return (
                  <TouchableOpacity style={[styles.button, { backgroundColor: this.props.bgColor }]} onPress={this.props.onPress}>
                        <Text style={[styles.text, { color: this.props.textColor }]}>{this.props.text}</Text>
                  </TouchableOpacity>
            );
      }
}

const styles = StyleSheet.create({
      container: {

      },
      button: {
            alignItems: 'center',
            fontSize: 24,
            marginVertical: 14,
            color: '#333',
            paddingVertical: 15,
            borderRadius: 5,
      },
      text: {
            fontSize: 16,
      }
});