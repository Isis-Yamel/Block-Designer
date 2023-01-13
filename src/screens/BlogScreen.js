import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { Context } from '../context/BlogContext';

const BlogScreen = ({navigation}) => {
  const { state } = useContext(Context);
  const blogPost = state.find((blog) => blog.id === navigation.getParam('id'));

  return (
    <View>
      <Text> {blogPost.title} </Text>
    </View>
  );
};

export default BlogScreen;