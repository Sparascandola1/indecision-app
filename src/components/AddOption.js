import React from 'react';

export default class AddOption extends React.Component {
  state = {
    errorMessage: undefined,
  };

  handleAddOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const errorMessage = this.props.handleAddOption(option);

    this.setState(() => ({
      errorMessage,
    }));

    if (!errorMessage) {
      e.target.elements.option.value = '';
    }
  };

  render() {
    return (
      <div>
        {this.state.errorMessage && <p className="add-option-error">{this.state.errorMessage}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
