import { useState } from 'react';
import api from '../service/api';
import toast from 'react-hot-toast';

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

interface GetAllSalesParams {
    mes?: number;
    ano?: number;
    dataInicio?: string;
    dataFim?: string;
    page?: number;
    limit?: number;
}

interface Pagination {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
}

export function useQueryGetAllSales() {
    const [sales, setSales] = useState<Sale[]>([]);
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState<Pagination>({
        page: 1,
        limit: 10,
        total: 0,
        totalPages: 0,
    });

    const getAllSales = async (params: GetAllSalesParams = {}) => {
        setLoading(true);
        try {
            const response = await api.get<{
                success: boolean;
                data: Sale[];
                pagination: Pagination;
            }>('/sales/getAllSales', { params });

            if (response.data.success) {
                setSales(response.data.data);
                setPagination(response.data.pagination);
            }
        } catch (error: any) {
            const message = error.response?.data?.message || 'Erro ao buscar vendas';
            toast.error(message);
            setSales([]);
            setPagination({
                page: 1,
                limit: 10,
                total: 0,
                totalPages: 0,
            });
        } finally {
            setLoading(false);
        }
    };

    return {
        sales,
        loading,
        pagination,
        getAllSales,
    };
}
