import React, { Component } from "react";

interface Props {
  actions: {
    signIn: () => void;
  };
}

export default class LoginClass extends Component<Props> {
  render() {
    return (
      <div>
        <h2>ログイン</h2>
        <button onClick={() => this.props.actions.signIn()}>ログイン</button>
      </div>
    );
  }
}
