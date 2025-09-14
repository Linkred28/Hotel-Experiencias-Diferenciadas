import type React from 'react';

export interface Tool {
  name: string;
  description?: string;
  icon: React.ReactNode;
}