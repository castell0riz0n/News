
const Home = {
    text: 'Home',
    link: '/admin/home',
    icon: 'icon-home'
};

const Dashboard = {
    text: 'Dashboard',
    link: '/admin/dashboard',
    icon: 'icon-speedometer',
    submenu: [
        {
            text: 'Dashbord v1',
            link: '/admin/dashboard/v1'
        },
        {
            text: 'Dashbord v2',
            link: '/admin/dashboard/v2'
        },
        {
            text: 'Dashbord v3',
            link: '/admin/dashboard/v3'
        }
    ]
};

const Widgets = {
    text: 'Widgets',
    link: '/admin/widgets',
    icon: 'icon-grid'
};

const Elements = {
    text: 'Elements',
    link: '/admin/elements',
    icon: 'icon-chemistry',
    submenu: [
        {
            text: 'Buttons',
            link: '/admin/elements/buttons'
        },
        {
            text: 'Interaction',
            link: '/admin/elements/interaction'
        },
        {
            text: 'Notification',
            link: '/admin/elements/notification'
        },
        {
            text: 'SweetAlert',
            link: '/admin/elements/sweetalert'
        },
        {
            text: 'Spinners',
            link: '/admin/elements/spinners'
        },
        {
            text: 'Dropdown',
            link: '/admin/elements/dropdown'
        },
        {
            text: 'Nav Tree',
            link: '/admin/elements/navtree'
        },
        {
            text: 'Sortable',
            link: '/admin/elements/sortable'
        },
        {
            text: 'Grid',
            link: '/admin/elements/grid'
        },
        {
            text: 'Grid Masonry',
            link: '/admin/elements/gridmasonry'
        },
        {
            text: 'Typography',
            link: '/admin/elements/typography'
        },
        {
            text: 'Font Icons',
            link: '/admin/elements/iconsfont'
        },
        {
            text: 'Weahter Icons',
            link: '/admin/elements/iconsweather'
        },
        {
            text: 'Colors',
            link: '/admin/elements/colors'
        },
        {
            text: 'Infinite Scroll',
            link: '/admin/elements/infinitescroll'
        }
    ]
};

const Forms = {
    text: 'Forms',
    link: '/admin/forms',
    icon: 'icon-note',
    submenu: [
        {
            text: 'Standard',
            link: '/admin/forms/standard'
        },
        {
            text: 'Extended',
            link: '/admin/forms/extended'
        },
        {
            text: 'Validation',
            link: '/admin/forms/validation'
        },
        {
            text: 'Upload',
            link: '/admin/forms/upload'
        },
        {
            text: 'Image Crop',
            link: '/admin/forms/cropper'
        }
    ]
};

const Charts = {
    text: 'Charts',
    link: '/admin/charts',
    icon: 'icon-graph',
    submenu: [
        {
            text: 'Flot',
            link: '/admin/charts/flot'
        },
        {
            text: 'Radial',
            link: '/admin/charts/radial'
        },
        {
            text: 'ChartJS',
            link: '/admin/charts/chartjs'
        }
    ]
};

const Tables = {
    text: 'Tables',
    link: '/admin/tables',
    icon: 'icon-grid',
    submenu: [
        {
            text: 'Standard',
            link: '/admin/tables/standard'
        },
        {
            text: 'Extended',
            link: '/admin/tables/extended'
        },
        {
            text: 'Data-Tables',
            link: '/admin/tables/datatable'
        },
        {
            text: 'Angular Grid',
            link: '/admin/tables/aggrid'
        },
        {
            text: 'NGxDatatables',
            link: '/admin/tables/ngxdatatable'
        }
    ]
};

const Maps = {
    text: 'Maps',
    link: '/admin/maps',
    icon: 'icon-map',
    submenu: [
        {
            text: 'Google',
            link: '/admin/maps/google'
        },
        {
            text: 'Vector',
            link: '/admin/maps/vector'
        }
    ]
};

