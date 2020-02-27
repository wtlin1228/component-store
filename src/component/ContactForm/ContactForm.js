// https://codepen.io/rickyeckhardt/pen/rNVOrBL

import React from 'react';
import styled from 'styled-components';
import './icomoon/style.css';
import backgroundImg from './images/big-bg.jpg';

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap');

  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;

  height: 100vh;
  width: 100vw;

  background: url(${props => props.backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 0.5fr 2fr;
  grid-template-areas: 'contact-us header header header' 'contact-us address phone email' 'contact-us contact-form contact-form contact-form';

  width: 800px;

  background: #f4f3f3;

  font-family: 'Lato', sans-serif;
`;

const ContactUs = styled.div`
  grid-area: contact-us;
  position: relative;
  overflow: hidden;

  width: 250px;

  background: #c3e0ec;
  &:before {
    content: '';

    position: absolute;
    bottom: -50px;
    left: -100px;
    transform: rotate(25deg);

    height: 250px;
    width: 400px;

    background: #f8b7d8;
  }
  &:after {
    content: '';

    position: absolute;
    bottom: -80px;
    right: -100px;
    transform: rotate(-25deg);

    height: 270px;
    width: 400px;

    background: #9ed8eb;
  }
  .contact-header {
    position: absolute;
    top: 120px;
    left: -40px;
    transform: rotate(-90deg);

    color: white;
    & h1 {
      font-size: 1.5rem;
    }
  }
  .social-bar {
    position: absolute;
    bottom: 20px;
    left: 75px;

    width: 100px;

    z-index: 1;
    & ul {
      list-style-type: none;
      & li {
        display: inline-block;

        width: 25px;
        height: 25px;

        color: white;
        font-size: 1.2rem;
        line-height: 25px;
        text-align: center;
      }
    }
  }
`;

const Header = styled.div`
  grid-area: header;

  padding: 20px 0;

  text-align: center;
  color: #444;

  & h1 {
    font-weight: normal;
  }

  & h2 {
    margin-top: 10px;
    font-weight: 300;
  }
`;

const Info = styled.div`
  padding: 20px 0;

  text-align: center;
  color: #444;

  & h3 {
    font-size: 1rem;
    font-weight: 300;
  }

  & i {
    display: block;
    margin-bottom: 20px;

    font-size: 1.7rem;
    color: #f8b7d8;
  }
`;
const Address = styled(Info)`
  grid-area: address;
`;
const Phone = styled(Info)`
  grid-area: phone;
`;
const Email = styled(Info)`
  grid-area: email;
`;

const FormWrapper = styled.div`
  grid-area: contact-form;

  padding-bottom: 40px;
  & form {
    position: relative;
    margin: 0 auto;
    padding: 20px;

    width: 440px;

    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    & input,
    & textarea {
      display: block;
      margin: 20px auto;
      border: 0;

      width: 100%;

      border-bottom: 1px solid rgba(68, 68, 68, 0.3);
      outline: none;

      background: white;

      font-size: 1rem;
      color: rgba(68, 68, 68, 0.8);
    }
    & input {
      height: 40px;

      line-height: 40px;
    }
    & textarea {
      font-family: lato;
      resize: none;
    }
    & button {
      display: block;
      position: absolute;
      left: 95px;
      bottom: -20px;

      height: 40px;
      width: 250px;

      border: 0;
      border-radius: 20px;
      outline: none;

      background: #9ed8eb;

      font-size: 1.1rem;
      font-weight: 300;
      color: white;
    }
  }
`;

const ContactForm = () => {
  return (
    <Wrapper backgroundImg={backgroundImg}>
      <Container className='contact-form-container'>
        <ContactUs className='contact-us'>
          <div className='contact-header'>
            <h1>&#9135;&#9135;&#9135;&#9135;&nbsp;&nbsp;CONTACT US</h1>
          </div>
          <div className='social-bar'>
            <ul>
              <li>
                <i className='icon-facebook-f-brands'></i>
              </li>
              <li>
                <i className='icon-twitter-brands'></i>
              </li>
              <li>
                <i className='icon-instagram-brands'></i>
              </li>
              <li>
                <i className='icon-dribbble-brands'></i>
              </li>
            </ul>
          </div>
        </ContactUs>
        <Header className='header'>
          <h1>Let's Get Started</h1>
          <h2>Contact us to start your next project!</h2>
        </Header>
        <Address className='address'>
          <i className='icon-map-marker-alt-solid'></i>
          <h3>8266 Gygax</h3>
          <h3>Norfolk, VA</h3>
        </Address>
        <Phone className='phone'>
          <i className='icon-phone-solid'></i>
          <h3>757 287 1608</h3>
        </Phone>
        <Email className='email'>
          <i className='icon-envelope-solid'></i>
          <h3>hello@adept.com</h3>
        </Email>
        <FormWrapper className='contact-form'>
          <form>
            <input placeholder='Name' type='text' />
            <input placeholder='Email' type='email' />
            <textarea
              placeholder='Tell us about your project...'
              rows='4'
            ></textarea>
            <button type='button'>SEND </button>
          </form>
        </FormWrapper>
      </Container>
    </Wrapper>
  );
};

export default ContactForm;
