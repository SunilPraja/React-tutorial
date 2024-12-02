import { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AlertDismissibleExample({ alert }) {
  const [show, setShow] = useState(false);

  // Trigger the alert when `alert` changes
  useEffect(() => {
    if (alert) {
      setShow(true);
      // const timer = setTimeout(() => setShow(false), 2000);
      // return () => clearTimeout(timer); 
    }
  }, [alert]);

  if (!alert || !show) {
    return null; // Return nothing if there's no alert or it's dismissed
  }

  return (
    <Row className='justify-content-center alert-box'>
    <Col md={12}>
    <Alert variant={alert.type || "primary"} onClose={() => setShow(false)} dismissible>
      <Alert.Heading>{alert.msg || "Alert!"}</Alert.Heading>
      <p>
        {alert.details || "This is a dynamically generated alert. Customize as needed."}
      </p>
    </Alert>
    </Col>
    </Row>
  );
}

export default AlertDismissibleExample;
