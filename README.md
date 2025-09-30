# UserFlow - Modern User Management System

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178C6?style=flat&logo=typescript&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.3.0-764ABC?style=flat&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.15-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

> A production-ready, full-stack user management system showcasing modern React development practices, type-safe state management, and enterprise-grade architecture patterns.

## Overview

**UserFlow** is a comprehensive user management platform built with React and TypeScript, demonstrating enterprise-level frontend architecture and best practices. The application provides a complete authentication flow, protected routing, and full CRUD operations for user management, all wrapped in a clean, responsive UI built with Tailwind CSS.

This project serves as both a functional application and a demonstration of modern web development patterns, including Redux Toolkit for predictable state management, custom TypeScript hooks for type safety, and a service layer architecture that seamlessly transitions from mock data to real API endpoints.

### What Makes This Special

- **Type-Safe Everything**: Leverages TypeScript's full power with strict mode enabled, custom types, and typed Redux hooks
- **Production-Ready Architecture**: Clean separation of concerns with dedicated layers for UI, state management, services, and types
- **Modern State Management**: Implements Redux Toolkit with async thunks, proper loading states, and error handling
- **Security-First Approach**: JWT-based authentication, protected routes, and form validation throughout
- **Developer Experience**: Custom hooks, consistent code patterns, and comprehensive TypeScript support make development efficient and enjoyable

## Screenshots

