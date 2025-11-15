
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer style={{
          background: "seagreen",
          padding: "1rem",
          color: "black"
        }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
