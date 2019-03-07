import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  state = {
    color: null,
    fontWeight: null,
    fontStyle: null,
    textDecorationLine: null
  };

  changeColor = color => this.setState({ color: color });
  changeStyle = style => {
    if (style === "bold") {
      if (this.state.fontWeight) {
        this.setState({ fontWeight: null });
      } else {
        this.setState({ fontWeight: style });
      }
    } else if (style === "italic") {
      if (this.state.fontStyle) {
        this.setState({ fontStyle: null });
      } else {
        this.setState({ fontStyle: style });
      }
    } else if (style === "underline") {
      if (this.state.textDecorationLine) {
        this.setState({ textDecorationLine: null });
      } else {
        this.setState({ textDecorationLine: style });
      }
    }
  };

  render() {
    let styleNames = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = styleNames.map(style => {
      return (
        <span>
          &nbsp;
          <button
            className="btn btn-light"
            onClick={() => this.changeStyle(style)}
            style={styles[style]}
            key={style}
          >
            {style}
          </button>
        </span>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          onClick={() => this.changeColor(color)}
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea
          style={{
            color: this.state.color,
            fontWeight: this.state.fontWeight,
            fontStyle: this.state.fontStyle,
            textDecorationLine: this.state.textDecorationLine
          }}
        />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
