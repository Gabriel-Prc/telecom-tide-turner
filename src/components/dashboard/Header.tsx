import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Signal, TrendingDown, Users } from "lucide-react";

export const Header = () => {
  return (
    <div className="w-full bg-gradient-to-r from-primary/10 to-info/10 p-6 mb-8">
      <div className="container mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Signal className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Telecom X</h1>
          </div>
          <Badge variant="outline" className="px-3 py-1">
            Análise de Evasão
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total de Clientes</p>
                <p className="text-2xl font-bold">7,043</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-destructive/10 rounded-lg">
                <TrendingDown className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Taxa de Evasão</p>
                <p className="text-2xl font-bold text-destructive">26.5%</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-success/10 rounded-lg">
                <Users className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Clientes Ativos</p>
                <p className="text-2xl font-bold text-success">5,174</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};