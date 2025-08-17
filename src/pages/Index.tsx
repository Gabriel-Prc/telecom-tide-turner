import { Header } from "@/components/dashboard/Header";
import { DataImportSection } from "@/components/dashboard/DataImportSection";
import { ChurnDistributionChart } from "@/components/dashboard/ChurnDistributionChart";
import { CategoricalAnalysis } from "@/components/dashboard/CategoricalAnalysis";
import { NumericalAnalysis } from "@/components/dashboard/NumericalAnalysis";
import { ReportSection } from "@/components/dashboard/ReportSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 pb-8">
        <DataImportSection />
        <ChurnDistributionChart />
        <CategoricalAnalysis />
        <NumericalAnalysis />
        <ReportSection />
      </div>
    </div>
  );
};

export default Index;