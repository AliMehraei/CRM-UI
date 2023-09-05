import { lazy } from 'react';
const Index = lazy(() => import('../pages/Index'));
const Todolist = lazy(() => import('../pages/Todolist'));
const Contracts = lazy(() => import('../pages/Contracts'));
const Setting = lazy(() => import('../pages/App/Index'));

const ListAccount = lazy(() => import('../pages/Account/Index'));
const PreviewAccount = lazy(() => import('../pages/Account/Preview'));
const AddAccount = lazy(() => import('../pages/Account/Add'));
const EditAccount = lazy(() => import('../pages/Account/Edit'));

const ListContact = lazy(() => import('../pages/Contact/Index'));
const PreviewContact = lazy(() => import('../pages/Contact/Preview'));
const AddContact = lazy(() => import('../pages/Contact/Add'));
const EditContact = lazy(() => import('../pages/Contact/Edit'));

const ListDeal = lazy(() => import('../pages/Deal/Index'));
const PreviewDeal = lazy(() => import('../pages/Deal/Preview'));
const AddDeal = lazy(() => import('../pages/Deal/Add'));
const EditDeal = lazy(() => import('../pages/Deal/Edit'));

const ListLead = lazy(() => import('../pages/Lead/Index'));
const PreviewLead = lazy(() => import('../pages/Lead/Preview'));
const AddLead = lazy(() => import('../pages/Lead/Add'));
const EditLead = lazy(() => import('../pages/Lead/Edit'));

const ListSales = lazy(() => import('../pages/Sales/Index'));
const PreviewSales = lazy(() => import('../pages/Sales/Preview'));
const AddSales = lazy(() => import('../pages/Sales/Add'));
const EditSales = lazy(() => import('../pages/Sales/Edit'));

const ListPurchase = lazy(() => import('../pages/Purchase/Index'));
const PreviewPurchase = lazy(() => import('../pages/Purchase/Preview'));
const AddPurchase = lazy(() => import('../pages/Purchase/Add'));
const EditPurchase = lazy(() => import('../pages/Purchase/Edit'));


const ListAvailability = lazy(() => import('../pages/Availability/Index'));
const PreviewAvailability = lazy(() => import('../pages/Availability/Preview'));
const AddAvailability = lazy(() => import('../pages/Availability/Add'));
const EditAvailability = lazy(() => import('../pages/Availability/Edit'));

const ListSupport = lazy(() => import('../pages/Support/Index'));
const PreviewSupport = lazy(() => import('../pages/Support/Preview'));
const AddSupport = lazy(() => import('../pages/Support/Add'));
const EditSupport = lazy(() => import('../pages/Support/Edit'));

const ListExcess = lazy(() => import('../pages/Excess/Index'));
const PreviewExcess = lazy(() => import('../pages/Excess/Preview'));
const AddExcess = lazy(() => import('../pages/Excess/Add'));
const EditExcess = lazy(() => import('../pages/Excess/Edit'));

const ListManufacture = lazy(() => import('../pages/Manufacture/Index'));
const PreviewManufacture = lazy(() => import('../pages/Manufacture/Preview'));
const AddManufacture = lazy(() => import('../pages/Manufacture/Add'));
const EditManufacture = lazy(() => import('../pages/Manufacture/Edit'));

const ListProduct = lazy(() => import('../pages/Product/Index'));
const PreviewProduct = lazy(() => import('../pages/Product/Preview'));
const AddProduct = lazy(() => import('../pages/Product/Add'));
const EditProduct = lazy(() => import('../pages/Product/Edit'));

const ListQuotes = lazy(() => import('../pages/Quotes/Index'));
const PreviewQuotes = lazy(() => import('../pages/Quotes/Preview'));
const AddQuotes = lazy(() => import('../pages/Quotes/Add'));
const EditQuotes = lazy(() => import('../pages/Quotes/Edit'));

const ListRFQ = lazy(() => import('../pages/RFQ/Index'));
const PreviewRFQ = lazy(() => import('../pages/RFQ/Preview'));
const AddRFQ = lazy(() => import('../pages/RFQ/Add'));
const EditRFQ = lazy(() => import('../pages/RFQ/Edit'));

const ListVendorRFQ = lazy(() => import('../pages/VendorRFQ/Index'));
const PreviewVendorRFQ = lazy(() => import('../pages/VendorRFQ/Preview'));
const AddVendorRFQ = lazy(() => import('../pages/VendorRFQ/Add'));
const EditVendorRFQ = lazy(() => import('../pages/VendorRFQ/Edit'));

