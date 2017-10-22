import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

export default class Todo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state ={
      todos: [
        {
          task: 'L1 visa attempt',
        },
        {
          task: 'Learn React/React-native',
        },
      ],
    }
  }

  onAddStarted = () => {
    this.nav.push({
      name: 'taskform',
    })
  }

  onCancel = () => {
    console.log('cancelled');
    this.nav.pop();
  }

  onAdd = (task) => {
    console.log('Add karo', task);
    this.state.todos.push({
      task: task,
    });
    this.setState({todos: this.state.todos});
    this.nav.pop();
  }

  onDone = (todo) => {
    console.log('Done the task------------', todo.task);
    const filterToDos = this.state.todos.filter((filterToDo) => {
      return filterToDo !== todo;
    });
    this.setState({todos: filterToDos});
  }

  renderScene = (route, nav) => {
    switch(route.name) {
      case 'taskform':
        return (
          <TaskForm
            onAdd={this.onAdd}
            onCancel={this.onCancel}/>
        );
      case 'samplepage':
        return (<Text>Sample page here</Text>);
      case 'tasklist':
        return (
          <TaskList
          onAddStarted={this.onAddStarted}
          onDone={this.onDone}
          todos={this.state.todos} />
        );
      default:
        return (
          <Text>
            This is the default page.
          </Text>
        )

    }
  }

  configureScene = () => {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  render() {
    return (
      <Navigator
        configureScene={this.configureScene}
        initialRoute={{name: 'tasklist', index: 0}}
        ref={((nav) => {
          this.nav = nav;
        })}
        renderScene={this.renderScene}
      />
    );
  }
}
