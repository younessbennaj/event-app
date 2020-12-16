import React, { FunctionComponent, ReactNode } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import PropTypes from 'prop-types';
import Card from './Card';

const Heading = styled.h6<{ theme: DefaultTheme }>`
  color: ${(props) => props.theme.colors.body};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
`;

const Body = styled.p<{ theme: DefaultTheme }>`
  color: ${(props) => props.theme.colors.body};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
`;

const RefundPolicy: FunctionComponent<{ closingDate: string }> = ({
  closingDate,
}) => {
  return (
    <Card>
      <Heading>Politique d&#39;annulation et de remboursement</Heading>
      <Body>
        Les annulations et remboursements peuvent s&#39;effectuer jusqu&#39;à la
        date de clôture des inscriptions soit jusqu&#39;au <b>{closingDate}</b>
      </Body>
    </Card>
  );
};

RefundPolicy.propTypes = { closingDate: PropTypes.string.isRequired };

export default RefundPolicy;
