import { Component } from "react";
import { Text } from "react-native";

class Sum extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text>
        Sum: {Number(this.props.number1) + Number(this.props.number2)}
      </Text>
    );
  }
}
export default Sum;
