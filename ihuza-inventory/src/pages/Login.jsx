import Input from "@components/Input";
import Button from "@components/Button";
import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormata] = useState({
    
    email: "",
    password: "",
    
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    console.log(event);
    setFormata((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));

    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formErrors = {};

    // VALIDATION

  
   
    if (!formData.email.includes("@")) {
      formErrors.email = "Invalid Email address";
    }
    if (!formData.password.length <= 8) {
      formErrors.password = "Passowrd must be at least 8 characters";
    }

 
    console.log("Errors that is being returned", formErrors);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      alert("Registration Successful!");
      setFormata({
       
        email: "",
        password: "",
        
      });
    }
  };
  return (
    <div className=" w-full px-10 py-12 flex flex-col gap-3">
      <span className=" w-full uppercase text-2xl font-semibold p-2 bg-primaryColor-800 text-white rounded-md">
        Ihuza Inventoru
      </span>

      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-3">
        
      
        <Input
          label={"Email"}
          type={"email"}
          value={formData.email}
          onChange={handleChange}
          placeholder={"email"}
          name={"email"}
          variant={errors.email ? "danger" : "default"}
        />
        {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
        <Input
          label={"Password"}
          type={"text"}
          onChange={handleChange}
          value={formData.password}
          placeholder={"***********"}
          name={"password"}
          variant={errors.password ? "danger" : "default"}
        />

        {errors.password && (
          <p className="text-sm text-red-600">{errors.password}</p>
        )}
      
        <Button label={"Log in"} type="submit" className="w-full" />
      </form>
    </div>
  );
};

export default LoginForm;
