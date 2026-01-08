import { useState } from 'react';
import api from '../../service/api';
import toast from 'react-hot-toast';

interface CreateSaleData {
    data: string;
    totalCartao?: number;
    totalPix?: number;
    totalEspecie?: number;
    totalOutro?: number;
}

export function useMutateCreateSale() {
    const [loading, setLoading] = useState(false);

    const createSale = async (saleData: CreateSaleData) => {
        setLoading(true);
        try {
            const response = await api.post<{
                success: boolean;
                message: string;
                data?: any;
            }>('/sales/createSale', saleData);

            if (response.data.success) {
                toast.success('Venda cadastrada com sucesso!');
                return response.data;
            }
        } catch (error: any) {
            const message = error.response?.data?.message || 'Erro ao cadastrar venda';
            toast.error(message);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return {
        createSale,
        loading,
    };
}
