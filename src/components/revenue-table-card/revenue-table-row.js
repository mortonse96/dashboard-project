import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function RevenueTableRow({
  category,
  net,
  overhead,
  taxes,
  total,
}) {
  return (
    <TableRow>
      <TableCell align={'left'}>{category}</TableCell>
      <TableCell align={'right'}>{`$${net}.00`}</TableCell>
      <TableCell align={'right'}>{`$${overhead}.00`}</TableCell>
      <TableCell align={'right'}>{`$${taxes}.00`}</TableCell>
      <TableCell align={'right'}>{`$${total}.00`}</TableCell>
    </TableRow>
  );
}

export default RevenueTableRow;
