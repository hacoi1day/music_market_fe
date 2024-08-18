import { Button, Datepicker, Label, TextInput } from "flowbite-react";
import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import { useForm } from "@tanstack/react-form";
import { RegisterData, register } from "../../apis/auth";
import { useNavigate } from "react-router-dom";

const RegisterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const RegisterForm = styled.div`
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

const RegisterPage = () => {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      dob: "",
      phone: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      const res = await register(value as RegisterData);
      if (res) {
        navigate("/auth/login");
      }
      return null;
    },
  });

  return (
    <RegisterWrapper>
      <RegisterForm>
        <img src={logo} alt="Logo" />
        <h1>Đăng ký</h1>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <form.Field
            name="name"
            children={(field) => (
              <div>
                <div className="mb-2 block">
                  <Label htmlFor={field.name} value="Tên" />
                </div>
                <TextInput
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Tên"
                  required
                />
              </div>
            )}
          />
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
            name="dob"
            children={(field) => (
              <div>
                <div className="mb-2 block">
                  <Label htmlFor={field.name} value="Ngày sinh" />
                </div>
                <TextInput
                  type="date"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Ngày sinh"
                  required
                />
              </div>
            )}
          />
          <form.Field
            name="phone"
            children={(field) => (
              <div>
                <div className="mb-2 block">
                  <Label htmlFor={field.name} value="Số điện thoại" />
                </div>
                <TextInput
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Số điện thoại"
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
          <Button type="submit">Đăng ký</Button>
        </form>
        <div className="register-box">
          <p>
            Bạn đã tài khoản? <a href="/auth/login">Đăng nhập</a>
          </p>
        </div>
      </RegisterForm>
    </RegisterWrapper>
  );
};

export default RegisterPage;
