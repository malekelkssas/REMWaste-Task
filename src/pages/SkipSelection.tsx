import { useEffect, useState } from "react";
import ProgressSteps from "@/components/ProgressSteps";
import SkipGrid from "@/components/SkipGrid";
import SkipList from "@/components/SkipList";
import { SkipItem } from "@/types";
import SkipSelectionFooter from "@/components/SkipSelectionFooter";
import SkipSelectionDisclaimer from "@/components/SkipSelectionDisclaimer";
import SkipSelectionHeader from "@/components/SkipSelectionHeader";
import SkipGridLoader from "@/components/SkipGridLoader";
import SkipListLoader from "@/components/SkipListLoader";
import { SkipItemsService } from "@/api/services";
import { LayoutList, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeSwitch from "@/components/ThemeSwitch";

const VIEW_PREFERENCE_KEY = "skip-view-preference";

const SkipSelection = () => {
  const [selectedSkip, setSelectedSkip] = useState<SkipItem>();
  const [isLoading, setIsLoading] = useState(true);
  const [skipOptions, setSkipOptions] = useState<SkipItem[]>([]);
  const [isGrid, setIsGrid] = useState(() => {
    const savedPreference = localStorage.getItem(VIEW_PREFERENCE_KEY);
    return savedPreference ? JSON.parse(savedPreference) : false;
  });

  // Save view preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem(VIEW_PREFERENCE_KEY, JSON.stringify(isGrid));
  }, [isGrid]);

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

  const changeView = () => {
    setIsGrid(!isGrid);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <ProgressSteps />

      <div className="max-w-6xl mx-auto px-4 py-8 pb-28">
        <SkipSelectionHeader />

        {isLoading ? (
          <>
            {isGrid ? (
              <div className="hidden md:block">
                <SkipGridLoader />
            </div>
            ) : (
              <div className="hidden md:block">
                <SkipListLoader />
              </div>
            )}
          </>
        ) : (
          <>
            <div className="flex justify-end mb-4 gap-2">
              <ThemeSwitch />
              <div className="hidden md:flex items-center gap-2 bg-secondary p-1 rounded-lg">
                {!isGrid ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2 cursor-pointer transition-all duration-200 bg-background shadow-sm text-blue-600"
                    onClick={changeView}
                  >
                    <LayoutList className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2 cursor-pointer transition-all duration-200 bg-background shadow-sm text-blue-600"
                    onClick={changeView}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>

            <div className="hidden md:block">
              {!isGrid ? (
                <div className="space-y-4 mb-8">
                  {skipOptions.map((skip) => (
                    <SkipList
                      key={skip.id}
                      skipItem={skip}
                      isSelected={selectedSkip?.id === skip.id}
                      onSelect={() => onSelectSkip(skip)}
                    />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {skipOptions.map((skip) => (
                    <SkipGrid
                      key={skip.id}
                      skipItem={skip}
                      isSelected={selectedSkip?.id === skip.id}
                      onSelect={() => onSelectSkip(skip)}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="md:hidden">
              <div className="grid grid-cols-1 gap-6 mb-8">
                {skipOptions.map((skip) => (
                  <SkipGrid
                    key={skip.id}
                    skipItem={skip}
                    isSelected={selectedSkip?.id === skip.id}
                    onSelect={() => onSelectSkip(skip)}
                  />
                ))}
              </div>
            </div>

            {selectedSkip && (
              <SkipSelectionFooter
                selectedSkipData={selectedSkip}
                onBack={() => setSelectedSkip(null)}
                onContinue={() => setSelectedSkip(null)}
              />
            )}
          </>
        )}

        <SkipSelectionDisclaimer />
      </div>
    </div>
  );
};

export default SkipSelection;