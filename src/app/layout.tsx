import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Horse Trailer Weight Calculator",
    description: "Calculate towing capacity and license requirements for horse trailers",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <main className="min-h-screen bg-white">
            <nav className="bg-blue-900 text-white p-4">
                <h1 className="text-xl font-bold">Horse Trailer Weight Calculator</h1>
            </nav>
            {children}
            <footer className="bg-gray-100 p-6 mt-8">
                <div className="max-w-4xl mx-auto">
                    <h4 className="font-bold mb-2">Disclaimer</h4>
                    <p className="text-sm text-gray-600">
                        This calculator is for informational purposes only. It is your responsibility to verify
                        all information and ensure you are compliant with local regulations when driving.
                        The information provided is not guaranteed in any way.
                    </p>
                </div>
            </footer>
        </main>
        </body>
        </html>
    );
}