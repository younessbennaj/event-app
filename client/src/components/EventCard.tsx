import React, { FunctionComponent, ReactNode } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import PropTypes from 'prop-types';
import Card from './Card';

const ImageContainer = styled.div<{ imageUrl: string }>`
  border-radius: 8px;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 8px;
  overflow: hidden;

  @media ${(props) => props.theme.mediaQueries.small} {
    background-size: 150%;
    height: 96px;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    background-size: 100%;
    height: 208px;
  }
`;

const EventCardContent = styled.div`
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.mediaQueries.small} {
    padding: 0 16px;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    padding: 0;
  }
`;

const Date = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0 16px;
  position: relative;

  @media ${(props) => props.theme.mediaQueries.small} {
    height: 64px;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    height: 100%;
  }
`;

const DateBlock = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 34px;
  background-color: ${(props) => props.theme.colors.lightPrimary};
  color: ${(props) => props.theme.colors.primary};
  font-style: normal;
  font-weight: 600;
  border-radius: 8px;
  transform: translate(0, -50%);

  span {
    font-size: 16px;
    line-height: 24px;
  }

  p {
    font-size: 24px;
    line-height: 32px;
  }

  @media ${(props) => props.theme.mediaQueries.small} {
    position: absolute;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    position: relative;
  }
`;

const Heading = styled.h2<{ theme: DefaultTheme }>`
  color: ${(props) => props.theme.colors.heading};
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  margin-top: 16px;

  @media ${(props) => props.theme.mediaQueries.small} {
    margin-top: 0px;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    margin-top: 16px;
  }
`;

const Time = styled.div<{ theme: DefaultTheme }>`
  background-color: ${(props) => props.theme.colors.lightPrimary};
  color: ${(props) => props.theme.colors.primary};
  display: inline-flex;
  padding: 0.5rem 1rem;
  text-align: center;
  margin-top: 16px;
  width: max-content;
  border-radius: 8px;

  span {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  @media ${(props) => props.theme.mediaQueries.small} {
    flex-direction: column;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    flex-direction: row;
  }
`;

const Info = styled.div<{ theme: DefaultTheme }>`
  margin-top: 16px;
  margin-right: 24px;
  span {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
  }

  p {
    color: ${(props) => props.theme.colors.primary};
    padding-top: 8px;
  }
`;

const Description = styled.div<{ theme: DefaultTheme }>`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
`;

const EventCardContainer = styled.div<{ theme: DefaultTheme }>`
  color: ${(props) => props.theme.colors.body};
  display: flex;
  flex-direction: row;

  @media ${(props) => props.theme.mediaQueries.small} {
    flex-direction: column;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    flex-direction: row;
  }
`;

interface Date {
  month: string;
  day: string;
}

const EventCard: FunctionComponent<{
  title: string;
  body: string;
  date: Date;
  startAt: string;
  endAt: string;
  remainingTickets: string;
  closingDate: string;
  imageUrl: string;
}> = ({
  title,
  body,
  date,
  startAt,
  endAt,
  remainingTickets,
  closingDate,
  imageUrl,
}) => {
  return (
    <Card>
      <ImageContainer imageUrl={imageUrl} />
      <EventCardContainer>
        <Date>
          <DateBlock>
            <span>{date.month}</span>
            <p>{date.day}</p>
          </DateBlock>
        </Date>
        <EventCardContent>
          {/* Title */}
          <Heading>{title}</Heading>
          {/* Time */}
          <Time>
            <span>{`${startAt} - ${endAt}`}</span>
          </Time>
          {/* Seats */}
          <InfoContainer>
            <Info>
              <span>Places restantes</span>
              <p>{remainingTickets}</p>
            </Info>
            <Info>
              <span>Date de clôture</span>
              <p>{closingDate}</p>
            </Info>
          </InfoContainer>
          <Description>{body}</Description>
        </EventCardContent>
      </EventCardContainer>
    </Card>
  );
};

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.shape({
    month: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
  }).isRequired,
  startAt: PropTypes.string.isRequired,
  endAt: PropTypes.string.isRequired,
  remainingTickets: PropTypes.string.isRequired,
  closingDate: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default EventCard;
