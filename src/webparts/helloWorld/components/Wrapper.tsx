import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Personas } from './Personas'


import {

  TextField,
  DefaultButton
} from 'office-ui-fabric-react';



export class Wrapper extends React.Component {

  constructor(props:any){
    super(props)

    this.state = {
      textFieldValue: ""
    }
    

    console.log("hello World component initiated")
  }

  apiFetch = () => {

    return [
        {
          name:"Khaleel Elias",
          secondaryText:"ald"
        },
        {
          name:"Robin Sauma",
          secondaryText:"Best in the whole world"
        },
        {
          name:"Fahed Yousif",
          secondaryText:"ald2"
        },
        {
          name:"Khaleel Elias",
          secondaryText:"ald3"
        }
      ]
  
      /*
    return new Promise( resolve => {
      fetch("https://randommer.io/api/Name")
      .then(res => res.json())
      .then( (data:any) => {
        resolve(data)
      })
    })
    */
  }

  render():JSX.Element {
    let ald:any = this.apiFetch()
    const list = ald.map( (value:any, index:number) => {
      return( <Personas name={value.name} secondaryText={value.secondaryText} key={"ald"+index}/>)
    })  

    console.log("this is the list: ", list)

    return (
      <div>      
        {list}
      </div>

    );
  }
}
