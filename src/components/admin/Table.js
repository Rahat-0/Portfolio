import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import Pre from '../Pre'

function Admin() {

    const [load, setLoad] = useState(true)
    const [rerander, setRerander] = useState(false)
    const [data, setData] = useState([{
        id: "",
        email: "",
        message: "",
        seen: 0,
        timeStamp: ""
    }])


    useEffect(() => {
        axios.get('https://api.rahat.nuisters.com/api/admin/show')
            .then((res) => {
                let reverse = res.data.reverse()
                setData(reverse)
                setLoad(false)
            })
            .catch(err => {
                console.log(err)
                setLoad(false)
            })
    }, [rerander])


    const deleteHandler = (e) => {
        const email = e.target.value;
        axios.delete('https://api.rahat.nuisters.com/api/admin/delete', { data: { email } })
            .then((res) => {
                console.log(res.data)
                setRerander((rander) => !rander)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <Container className="table-section">
            <Pre load={load} />
            <h1 style={{ color: 'wheat', paddingBottom: "2rem" }}>INBOX MESSAGE</h1>
            <Table bordered hover >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th colSpan={2}>Message </th>
                        <th>time</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(({ id, email, message, seen, timeStamp }) => (
                        <tr key={id} style={seen === 0 ? { background: '#da9e9e' } : {}}>
                            <td>{id}</td>
                            <td><Link style={{textDecoration : "none", color : 'white'}} to='/message' state={{ email, message, timeStamp }}> {email} </Link></td>
                            <td colSpan={2}>{message.length >= 50 ? message.slice(0, 40) + '....' : message}</td>
                            <td >{timeStamp.slice(0, 10)}</td>
                            <td > <Button onClick={deleteHandler} value={email} className='btn'>delete</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default Admin