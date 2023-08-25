import React, { Component } from 'react';
import { Button } from 'react-native';
import { Input, Image, Card } from 'react-native-elements';


export default function Login() {
        return (
            <Card>
                <Card.Divider />
                <Image
                    source={require('../assets/food.webp')}
                    style={{ width: 320, height: 300, marginLeft: 20 }}
                />
                <Card.Divider />
                <Input
                    text="email"
                    placeholder="email"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}

                />
                <Input
                    text="password"
                    placeholder="password"
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    secureTextEntry={true}

                />
                <Button title="LOGIN" onPress={() => this.login()} />
                <Button title="REGISTER" onPress={() => { this.props.navigation.navigate('Registration') }} />
            </Card>
        )
}
// state = {
//     email: '',
//     password: '',

// }