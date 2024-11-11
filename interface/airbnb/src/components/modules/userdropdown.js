import Dropdown from 'react-bootstrap/Dropdown';


function UserDropDown() {
    return(
        <Dropdown align='end' >
            <Dropdown.Toggle className='userdropdown'>
                <i className="bi bi-list" />
                <i className="bi bi-person-circle" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>Sign in</Dropdown.Item>
                <Dropdown.Item>Sign up</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Other items here</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default UserDropDown;