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
var mainList = [
    { position: 'মহামান্য রাষ্ট্রপতি', name: 'মোঃ আব্দুল হামিদ খান' },
    { position: 'রাষ্ট্রপতির একান্ত সচিব (সচিব)', name: 'জান্নাতুল নাঈম' },
    { position: 'রাষ্ট্রপতির সচিব', name: 'শওকত আলী' },
    { position: 'সচিবের সচিব', name: 'সম্পদ বড়ুয়া' },

];

const SERVER_URL = 'ws://192.168.0.101:3000/websocket';
const SERVER_URL2= 'ws://107.23.254.57:81';



class ScreenTwo extends React.Component {
  componentWillMount() {
    Meteor.connect(SERVER_URL);
  }
  static navigationOptions = {
    title: 'Dummy',
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
              <Thumbnail square source={require('../img/menu.png')}/>
            </Button>
          </Left>
          <Body>
            <Text style={styles.title}>{params.name}</Text>
          </Body>

          <Right>
            <Button transparent>
              <Thumbnail square source={require('../img/search.png')}/>
            </Button>
          </Right>

        </View>

        <Content>

          <List dataArray={mainList} renderRow={(item) => <ListItem button onPress={() => navigate('Three', {position: item.position, name: item.name, })}>
            <View>
              <Text style={styles.list}>{item.position}</Text>
              <Text style={styles.sub}>{item.name}</Text>
            </View>
          </ListItem>}></List>

        </Content>



      </Container>
    );
  }
}


const styles = StyleSheet.create({

    title:  {
      fontSize:18,
      color: 'white',

    },

    sub: {
      paddingLeft: 10
    },



    list: {
      fontWeight: 'bold',
      fontSize: 15,
      paddingLeft: 10,
      position: 'relative',


    },

    head: {
      backgroundColor: '#18a1db',
      height: 70,
      flexDirection: 'row',
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 5,
      paddingBottom: 5,
    },

  });

// export default createContainer(() => {
//   Meteor.subscribe('table.fetcch');
//   return {
//     items: Meteor.collection('table.fetch').find(),
//     count: Meteor.collection('table.fetch').find().length,
//   };
// }, ScreenTwo);

// export default createContainer(() => {
//   Meteor.subscribe('tasks');
//   return {
//     items: Meteor.collection('tasks').find(),
//     count: Meteor.collection('tasks').find().length,
//   };
// }, ScreenTwo);


export default ScreenTwo;
