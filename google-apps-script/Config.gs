/* Config.gs — configuração centralizada (fonte de verdade para o frontend). */
function apiConfig(payload) {
  return {
    ok: true,
    data: {
      institutos: CONFIG_INSTITUTOS,
      modalidades: CONFIG_MODALIDADES,
      urgencias: CONFIG_URGENCIAS,
      status: CONFIG_STATUS
    }
  };
}

/* Cantos: define mapas (espelha constants frontend) */
const CONFIG_MODALIDADES = {
  selecao_com_disputa_aberta: "Seleção com Disputa (Aberta)",
  selecao_com_disputa_fechada: "Seleção com Disputa (Fechada)",
  selecao_sem_disputa_dispensa: "Seleção sem Disputa (Dispensa)",
  selecao_sem_disputa_inexigibilidade: "Seleção sem Disputa (Inexigibilidade)",
  credenciamento: "Credenciamento",
  pre_qualificacao: "Pré-qualificação",
  dialogo_previo: "Diálogo Prévio",
  registro_preco: "Registro de Preço"
};

const CONFIG_URGENCIAS = {
  baixa: "Baixa",
  media: "Média",
  alta: "Alta",
  critica: "Crítica"
};

const CONFIG_STATUS = {
  aberta: "Aberta",
  enviada: "Enviada",
  em_analise: "Em Análise",
  concluida: "Concluída",
  cancelada: "Cancelada"
};