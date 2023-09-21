import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledApp = styled.h1`
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 2rem;
  background:pink;
  color: blue;
`;

function Styles() {
    return (
      <StyledApp>
        <h1>Welcome to Styled-Components</h1>
        <p>This is a basic React app that combines styled-components</p>
       </StyledApp>
    );
  }

  export default Styles