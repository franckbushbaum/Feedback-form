import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import moment from 'moment';
import {
    Button,
    TableRow,
    TableCell,
} from "@mui/material";

import { BsTrash } from "react-icons/bs";

import './AdminItem.css'

function AdminItem({ key, id, feeling, understanding, support, comments, flagged, date, adminData, getServerInfo }) {
    
    const [toggleFlagged, setToggleFlagged] = useState(true)

    //put Client-side
    const flagReview = (id) => {
        setToggleFlagged(!toggleFlagged)
        axios({
            method: 'PUT',
            url: `/feedback/` + id,
            data: {
                id: id,
                bool: toggleFlagged
            }
        }).then(response => {
            getServerInfo();
        }).catch(error => {
            console.log('OOPS,', error)
        })
    }

    const deleteFeedback = (id) => {
        axios.delete(`/feedback/${id}`).then(response => {
            console.log(response);
            getServerInfo();
        }).catch(error => {
            console.log(error)
        });
        alert('Feedback removed')
    }

    
    

    let colorChanger=""

    if(toggleFlagged == true){
        colorChanger='red'
    } else {
        colorChanger='blue'
    }

    console.log('what is toggleFlagged now?,', toggleFlagged)

    useEffect(() => {
        getServerInfo();
        console.log('what is toggleFlagged', toggleFlagged);
    }, [])

    return (
        <>
            <p>{JSON.stringify(adminData)}</p>
            <TableRow className={colorChanger} key={id}>
                <TableCell align="center">{id}</TableCell>
                <TableCell align="center">{feeling}</TableCell>
                <TableCell align="center">{understanding}</TableCell>
                <TableCell align="center">{support}</TableCell>
                <TableCell align="center">{comments}</TableCell>
                <TableCell align="center">{flagged.toString().toUpperCase()}</TableCell>
                <TableCell align="center">{(moment(date).format('MMM Do YY'))}</TableCell>
                <Button className="flag-button" sx={{margin: 1}} variant="contained" size="small" onClick={() => flagReview(id)}>Flag</Button>
                <BsTrash className="trash-bin" onClick={() => deleteFeedback(id)} />
            </TableRow>
        </>
    )

}


export default AdminItem;