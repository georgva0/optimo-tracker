import React, { useState } from "react";

import { Navbar, NavbarToggler, NavbarBrand, Container } from "reactstrap";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Container>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/" className="py-1">
          <span className="mb-0 h1 text-danger">Optimo tracker</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
      </Navbar>
    </Container>
  );
};

export default Navigation;
