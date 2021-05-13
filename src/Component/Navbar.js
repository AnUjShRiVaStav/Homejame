import * as ReactBootStrap from 'react-bootstrap';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import ShoppingOutlined from '@ant-design/icons/ShoppingOutlined'

export default  function Navbar(){
    return(
   <div>
 
        <ReactBootStrap.Navbar variant="dark" expand="lg">
         <ReactBootStrap.Navbar.Brand  href="#home">
  
      <img
        src="https://www.myhomejam.com/images/homejam_logo.png"
        width="150px"
        height="60px"
        className="d-inline-block align-top"
        alt="logo"
      />
  
  </ReactBootStrap.Navbar.Brand>


  <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
   

  <ReactBootStrap.Nav className="ml-auto"> 

  <ReactBootStrap.Form  inline >
   
      <SearchOutlined style={{ fontSize: '150%', color: 'white'}} />
      <ReactBootStrap.FormControl type="text" placeholder="Search" className="me-sm-2" style = { {background: 'transparent', border: 'none'}} />   

    </ReactBootStrap.Form>

       <ReactBootStrap.Nav.Link href="#Help">Help</ReactBootStrap.Nav.Link> 
       <ReactBootStrap.Nav.Link href="#Account">Account</ReactBootStrap.Nav.Link> 
       <ReactBootStrap.Nav.Link href="#Shopping"> 
        <ShoppingOutlined style={{ fontSize: '150%'}} /> 
       </ReactBootStrap.Nav.Link> 
      
    </ReactBootStrap.Nav>

  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>


</div>
    );
}