import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "@tanstack/react-form";
import { login } from "../../apis/auth";

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginForm = styled.div`
  width: 426px;

  img {
    margin: 0px auto;
    width: 108px;
    height: auto;
  }

  h1 {
    margin: 10px;
    text-align: center;
    font-size: 32px;
    font-family: "Public Sans", sans-serif;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: 0%;
  }

  .forgot-password {
    text-align: right;
  }

  a {
    color: #0f60ff;
    font-weight: bold;
  }

  .register-box {
    margin: 40px;
    text-align: center;
  }
`;

const LoginPage = () => {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
    onSubmit: async ({ value }) => {
      const res = await login(value);
      if (res) {
        navigate("/admin");
      }
    },
  });

  return (
    <LoginWrapper>
      <LoginForm>
        <img src={logo} alt="Logo" />
        <h1>Đăng nhập</h1>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <form.Field
            name="email"
            children={(field) => (
              <div>
                <div className="mb-2 block">
                  <Label htmlFor={field.name} value="Email" />
                </div>
                <TextInput
                  id={field.name}
                  name={field.name}
                  type="email"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Email"
                  required
                />
              </div>
            )}
          />
          <form.Field
            name="password"
            children={(field) => (
              <div>
                <div className="mb-2 block">
                  <Label htmlFor={field.name} value="Mật khẩu" />
                </div>
                <TextInput
                  type="password"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Mật khẩu"
                  required
                />
              </div>
            )}
          />
          <div className="columns-2">
            <form.Field
              name="remember"
              children={(field) => (
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="remember"
                    checked={field.state.value === true}
                    onClick={() => field.handleChange(!field.state.value)}
                  />
                  <Label htmlFor="remember">Ghi nhớ đăng nhập</Label>
                </div>
              )}
            />
            <div className="flex items-center gap-2"></div>
            <div className="forgot-password">
              <a href="">Quên mật khẩu?</a>
            </div>
          </div>
          <Button type="submit">Đăng nhập</Button>
        </form>
        <div className="register-box">
          <p>
            Bạn chưa có tài khoản? <a href="/auth/register">Đăng ký</a>
          </p>
        </div>
      </LoginForm>
    </LoginWrapper>
  );
};

export default LoginPage;
