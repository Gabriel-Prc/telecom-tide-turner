import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Download, Database, CheckCircle } from "lucide-react";
import { useState } from "react";

export const DataImportSection = () => {
  const [isImported, setIsImported] = useState(false);
  const [apiUrl, setApiUrl] = useState("https://api.telecomx.com/customer-data.json");

  const handleImport = () => {
    // Simulate API import
    setTimeout(() => {
      setIsImported(true);
    }, 2000);
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Database className="h-5 w-5 text-primary" />
          <CardTitle>1. Importação de Dados</CardTitle>
          {isImported && <Badge variant="default" className="bg-success text-success-foreground">Concluído</Badge>}
        </div>
        <CardDescription>
          Importe os dados dos clientes da API da Telecom X para iniciar a análise de evasão.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div className="md:col-span-3">
            <label className="text-sm font-medium mb-2 block">URL da API</label>
            <Input 
              value={apiUrl}
              onChange={(e) => setApiUrl(e.target.value)}
              placeholder="https://api.telecomx.com/customer-data.json"
            />
          </div>
          <Button 
            onClick={handleImport} 
            disabled={isImported}
            className="w-full"
          >
            {isImported ? (
              <>
                <CheckCircle className="h-4 w-4 mr-2" />
                Importado
              </>
            ) : (
              <>
                <Download className="h-4 w-4 mr-2" />
                Importar Dados
              </>
            )}
          </Button>
        </div>
        
        {isImported && (
          <div className="mt-4 p-4 bg-success/10 border border-success/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-4 w-4 text-success" />
              <span className="font-medium text-success">Importação Concluída</span>
            </div>
            <p className="text-sm text-muted-foreground">
              7,043 registros de clientes foram importados com sucesso. 
              O dataset contém informações demográficas, tipo de serviço e status de evasão.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};