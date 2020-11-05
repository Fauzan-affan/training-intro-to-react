import React from "react"
// import ClassComponent from "./Components/ClassComponents.js"
// import FuntionalComponent from "./Components/FunctionalComponent"
// import Hello from "./Components/JSX/Hello.js"
// import CreateLement from "./Components/JSX/CreateElement.js"
// import NameProps from './Components/PropsAndState/NameProps.js'
// import ObectProps from "./Components/PropsAndState/ObectProps.js"
// import StateComponent from "./Components/State/StateComponent.js"
import './App.css';
import "./style.css"

// import IfCondition from "./Components/ConditionalRendering/IfCondition.js"
// import VariableConsition from "./Components/ConditionalRendering/VariableConsition";
// import TernaryConditional from "./Components/ConditionalRendering/TernaryConditional"
// import SircuitOperator from "./Components/ConditionalRendering/SircuitOperator.js"
// import Styles from "./Components/StylesComponent/Styles";
// import InlineStyle from "./Components/StylesComponent/ObjectStyle.js"
// import ModuleStyle from "./Components/StylesComponent/ModuleStyle";

// import FormHandler from "./Components/Form/FormHandler.js"
import Fragment from "./Components/Fragments/Fragment";
import Fragment2 from "./Components/Fragments/Fragment2"

class App extends React.Component {
  render() {
    // const name = {
    //   name1: "Gama",
    //   name2: "Romi"
    // }
    return (
      <div className="App">
        {/* <ClassComponent />
        <FuntionalComponent />
        <Hello />
        <CreateLement />
        <NameProps name="Gama" name2="Romi" />
        <ObectProps name={name}>
          <p>Children Props</p>
        </ObectProps>
        <StateComponent /> */}
        {/* <IfCondition />
        <VariableConsition />
        <TernaryConditional />
        <SircuitOperator />
        <Styles textXl={true} />
        <InlineStyle />
        <ModuleStyle /> */}
        {/* <FormHandler /> */}
        <Fragment />
        <Fragment2 />
      </div>
    );
  }
}

export default App;
