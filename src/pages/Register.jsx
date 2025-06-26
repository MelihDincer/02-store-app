import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import requests from "../api/apiClient";
import { useNavigate } from "react-router";

export default function RegisterPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function handleForm(data) {
    requests.account
      .register(data)
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((error) => console.log(error));
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
          Register
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
            {...register("email", {
              required: "email zorunlu alan",
              minLength: {
                value: 3,
                message: "email min. 3 karakter olmalıdır.",
              },
            })}
            label="Enter email"
            size="small"
            fullWidth
            required
            sx={{ mb: 2 }}
            error={!!errors.email}
            helperText={errors.email?.message}
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
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
