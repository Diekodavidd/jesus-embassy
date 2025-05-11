import React from 'react';
import './ChurchEventPage.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Calendar } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';
// import Countdown from './Countdown';
import Countdown from 'react-countdown';

const ChurchEventPage = () => {
  const eventDate = new Date('2025-05-26T18:00:00');

  return (
    <div className="church-event-wrapper py-5">
      <Container>
        <Row className="gx-5 gy-4">
          {/* Event Block */}
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div id="events" className="event-block p-4 glowing-border">
              <div className="event-header d-flex align-items-center mb-3">
                <Calendar className="calendar-icon me-2" />
                <span className="event-label">UPCOMING EVENTS</span>
              </div>
              <h2 className="event-title mb-2">Holy Ghost Night</h2>
              <p className="event-date">May 26, 2025 – 6:00 PM</p>

              {/* Countdown */}
              <div id="give" className="countdown-wrapper">
                <span className="countdown-title">Time Remaining:</span>
                <Countdown
                  date={eventDate}
                  renderer={({ days, hours, minutes, seconds }) => (
                    <div className="countdown-values">
                      <span>{days}d</span> : <span>{hours}h</span> : <span>{minutes}m</span> : <span>{seconds}s</span>
                    </div>
                  )}
                />
                {/* <Countdown targetDate="2024-06-15T18:00:00" /> */}
              </div>

              <p className="scripture-tag">“When the Spirit comes, there is liberty.” – 2 Cor. 3:17</p>
            </div>
          </motion.div>

          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div id="events" className="event-block p-4 glowing-border">
              <div className="event-header d-flex align-items-center mb-3">
                <Calendar className="calendar-icon me-2" />
                <span className="event-label">UPCOMING EVENTS</span>
              </div>
              <h2 className="event-title mb-2">Holy Ghost Night</h2>
              <p className="event-date">May 26, 2025 – 6:00 PM</p>

              {/* Countdown */}
              <div id="give" className="countdown-wrapper">
                <span className="countdown-title">Time Remaining:</span>
                <Countdown
                  date={eventDate}
                  renderer={({ days, hours, minutes, seconds }) => (
                    <div className="countdown-values">
                      <span>{days}d</span> : <span>{hours}h</span> : <span>{minutes}m</span> : <span>{seconds}s</span>
                    </div>
                  )}
                />
                {/* <Countdown targetDate="2024-06-15T18:00:00" /> */}
              </div>

              <p className="scripture-tag">“When the Spirit comes, there is liberty.” – 2 Cor. 3:17</p>
            </div>
          </motion.div>

          {/* Partner Block */}
          {/* <motion.div
            className="col-md-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="partner-block p-4 glowing-border">
              <h3 className="partner-title mb-3">
                Partner with Heaven in Advancing the Gospel
              </h3>
              <p className="partner-text mb-4">
                Sow into the Kingdom. Your seed strengthens missions, equips saints, and changes lives.
              </p>
              <Button className="give-button px-4 py-2">Give Now</Button>
            </div>
          </motion.div> */}
        </Row>
      </Container>
    </div>
  );
};

export default ChurchEventPage;
