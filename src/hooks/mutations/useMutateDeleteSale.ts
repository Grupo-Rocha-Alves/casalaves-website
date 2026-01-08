import { useState } from 'react';
import api from '../../service/api';
import toast from 'react-hot-toast';

export function useMutateDeleteSale() {
    const [loading, setLoading] = useState(false);

    const deleteSale = async (id: number) => {
        setLoading(true);
        try {
            const response = await api.delete<{
                success: boolean;
                message: string;
            }>(`/sales/deleteSale/${id}`);

            if (response.data.success) {
                toast.success('Venda excluída com sucesso!');
                return response.data;
            }
        } catch (error: any) {
            const message = error.response?.data?.message || 'Erro ao excluir venda';
            toast.error(message);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return {
        deleteSale,
        loading,
    };
}
