import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledButtonDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Northwind App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/busegoc"> Github </NavLink>
              </NavItem>
              <UncontrolledButtonDropdown nav inNavbar>
                <DropdownToggle nev caret>
                  options - {this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    option 1
                  </DropdownItem>
                  <DropdownItem>
                    option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>

                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

    )
  }
}