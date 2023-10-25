import { Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id='contact' className='contact'>
      <Container data-aos='fade-up'>
        <div className='section-title'>
          <h2 className='text-center'>Contact</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, consequatur qui iusto distinctio, a voluptatum laudantium rerum sapiente et laborum similique aliquid veritatis quos beatae maxime. Voluptates dolore deserunt iusto.
          </p>
        </div>
        <Row data-aos='fade-up' data-aos-delay={100}>
          <Col lg={6}>
            <Row>
              <Col md={12}>
                <div className='info-box bg-white'>
                  <i className='bx bx-map' />
                  <h3>Our Address</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis recusandae, quidem, animi exercitationem ipsa consequuntur et eveniet deserunt quod doloribus asperiores nostrum dolorem accusantium perferendis reiciendis nisi quas voluptates numquam.</p>
                </div>
              </Col>
              <Col md={6}>
                <div className='info-box mt-4 bg-white'>
                  <i className='bx bx-envelope' />
                  <h3>Email Us</h3>
                  <p>
                    recks@example.com
                    <br />
                    recks@example.com
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className='info-box mt-4 bg-white'>
                  <i className='bx bx-phone-call' />
                  <h3>Call Us</h3>
                  <p>
                    +63 5589 55488 55
                    <br />
                    +63 6678 254445 41
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Form className='php-email-form bg-white'>
              <Row>
                <Col className=' form-group'>
                  <Form.Control
                    type='text'
                    name='name'
                    className='bg-surface-secondary'
                    id='name'
                    placeholder='Your Name'
                    required
                  />
                </Col>
                <div className='col form-group'>
                  <Form.Control
                    type='email'
                    className='bg-surface-secondary'
                    name='email'
                    id='email'
                    placeholder='Your Email'
                    required
                  />
                </div>
              </Row>
              <div className='form-group'>
                <Form.Control
                  type='text'
                  className='bg-surface-secondary'
                  name='subject'
                  id='subject'
                  placeholder='Subject'
                  required
                />
              </div>
              <div className='form-group'>
                <Form.Control
                  as={'textarea'}
                  className='bg-surface-secondary'
                  name='message'
                  rows={5}
                  placeholder='Message'
                  required
                  defaultValue={''}
                />
              </div>
              <div className='my-3'>
                <div className='loading'>Loading</div>
                <div className='error-message' />
                <div className='sent-message'>
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className='text-center'>
                <button type='submit'>Send Message</button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
