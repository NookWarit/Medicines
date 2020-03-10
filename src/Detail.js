import React, { Component } from "react";
import { Text } from "react-native";
import { Container, Header, Content, Card, CardItem, Body, Left, Icon, Button } from 'native-base';
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    render() {
        return (
            <Container>
            <Header>
              <Left>
                <Button
                transparent
                icon
                onPress={() => {
                  this.props.history.goBack();
                }}
                >
                  <Icon name="arrow-back" />
                </Button>
                
              </Left>
            </Header>
            <Content>
            <Card>
            <CardItem header bordered>
              <Text>Enalapril</Text>
            </CardItem>
            <CardItem header>
              <Text>ชื่อยา </Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text> Enalapril </Text>
              </Body>
            </CardItem>
            <CardItem header>
              <Text>ข้อบ่งใช้ :</Text>
            </CardItem>
            <CardItem>
              <Body>
              <Text>ลดความดันโลหิตสูง </Text>
              </Body>
            </CardItem>
            <CardItem header>
              <Text>ขนาดยาที่ใช้ :</Text>
            </CardItem>
            <CardItem>
            <Text>  รับประทานครั้งละ 5-20 mg ทุก 12-24 ชั่วโมง </Text>
            </CardItem>
            <CardItem header>
            <Text> การปรับขนาดยาในผู้ป่วยที่ไตทำงานบกพร่อง :  </Text>
            </CardItem>
            <CardItem>
              <Body>
              <Text> CrCl น้อยกว่า 50 ml/min : รับประทานครั้งละ 5-20 mg ทุก 12-24 ชั่วโมง  </Text>
              <Text> CrCl 10-50 ml/min : รับประทานครั้งละ 2.5-20 mg ทุก 12-24 ชั่วโมง  </Text>
              <Text> CrCl มากกว่า 10 ml/min : รับประทานครั้งละ 1.25-5 mg ทุก 12-24 ชั่วโมง</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
         </Card>
            </Content>
          </Container>
        );
    }
}

export default Detail;