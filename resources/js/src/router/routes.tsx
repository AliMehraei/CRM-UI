import {lazy} from 'react';
import ErrorPage from '../pages/Pages/ErroPage';
import Logout from '../pages/Authentication/Logout';
import React from 'react';

const Index = lazy(() => import('../pages/Index'));
const Todolist = lazy(() => import('../pages/Todolist'));
const Contracts = lazy(() => import('../pages/Contracts'));
const Setting = lazy(() => import('../pages/Setting/Index'));
const PersonalSettings = lazy(() => import('../pages/Setting/PersonalSettings'));

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
const ConvertLead = lazy(() => import('../pages/Lead/Convert'));

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

const ListUser = lazy(() => import('../pages/User/Index'));
const PreviewUser = lazy(() => import('../pages/User/Preview'));
const AddUser = lazy(() => import('../pages/User/Add'));
const EditUser = lazy(() => import('../pages/User/Edit'));


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
// const Error = lazy(() => import('../components/Error'));
const ListTask = lazy(() => import('../pages/Task/Index'));
const PreviewTask = lazy(() => import('../pages/Task/Preview'));
const AddTask = lazy(() => import('../pages/Task/Add'));
const EditTask = lazy(() => import('../pages/Task/Edit'));

const ListCall = lazy(() => import('../pages/Call/Index'));
const AddCall = lazy(() => import('../pages/Call/Add'));
const EditCall = lazy(() => import('../pages/Call/Edit'));
const PreviewCall = lazy(() => import('../pages/Call/Preview'));

const ListSearch = lazy(() => import('../pages/Search/Index'));

const AdminAnalytic = lazy(() => import('../pages/Analytic/Admin/Index'));
const AdminAnalyticSalesOrder = lazy(() => import('../pages/Analytic/Admin/Sales/Index'));
const AdminAnalyticQuote = lazy(() => import('../pages/Analytic/Admin/Quote/Index'));
const AdminAnalyticInvoice = lazy(() => import('../pages/Analytic/Admin/Invoice/Index'));
const AdminAnalyticVendor = lazy(() => import('../pages/Analytic/Admin/Vendor/Index'));

const RoleIndex = lazy(() => import('../pages/Role/Index'));
const EditRole = lazy(() => import('../pages/Role/Edit'));

const BomExcessIndex = lazy(() => import('../pages/BomExcess/BomExcessIndex'));
const BomExcessImport = lazy(() => import('../pages/BomExcess/BomExcessImport'));
const BomExcessConfirmation = lazy(() => import('../pages/BomExcess/BomExcessConfirmation'));
const BomExcessPreProcess = lazy(() => import('../pages/BomExcess/BomExcessPreProcess'));
const BomExcessComplete = lazy(() => import('../pages/BomExcess/BomExcessComplete'));


