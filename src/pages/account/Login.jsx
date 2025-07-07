import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./accountSlice";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.account);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function handleForm(data) {
    dispatch(loginUser(data));
  }
  // const [username, setUsername] = useState("melihdincer");
  // const [password, setPassword] = useState("123456");

  //Klasik Yöntem Start
  // const [values, setValues] = useState({
  //   username: "",
  //   password: "",
  // });

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(values);
  // }

  // function handleInputChange(e) {
  //   const { name, value } = e.target;
  //   setValues({ ...values, [name]: value });
  // }
  //Klasik Yöntem Finish

  return (
    <Container maxWidth="xs">
      <Paper sx={{ padding: 2 }} elevation={3}>
        <Avatar sx={{ mx: "auto", mb: 2, color: "primary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          sx={{ textAlign: "center", mb: 2 }}
        >
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(handleForm)}
          noValidate
          sx={{ mb: 2 }}
        >
          <TextField
            {...register("username", {
              required: "username zorunlu alan",
              minLength: {
                value: 3,
                message: "username min. 3 karakter olmalıdır.",
              },
            })}
            //value={values.username}
            //onChange={(e) => setUsername(e.target.value)}
            //onChange={handleInputChange}
            name="username"
            label="Enter username"
            size="small"
            fullWidth
            required
            autoFocus
            sx={{ mb: 2 }}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <TextField
            {...register("password", {
              required: "password zorunlu alan",
              minLength: {
                value: 6,
                message: "password min. 6 karakter olmalıdır.",
              },
            })}
            //value={values.password}
            //onChange={handleInputChange}
            //name="password"
            type="password"
            label="Enter password"
            size="small"
            fullWidth
            required
            sx={{ mb: 2 }}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            color="primary"
            disabled={!isValid}
          >
            {status === "pending" ? <CircularProgress size="25px" /> : "Submit"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
