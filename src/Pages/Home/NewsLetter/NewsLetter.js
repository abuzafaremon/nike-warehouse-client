import React from 'react';
import './NewsLetter.css';
import { Button, Form } from 'react-bootstrap';

const NewsLetter = () => {
  return (
    <section className='news-letter py-5'>
      <div className="container">
        <div className="form-container mx-auto w-75 p-5">
          <Form>
            <h2 className="form-title mb-4">Our Newsletter</h2>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Button className='w-100' variant="danger" type="submit">
              Subscribe
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;