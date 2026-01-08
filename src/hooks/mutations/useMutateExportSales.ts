import { useState } from 'react';
import api from '../../service/api';
import toast from 'react-hot-toast';

interface ExportSalesParams {
    mes?: number;
    ano?: number;
    dataInicio?: string;
    dataFim?: string;
}

export function useMutateExportSales() {
    const [loading, setLoading] = useState(false);

    const exportSales = async (params: ExportSalesParams = {}) => {
        setLoading(true);
        try {
            const response = await api.get<Blob>('/sales/exportSales', {
                params,
                responseType: 'blob',
            });

            // Criar URL para o blob
            const url = window.URL.createObjectURL(new Blob([response.data as BlobPart]));
            const link = document.createElement('a');
            link.href = url;
            
            // Nome do arquivo com data atual
            const dataAtual = new Date().toISOString().split('T')[0];
            link.setAttribute('download', `vendas_${dataAtual}.csv`);
            
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);

            toast.success('Vendas exportadas com sucesso!');
        } catch (error: any) {
            const message = error.response?.data?.message || 'Erro ao exportar vendas';
            toast.error(message);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return {
        exportSales,
        loading,
    };
}
