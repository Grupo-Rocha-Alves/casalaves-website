import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect } from 'react';
import { UnderDevelopment } from '../components/UnderDevelopment';
import { FileText } from 'lucide-react';

export default function Duplicatas() {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            router.push('/login');
        }
    }, [isAuthenticated, loading, router]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Carregando...</p>
                </div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return null;
    }

    return (
        <>
            <Head>
                <title>Duplicatas - Casa Alves</title>
            </Head>
            <UnderDevelopment 
                title="Módulo de Duplicatas"
                description="O sistema de gerenciamento de duplicatas está sendo desenvolvido e estará disponível em breve. Aqui você poderá controlar contas a receber e a pagar."
                icon={<FileText className="w-12 h-12 text-orange-600" />}
            />
        </>
    );
}
