import React from 'react';
import Styles from './Styles';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown'


function App() {
  return (
    <div>
    <Styles />
    <Button variant="primary">Primary</Button>{' '}
    <Button variant="danger">Danger</Button>{' '}
    <Button variant="light">Light</Button>{' '}
    <Button variant="dark">Dark</Button>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">First Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Second action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
}

export default App;
