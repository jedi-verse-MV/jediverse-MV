import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Container fluid>
        <Menu inverted color="black">
          <Link to="/">
            <Menu.Item name="JediVerse" />
          </Link>
          <Link to="/people">
            <Menu.Item name="people" />
          </Link>
          <Link to="/planets">
            <Menu.Item name="planets" />
          </Link>
          <Link to="/films">
            <Menu.Item name="films" />
          </Link>
        </Menu>
      </Container>
    </div>
  );
}

export default Navbar;
