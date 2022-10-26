/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LocalStorageUtils,{LOCAL_STORAGE_KEY} from "@utils/browser/LocalStorage";
import GoogleLogin from "react-google-login";
import { message,Form, Input, Button } from "antd";
import axioxApi from "./api/axiosApi";
const Login: React.FC = (props : any) => {
    const {history}=props;
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const [mode,setMode]= useState(true);
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    const changeMode=()=>{
      setMode(!mode);
    };
    const handleSubmit = async () => {
        history.push("/admin/dashboard");
        // try {
        //     setLoading(true);
        //     const response = await form.validateFields();
        //     const payload={
        //         email:response.email,
        //         password:response.password,
        //     };
        //     const res=await axioxApi.signIn(payload);
        //     console.log(res);
        //     if(res.status==="success"){
        //         LocalStorageUtils.setItem(LOCAL_STORAGE_KEY.JWT,res.token);
        //         LocalStorageUtils.setItem(LOCAL_STORAGE_KEY.EMAIL,response.email);
        //         if(res.data.user.role === "admin"){
        //           history.push("/admin");
        //         }
        //     }
        //     // gọi hàm để save profile vào redux
        // } catch (error) {
        //   message.error("Thông tin đăng nhập không chính xác!");
        // } finally {
        //   setLoading(false);
        // }
    };
    function handleRedirect(token, email, nickname) {
        // if (token) {
        //   FPTUSDK.authen.saveToken(token, email, nickname);
        //   message.success(`Chào mừng bợn ${nickname} đã quay lại ahihi`);
        //   history.push("/admin-cp");
        // } else {
        //   message.error("Thông tin đăng nhập không chính xác!");
        // }
    }
    const responseGoogle = data => {
        // if (!data || !data.profileObj.email || !data.accessToken) return;
    
        // setLoading(true);
    
        // FPTUSDK.authen
        //   .loginGoogle(data.profileObj.email, data.accessToken)
        //   .then(data => {
        //     if (!data) {
        //       message.error("Đăng nhập không thành công!");
        //     } else {
        //       const { token, nickname } = data;
        //       handleRedirect(token, data.email, nickname);
        //     }
        //   })
        //   .catch(() => {
        //     message.error("Tài khoản của bạn chưa được cấp phép truy cập!");
        //   })
        //   .finally(() => {
        //     setLoading(false);
        //   });
    };
    // useEffect(() => {
    //     if (LocalStorageUtils.isAuthenticated()) {
    //       history.push("/admin/dashboard");
    //     }
    // }, []);
    return (
        // <section className="flex flex-col md:flex-row h-screen items-center">
        //     <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        //         <img
        //         src="/assets/images/fptuhcm-confessions.png"
        //         alt=""
        //         className="w-full h-full object-cover"
        //         />
        //     </div>

        //     <div
        //         className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        //         flex items-center justify-center"
        //     >
        //         <div className="w-full h-100">
        //             <Link to="/">
        //                 <img
        //                     src="/assets/images/fpt-logo.png"
        //                     alt=""
        //                     className="w-full h-full object-cover"
        //                 />
        //             </Link>
                    
        //             <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
        //                 Log in to your account
        //             </h1>

        //             <Form
        //                 layout="vertical"
        //                 form={form} 
        //                 className="mt-6" 
        //                 name="login" 
        //                 onFinish={handleSubmit} 
        //                 onFinishFailed={onFinishFailed}
        //             >
        //                 <Form.Item
        //                     label="Email Address"
        //                     name="email"
        //                     rules={[{ required: true, message: "Vui lòng nhập email!" }]}
                            
        //                 >
        //                     {/* <label className="block text-gray-700">Email Address</label> */}
        //                     <Input
        //                         placeholder="Enter Email Address"
        //                         className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white !focus:outline-none"
        //                         disabled={loading}
        //                     />
        //                 </Form.Item>

        //                 <Form.Item 
        //                     label="Password"
        //                     name="password"
        //                     className="mt-4"
        //                     rules={[
        //                         { required: true, message: "Vui lòng nhập mật khẩu!" },
        //                         { min: 5, message: 'Username must be minimum 5 characters.' },
        //                     ]}
        //                 >
        //                     {/* <label className="block text-gray-700">Password</label> */}
        //                     <Input
        //                         placeholder="Enter Password"
        //                         className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
        //                         focus:bg-white focus:outline-none"
        //                         type="password"
        //                         disabled={loading}
        //                     />
        //                 </Form.Item>

        //                 <div className="text-right mt-2">
        //                 <a
        //                     href="#"
        //                     className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
        //                 >
        //                     Forgot Password?
        //                 </a>
        //                 </div>
        //                 <Form.Item>
        //                     <Button
        //                         htmlType="submit"
        //                         className="w-full h-[50px] block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
        //                         px-4 py-3 mt-6 border border-indigo-300" 
        //                         loading={loading}

        //                     >
        //                     Log In
        //                     </Button>
        //                 </Form.Item>
                

        //                 <hr className="my-6 border-gray-300 w-full" />

                        
        //                 <GoogleLogin
        //                     clientId="834798810236-ok8culnaru4ml7fanhjni43lr5i709jj.apps.googleusercontent.com"
        //                     render={renderProps => (
        //                         <button
        //                             onClick={renderProps.onClick}
        //                             type="button"
        //                             className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
        //                         >
        //                             <div className="flex items-center justify-center">
        //                             <svg
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 xmlnsXlink="http://www.w3.org/1999/xlink"
        //                                 className="w-6 h-6"
        //                                 viewBox="0 0 48 48"
        //                             >
        //                                 <defs>
        //                                 <path
        //                                     id="a"
        //                                     d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
        //                                 />
        //                                 </defs>
        //                                 <clipPath id="b">
        //                                 <use xlinkHref="#a" overflow="visible" />
        //                                 </clipPath>
        //                                 <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
        //                                 <path
        //                                 clipPath="url(#b)"
        //                                 fill="#EA4335"
        //                                 d="M0 11l17 13 7-6.1L48 14V0H0z"
        //                                 />
        //                                 <path
        //                                 clipPath="url(#b)"
        //                                 fill="#34A853"
        //                                 d="M0 37l30-23 7.9 1L48 0v48H0z"
        //                                 />
        //                                 <path
        //                                 clipPath="url(#b)"
        //                                 fill="#4285F4"
        //                                 d="M48 48L17 24l-4-3 35-10z"
        //                                 />
        //                             </svg>
        //                             <span className="ml-4">Log in with Google</span>
        //                             </div>
        //                         </button>
        //                     )}
        //                     buttonText="Login with Google "
        //                     onSuccess={responseGoogle}
        //                     onFailure={responseGoogle}
        //                 />

        //                 <p className="mt-8">
        //                     Need an account?
        //                     <a
        //                     href="#"
        //                     className="text-blue-500 hover:text-blue-700 font-semibold"
        //                     >
        //                     Create an account
        //                     </a>
        //                 </p>
        //             </Form>
        //         </div>
                
        //     </div>
        // </section>
        <div className="loginPage flex flex-col md:flex-row min-h-screen ">
            <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center">
                <img
                  src="/assets/images/fptuhcm-confessions.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
            </div>
            <div className="container min-h-screen lg:py-6 md:max-w-full lg:max-w-[450px]  lg:mx-auto select-none">
                <div className="w-full shadowLed p-[4px]">
                    <Link to="/">
                        <img
                          src="/assets/images/fpt-logo.png"
                          alt=""
                          className="w-full bg-center  object-cover shadowLed bg-[#161616]"
                        />
                    </Link>
                </div>
                
                <input type="radio" name="tab" id="signin" checked={mode} onChange={changeMode} />
                <input type="radio" name="tab" id="register" checked={!mode} onChange={changeMode} />
                <div className="pages mt-[10px]">
                    
                    <Form 
                      className="page lg:rounded-t-lg"
                      layout="vertical"
                      form={form} 
                      name="login" 
                      onFinish={handleSubmit} 
                      onFinishFailed={onFinishFailed}
                    >
                        <h1 className="input text-xl md:text-2xl font-bold leading-tight my-2">
                            Đăng nhập tài khoản
                        </h1>
                        <Form.Item
                          label="Email Address"
                          name="email"
                          className="input"
                          rules={[{ required: true, message: "Vui lòng nhập email!" }]}
                            
                        >
                            <Input
                              placeholder="Enter Email Address"
                              className=" w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white !focus:outline-none"
                              disabled={loading}
                            />
                        </Form.Item>

                        <Form.Item 
                          label="Password"
                          name="password"
                          className="mt-4 input"
                          rules={[
                                { required: true, message: "Vui lòng nhập mật khẩu!" },
                                { min: 5, message: 'Username must be minimum 5 characters.' },
                            ]}
                        >
                            {/* <label className="block text-gray-700">Password</label> */}
                            <Input
                              placeholder="Enter Password"
                              className=" w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                                focus:bg-white focus:outline-none"
                              type="password"
                              disabled={loading}
                            />
                        </Form.Item>

                        <div className="input text-right mt-2">
                            <a
                              href="#"
                              className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                            >
                                Forgot Password?
                            </a>
                        </div>
                        <Form.Item  
                          className="input" 
                        >
                            <Button
                              htmlType="submit"
                              className=" w-full h-[50px] block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                                px-4 py-3 mt-6 border border-indigo-300" 
                              loading={loading}

                            >
                            Log In
                            </Button>
                        </Form.Item>
                        {/* <div className="input"><input type="submit" value="ENTER" /></div> */}
                   
                        <GoogleLogin
                         className="input"
                          clientId="834798810236-ok8culnaru4ml7fanhjni43lr5i709jj.apps.googleusercontent.com"
                          render={renderProps => (
                                    <button
                                      onClick={renderProps.onClick}
                                      type="button"
                                      className="input w-full  bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
                                    >
                                        <div className="input flex items-center justify-center">
                                            <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            className="w-6 h-6 input"
                                            viewBox="0 0 48 48"
                                            >
                                                <defs>
                                                <path
                                                id="a"
                                                d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                                                />
                                                </defs>
                                                <clipPath id="b">
                                                <use xlinkHref="#a" overflow="visible" />
                                                </clipPath>
                                                <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                                                <path
                                                clipPath="url(#b)"
                                                fill="#EA4335"
                                                d="M0 11l17 13 7-6.1L48 14V0H0z"
                                                />
                                                <path
                                                clipPath="url(#b)"
                                                fill="#34A853"
                                                d="M0 37l30-23 7.9 1L48 0v48H0z"
                                                />
                                                <path
                                                clipPath="url(#b)"
                                                fill="#4285F4"
                                                d="M48 48L17 24l-4-3 35-10z"
                                                />
                                            </svg>
                                            <span className="ml-4 input">Log in with Google</span>
                                        </div>
                                    </button>
                                )}
                          buttonText="Login with Google "
                          onSuccess={responseGoogle}
                          onFailure={responseGoogle}
                          
                        />
                    </Form>
                    <Form 
                      className="page signup lg:rounded-t-lg"
                      layout="vertical"
                      form={form} 
                      name="register" 
                      onFinish={handleSubmit} 
                      onFinishFailed={onFinishFailed}
                    >
                        <h1 className="input text-xl md:text-2xl font-bold leading-tight my-2">
                            Đăng kí tài khoản
                        </h1>
                        <Form.Item
                          label="Email Address"
                          name="email"
                          className="input"
                          rules={[{ required: true, message: "Vui lòng nhập email!" }]}
                            
                        >
                            <Input
                              placeholder="Enter Email Address"
                              className=" w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white !focus:outline-none"
                              disabled={loading}
                            />
                        </Form.Item>

                        <Form.Item 
                          label="Password"
                          name="password"
                          className="mt-4 input"
                          rules={[
                                { required: true, message: "Vui lòng nhập mật khẩu!" },
                                { min: 5, message: 'Username must be minimum 5 characters.' },
                            ]}
                        >
                            {/* <label className="block text-gray-700">Password</label> */}
                            <Input
                              placeholder="Enter Password"
                              className=" w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                                focus:bg-white focus:outline-none"
                              type="password"
                              disabled={loading}
                            />
                        </Form.Item>

                        <div className="input text-right mt-2">
                            <a
                              href="#"
                              className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                            >
                                Forgot Password?
                            </a>
                        </div>
                        <Form.Item  
                          className="input" 
                        >
                            <Button
                              htmlType="submit"
                              className=" w-full h-[50px] block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                                px-4 py-3 mt-6 border border-indigo-300" 
                              loading={loading}

                            >
                            Log In
                            </Button>
                        </Form.Item>
                        {/* <div className="input"><input type="submit" value="ENTER" /></div> */}
                   
                        <GoogleLogin
                         className="input"
                          clientId="834798810236-ok8culnaru4ml7fanhjni43lr5i709jj.apps.googleusercontent.com"
                          render={renderProps => (
                                    <button
                                      onClick={renderProps.onClick}
                                      type="button"
                                      className="input w-full  bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
                                    >
                                        <div className="input flex items-center justify-center">
                                            <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            className="w-6 h-6 input"
                                            viewBox="0 0 48 48"
                                            >
                                                <defs>
                                                <path
                                                id="a"
                                                d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                                                />
                                                </defs>
                                                <clipPath id="b">
                                                <use xlinkHref="#a" overflow="visible" />
                                                </clipPath>
                                                <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                                                <path
                                                clipPath="url(#b)"
                                                fill="#EA4335"
                                                d="M0 11l17 13 7-6.1L48 14V0H0z"
                                                />
                                                <path
                                                clipPath="url(#b)"
                                                fill="#34A853"
                                                d="M0 37l30-23 7.9 1L48 0v48H0z"
                                                />
                                                <path
                                                clipPath="url(#b)"
                                                fill="#4285F4"
                                                d="M48 48L17 24l-4-3 35-10z"
                                                />
                                            </svg>
                                            <span className="ml-4 input">Log in with Google</span>
                                        </div>
                                    </button>
                                )}
                          buttonText="Login with Google "
                          onSuccess={responseGoogle}
                          onFailure={responseGoogle}
                          
                        />
                      
                    </Form>
                </div>
                <div className="tabs lg:rounded-b-lg">
                    <label className="tab cursor-pointer" htmlFor="signin">
                        <div className="text">Sign In</div>
                    </label>
                    <label className="tab cursor-pointer" htmlFor="register">
                        <div className="text">Register</div>
                    </label>
                </div>
            </div>
        </div>
    );
};

  
export default Login;

