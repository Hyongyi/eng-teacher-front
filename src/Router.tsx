import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorComponent from './components/ErrorComponent';
import Root from './Root';
import MainForm from './components/MainForm';
import App from './App';



const Router = createBrowserRouter([
    {
        path:"/",
        element:<Root />,
        children:[
            {
                path:"",
                element : <App />,
                errorElement: <ErrorComponent />
            },
            {
                path:"/translate",
                element : <MainForm template='translate' sentence='AI 영어 번역기로 보다 자연스러운 <br/>한영 번역을 경험해 보세요' />,
                errorElement: <ErrorComponent />
            },
            {
                path:"/grammar-check",
                element : <MainForm template='grammar-check' sentence='AI 영어 문법 검사기를 이용하여 <br />영어 논문, 이력서, 이메일에 대한 영문법과 맞춤법 검사를 받아보세요' />,
                errorElement: <ErrorComponent />
            },
            {
                path:"/summary",
                element : <MainForm template='summary' sentence='AI 영어 요약 기능을 이용하여 <br />논문, 기사 등을 요약하여 받아보세요.' />,
                errorElement: <ErrorComponent />
            }
        ]
    }
])


export default Router;