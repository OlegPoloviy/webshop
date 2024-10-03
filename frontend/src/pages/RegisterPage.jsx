import {Form, Field, Formik,ErrorMessage} from "formik"
import {initialVal,ENUM_FORM} from "../constants/formContsants.jsx";
import * as yup from "yup";
import Google from "../media/Vector.png"
import "../styles/form.scss";

const validationSchema = yup.object({
    [ENUM_FORM.NAME]: yup.string().required("Enter your name please").min(1,"Too short").max(255,"Who are you?!"),
    [ENUM_FORM.SURNAME]: yup.string().required("Enter your surname too").min(1,"Too short"),
    [ENUM_FORM.EMAIL]: yup.string().email("Enter a valid email").min(6,"Email can`t be so short").max(100,"Too long").required("You must enter email"),
    [ENUM_FORM.PASSWORD]: yup.string().min(6,"Too short password").max(200,"Too long password").required("Enter your password"),
    [ENUM_FORM.REPASS]: yup.string().oneOf([yup.ref(ENUM_FORM.PASSWORD),null],"Passwords must match!").required("Please reenter password")
})

export function RegisterPage(){

    function sendData(data){
        fetch("http://localhost:3020/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"  // Вказуємо, що відправляємо JSON
            },
            body: JSON.stringify({
                data: data  // Перетворюємо об'єкт `data` в JSON-рядок
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();  // Перетворюємо відповідь з JSON-формату
            })
            .then(data => {
                console.log("Success:", data);  // Обробка успішної відповіді
            })
            .catch(error => {
                console.error("Error:", error);  // Обробка помилки
            });
    }

    return(
        <>
            <div className={"container"}>
                <div className={'image-container'}>
                </div>
                <Formik initialValues={initialVal} onSubmit={sendData} validationSchema={validationSchema}>
                    <Form className={"form-register"}>
                        <h2>Create an account</h2>
                        <div>
                            <label htmlFor={ENUM_FORM.NAME}>Your name</label>
                            <Field type={'text'} name={ENUM_FORM.NAME} placeholder={'Petro etc.'} className={"input-field"}/>
                            <ErrorMessage name={ENUM_FORM.NAME} component={"div"} className={"error"}/>
                        </div>
                        <div>
                            <label htmlFor={ENUM_FORM.SURNAME}>Your surname</label>
                            <Field type={'text'} name={ENUM_FORM.SURNAME} placeholder={'Ivanenko etc.'}  className={"input-field"}/>
                            <ErrorMessage name={ENUM_FORM.SURNAME} component={"div"} className={"error"}/>
                        </div>
                        <div>
                            <label htmlFor={ENUM_FORM.EMAIL}>Enter email</label>
                            <Field type={'email'} name={ENUM_FORM.EMAIL} placeholder={'example@gmail'}  className={"input-field"}/>
                            <ErrorMessage name={ENUM_FORM.EMAIL} component={"div"} className={"error"}/>
                        </div>
                        <div>
                            <label htmlFor={ENUM_FORM.PASSWORD}>Enter your password</label>
                            <Field type={ENUM_FORM.PASSWORD} name={"password"}  className={"input-field"}/>
                            <ErrorMessage name={ENUM_FORM.PASSWORD} component={'div'} className={"error"}/>
                        </div>
                        <div>
                            <label htmlFor="repass">Repeat your password</label>
                            <Field type={'password'} name={'repass'}  className={"input-field"}/>
                            <ErrorMessage name={ENUM_FORM.REPASS } component={"div"} className={"error"}/>
                        </div>
                        <button type={'submit'} className={"submit-button"}>Register</button>
                        <button className={'google-button'}><img src={Google} alt=""/> Sign up with Google</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}