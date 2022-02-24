/* eslint-disable */

import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function Header(props) {
    const [description, setDescription] = React.useState('');

    return (
        <View style={styles.list}>
            <View style={styles.listContent}>
                <Text style={{ color: 'white', fontSize: 28 }}>+</Text>
                <TextInput style={styles.input} onChangeText={(text) => setDescription(text)} placeholder="Adicionar uma tarefa" value={description}/>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => { props.save(description); setDescription('')}}>
                <Text style={{ color: 'white' }}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        width: '95%',
        height: 60,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        backgroundColor: '#3A3138',
        padding: 10,
        borderRadius: 10,
    },
    listContent: {
        flexDirection: 'row',
        alignItems: "center",
        marginLeft: 5
    },
    input: {
        color: 'white',
        marginLeft: 15,
    },

    button: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#261515',
        borderRadius: 10,
        padding: 10,
    }

});

export default Header;