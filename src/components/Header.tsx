import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Button from './Button';
import { getNews } from '../services/getNews';
import { deleteNews } from '../services/deleteNews';

import { AppProps } from '../types/types';

const Header: React.FC<AppProps> = () => {
  // const HeaderAnimation = keyframes`
  //   100% {
  //     transform: translateX(20px);
  //   }
  // `;

  const Container = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: #fc6600;
    top: 0;
    padding: 35px;
    font-size: 25px;
    z-index: -100;
  `;

  const Title = styled.h1`
    font-family: sans-serif;
    color: #fff;
  `;

  const dispatch = useDispatch();
  const updateNews = () => {
    dispatch(deleteNews());
    dispatch(getNews());
  };

  const fn = () => {
    if (window.scrollY > 20) {
      document.querySelector('h1')?.classList.add('toleft');
      document.querySelector('h1')?.classList.remove('tocenter');

      document.querySelector('button')?.classList.add('toright');
      document.querySelector('button')?.classList.remove('tocenter');
    } else {
      document.querySelector('h1')?.classList.add('tocenter');
      document.querySelector('h1')?.classList.remove('toleft');

      document.querySelector('button')?.classList.add('tocenter');
      document.querySelector('button')?.classList.remove('toright');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', fn);
  }, []);
  return (
    <Container>
      <Title>Hacker News</Title>
      <Button title="Update News" buttonFunction={updateNews} />
    </Container>
  );
};

export default Header;
