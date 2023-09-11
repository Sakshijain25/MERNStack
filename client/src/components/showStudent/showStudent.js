import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';


export default function ShowStudent() {
  const [studentsList, setStudentsList] = React.useState([])
  React.useEffect(() => {
    axios.get('http://localhost:5000/students').then((allStudents) =>
    {setStudentsList(allStudents.data);})
  }, [])
  return (
    <>
    <h2>All Students</h2>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Reg. Number</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Grade</TableCell>
            <TableCell align="center">section</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentsList.map((student, key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {row.regNo}
              </TableCell> */}
              <TableCell align="center">{student.regNo}</TableCell>
              <TableCell align="center">{student.studentName}</TableCell>
              <TableCell align="center">{student.grade}</TableCell>
              <TableCell align="center">{student.section}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
