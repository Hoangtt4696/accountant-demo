import { Helmet } from 'react-helmet';
import { Box, Container, Button } from '@material-ui/core';
import CustomerListResults from 'src/components/customer-c/CustomerListResults';
import CustomerListToolbar from 'src/components/customer-a/CustomerListToolbar';
import customers from 'src/__mocks__/customers';

const CustomerList = () => (
  <>
    <Helmet>
      <title>Customers | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar />
        <Box sx={{ textAlign: 'right', pt: 3 }}>
          <Button variant="contained" style={{ fontSize: 14 }}>PDF</Button>
          &nbsp;&nbsp;
          <Button variant="contained" style={{ fontSize: 14 }}>CSV</Button>
        </Box>
        <Box sx={{ pt: 3 }}>
          <CustomerListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

export default CustomerList;
