# 💰 Minha Carteira

Painel de finanças domésticas para casais e famílias organizarem juntos as contas do mês: quanto sobra do salário, quem paga cada conta da casa, faturas de cartão, reserva e moradia.

**Acesse:** https://rafajames.github.io/Minha-carteira/

> Entre com sua conta Google, crie a família e envie o link de convite. Todos os membros veem e editam os mesmos dados, sincronizados em tempo real. Também dá para usar sem conta, com os dados salvos só no aparelho.

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
- **Login com Google ou e-mail e senha, e família compartilhada** (Firebase): link de convite, sincronização em tempo real e até 6 pessoas, todas entrando na divisão das contas.
- **Meses separados:** contas que se repetem voltam "a pagar" a cada mês, e gastos avulsos ficam só no mês em que foram lançados.
- **Editar e excluir** qualquer lançamento, conta da casa ou cartão (botão ✎).
- **Lançamentos privados:** marque "Só eu vejo" e a conta fica guardada só no seu perfil.
- **Faturas calculadas pelas parcelas:** as próximas faturas e o limite livre saem das compras lançadas.
- **Lembrete no Google Agenda:** cada conta a pagar gera um evento mensal no dia do vencimento.
- **Histórico de acertos** via Pix, mês a mês.
- **Gastos por categoria** com comparação com o mês anterior, **metas** com aviso no sino e **exportação do mês** em planilha (CSV para Excel e Google Planilhas).
- **Visão de cada pessoa:** o saldo previsto e a moradia usam o salário e a parte de quem está conectado.
- **Modo de teste** sem conta: botão **Zerar tudo** para testar com os próprios valores e, ao criar a conta, opção **Levar o que preenchi no teste**. Também dá para restaurar os dados de exemplo.
- **Visão geral 2.0:** saudação, lançamento rápido ("mercado 85,90"), resumo do mês anterior, indicadores de entradas, despesas, balanço e parcelas que terminaram, e nota de **saúde financeira** de 0 a 100.
- **Desfazer** depois de excluir, marcar como pago ou importar; **pagar todas do dia** de uma vez; **ocultar valores** com o ícone de olho.
- **Quem fez o quê:** cada conta paga mostra quem pagou e quando, e o sino lista a atividade da família.
- **Divisão por conta** (partes iguais, proporcional ou uma pessoa só) e **dependentes** que não entram na divisão.
- **Cartão com data de fechamento:** cada compra vai para a fatura certa, que aparece como aberta ou fechada.
- **Reserva ligada:** marcar "Guardar na reserva" como paga soma no saldo da reserva.
- **Ler boleto e Pix copia e cola:** colar o código preenche valor e vencimento, e o código fica guardado para copiar na hora de pagar.
- **Importar extrato e fatura** em CSV ou OFX, sem repetir o que já foi lançado. O banco é reconhecido pelo OFX (e lembrado no CSV), contas cadastradas são marcadas como pagas, e salário, pagamento de fatura e Pix entre a família ou entre as próprias contas ficam desmarcados. Só o nome do banco é guardado.
- **Filtro por banco** no Fluxo de caixa e banco do salário em Nossa renda.
- **Planejamento:** previsão dos próximos 6 meses, simulador de compra parcelada, objetivos com prazo e lista de assinaturas.
- **Patrimônio:** bens, reserva, dívidas e financiamentos com o juro embutido.
- **Lista de compras** compartilhada que vira gasto em Mercado ao fechar a compra.
- **Gráfico do ano** no Fluxo de caixa.
- **Cópias de segurança:** uma por dia na nuvem, mais cópia em arquivo para baixar e restaurar.
- **Convite com código:** "Gerar novo link" desativa o link anterior, e só quem criou a família remove pessoas.
- **Ajuda:** 32 tutoriais passo a passo, com busca e atalho para a tela de cada assunto.
- **Vale alimentação e refeição** (Pluxee, VR, Alelo, Ticket e outros): saldo, recarga automática no dia certo e previsão de até quando o saldo dura. Os gastos entram nas categorias, mas não saem do saldo do salário.
- **Lançar por foto ou print:** lê comprovantes e prints de fatura no próprio aparelho, com [Tesseract.js](https://github.com/naptha/tesseract.js), e mostra o resultado para conferir antes de lançar.
- **Balanço do dia:** card Hoje logo abaixo do lançamento rápido, com o que saiu, o que entrou e o saldo do dia, a lista dos lançamentos (gastos, entradas, vale e contas pagas no dia) e setas para ver outros dias.
- **Detalhe da categoria:** total, comparação com a média, quem gastou, últimos 12 meses com linha de tendência e lista do que entrou. Ao corrigir a categoria de um lançamento, o app aprende pelo nome.
- **Novas categorias** Carro e Delivery, e reconhecimento de posto, Shell, Ipiranga, autopeças, oficina, borracharia, iFood e IFD*.
- **Visão geral:** onde foi o dinheiro (3 categorias que mais pesaram), quanto ainda dá para gastar por dia, aviso de gasto fora do normal, resumo da semana e conquistas.
- **Controle do mês:** essenciais × supérfluos e mesada por pessoa.
- **Carro:** custo no mês, no ano e por km, consumo, comparação com o Uber e lembretes de IPVA, licenciamento, seguro e revisão (por data ou km).
- **iFood:** nomes "iFood · Restaurante" a partir de IFD*, leitura do print de pedidos sem duplicar o que já está na fatura, valor médio e dias em que mais pedem.
- **Holerite:** leitura do recibo de pagamento com as colunas de proventos e descontos, conferência com o líquido, FGTS informativo e mês de férias sem trocar o salário.
- **Salário em duas datas:** adiantamento e restante, no dia útil anterior quando cair em fim de semana ou feriado (nacionais, de Roraima e de Boa Vista). O previsto é corrigido pelo holerite.
- **Consignados:** parcelas pagas e restantes, juros, mês em que o salário sobe, conferência pelo holerite e leitura do print "Detalhes do empréstimo".
- **Tendência** das saídas no gráfico do ano.
- Layout responsivo: no celular, o menu vira uma barra inferior com Início, Fluxo, Cartões, Casa e Mais.
- Tema claro e escuro, que respeita o sistema e lembra a sua escolha.
- Navegação por link direto para cada tela (`#fluxo`, `#cartoes`, `#casa`, `#reserva`, `#renda`, `#contas`).
- Um único arquivo HTML, sem etapa de build.

## 🛠️ Tecnologias

- HTML, CSS e JavaScript puros, em um único arquivo (`index.html`).
- Fonte [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts.
- Gráficos em SVG desenhados à mão, sem biblioteca externa.
- Ícones 3D [Fluent Emoji](https://github.com/microsoft/fluentui-emoji) da Microsoft (licença MIT), guardados na pasta `icons/`.
- [Firebase](https://firebase.google.com/) (Authentication com Google e Cloud Firestore), plano gratuito Spark.
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
- [x] Login com Google (Firebase)
- [x] Família com convite por link
- [x] Sincronização em tempo real entre os membros
- [x] Meses separados, edição de lançamentos e várias pessoas na divisão
- [x] Lançamentos privados (visíveis só para o dono)
- [x] Sistema visual único, ícones 3D, botões funcionando e salvamento local
- [ ] Instalação como app no celular (PWA)
- [x] Lembretes de vencimento pelo Google Agenda
- [ ] Notificações do próprio app (dependem da versão instalável)

## 🔐 Configurando o Firebase (se for criar o seu)

1. Crie um projeto no [console do Firebase](https://console.firebase.google.com/).
2. Em **Authentication**, ative o login com **Google** e adicione o seu domínio em **Domínios autorizados**.
3. Crie o **Firestore Database** e publique as regras do arquivo `firestore.rules`.
4. Registre um app da Web e troque o objeto `FB_CFG` no `index.html` pela sua configuração.

## 📂 Estrutura

```
Minha-carteira/
├── index.html   # aplicação completa (estilos, telas e lógica)
├── icons/       # ícones 3D Fluent Emoji (PNG)
├── firestore.rules  # regras de segurança do Firestore
└── README.md
```

## 👤 Autor

**Jamerson Rafael** · [GitHub](https://github.com/Rafajames) · [LinkedIn](https://www.linkedin.com/in/jamerson-rafael-a7a480249/)
