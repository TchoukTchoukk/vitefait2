import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

export function Checkbox({ checked, onCheckedChange }) {
  return (
    <CheckboxPrimitive.Root
      className="w-5 h-5 bg-white border border-gray-300 rounded flex items-center justify-center"
      checked={checked}
      onCheckedChange={onCheckedChange}
    >
      <CheckboxPrimitive.Indicator>
        <Check className="w-4 h-4 text-black" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
