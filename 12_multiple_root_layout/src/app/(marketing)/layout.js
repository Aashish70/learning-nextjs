
export default function MarketingRootLayout({ children }) {
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
