import nextPlugin from '@next/eslint-plugin-next';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  // Next.js recommended config
  ...nextPlugin.configs.recommended,
  
  // Prettier configuration
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
    },
  },
  
  // Add rules for specific file types
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      // Additional rules here
    },
  },
];