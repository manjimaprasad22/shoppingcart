import logo from './logo.svg';
import './App.css';
import {Link, NavLink} from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';

import { useState } from 'react';

function App() {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <div className="App">


  <MDBNavbar expand='lg' light className='navb'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='#' style={{color:"white"}}>Carting</MDBNavbarBrand>

      <MDBNavbarToggler
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
        onClick={() => setShowBasic(!showBasic)}
      >
        <MDBIcon icon='bars' fas />
      </MDBNavbarToggler>

      <MDBCollapse navbar show={showBasic}>
        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0' >
          <MDBNavbarItem >
            <MDBNavbarLink active aria-current='page' href='/home' >
              <p className='lett'>Home</p>
            </MDBNavbarLink>
          </MDBNavbarItem>
          
          <MDBNavbarItem>
            <MDBNavbarLink href='/product'>
              <p className='lett'>shop</p>
              </MDBNavbarLink>
          </MDBNavbarItem>
          
          <MDBNavbarItem>
            <MDBNavbarLink href='/cart'>
              <p className='lett'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>cart</p>
              </MDBNavbarLink>
          </MDBNavbarItem>
          
        </MDBNavbarNav>

        {/* <form className='d-flex input-group w-auto'>
          <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
          <MDBBtn color='primary'>Search</MDBBtn>
        </form> */}
      </MDBCollapse>
      
    </MDBContainer>
  </MDBNavbar>

    </div>
  );
}

export default App;
