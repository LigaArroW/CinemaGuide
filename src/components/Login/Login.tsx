import { FC, useRef, useState } from 'react';
import styles from './Login.module.scss';
import { EIcon, Icon } from '../Icon';
import classNames from 'classnames';
import { useWidth } from '../../Store/useWidth';

import { useRegistration } from '../../assets/hook/useRegistration';
import { Field, Form, Formik, FormikValues } from 'formik';
import { toFormikValidate } from 'zod-formik-adapter';
import { useAurization } from '../../assets/hook/useAutorization';
import { validateAuth, validateRegister } from '../../util/validation';
import ReactDOM from 'react-dom';
import { useGetProfile } from '../../assets/hook/useGetProfile';
import { useAuth } from '../../Store/useModal';
import { createName } from '../../util/createName';
import Mail from '../../assets/mail.svg?react'


interface LoginProps {
  // close: () => void
}

export const Login: FC<LoginProps> = () => {
  const width = useWidth(state => state.width);
  const { isOpen, setOpen } = useAuth()
  const [registation, setRegistration] = useState(false);
  const [onRegister, setOnRegister] = useState(false);
  const [userExist, setUserExist] = useState(false);
  const [failAuth, setFailAuth] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const mutationRegistration = useRegistration()
  const mutationAuth = useAurization()
  const profile = useGetProfile()

  const handleClickOutside = (event: React.MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {

      setOpen(false);
    }
  };


  const handleSubmit = (values: FormikValues) => {
    if (registation) {
      const field = {
        name: createName(values.name),
        surname: createName(values.surname),
        email: values.email,
        password: values.password
      }
      mutationRegistration.mutate(field, {
        onSuccess() {
          setOnRegister(true);
        },
        onError() {
          setUserExist(true);
        },
      })
    } else {
      const field = {
        email: values.email,
        password: values.password
      }
      mutationAuth.mutate(field, {
        onSuccess() {
          // close();
          setOpen(false);
          localStorage.setItem('auth', 'true');
          profile.refetch()
        },
        onError() {
          setFailAuth(true);
        },
      })
    }

  };

  if (typeof window === "undefined" || !window?.document?.createElement) {
    return null;

  }
  const node = document.querySelector("#modal-root");

  if (!node) return null;

  if (!isOpen) return null

  return (
    ReactDOM.createPortal(
      <div className={styles.login} onClick={handleClickOutside} data-testid="closeModal">
        <div
          className={classNames(styles.loginContainer)}
          style={{ width: `${width <= 660 ? (width - 40 + 'px') : (564 + 'px')}` }}
          ref={ref}
          onClick={(e) => e.stopPropagation()}
        >
          <Icon name={EIcon.CloseD} prop={styles.close} onClick={() => setOpen(false)} />

          <Formik
            initialValues={
              registation
                ?
                {
                  email: '',
                  password: '',
                  rePassword: '',
                  name: '',
                  surname: '',
                }
                :
                {
                  email: '',
                  password: '',
                }
            }

            validate={toFormikValidate(registation ? validateRegister : validateAuth)}

            onSubmit={handleSubmit}

          >

            {({ errors, touched, isValid }) => (
              <Form
                className={styles.form}
              >
                {userExist && <p className={styles.userExist}>Пользователь с такой почтой уже существует</p>}
                {failAuth && <p className={styles.userExist}>Неверный логин или пароль</p>}
                <Icon name={EIcon.Logo} prop={styles.logo} />
                {
                  onRegister &&
                  <>
                    <h2 className={styles.title}>Регистрация завершена</h2>
                    <p className={styles.registerText}>Используйте вашу электронную почту для входа</p>
                    <button className={classNames(styles.btn, 'primaryBtn')} onClick={() => { setRegistration(false), setOnRegister(false) }}>Войти</button>
                  </>
                }
                {!onRegister &&
                  <>
                    {!registation
                      ?
                      <ul className={styles.list}>
                        <li className={styles.item}>
                            {/* <Icon name={EIcon.Mail} /> */}
                            <Mail />
                          <Field type="mail" name="email" placeholder="Электронная почта" className={`${errors.email && touched.email ? styles.error : ''}`}

                          />
                        </li>
                        <li className={styles.item} data-testid="item">
                          <Icon name={EIcon.KeyN} />
                          <Field type="password" name="password" placeholder="Пароль" className={`${errors.password && touched.password ? styles.error : ''}`} />
                        </li>
                      </ul>
                      :
                      <>
                        <h2 className={styles.title}>Регистрация</h2>
                        <ul className={styles.list}>
                          <li className={styles.item} >
                            <Icon name={EIcon.Mail} />
                            <Field type="mail" name="email" placeholder="Электронная почта" className={`${errors.email && touched.email ? styles.error : ''}`} />
                          </li>
                          <li className={styles.item}>
                            <Icon name={EIcon.UserD} />
                            <Field name="name" placeholder="Имя" className={`${errors.name && touched.name ? styles.error : ''}`} />
                            {errors.name && touched.name && <div className={styles.error}>{errors.name}</div>}
                          </li>
                          <li className={styles.item}>
                            <Icon name={EIcon.UserD} />
                            <Field name="surname" placeholder="Фамилия" className={`${errors.surname && touched.surname ? styles.error : ''}`} />
                            {errors.surname && touched.surname && <div className={styles.error}>{errors.surname}</div>}
                          </li>
                          <li className={styles.item}>
                            <Icon name={EIcon.KeyN} />
                            <Field type="password" name="password" placeholder="Пароль" className={`${errors.password && touched.password ? styles.error : ''}`} />
                          </li>
                          <li className={styles.item}>
                            <Icon name={EIcon.KeyN} />
                            <Field type="password" name="rePassword" placeholder="Подтвердите пароль" className={`${errors.rePassword && touched.rePassword ? styles.error : ''}`} />
                          </li>
                        </ul>
                      </>
                    }
                    <button type='submit' className={classNames(styles.btn, 'primaryBtn')} disabled={!isValid} >
                      {registation ? 'Создать аккаунт' : 'Войти'}
                    </button>
                    <button type='button' className={classNames(styles.btn, styles.secondary)} onClick={() => { setRegistration(!registation), setUserExist(false), setFailAuth(false) }}>
                      {registation ? 'У меня есть пароль' : 'Регистрация'}
                    </button>
                  </>
                }

              </Form>
            )}

          </Formik>

        </div>
      </div >


      , node)



  )
};


