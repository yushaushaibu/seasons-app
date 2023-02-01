`Seasons App`
An app that displays the seasons according to the month and region.

`Component`
is a function or class that generates HTML-like syntax (JSX) to display to the user and handles user input using `event handlers`.

`The two types of components`
- Class-based
- Functional

`Class Component`
- Can produce JSX.
- Can use lifecycle method.
- Can State system.
- Easier code organisation.

`Functional Component` 
- Produces JSX to show content to user.
- Can't use `Lifecycle method` to run code at specific point in time.
- Can't use `State system` to update content on screen.
- Can only use lifecycle events and state using the `Hook System`

`State`
The method for non-handcodin props' properties and value.
State is a Javascript object which contains properties (key & value) that can be passed down to components mounted in parent component as props. 
A JS object that describes an app.

`Rules of State`
- Only usable in class-based component.
- Component re-renders when 'state' is updated.
- State can ONLY be updated using `setState()`

`To Initialise State`
- Call the `constructor(props)`
- Call the `super(props)`
- Initialise state ---> `this.state = {}`;

`The 3 State Processes`
1. Initialise State ---> `state = {}`;
2. Update State     ---> `setState({})`;
3. Render State     ---> `render()`

Component is re-rendered when state is updated.


