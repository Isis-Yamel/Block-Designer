import React, { useContext } from 'react';
import { Text, View, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const IndexScreen = () => {
  const { state, addNewBlog } = useContext(Context);

  return (
    <View>
      <Text>This is the screen </Text>
      <Button title="Add Post" onPress={addNewBlog}/>
      <FlatList 
        data={state}
        keyExtractor={(blog) => blog.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default IndexScreen;