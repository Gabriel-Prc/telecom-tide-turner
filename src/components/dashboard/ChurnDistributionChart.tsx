import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis } from "recharts";
import { TrendingDown } from "lucide-react";

const churnData = [
  { name: "Clientes Ativos", value: 5174, color: "hsl(var(--success))" },
  { name: "Clientes Evadidos", value: 1869, color: "hsl(var(--destructive))" }
];

const churnByContract = [
  { type: "Mensal", evadidos: 1234, ativos: 2156 },
  { type: "Anual", evadidos: 456, ativos: 1892 },
  { type: "Bienal", evadidos: 179, ativos: 1126 }
];

export const ChurnDistributionChart = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <TrendingDown className="h-5 w-5 text-primary" />
          <CardTitle>3. Distribuição da Evasão</CardTitle>
        </div>
        <CardDescription>
          Visualização da proporção de clientes que permaneceram versus os que cancelaram o serviço.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold mb-4">Distribuição Geral</h4>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={churnData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                >
                  {churnData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Evasão por Tipo de Contrato</h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={churnByContract}>
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="evadidos" fill="hsl(var(--destructive))" name="Evadidos" />
                <Bar dataKey="ativos" fill="hsl(var(--success))" name="Ativos" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-warning/10 border border-warning/20 rounded-lg">
          <h5 className="font-medium text-warning mb-2">Insights Principais:</h5>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• 26.5% dos clientes cancelaram o serviço</li>
            <li>• Contratos mensais apresentam maior taxa de evasão (36.4%)</li>
            <li>• Contratos bianuais são mais estáveis (13.7% de evasão)</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};