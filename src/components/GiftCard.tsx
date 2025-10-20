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
    bg: "bg-gradient-to-br from-[hsl(0,70%,50%)] to-[hsl(0,80%,35%)]",
    image: template1,
    name: "Regalos Rojos"
  },
  2: {
    bg: "bg-gradient-to-br from-[hsl(0,0%,20%)] to-[hsl(0,0%,10%)]",
    image: template2,
    name: "Marco Navideño"
  },
  3: {
    bg: "bg-gradient-to-br from-[hsl(180,30%,65%)] to-[hsl(180,25%,50%)]",
    image: template3,
    name: "Estrellas Doradas"
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
