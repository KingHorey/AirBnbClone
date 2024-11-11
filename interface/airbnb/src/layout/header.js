import Stack from 'react-bootstrap/Stack';
import Airbnb_Logo from '../img/Airbnb_Logo.png'
import SearchBar from '../components/modules/searchbar';
import UserDropDown from '../components/modules/userdropdown';
import '../styles.css'

function Topbar() {
    return(
    <Stack direction='horizontal' gap={3} className='topbar'> 
        <div className='p-2 mx-5'>
            <img 
                src={Airbnb_Logo}
                alt='airbnb long logo'
                width={192}
                />
        </div>
        <div className='p-2 mx-auto'>
            <SearchBar />
        </div>
        <div className='p-2 mx-5'>
            <UserDropDown />
        </div>
    </Stack>
    )
}

export default Topbar