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
              <Body>
              <Text>ชื่อยา : Enalapril</Text>
              <Text>ข้อบ่งใช้ : ลดความดันโลหิตสูง</Text>
              <Text>ขนาดยาที่ใช้ : รับประทานครั้งละ 5-20 mg ทุก 12-24 ชั่วโมง</Text>
              </Body>
            </CardItem>
            <CardItem header>
              <Body>
              <Text>การปรับขนาดยาในผู้ป่วยที่ไตทำงานบกพร่อง :  </Text>
              <Text>  CrCl น้อยกว่า 50 ml/min : รับประทานครั้งละ 5-20 mg ทุก 12-24 ชั่วโมง  </Text>
              <Text>  CrCl 10-50 ml/min : รับประทานครั้งละ 2.5-20 mg ทุก 12-24 ชั่วโมง  </Text>
              <Text>  CrCl มากกว่า 10 ml/min : รับประทานครั้งละ 1.25-5 mg ทุก 12-24 ชั่วโมง</Text>
              </Body>
            </CardItem>
            <CardItem header>
            </CardItem>
            <CardItem>
              <Body>
              <Text>การปรับขนาดยาในผู้ป่วยฟอกเลือดด้วยเครื่องไตเทียม :</Text>
              <Text>  ยาถูกขับออกระหว่างการฟอกเลือดได้ปานกลาง (20-50%)</Text>
              <Text>  แนะนำให้รับประทานยาหลังทำการฟอกเลือด โดยเริ่มต้นที่ขนาด 2.5 mg</Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text style={{backgroundColor:'red'}}>ยาถูกขับออกได้ ควรติดตามระดับความดันโลหิตของผู้ป่วยอย่างใกล้ชิด
</Text>
            </CardItem>
         </Card>
            </Content>
          </Container>
        );
    }
}

export default Detail;