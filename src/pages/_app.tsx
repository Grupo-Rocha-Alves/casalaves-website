import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { AuthProvider } from '../context/AuthContext';
import { Layout } from '../components/Layout';
import { Toaster } from 'react-hot-toast';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    
    const noLayoutPages = ['/login', '/'];

    const shouldUseLayout = !noLayoutPages.includes(router.pathname);

    return (
        <AuthProvider>
            <Head>
                <link rel="icon" href="/house.svg" type="image/svg+xml" />
            </Head>
            {shouldUseLayout ? (
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            ) : (
                <Component {...pageProps} />
            )}
            <Toaster
                position="bottom-right"
                toastOptions={{
                    duration: 4000,
                    style: {
                        background: '#fff',
                        color: '#1f2937',
                        border: '1px solid #e5e7eb',
                        padding: '16px',
                        borderRadius: '0.5rem',
                    },
                    success: {
                        iconTheme: {
                            primary: '#16a34a',
                            secondary: '#fff',
                        },
                    },
                    error: {
                        iconTheme: {
                            primary: '#dc2626',
                            secondary: '#fff',
                        },
                    },
                }}
            />
        </AuthProvider>
    );
}
