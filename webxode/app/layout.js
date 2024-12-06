

import "./globals.css";
export const metadata = {
  title: "WebXode Technologies",
  description: "Webxode is Startup Providing Webservices at affordable Rate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
