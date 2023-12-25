import Table from 'react-bootstrap/Table';

function Tablecomponent() {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>SAVING FROM</th>
          <th>	SAVINGS	</th>
          <th>EXPECTED PAYMENT</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Application Fee</td>
          <td>USD $0</td>
          <td>Discount at time of application submission</td>
        </tr>
        <tr>
          <td>Dfavo Service Fees</td>
          <td>USD $150</td>
          <td>Discount 100% Dfavo Service Fees</td>
        </tr>
        <tr>
          <td>Dfavo Service Fees</td>
          <td>USD $150</td>
          <td>Discount 100% Dfavo Service Fees</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Tablecomponent;