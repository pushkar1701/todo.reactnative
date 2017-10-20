import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 150,
        backgroundColor: '#F7F7F7',
    },
    input: {
        borderWidth: 1,
        borderColor: '#D7D7D7',
        height: 50,
        marginLeft: 10,
        marginRight: 10,
        padding: 15,
        borderRadius: 3,        
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FAFAFA',
    },
    button: {
        height: 45,
        alignSelf: 'stretch',
        backgroundColor: '#05A5D1',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButton: {
        backgroundColor: '#666'
    },
  });

export default class TaskForm extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            task: '',
        }
    }

    onChange = (text) => {
        this.task = text;
    }

    onAddPressed = () => {
        this.props.onAdd(this.task);
    }

    render() {
        return(
            <View style={styles.container}>
                <TextInput
                    onChangeText={this.onChange}
                    style={styles.input}
                />

                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}
                        onPress={this.onAddPressed}>
                        Add
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.button, styles.cancelButton]}>
                    <Text style={styles.buttonText}
                        onPress={this.props.onCancel}>
                        Cancel
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }

}

TaskForm.PropTypes = {
    onAdd: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func.isRequired,
};