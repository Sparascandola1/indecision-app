import React from 'react';
import Header from './Header';
import Action from './Action';
import AddOption from './AddOption';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: '' }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((previousState) => ({
      options: previousState.options.filter(
        (option) => optionToRemove !== option
      ),
    }));
  };

  handlePick = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    this.setState(() => ({ selectedOption: option }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter a vaild value to add item.';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'You already entered that option.';
    }

    this.setState((previousState) => ({
      options: previousState.options.concat(option),
    }));
  };

  componentDidMount() {
    try {
      const jsonString = localStorage.getItem('options');
      const options = JSON.parse(jsonString);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousState.options.length !== this.state.options.length) {
      const jsonString = JSON.stringify(this.state.options);
      localStorage.setItem('options', jsonString);
    }
  }

  componentWillUnmount() {
    console.log('Unmounted');
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer!';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            handlePick={this.handlePick}
            hasOptions={this.state.options.length > 0}
          />
          <div className="widget">
            <Options
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
              options={this.state.options}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          handleClearSelectedOption={this.handleClearSelectedOption}
          selectedOption={this.state.selectedOption}
        />
      </div>
    );
  }
}
