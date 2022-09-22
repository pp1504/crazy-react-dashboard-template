import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Chip, Link, TableFooter, TablePagination } from '@mui/material';
import { OrderData } from './OrderTableData';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#ffebee44',
    color: theme.palette.common.black,
    border:0,
    fontSize:15,
    fontWeigth:600,
    fontFamily:'Manrope',
    
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
    borderBottom:' 1px solid #e7e7e781 ' ,
    fontFamily:'Manrope',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor:'#ffffff',
  },
 
  // hide last border
  '&:last-child td, &:last-child th': {
    borderBottom: ' 1px solid #e7e7e781 ',
  },
}));



export default function MainTable({pagination,pageRows,onIdClick}) {
    const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(pageRows);
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  function handleIdClick(order) {
    onIdClick && onIdClick(order);
  
  }


function getFillColor(status){
  switch (status) {
    case "Returned":
      return "#ff9100";
    case "In Progress":
      return "#2196f3";
    case "Cancelled":
      return "#ef5350";
    case "Fulfilled":
      return "#8bc34a";
    default:
      return "#00000012";
  }
}
  return (
   <Box>
    <TableContainer component={pagination=='true' && Paper} >
      <Table sx={{ minWidth: 700 ,border:' 1px solid #e7e7e781 '}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Order ID</StyledTableCell>
            <StyledTableCell  align='left'>Location</StyledTableCell>
            <StyledTableCell >Total price&nbsp;($)</StyledTableCell>
            <StyledTableCell >Total tax&nbsp;($)</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {OrderData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => (
            <StyledTableRow key={row.orderid}>
              <StyledTableCell component="th" scope="row" align='left'>
                {
                pagination=='true'? 
                <Link underline='hover' 
                sx={{cursor:'pointer'}}
                onClick={()=>handleIdClick(row)}
                >
                {row.orderid}
                </Link> : 
                <>{row.orderid}</>
                }
               
              </StyledTableCell>
              <StyledTableCell >{row.location}</StyledTableCell>
              <StyledTableCell >{row.totalprice}</StyledTableCell>
              <StyledTableCell>{row.totaltax}</StyledTableCell>
              <StyledTableCell 
             
              >
                <Chip label={row.status} 
                 sx={{
                    backgroundColor:getFillColor(row.status),
                    color:'#ffffff',
                    borderRadius:3,
                  }}
                />
                </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>

  
      </Table>

      {pagination=== 'true' ?
  

        <TablePagination rowsPerPageOptions={[10, 25,50,75,100]}
        component="div"
        count={OrderData.length}
        rowsPerPage={rowsPerPage}
        SelectProps={{
            inputProps: {
              'aria-label': 'rows per page',
            },
            native: true,
          }}
          
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage} />
 

         :null
        }
        
    </TableContainer>
   </Box> 
  );
}
