import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

const SearchBar = () => {
    return (
<div className='searchPart'>
<h4 style={{color:'white',paddingBottom:'20px'}}>I GROW BY HELPING PEOPLE IN NEED.</h4>
<Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
</div>
    );
};

export default SearchBar;