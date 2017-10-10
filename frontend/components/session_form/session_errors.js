import React from "react";
import {
  View,
  Text
} from "react-native";

const SessionErrors = (props) => {
  return (
    <View>
      {props.errors.map((error, i) =>
        <Text
          key={`session-errors-${i}`}
          style={{color: "red"}}
        >
        {error}
        </Text>
      )}
    </View>
  );
};

export default SessionErrors;
