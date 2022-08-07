`Functional Component` 
- Produces JSX to show content to user.
- Can't use `Lifecycle method` to run code at specific point in time.
- Can't use `State system` to update content on screen.
- Can only use lifecycle events and state using the `Hook System`

`Class Component`
- Can produce JSX.
- Can use lifecycle method.
- Can State system.
- Easier code organisation.


`State in React`
State is JavaScript object that contains data relevant to a single component.

`Rules of State`
- Only usable in class-based component.
- You'll confuse with state.
- Component re-renders when 'state' is update.
- State must be initialised when a component is created.
- State can ONLY be updated using `setState()`

`To Initialise State`
- Call the `constructor(props)`
- Call the `super(props)`
- Initialise state ---> `this.state = {}`;

`The 3 State Processes`
1. Initialise State ---> `this.state = {}`;
2. Update State     ---> `setState({})`;
3. Render State     ---> `render()`

Component is re-rendered when state is updated.

this.state = { lat: null } ~ the initial state is 'null' (nothing to show on screen).
It's update by setState().
setState({ lat: 40 }) ~ 40 is the relevant content to be shown on screen.


`Lifecycle Methods` are functions that are automatically called at discrete time during the compnents lifecycle.

`Component Lifecycle`
1. constructor() 
2. render() ~ returns jsx content to show on screen.

3. `ComponentDidMount()` ~ called automatically anytime content is shown on screen.
4. render() is called again before ComponentDidUpdate().
5. `ComponentDidUpdate()` ~ called automatically when `setState()` updates component.
6. `ComponentWillUnmount()` ~ get called when content on screen to showing.


`App Lifecycle Walkthrough`
1. Browser loads Js file and execute it
2. Instance of `App` component is created
3. App component's `constructor()` is called
4. Call `super()`
5. State object is initialised ---> `this.state = {}`
6. Geological service is called
7. Component's `render()` is called
8. App returns ---> JSX, rendered to the page as `HTML`
9. Geological callback results in
10. `this.setState()` updates the `this.state = {}`
11. React sees that component's state is updated
12. React re-renders the component
13. React updates content on the screen.


`Alternative Way of Initialising a State`
class App extends React.Component {
    state = {};
}


We can take `state` from parent component and pass it down as `props` to child component.


`SEASON-APP` 
By checking the user's location, the Seasons app can determine the user's current season.

`index.js` contains the class-based <App /> component which has a `state` and renders the children components.

`SeasonDisplay` component shows user current season including text and icons with background color.

`Spinner` component runs adds a loading effect with black color background which. It awaits the user location request permission. JSX codes extracted from `Semantic UI` CSS library.
