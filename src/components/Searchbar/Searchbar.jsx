import { Component } from "react";
import { Button, Form, Header, Input, Span } from "./Searchbar.styled";
import PropTypes from 'prop-types';

export class Searchbar extends Component{
    state = {
        name : ""
   }
handleInputChange = event => {
    const {name, value} = event.currentTarget
    this.setState(
      {
        [name]: value,
      })
  }

handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state)
    this.reset()
    
    }

reset = () => {this.setState({name: '',})}

render(){
    const { name } = this.state
        return(
            
            <Header>
              <Form 
              onSubmit={(e) => 
                {e.preventDefault();
                this.props.onSubmit(name);
                this.reset()}}>
                <Button type="submit">
<Span>Search</Span>
                </Button>
<Input
name="name"
value={name}
onChange={this.handleInputChange}
type="text"
autoComplete="off"
autoFocus
placeholder="Search images and photos"/>
                </Form>  
            </Header>
        )
    }

}

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
}