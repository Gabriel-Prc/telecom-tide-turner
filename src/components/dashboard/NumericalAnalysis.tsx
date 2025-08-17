import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, ScatterChart, Scatter } from "recharts";
import { BarChart3 } from "lucide-react";

const monthlyChargesData = [
  { range: "0-30", evadidos: 234, ativos: 567 },
  { range: "30-50", evadidos: 456, ativos: 1234 },
  { range: "50-70", evadidos: 567, ativos: 1456 },
  { range: "70-90", evadidos: 456, ativos: 1234 },
  { range: "90+", evadidos: 156, ativos: 683 }
];

const tenureData = [
  { months: 1, churnRate: 45.2 },
  { months: 6, churnRate: 38.7 },
  { months: 12, churnRate: 28.3 },
  { months: 24, churnRate: 18.9 },
  { months: 36, churnRate: 12.4 },
  { months: 48, churnRate: 8.7 },
  { months: 60, churnRate: 6.2 }
];

const totalChargesScatter = [
  { totalCharges: 500, churnRate: 42 },
  { totalCharges: 1200, churnRate: 35 },
  { totalCharges: 2400, churnRate: 28 },
  { totalCharges: 3600, churnRate: 22 },
  { totalCharges: 4800, churnRate: 18 },
  { totalCharges: 6000, churnRate: 15 },
  { totalCharges: 7200, churnRate: 12 }
];

export const NumericalAnalysis = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          <CardTitle>5. Análise de Variáveis Numéricas</CardTitle>
        </div>
        <CardDescription>
          Distribuição da evasão por valores numéricos como faturamento e tempo de contrato.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Taxa de Evasão por Tempo de Contrato (meses)</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={tenureData}>
                <XAxis dataKey="months" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}%`, 'Taxa de Evasão']} />
                <Line 
                  type="monotone" 
                  dataKey="churnRate" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Relação: Gasto Total vs Taxa de Evasão</h4>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart data={totalChargesScatter}>
                <XAxis dataKey="totalCharges" name="Gasto Total (R$)" />
                <YAxis dataKey="churnRate" name="Taxa de Evasão (%)" />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'churnRate' ? `${value}%` : `R$ ${value}`,
                    name === 'churnRate' ? 'Taxa de Evasão' : 'Gasto Total'
                  ]}
                />
                <Scatter dataKey="churnRate" fill="hsl(var(--warning))" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4">
              <div className="text-center">
                <h5 className="font-medium text-destructive">Maior Evasão</h5>
                <p className="text-2xl font-bold">R$ 29,50</p>
                <p className="text-sm text-muted-foreground">Faturamento médio mensal</p>
              </div>
            </Card>
            <Card className="p-4">
              <div className="text-center">
                <h5 className="font-medium text-warning">Evasão Moderada</h5>
                <p className="text-2xl font-bold">R$ 64,80</p>
                <p className="text-sm text-muted-foreground">Faturamento médio mensal</p>
              </div>
            </Card>
            <Card className="p-4">
              <div className="text-center">
                <h5 className="font-medium text-success">Menor Evasão</h5>
                <p className="text-2xl font-bold">R$ 103,20</p>
                <p className="text-sm text-muted-foreground">Faturamento médio mensal</p>
              </div>
            </Card>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
          <h5 className="font-medium text-primary mb-2">Insights Numéricos:</h5>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Clientes com menos de 6 meses têm 45% de probabilidade de evasão</li>
            <li>• Taxa de evasão diminui drasticamente após 24 meses de contrato</li>
            <li>• Clientes com menor faturamento (R$ 20-40) são mais propensos à evasão</li>
            <li>• Gasto total acima de R$ 4.000 correlaciona com maior retenção</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};