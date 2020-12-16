import React, { FunctionComponent, ReactNode } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import PropTypes from 'prop-types';
import Card from './Card';
import { Booking } from '../ts/types';

const TableHeader = styled.div<{ theme: DefaultTheme }>`
  justify-content: space-between;
  padding: 9px 16px 7px 72px;
  background-color: ${(props) => props.theme.colors.lightGrey};
  border-radius: 8px;
  span {
    color: ${(props) => props.theme.colors.greyBlue};
  }

  @media ${(props) => props.theme.mediaQueries.small} {
    display: none;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    display: flex;
  }
`;

const AttendeeLine = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 16px;

  p {
    padding: 0 16px;
    color: ${(props) => props.theme.colors.darkGrey};
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
  }

  span {
    margin-left: auto;
    color: ${(props) => props.theme.colors.cyan};
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
  }
`;

const Avatar = styled.div<{ url: string }>`
  background-image: url(${(props) => props.url});
  background-position-y: top;
  background-position-x: center;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  background-size: 150%;
  border-radius: 50%;
`;

const ListHeading = styled.h4<{ theme: DefaultTheme }>`
  color: ${(props) => props.theme.colors.heading};
  margin-bottom: 16px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

const ParticipantsList: FunctionComponent<{ bookings: Booking }> = ({
  bookings,
}) => {
  return (
    <>
      <ListHeading>Liste des participants ({bookings.length})</ListHeading>
      <Card>
        <TableHeader>
          <span>Salarié</span>
          <span>Quantité réservée</span>
        </TableHeader>
        <div>
          <ul>
            {bookings.map((booking) => {
              return (
                <li key={booking.id}>
                  <AttendeeLine>
                    <Avatar url={booking.user.avatar.url} />
                    <p>
                      {booking.user.firstName} {booking.user.lastName}
                    </p>
                    <span>{booking.numberOfTickets}</span>
                  </AttendeeLine>
                </li>
              );
            })}
          </ul>
        </div>
      </Card>
    </>
  );
};

ParticipantsList.propTypes = {
  bookings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        avatar: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }),
      }),
      numberOfTickets: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ParticipantsList;
