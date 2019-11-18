import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Picker,
  TextInput,
  Switch,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: true,
      choosenIndex: "",
      choosenValue: "",
      name: "",
      usernmae: "",
      password: ""
    };
    this.handleOnChangeName = this.handleOnChangeName.bind(this);
    this.handleOnChangeUserName = this.handleOnChangeUserName.bind(this);
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this);
  }
  handleOnChangeName(name) {
    this.setState({ name: name });
  }
  handleOnChangeUserName(usernmae) {
    this.setState({ usernmae: usernmae });
  }
  handleOnChangePassword(password) {
    this.setState({ password: password });
  }
  toggleSwitch(value) {
    this.setState({ switchValue: value });
  }
  _clear() {
    alert("Sucessfully");
    this.setState({ name: "", usernmae: "", password: "" });
    // this.setState({usernmae:""});
    // this.setState({password:""});
  }

  render() {
    return (
     
      <View style={styles.container}>
        
         <KeyboardAvoidingView enabled behavior="padding">
          <View>
            <Text>Name:</Text>
            <TextInput
              value={this.state.name}
              style={styles.textInput}
              onChangeText={this.handleOnChangeName}
            />
          </View>
          <View>
            <Text>Position:</Text>

            <Picker
              style={styles.textInput}
              selectedValue={this.state.choosenValue}
              onValueChange={(itemvalue, itemIndex) =>
                this.setState({
                  choosenValue: itemvalue,
                  choosenIndex: itemIndex
                })
              }
            >
              <Picker.Item label="Junior Developer" value="01" />
              <Picker.Item label="Senior Developer" value="02" />
            </Picker>
          </View>
          <View>
            <Text>Gender:</Text>

            <View style={{ flexDirection: "row" }}>
              <Switch
                onValueChange={this.toggleSwitch.bind(this)}
                value={this.state.switchValue}
                thumbColor={this.state.switchValue ? "green" : "gray"}
                trackColor={{ false: "gray", true: "green" }}
              ></Switch>
              <Text> {this.state.switchValue ? "Female" : "Male"}</Text>
            </View>
          </View>
          <View>
            <Text>UserName:</Text>
            <TextInput
              value={this.state.usernmae}
              style={styles.textInput}
              onChangeText={this.handleOnChangeUserName}
            />
          </View>
          <View>
            <Text>Password:</Text>
            <TextInput
              value={this.state.password}
              style={styles.textInput}
              onChangeText={this.handleOnChangePassword}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.touch}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                this._clear();
              }}
            >
              <Text style={{ textAlign: "center" }}>Sign In</Text>
            </TouchableOpacity>
          </View>
          </KeyboardAvoidingView>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    justifyContent: "center",
    flexDirection: "column",
   
    alignItems:"center",
   
  },
  textInput: {
    width: 200,
    height: 40,
    borderWidth: 1,
    backgroundColor: "pink",
    borderRadius: 3,
   paddingLeft:10
  },
  btn: {
    borderWidth: 1,
    width: 200,
    height: 40,
    backgroundColor: "green",
    borderRadius: 3
  },
  touch: {
    paddingTop: 10
  }
});
