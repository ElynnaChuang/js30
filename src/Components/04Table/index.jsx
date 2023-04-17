import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import styles from './styles.module.scss';

const StyledTableCell = styled(TableCell)(({ theme, headercolor }) => ({
  width: 20,
  maxWidth: 20,
  fontSize: 16,

  [`&.${tableCellClasses.head}`]: {
    backgroundColor: headercolor || '#777',
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    color: theme.palette.grey[700],
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.grey[100],
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const StyledTable = ({ title, data, headerColor, titleColor }) => {
  if (!data.length) return '';
  const tableItems = Object.keys(data[0]);

  return (
    <div>
      <h2 className={styles.title} style={{ color: titleColor || '#777' }}>
        {title}
      </h2>
      <TableContainer className={styles.table_container}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {tableItems.map(el => (
                <StyledTableCell key={el} headercolor={headerColor}>
                  {el}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(el => (
              <StyledTableRow key={el.id}>
                {tableItems.map(item => (
                  <StyledTableCell key={el.id + el[item]}>{el[item]}</StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
