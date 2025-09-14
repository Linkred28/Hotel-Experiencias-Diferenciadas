import React from 'react';
import type { Tool } from './types';

export const tools: Tool[] = [
    {
        name: 'SharePoint',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#8B5CF6]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 10H6V8h7v2zm0-4H6V4h7v2zm-2 8h-3v-2h3v2zm8-5v10c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h7l5 5zM15 8V4l4 4h-4z"/>
            </svg>
        ),
    },
    {
        name: 'Teams',
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#4F52B2]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
        ),
    },
    {
        name: 'PowerPoint/Prezi',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#D94635]" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M5 2h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm6 15v3h2v-3h-2zM4 16h16v1H4v-1z"/>
            </svg>
        ),
    },
    {
        name: 'Redes sociales',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#3B82F6]" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
        ),
    },
];