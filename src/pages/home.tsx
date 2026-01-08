import { useAuth } from '../context/AuthContext';
import { Card, CardContent } from '../components/Card';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect } from 'react';
import { Construction, BarChart3, PieChart, TrendingUp, Activity } from 'lucide-react';

export default function Home() {
    const { user, isAuthenticated, loading, isAdmin } = useAuth();
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
                <title>Home - Casa Alves</title>
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                                <BarChart3 className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                                <p className="text-sm text-gray-500 mt-1">
                                    Visão geral e estatísticas do sistema
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Em Desenvolvimento Card */}
                    <Card className="mb-8">
                        <CardContent className="py-16">
                            <div className="text-center max-w-2xl mx-auto">
                                <div className="inline-flex items-center justify-center w-24 h-24 bg-orange-100 rounded-full mb-6">
                                    <Construction className="w-12 h-12 text-orange-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                                    Dashboard em Desenvolvimento
                                </h2>
                                <p className="text-lg text-gray-600 mb-6">
                                    Estou trabalhando para trazer gráficos e estatísticas detalhadas sobre vendas, despesas e muito mais.
                                </p>
                                <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                                    Em breve disponível
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Preview Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card>
                            <CardContent className="py-6">
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg">
                                        <BarChart3 className="w-7 h-7 text-blue-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-900">Vendas</h3>
                                        <p className="text-sm text-gray-500">Estatísticas de vendas</p>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <span className="text-xs text-gray-400">Em desenvolvimento...</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="py-6">
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center justify-center w-14 h-14 bg-purple-100 rounded-lg">
                                        <PieChart className="w-7 h-7 text-purple-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-900">Despesas</h3>
                                        <p className="text-sm text-gray-500">Análise de despesas</p>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <span className="text-xs text-gray-400">Em desenvolvimento...</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="py-6">
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-lg">
                                        <TrendingUp className="w-7 h-7 text-green-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-900">Tendências</h3>
                                        <p className="text-sm text-gray-500">Análise de crescimento</p>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <span className="text-xs text-gray-400">Em desenvolvimento...</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}