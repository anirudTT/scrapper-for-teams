import { Button } from "@/components/ui/button";
import type { LLMFilter as LLMFilterType } from "../../types";

interface LLMFilterProps {
  llmFilters: LLMFilterType[];
  onLLMToggle: (llmId: string) => void;
}

export const LLMFilter = ({ llmFilters, onLLMToggle }: LLMFilterProps) => {
  const getButtonColor = (llm: LLMFilterType) => {
    if (!llm.selected) return "outline";

    switch (llm.color) {
      case "green":
        return "bg-green-600 hover:bg-green-700 text-white";
      case "brown":
        return "bg-amber-600 hover:bg-amber-700 text-white";
      case "blue":
        return "bg-blue-600 hover:bg-blue-700 text-white";
      default:
        return "default";
    }
  };

  return (
    <div className="flex gap-2">
      {llmFilters.map((llm) => (
        <Button
          key={llm.id}
          variant={llm.selected ? "default" : "outline"}
          size="sm"
          onClick={() => onLLMToggle(llm.id)}
          className={llm.selected ? getButtonColor(llm) : ""}
        >
          <span className="mr-2">{llm.icon}</span>
          {llm.name}
        </Button>
      ))}
    </div>
  );
};
