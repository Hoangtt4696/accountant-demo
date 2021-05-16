/* eslint-disable */

import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import Settings from 'src/components/Settings';

const SettingUI = () => (
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
            <Settings />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default SettingUI;
