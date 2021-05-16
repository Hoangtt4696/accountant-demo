/* eslint-disable */

import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import UserDetail from 'src/components/user-list-a/UserDetail';

const Account = (props) => (
  <>
    <Helmet>
      <title>Tài khoản</title>
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
            <UserDetail isDisabled breadcrumbs={props.breadcrumbs} type="user" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Account;
