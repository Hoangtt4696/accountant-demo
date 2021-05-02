import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  // Checkbox,
  Container,
  FormHelperText,
  // Link,
  // TextField,
  Typography
} from '@material-ui/core';

const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Đăng ký</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
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
              backgroundImage: "url('/static/images/register.png')",
              paddingLeft: '50%',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat'
            }}
          />
          <Formik
            initialValues={{
              email: '',
              firstName: '',
              lastName: '',
              password: '',
              policy: false
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
              firstName: Yup.string()
                .max(255)
                .required('First name is required'),
              lastName: Yup.string().max(255).required('Last name is required'),
              password: Yup.string().max(255).required('password is required'),
              policy: Yup.boolean().oneOf([true], 'This field must be checked')
            })}
            onSubmit={() => {
              navigate('/app/dashboard', { replace: true });
            }}
          >
            {({
              errors,
              // handleBlur,
              // handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              // values
            }) => (
              <form onSubmit={handleSubmit} style={{ minWidth: 370 }}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                    style={{ color: '#4460F1' }}
                  >
                    Tạo tài khoản
                  </Typography>
                  <Typography
                    variant="textPrimary"
                    component="h4"
                    style={{ marginTop: 10, color: '#7D8084' }}
                  >
                    Vui lòng hãy nhập những thông tin sau
                  </Typography>
                </Box>
                {/* <TextField
                  error={Boolean(touched.firstName && errors.firstName)}
                  fullWidth
                  helperText={touched.firstName && errors.firstName}
                  label="Họ"
                  margin="normal"
                  name="firstName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.lastName && errors.lastName)}
                  fullWidth
                  helperText={touched.lastName && errors.lastName}
                  label="Tên"
                  margin="normal"
                  name="lastName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  variant="outlined"
                />
                <TextField
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
                  variant="outlined"
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
                  type="password"
                  value={values.password}
                  variant="outlined"
                /> */}
                <input
                  placeholder="Tên nha khoa"
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
                  placeholder="Địa chỉ"
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
                  placeholder="Số điện thoại"
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
                  placeholder="Email"
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
                    marginBottom: 20,
                    outline: 'none'
                  }}
                />
                <input
                  placeholder="Nhập lại mật khẩu"
                  type="password"
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
                {/* <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    ml: -1
                  }}
                >
                  <Checkbox
                    checked={values.policy}
                    name="policy"
                    onChange={handleChange}
                  />
                  <Typography color="textSecondary" variant="body1">
                    Đồng ý các
                    &nbsp;
                    <Link
                      color="primary"
                      component={RouterLink}
                      to="#"
                      underline="always"
                      variant="h6"
                    >
                      điều khoản và điều kiện
                    </Link>
                  </Typography>
                </Box> */}
                {Boolean(touched.policy && errors.policy) && (
                  <FormHelperText error>{errors.policy}</FormHelperText>
                )}
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    style={{ maxWidth: 250, borderRadius: 25, padding: 15 }}
                  >
                    Tạo tài khoản
                  </Button>
                </Box>
                {/* <Typography color="textSecondary" variant="body1">
                  Đã có tài khoản?
                  &nbsp;
                  <Link component={RouterLink} to="/login" variant="h6">
                    Đăng nhâp
                  </Link>
                </Typography> */}
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Register;
