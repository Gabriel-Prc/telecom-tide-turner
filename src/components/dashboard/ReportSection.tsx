import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Target, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

export const ReportSection = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" />
          <CardTitle>6. Relatório Executivo - Análise de Evasão Telecom X</CardTitle>
        </div>
        <CardDescription>
          Resumo executivo com insights, conclusões e recomendações estratégicas.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Objetivo da Análise
            </h4>
            <p className="text-muted-foreground">
              Esta análise foi conduzida para identificar os principais fatores que influenciam a evasão de clientes 
              na Telecom X, com o objetivo de desenvolver estratégias eficazes para reduzir o churn e aumentar a 
              retenção de clientes.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              Principais Descobertas
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4 border-l-4 border-l-destructive">
                <h5 className="font-medium text-destructive mb-2">Taxa de Evasão Atual</h5>
                <p className="text-2xl font-bold">26.5%</p>
                <p className="text-sm text-muted-foreground">1.869 de 7.043 clientes cancelaram</p>
              </Card>
              <Card className="p-4 border-l-4 border-l-warning">
                <h5 className="font-medium text-warning mb-2">Período Crítico</h5>
                <p className="text-2xl font-bold">0-6 meses</p>
                <p className="text-sm text-muted-foreground">45% de probabilidade de evasão</p>
              </Card>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              Fatores de Risco Identificados
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Badge variant="destructive">Alto Risco</Badge>
                <span>Contratos mensais (36.4% de evasão)</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="destructive">Alto Risco</Badge>
                <span>Pagamento por boleto (39% de evasão)</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="destructive">Alto Risco</Badge>
                <span>Serviços DSL (35.4% de evasão)</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="outline">Médio Risco</Badge>
                <span>Faturamento baixo (R$ 20-40 mensais)</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="outline">Médio Risco</Badge>
                <span>Clientes novos (menos de 6 meses)</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-success" />
              Recomendações Estratégicas
            </h4>
            <div className="space-y-4">
              <Card className="p-4 bg-success/5 border-success/20">
                <h5 className="font-medium text-success mb-2">1. Programa de Retenção Inicial</h5>
                <p className="text-sm text-muted-foreground">
                  Implementar acompanhamento personalizado nos primeiros 6 meses, com ofertas especiais 
                  e suporte proativo para clientes novos.
                </p>
              </Card>
              
              <Card className="p-4 bg-primary/5 border-primary/20">
                <h5 className="font-medium text-primary mb-2">2. Migração para Contratos Anuais</h5>
                <p className="text-sm text-muted-foreground">
                  Oferecer incentivos financeiros (desconto de 15-20%) para conversão de contratos mensais 
                  para anuais ou bianuais.
                </p>
              </Card>
              
              <Card className="p-4 bg-info/5 border-info/20">
                <h5 className="font-medium text-info mb-2">3. Modernização da Infraestrutura</h5>
                <p className="text-sm text-muted-foreground">
                  Priorizar a migração de clientes DSL para fibra óptica, oferecendo planos de upgrade 
                  com preços competitivos.
                </p>
              </Card>
              
              <Card className="p-4 bg-warning/5 border-warning/20">
                <h5 className="font-medium text-warning mb-2">4. Facilitar Métodos de Pagamento</h5>
                <p className="text-sm text-muted-foreground">
                  Incentivar débito automático com descontos, reduzindo a dependência de boletos que 
                  apresentam maior taxa de inadimplência e evasão.
                </p>
              </Card>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-r from-primary/10 to-success/10 rounded-lg">
            <h5 className="font-medium mb-2">Impacto Estimado das Recomendações</h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-success">8-12%</p>
                <p className="text-sm text-muted-foreground">Redução na taxa de evasão</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">R$ 2.4M</p>
                <p className="text-sm text-muted-foreground">Receita retida anualmente</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-warning">6 meses</p>
                <p className="text-sm text-muted-foreground">Tempo para implementação</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};