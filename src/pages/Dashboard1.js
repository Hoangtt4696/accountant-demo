/* eslint-disable */

import { Helmet } from 'react-helmet';
import { Box, Container, Grid, List, ListItem, Divider, Breadcrumbs, Typography } from '@material-ui/core';
import Budget from 'src/components/dashboard//Budget';
import TasksProgress from 'src/components/dashboard//TasksProgress';
import TotalCustomers from 'src/components/dashboard//TotalCustomers';
import TotalProfit from 'src/components/dashboard//TotalProfit';
import CompleteOrder from 'src/components/dashboard//CompleteOrder';
import LastestOrders from 'src/components/dashboard//LatestOrders';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Demo</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Breadcrumbs aria-label="breadcrumb" style={{ fontSize: 14, marginBottom: 40  }}>
          <Typography color="text.primary" style={{ fontSize: 14 }}>Trang chủ</Typography>
        </Breadcrumbs>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box
              sx={{
                backgroundColor: '#F4F6F8',
                p: 2,
                boxShadow:
                  '0 0 1px 0 rgb(0 0 0 / 30%), 0 3px 20px -5px rgb(0 0 0 / 20%)',
                borderRadius: '10px',
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={2.5}>
                  <Budget />
                </Grid>
                <Grid item xs={2.5}>
                  <TotalCustomers />
                </Grid>
                <Grid item xs={2}>
                  <TasksProgress />
                </Grid>
                <Grid item xs={2}>
                  <TotalProfit sx={{ height: '100%' }} />
                </Grid>
                <Grid item xs={3}>
                  <CompleteOrder />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <LastestOrders />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
