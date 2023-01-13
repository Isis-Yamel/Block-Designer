import React, { useState, useContext } from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({navigation}) => {
  const { addNewBlog } = useContext(Context);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  return (
    <View style={styles.createWrapper}>
      <Text> Enter title: </Text>
      <TextInput 
        style={styles.inputStyle}
        value={title}
        onChangeText={(userTitle) => setTitle(userTitle)}
      />
      <Text> Enter Content: </Text>
      <TextInput 
        style={styles.inputStyle}
        value={content}
        onChangeText={(userContent) => setContent(userContent)}
      />
      <Button title='Add Blog Post' 
        onPress={() => addNewBlog(title, content, () => {
          navigation.navigate('Index');
        })}/>
    </View>
  );
};

const styles = StyleSheet.create({
  createWrapper: {
    margin: 10,
  },
  inputStyle: {
    fontSize: 18,
    borderWidth: 2,
    borderRadius: 4,
    marginVertical: 10,
    padding: 5,
  }
})

export default CreateScreen;
