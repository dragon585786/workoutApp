import React, { Component } from 'react';
import { View, Modal, Text, TouchableHighlight, Alert, TextInput } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Form, Item, Input, Label, Content } from 'native-base';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import s from '../css/style';
import { TouchableOpacity } from 'react-native-gesture-handler';
class Headerr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      nameExcersize: '',
      sets: '',
      reps: '',
    }
    this.modall = this.modall.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }
  onChangeText = (e, name) => {
      if(name === "EXCERSIZE NAME"){
        this.setState({
          nameExcersize:e
        })
      }
      if(name === "SETS NAME"){
        this.setState({
          sets:e
        })
      }
      if(name === "REPS NAME"){
        this.setState({
          reps:e
        })
      }
  }
  modall = () => {

    this.setState({
      modalVisible: true
    });

  }
  render() {
    return (
      <View>
        <Header
          // style={{ backgroundColor: '#6e45e2' }}
          style={s.containerHeader}
          androidStatusBarColor="#6e45e2"
        >
          <Left>
            <Button transparent>
              <Icon name='menu' onPress={() => {
                this.props.pro.openDrawer()
              }} />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.name}</Title>
          </Body>
          <Right>
            <TouchableOpacity>
              <Button transparent>
                <Icon name='notifications'  onPress={() => {
                this.props.pro.navigate('Notification',{name:'NOTIFICATION'})
              }}/>
              </Button>
            </TouchableOpacity>
            <TouchableOpacity>
              <Button transparent onPress={this.modall}>
                <Icon name='add' />
              </Button>
            </TouchableOpacity>
            <TouchableOpacity>
              <Button transparent>
                <Icon name='send'  onPress={() => {
                this.props.pro.navigate('Send',{name:'WALL POST'})
              }}/>
              </Button>
            </TouchableOpacity>
          </Right>
        </Header>


        {/* modal for add plan */}

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
          }}
        // style = {{ height: 300, width: 300 }}
        >
          <View style={[s.modal]}>
            <View style={{
              width: 338,
              height: 300,
            }}>
              <LinearGradient
                colors={['#88d3ce', '#6e45e2']}
                style={[s.containerBody, s.boxRadius]}
              >
                <View style={[s.modalINNER]}>
                  <TextInput
                    style={[s.TextInputt]}
                    onChangeText={text => this.onChangeText(text, 'EXCERSIZE NAME')}
                    placeholder='EXCERSIZE NAME'
                    value={this.state.nameExcersize}
                  />
                  <View style={[s.row]}>
                  <TextInput
                    style={[s.TextInputtRow1]}
                    onChangeText={text => this.onChangeText(text, 'SETS NAME')}
                    placeholder='SET SETS'
                    keyboardType={'numeric'}
                    value={this.state.sets}
                  />
                  <TextInput
                    style={[s.TextInputtRow1]}
                    onChangeText={text => this.onChangeText(text, 'REPS NAME')}
                    placeholder='SET REPS'
                    keyboardType={'numeric'}
                    value={this.state.reps}
                  />
                  </View>
                  <View>
                    {/* camara */}
                    <View style={[s.rowCamera]}>
                    <Text>OPTIONAL</Text>
                   
                    <Icon style={[s.rowCameraa]} name='camera' />
                    
                    </View>
                  </View>
                  <Button style={{ height: 50, width: 70, justifyContent: 'center', marginTop:1, }} danger onPress={() => {
                    this.setState({
                      modalVisible: !this.state.modalVisible
                    })
                  }}>
                    <Text style={[s.text4, s.white, s.shadow]}>DONE</Text>
                  </Button>
                </View>

              </LinearGradient>
            </View>
          </View>
        </Modal>

      </View>
    );
  }
}

export default Headerr;