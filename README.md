Análise de Evasão de Clientes (Churn) - Telecom X
Uma análise exploratória completa para identificar os principais fatores que levam à evasão de clientes numa empresa de telecomunicações, transformando dados brutos em recomendações de negócio estratégicas.

Tabela de Conteúdos
Sobre o Projeto

Estrutura do Repositório

Fonte dos Dados

Como Começar

Metodologia da Análise

Principais Descobertas e Visualizações

Recomendações Estratégicas

Licença

1. Sobre o Projeto
A Telecom X enfrenta um desafio comum no setor: uma taxa significativa de evasão de clientes (churn). Este projeto foi concebido para abordar este problema de frente, através de uma Análise Exploratória de Dados (EDA).

O objetivo é mergulhar nos dados dos clientes para descobrir padrões e identificar os perfis de clientes mais propensos a cancelar os seus serviços. Os insights gerados aqui servem como a base para a construção de modelos de machine learning preditivos e para a formulação de estratégias de retenção mais eficazes e direcionadas.

2. Estrutura do Repositório
telecom-churn-analysis/
│
├── data/
│   └── TelecomX_Data (1).json    # Ficheiro de dados brutos
│
├── notebooks/
│   └── Analise_Churn_TelecomX.ipynb # Notebook Jupyter com a análise completa
│
├── scripts/
│   └── analise_churn.py          # Script Python completo para execução
│
├── images/
│   └── churn_distribution.png    # Exemplo de visualização gerada
│   └── churn_by_contract.png     # Exemplo de visualização gerada
│
└── README.md                     # Documentação do projeto (este ficheiro)

3. Fonte dos Dados
Os dados utilizados provêm de um ficheiro JSON (TelecomX_Data (1).json) que simula uma extração da API da empresa. O dataset contém 7,267 registos e 21 colunas, incluindo:

Dados Demográficos do Cliente: género, se é idoso, se tem parceiro/dependentes.

Serviços Contratados: serviço de telefone, múltiplas linhas, tipo de internet, serviços de segurança e streaming.

Informações da Conta: tempo de contrato (tenure), tipo de contrato, método de pagamento e valores de faturação.

4. Como Começar
Para executar esta análise no seu ambiente local, siga os passos abaixo.

Pré-requisitos
Python (versão 3.9 ou superior)

pip (gestor de pacotes do Python)

Instalação
Clone o repositório:

git clone https://github.com/seu-usuario/telecom-churn-analysis.git
cd telecom-churn-analysis

Crie e ative um ambiente virtual (recomendado):

python -m venv venv
source venv/bin/activate  # No Windows: venv\Scripts\activate

Instale as dependências:

pip install -r requirements.txt

(Nota: Crie um ficheiro requirements.txt com o conteúdo: pandas, matplotlib, seaborn, jupyterlab)

Execução
Pode executar a análise de duas formas:

Via Jupyter Notebook (recomendado para exploração):

jupyter lab notebooks/Analise_Churn_TelecomX.ipynb

Via Script Python:

python scripts/analise_churn.py

5. Metodologia da Análise
O projeto seguiu uma abordagem estruturada:

Carregamento e Limpeza: Os dados foram carregados, as colunas renomeadas e os tipos de dados corrigidos. Valores ausentes na coluna TotalCharges foram imputados com a mediana.

Engenharia de Atributos: Criação de novas variáveis (ex: Contas_Diarias) e tradução dos dados para português para maior clareza.

Análise Exploratória (EDA): Investigação da distribuição de cada variável e da sua relação com a variável alvo (Churn).

Visualização de Dados: Uso intensivo de gráficos para ilustrar as descobertas e facilitar a comunicação dos resultados.

6. Principais Descobertas e Visualizações
A análise revelou uma taxa de churn de 25.7%. Os fatores mais influentes foram:

Tipo de Contrato: Clientes com contrato mensal têm uma taxa de churn drasticamente superior.

Tempo de Contrato (Tenure): A evasão é muito mais comum nos primeiros meses de serviço.

Fatura Mensal: Clientes com faturas mais altas tendem a cancelar mais.

Serviços Adicionais: A ausência de serviços como Suporte Técnico e Segurança Online aumenta o risco de churn.

Exemplo: Visualização mostrando a clara disparidade no churn entre tipos de contrato.

7. Recomendações Estratégicas
Com base nos insights, as seguintes ações são recomendadas para a Telecom X:

Fidelizar Clientes com Contratos de Longo Prazo: Desenvolver campanhas para migrar clientes do plano mensal para contratos anuais, oferecendo descontos ou benefícios.

Melhorar a Experiência Inicial (Onboarding): Criar um programa de acompanhamento focado nos primeiros 3-6 meses para garantir a satisfação e reduzir o churn precoce.

Promover Pacotes de Serviços (Bundles): Incentivar a adesão a serviços de valor agregado (Suporte, Segurança) através de pacotes com preços atrativos, aumentando o engajamento do cliente.

Desenvolver um Modelo Preditivo: Utilizar os fatores identificados como base para a criação de um modelo de machine learning que preveja o churn, permitindo ações de retenção proativas e personalizadas.

8. Licença
Este projeto está licenciado sob a Licença MIT. Veja o ficheiro LICENSE para mais detalhes.
