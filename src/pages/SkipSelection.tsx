import { useEffect, useState } from "react";
import ProgressSteps from "@/components/ProgressSteps";
import SkipCard from "@/components/SkipCard";
import { SkipItem } from "@/types";
import SkipSelectionFooter from "@/components/SkipSelectionFooter";
import SkipSelectionDisclaimer from "@/components/SkipSelectionDisclaimer";
import SkipSelectionHeader from "@/components/SkipSelectionHeader";
import SkipSelectionLoader from "@/components/SkipSelectionLoader";
import { SkipItemsService } from "@/api/services";

const SkipSelection = () => {
  const [selectedSkip, setSelectedSkip] = useState<SkipItem>();
  const [isLoading, setIsLoading] = useState(true);
  const [skipOptions, setSkipOptions] = useState<SkipItem[]>([]);

  

  // fetch skip items
  useEffect(() => {
    const fetchSkipItems = async () => {
      const skipItems = await SkipItemsService.getSkipItems();
      setSkipOptions(skipItems);
    };

    fetchSkipItems();
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const onSelectSkip = (skip: SkipItem) => {
    if (selectedSkip?.id === skip.id) {
      setSelectedSkip(null);
    } else {
      setSelectedSkip(skip);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <ProgressSteps />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <SkipSelectionHeader />

        {isLoading ? (
          <SkipSelectionLoader />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {skipOptions.map((skip) => (
                <SkipCard
                  key={skip.id}
                  skipItem={skip}
                  isSelected={selectedSkip?.id === skip.id}
                  onSelect={() => onSelectSkip(skip)}
                />
              ))}
            </div>
            {
              selectedSkip && (
                <SkipSelectionFooter
                  selectedSkipData={selectedSkip}
                  onBack={() => setSelectedSkip(null)}
                  onContinue={() => setSelectedSkip(null)}
                />
              )
            }
          </>
        )}



        <SkipSelectionDisclaimer />
      </div>
    </div>
  );
};

export default SkipSelection;