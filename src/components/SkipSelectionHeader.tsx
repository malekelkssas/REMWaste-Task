import { LayoutGrid, LayoutList } from "lucide-react";
import ThemeSwitch from "./ThemeSwitch";
import { Button } from "./ui/button";

interface SkipSelectionHeaderProps {
  isGrid: boolean;
  changeView: () => void;
}

const SkipSelectionHeader = ({ isGrid, changeView }: SkipSelectionHeaderProps) => {
  
  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Choose Your Skip Size
        </h1>
        <p className="text-muted-foreground">
          Select the skip size that best suits your needs
        </p>
      </div>
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
    </>
  );
};

export default SkipSelectionHeader;
