import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import EventCard from './components/EventCard';
import ParticipantsList from './components/ParticipantsList';
import RefundPolicy from './components/RefundPolicy';
import BookinButton from './components/BookingButton';
import { Grid, GridItem } from './components/Grid';
import { theme } from './theme';
import { Booking } from './ts/types';

// Theme Provider Component
const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = { children: PropTypes.node.isRequired };

interface Date {
  month: string;
  day: string;
}

function App() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  // Event element state
  const [imageUrl, setImageUrl] = useState<string>('');
  const [date, setDate] = useState<Date>({ month: '', day: '' });
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [startAt, setStartAt] = useState<string>('');
  const [endAt, setEndAt] = useState<string>('');
  const [remainingTickets, setRemainingTickets] = useState<string>('');
  const [closingDate, setClosingDate] = useState<string>('');

  function formatDate(str, format) {
    const unix = Date.parse(str);
    const dateMoment = moment(unix).locale('fr');
    return dateMoment.format(format);
  }

  useEffect(() => {
    axios.get('/bookings').then((response) => {
      setBookings(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get('/event').then((response) => {
      const day: string = formatDate(response.data.startAt, 'D');
      const month: string = formatDate(response.data.startAt, 'MMM');
      setDate({ month, day });
      setStartAt(formatDate(response.data.startAt, 'HH:mm'));
      setEndAt(formatDate(response.data.endAt, 'HH:mm'));
      setImageUrl(response.data.image.url);
      setTitle(response.data.title);
      setBody(response.data.description);
      setRemainingTickets(response.data.remainingTickets.toString());
      setClosingDate(formatDate(response.data.startAt, 'D MMMM YYYY'));
    });
  }, []);
  return (
    <Theme>
      <Grid>
        <GridItem span="2">
          <EventCard
            imageUrl={imageUrl}
            date={date}
            title={title}
            body={body}
            startAt={startAt}
            endAt={endAt}
            remainingTickets={remainingTickets}
            closingDate={closingDate}
          />
        </GridItem>
        <GridItem span="1">
          <RefundPolicy closingDate="2 janvier 2021" />
          <BookinButton />
        </GridItem>
        <GridItem span="2">
          <ParticipantsList bookings={bookings} />
        </GridItem>
      </Grid>
    </Theme>
  );
}

export default App;
