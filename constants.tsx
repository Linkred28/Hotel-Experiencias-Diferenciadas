
import React from 'react';
import type { Tool } from './types';

export const tools: Tool[] = [
    {
        name: 'SharePoint',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="#0078D4">
                <path d="M4.5 4.5H12v15H4.5A1.5 1.5 0 013 18V6a1.5 1.5 0 011.5-1.5z" opacity=".5"/>
                <path d="M13.5 4.5H19a1.5 1.5 0 011.5 1.5v12a1.5 1.5 0 01-1.5 1.5h-5.5V4.5zM12 9.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" fill="#0078D4"/>
                <path d="M12 9.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" fill="white" opacity=".5"/>
                <path d="M10.125 6a1.875 1.875 0 113.75 0 1.875 1.875 0 01-3.75 0z" fill="white"/>
            </svg>
        ),
    },
    {
        name: 'Teams',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" viewBox="0 0 24 24" fill="#6264A7">
                 <path d="M8 8a3 3 0 100-6 3 3 0 000 6zm8 0a3 3 0 100-6 3 3 0 000 6zM8 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm8 0c-1.33 0-2.58.32-3.72.88A5.99 5.99 0 0116 16v2h8v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
        ),
    },
    {
        name: 'Forms',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="#008272">
                <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-8v-2h8v2zm0-4h-8v-2h8v2zm0-4h-8V7h8v2z" />
            </svg>
        ),
    },
    {
        name: 'PowerPoint/Prezi',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="#D35400">
                <path d="M4 3h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2zm1 14h14V7H5v10zM7 9h10v2H7V9zm0 4h6v2H7v-2z" />
            </svg>
        ),
    },
    {
        name: 'Power BI',
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="#F2C811">
                <path d="M6 12h4v8H6zM11 4h4v16h-4zm5 12h4v4h-4z" />
            </svg>
        ),
    },
];