const ListVendor = lazy(() => import('../pages/Vendor/Index'));
const PreviewVendor = lazy(() => import('../pages/Vendor/Preview'));
const AddVendor = lazy(() => import('../pages/Vendor/Add'));
const EditVendor = lazy(() => import('../pages/Vendor/Edit'));

const ListInvoice = lazy(() => import('../pages/Invoice/Index'));
const PreviewInvoice = lazy(() => import('../pages/Invoice/Preview'));
const AddInvoice = lazy(() => import('../pages/Invoice/Add'));
const EditInvoice = lazy(() => import('../pages/Invoice/Edit'));

const ImportCreate = lazy(() => import('../pages/Import/Create'));
const ImportOperation = lazy(() => import('../pages/Import/Operation'));
const ImportFieldMapping = lazy(() => import('../pages/Import/FieldMapping'));

const Profile = lazy(() => import('../pages/Users/Profile'));
const AccountSetting = lazy(() => import('../pages/Users/AccountSetting'));
const KnowledgeBase = lazy(() => import('../pages/Pages/KnowledgeBase'));
const ContactForm = lazy(() => import('../pages/Pages/ContactForm'));
const Faq = lazy(() => import('../pages/Pages/Faq'));
const ComingSoon = lazy(() => import('../pages/Pages/ComingSoon'));
const ERROR404 = lazy(() => import('../pages/Pages/Error404'));
const ERROR500 = lazy(() => import('../pages/Pages/Error500'));
const ERROR503 = lazy(() => import('../pages/Pages/Error503'));
const Maintenance = lazy(() => import('../pages/Pages/Maintenance'));
const LoginBoxed = lazy(() => import('../pages/Authentication/LoginBoxed'));
const RegisterBoxed = lazy(() => import('../pages/Authentication/RegisterBoxed'));
const UnlockBoxed = lazy(() => import('../pages/Authentication/UnlockBox'));
const RecoverIdBoxed = lazy(() => import('../pages/Authentication/RecoverIdBox'));
const LoginCover = lazy(() => import('../pages/Authentication/LoginCover'));
const RegisterCover = lazy(() => import('../pages/Authentication/RegisterCover'));
const RecoverIdCover = lazy(() => import('../pages/Authentication/RecoverIdCover'));
const UnlockCover = lazy(() => import('../pages/Authentication/UnlockCover'));
const Error = lazy(() => import('../components/Error'));

