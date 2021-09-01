console.log('App.js is Running');

const app = {
  title: 'Indecision App',
  subTitle: "Take a chance! It's not like my name is Hal!!",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }

  render();
};

const clearOptions = () => {
  app.options = [];
  render();
};

const makeDecision = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNumber];
  alert(option);
  render();
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options ' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={makeDecision}>
        What Should I do?
      </button>
      <button onClick={clearOptions}>Remove All</button>
      <ol>
        {app.options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
