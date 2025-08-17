import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Users } from "lucide-react";

const genderData = [
  { gender: "Masculino", evadidos: 923, ativos: 2587 },
  { gender: "Feminino", evadidos: 946, ativos: 2587 }
];

const paymentMethodData = [
  { method: "Cartão de Crédito", evadidos: 234, ativos: 1456 },
  { method: "Débito Automático", evadidos: 567, ativos: 1892 },
  { method: "Boleto", evadidos: 789, ativos: 1234 },
  { method: "Transferência", evadidos: 279, ativos: 592 }
];

const serviceTypeData = [
  { service: "Fibra Óptica", evadidos: 345, ativos: 1567 },
  { service: "DSL", evadidos: 678, ativos: 1234 },
  { service: "Cabo", evadidos: 456, ativos: 1456 },
  { service: "Satélite", evadidos: 390, ativos: 917 }
];

export const CategoricalAnalysis = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          <CardTitle>4. Análise por Variáveis Categóricas</CardTitle>
        </div>
        <CardDescription>
          Distribuição da evasão por diferentes características demográficas e de serviço.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Evasão por Gênero</h4>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={genderData}>
                <XAxis dataKey="gender" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="evadidos" fill="hsl(var(--destructive))" name="Evadidos" />
                <Bar dataKey="ativos" fill="hsl(var(--success))" name="Ativos" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Evasão por Método de Pagamento</h4>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={paymentMethodData}>
                <XAxis dataKey="method" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="evadidos" fill="hsl(var(--destructive))" name="Evadidos" />
                <Bar dataKey="ativos" fill="hsl(var(--success))" name="Ativos" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Evasão por Tipo de Serviço</h4>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={serviceTypeData}>
                <XAxis dataKey="service" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="evadidos" fill="hsl(var(--destructive))" name="Evadidos" />
                <Bar dataKey="ativos" fill="hsl(var(--success))" name="Ativos" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-info/10 border border-info/20 rounded-lg">
          <h5 className="font-medium text-info mb-2">Insights por Categoria:</h5>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Não há diferença significativa na evasão entre gêneros</li>
            <li>• Clientes que pagam por boleto têm maior taxa de evasão (39%)</li>
            <li>• Serviços DSL apresentam a maior taxa de cancelamento (35.4%)</li>
            <li>• Fibra óptica tem a menor taxa de evasão (18%)</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};