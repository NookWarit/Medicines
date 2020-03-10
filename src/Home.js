import React, { Component } from "react";
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon, Input, Item, Button } from 'native-base';
class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

    render() {
        return (
            <Container>
              <Header searchBar rounded>
                <Item>
                  <Icon name="ios-search" />
                  <Input placeholder="Medicines Search" />
                </Item>
                <Button transparent>
                  <Text>Search</Text>
                </Button>
              </Header>
            <Content>
              <List>
                <ListItem selected
                  onPress={() => this.props.history.push('Detail')}
                >
                  
                  <Left>
                    <Text>Enalapril</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem>
                 <Left>
                    <Text>Captopril</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Ramipril</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
              </List>
            </Content>
          </Container>
        );
    }
}

export default Home;