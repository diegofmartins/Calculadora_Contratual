# Calculadora de Reajustes Contratuais (Lei 14.133)

Esta é uma ferramenta profissional para cálculo de reajustes, repactuações e planejamento de empenho anual de contratos públicos brasileiros. Esta versão funciona de forma 100% nativa no navegador e não requer conexão com a internet para realizar os cálculos.

## Como hospedar no GitHub Pages

Este projeto está configurado para ser hospedado em um repositório chamado **`Calculadora_Contratual`**.

### Passos para Configuração:

1. **Crie o Repositório no GitHub:**
   - Crie um repositório chamado `Calculadora_Contratual`.
   - Suba os arquivos deste projeto diretamente na **raiz** desse repositório.
   - *Nota:* Se você mudar o nome do repositório, lembre-se de ajustar o `base` no arquivo `vite.config.ts` para que os links e imagens funcionem corretamente.

2. **Ative o GitHub Pages via Actions:**
   - No seu repositório no GitHub, vá em **Settings** > **Pages**.
   - Em **Build and deployment** > **Source**, selecione **GitHub Actions**.
   - **Importante:** Não selecione "Deploy from a branch". O arquivo `.github/workflows/deploy.yml` já cuida de tudo automaticamente usando Actions.

3. **Deploy Automático:**
   - O arquivo `.github/workflows/deploy.yml` já está configurado. Toda vez que você fizer um `push` para a branch `main` ou `master`, o GitHub irá automaticamente compilar e publicar o site.
   - Você pode acompanhar o progresso na aba **Actions** do seu repositório.

## Desenvolvimento Local

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Para gerar a versão de produção:
   ```bash
   npm run build
   ```
   Os arquivos prontos para hospedagem manual estarão na pasta `dist/`.