const Pages = {
    text: 'Pages',
    link: '/admin/pages',
    icon: 'icon-doc',
    submenu: [
        {
            text: 'Login',
            link: '/admin/login'
        },
        {
            text: 'Register',
            link: '/admin/register'
        },
        {
            text: 'Recover',
            link: '/admin/recover'
        },
        {
            text: 'Lock',
            link: '/admin/lock'
        },
        {
            text: '404',
            link: '/admin/404'
        },
        {
            text: '500',
            link: '/admin/500'
        },
        {
            text: 'Maintenance',
            link: '/admin/maintenance'
        }
    ]
};

const Blog = {
    text: 'Blog',
    link: '/admin/blog',
    icon: 'icon-notebook',
    submenu: [
        {
            text: 'List',
            link: '/admin/blog/list'
        },
        {
            text: 'Post',
            link: '/admin/blog/post'
        },
        {
            text: 'Articles',
            link: '/admin/blog/articles'
        },
        {
            text: 'Article View',
            link: '/admin/blog/articleview'
        }
    ]
}

const Ecommerce = {
    text: 'Ecommerce',
    link: '/admin/ecommerce',
    icon: 'icon-basket-loaded',
    submenu: [
        {
            text: 'Orders',
            link: '/admin/ecommerce/orders'
        },
        {
            text: 'Order View',
            link: '/admin/ecommerce/orderview'
        },
        {
            text: 'Products',
            link: '/admin/ecommerce/products'
        },
        {
            text: 'Product View',
            link: '/admin/ecommerce/productview'
        },
        {
            text: 'Checkout',
            link: '/admin/ecommerce/checkout'
        }
    ]
}

const Extras = {
    text: 'Extras',
    link: '/admin/extras',
    icon: 'icon-cup',
    submenu: [
        {
            text: 'Contacts',
            link: '/admin/extras/contacts'
        },
        {
            text: 'Contact details',
            link: '/admin/extras/contactdetails'
        },
        {
            text: 'Projects',
            link: '/admin/extras/projects'
        },
        {
            text: 'Projects details',
            link: '/admin/extras/projectsdetails'
        },
        {
            text: 'Team Viewer',
            link: '/admin/extras/teamviewer'
        },
        {
            text: 'Social Board',
            link: '/admin/extras/socialboard'
        },
        {
            text: 'Vote links',
            link: '/admin/extras/votelinks'
        },
        {
            text: 'Bug tracker',
            link: '/admin/extras/bugtracker'
        },
        {
            text: 'Faq',
            link: '/admin/extras/faq'
        },
        {
            text: 'Help center',
            link: '/admin/extras/helpcenter'
        },
        {
            text: 'Followers',
            link: '/admin/extras/followers'
        },
        {
            text: 'Settings',
            link: '/admin/extras/settings'
        },
        {
            text: 'Plans',
            link: '/admin/extras/plans'
        },
        {
            text: 'File manager',
            link: '/admin/extras/filemanager'
        },
        {
            text: 'Forum',
            link: '/admin/extras/forum'
        },
        {
            text: 'Mailbox',
            link: '/admin/extras/mailbox'
        },
        {
            text: 'Timeline',
            link: '/admin/extras/timeline'
        },
        {
            text: 'Calendar',
            link: '/admin/extras/calendar'
        },
        {
            text: 'Invoice',
            link: '/admin/extras/invoice'
        },
        {
            text: 'Search',
            link: '/admin/extras/search'
        },
        {
            text: 'Todo list',
            link: '/admin/extras/todolist'
        },
        {
            text: 'Profile',
            link: '/admin/extras/profile'
        },
        {
            text: 'Code editor',
            link: '/admin/extras/codeeditor'
        }
    ]
}


const headingMain = {
    text: 'Main Navigation',
    heading: true
};

const headingComponents = {
    text: 'Components',
    heading: true
};

const headingMore = {
    text: 'More',
    heading: true
};

export const menu = [
    headingMain,
    Home,
    Dashboard,
    Widgets,
    headingComponents,
    Elements,
    Forms,
    Charts,
    Tables,
    Maps,
    headingMore,
    Pages,
    Blog,
    Ecommerce,
    Extras
];
