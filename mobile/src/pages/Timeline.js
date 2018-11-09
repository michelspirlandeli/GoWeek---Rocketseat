import React, { Component } from 'react';
import api from '../services/api';

import { View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

import Tweet from'../components/Tweet';

import Icon from 'react-native-icons/MaterialIcons';

export default class Timeline extends Component {
  static navigationOptions = ({navigation }) => navigation.navigate('New')({
    title: "Início",
    headerRight: (
      <TouchableOpacity onPress={() => {}}>
      <Icon
        style={{ marginRight: 20 }}
        name="add-circle-outline" 
        size={24} 
        color="#4BB0EE"
      />
      </TouchableOpacity>
    ),
  });

  state = {
    tweets:[],
  };

  async componentDidMount(){
    this.subscribeToEvents();
    
    const response = await api.get('tweets');

    this.setState({tweets: response.data});
  }

  subscribeToEvents = () => {
        const io = socket('http://10.0.3.2:3000');

        io.on('tweet', data => {
            this.setState({ tweets: [data, ... this.state.tweets]});
        });

        io.on('like', data => {
             console.log(data);
            this.setState({ tweets: this.state.tweets.map(
                tweet => (tweet._id === data._id ? data : tweet)
            )
          });
        });
       
    };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.tweets}
          keyExtractor={tweet => tweet._id}
          renderItem={({item}) =><tweet tweet={item}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});