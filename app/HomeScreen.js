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
import Meteor, {createContainer, MeteorListView} from 'react-native-meteor';

const SERVER_URL = 'ws://192.168.0.101:3000/websocket';
const SERVER_URL2 = 'ws://107.23.254.57:81/websocket';

var items = ['রাষ্ট্রপতির সচিবালয়', 'প্রধানমন্ত্রীর কার্যালয়', 'শিক্ষা মন্ত্রণালয়'];
var result = [];

class HomeScreen extends Component {

  static navigationOptions = {
    title: 'প্রথম অধ্যায়',
    //header: null,
    headerTintColor: 'blue'
  };

  componentWillMount() {
    Meteor.connect(SERVER_URL);
  }

  constructor(props) {
    super(props);

  }

  // renderRow(task) {
  // //const {navigate} = this.props.navigation;
  //  return (
  //    <ListItem button onPress={() => navigate('Two', {name: task.text})}>
  //    <Text style={styles.list} >{task.text}</Text>
  //    </ListItem>
  //  );
  // }

  render() {

    const {navigate} = this.props.navigation;
    const {tasksReady} = this.props;
    //let result= this.state.result;

    return (
      <Container>
        <View style={styles.head}>

          <Left>
            <Button transparent>
              <Thumbnail square source={require('../img/menu.png')}/>
            </Button>
          </Left>
          <Body>
            <Text style={styles.title}>প্রথম অধ্যায়</Text>
          </Body>

          <Right>
            <Button transparent>
              <Thumbnail square source={require('../img/search.png')}/>
            </Button>
          </Right>

        </View>

        <Content>

          <View >
            {!tasksReady && <Text></Text>}

            <MeteorListView collection="tasks" renderRow={(task) => {
              return (
                <ListItem button onPress={() => navigate('Two', {name: task.text})}>
                  <Text style={styles.list}>{task.text}</Text>
                </ListItem>
              );
            }} options={{
              sort: {
                createdAt: -1
              }
            }}/>

          </View>

        </Content>

        <Text style={styles.bigbold}>
          Debug: {this.props.count}
        </Text>

      </Container>
    );
  }

}

const styles = StyleSheet.create({

  title: {
    fontSize: 18,
    color: 'white'
  },

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

  list: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingLeft: 10,
    position: 'relative'
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

//
// export default createContainer(() => {
//   Meteor.subscribe('first.fetch',1);
//   return {
//     items: Meteor.collection('first.fetch').find(),
//     count: Meteor.collection('first.fetch').find().length,
//   };
// }, HomeScreen);
//
// export default createContainer(() => {
//   Meteor.subscribe('tasks');
//   return {
//     //HomeScreen.setState({result: Meteor.collection('tasks').find()}),
//     result: Meteor.collection('tasks').find(),
//     //items: Meteor.collection('tasks').find(),
//     count: Meteor.collection('tasks').find().length,
//   };
// }, HomeScreen);
//

export default createContainer(params => {
  const handle = Meteor.subscribe('tasks');
  return {tasksReady: handle.ready(), count: Meteor.collection('tasks').find().length};
}, HomeScreen);

// export default createContainer( params => {
//   const handle = Meteor.subscribe('first.fetch',1);
//   return {
//     tasksReady: handle.ready(),
//     count: Meteor.collection('first.fetch').find().length,
//   };
// }, HomeScreen);

//export default HomeScreen;
