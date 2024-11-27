import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import unicorn from 'eslint-plugin-unicorn'; // unicorn 플러그인 추가

export default [
  { ignores: ['dist'] }, // 'dist' 폴더는 린트 검사에서 제외합니다.
  {
    files: ['**/*.{js,jsx}'], // 모든 .js, .jsx 파일에 규칙을 적용합니다.
    languageOptions: {
      ecmaVersion: 2020, // 최신 ES2020 문법을 사용합니다.
      globals: globals.browser, // 브라우저 전역 변수를 허용합니다.
      parserOptions: {
        ecmaVersion: 'latest', // 최신 ECMAScript 버전을 분석합니다.
        ecmaFeatures: { jsx: true }, // JSX 문법을 허용합니다.
        sourceType: 'module', // ES Module을 사용합니다.
      },
    },
    settings: { react: { version: '18.3' } }, // React 18.3 버전에 맞춘 린트를 설정합니다.
    plugins: {
      react, // React 린트 플러그인을 추가합니다.
      'react-hooks': reactHooks, // React Hooks 관련 린트 규칙을 추가합니다.
      'react-refresh': reactRefresh, // React Fast Refresh 관련 린트 플러그인을 추가합니다.
      unicorn, // unicorn 플러그인 추가
    },
    rules: {
      // ESLint 기본 추천 규칙을 추가합니다.
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // 외부 링크에 target="_blank"를 사용할 때 rel="noopener noreferrer"를 강제하지 않습니다.
      'react/jsx-no-target-blank': 'off',

      // 사용하지 않는 변수를 경고(warn)로 표시합니다.
      'no-unused-vars': 'warn',

      // PropTypes 사용을 강제하지 않습니다.
      'react/prop-types': 'off',

      // React Fast Refresh에서 컴포넌트를 올바르게 export했는지 확인합니다.
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // var 키워드 사용을 금지합니다.
      'no-var': 'error', // 항상 const 또는 let을 사용하도록 강제합니다.

      // const를 사용할 수 있는 경우에는 const를 우선적으로 사용하도록 권장합니다.
      'prefer-const': 'warn',

      // camelCase를 기본으로 하되, 상수 또는 디스트럭처링에서 예외를 허용합니다.
      camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],

      // 변수명은 최소 3자 이상으로 작성하되, 예외적으로 'id'와 'img' 'S'는 허용합니다.
      'id-length': ['warn', { min: 3, exceptions: ['id', 'img', 'S', 'i'] }],
      // React 컴포넌트 이름은 PascalCase로 작성해야 합니다.
      'react/jsx-pascal-case': 'error',
    },
  },
];
