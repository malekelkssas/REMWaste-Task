import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { THEME_CONSTANTS } from "@/utils/constants";
import { cn } from "@/lib/utils";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-secondary p-1 rounded-lg">
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "h-8 px-2 cursor-pointer transition-all duration-200",
          theme === THEME_CONSTANTS.DARK 
            ? "bg-background shadow-sm text-blue-600" 
            : "hover:bg-background/50 hover:text-blue-600"
        )}
        onClick={() => setTheme(theme === THEME_CONSTANTS.DARK ? THEME_CONSTANTS.LIGHT : THEME_CONSTANTS.DARK)}
      >
        {theme === THEME_CONSTANTS.DARK ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
};

export default ThemeSwitch; 