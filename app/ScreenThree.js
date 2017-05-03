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

var items = ['956-9151', '696-5680']


const SERVER_URL = 'ws://192.168.0.101:3000/websocket';

class ScreenThree extends React.Component {
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

          <Right></Right>

        </View>

        <Content>

          <View style={styles.blueBox}>
            <Text style={{
              textAlign: 'center',
              fontSize: 20,
              color: 'white',
              paddingTop: 50
            }}>
              {params.name}
            </Text>
            <Text style={styles.boxText}>আব্দুল হামিদ খান
            </Text>
          </View>
</Content>
<Content>
          <List dataArray={items} renderRow={(item) => <ListItem >

              <View>
                <Text style={styles.sub}>
                  ফোন
                </Text>
                <Text style={styles.bigbold}>{item}</Text>





              </View>

              <Right>
            <Button  transparent style={{height:50, width: 60}}  onPress={() => navigate('Home')}>
              <Thumbnail square source={require('../img/call.png')} />

</Button>


              </Right>


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


export default createContainer(() => {
  Meteor.subscribe('tasks');
  return {
    items: Meteor.collection('tasks').find(),
    count: Meteor.collection('tasks').find().length,
  };
}, ScreenThree);

//export default ScreenThree;
