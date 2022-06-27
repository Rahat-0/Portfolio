import React, { useEffect, useState } from 'react'
import { Alert, Container, ButtonGroup, Button } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Particle from '../Particle'
import Pre from '../Pre'

function Message() {
    const location = useLocation()
    const [load, setLoad] = useState(true)
    const navigate = useNavigate()
    
    const [data, setData] = useState({
        email : '',
        message : '',
        timeStamp : ''
    })


    useEffect(() => {
        axios.put('https://api.rahat.nuisters.com/api/admin/seen', { email : location.state.email })
        setData(location.state)
        setLoad(false)
    }, [location])
    
    const deleteHandler = () => {
        axios.delete('https://api.rahat.nuisters.com/api/admin/delete', { data: { email : data.email }})
        .then((res) => {
            console.log(res.data)
            navigate('/admin')
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <Container className="message-section">
            <Pre load = {load} />
            <Particle />
            <Alert variant="danger">
                <Alert.Heading>{data.email} </Alert.Heading>
                <p className="mb-3">{data.timeStamp} </p>
                <p>
                    {data.message}
                </p>
                <hr />
                <ButtonGroup className='message-btn'>
                    <Link to='/admin' ><Button> return </Button> </Link>
                    <Button onClick={deleteHandler}> delete</Button>
                </ButtonGroup>
            </Alert>

        </Container>
    )
}

export default Message