import { View, Text, FlatList } from "react-native";

function Post(props) {
  const { title, body } = props;
  return (
    <View>
      <Text>Title: {title}</Text>
      <Text>Body: {body}</Text>
    </View>
  );
}

export default Post;
