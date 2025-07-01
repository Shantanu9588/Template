import React from 'react';

const Template = React.lazy(() => import('../Layouts/Layout2'));
const Dashboard = React.lazy(() => import('../Layouts/Layout1'));



export const navigation = [
    {
        id: "_template",
        title: "Template",
        path: "/template",
        component: Template
    },
    {
        id: "_dashboard",
        title: "Dashboard",
        path: "/dashboard",
        component: Dashboard
    }
]