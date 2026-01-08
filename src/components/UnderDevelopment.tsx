import { Card, CardContent } from './Card';
import { Construction, Clock, Wrench } from 'lucide-react';

interface UnderDevelopmentProps {
    title: string;
    description?: string;
    icon?: React.ReactNode;
}

export function UnderDevelopment({ 
    title, 
    description = 'Esta funcionalidade está sendo desenvolvida e estará disponível em breve.',
    icon 
}: UnderDevelopmentProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Card>
                    <CardContent className="py-16">
                        <div className="text-center max-w-2xl mx-auto">
                            <div className="inline-flex items-center justify-center w-24 h-24 bg-orange-100 rounded-full mb-6">
                                {icon || <Construction className="w-12 h-12 text-orange-600" />}
                            </div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-3">
                                {title}
                            </h1>
                            <p className="text-lg text-gray-600 mb-6">
                                {description}
                            </p>
                            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                                <Clock className="w-4 h-4 mr-2" />
                                Em desenvolvimento
                            </div>
                        </div>

                        {/* Info Box */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <div className="flex items-start space-x-4">
                                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg flex-shrink-0">
                                    <Wrench className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        O que está por vir?
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Estou trabalhando para trazer esta funcionalidade o mais rápido possível. 
                                        Continue navegando pelas outras seções do sistema.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
