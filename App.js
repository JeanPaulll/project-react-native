/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu Jean Paulx',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>

        <View style={styles.postContainer}>
         <Text style={styles.postTitle}> Titulo do post</Text>
         <Text style={styles.postDescription}> Descrição de teste, descrição de teste </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}> Titulo do post</Text>
          <Text style={styles.postDescription}> Descrição de teste, descrição de teste </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}> Titulo do post</Text>
          <Text style={styles.postDescription}> Descrição de teste, descrição de teste </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}> Titulo do post</Text>
          <Text style={styles.postDescription}> Descrição de teste, descrição de teste </Text>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  postContainer: {
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 2,
    // width: '90%',
    backgroundColor: 'green',
    borderRadius: 5
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F5FCFF'
  },
  postDescription: {
    color: '#FFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
