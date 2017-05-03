import React, {Component} from 'react';
import {
  Badge,
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Thumbnail,
  List,
  ListItem
} from 'native-base';
import {AppRegistry, StyleSheet, ListView, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Meteor, { createContainer } from 'react-native-meteor';

var items = ['মহামান্য রাষ্ট্রপতি', 'রাষ্ট্রপতির একান্ত সচিব (সচিব)', 'রাষ্ট্রপতির সহকারি একান্ত সচিব', 'রাষ্ট্রপতির সচিব', 'সচিবের সচিব'];


const SERVER_URL = 'ws://192.168.0.101:3000/websocket';

class ScreenTwo extends React.Component {
  componentWillMount() {
    Meteor.connect(SERVER_URL);
  }
  static navigationOptions = {
    title: '{params.name}',
    header: null
  };
  render() {
    const {navigate} = this.props.navigation;
    const {params} = this.props.navigation.state;
    return (
      <Container>
        <View style={styles.head}>

          <Left>
            <Button transparent onPress={() => navigate('Home')}>
              <Thumbnail square source={require('../img/back.png')}/>
            </Button>
          </Left>
          <Body>
            <Title>{params.name}</Title>
          </Body>

          <Right>
            <Button transparent>
              <Thumbnail square source={require('../img/search.png')}/>
            </Button>
          </Right>

        </View>

        <Content>

          <List dataArray={items} renderRow={(item) => <ListItem button onPress={() => navigate('Three', {name: item})}>
            <View>
              <Text style={styles.bigbold}>{item}</Text>
              <Text style={styles.sub}>
                সম্পদ বড়ুয়া
              </Text>
            </View>
          </ListItem>}></List>

        </Content>



      </Container>
    );
  }
}


const styles = StyleSheet.create({

  sub: {
    paddingLeft: 5
  },

  boxText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    color: 'white'
  },

  blueBox: {
    flex: 1,
    height: 250,
    backgroundColor: '#18a1db'
  },

  bigbold: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 5
  },
  red: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 40
  },

  head: {
    backgroundColor: '#18a1db',
    height: 70,
    flexDirection: 'row',
    paddingLeft: 0,
    paddingRight: 0
  },
  foot: {
    color: 'white'
  },

  btn: {
    padding: 0
  }
});

// export default createContainer(() => {
//   Meteor.subscribe('table.fetcch');
//   return {
//     items: Meteor.collection('table.fetcch').find(),
//     count: Meteor.collection('table.fetcch').find().length,
//   };
// }, ScreenTwo);


export default ScreenTwo;
