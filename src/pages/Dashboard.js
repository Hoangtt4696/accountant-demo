/* eslint-disable */

import { Helmet } from 'react-helmet';
import { Box, Container, Grid, List, ListItem, Divider, Breadcrumbs, Typography } from '@material-ui/core';
import Budget from 'src/components/dashboard//Budget';
import TasksProgress from 'src/components/dashboard//TasksProgress';
import TotalCustomers from 'src/components/dashboard//TotalCustomers';
import TotalProfit from 'src/components/dashboard//TotalProfit';
import CompleteOrder from 'src/components/dashboard//CompleteOrder';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import customers from 'src/__mocks__/customers';
import Sales from 'src/components/dashboard//Sales';

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
            <Grid container spacing={3}>
              <Grid item xs={5}>
                <Box
                  sx={{
                    backgroundColor: '#F4F6F8',
                    boxShadow:
                      '0 0 1px 0 rgb(0 0 0 / 30%), 0 3px 20px -5px rgb(0 0 0 / 20%)',
                    borderRadius: '10px',
                    transition:
                      'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    overflow: 'hidden',
                  }}
                >
                  <Sales />
                </Box>
              </Grid>
              <Grid item xs={3.5}>
                <Box
                  sx={{
                    backgroundColor: '#F4F6F8',
                    boxShadow:
                      '0 0 1px 0 rgb(0 0 0 / 30%), 0 3px 20px -5px rgb(0 0 0 / 20%)',
                    borderRadius: '10px',
                    transition:
                      'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    overflow: 'hidden',
                  }}
                >
                  <Box>
                    <p
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#fff',
                        padding: 15
                      }}
                    >
                      <SupervisorAccount />
                      &nbsp;&nbsp;
                      <span style={{ fontSize: 16, fontWeight: 'bold' }}>Top 10 khách hàng</span>
                    </p>
                    <List style={{ paddingBottom: 30 }}>
                      <ListItem style={{ display: 'flex', fontSize: 14 }}>
                        <Box sx={{ flexBasis: '20%', fontWeight: 'bold' }}>STT</Box>
                        <Box sx={{ flexBasis: '60%', fontWeight: 'bold' }}>Tên nha khoa</Box>
                        <Box sx={{ flexBasis: '20%', fontWeight: 'bold' }}>Số lượng</Box>
                      </ListItem>
                      <Divider style={{ margin: '5px 0' }} />
                      {customers.map((item, idx) => (
                        <>
                          <ListItem style={{ display: 'flex', fontSize: 14 }}>
                            <Box sx={{ flexBasis: '20%' }}>{idx + 1}</Box>
                            <Box sx={{ flexBasis: '60%' }}>{item.dentistry}</Box>
                            <Box sx={{ flexBasis: '20%', textAlign: 'center' }}>{item.count}</Box>
                          </ListItem>
                          <Divider style={{ margin: '5px 0' }} />
                        </>
                      ))}
                    </List>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={3.5}>
              <Box
                  sx={{
                    backgroundColor: '#F4F6F8',
                    boxShadow:
                      '0 0 1px 0 rgb(0 0 0 / 30%), 0 3px 20px -5px rgb(0 0 0 / 20%)',
                    borderRadius: '10px',
                    transition:
                      'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    overflow: 'hidden',
                  }}
                >
                  <Box>
                    <p
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#fff',
                        padding: 15
                      }}
                    >
                      <SupervisorAccount />
                      &nbsp;&nbsp;
                      <span style={{ fontSize: 16, fontWeight: 'bold' }}>Top 10 nhân viên</span>
                    </p>
                    <List style={{ paddingBottom: 30 }}>
                      <ListItem style={{ display: 'flex', fontSize: 14 }}>
                        <Box sx={{ flexBasis: '20%', fontWeight: 'bold' }}>STT</Box>
                        <Box sx={{ flexBasis: '60%', fontWeight: 'bold' }}>Tên nhân viên</Box>
                        <Box sx={{ flexBasis: '20%', fontWeight: 'bold' }}>Số lượng</Box>
                      </ListItem>
                      <Divider style={{ margin: '5px 0' }} />
                      {customers.map((item, idx) => (
                        <>
                          <ListItem style={{ display: 'flex', fontSize: 14 }}>
                            <Box sx={{ flexBasis: '20%' }}>{idx + 1}</Box>
                            <Box sx={{ flexBasis: '60%' }}>{item.employee}</Box>
                            <Box sx={{ flexBasis: '20%', textAlign: 'center' }}>{item.count}</Box>
                          </ListItem>
                          <Divider style={{ margin: '5px 0' }} />
                        </>
                      ))}
                    </List>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
