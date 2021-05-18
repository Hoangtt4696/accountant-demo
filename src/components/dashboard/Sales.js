/* eslint-disable */

import { Bar } from 'react-chartjs-2';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  colors
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Sales = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        // backgroundColor: colors.indigo[500],
        backgroundColor: '#424242',
        data: [18, 5, 19, 27, 29, 19, 20, 10, 29, 15, 20, 25],
        label: 'Năm ngoái'
      },
      {
        backgroundColor: colors.grey[200],
        data: [11, 20, 12, 29, 30, 25, 13, 12, 20, 10, 15, 29],
        label: 'Năm nay'
      }
    ],
    labels: [
      'Tháng 1',
      'Tháng 2',
      'Tháng 3',
      'Tháng 4',
      'Tháng 5',
      'Tháng 6',
      'Tháng 7',
      'Tháng 8',
      'Tháng 9',
      'Tháng 10',
      'Tháng 11',
      'Tháng 12'
    ]
  };

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          barThickness: 12,
          maxBarThickness: 10,
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          ticks: {
            fontColor: theme.palette.text.secondary
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider
          }
        }
      ]
    },
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  return (
    <Card {...props}>
      <CardHeader
        action={
          <Button
            endIcon={<ArrowDropDownIcon />}
            size="small"
            variant="text"
            style={{ textTransform: 'none' }}
          >
            Tháng
          </Button>
        }
        title="Doanh thu"
      />
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '10px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'silver',
            padding: '10px 20px',
            borderRadius: '10px',
          }}
        >
          <span style={{ fontWeight: 'bold', fontSize: 12 }}>Doanh thu năm ngoái</span>
          <span style={{ fontWeight: 'bold', marginTop: 10, marginLeft: 5 }}>100.000.000 đ</span>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#424242',
            padding: '10px 20px',
            borderRadius: '10px',
            color: 'white',
            marginLeft: '10px',
          }}
        >
          <span style={{ fontWeight: 'bold', fontSize: 12 }}>Doanh thu hiện tại</span>
          <span style={{ fontWeight: 'bold', marginTop: 10, marginLeft: 5 }}>300.000.000 đ</span>
        </Box>
      </Box>
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: 'relative'
          }}
        >
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Sales;
