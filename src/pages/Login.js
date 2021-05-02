import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Link,
  // TextField,
  Typography
} from '@material-ui/core';

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Đăng nhập</title>
      </Helmet>
      <Box
        sx={{
          // backgroundColor: 'background.default',
          backgroundColor: '#F4F6F8',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Container maxWidth="sm" style={{ display: 'flex', maxWidth: '900px' }}>
          <div
            style={{
              backgroundImage: "url('/static/images/login.png')",
              paddingLeft: 'calc(100% - 370px)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat'
            }}
          />
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={() => {
              navigate('/app/dashboard', { replace: true });
            }}
          >
            {({
              // errors,
              // handleBlur,
              // handleChange,
              handleSubmit,
              isSubmitting
              // touched,
              // values
            }) => (
              <form onSubmit={handleSubmit} style={{ minWidth: 370 }}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                    style={{ color: '#4460F1' }}
                  >
                    Đăng nhâp
                  </Typography>
                  <Typography
                    variant="textPrimary"
                    component="h4"
                    style={{ marginTop: 10, color: '#7D8084' }}
                  >
                    Vui lòng hãy nhập những thông tin sau
                  </Typography>
                </Box>
                <input
                  placeholder="Nhập số điện thoại hoặc email"
                  style={{
                    width: '100%',
                    padding: '18px 25px',
                    borderRadius: '12px',
                    border: 'none',
                    backgroundColor: '#E9EFF6',
                    marginBottom: 20,
                    outline: 'none'
                  }}
                />
                <input
                  placeholder="Mật khẩu"
                  type="password"
                  style={{
                    width: '100%',
                    padding: '18px 25px',
                    borderRadius: '12px',
                    border: 'none',
                    backgroundColor: '#E9EFF6',
                    marginBottom: 5,
                    outline: 'none'
                  }}
                />
                <Typography color="textSecondary" variant="body1" style={{ textAlign: 'right' }}>
                  <Link component={RouterLink} to="/register" variant="h6">
                    Quên mật khẩu
                  </Link>
                </Typography>
                {/* <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  size="small"
                  variant="outlined"
                  style={{ backgroundColor: '#E9EFF6' }}
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Mật khẩu"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  size="small"
                  type="password"
                  value={values.password}
                  variant="outlined"
                  style={{ backgroundColor: '#E9EFF6' }}
                /> */}
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    style={{
                      borderRadius: 8,
                      marginTop: 30
                    }}
                  >
                    Đăng nhập
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
        <Typography
          variant="textPrimary"
          component="h3"
          style={{ color: '#6a6a6a', margin: '60px 0' }}
        >
          Cảm ơn bạn đã chọn chúng tôi. Nếu bạn chưa có tài khoản thì đăng ký
          &nbsp;
          <Link component={RouterLink} to="/register" variant="h6" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
            Tại đây
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default Login;
