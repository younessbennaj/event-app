import React, { FunctionComponent, ReactNode } from 'react';
import styled, { DefaultTheme } from 'styled-components';
// import PropTypes from 'prop-types';
import Card from './Card';

const Inner = styled.div`
  display: flex;
  flex-direction: column;
`;

const SucessButton = styled.button<{ theme: DefaultTheme }>`
  background-color: ${(props) => props.theme.colors.success};
  color: #ffffff;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  padding-top: 8px;
  padding-bottom: 8px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`;

const Message = styled.div`
  background-color: ${(props) => props.theme.colors.lime};
  color: ${(props) => props.theme.colors.success};
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 16px;
`;

const Container = styled.div`
  background: #ffffff;
  padding: 16px;

  @media ${(props) => props.theme.mediaQueries.small} {
    position: fixed;
    border-radius: 0px;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.03);
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    position: relative;
    border-radius: 12px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.03);
    margin-top: 16px;
  }
`;

const BookingButton: FunctionComponent = () => {
  return (
    <Container>
      <Inner>
        <Message>
          <span>Gratuit</span>
        </Message>
        <SucessButton type="button">Réserver</SucessButton>
      </Inner>
    </Container>
  );
};

// BookingButton.propTypes = { closingDate: PropTypes.string.isRequired };

export default BookingButton;
