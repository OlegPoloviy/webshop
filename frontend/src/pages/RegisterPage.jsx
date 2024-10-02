import {Form, Field, Formik,ErrorMessage} from "formik"
import {initialVal,ENUM_FORM} from "../constants/formContsants.jsx";
import * as yup from "yup";

const validationSchema = yup.object({
    [ENUM_FORM.NAME]: yup.string().required("Enter your name please").min(1,"Too short").max(255,"Who are you?!"),
    [ENUM_FORM.SURNAME]: yup.string().required("Enter your surname too").min(1,"Too short"),
    [ENUM_FORM.EMAIL]: yup.string().email("Enter a valid email").min(6,"Email can`t be so short").max(100,"Too long").required("You must enter email"),
    [ENUM_FORM.PASSWORD]: yup.string().min(6,"Too short password").max(200,"Too long password").required("Enter your password"),
    [ENUM_FORM.REPASS]: yup.string().oneOf([yup.ref(ENUM_FORM.PASSWORD),null],"Passwords must match!").required("Please reenter password")
})

export function RegisterPage(){

    function sendData(data){
        console.log(data)
    }

    return(
        <>
            <h2>Register</h2>
            <Formik initialValues={initialVal} onSubmit={sendData} validationSchema={validationSchema}>
                <Form>
                    <div>
                        <label htmlFor={ENUM_FORM.NAME}>Your name</label>
                        <Field type={'text'} name={ENUM_FORM.NAME} placeholder={'Petro etc.'}/>
                        <ErrorMessage name={ENUM_FORM.NAME}/>
                    </div>
                    <div>
                        <label htmlFor={ENUM_FORM.SURNAME}>Your surname</label>
                        <Field type={'text'} name={ENUM_FORM.SURNAME} placeholder={'Ivanenko etc.'}/>
                        <ErrorMessage name={ENUM_FORM.SURNAME}/>
                    </div>
                    <div>
                        <label htmlFor={ENUM_FORM.EMAIL}>Enter email</label>
                        <Field type={'email'} name={ENUM_FORM.EMAIL} placeholder={'example@gmail'}/>
                        <ErrorMessage name={ENUM_FORM.EMAIL}/>
                    </div>
                    <div>
                        <label htmlFor={ENUM_FORM.PASSWORD}>Enter your password</label>
                        <Field type={ENUM_FORM.PASSWORD} name={"password"}/>
                        <ErrorMessage name={ENUM_FORM.PASSWORD}/>
                    </div>
                    <div>
                        <label htmlFor="repass">Repeat your password</label>
                        <Field type={'password'} name={'repass'}/>
                        <ErrorMessage name={ENUM_FORM.REPASS}/>
                    </div>
                    <button type={'submit'}>Register</button>
                </Form>
            </Formik>
        </>
    )
}