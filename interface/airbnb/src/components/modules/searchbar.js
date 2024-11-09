import { useState } from "react";
import { Form, FormControl, Button, InputGroup } from 'react-bootstrap';

function SearchBar () {
    const [search, setSearch] = useState('');

    function handleSearchBar(e) {
        setSearch(e.target.value);
    }

    return (
        <Form inline>
            <InputGroup className="mb3">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    value={search}
                    onChange={handleSearchBar}
                    />
                <Button variant="outline-primary">
                <i className="bi bi-search" />
                    {/* Search */}
                </Button>
            </InputGroup>
        </Form>
    )
}

export default SearchBar;