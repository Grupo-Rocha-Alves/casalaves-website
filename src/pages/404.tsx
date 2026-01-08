import { Card, CardContent } from '../components/Card';
import { Button } from '../components/Button';
import Head from 'next/head';
import Link from 'next/link';
import { AlertCircle, Home, ArrowLeft } from 'lucide-react';

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Página não encontrada - Casa Alves</title>
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl w-full">
                    <Card>
                        <CardContent className="py-16">
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-6">
                                    <AlertCircle className="w-12 h-12 text-red-600" />
                                </div>
                                
                                <h1 className="text-6xl font-bold text-gray-900 mb-3">
                                    404
                                </h1>
                                
                                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                    Página não encontrada
                                </h2>
                                
                                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                                    Desculpe, a página que você está procurando não existe ou foi movida.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link href="/home">
                                        <Button className="w-full sm:w-auto">
                                            <Home className="w-4 h-4 mr-2" />
                                            Ir para o início
                                        </Button>
                                    </Link>
                                    
                                    <Button 
                                        variant="secondary"
                                        onClick={() => window.history.back()}
                                        className="w-full sm:w-auto"
                                    >
                                        <ArrowLeft className="w-4 h-4 mr-2" />
                                        Voltar
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}
