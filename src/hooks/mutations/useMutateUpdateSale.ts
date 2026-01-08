import { useState } from 'react';
import api from '../../service/api';
import toast from 'react-hot-toast';

interface UpdateSaleData {
    data?: string;
    totalCartao?: number;
    totalPix?: number;
    totalEspecie?: number;
    totalOutro?: number;
}

export function useMutateUpdateSale() {
    const [loading, setLoading] = useState(false);

    const updateSale = async (id: number, saleData: UpdateSaleData) => {
        setLoading(true);
        try {
            const response = await api.patch<{
                success: boolean;
                message: string;
                data?: any;
            }>(`/sales/updateSale/${id}`, saleData);

            if (response.data.success) {
                toast.success('Venda atualizada com sucesso!');
                return response.data;
            }
        } catch (error: any) {
            const message = error.response?.data?.message || 'Erro ao atualizar venda';
            toast.error(message);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return {
        updateSale,
        loading,
    };
}
