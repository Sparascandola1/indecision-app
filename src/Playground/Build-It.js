class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = { toggle: false, title: 'Visibility Toggle' };
  }

  toggleVisibility() {
    this.setState((previousState) => {
      return {
        toggle: !previousState.toggle,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.toggle ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.toggle && <p>Details!!</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const app = {
//   title: 'Visibility Toggle',
//   toggle: false
// };

// const toggleDetails = () => {
//     app.toggle = !app.toggle;
//     render();
// }

// const appRoot = document.getElementById('app');

// const render = () => {
//   const template = (
//     <div>
//         <h1>{app.title}</h1>

//         <button onClick={toggleDetails}>
//             {app.toggle ? 'Hide Details' : 'Show Details'}
//         </button>

//         {app.toggle && <p>Here are the dets foo!</p>}
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// render();
