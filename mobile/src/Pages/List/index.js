/* eslint-disable */

import React from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import Header from "../../Components/Header";
import ToDo from "../../Components/toDo";
import Api from '../../services/Api'

function List() {
    const [toDos, setToDos] = React.useState([]);

    //part of adding ToDo
    async function save(description) {
        await Api.post(`/todo`, { description, checked: 0 });
        //Look for the new update in the bank and put it on the to-do list
        getData();
    }

    // End the add

    function remove(id) {
        return Alert.alert(
            "deletar",
            "Certeza que quer remover essa tarefa?",
            [
                // The "Yes" button
                {
                    text: "Yes",
                    onPress: () => {
                        removeTodo(id);
                    },
                },
                // The "No" button
                // Does nothing but dismiss the dialog when tapped
                {
                    text: "No",
                },
            ]
        );
    };

    async function removeTodo(id) {
        console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
        console.log(`/todo/${id}`)
        await Api.delete(`/todo/${id}`);
        let list = toDos.filter((item) => item.id !== id)
        setToDos(list)
    }

    // List to-do
    //Get data in DB when run application
    async function getData() {
        let result = await Api.get(`listTodo/`);
        setToDos(result.data.todos)
    }

    React.useEffect(() => {
        getData();
    }, [])

    return (
        <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
            <View style={styles.header}>
                <Header save={save} />
            </View>
            <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                < FlatList
                    showVerticalScrollIndicator={false}
                    data={toDos}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <ToDo keyExtractor remove={remove} todo={item} />}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 65,
        width: '100%',
        alignItems: 'center',
        marginTop: 10
    }
});

export default List;