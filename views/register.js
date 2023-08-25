import React, { Component } from 'react';
import { Button } from 'react-native';
import { Input, Card, Image } from 'react-native-elements'

export default function Register() {
        return (
            <Card>
                <Card.Divider />
                <Image
                    source={require('../assets/food')}
                    style={{ width: 320, height: 300, marginLeft: 20 }}
                />
                <Card.Divider />
                <Input
                    placeholder="username"
                    value={this.state.username}
                    onChangeText={username => this.setState({ username })}
                />
                <Input
                    placeholder="email"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                />
                <Input
                    placeholder="password"
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    secureTextEntry={true}
                />
                <Button title="register" onPress={() => this.register()}></Button>
            </Card>
        )
}

// state = {
//     username: '',
//     email: '',
//     password: ''
// }