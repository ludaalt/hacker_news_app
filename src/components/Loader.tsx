import React from 'react';
import styled from 'styled-components';

const Loader = () => <LoaderBody />;

const LoaderBody = styled.div`
  display: inline-block;
  width: 120px;
  height: 120px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  &:after {
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    margin: 1px;
    border-radius: 50%;
    border: 10px solid #fc6600;
    border-color: #fc6600 transparent #fc6600 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
