import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Brain, Download, PlayCircle, CheckCircle, BarChart3, Settings, TrendingUp, Target, AlertTriangle } from "lucide-react";
import { useState } from "react";

export const ModelingSection = () => {
  const [dataExported, setDataExported] = useState(false);
  const [modelTrained, setModelTrained] = useState(false);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);

  const models = [
    { id: 'logistic', name: 'Regressão Logística', accuracy: '84.2%' },
    { id: 'random_forest', name: 'Random Forest', accuracy: '87.5%' },
    { id: 'gradient_boost', name: 'Gradient Boosting', accuracy: '89.1%' },
    { id: 'svm', name: 'Support Vector Machine', accuracy: '85.7%' }
  ];

  const handleExportData = () => {
    // Simulate data export
    setTimeout(() => {
      setDataExported(true);
    }, 1500);
  };

  const handleTrainModels = () => {
    // Simulate model training
    setTimeout(() => {
      setModelTrained(true);
    }, 3000);
  };

  const toggleModel = (modelId: string) => {
    setSelectedModels(prev => 
      prev.includes(modelId) 
        ? prev.filter(id => id !== modelId)
        : [...prev, modelId]
    );
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          <CardTitle>2. Modelagem Preditiva</CardTitle>
          {modelTrained && <Badge variant="default" className="bg-success text-success-foreground">Modelos Treinados</Badge>}
        </div>
        <CardDescription>
          Construa modelos de machine learning para prever a evasão de clientes utilizando os dados já tratados.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Data Export Section */}
        <div className="space-y-4">
          <h4 className="font-semibold flex items-center gap-2">
            <Download className="h-4 w-4" />
            Exportar Dados Tratados
          </h4>
          <p className="text-sm text-muted-foreground">
            Primeiro, vamos salvar o conjunto de dados limpo e transformado da Parte 1 em formato CSV.
          </p>
          <div className="flex gap-2">
            <Button 
              onClick={handleExportData}
              disabled={dataExported}
              variant={dataExported ? "secondary" : "default"}
            >
              {dataExported ? (
                <>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Dados Exportados
                </>
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" />
                  Salvar como dados_tratados.csv
                </>
              )}
            </Button>
          </div>
          
          {dataExported && (
            <div className="p-3 bg-success/10 border border-success/20 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="font-medium text-success text-sm">Arquivo CSV Criado</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Dados tratados salvos em "dados_tratados.csv" com 7,043 registros e 22 features preparadas para modelagem.
              </p>
            </div>
          )}
        </div>

        <Separator />

        {/* Model Selection Section */}
        <div className="space-y-4">
          <h4 className="font-semibold flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Seleção de Modelos
          </h4>
          <p className="text-sm text-muted-foreground">
            Escolha os algoritmos de machine learning que deseja treinar e comparar.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {models.map((model) => (
              <div 
                key={model.id}
                className={`p-3 border rounded-lg cursor-pointer transition-all ${
                  selectedModels.includes(model.id) 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => toggleModel(model.id)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-medium text-sm">{model.name}</h5>
                    <p className="text-xs text-muted-foreground">Precisão estimada: {model.accuracy}</p>
                  </div>
                  {selectedModels.includes(model.id) && (
                    <CheckCircle className="h-4 w-4 text-primary" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Training Section */}
        <div className="space-y-4">
          <h4 className="font-semibold flex items-center gap-2">
            <PlayCircle className="h-4 w-4" />
            Treinamento dos Modelos
          </h4>
          
          <Button 
            onClick={handleTrainModels}
            disabled={!dataExported || selectedModels.length === 0 || modelTrained}
            className="w-full md:w-auto"
          >
            {modelTrained ? (
              <>
                <CheckCircle className="h-4 w-4 mr-2" />
                Modelos Treinados
              </>
            ) : (
              <>
                <PlayCircle className="h-4 w-4 mr-2" />
                Treinar Modelos Selecionados ({selectedModels.length})
              </>
            )}
          </Button>

          {!dataExported && (
            <p className="text-xs text-muted-foreground">
              ⚠️ Primeiro exporte os dados tratados para continuar
            </p>
          )}

          {selectedModels.length === 0 && dataExported && (
            <p className="text-xs text-muted-foreground">
              ⚠️ Selecione pelo menos um modelo para treinamento
            </p>
          )}
        </div>

        {modelTrained && (
          <div className="mt-4 p-4 bg-success/10 border border-success/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-4 w-4 text-success" />
              <span className="font-medium text-success">Treinamento Concluído</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              {selectedModels.length} modelo(s) foram treinados com sucesso usando validação cruzada.
            </p>
            <div className="space-y-2">
              <h5 className="font-medium text-sm">Próximos Passos:</h5>
              <ul className="text-xs text-muted-foreground space-y-1 ml-4">
                <li>• Avaliação de performance dos modelos</li>
                <li>• Análise de importância das features</li>
                <li>• Interpretação dos resultados</li>
                <li>• Implementação do modelo em produção</li>
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};