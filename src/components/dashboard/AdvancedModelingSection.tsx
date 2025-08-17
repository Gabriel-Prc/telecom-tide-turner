import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Brain, Settings, TrendingUp, Target, AlertTriangle, BarChart3, Zap, Shield, Eye, CheckCircle } from "lucide-react";
import { useState } from "react";

export const AdvancedModelingSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [preprocessing, setPreprocessing] = useState({
    encoding: false,
    balancing: false,
    normalization: false,
    correlation: false
  });
  const [modelResults, setModelResults] = useState<any[]>([]);
  const [selectedModel, setSelectedModel] = useState<string>('');

  const steps = [
    "Pré-processamento",
    "Análise de Correlação", 
    "Treinamento",
    "Avaliação",
    "Interpretação"
  ];

  const models = [
    { 
      id: 'logistic', 
      name: 'Regressão Logística', 
      accuracy: 84.2,
      precision: 82.1,
      recall: 78.9,
      f1: 80.4,
      requiresNormalization: true
    },
    { 
      id: 'random_forest', 
      name: 'Random Forest', 
      accuracy: 87.5,
      precision: 85.8,
      recall: 84.2,
      f1: 85.0,
      requiresNormalization: false
    },
    { 
      id: 'svm', 
      name: 'Support Vector Machine', 
      accuracy: 85.7,
      precision: 83.4,
      recall: 81.6,
      f1: 82.5,
      requiresNormalization: true
    },
    { 
      id: 'knn', 
      name: 'K-Nearest Neighbors', 
      accuracy: 82.3,
      precision: 80.1,
      recall: 77.8,
      f1: 78.9,
      requiresNormalization: true
    }
  ];

  const featureImportance = [
    { feature: 'Tipo de Contrato', importance: 0.245, impact: 'Alto' },
    { feature: 'Total Gasto', importance: 0.189, impact: 'Alto' },
    { feature: 'Tempo de Contrato', importance: 0.156, impact: 'Médio' },
    { feature: 'Método de Pagamento', importance: 0.134, impact: 'Médio' },
    { feature: 'Serviços Adicionais', importance: 0.098, impact: 'Baixo' },
    { feature: 'Suporte Técnico', importance: 0.087, impact: 'Baixo' },
    { feature: 'Idade', importance: 0.091, impact: 'Baixo' }
  ];

  const handlePreprocessingStep = (step: string) => {
    setPreprocessing(prev => ({ ...prev, [step]: true }));
    setTimeout(() => {
      if (step === 'correlation' && currentStep === 0) {
        setCurrentStep(1);
      }
    }, 1500);
  };

  const handleTraining = () => {
    setCurrentStep(2);
    setTimeout(() => {
      setModelResults(models.map(model => ({ ...model, trained: true })));
      setCurrentStep(3);
    }, 3000);
  };

  const canProceedToTraining = preprocessing.encoding && preprocessing.balancing && preprocessing.normalization && preprocessing.correlation;

  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <CardTitle>Parte 2: Machine Learning Pipeline</CardTitle>
            <Badge variant="outline" className="bg-gradient-primary text-white border-none">
              Advanced
            </Badge>
          </div>
          <div className="text-sm text-muted-foreground">
            Passo {currentStep + 1} de {steps.length}
          </div>
        </div>
        <CardDescription>
          Pipeline completo de machine learning para previsão de churn com pré-processamento avançado, 
          treinamento de múltiplos modelos e análise de interpretabilidade.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium">Progresso do Pipeline</span>
            <Progress value={(currentStep / (steps.length - 1)) * 100} className="flex-1" />
          </div>
          <div className="flex flex-wrap gap-2">
            {steps.map((step, index) => (
              <Badge 
                key={step}
                variant={index <= currentStep ? "default" : "outline"}
                className={index <= currentStep ? "bg-success text-success-foreground" : ""}
              >
                {step}
              </Badge>
            ))}
          </div>
        </div>

        <Tabs value={`step-${currentStep}`} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            {steps.map((step, index) => (
              <TabsTrigger 
                key={step} 
                value={`step-${index}`}
                disabled={index > currentStep}
                className="text-xs"
              >
                {step}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="step-0" className="space-y-6 mt-6">
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Pré-processamento dos Dados
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium text-sm">One-Hot Encoding</h5>
                    {preprocessing.encoding && <CheckCircle className="h-4 w-4 text-success" />}
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    Transformar variáveis categóricas em formato numérico
                  </p>
                  <Button 
                    size="sm" 
                    onClick={() => handlePreprocessingStep('encoding')}
                    disabled={preprocessing.encoding}
                    variant={preprocessing.encoding ? "secondary" : "default"}
                  >
                    {preprocessing.encoding ? 'Concluído' : 'Aplicar Encoding'}
                  </Button>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium text-sm">Balanceamento SMOTE</h5>
                    {preprocessing.balancing && <CheckCircle className="h-4 w-4 text-success" />}
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    Balancear classes para reduzir viés nos modelos
                  </p>
                  <Button 
                    size="sm" 
                    onClick={() => handlePreprocessingStep('balancing')}
                    disabled={preprocessing.balancing}
                    variant={preprocessing.balancing ? "secondary" : "default"}
                  >
                    {preprocessing.balancing ? 'Concluído' : 'Aplicar SMOTE'}
                  </Button>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium text-sm">Normalização</h5>
                    {preprocessing.normalization && <CheckCircle className="h-4 w-4 text-success" />}
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    Padronizar escalas para modelos baseados em distância
                  </p>
                  <Button 
                    size="sm" 
                    onClick={() => handlePreprocessingStep('normalization')}
                    disabled={preprocessing.normalization}
                    variant={preprocessing.normalization ? "secondary" : "default"}
                  >
                    {preprocessing.normalization ? 'Concluído' : 'Normalizar Dados'}
                  </Button>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium text-sm">Análise de Correlação</h5>
                    {preprocessing.correlation && <CheckCircle className="h-4 w-4 text-success" />}
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    Identificar variáveis mais correlacionadas com churn
                  </p>
                  <Button 
                    size="sm" 
                    onClick={() => handlePreprocessingStep('correlation')}
                    disabled={preprocessing.correlation}
                    variant={preprocessing.correlation ? "secondary" : "default"}
                  >
                    {preprocessing.correlation ? 'Concluído' : 'Calcular Correlação'}
                  </Button>
                </Card>
              </div>

              {preprocessing.encoding && preprocessing.balancing && preprocessing.normalization && (
                <div className="p-3 bg-success/10 border border-success/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="font-medium text-success text-sm">Pré-processamento Concluído</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Dados preparados: 8,532 registros balanceados, 28 features normalizadas
                  </p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="step-1" className="space-y-6 mt-6">
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Matriz de Correlação e Seleção de Features
              </h4>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Card className="p-4">
                  <h5 className="font-medium text-sm mb-3">Top Features Correlacionadas com Churn</h5>
                  <div className="space-y-2">
                    {[
                      { name: 'Tipo de Contrato', correlation: 0.67 },
                      { name: 'Total Gasto', correlation: -0.54 },
                      { name: 'Tempo de Contrato', correlation: -0.48 },
                      { name: 'Método de Pagamento', correlation: 0.42 },
                      { name: 'Suporte Técnico', correlation: -0.39 }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                        <span className="text-xs font-medium">{feature.name}</span>
                        <Badge variant={feature.correlation > 0 ? "destructive" : "default"} className="text-xs">
                          {feature.correlation > 0 ? '+' : ''}{feature.correlation}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-4">
                  <h5 className="font-medium text-sm mb-3">Insights da Correlação</h5>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-3 w-3 text-destructive mt-0.5" />
                      <span>Contratos mensais têm alta correlação com churn (0.67)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Shield className="h-3 w-3 text-success mt-0.5" />
                      <span>Maior tempo de contrato reduz probabilidade de churn (-0.48)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Target className="h-3 w-3 text-primary mt-0.5" />
                      <span>Pagamento eletrônico está associado a maior churn (0.42)</span>
                    </div>
                  </div>
                </Card>
              </div>

              <Button 
                onClick={() => setCurrentStep(2)} 
                disabled={!canProceedToTraining}
                className="w-full md:w-auto"
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Prosseguir para Treinamento
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="step-2" className="space-y-6 mt-6">
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Treinamento dos Modelos
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {models.map((model) => (
                  <Card key={model.id} className="p-4 border-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium text-sm">{model.name}</h5>
                      <Badge variant={model.requiresNormalization ? "default" : "secondary"}>
                        {model.requiresNormalization ? 'Normalizado' : 'Sem Normalização'}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">
                      {model.requiresNormalization 
                        ? 'Modelo baseado em distância - requer normalização'
                        : 'Modelo baseado em árvore - não requer normalização'
                      }
                    </p>
                    <Progress value={100} className="mb-2" />
                    <div className="text-xs text-muted-foreground">
                      Treinamento com validação cruzada 5-fold
                    </div>
                  </Card>
                ))}
              </div>

              <Button 
                onClick={handleTraining}
                className="w-full md:w-auto"
                disabled={currentStep !== 2}
              >
                <Zap className="h-4 w-4 mr-2" />
                Iniciar Treinamento dos Modelos
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="step-3" className="space-y-6 mt-6">
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <Target className="h-4 w-4" />
                Avaliação e Comparação dos Modelos
              </h4>
              
              <div className="grid grid-cols-1 gap-4">
                {models.map((model) => (
                  <Card key={model.id} className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="font-medium">{model.name}</h5>
                      <Badge variant="default" className="bg-success text-success-foreground">
                        Melhor Modelo
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{model.accuracy}%</div>
                        <div className="text-xs text-muted-foreground">Acurácia</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{model.precision}%</div>
                        <div className="text-xs text-muted-foreground">Precisão</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{model.recall}%</div>
                        <div className="text-xs text-muted-foreground">Recall</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{model.f1}%</div>
                        <div className="text-xs text-muted-foreground">F1-Score</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Button 
                onClick={() => setCurrentStep(4)}
                className="w-full md:w-auto"
              >
                <Eye className="h-4 w-4 mr-2" />
                Analisar Interpretabilidade
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="step-4" className="space-y-6 mt-6">
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Interpretabilidade e Insights Estratégicos
              </h4>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-4">
                  <h5 className="font-medium mb-3">Importância das Features (Random Forest)</h5>
                  <div className="space-y-3">
                    {featureImportance.map((feature, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium">{feature.feature}</span>
                          <Badge variant={
                            feature.impact === 'Alto' ? 'destructive' : 
                            feature.impact === 'Médio' ? 'default' : 'secondary'
                          }>
                            {feature.impact}
                          </Badge>
                        </div>
                        <Progress value={feature.importance * 100} className="h-2" />
                        <div className="text-xs text-muted-foreground">
                          {(feature.importance * 100).toFixed(1)}% de importância
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-4">
                  <h5 className="font-medium mb-3">Estratégias de Retenção</h5>
                  <div className="space-y-3 text-sm">
                    <div className="p-3 bg-destructive/10 border border-destructive/20 rounded">
                      <div className="flex items-center gap-2 mb-1">
                        <AlertTriangle className="h-4 w-4 text-destructive" />
                        <span className="font-medium text-destructive">Contratos Mensais</span>
                      </div>
                      <p className="text-xs">Incentivar migração para contratos anuais com descontos</p>
                    </div>
                    
                    <div className="p-3 bg-primary/10 border border-primary/20 rounded">
                      <div className="flex items-center gap-2 mb-1">
                        <Target className="h-4 w-4 text-primary" />
                        <span className="font-medium text-primary">Valor Total Baixo</span>
                      </div>
                      <p className="text-xs">Programas de fidelidade para clientes de menor valor</p>
                    </div>

                    <div className="p-3 bg-success/10 border border-success/20 rounded">
                      <div className="flex items-center gap-2 mb-1">
                        <Shield className="h-4 w-4 text-success" />
                        <span className="font-medium text-success">Suporte Técnico</span>
                      </div>
                      <p className="text-xs">Melhorar qualidade do suporte para reduzir churn</p>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-4 bg-gradient-primary/10 border-primary/20">
                <h5 className="font-medium mb-2 text-primary">Conclusões Estratégicas</h5>
                <div className="text-sm space-y-2">
                  <p>• O <strong>Random Forest</strong> apresentou o melhor desempenho geral (87.5% de acurácia)</p>
                  <p>• <strong>Tipo de contrato</strong> é o fator mais crítico para previsão de churn</p>
                  <p>• Clientes com <strong>contratos mensais</strong> têm 3x mais chance de cancelar</p>
                  <p>• Investir em <strong>suporte técnico</strong> pode reduzir churn em 15-20%</p>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};