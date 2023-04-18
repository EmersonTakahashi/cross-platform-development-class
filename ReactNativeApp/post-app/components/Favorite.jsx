import { View, Text, StyleSheet } from "react-native";

function Navbar(props) {
  const { title, body } = props;
  return (
    <View style={styles.item}>
      <image></image>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f2f2f2",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
  },
  title: {
    fontSize: 17,
    color: "#0f50cc",
  },
});

export default Navbar;
