/* eslint-disable */

import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import CheckBox from '@react-native-community/checkbox'
import Api from '../../services/Api'

function ToDo(props) {

  const [isChecked, setIsChecked] = React.useState(props.todo.checked === 1 ? true : false);

  async function changeCheckedInDB(check) {
    let checked = check === true ? 1 : 0;
    await Api.put(`/todo/${props.todo.id}`, { description: props.todo.description, checked: checked })
    setIsChecked(check)
  }

  return (

    <View style={styles.todo}>
      <View style={styles.checkDescription}>
        <CheckBox value={isChecked} onValueChange={(e) => changeCheckedInDB(e)} style={styles.checkbox} tintColors={{ true: '#00D7D4', false: '#fff' }}/>
        {isChecked ? <Text style={{ textDecorationLine: 'line-through', color: 'white', fontSize: 16,  }}>{props.todo.description}</Text> : <Text style={styles.text}>{props.todo.description}</Text>}
      </View>
      <TouchableOpacity style={styles.button} onPress={() => props.remove(props.todo.id)} >
        <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>
          Remover
        </Text>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  todo: {
    width: '90.5%',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    paddingLeft: 10,
    marginTop: 20,
  },
  checkDescription:{
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center'
  },
  checkbox: {
    alignSelf: "center",
  },
  text:{
    color: 'white', 
    fontSize: 16, 
  },
  button: {
    color: 'white',
    backgroundColor: '#626264',
    padding: 4,
    borderRadius: 3,
  },
});

export default ToDo;