// https://codepen.io/z-/pen/WNbMjEW

import React from 'react';
import styled from 'styled-components';
import './icomoon/style.css';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-gap: 5rem;
  padding: 5rem;
  background: #f5f7fa;
`;

const Card = styled.div`
  position: relative;
  height: 12rem;
  box-shadow: 0 0 2rem -1rem rgba(0, 0, 0, 0.05);
  .multi-button {
    z-index: 0;
    position: absolute;
    top: 1.25rem;
    left: 1.25rem;
    border-radius: 100%;
    width: 0rem;
    height: 0rem;
    transform: translate(-50%, -50%);
    transition: 0.25s cubic-bezier(0.25, 0, 0, 1);
    button {
      display: grid;
      place-items: center;
      position: absolute;
      width: 2rem;
      height: 2rem;
      border: none;
      border-radius: 100%;
      background: ${props => props.background};
      color: ${props => props.text};
      transform: translate(-50%, -50%);
      cursor: pointer;
      transition: 0.25s cubic-bezier(0.25, 0, 0, 1);
      box-shadow: 0 0 0rem -0.25rem ${props => props.background};
      &:hover {
        background: ${props => props.text};
        color: ${props => props.background};
        box-shadow: 0 0 1rem -0.25rem ${props => props.background};
      }
      &:first-child:nth-last-child(1),
      &:first-child:nth-last-child(1) ~ * {
        &:nth-child(1) {
          left: 25%;
          top: 25%;
        }
      }
      &:first-child:nth-last-child(2),
      &:first-child:nth-last-child(2) ~ * {
        &:nth-child(1) {
          left: 37.5%;
          top: 18.75%;
        }
        &:nth-child(2) {
          left: 18.75%;
          top: 37.5%;
        }
      }
      &:first-child:nth-last-child(3),
      &:first-child:nth-last-child(3) ~ * {
        &:nth-child(1) {
          left: 50%;
          top: 15.625%;
        }
        &:nth-child(2) {
          left: 25%;
          top: 25%;
        }
        &:nth-child(3) {
          left: 15.625%;
          top: 50%;
        }
      }
      &:first-child:nth-last-child(4),
      &:first-child:nth-last-child(4) ~ * {
        &:nth-child(1) {
          left: 62.5%;
          top: 18.75%;
        }
        &:nth-child(2) {
          left: 37.5%;
          top: 18.75%;
        }
        &:nth-child(3) {
          left: 18.75%;
          top: 37.5%;
        }
        &:nth-child(4) {
          left: 18.75%;
          top: 62.5%;
        }
      }
    }
  }
  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    background: ${props => props.background};
    color: ${props => props.text};
  }
  &:hover .multi-button,
  .multi-button:focus-within {
    width: 10rem;
    height: 10rem;
  }
`;

const TitleHoverMultiButton = () => {
  return (
    <Container>
      <Card className='card' background='#3C3B3D' text='#fff'>
        <div className='multi-button'>
          <button className='icon-heart-solid'></button>
        </div>
        <div className='container'></div>
      </Card>
      <Card className='card' background='#fff' text='#000'>
        <div className='multi-button'>
          <button className='icon-heart-solid'></button>
          <button className='icon-clipboard-solid'></button>
        </div>
        <div className='container'></div>
      </Card>
      <Card className='card' background='#EC87C0' text='#fff'>
        <div className='multi-button'>
          <button className='icon-heart-solid'></button>
          <button className='icon-comment-solid'></button>
          <button className='icon-share-alt-solid'></button>
        </div>
        <div className='container'></div>
      </Card>
      <Card className='card' background='#5D9CEC' text='#fff'>
        <div className='multi-button'>
          <button className='icon-heart-solid'></button>
          <button className='icon-comment-solid'></button>
          <button className='icon-share-alt-solid'></button>
          <button className='icon-trash-solid'></button>
        </div>
        <div className='container'></div>
      </Card>
    </Container>
  );
};

export default TitleHoverMultiButton;
