import React, { Component } from 'react';
import { Text, View, ListView, TouchableHighlight, StyleSheet } from 'react-native';
import TaskRow from './TaskRow'

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: '#F7F7F7',
    justifyContent: 'flex-start',
	},
	button: {
		height: 60,
		borderColor: '#05A5D1',
		borderWidth: 2,
		backgroundColor: '#333',
		margin: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		color: '#FAFAFA',
		fontSize: 20,
		fontWeight: '600',
	},
});

class TaskList extends React.Component {
	constructor(props, context) {
		super(props, context);
		
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2,
		});

		this.state = {
			dataSource: ds.cloneWithRows(props.todos),
		}
	}
	
	renderRow = (todo) => {
		return(
			<TaskRow
				onDone={this.props.onDone}
				todo={todo} 
			/>
		)

	}

	componentWillReceiveProps = (nextProps) => {
		const dataSource = this
			.state
			.dataSource
			.cloneWithRows(nextProps.todos);

		this.setState({ dataSource });
	}

	render() {
		return(
			<View style={styles.container}>
				<ListView
					dataSource={this.state.dataSource}
					key={this.props.todos}
					renderRow={this.renderRow}
				/>
				<TouchableHighlight 
				onPress={this.props.onAddStarted}
				style={styles.button}>
					<Text style={styles.buttonText}>
						Add One
					</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

TaskList.propTypes = {
	todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
	onAddStarted: React.PropTypes.func.isRequired,
	onDone: React.PropTypes.func.isRequired,	
};

export default TaskList;