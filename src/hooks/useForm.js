import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const useForm = (initialFrom, validateFrom) => {
  const ref = useRef();

  const [form, setForm] = useState(initialFrom);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateFrom(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateFrom(form));

    if (!form.name.trim() === false && Object.keys(errors).length === 0) {
      emailjs
        .sendForm(
          "service_fbq2y5l",
          "template_89zgp55",
          ref.current,
          "gFzjh6sSIcekGLOu7"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSuccess(true);
          },
          (error) => {
            console.log(error.text);
            setSuccess(false);
          }
        );

      setForm(initialFrom);
    } else {
      return;
    }
  };

  return {
    ref,
    form,
    errors,
    success,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
