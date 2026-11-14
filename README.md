# 💰 Minha Carteira

Painel de finanças domésticas para casais e famílias organizarem juntos o mês: quanto sobra do salário, quem paga cada conta, cartões, reserva e moradia.

**Acesse:** https://rafajames.github.io/Minha-carteira/

Entre com Google ou e-mail, crie a família e envie o convite: todos veem e editam os mesmos dados em tempo real. Também funciona sem conta, com os dados salvos só no aparelho.

## ✨ Principais recursos

- **Receitas e Despesas:** lançamento com valor, tipo, categoria, banco e repetição mensal. Pago/Recebido só mexe no saldo depois de confirmado.
- **Lançamento rápido** por texto ("mercado 85,90") ou **por voz** (🎤), com confirmação quando o valor parece suspeito.
- **Telas:** Visão geral, Fluxo de caixa (visão tipo planilha), Cartões, Nossa casa (divisão e acerto via Pix), Reserva, Renda e Contas da casa.
- **Alertas e previsões:** sino de vencimentos, conta fixa que subiu, gastos por pessoa, saúde financeira e desafio de 7 dias.
- **Importação:** extrato e fatura (CSV/OFX), boleto e Pix copia e cola, foto ou print, contracheque.
- **Extras:** vale alimentação, empréstimos e consignados, carro, iFood, planejamento, patrimônio, lista de compras e lembretes no Google Agenda.
- **Offline e instalável (PWA):** abre sem internet e envia os lançamentos quando a conexão volta. No celular, use "Adicionar à tela inicial".
- **Segurança:** cópia diária na nuvem, mais backup em arquivo; lançamentos privados ("Só eu vejo").
- Tema claro e escuro, ocultar valores, animações (respeitam "reduzir movimento") e tutoriais de ajuda dentro do app.

## 🛠️ Tecnologias

HTML, CSS e JavaScript puros em um único arquivo (`index.html`), sem build. Firebase (Authentication e Firestore, plano gratuito), service worker para o modo offline, Tesseract.js para ler imagens no aparelho, ícones [Fluent Emoji](https://github.com/microsoft/fluentui-emoji) (MIT) e hospedagem no GitHub Pages. Cada push na branch `main` publica sozinho.

## 🚀 Rodando localmente

```bash
git clone https://github.com/Rafajames/Minha-carteira.git
# abra o index.html no navegador
```

Para usar o seu próprio Firebase: crie o projeto, ative o login Google, crie o Firestore com as regras de `firestore.rules` e troque `FB_CFG` no `index.html`.

## 📂 Estrutura

```
index.html            # app completo (estilos, telas e lógica)
sw.js                 # service worker (modo offline)
manifest.webmanifest  # instalação como app
icons/                # ícones
firestore.rules       # regras de segurança do Firestore
```

## 🗺️ Próximos passos

- [x] Família compartilhada com sincronização em tempo real
- [x] Instalação como app e uso offline
- [x] Lançamento por voz
- [ ] Custo por km, revisão por quilometragem e etiquetas por evento
- [ ] Notificações do próprio app e exportar relatório

## 👤 Autor

**Jamerson Rafael** · [GitHub](https://github.com/Rafajames) · [LinkedIn](https://www.linkedin.com/in/jamerson-rafael-a7a480249/)
