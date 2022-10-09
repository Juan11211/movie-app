import React from 'react'
import ContactForm from './ContactForm'


class Contact extends React.Component {
  state = {
      fName: '',
      lName: '',
      email: '',
      phone: '',
      badges: []
}
  
  handleChange = e => {
      const {name, value} = e.target
      this.setState({
          [name]: value
      })
  }

  handleSubmit = e => {
      e.preventDefault()
      this.setState(prevState => ({
          fName: '',
          lName: '',
          email: '',
          phone: '',
          badges: [...prevState.badges, this.state]
      }))
  }

  render() {
      const badgeCompiler = this.state.badges.map(item => 
      <ContactForm key={item.fName} badge={item} />)
      return(
          <div className='theForm'>
              <div className='input--form'>
                  <form className='input--form' onSubmit={this.handleSubmit}>
                      <input 
                        
                          type='text'
                          placeholder='First Name'
                          name='fName'
                          value={this.state.fName}
                          onChange={this.handleChange}
                          minLength='3'
                          required
                      />
                      <input 
                          type='text'
                          placeholder='Last Name'
                          name='lName'
                          value={this.state.lName}
                          onChange={this.handleChange}
                      />
                      <input 
                          type='text'
                          placeholder='Email'
                          name='email'
                          value={this.state.email}
                          onChange={this.handleChange}
                          minLength='3'
                          required
                      />
                      <input 
                          type='tel'
                          placeholder='Phone'
                          name='phone'
                          value={this.state.phone}
                          onChange={this.handleChange}
                          minLength='3'
                          required
                      />
                      <div>
                          <button className='btn'>Submit</button>
                      </div>
                  </form>
              </div>
              <div className='badge'>
                  {badgeCompiler}
              </div>
          </div>
      )
  }
}
export default Contact;