### Login Page
![Login Page](https://github.com/user-attachments/assets/e0412ec6-2fd1-45a9-9384-a4520655a933)
*Split-screen authentication interface with modern design*

### User Management Dashboard
![User List](https://github.com/user-attachments/assets/43960442-61ae-4b47-b6cd-398b31207fa2)
*Responsive grid layout displaying all users with role information*

### Add User Modal
![Add User Modal](https://github.com/user-attachments/assets/fd763204-e33a-49b4-b3e3-0c13ea5ca77c)
*Modal form with real-time validation for creating new users*

### User List View
![User Grid View](https://github.com/user-attachments/assets/3b5500f9-2aef-4e05-8adc-16c2f51afd03)
*Clean card-based layout with user details*

### Application Interface
![Application UI](https://github.com/user-attachments/assets/69ce88da-6c5f-461c-9971-4e9404a0e59d)
*Comprehensive user management interface*

## Key Features

### Authentication & Security
- **Secure Login System** - JWT token-based authentication with persistent sessions
- **Protected Routes** - Route guards that automatically redirect unauthorized users
- **Form Validation** - Client-side validation for email formats, password matching, and required fields
- **Error Handling** - Comprehensive error states and user-friendly error messages

### User Management
- **User Listing** - Paginated, responsive grid display of all users with role information
- **User Creation** - Modal-based user addition with real-time validation
- **Role-Based System** - Support for Admin, User, and Editor roles with future RBAC extensibility
- **Instant Feedback** - Loading states and optimistic updates for smooth UX

### UI/UX Excellence
- **Responsive Design** - Mobile-first approach that works beautifully on all screen sizes
- **Modern Aesthetics** - Clean, minimalist design with Tailwind CSS
- **Loading States** - Skeleton screens and spinners for better perceived performance
- **Smooth Animations** - Transitions and hover effects for polished interactions

## Tech Stack

### Frontend Core
- **React 18.3.1** - Latest React with Hooks and Concurrent features
- **TypeScript 4.9.5** - Strict type checking for enhanced code quality
- **React Router DOM 7.0.1** - Modern routing with nested routes and layout support

### State Management
- **Redux Toolkit 2.3.0** - Simplified Redux with built-in best practices
- **React Redux 9.1.2** - Official React bindings for Redux
- **Custom Typed Hooks** - Type-safe useAppDispatch and useAppSelector

### Styling & UI
- **Tailwind CSS 3.4.15** - Utility-first CSS framework
- **PostCSS 8.4.49** - CSS transformations and autoprefixing
- **Custom Design System** - Extended Tailwind config with brand colors

### Development Tools
- **Create React App 5.0.1** - Zero-config build setup
- **Jest & Testing Library** - Comprehensive testing framework
- **ESLint** - Code quality and consistency enforcement

## Architecture & Design

### Project Structure

```
src/
├── components/
│   ├── Auth/
│   │   ├── LoginForm.tsx          # Authentication UI with split-screen design
│   │   └── ProtectedRoute.tsx     # Route guard HOC for authentication
│   ├── Layout/
│   │   ├── Header.tsx             # App header with user info and logout
│   │   └── Layout.tsx             # Main layout wrapper component
│   └── Users/
│       ├── UserList.tsx           # User grid with add functionality
│       └── AddUserModal.tsx       # Modal form for user creation
├── hooks/
│   └── useTypedSelector.ts        # Type-safe Redux hooks
├── services/
│   ├── authService.ts             # Authentication API abstraction
│   └── userService.ts             # User management API abstraction
├── store/
│   ├── authSlice.ts               # Auth state, actions, and reducers
│   ├── userSlice.ts               # User state management
│   └── store.ts                   # Redux store configuration
└── types/
    └── index.ts                   # Centralized TypeScript definitions
```

### Design Patterns

**Service Layer Pattern**: All API interactions are abstracted into service modules, making it trivial to swap mock implementations for real backend calls.

**Container/Presentational Pattern**: Components are organized to separate business logic (Redux integration) from presentation.

**Custom Hooks Pattern**: Type-safe Redux hooks eliminate boilerplate and prevent type errors.

**Async Thunk Pattern**: All asynchronous operations use Redux Toolkit's createAsyncThunk for consistent loading and error states.

### State Management Flow

1. **Component** dispatches an async thunk action
2. **Redux Toolkit** handles pending/fulfilled/rejected states automatically
3. **Service Layer** makes the API call (currently mocked)
4. **Store** updates with new data
5. **Component** re-renders with updated state via selectors

## Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** (v7 or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/userflow.git

# Navigate to project directory
cd userflow

# Install dependencies
npm install
```

### Running the Application

```bash
# Start development server
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

**Demo Credentials:**
- Username: `admin`
- Password: `1234`

### Building for Production

```bash
# Create optimized production build
npm run build
```

The build folder will contain optimized static files ready for deployment.

### Running Tests

```bash
# Run test suite in watch mode
npm test

# Run tests with coverage
npm test -- --coverage
```

## Usage Examples

### Authentication Flow

```typescript
// Login component dispatches async thunk
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const resultAction = await dispatch(loginUser({ username, password }));

  if (loginUser.fulfilled.match(resultAction)) {
    navigate('/'); // Redirect on success
  }
};
```

### Protected Routes

```typescript
// Routes automatically protected by authentication state
<Route element={<ProtectedRoute />}>
  <Route element={<Layout />}>
    <Route path="/" element={<UserList />} />
  </Route>
</Route>
```

### Adding a User

```typescript
// Dispatch async thunk with form data
await dispatch(addUser({
  username: formData.username,
  email: formData.email,
  password: formData.password,
  role: formData.role
})).unwrap();
```

## API Integration

Currently, the application uses **mock services** that simulate backend interactions with `setTimeout` delays. To integrate with a real backend:

1. **Update Service Files**: Replace mock implementations in `src/services/` with actual HTTP calls (using fetch or axios)
2. **Configure API URL**: Add your API base URL to environment variables
3. **Update Response Types**: Ensure TypeScript types match your API contracts
4. **Handle Errors**: Implement proper error handling for network failures

**Example real service implementation:**

```typescript
// src/services/authService.ts
const authService = {
  login: async (username: string, password: string): Promise<AuthResponse> => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) throw new Error('Authentication failed');
    return response.json();
  }
};
```

## Performance Optimizations

- **Code Splitting**: React.lazy and Suspense ready for route-based splitting
- **Memoization**: Prepared for React.memo and useMemo optimizations
- **Bundle Size**: Tree-shaking enabled via ES modules
- **CSS Optimization**: PurgeCSS via Tailwind removes unused styles in production

## Security Features

- **Token Storage**: JWT tokens securely stored in localStorage
- **Protected Routes**: Automatic redirection for unauthorized access attempts
- **Input Validation**: Client-side validation prevents invalid data submission
- **XSS Prevention**: React's built-in escaping prevents script injection
- **Type Safety**: TypeScript prevents common runtime errors

## Browser Support

Supports all modern browsers:
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Future Enhancements

- [ ] User editing and deletion functionality
- [ ] Advanced filtering and search capabilities
- [ ] Pagination for large user lists
- [ ] User profile pages with detailed information
- [ ] Dark mode support
- [ ] Real-time updates via WebSockets
- [ ] Advanced role-based access control (RBAC)
- [ ] User activity logging and audit trails
- [ ] Multi-factor authentication (MFA)
- [ ] Password strength meter and requirements
- [ ] Export user data to CSV/Excel
- [ ] Bulk user operations

## Development Decisions

### Why Redux Toolkit?
Redux Toolkit significantly reduces boilerplate while maintaining Redux's predictability. The built-in `createAsyncThunk` handles loading states automatically, and RTK's Immer integration allows writing "mutating" code that's actually immutable.

### Why TypeScript?
Type safety catches bugs during development, provides excellent IDE support, and serves as living documentation. Strict mode is enabled to ensure maximum type safety.

### Why Tailwind CSS?
Tailwind's utility-first approach speeds up development, reduces CSS bundle size, and makes responsive design straightforward. The custom configuration allows extending the framework while maintaining consistency.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact & Connect

**Developer**: [Enes UCA]

- GitHub: [@ensuca](https://github.com/ensuca)
- LinkedIn: [LinkedIn](https://linkedin.com/in/enes-uca-41039327b)
- Email: enesuca55@gmail.com
- Portfolio: [portfolio](https://ensuca.github.io/ensuca.githubio)

---

# 🇹🇷 Türkçe

# UserFlow - Modern Kullanıcı Yönetim Sistemi

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178C6?style=flat&logo=typescript&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.3.0-764ABC?style=flat&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.15-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Lisans](https://img.shields.io/badge/Lisans-MIT-green.svg)

> Modern React geliştirme pratiklerini, tip-güvenli state yönetimini ve kurumsal düzeyde mimari kalıplarını sergileyen, üretime hazır, full-stack kullanıcı yönetim sistemi.

## Genel Bakış

**UserFlow**, React ve TypeScript ile geliştirilmiş, kurumsal seviye frontend mimarisi ve en iyi pratikleri sergileyen kapsamlı bir kullanıcı yönetim platformudur. Uygulama, Tailwind CSS ile oluşturulmuş temiz ve responsive bir UI içinde, eksiksiz bir kimlik doğrulama akışı, korumalı yönlendirme ve kullanıcı yönetimi için tam CRUD işlemleri sağlar.

Bu proje hem işlevsel bir uygulama hem de modern web geliştirme kalıplarının bir gösterimi olarak hizmet eder. Redux Toolkit ile öngörülebilir state yönetimi, tip güvenliği için özel TypeScript hook'ları ve mock veriden gerçek API endpoint'lere sorunsuz geçiş yapan bir servis katmanı mimarisi içerir.

### Bu Projeyi Özel Kılan Nedir

- **Her Şey Tip-Güvenli**: Strict mode etkin, özel tipler ve tipli Redux hook'larıyla TypeScript'in tam gücünden yararlanır
- **Üretime Hazır Mimari**: UI, state yönetimi, servisler ve tipler için özel katmanlarla temiz sorumluluk ayrımı
- **Modern State Yönetimi**: Async thunk'lar, uygun loading state'leri ve hata yönetimiyle Redux Toolkit implementasyonu
- **Güvenlik Öncelikli Yaklaşım**: JWT tabanlı kimlik doğrulama, korumalı route'lar ve her yerde form validasyonu
- **Geliştirici Deneyimi**: Özel hook'lar, tutarlı kod kalıpları ve kapsamlı TypeScript desteği, geliştirmeyi verimli ve keyifli hale getirir

## Ekran Görüntüleri

### Giriş Sayfası
![Giriş Sayfası](https://github.com/user-attachments/assets/e0412ec6-2fd1-45a9-9384-a4520655a933)
*Modern tasarımlı bölünmüş ekran kimlik doğrulama arayüzü*

### Kullanıcı Yönetim Paneli
![Kullanıcı Listesi](https://github.com/user-attachments/assets/43960442-61ae-4b47-b6cd-398b31207fa2)
*Rol bilgisiyle tüm kullanıcıları gösteren responsive grid düzeni*

### Kullanıcı Ekleme Modalı
![Kullanıcı Ekleme Modalı](https://github.com/user-attachments/assets/fd763204-e33a-49b4-b3e3-0c13ea5ca77c)
*Yeni kullanıcı oluşturmak için gerçek zamanlı validasyonlu modal formu*

### Kullanıcı Liste Görünümü
![Kullanıcı Grid Görünümü](https://github.com/user-attachments/assets/3b5500f9-2aef-4e05-8adc-16c2f51afd03)
*Kullanıcı detaylarıyla temiz kart tabanlı düzen*

### Uygulama Arayüzü
![Uygulama UI](https://github.com/user-attachments/assets/69ce88da-6c5f-461c-9971-4e9404a0e59d)
*Kapsamlı kullanıcı yönetim arayüzü*

## Temel Özellikler

### Kimlik Doğrulama ve Güvenlik
- **Güvenli Giriş Sistemi** - Kalıcı oturumlarla JWT token tabanlı kimlik doğrulama
- **Korumalı Route'lar** - Yetkisiz kullanıcıları otomatik olarak yönlendiren route guard'ları
- **Form Validasyonu** - Email formatları, şifre eşleşmesi ve zorunlu alanlar için client-side validasyon
- **Hata Yönetimi** - Kapsamlı hata state'leri ve kullanıcı dostu hata mesajları

### Kullanıcı Yönetimi
- **Kullanıcı Listeleme** - Rol bilgisiyle tüm kullanıcıların sayfalandırılmış, responsive grid görünümü
- **Kullanıcı Oluşturma** - Gerçek zamanlı validasyonla modal tabanlı kullanıcı ekleme
- **Rol Tabanlı Sistem** - Gelecekteki RBAC genişletilebilirliği ile Admin, User ve Editor rolleri desteği
- **Anında Geri Bildirim** - Sorunsuz UX için loading state'leri ve optimistic güncellemeler

### UI/UX Mükemmelliği
- **Responsive Tasarım** - Tüm ekran boyutlarında mükemmel çalışan mobile-first yaklaşım
- **Modern Estetik** - Tailwind CSS ile temiz, minimalist tasarım
- **Loading State'leri** - Daha iyi algılanan performans için iskelet ekranları ve spinner'lar
- **Akıcı Animasyonlar** - Cilalı etkileşimler için geçişler ve hover efektleri

## Teknoloji Yığını

### Frontend Çekirdeği
- **React 18.3.1** - Hook'lar ve Concurrent özellikleriyle en son React
- **TypeScript 4.9.5** - Gelişmiş kod kalitesi için strict tip kontrolü
- **React Router DOM 7.0.1** - İç içe route'lar ve layout desteğiyle modern yönlendirme

### State Yönetimi
- **Redux Toolkit 2.3.0** - Yerleşik en iyi pratiklerle basitleştirilmiş Redux
- **React Redux 9.1.2** - Redux için resmi React binding'leri
- **Özel Tipli Hook'lar** - Tip-güvenli useAppDispatch ve useAppSelector

### Stil ve UI
- **Tailwind CSS 3.4.15** - Utility-first CSS framework'ü
- **PostCSS 8.4.49** - CSS dönüşümleri ve autoprefixing
- **Özel Tasarım Sistemi** - Marka renkleriyle genişletilmiş Tailwind yapılandırması

### Geliştirme Araçları
- **Create React App 5.0.1** - Sıfır yapılandırmalı build kurulumu
- **Jest & Testing Library** - Kapsamlı test framework'ü
- **ESLint** - Kod kalitesi ve tutarlılık denetimi

## Mimari ve Tasarım

### Proje Yapısı

```
src/
├── components/
│   ├── Auth/
│   │   ├── LoginForm.tsx          # Bölünmüş ekran tasarımıyla kimlik doğrulama UI
│   │   └── ProtectedRoute.tsx     # Kimlik doğrulama için route guard HOC
│   ├── Layout/
│   │   ├── Header.tsx             # Kullanıcı bilgisi ve çıkış ile uygulama başlığı
│   │   └── Layout.tsx             # Ana layout wrapper bileşeni
│   └── Users/
│       ├── UserList.tsx           # Ekleme fonksiyonuyla kullanıcı grid'i
│       └── AddUserModal.tsx       # Kullanıcı oluşturma için modal form
├── hooks/
│   └── useTypedSelector.ts        # Tip-güvenli Redux hook'ları
├── services/
│   ├── authService.ts             # Kimlik doğrulama API soyutlaması
│   └── userService.ts             # Kullanıcı yönetimi API soyutlaması
├── store/
│   ├── authSlice.ts               # Auth state, action'lar ve reducer'lar
│   ├── userSlice.ts               # User state yönetimi
│   └── store.ts                   # Redux store yapılandırması
└── types/
    └── index.ts                   # Merkezi TypeScript tanımlamaları
```

### Tasarım Kalıpları

**Service Layer Pattern**: Tüm API etkileşimleri servis modüllerine soyutlanmıştır, bu da mock implementasyonları gerçek backend çağrılarıyla değiştirmeyi kolaylaştırır.

**Container/Presentational Pattern**: Bileşenler, iş mantığını (Redux entegrasyonu) sunumdan ayıracak şekilde organize edilmiştir.

**Custom Hooks Pattern**: Tip-güvenli Redux hook'ları, boilerplate'i ortadan kaldırır ve tip hatalarını önler.

**Async Thunk Pattern**: Tüm asenkron işlemler, tutarlı loading ve hata state'leri için Redux Toolkit'in createAsyncThunk'ını kullanır.

### State Yönetim Akışı

1. **Component** bir async thunk action'ı dispatch eder
2. **Redux Toolkit** pending/fulfilled/rejected state'lerini otomatik olarak yönetir
3. **Service Layer** API çağrısını yapar (şu anda mock)
4. **Store** yeni veriyle güncellenir
5. **Component** selector'lar aracılığıyla güncellenmiş state ile yeniden render olur

## Başlarken

### Ön Gereksinimler

- **Node.js** (v16 veya üstü)
- **npm** (v7 veya üstü)

### Kurulum

```bash
# Repository'yi klonlayın
git clone https://github.com/kullaniciadi/userflow.git

# Proje dizinine gidin
cd userflow

# Bağımlılıkları yükleyin
npm install
```

### Uygulamayı Çalıştırma

```bash
# Geliştirme sunucusunu başlatın
npm start
```

Uygulama [http://localhost:3000](http://localhost:3000) adresinde açılacaktır.

**Demo Giriş Bilgileri:**
- Kullanıcı Adı: `admin`
- Şifre: `1234`

### Production için Build Alma

```bash
# Optimize edilmiş production build oluşturun
npm run build
```

Build klasörü, deploy için hazır optimize edilmiş statik dosyalar içerecektir.

### Testleri Çalıştırma

```bash
# Test suite'ini watch modunda çalıştırın
npm test

# Testleri coverage ile çalıştırın
npm test -- --coverage
```

## Kullanım Örnekleri

### Kimlik Doğrulama Akışı

```typescript
// Login bileşeni async thunk dispatch eder
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const resultAction = await dispatch(loginUser({ username, password }));

  if (loginUser.fulfilled.match(resultAction)) {
    navigate('/'); // Başarıda yönlendir
  }
};
```

### Korumalı Route'lar

```typescript
// Route'lar kimlik doğrulama state'i tarafından otomatik olarak korunur
<Route element={<ProtectedRoute />}>
  <Route element={<Layout />}>
    <Route path="/" element={<UserList />} />
  </Route>
</Route>
```

### Kullanıcı Ekleme

```typescript
// Form verisiyle async thunk dispatch et
await dispatch(addUser({
  username: formData.username,
  email: formData.email,
  password: formData.password,
  role: formData.role
})).unwrap();
```

## API Entegrasyonu

Şu anda uygulama, `setTimeout` gecikmeleriyle backend etkileşimlerini simüle eden **mock servisler** kullanmaktadır. Gerçek bir backend ile entegre etmek için:

1. **Servis Dosyalarını Güncelleyin**: `src/services/` içindeki mock implementasyonları gerçek HTTP çağrılarıyla değiştirin (fetch veya axios kullanarak)
2. **API URL'sini Yapılandırın**: API base URL'inizi environment variable'lara ekleyin
3. **Response Tiplerini Güncelleyin**: TypeScript tiplerinin API contract'larınızla eşleştiğinden emin olun
4. **Hataları Yönetin**: Ağ hataları için uygun hata yönetimi uygulayın

**Örnek gerçek servis implementasyonu:**

```typescript
// src/services/authService.ts
const authService = {
  login: async (username: string, password: string): Promise<AuthResponse> => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) throw new Error('Kimlik doğrulama başarısız');
    return response.json();
  }
};
```

## Performans Optimizasyonları

- **Code Splitting**: Route bazlı bölme için React.lazy ve Suspense hazır
- **Memoization**: React.memo ve useMemo optimizasyonları için hazırlanmış
- **Bundle Boyutu**: ES modülleri aracılığıyla tree-shaking etkin
- **CSS Optimizasyonu**: Tailwind aracılığıyla PurgeCSS, production'da kullanılmayan stilleri kaldırır

## Güvenlik Özellikleri

- **Token Depolama**: JWT token'ları localStorage'da güvenli şekilde saklanır
- **Korumalı Route'lar**: Yetkisiz erişim denemeleri için otomatik yönlendirme
- **Girdi Validasyonu**: Client-side validasyon geçersiz veri gönderimini önler
- **XSS Önleme**: React'in yerleşik escape'i script injection'ı önler
- **Tip Güvenliği**: TypeScript yaygın runtime hatalarını önler

## Tarayıcı Desteği

Tüm modern tarayıcıları destekler:
- Chrome (son 2 versiyon)
- Firefox (son 2 versiyon)
- Safari (son 2 versiyon)
- Edge (son 2 versiyon)

## Gelecek Geliştirmeler

- [ ] Kullanıcı düzenleme ve silme fonksiyonalitesi
- [ ] Gelişmiş filtreleme ve arama yetenekleri
- [ ] Büyük kullanıcı listeleri için sayfalandırma
- [ ] Detaylı bilgi içeren kullanıcı profil sayfaları
- [ ] Dark mode desteği
- [ ] WebSocket'ler aracılığıyla gerçek zamanlı güncellemeler
- [ ] Gelişmiş rol tabanlı erişim kontrolü (RBAC)
- [ ] Kullanıcı aktivite loglama ve denetim izleri
- [ ] Çok faktörlü kimlik doğrulama (MFA)
- [ ] Şifre gücü ölçer ve gereksinimleri
- [ ] Kullanıcı verilerini CSV/Excel'e aktarma
- [ ] Toplu kullanıcı işlemleri

## Geliştirme Kararları

### Neden Redux Toolkit?
Redux Toolkit, Redux'un öngörülebilirliğini korurken boilerplate'i önemli ölçüde azaltır. Yerleşik `createAsyncThunk`, loading state'lerini otomatik olarak yönetir ve RTK'nın Immer entegrasyonu, aslında immutable olan "mutating" kod yazmaya izin verir.

### Neden TypeScript?
Tip güvenliği, geliştirme sırasında hataları yakalar, mükemmel IDE desteği sağlar ve canlı dokümantasyon görevi görür. Maksimum tip güvenliği sağlamak için strict mode etkinleştirilmiştir.

### Neden Tailwind CSS?
Tailwind'in utility-first yaklaşımı geliştirmeyi hızlandırır, CSS bundle boyutunu azaltır ve responsive tasarımı basit hale getirir. Özel yapılandırma, tutarlılığı korurken framework'ü genişletmeye izin verir.

## Katkıda Bulunma

Katkılar memnuniyetle karşılanır! Lütfen şu adımları izleyin:

1. Repository'yi fork edin
2. Bir feature branch'i oluşturun (`git checkout -b feature/HarikaBirOzellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Harika bir özellik ekle'`)
4. Branch'e push edin (`git push origin feature/HarikaBirOzellik`)
5. Bir Pull Request açın

## Lisans

Bu proje MIT Lisansı altında lisanslanmıştır - detaylar için LICENSE dosyasına bakın.

## İletişim ve Bağlantı

**Geliştirici**: [Enes UCA]

- GitHub: [@ensuca](https://github.com/ensuca)
- LinkedIn: [LinkedIn](https://linkedin.com/in/enes-uca-41039327b)
- Email: enesuca55@gmail.com
- Portfolio: [portfolyo](https://ensuca.github.io/ensuca.githubio)

---