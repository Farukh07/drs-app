import * as React from 'react';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ReactStars from "react-rating-stars-component";

const rows = [
  {name:'Ruchika Chauhan', performance: 40, rating: 3, comment:'Average', id:23},
  {name:'Rahul Singh', performance: 80, rating: 2, comment:'Good', id:24},
  {name:'Sandeep Dhiman', performance: 90, rating: 3, comment:'Outstanding Performance', id:25},
  {name:'Aryan Khan', performance: 50, rating: 3, comment:'Average', id:26},
  {name:'Neha Garg', performance: 75, rating: 4, comment:'Average', id:27},
  {name:'Shweta Srivastav', performance: 85, rating: 2, comment:'Outstanding Performance', id:28},
  {name:'Garima Singh', performance: 65, rating: 2, comment:'Good', id:29},
  {name:'Ben Stokes', performance: 50, rating: 2, comment:'Good', id:30}
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
    minWidth: 150
  },
  {
    id: 'performance',
    numeric: true,
    disablePadding: false,
    label: 'Performance',
    align: "center",
    minWidth: 280,
    format: (value) => (
      <ProgressBar animated now={value} label={value + '%'}/>
    ),
  },
  {
    id: 'rating',
    minWidth: 250,
    disablePadding: false,
    label: 'Rating',
    format: (data) => (
      <ReactStars
        count={5}
        value={data}
        size={30}
        activeColor="#ffd700"
        edit={false}
    />
    )
  },
  {
    id: 'comment',
    minWidth: 250,
    disablePadding: false,
    label: 'Comment',
  },
];

const GlobalTableComponent = () => {
  
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('performance');
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  return (
    <Box>
      <TableContainer className="tableStyle" style={{ maxHeight: 400, maxWidth: '97vw' }}>
        <Table
          stickyHeader
          aria-labelledby="tableTitle" 
        >
          <TableHead>
          {/* {headCells.map((headCell) => ( */}
                    <TableRow>
                    {headCells &&
                      headCells.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth, color: 'black', backgroundColor: 'rgb(196, 192, 192)', fontWeight: 600 }}
                          sortDirection={orderBy === column.id ? order : false}
                        >
                        <TableSortLabel
                          active={orderBy === column.id}
                          direction={orderBy === column.id ? order : 'asc'}
                          onClick={createSortHandler(column.id)}
                        >
                          {column.label}
                          {orderBy === column.id ? (
                            <Box component="span" >
                              {/* {order === 'desc' ? 'sorted descending' : 'sorted ascending'} */}
                            </Box>
                          ) : null}
                        </TableSortLabel>
                        </TableCell>
                      ))}
                  </TableRow>

          </TableHead>
          
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy)).map(
              (row, index) => {
                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={row.id}
                  >
                    {headCells &&
                      headCells.map((column,i) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format ? column.format(value, i) : value}
                          </TableCell>
                        );
                      })}
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </Table>
      </TableContainer>
  
    </Box>
  );
}
export default GlobalTableComponent;
