import { cn } from "@/lib/utils";

interface GiftCardProps {
  template: 1 | 2 | 3;
  amount?: string;
  message?: string;
  from?: string;
  to?: string;
  className?: string;
}

import template1 from "@/assets/gift-card-template-1.jpg";
import template2 from "@/assets/gift-card-template-2.jpg";
import template3 from "@/assets/gift-card-template-3.jpg";

const templates = {
  1: {
    bg: "bg-gradient-to-br from-[hsl(182,55%,45%)] to-[hsl(182,75%,22%)]",
    image: template1,
    name: "Montañas Serenas"
  },
  2: {
    bg: "bg-gradient-to-br from-[hsl(152,65%,35%)] to-[hsl(152,75%,25%)]",
    image: template2,
    name: "Luces Doradas"
  },
  3: {
    bg: "bg-gradient-to-br from-[hsl(182,65%,32%)] to-[hsl(182,75%,22%)]",
    image: template3,
    name: "Olas Elegantes"
  }
};

const GiftCard = ({ template, amount, message, from, to, className }: GiftCardProps) => {
  const selectedTemplate = templates[template];
  
  return (
    <div 
      className={cn(
        "relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-[var(--shadow-card)] card-reveal",
        className
      )}
    >
      <img 
        src={selectedTemplate.image} 
        alt={selectedTemplate.name}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
      <div className="relative h-full flex flex-col justify-between p-8 text-white">
        <div className="space-y-2">
          <div className="text-sm font-medium opacity-90">Smart Gift by Skandia</div>
          {to && (
            <div className="text-2xl font-bold">
              Para: {to}
            </div>
          )}
        </div>
        
        <div className="space-y-4">
          {amount && (
            <div className="text-5xl font-bold tracking-tight">
              ${amount}
            </div>
          )}
          
          {message && (
            <div className="text-sm opacity-90 line-clamp-3 italic">
              "{message}"
            </div>
          )}
          
          {from && (
            <div className="text-sm font-medium">
              De: {from}
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between text-xs opacity-75">
          <span>🎁 Regalo Inteligente</span>
          <span>✨ Invierte en tu futuro</span>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
