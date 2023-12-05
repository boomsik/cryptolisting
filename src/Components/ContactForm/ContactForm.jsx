import { Formik, Form, Field, ErrorMessage } from "formik";
import { React } from "react";

const value = {
    email: "",
    password: "",
};

export const ContactForm = () => {
    const handleSubmit = (values, action) => {
        console.log(values);
        console.log(action);
    };
    return (
        <Formik initialValues={value} onSubmit={handleSubmit}>
            <Form>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;
