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
const SERVER_URL2= 'ws://107.23.254.57:81/websocket';


var items = ['রাষ্ট্রপতির সচিবালয়', 'প্রধানমন্ত্রীর কার্যালয়', 'শিক্ষা মন্ত্রণালয়'];



class HomeScreen extends Component {

  componentWillMount() {
    Meteor.connect(SERVER_URL2);
  }
  static navigationOptions = {
    title: 'প্রথম অধ্যায়',
    header: null
  };

  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

  }



  render() {

    const {navigate} = this.props.navigation;
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



          <List dataArray={items} renderRow={(item) =>
          <ListItem button onPress={() => navigate('Two', {name: item})}>
            <Text style={styles.bigbold}>{item}</Text>
          </ListItem>}></List>







        </Content>

        <Text style={styles.bigbold}>
          Item Count: {this.props.count}
        </Text>

      </Container>
    );
  }

}

const styles = StyleSheet.create({


  title:  {
    fontSize:18,
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

//
// export default createContainer(() => {
//   Meteor.subscribe('first.fetcch', 1);
//   return {
//     items: Meteor.collection('first.fetcch').find(),
//     count: Meteor.collection('first.fetcch').find().length,
//   };
// }, HomeScreen);

// export default createContainer(() => {
//   Meteor.subscribe('tasks');
//   return {
//     items: Meteor.collection('tasks').find(),
//     count: Meteor.collection('tasks').find().length,
//   };
// }, HomeScreen);


export default HomeScreen;
