import * as React from 'react';

import {
  Persona,
  IPersonaSharedProps,
  PersonaSize 
} from 'office-ui-fabric-react';

export interface IProps {
  name: string,
  secondaryText:string
}

export class Personas extends React.Component<IProps, {}> {

  constructor(props: IProps){
    super(props)
    
  }

  examplePersona: IPersonaSharedProps = {
    secondaryText: this.props.secondaryText,
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
  };
  
  render() {

    return (
      <div>
        <Persona {...this.examplePersona} text={this.props.name} size={PersonaSize.size100} />
      </div>
    );
  }
}