const ListTask = lazy(() => import('../pages/Task/Index'));
const PreviewTask = lazy(() => import('../pages/Task/Preview'));
const AddTask = lazy(() => import('../pages/Task/Add'));
const EditTask = lazy(() => import('../pages/Task/Edit'));


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
        path: '/import/:module',
        element: <ImportCreate />,
    },
    {
        path: '/import/:module/operation',
        element: <ImportOperation />,
    },
    {
        path: '/import/:module/field-mapping',
        element: <ImportFieldMapping />,
    },

    {
        path: '/account/list',
        element: <ListAccount />,
    },
    {
        path: '/account/preview/:id',
        element: <PreviewAccount />,
    },
    {
        path: '/account/add',
        element: <AddAccount />,
    },
    {
        path: '/account/edit/:id',
        element: <EditAccount />,
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
        path: '/invoice/list',
        element: <ListInvoice />,
    },
    //task
    {
        path: '/task/list',
        element: <ListTask />,
    },
    {
        path: '/task/preview/:id',
        element: <PreviewTask />,
    },
    {
        path: '/task/add',
        element: <AddTask />,
    },
    {
        path: '/task/edit/:id',
        element: <EditTask />,
    },
    // preview page
    {
        path: '/invoice/preview/:id',
        element: <PreviewInvoice />,
    },
    {
        path: '/invoice/add',
        element: <AddInvoice />,
    },
    {
        path: '/invoice/edit/:id',
        element: <EditInvoice />,
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
        path: '/pages/maintenance',
        element: <Maintenance />,
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
        path: '/availability/list',
        element: <ListAvailability />,
    },
    {
        path: '/availability/preview/:id',
        element: <PreviewAvailability />,
    },
    {
        path: '/availability/add',
        element: <AddAvailability />,
    },
    {
        path: '/availability/edit/:id',
        element: <EditAvailability />,
    },

    {
        path: '/support/list',
        element: <ListSupport />,
    },
    {
        path: '/support/preview/:id',
        element: <PreviewSupport />,
    },
    {
        path: '/support/add',
        element: <AddSupport />,
    },
    {
        path: '/support/edit/:id',
        element: <EditSupport />,
    },

    {
        path: '/excess/list',
        element: <ListExcess />,
    },
    {
        path: '/excess/preview/:id',
        element: <PreviewExcess />,
    },
    {
        path: '/excess/add',
        element: <AddExcess />,
    },
    {
        path: '/excess/edit/:id',
        element: <EditExcess />,
    },



    {
        path: '/manufacture/list',
        element: <ListManufacture />,
    },
    {
        path: '/manufacture/preview/:id',
        element: <PreviewManufacture />,
    },
    {
        path: '/manufacture/add',
        element: <AddManufacture />,
    },
    {
        path: '/manufacture/edit/:id',
        element: <EditManufacture />,
    },



    {
        path: '/product/list',
        element: <ListProduct />,
    },
    {
        path: '/product/preview/:id',
        element: <PreviewProduct />,
    },
    {
        path: '/product/add',
        element: <AddProduct />,
    },
    {
        path: '/product/edit/:id',
        element: <EditProduct />,
    },



    {
        path: '/quotes/list',
        element: <ListQuotes />,
    },
    {
        path: '/quotes/preview/:id',
        element: <PreviewQuotes />,
    },
    {
        path: '/quotes/add',
        element: <AddQuotes />,
    },
    {
        path: '/quotes/edit/:id',
        element: <EditQuotes />,
    },




    {
        path: '/rfq/list',
        element: <ListRFQ />,
    },
    {
        path: '/rfq/preview/:id',
        element: <PreviewRFQ />,
    },
    {
        path: '/rfq/add',
        element: <AddRFQ />,
    },
    {
        path: '/rfq/edit/:id',
        element: <EditRFQ />,
    },



    {
        path: '/vendor_rfq/list',
        element: <ListVendorRFQ />,
    },
    {
        path: '/vendor_rfq/preview/:id',
        element: <PreviewVendorRFQ />,
    },
    {
        path: '/vendor_rfq/add',
        element: <AddVendorRFQ />,
    },
    {
        path: '/vendor_rfq/edit/:id',
        element: <EditVendorRFQ />,
    },



    {
        path: '/vendor/list',
        element: <ListVendor />,
    },
    {
        path: '/vendor/preview/:id',
        element: <PreviewVendor />,
    },
    {
        path: '/vendor/add',
        element: <AddVendor />,
    },
    {
        path: '/vendor/edit/:id',
        element: <EditVendor />,
    },



    {
        path: '/contact/list',
        element: <ListContact />,
    },
    {
        path: '/contact/preview/:id',
        element: <PreviewContact />,
    },
    {
        path: '/contact/add',
        element: <AddContact />,
    },
    {
        path: '/contact/edit/:id',
        element: <EditContact />,
    },



    {
        path: '/deal/list',
        element: <ListDeal />,
    },
    {
        path: '/deal/preview/:id',
        element: <PreviewDeal />,
    },
    {
        path: '/deal/add',
        element: <AddDeal />,
    },
    {
        path: '/deal/edit/:id',
        element: <EditDeal />,
    },




    {
        path: '/lead/list',
        element: <ListLead />,
    },
    {
        path: '/lead/preview/:id',
        element: <PreviewLead />,
    },
    {
        path: '/lead/add',
        element: <AddLead />,
    },
    {
        path: '/lead/edit/:id',
        element: <EditLead />,
    },



    {
        path: '/purchase/list',
        element: <ListPurchase />,
    },
    {
        path: '/purchase/preview/:id',
        element: <PreviewPurchase />,
    },
    {
        path: '/purchase/add',
        element: <AddPurchase />,
    },
    {
        path: '/purchase/edit/:id',
        element: <EditPurchase />,
    },



    {
        path: '/sales/list',
        element: <ListSales />,
    },
    {
        path: '/sales/preview/:id',
        element: <PreviewSales />,
    },
    {
        path: '/sales/add',
        element: <AddSales />,
    },
    {
        path: '/sales/edit/:id',
        element: <EditSales />,
    },


    {
        path: '*',
        element: <Error />,
        layout: 'blank',
    },
];

export { routes };
