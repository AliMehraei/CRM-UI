import { lazy } from 'react';
import ProtectedRoute from '../components/ProtectedRoute';
import ErrorPage from '../pages/Pages/ErroPage';
import Logout from '../pages/Authentication/Logout';
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

const ListManufacturer = lazy(() => import('../pages/Manufacturer/Index'));
const PreviewManufacturer = lazy(() => import('../pages/Manufacturer/Preview'));
const AddManufacturer = lazy(() => import('../pages/Manufacturer/Add'));
const EditManufacturer = lazy(() => import('../pages/Manufacturer/Edit'));

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
        protected: true,
        requiredPermission : 'can-edit-task'
    },
    {
        path: '/permission-denied',
        element: <ErrorPage errorCode="403" />
        
    },
    {
        path: '/index',
        element: <Index />,
        protected: true,
        requiredPermission : 'can-edit-task'
    },
    {
        path: '/import/:module',
        element: <ImportCreate />,
        protected: true,
        requiredPermission : 'can-edit-task'
    },
    {
        path: '/import/:module/operation',
        element: <ImportOperation />,
        protected: true,
        requiredPermission : 'can-edit-task'
    },
    {
        path: '/import/:module/field-mapping',
        element: <ImportFieldMapping />,
        protected: true,
        requiredPermission : 'can-edit-task'
    },

    {
        path: '/account/list',
        element: <ListAccount />,
        protected: true,
        requiredPermission : 'can-edit-task'
    },
    {
        path: '/account/preview/:id',
        element: <PreviewAccount />,
        protected: true,
        requiredPermission : 'can-edit-task'
    },
    {
        path: '/account/add',
        element: <AddAccount />,
        protected: true,
        requiredPermission : 'can-edit-task'
    },
    {
        path: '/account/edit/:id',
        element: <EditAccount />,
        protected: true,
        requiredPermission : 'can-edit-task'
    },
    {
        path: '/contracts',
        element: <Contracts />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/todolist',
        element: <Todolist />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/invoice/list',
        element: <ListInvoice />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    //task
    {
        path: '/task/list',
        element: <ListTask />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/task/preview/:id',
        element: <PreviewTask />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/task/add',
        element: <AddTask />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/task/edit/:id',
        element: <EditTask />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    // preview page
    {
        path: '/invoice/preview/:id',
        element: <PreviewInvoice />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/invoice/add',
        element: <AddInvoice />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/invoice/edit/:id',
        element: <EditInvoice />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/app/setting',
        element: <Setting />,
        protected: true,
        requiredPermission : 'can-edit-task'
    },
    // Users page
    {
        path: '/users/profile',
        element: <Profile />,
        protected: true,
        requiredPermission : 'can-edit-task'
    },
    {
        path: '/users/user-account-settings',
        element: <AccountSetting />,
        protected: true,
        requiredPermission : 'can-edit-task'
    },
    // pages
    {
        path: '/pages/knowledge-base',
        element: <KnowledgeBase />,
        protected: true,
        requiredPermission : 'can-edit-task'
    },
    {
        path: '/pages/contact-us',
        element: <ContactForm />,
        layout: 'blank',
        protected: true,
        requiredPermission : 'can-edit-task'
    },
    {
        path: '/pages/faq',
        element: <Faq />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/pages/coming-soon',
        element: <ComingSoon />,
        layout: 'blank',
    },
    {
        path: '/pages/error404',
        element: <ErrorPage errorCode="404" />,
        layout: 'blank',
    },
    {
        path: '/pages/error500',
        element: <ErrorPage errorCode="500" />,
        layout: 'blank',
    },
    {
        path: '/pages/error503',
        element: <ErrorPage errorCode="503" />,
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
        protected: true,
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
        path: '/auth/login',
        element: <LoginCover />,
        layout: 'blank',
    },
    {
        path: '/auth/logout',
        element: <Logout />,
        protected: true,
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
        protected: true,
        requiredPermission : 'can-edit-task'
    },
    {
        path: '/availability/preview/:id',
        element: <PreviewAvailability />,
    protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/availability/add',
        element: <AddAvailability />,
        protected: true,
        requiredPermission : 'can-edit-task'
    },
    {
        path: '/availability/edit/:id',
        element: <EditAvailability />,
        protected: true,
        requiredPermission : 'can-edit-task'
    },

    {
        path: '/support/list',
        element: <ListSupport />,
        protected: true,
        requiredPermission : 'can-edit-task'
    },
    {
        path: '/support/preview/:id',
        element: <PreviewSupport />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/support/add',
        element: <AddSupport />,
        protected: true,
        requiredPermission : 'can-edit-task'
    },
    {
        path: '/support/edit/:id',
        element: <EditSupport />,
        protected: true,
        requiredPermission : 'can-edit-task'
    },

    {
        path: '/excess/list',
        element: <ListExcess />,
        protected: true,
        requiredPermission : 'can-edit-task'
    },
    {
        path: '/excess/preview/:id',
        element: <PreviewExcess />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/excess/add',
        element: <AddExcess />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/excess/edit/:id',
        element: <EditExcess />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/manufacturer/list',
        element: <ListManufacturer />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/manufacturer/preview/:id',
        element: <PreviewManufacturer />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/manufacturer/add',
        element: <AddManufacturer />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/manufacturer/edit/:id',
        element: <EditManufacturer />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/product/list',
        element: <ListProduct />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/product/preview/:id',
        element: <PreviewProduct />,        
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/product/add',
        element: <AddProduct />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/product/edit/:id',
        element: <EditProduct />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/quotes/list',
        element: <ListQuotes />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/quotes/preview/:id',
        element: <PreviewQuotes />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/quotes/add',
        element: <AddQuotes />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/quotes/edit/:id',
        element: <EditQuotes />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/rfq/list',
        element: <ListRFQ />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/rfq/preview/:id',
        element: <PreviewRFQ />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/rfq/add',
        element: <AddRFQ />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/rfq/edit/:id',
        element: <EditRFQ />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/vendor_rfq/list',
        element: <ListVendorRFQ />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/vendor_rfq/preview/:id',
        element: <PreviewVendorRFQ />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/vendor_rfq/add',
        element: <AddVendorRFQ />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/vendor_rfq/edit/:id',
        element: <EditVendorRFQ />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/vendor/list',
        element: <ListVendor />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/vendor/preview/:id',
        element: <PreviewVendor />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/vendor/add',
        element: <AddVendor />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/vendor/edit/:id',
        element: <EditVendor />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/contact/list',
        element: <ListContact />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/contact/preview/:id',
        element: <PreviewContact />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/contact/add',
        element: <AddContact />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/contact/edit/:id',
        element: <EditContact />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/deal/list',
        element: <ListDeal />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/deal/preview/:id',
        element: <PreviewDeal />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/deal/add',
        element: <AddDeal />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/deal/edit/:id',
        element: <EditDeal />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/lead/list',
        element: <ListLead />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/lead/preview/:id',
        element: <PreviewLead />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/lead/add',
        element: <AddLead />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/lead/edit/:id',
        element: <EditLead />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/purchase/list',
        element: <ListPurchase />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/purchase/preview/:id',
        element: <PreviewPurchase />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/purchase/add',
        element: <AddPurchase />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/purchase/edit/:id',
        element: <EditPurchase />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/sales/list',
        element: <ListSales />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/sales/preview/:id',
        element: <PreviewSales />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/sales/add',
        element: <AddSales />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '/sales/edit/:id',
        element: <EditSales />,
        protected: true,
        requiredPermission : 'can-view-task'
    },
    {
        path: '*',
        element: <ErrorPage />,
        layout: 'blank',
    },
];
export { routes };