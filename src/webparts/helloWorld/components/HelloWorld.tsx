import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';


import {

  TextField,
  DefaultButton
} from 'office-ui-fabric-react';


interface MyState {
  textFieldValue: string
}

export  class HelloWorld extends React.Component<{}, MyState> {

  constructor(props:any){
    super(props)

    this.state = {
      textFieldValue: ""
    }
    

    console.log("hello World component initiated")
  }

  public render(): JSX.Element {

    return (
      <div>
        <TextField 
          value={ this.state.textFieldValue }
          onChange={ (e:any) => { this.setState({ textFieldValue:e.target.value }) } }
        />

        <br/>

        <DefaultButton 
          text="Button"
          onClick={ () => { console.log(" value after button was clicked: " , this.state.textFieldValue)}}
        />
      </div>
    );
  }
}
