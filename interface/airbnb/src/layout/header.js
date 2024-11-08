import Stack from 'react-bootstrap/Stack';

function Topbar() {
    return(
    <Stack direction='horizontal' gap={3}>
        <div className='p-2'>Logo here</div>
        <div className='p-2'>Search here</div>
        <div className='p-2'>users account here</div>
    </Stack>
    )
}

export default Topbar