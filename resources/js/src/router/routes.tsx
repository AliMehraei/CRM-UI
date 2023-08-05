import { lazy } from 'react';
const Index = lazy(() => import('../pages/Index'));
const Todolist = lazy(() => import('../pages/Todolist'));
const Leads = lazy(() => import('../pages/Leads'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Contracts = lazy(() => import('../pages/Contracts'));
const Support = lazy(() => import('../pages/Support/Supports'));
const Sales = lazy(() => import('../pages/Sales'));
const Setting = lazy(() => import('../pages/App/Index'));
const List = lazy(() => import('../pages/Invoice/Index'));
const Preview = lazy(() => import('../pages/Invoice/Preview'));
const Add = lazy(() => import('../pages/Invoice/Add'));
const Edit = lazy(() => import('../pages/Invoice/Edit'));


const Profile = lazy(() => import('../pages/Users/Profile'));
const AccountSetting = lazy(() => import('../pages/Users/AccountSetting'));
const KnowledgeBase = lazy(() => import('../pages/Pages/KnowledgeBase'));
const ContactForm = lazy(() => import('../pages/Pages/ContactForm'));
const Faq = lazy(() => import('../pages/Pages/Faq'));
const ComingSoon = lazy(() => import('../pages/Pages/ComingSoon'));
const ERROR404 = lazy(() => import('../pages/Pages/Error404'));
const ERROR500 = lazy(() => import('../pages/Pages/Error500'));
const ERROR503 = lazy(() => import('../pages/Pages/Error503'));
const Maintenence = lazy(() => import('../pages/Pages/Maintenence'));
const LoginBoxed = lazy(() => import('../pages/Authentication/LoginBoxed'));
const RegisterBoxed = lazy(() => import('../pages/Authentication/RegisterBoxed'));
const UnlockBoxed = lazy(() => import('../pages/Authentication/UnlockBox'));
const RecoverIdBoxed = lazy(() => import('../pages/Authentication/RecoverIdBox'));
const LoginCover = lazy(() => import('../pages/Authentication/LoginCover'));
const RegisterCover = lazy(() => import('../pages/Authentication/RegisterCover'));
const RecoverIdCover = lazy(() => import('../pages/Authentication/RecoverIdCover'));
const UnlockCover = lazy(() => import('../pages/Authentication/UnlockCover'));
const Error = lazy(() => import('../components/Error'));


const routes = [
    // dashboard
    {
        path: '/',
        element: <Index />,
    },
    {
        path: '/index',
        element: <Index />,
    },
    {
        path: '/leads',
        element: <Leads />,
    },
    {
        path: '/contacts',
        element: <Contacts />,
    },
    {
        path: '/sales',
        element: <Sales />,
    },
    {
        path: '/contracts',
        element: <Contracts />,
    },
    {
        path: '/todolist',
        element: <Todolist />,
    },
    {
        path: '/support',
        element: <Support />,
    },
    {
        path: '/invoice/list',
        element: <List />,
    },

    // preview page
    {
        path: '/invoice/preview',
        element: <Preview />,
    },
    {
        path: '/invoice/add',
        element: <Add />,
    },
    {
        path: '/invoice/edit',
        element: <Edit />,
    },
    {
        path: '/app/setting',
        element: <Setting />,
    },
    // Users page
    {
        path: '/users/profile',
        element: <Profile />,
    },
    {
        path: '/users/user-account-settings',
        element: <AccountSetting />,
    },
    // pages
    {
        path: '/pages/knowledge-base',
        element: <KnowledgeBase />,
    },
    {
        path: '/pages/contact-us',
        element: <ContactForm />,
        layout: 'blank',
    },
    {
        path: '/pages/faq',
        element: <Faq />,
    },
    {
        path: '/pages/coming-soon',
        element: <ComingSoon />,
        layout: 'blank',
    },
    {
        path: '/pages/error404',
        element: <ERROR404 />,
        layout: 'blank',
    },
    {
        path: '/pages/error500',
        element: <ERROR500 />,
        layout: 'blank',
    },
    {
        path: '/pages/error503',
        element: <ERROR503 />,
        layout: 'blank',
    },
    {
        path: '/pages/maintenence',
        element: <Maintenence />,
        layout: 'blank',
    },
    //Authentication
    {
        path: '/auth/boxed-signin',
        element: <LoginBoxed />,
        layout: 'blank',
    },
    {
        path: '/auth/boxed-signup',
        element: <RegisterBoxed />,
        layout: 'blank',
    },
    {
        path: '/auth/boxed-lockscreen',
        element: <UnlockBoxed />,
        layout: 'blank',
    },
    {
        path: '/auth/boxed-password-reset',
        element: <RecoverIdBoxed />,
        layout: 'blank',
    },
    {
        path: '/auth/cover-login',
        element: <LoginCover />,
        layout: 'blank',
    },
    {
        path: '/auth/cover-register',
        element: <RegisterCover />,
        layout: 'blank',
    },
    {
        path: '/auth/cover-lockscreen',
        element: <UnlockCover />,
        layout: 'blank',
    },
    {
        path: '/auth/cover-password-reset',
        element: <RecoverIdCover />,
        layout: 'blank',
    },


    {
        path: '*',
        element: <Error />,
        layout: 'blank',
    },
];

export { routes };
