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

export default function LoginPage() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: "melihdincer",
      password: "123456",
    },
  });

  function handleForm(data) {
    console.log(data);
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
          sx={{ mb: 2 }}
        >
          <TextField
            {...register("username")}
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
          />
          <TextField
            {...register("password")}
            //value={values.password}
            //onChange={handleInputChange}
            //name="password"
            type="password"
            label="Enter password"
            size="small"
            fullWidth
            required
            autoFocus
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            color="primary"
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
