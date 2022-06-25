import React, { useEffect, useState } from 'react'
import { Alert, Container, ButtonGroup, Button } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Particle from '../Particle'

function Message() {

    const {email} = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState({
        email : '',
        message : '',
        timeStamp : ''
    })
    useEffect(() => {
        axios.get(`https://api.rahat.nuisters.com/api/admin/one/${email}`)
        .then((res) => {
            console.log(res.data)
            setData(res.data[0])
        })
        .catch(err => {
            console.log(err)
        })
      
    }, [])

    const deleteHandler = () => {
        console.log(email)
        axios.delete('https://api.rahat.nuisters.com/api/admin/delete', { data: { email }})
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