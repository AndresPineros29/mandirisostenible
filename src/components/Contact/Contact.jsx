// Import hook useForm
import { useForm } from "../../hooks/useForm";

// Animation
import { motion as m } from "framer-motion";
import { transition1 } from "../../transitions";

const initialFrom = {
  name: "",
  lastname: "",
  email: "",
  message: "",
};

const validationsFrom = (form) => {
  let errors = {};
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!form.name.trim()) {
    errors.name = "Escriba su nombre";
  }

  if (!form.email.trim()) {
    errors.email = "El email es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "Use un Email valido";
  }

  if (!form.message.trim()) {
    errors.message = "El campo de mensaje esta vacio";
  }

  return errors;
};
const Contact = () => {
  const { ref, form, errors, success, handleChange, handleBlur, handleSubmit } =
    useForm(initialFrom, validationsFrom);

  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="mt-20 lg:py-12 xl:mt-36 flex flex-col lg:flex-row justify-between bg-contact-image bg-center bg-cover "
    >
      <section className="w-full p-5 md:p-10 flex justify-center items-center">
        <ul className="grid gap-5 md:gap-10 lg:h-full md:text-3xl lg:text-2xl text-white items-center">
          <li>
            <b>Numero:</b>{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://api.whatsapp.com/send?phone=573118780706"
            >
              +57 311 8780706
            </a>
          </li>
          <li>
            <b>Email:</b> e.porras@mandirisostenible.com
          </li>
          <li>
            <b>instagram:</b>{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/mandirisostenible/"
            >
              @mandirisostenible
            </a>
          </li>
          <li>
            <b>Faceboock:</b>{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/people/Mandiri-Sostenible-SAS/100094486896691/"
            >
              Mandiri Sostenible S.A.S
            </a>
          </li>
        </ul>
      </section>

      <section className="w-full p-5 lg:p-10">
        <form
          className="grid gap-5 font-bold text-lg lg:text-2xl text-primary-green"
          ref={ref}
          onSubmit={handleSubmit}
        >
          <label className="text-white">Nombre y Apellido</label>
          <input
            className="p-1 lg:p-3 border-4 border-primary-green rounded-xl bg-green-200"
            type="text"
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.name}
          />
          <label className="text-white">Email</label>
          <input
            className="p-1 lg:p-3 border-4 border-primary-green rounded-lg bg-green-200"
            type="email"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.email}
          />
          <label className="text-white">Mensaje</label>
          <textarea
            className="p-1 lg:p-3 border-4 border-primary-green rounded-lg bg-green-200"
            name="message"
            cols="10"
            rows="5"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.message}
          />
          {/* type=submit value=sent */}
          <input
            className="py-3 rounded-lg text-center text-white bg-primary-green cursor-pointer"
            type="submit"
            value="Enviar"
          />
        </form>
        <div className="text-lime-500 font-medium text-sm my-3 md:text-lg xl:text-xl">
          <ul className="text-red-400">
            {errors.name && <li>{errors.name}</li>}
            {errors.email && <li>{errors.email}</li>}
            {errors.message && <li>{errors.message}</li>}
          </ul>
          {success && "Your correo ya ha sido enviado, muchas gracias"}
        </div>
      </section>
    </m.main>
  );
};

export default Contact;