const routes = [
    // dashboard
    {
        path: '/',
        element: <Index/>,
        protected: true,
        requiredPermission: 'read-product'
    },
    {
        path: '/index',
        element: <Index/>,
        protected: true,
        requiredPermission: 'read-product'
    },
    {
        path: '/admin-analytics',
        element: <AdminAnalytic/>,
        protected: true,
        requiredPermission: 'admin-analytics'
    },
    {
        path: '/admin-analytics/customer',
        element: <Index/>,
        protected: true,
        requiredPermission: 'admin-customer-analytics'
    },
    {
        path: '/admin-analytics/product',
        element: <Index/>,
        protected: true,
        requiredPermission: 'admin-product-analytics'
    },
    {
        path: '/admin-analytics/quote',
        element: <AdminAnalyticQuote/>,
        protected: true,
        requiredPermission: 'admin-quote-analytics'
    },
    {
        path: '/admin-analytics/invoice',
        element: <AdminAnalyticInvoice/>,
        protected: true,
        requiredPermission: 'admin-invoice-analytics'
    },
    {
        path: '/admin-analytics/lead',
        element: <Index/>,
        protected: true,
        requiredPermission: 'admin-lead-analytics'
    },
    {
        path: '/admin-analytics/sales-order',
        element: <AdminAnalyticSalesOrder/>,
        protected: true,
        requiredPermission: 'admin-sales-order-analytics'
    },
    {
        path: '/admin-analytics/vendor',
        element: <AdminAnalyticVendor/>,
        protected: true,
        requiredPermission: 'admin-vendor-list-analytics'
    },
    {
        path: '/import/:module',
        element: <ImportCreate/>,
        protected: true,
        requiredPermission: 'import-product'
    },
    {
        path: '/import/:module/operation',
        element: <ImportOperation/>,
        protected: true,
        requiredPermission: 'import-product'
    },
    {
        path: '/import/:module/field-mapping',
        element: <ImportFieldMapping/>,
        protected: true,
        requiredPermission: 'import-product'
    },
    {
        path: '/role/list',
        element: <RoleIndex/>,
        protected: true,
        requiredPermission: 'read-role'
    },
    {
        path: '/role/edit/:id',
        element: <EditRole/>,
        protected: true,
        requiredPermission: 'edit-role'
    },
    {
        path: '/account/list',
        element: <ListAccount/>,
        protected: true,
        requiredPermission: 'read-account'
    },
    {
        path: '/account/preview/:id',
        element: <PreviewAccount/>,
        protected: true,
        requiredPermission: 'read-account'
    },
    {
        path: '/account/add',
        element: <AddAccount/>,
        protected: true,
        requiredPermission: 'create-account'
    },
    {
        path: '/account/edit/:id',
        element: <EditAccount/>,
        protected: true,
        requiredPermission: 'update-account'
    },
    {
        element: <Contracts/>,
        protected: true,
        requiredPermission: 'read-product',
    },
    {
        path: '/todolist',
        element: <Todolist/>,
        protected: true,
        requiredPermission: 'read-product'
    },
    {
        path: '/invoice/list',
        element: <ListInvoice/>,
        protected: true,
        requiredPermission: 'read-invoice'
    },
    //task
    {
        path: '/task/list',
        element: <ListTask/>,
        protected: true,
        requiredPermission: 'read-task'
    },
    {
        path: '/task/preview/:id',
        element: <PreviewTask/>,
        protected: true,
        requiredPermission: 'read-task'
    },
    {
        path: '/task/add',
        element: <AddTask/>,
        protected: true,
        requiredPermission: 'create-task'
    },
    {
        path: '/task/edit/:id',
        element: <EditTask/>,
        protected: true,
        requiredPermission: 'update-task'
    },
    // preview page
    {
        path: '/invoice/preview/:id',
        element: <PreviewInvoice/>,
        protected: true,
        requiredPermission: 'read-invoice'
    },
    {
        path: '/invoice/add',
        element: <AddInvoice/>,
        protected: true,
        requiredPermission: 'create-invoice'
    },
    {
        path: '/invoice/edit/:id',
        element: <EditInvoice/>,
        protected: true,
        requiredPermission: 'update-invoice'
    },
    //setting page
    {
        path: '/setting/list',
        element: <Setting/>,
        protected: true,
        requiredPermission: 'read-setting-group'
    },
    {
        path: '/setting/personal_settings',
        element: <PersonalSettings/>,
        protected: true,
        requiredPermission: 'read-setting-group'
    },
    // Users page
    {
        path: '/users/profile',
        element: <Profile/>,
        protected: true,
        requiredPermission: 'read-user'
    },
    {
        path: '/users/user-account-settings',
        element: <AccountSetting/>,
        protected: true,
        requiredPermission: 'read-user'
    },


    {
        path: '/user/edit/:id',
        element: <EditUser/>,
        // protected: true,
        // requiredPermission : 'update-task'
    },
    // preview page
    {
        path: '/user/preview/:id',
        element: <PreviewUser/>,
        // protected: true,
        // requiredPermission : 'read-invoice'
    },
    {
        path: '/user/add',
        element: <AddUser/>,
        // protected: true,
        // requiredPermission: 'create-invoice'
    },
    {
        path: '/user/edit/:id',
        element: <EditUser/>,
        // protected: true,
        // requiredPermission: 'update-invoice'
    },
    {
        path: '/user/list/',
        element: <ListUser/>,
        // protected: true,
        // requiredPermission: 'update-invoice'
    },

    // pages
    {
        path: '/pages/knowledge-base',
        element: <KnowledgeBase/>,
        protected: true,
        requiredPermission: 'read-product'
    },
    {
        path: '/pages/contact-us',
        element: <ContactForm/>,
        layout: 'blank',
        // protected: true,
        requiredPermission: 'read-product'
    },
    {
        path: '/pages/faq',
        element: <Faq/>,
        protected: true,
        requiredPermission: 'read-product'
    },
    {
        path: '/pages/coming-soon',
        element: <ComingSoon/>,
        layout: 'blank',
    },
    {
        path: '/permission-denied',
        element: <ErrorPage errorCode="403"/>

    },
    {
        path: '*',
        element: <ErrorPage errorCode="404"/>,
        layout: 'blank',
    },
    {
        path: '/pages/error500',
        element: <ErrorPage errorCode="500"/>,
        layout: 'blank',
    },
    {
        path: '/pages/error503',
        element: <ErrorPage errorCode="503"/>,
        layout: 'blank',
    },
    {
        path: '/pages/maintenance',
        element: <Maintenance/>,
        layout: 'blank',
    },
    //Authentication
    {
        path: '/auth/boxed-signin',
        element: <LoginBoxed/>,
        layout: 'blank',
    },
    {
        path: '/auth/boxed-signup',
        element: <RegisterBoxed/>,
        layout: 'blank',
    },
    {
        path: '/auth/boxed-lockscreen',
        element: <UnlockBoxed/>,
        layout: 'blank',
    },
    {
        path: '/auth/boxed-password-reset',
        element: <RecoverIdBoxed/>,
        layout: 'blank',
    },
    {
        path: '/auth/login',
        element: <LoginCover/>,
        layout: 'blank',
    },
    {
        path: '/auth/logout',
        element: <Logout/>,
        protected: true,
    },
    {
        path: '/auth/cover-register',
        element: <RegisterCover/>,
        layout: 'blank',
    },
    {
        path: '/auth/cover-lockscreen',
        element: <UnlockCover/>,
        layout: 'blank',
    },
    {
        path: '/auth/cover-password-reset',
        element: <RecoverIdCover/>,
        layout: 'blank',
    },
    {
        path: '/availability/list',
        element: <ListAvailability/>,
        protected: true,
        requiredPermission: 'read-availability'
    },
    {
        path: '/availability/preview/:id',
        element: <PreviewAvailability/>,
        protected: true,
        requiredPermission: 'read-availability'
    },
    {
        path: '/availability/add',
        element: <AddAvailability/>,
        protected: true,
        requiredPermission: 'create-availability'
    },
    {
        path: '/availability/edit/:id',
        element: <EditAvailability/>,
        protected: true,
        requiredPermission: 'update-availability'
    },

    {
        path: '/support/list',
        element: <ListSupport/>,
        protected: true,
        requiredPermission: 'read-support'
    },
    {
        path: '/support/preview/:id',
        element: <PreviewSupport/>,
        protected: true,
        requiredPermission: 'read-support'
    },
    {
        path: '/support/add',
        element: <AddSupport/>,
        protected: true,
        requiredPermission: 'create-support'
    },
    {
        path: '/support/edit/:id',
        element: <EditSupport/>,
        protected: true,
        requiredPermission: 'update-support'
    },

    {
        path: '/excess/list',
        element: <ListExcess/>,
        protected: true,
        requiredPermission: 'read-excess'
    },
    {
        path: '/excess/preview/:id',
        element: <PreviewExcess/>,
        protected: true,
        requiredPermission: 'read-excess'
    },
    {
        path: '/excess/add',
        element: <AddExcess/>,
        protected: true,
        requiredPermission: 'create-excess'
    },
    {
        path: '/excess/edit/:id',
        element: <EditExcess/>,
        protected: true,
        requiredPermission: 'update-excess'
    },
    {
        path: '/manufacturer/list',
        element: <ListManufacturer/>,
        protected: true,
        requiredPermission: 'read-manufacturer'
    },
    {
        path: '/manufacturer/preview/:id',
        element: <PreviewManufacturer/>,
        protected: true,
        requiredPermission: 'read-manufacturer'
    },
    {
        path: '/manufacturer/add',
        element: <AddManufacturer/>,
        protected: true,
        requiredPermission: 'create-manufacturer'
    },
    {
        path: '/manufacturer/edit/:id',
        element: <EditManufacturer/>,
        protected: true,
        requiredPermission: 'update-manufacturer'
    },
    {
        path: '/product/list',
        element: <ListProduct/>,
        protected: true,
        requiredPermission: 'read-product'
    },
    {
        path: '/product/preview/:id',
        element: <PreviewProduct/>,
        protected: true,
        requiredPermission: 'read-product'
    },
    {
        path: '/product/add',
        element: <AddProduct/>,
        protected: true,
        requiredPermission: 'create-product'
    },
    {
        path: '/product/edit/:id',
        element: <EditProduct/>,
        protected: true,
        requiredPermission: 'update-product'
    },
    {
        path: '/quotes/list',
        element: <ListQuotes/>,
        protected: true,
        requiredPermission: 'read-quote'
    },
    {
        path: '/quotes/preview/:id',
        element: <PreviewQuotes/>,
        protected: true,
        requiredPermission: 'read-quote'
    },
    {
        path: '/quotes/add',
        element: <AddQuotes/>,
        protected: true,
        requiredPermission: 'create-quote'
    },
    {
        path: '/quotes/edit/:id',
        element: <EditQuotes/>,
        protected: true,
        requiredPermission: 'update-quote'
    },
    {
        path: '/rfq/list',
        element: <ListRFQ/>,
        protected: true,
        requiredPermission: 'read-rfq'
    },
    {
        path: '/rfq/preview/:id',
        element: <PreviewRFQ/>,
        protected: true,
        requiredPermission: 'read-rfq'
    },
    {
        path: '/rfq/add',
        element: <AddRFQ/>,
        protected: true,
        requiredPermission: 'create-rfq'
    },
    {
        path: '/rfq/edit/:id',
        element: <EditRFQ/>,
        protected: true,
        requiredPermission: 'update-rfq'
    },
    {
        path: '/vendor_rfq/list',
        element: <ListVendorRFQ/>,
        protected: true,
        requiredPermission: 'read-vendor-rfq'
    },
    {
        path: '/vendor_rfq/preview/:id',
        element: <PreviewVendorRFQ/>,
        protected: true,
        requiredPermission: 'read-vendor-rfq'
    },
    {
        path: '/vendor_rfq/add',
        element: <AddVendorRFQ/>,
        protected: true,
        requiredPermission: 'create-vendor-rfq'
    },
    {
        path: '/vendor_rfq/edit/:id',
        element: <EditVendorRFQ/>,
        protected: true,
        requiredPermission: 'update-vendor-rfq'
    },
    {
        path: '/vendor/list',
        element: <ListVendor/>,
        protected: true,
        requiredPermission: 'read-vendor'
    },
    {
        path: '/vendor/preview/:id',
        element: <PreviewVendor/>,
        protected: true,
        requiredPermission: 'read-vendor'
    },
    {
        path: '/vendor/add',
        element: <AddVendor/>,
        protected: true,
        requiredPermission: 'create-vendor'
    },
    {
        path: '/vendor/edit/:id',
        element: <EditVendor/>,
        protected: true,
        requiredPermission: 'update-vendor'
    },
    {
        path: '/contact/list',
        element: <ListContact/>,
        protected: true,
        requiredPermission: 'read-contact'
    },
    {
        path: '/contact/preview/:id',
        element: <PreviewContact/>,
        protected: true,
        requiredPermission: 'read-contact'
    },
    {
        path: '/contact/add',
        element: <AddContact/>,
        protected: true,
        requiredPermission: 'create-contact'
    },
    {
        path: '/contact/edit/:id',
        element: <EditContact/>,
        protected: true,
        requiredPermission: 'update-contact'
    },
    {
        path: '/deal/list',
        element: <ListDeal/>,
        protected: true,
        requiredPermission: 'read-deal'
    },
    {
        path: '/deal/preview/:id',
        element: <PreviewDeal/>,
        protected: true,
        requiredPermission: 'read-deal'
    },
    {
        path: '/deal/add',
        element: <AddDeal/>,
        protected: true,
        requiredPermission: 'create-deal'
    },
    {
        path: '/deal/edit/:id',
        element: <EditDeal/>,
        protected: true,
        requiredPermission: 'update-deal'
    },
    {
        path: '/lead/list',
        element: <ListLead/>,
        protected: true,
        requiredPermission: 'read-lead'
    },
    {
        path: '/lead/preview/:id',
        element: <PreviewLead/>,
        protected: true,
        requiredPermission: 'read-lead'
    },
    {
        path: '/lead/add',
        element: <AddLead/>,
        protected: true,
        requiredPermission: 'create-lead'
    },
    {
        path: '/lead/edit/:id',
        element: <EditLead/>,
        protected: true,
        requiredPermission: 'update-lead'
    },
    {
        path: '/lead/convert/:id',
        element: <ConvertLead/>,
        protected: true,
        // requiredPermission: 'update-lead' TODO : fix here
    },
    {
        path: '/purchase/list',
        element: <ListPurchase/>,
        protected: true,
        requiredPermission: 'read-purchase-order'
    },
    {
        path: '/purchase/preview/:id',
        element: <PreviewPurchase/>,
        protected: true,
        requiredPermission: 'read-purchase-order'
    },
    {
        path: '/purchase/add',
        element: <AddPurchase/>,
        protected: true,
        requiredPermission: 'create-purchase-order'
    },
    {
        path: '/purchase/edit/:id',
        element: <EditPurchase/>,
        protected: true,
        requiredPermission: 'update-purchase-order'
    },
    {
        path: '/sales/list',
        element: <ListSales/>,
        protected: true,
        requiredPermission: 'read-sales-order'
    },
    {
        path: '/sales/preview/:id',
        element: <PreviewSales/>,
        protected: true,
        requiredPermission: 'read-sales-order'
    },
    {
        path: '/sales/add',
        element: <AddSales/>,
        protected: true,
        requiredPermission: 'create-sales-order'
    },
    {
        path: '/sales/edit/:id',
        element: <EditSales/>,
        protected: true,
        requiredPermission: 'update-sales-order'
    },

    {
        path: '/call/list',
        element: <ListCall/>,
        protected: true,
        requiredPermission: 'read-call'
    },
    {
        path: '/call/add',
        element: <AddCall/>,
        protected: true,
        requiredPermission: 'create-call'
    },
    {
        path: '/call/edit/:id',
        element: <EditCall/>,
        protected: true,
        requiredPermission: 'update-call'
    },
    {
        path: '/call/preview/:id',
        element: <PreviewCall/>,
        protected: true,
        requiredPermission: 'read-call'
    },

    {
        path: '/search',
        element: <ListSearch/>,
        protected: false,
    },

    {
        path: '/bom/list/:id',
        element: <BomExcessIndex/>,
        protected: false,
    },
    {
        path: '/bom/import/:id',
        element: <BomExcessImport/>,
        protected: false,
    },
    {
        path: '/bom/confirmation/:contactId/:id',
        element: <BomExcessConfirmation/>,
        protected: false,
    },
    {
        path: '/bom/process/:contactId/:id',
        element: <BomExcessPreProcess/>,
        protected: false,
    },
    {
        path: '/bom/complete/:contactId/:id',
        element: <BomExcessComplete/>,
        protected: false,
    },
    
    {
        path: '/excess/list/:id',
        element: <BomExcessIndex/>,
        protected: false,
    },
    {
        path: '/excess/import/:id',
        element: <BomExcessImport/>,
        protected: false,
    },
    {
        path: '/excess/confirmation/:id',
        element: <BomExcessConfirmation/>,
        protected: false,
    },
    {
        path: '/excess/process/:id',
        element: <BomExcessPreProcess/>,
        protected: false,
    },
    {
        path: '/excess/complete/:id',
        element: <BomExcessComplete/>,
        protected: false,
    },
    
    
];
export {routes};
