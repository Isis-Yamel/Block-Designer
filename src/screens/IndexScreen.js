import React, { useContext } from 'react';
import { Text, View, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, addNewBlog, deleteBlog } = useContext(Context);

  return (
    <View>
      <Button title="Add Post" onPress={addNewBlog}/>
      
      <FlatList 
        data={state}
        keyExtractor={(blog) => blog.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity 
              onPress={() => navigation.navigate('Blog', { id: item.id })}>
              <View style={styles.blogWrapper}>
                <Text style={styles.blogTitle}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlog(item.id)}>
                  <Feather name='trash' size={20}/>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  blogWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    borderBottomWidth: 2,
    borderColor: 'gray',
    padding: 10,
  },
  blogTitle: {
    fontSize: 18,
  },
});

export default IndexScreen;