import { Loader2, ShoppingCart, Edit, Trash2, Calendar, CreditCard, Smartphone, Banknote, MoreHorizontal, DollarSign } from 'lucide-react';
import { Button } from './Button';

interface Sale {
    idVenda: number;
    data: string;
    mes: number;
    ano: number;
    diaSemana: string;
    totalCartao: string;
    totalPix: string;
    totalEspecie: string;
    totalOutro: string;
    totalDia: string;
}

interface SalesTableProps {
    sales: Sale[];
    loading: boolean;
    onEdit: (sale: Sale) => void;
    onDelete: (id: number) => void;
    canModify: boolean;
}

export function SalesTable({ sales, loading, onEdit, onDelete, canModify }: SalesTableProps) {
    const formatDate = (dateString: string) => {
        // Extrai apenas a parte da data (YYYY-MM-DD)
        const dateOnly = dateString.split('T')[0];
        const [year, month, day] = dateOnly.split('-');
        // Retorna no formato dd/mm/yyyy
        return `${day}/${month}/${year}`;
    };

    const formatCurrency = (value: string) => {
        return parseFloat(value).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 text-green-600 animate-spin" />
            </div>
        );
    }

    if (sales.length === 0) {
        return (
            <div className="text-center py-12">
                <ShoppingCart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Nenhuma venda encontrada</p>
            </div>
        );
    }

    return (
        <>
            {/* Layout Mobile - Cards */}
            <div className="md:hidden space-y-2.5 px-1 py-3">
                {sales.map((sale) => (
                    <div key={sale.idVenda} className="bg-white border border-gray-200 rounded-lg p-3 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-mono text-gray-500">#{sale.idVenda}</span>
                            <div className="flex items-center space-x-2">
                                <Calendar className="w-4 h-4 text-gray-400" />
                                <span className="text-sm font-medium text-gray-900">{formatDate(sale.data)}</span>
                            </div>
                        </div>

                        <div className="pt-2 border-t border-gray-100">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-gray-500">Dia da Semana</span>
                                <span className="text-sm font-medium text-gray-700">{sale.diaSemana}</span>
                            </div>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-gray-100">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <CreditCard className="w-4 h-4 text-blue-500" />
                                    <span className="text-xs text-gray-600">Cartão</span>
                                </div>
                                <span className="text-sm font-medium text-gray-900">{formatCurrency(sale.totalCartao)}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Smartphone className="w-4 h-4 text-purple-500" />
                                    <span className="text-xs text-gray-600">PIX</span>
                                </div>
                                <span className="text-sm font-medium text-gray-900">{formatCurrency(sale.totalPix)}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Banknote className="w-4 h-4 text-green-500" />
                                    <span className="text-xs text-gray-600">Espécie</span>
                                </div>
                                <span className="text-sm font-medium text-gray-900">{formatCurrency(sale.totalEspecie)}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <MoreHorizontal className="w-4 h-4 text-orange-500" />
                                    <span className="text-xs text-gray-600">Outro</span>
                                </div>
                                <span className="text-sm font-medium text-gray-900">{formatCurrency(sale.totalOutro)}</span>
                            </div>
                        </div>

                        <div className="pt-2 border-t-2 border-gray-200">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-2">
                                    <DollarSign className="w-5 h-5 text-green-600" />
                                    <span className="text-sm font-semibold text-gray-700">Total do Dia</span>
                                </div>
                                <span className="text-lg font-bold text-green-600">{formatCurrency(sale.totalDia)}</span>
                            </div>
                        </div>

                        {canModify && (
                            <div className="flex gap-2 pt-2 border-t border-gray-100">
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    onClick={() => onEdit(sale)}
                                    className="flex-1"
                                >
                                    <Edit className="w-4 h-4 mr-1" />
                                    Editar
                                </Button>
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    onClick={() => onDelete(sale.idVenda)}
                                    className="flex-1 text-red-600 hover:bg-red-50"
                                >
                                    <Trash2 className="w-4 h-4 mr-1" />
                                    Excluir
                                </Button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Layout Desktop - Tabela */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Data
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Dia
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Cartão
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                PIX
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Espécie
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Outro
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Total
                            </th>
                            {canModify && (
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Ações
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {sales.map((sale) => (
                            <tr key={sale.idVenda} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500">
                                    #{sale.idVenda}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center space-x-2">
                                        <Calendar className="w-4 h-4 text-gray-400" />
                                        <span className="text-sm text-gray-900">{formatDate(sale.data)}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    {sale.diaSemana}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                                    {formatCurrency(sale.totalCartao)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                                    {formatCurrency(sale.totalPix)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                                    {formatCurrency(sale.totalEspecie)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                                    {formatCurrency(sale.totalOutro)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-semibold text-green-600">
                                    {formatCurrency(sale.totalDia)}
                                </td>
                                {canModify && (
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <div className="flex items-center justify-center space-x-2">
                                            <Button
                                                variant="secondary"
                                                size="sm"
                                                onClick={() => onEdit(sale)}
                                            >
                                                <Edit className="w-4 h-4" />
                                            </Button>
                                            <Button
                                                variant="secondary"
                                                size="sm"
                                                onClick={() => onDelete(sale.idVenda)}
                                                className="text-red-600 hover:bg-red-50"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
