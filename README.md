# 💰 Minha Carteira

Painel de finanças domésticas para casais e famílias organizarem juntos as contas do mês: quanto sobra do salário, quem paga cada conta da casa, faturas de cartão, reserva e moradia.

**Acesse:** https://rafajames.github.io/Minha-carteira/

> ⚠️ Protótipo. Os valores iniciais são de exemplo e o que você edita fica salvo **só no seu navegador**. O login e o salvamento compartilhado entre a família entram na próxima fase.

---

## ✨ Telas

| Tela | O que mostra |
|---|---|
| **Visão geral** | Saldo previsto do mês, contas a pagar por vencimento, divisão da casa, cartões, moradia e obra |
| **Fluxo de caixa** | Entradas, saídas e saldo do mês, gráfico por semana e lista de lançamentos com filtro |
| **Cartões** | Todos os cartões, fatura detalhada, limite usado e parcelas em andamento |
| **Nossa casa** | Regra de divisão (meio a meio ou proporcional à renda), parte justa de cada um e histórico de acertos via Pix |
| **Nossa reserva** | Meta, progresso, previsão de meses para atingir a meta e registro de novos aportes |
| **Nossa renda** | Salário de cada pessoa, proporção da renda do casal e gastos pessoais |
| **Contas da casa** | Cadastro das contas fixas com valor, vencimento, quem paga e se entra no cálculo da moradia |

## 🧮 Como os cálculos funcionam

- **Saldo previsto** = salário − sua parte da casa − contas pessoais − dia a dia.
- **Divisão da casa:** soma as contas que cada um pagou e compara com a parte justa definida pela regra escolhida. A diferença vira o acerto via Pix ("Esposa te devolve R$ …").
- **Moradia:** percentual do salário (seu ou do casal) gasto com as contas marcadas como moradia, comparado com a referência de até 30%.
- **Reserva:** a previsão de meses usa o valor mensal da conta "Reserva" cadastrada na casa.

Tudo é recalculado na hora: trocar quem paga uma conta, mudar a regra de divisão ou editar a renda atualiza todas as telas.

## 📱 Recursos

- **Adicionar lançamento:** conta a pagar, gasto do dia a dia, entrada extra ou compra no cartão (com parcelas).
- **Sino de vencimentos:** mostra as contas vencidas ou que vencem nos próximos 7 dias.
- **Mês atual automático**, com "venceu há X dias" e "em X dias" calculados pela data de hoje.
- **Nomes configuráveis** para as duas pessoas, usados em todas as telas.
- **Salvamento no navegador** e botão para restaurar os dados de exemplo.
- Layout responsivo: no celular, o menu vira uma barra inferior com Início, Fluxo, Cartões, Casa e Mais.
- Tema claro e escuro, que respeita o sistema e lembra a sua escolha.
- Navegação por link direto para cada tela (`#fluxo`, `#cartoes`, `#casa`, `#reserva`, `#renda`, `#contas`).
- Um único arquivo HTML, sem dependências e sem etapa de build.

## 🛠️ Tecnologias

- HTML, CSS e JavaScript puros, em um único arquivo (`index.html`).
- Fonte [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts.
- Gráficos em SVG desenhados à mão, sem biblioteca externa.
- Ícones 3D [Fluent Emoji](https://github.com/microsoft/fluentui-emoji) da Microsoft (licença MIT), guardados na pasta `icons/`.
- Hospedagem no GitHub Pages.

## 🚀 Rodando localmente

Não há instalação. Basta baixar o repositório e abrir o `index.html` no navegador:

```bash
git clone https://github.com/Rafajames/Minha-carteira.git
cd Minha-carteira
# abra o index.html no navegador
```

## 🗺️ Próximos passos

- [x] Visão geral fiel ao design
- [x] Telas de fluxo de caixa, cartões, casa, reserva, renda e contas
- [x] Versão para celular
- [ ] Login individual com Supabase
- [ ] Grupo "Família" com convite por link
- [ ] Salvamento em banco com sincronização em tempo real entre os membros
- [ ] Contas pessoais privadas (visíveis só para o dono)
- [x] Sistema visual único, ícones 3D, botões funcionando e salvamento local
- [ ] Instalação como app no celular (PWA)
- [ ] Lembretes de vencimento

## 📂 Estrutura

```
Minha-carteira/
├── index.html   # aplicação completa (estilos, telas e lógica)
├── icons/       # ícones 3D Fluent Emoji (PNG)
└── README.md
```

## 👤 Autor

**Jamerson Rafael** · [GitHub](https://github.com/Rafajames) · [LinkedIn](https://www.linkedin.com/in/jamerson-rafael-a7a480249/)
