import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskList from './components/TaskList'

export default class Todo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state ={
      todos: [
        {
          task: 'L1 visa attempt- Wait till 3 monts',
        },
        {
          task: 'Learn React and React-native - Self evaluation on december 10, 2017',
        },
      ],
    }
  }

  render() {
    return (
      <TaskList
      style={styles.container}
      todos={this.state.todos} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
