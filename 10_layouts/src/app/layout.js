import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{
          background: "lightblue",
          padding: "1rem",
          color: "black"
        }}>
          <p>Header</p>
        </header>
        {children}
        <footer style={{
          background: "ghostwhite",
          padding: "1rem",
          color: "black"
        }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
