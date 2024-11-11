import { useState } from "react";
import "../../styles.css"
import { Form/*, FormControl, Button, InputGroup */} from 'react-bootstrap';

function SearchBar () {
    const [search, setSearch] = useState('');

    function handleSearchBar(e) {
        setSearch(e.target.value);
    }

    return (
        <Form inline className="searchbar">
            <input
                value={search}
                onChange={handleSearchBar}
            />
            <i className="bi bi-search" />
        </Form>
    )
}

export default SearchBar;