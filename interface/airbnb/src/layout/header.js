import Stack from 'react-bootstrap/Stack';
import Airbnb_Logo from '../img/Airbnb_Logo.png'

function Topbar() {
    return(
    <Stack direction='horizontal' gap={3}>
        <div className='p-2 mx-5'>
            <img 
                src={Airbnb_Logo}
                alt='airbnb long logo'
                width={192}
                />
        </div>
        <div className='p-2 mx-auto'>Search here</div>
        <div className='p-2 mx-5'>users account here</div>
    </Stack>
    )
}

export default Topbar