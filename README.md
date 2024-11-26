🇹🇷 Türkçe Açıklama
1. Proje Genel Bakış
Bu proje, modern web teknolojileri kullanılarak geliştirilmiş bir kullanıcı yönetim sistemidir. Temel amacı, güvenli ve kullanıcı dostu bir şekilde kullanıcı işlemlerini yönetmektir.
2. Teknoloji Yığını

Frontend: React (TypeScript)
State Yönetimi: Redux Toolkit
Routing: React Router
Stil: Tailwind CSS
Mimari: Modern, modüler ve genişletilebilir

3. Proje Özellikleri
3.1 Kimlik Doğrulama (Authentication)

Güvenli giriş sistemi
JWT token bazlı kimlik doğrulama
Korumalı rotalar
Hata yönetimi

3.2 Kullanıcı Yönetimi

Kullanıcı listeleme
Yeni kullanıcı ekleme
Farklı kullanıcı rolleri (Admin, User, Editor)
Modal tabanlı kullanıcı ekleme ekranı

4. Mimari Detayları
4.1 Dizin Yapısı
src/
├── components/
│   ├── Auth/           # Kimlik doğrulama bileşenleri
│   ├── Layout/         # Sayfa düzeni bileşenleri
│   └── Users/          # Kullanıcı işlemleri bileşenleri
├── hooks/              # Özel React hookları
├── services/           # API ve servis katmanı
├── store/              # Redux state yönetimi
└── types/              # TypeScript tipleri

4.2 Temel Akışlar

Kullanıcı Girişi
Kullanıcı Listeleme
Yeni Kullanıcı Ekleme
Çıkış Yapma

5. Güvenlik Özellikleri

Korumalı rotalar
Form validasyonları
Giriş denemelerinin yönetimi
Rol bazlı erişim kontrolü

6. Stil ve Kullanılabilirlik

Responsive tasarım
Tailwind CSS ile modern görünüm
Kullanıcı dostu arayüz
Dark/Light tema desteği

🇺🇸 English Description
1. Project Overview
This is a comprehensive user management system developed using modern web technologies. Its primary purpose is to manage user operations securely and user-friendly.
2. Technology Stack

Frontend: React (TypeScript)
State Management: Redux Toolkit
Routing: React Router
Styling: Tailwind CSS
Architecture: Modern, modular, and extensible

3. Project Features
3.1 Authentication

Secure login system
JWT token-based authentication
Protected routes
Error management

3.2 User Management

User listing
New user addition
Different user roles (Admin, User, Editor)
Modal-based user addition screen

4. Architectural Details
4.1 Directory Structure
src/
├── components/
│   ├── Auth/           # Authentication components
│   ├── Layout/         # Page layout components
│   └── Users/          # User operation components
├── hooks/              # Custom React hooks
├── services/           # API and service layer
├── store/              # Redux state management
└── types/              # TypeScript types

4.2 Core Flows

User Login
User Listing
Add New User
Logout

5. Security Features

Protected routes
Form validations
Login attempt management
Role-based access control

6. Style and Usability

Responsive design
Modern look with Tailwind CSS
User-friendly interface
Dark/Light theme support

7. Mock Service Explanation
In this project, we're using mock services to simulate backend interactions. This means:

Login uses hardcoded credentials (username: 'admin', password: '1234')
Users are stored in memory
Simulated API calls with setTimeout

8. How to Run

Clone the repository
Install dependencies: npm install
Start the development server: npm start

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
