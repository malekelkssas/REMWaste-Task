import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SkipItem } from "@/types";
import { createImageLink } from "@/utils/image";

interface SkipCardProps {
    skipItem: SkipItem;
    isSelected: boolean;
    onSelect: () => void;
}

const SkipCard = ({
    skipItem,
    isSelected,
    onSelect,
}: SkipCardProps) => {
    return (
        <Card
            className={cn(
                "relative overflow-hidden transition-all duration-200 cursor-pointer hover:shadow-lg",
                isSelected
                    ? "ring-2 ring-blue-600 shadow-lg"
                    : "hover:shadow-md"
            )}
            onClick={onSelect}
        >
            <CardContent className="p-0">
                <div className="relative">
                    <img
                        src={createImageLink(skipItem.size)}
                        alt={`${skipItem.size} skip`}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                    />
                    <Badge className="absolute top-3 right-3 bg-blue-600 hover:bg-blue-700">
                        {skipItem.size} Yards
                    </Badge>
                    {skipItem.allowed_on_road && (
                        <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">
                            <AlertTriangle className="w-3 h-3" />
                            Not Allowed On The Road
                        </div>
                    )}
                </div>

                <div className="p-4 space-y-3">
                    <div>
                        <h3 className="text-lg font-semibold text-foreground">{skipItem.size}</h3>
                        <p className="text-sm text-muted-foreground">{skipItem.hire_period_days} Days</p>
                    </div>

                    <div className="text-2xl font-bold text-blue-600">
                        £{skipItem.price_before_vat}
                    </div>

                    <Button
                        className={cn(
                            "w-full transition-colors",
                            isSelected
                                ? "bg-blue-600 hover:bg-blue-700"
                                : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                        )}
                        onClick={onSelect}
                    >
                        {isSelected ? "Selected" : "Select This Skip"}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default SkipCard;