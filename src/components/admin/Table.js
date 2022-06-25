import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table'

function Admin() {

    const navigate = useNavigate()
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
            })
            .catch(err => {
                console.log(err)
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

    const seenHandler = (e) => {
        const email = e.target.value;
        axios.put('https://api.rahat.nuisters.com/api/admin/seen', { email })
            .then((res) => {
                console.log(res.data)
                navigate(`/message/${email}`)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <Container className="table-section">
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
                            <td ><input readOnly onClick={seenHandler} value={email} /></td>
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