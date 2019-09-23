/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import { } from 'react-native/Libraries/NewAppScreen';

interface AppProps { }
interface AppState {
  users: { id: number, username: string, website: string }[];
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  async componentDidMount() {
    try {
      let res = await fetch('https://jsonplaceholder.typicode.com/users');
      let users = await res.json();
      this.setState({ users })
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.userGroup}>
        {this.state.users.map(user => (
          <Text key={user.id} >{user.username}
            {user.website}
          </Text>
        ))}
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems:'center',
    fontSize: 16,
    fontFamily: 'Helvetica'
  },
  body: {
    backgroundColor: 'white'
  },
  userGroup: {
    margin: 3,
    backgroundColor: 'white'
  }
});
