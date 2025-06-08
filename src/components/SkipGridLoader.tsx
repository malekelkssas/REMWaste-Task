import { Card } from "@/components/ui/card";

const SkipGridLoader = () => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {[...Array(9)].map((_, i) => (
        <Card key={i} className="bg-card p-4 sm:p-6 flex flex-col gap-4">
          <div className="h-32 w-full rounded shimmer mb-2" />
          <div className="h-6 w-24 rounded shimmer mb-1" />
          <div className="h-4 w-32 rounded shimmer mb-2" />
          <div className="h-10 w-full rounded shimmer mb-2" />
          <div className="flex justify-between items-center">
            <div className="h-4 w-1/3 rounded shimmer" />
            <div className="h-9 w-24 rounded shimmer" />
          </div>
        </Card>
      ))}
    </div>
  </>
);

export default SkipGridLoader; 