/* eslint-disable */

import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import ResourceDetail from 'src/components/resource-a/ResourceDetail';

const Account = (props) => (
  <>
    <Helmet>
      <title>Thông tin nguyên liệu</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ResourceDetail />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Account;
