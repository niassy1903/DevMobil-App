# MonApp

MonApp is a mobile application designed to provide users with a seamless experience for managing their accounts. This project includes features such as user login, password reset, and secure access to personal spaces.

## Features

- **User Login**: Users can log in to their accounts using their email and password.
- **Password Reset**: Users can reset their passwords with a simple form that includes real-time password strength feedback.
- **Responsive Design**: The application is designed to work on various devices, ensuring a smooth user experience.

## Project Structure

```
monApp
├── src
│   ├── app
│   │   ├── login
│   │   │   ├── login.page.html
│   │   │   ├── login.page.scss
│   │   │   └── login.page.ts
│   │   ├── reset-password
│   │   │   ├── reset-password.page.html
│   │   │   ├── reset-password.page.scss
│   │   │   └── reset-password.page.ts
├── assets
│   └── icon
│       └── favicon.png
├── environments
│   ├── environment.prod.ts
│   └── environment.ts
├── index.html
├── main.ts
├── polyfills.ts
├── styles.scss
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd monApp
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To run the application, use the following command:
```
ng serve
```
Then open your browser and navigate to `http://localhost:4200`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.