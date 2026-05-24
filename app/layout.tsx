import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slack Feedback Router – Auto-route customer feedback to product teams",
  description: "Monitors customer Slack channels and automatically routes feature requests and bugs to the right product team channels using AI classification."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2848f382-3ab2-46c9-8e1d-047119b973a5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
