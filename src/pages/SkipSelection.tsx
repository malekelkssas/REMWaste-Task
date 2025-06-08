import { useEffect, useState } from "react";
import ProgressSteps from "@/components/ProgressSteps";
import SkipCard from "@/components/SkipCard";
import { SkipItem } from "@/types";
import SkipSelectionFooter from "@/components/SkipSelectionFooter";
import SkipSelectionDisclaimer from "@/components/SkipSelectionDisclaimer";
import SkipSelectionHeader from "@/components/SkipSelectionHeader";
import SkipSelectionLoader from "@/components/SkipSelectionLoader";

const SkipSelection = () => {
  const [selectedSkip, setSelectedSkip] = useState<number>(17933);
  const [isLoading, setIsLoading] = useState(true);

  const skipOptions: SkipItem[] = [
    {
      "id": 17933,
      "size": 4,
      "hire_period_days": 14,
      "transport_cost": null,
      "per_tonne_cost": null,
      "price_before_vat": 278,
      "vat": 20,
      "postcode": "NR32",
      "area": "",
      "forbidden": false,
      "created_at": "2025-04-03T13:51:46.897146",
      "updated_at": "2025-04-07T13:16:52.813",
      "allowed_on_road": true,
      "allows_heavy_waste": true
    },
    {
      "id": 17934,
      "size": 6,
      "hire_period_days": 14,
      "transport_cost": null,
      "per_tonne_cost": null,
      "price_before_vat": 305,
      "vat": 20,
      "postcode": "NR32",
      "area": "",
      "forbidden": false,
      "created_at": "2025-04-03T13:51:46.897146",
      "updated_at": "2025-04-07T13:16:52.992",
      "allowed_on_road": true,
      "allows_heavy_waste": true
    },
    {
      "id": 17935,
      "size": 8,
      "hire_period_days": 14,
      "transport_cost": null,
      "per_tonne_cost": null,
      "price_before_vat": 375,
      "vat": 20,
      "postcode": "NR32",
      "area": "",
      "forbidden": false,
      "created_at": "2025-04-03T13:51:46.897146",
      "updated_at": "2025-04-07T13:16:53.171",
      "allowed_on_road": true,
      "allows_heavy_waste": true
    },
    {
      "id": 17936,
      "size": 10,
      "hire_period_days": 14,
      "transport_cost": null,
      "per_tonne_cost": null,
      "price_before_vat": 400,
      "vat": 20,
      "postcode": "NR32",
      "area": "",
      "forbidden": false,
      "created_at": "2025-04-03T13:51:46.897146",
      "updated_at": "2025-04-07T13:16:53.339",
      "allowed_on_road": false,
      "allows_heavy_waste": false
    },
    {
      "id": 17937,
      "size": 12,
      "hire_period_days": 14,
      "transport_cost": null,
      "per_tonne_cost": null,
      "price_before_vat": 439,
      "vat": 20,
      "postcode": "NR32",
      "area": "",
      "forbidden": false,
      "created_at": "2025-04-03T13:51:46.897146",
      "updated_at": "2025-04-07T13:16:53.516",
      "allowed_on_road": false,
      "allows_heavy_waste": false
    },
    {
      "id": 17938,
      "size": 14,
      "hire_period_days": 14,
      "transport_cost": null,
      "per_tonne_cost": null,
      "price_before_vat": 470,
      "vat": 20,
      "postcode": "NR32",
      "area": "",
      "forbidden": false,
      "created_at": "2025-04-03T13:51:46.897146",
      "updated_at": "2025-04-07T13:16:53.69",
      "allowed_on_road": false,
      "allows_heavy_waste": false
    },
    {
      "id": 17939,
      "size": 16,
      "hire_period_days": 14,
      "transport_cost": null,
      "per_tonne_cost": null,
      "price_before_vat": 496,
      "vat": 20,
      "postcode": "NR32",
      "area": "",
      "forbidden": false,
      "created_at": "2025-04-03T13:51:46.897146",
      "updated_at": "2025-04-07T13:16:53.876",
      "allowed_on_road": false,
      "allows_heavy_waste": false
    },
    {
      "id": 15124,
      "size": 20,
      "hire_period_days": 14,
      "transport_cost": 248,
      "per_tonne_cost": 248,
      "price_before_vat": 992,
      "vat": 20,
      "postcode": "NR32",
      "area": "",
      "forbidden": false,
      "created_at": "2025-04-03T13:51:40.344435",
      "updated_at": "2025-04-07T13:16:52.434",
      "allowed_on_road": false,
      "allows_heavy_waste": true
    },
    {
      "id": 15125,
      "size": 40,
      "hire_period_days": 14,
      "transport_cost": 248,
      "per_tonne_cost": 248,
      "price_before_vat": 992,
      "vat": 20,
      "postcode": "NR32",
      "area": "",
      "forbidden": false,
      "created_at": "2025-04-03T13:51:40.344435",
      "updated_at": "2025-04-07T13:16:52.603",
      "allowed_on_road": false,
      "allows_heavy_waste": false
    }
  ];

  const selectedSkipData = skipOptions.find(skip => skip.id === selectedSkip);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
                  isSelected={selectedSkip === skip.id}
                  onSelect={() => setSelectedSkip(skip.id)}
                />
              ))}
            </div>
            <SkipSelectionFooter
              selectedSkipData={selectedSkipData}
              onBack={() => setSelectedSkip(null)}
              onContinue={() => setSelectedSkip(null)}
            />
          </>
        )}



        <SkipSelectionDisclaimer />
      </div>
    </div>
  );
};

export default SkipSelection;