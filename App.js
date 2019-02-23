import React, { Component } from 'react';
import './components/PickerComponent/index.css';
import MultiPicker from './components/PickerComponent/MultiPicker';
import Picker from './components/PickerComponent/Picker';

import './App.css';

class App extends Component {
  state = {
    value: [5, '11'],
  };

  onChange = (value) => {
    console.log('onChange', value);
    this.setState({
      value,
    });
  }

  onScrollChange = (value) => {
    console.log('onScrollChange', value);
  }

  render() {
    return (
      <div style={{ background: 'white', padding: 10, border: '2px solid gray'}}>
        <MultiPicker
          selectedValue={this.state.value}
          onValueChange={this.onChange}
          onScrollChange={this.onScrollChange}
        >
          <Picker indicatorClassName="my-picker-indicator" style={{backgroundColor: 'transparent'}}>
            <Picker.Item className="my-picker-view-item" value="1">one</Picker.Item>
            <Picker.Item className="my-picker-view-item" value="2">two</Picker.Item>
            <Picker.Item className="my-picker-view-item" value="3">three</Picker.Item>
            <Picker.Item className="my-picker-view-item" value="4">four</Picker.Item>
            <Picker.Item className="my-picker-view-item" value={5}>five</Picker.Item>
            <Picker.Item className="my-picker-view-item" value="6">six</Picker.Item>
            <Picker.Item className="my-picker-view-item" value="7">seven</Picker.Item>
          </Picker>
          <Picker indicatorClassName="my-picker-indicator">
            <Picker.Item className="my-picker-view-item" value="11">eleven</Picker.Item>
            <Picker.Item className="my-picker-view-item" value="12">twelve</Picker.Item>
            <Picker.Item className="my-picker-view-item" value="13">thirteen</Picker.Item>
            <Picker.Item className="my-picker-view-item" value="14">fourteen</Picker.Item>
            <Picker.Item className="my-picker-view-item" value="15">fifteen</Picker.Item>
            <Picker.Item className="my-picker-view-item" value="16">sixteen</Picker.Item>
            <Picker.Item className="my-picker-view-item" value="17">seventeen</Picker.Item>
            <Picker.Item className="my-picker-view-item" value="18">eighteen</Picker.Item>
          </Picker>
        </MultiPicker>
      </div>
    );
  }
}

export default App;
