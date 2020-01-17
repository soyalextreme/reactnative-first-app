import React, { useState, Com } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { render } from "react-dom";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      task: []
    };
    this.getAllNotes = this.getAllNotes.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  componentDidMount() {
    this.getAllNotes();
  }

  async addUser() {
    const url = "https://tomanota-server.herokuapp.com/api/auth/signup";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Type-Content": "application/json"
      },
      body: {
        username: "alejandrorey1",
        email: "alejandrorey@gmail.com",
        password: "12345"
      }
    });
    const jsonResponse = await response.json();
    return console.log(jsonResponse);
  }

  async getAllNotes() {
    const url = "https://tomanota-server.herokuapp.com/api/task/getNote";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Type-Content": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGZjYTgzMzJkYTRkMzAwMTdhZDNlY2UiLCJpYXQiOjE1Nzc5MzQwODksImV4cCI6MTU3ODAyMDQ4OX0.CGLYC4af04FicsW6_yLqQEkYYEBCPw0EKRNdHDjhFAs"
      }
    });
    const data = await response.json();
    this.setState({ task: data });
    console.log(this.state.task);

    // this.setState({
    //   title: jsonResponse.title,
    //   description: jsonResponse.description
    // });
  }

  // const signup = async () => {
  //   const url = "https://tomanota-server.herokuapp.com/api/auth/signup";
  //   const response = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Type-Content": "application/json"
  //     },
  //     body: {
  //       username: "michele al",
  //       email: "miaavles@gmail.com",
  //       password: "12345"
  //     }
  //   });
  //   const jsonResponse = await response.json();
  //   return console.log(jsonResponse);
  // };

  // // async function getUsernames() {
  // //   let response = await fetch("https://jsonplaceholder.typicode.com/users");
  // //   let responseJson = await response.json();
  // //   return console.log(responseJson);
  // // }

  // async function signin() {
  //   let response = await fetch("http://localhost:3000/api/auth/signin", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: {
  //       email: "alexDev@gmail.com",
  //       password: "12345"
  //     }
  //   });
  //   let jsonResponse = await response.json();
  //   return console.log(jsonResponse);
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.title}</Text>
        <Text>{this.state.description}</Text>
        <Button title="Get All Notes" onPress={this.addUser} />
        {/* <Button title="Register" onPress={signup}></Button> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
