import { cn } from "@/lib/utils";

interface GiftCardProps {
  template: 1 | 2 | 3;
  amount?: string;
  message?: string;
  from?: string;
  to?: string;
  className?: string;
}

const templates = {
  1: {
    bg: "bg-gradient-to-br from-[hsl(182,55%,45%)] to-[hsl(182,75%,22%)]",
    image: "/src/assets/gift-card-template-1.jpg",
    name: "Winter Teal"
  },
  2: {
    bg: "bg-gradient-to-br from-[hsl(0,85%,55%)] to-[hsl(0,75%,40%)]",
    image: "/src/assets/gift-card-template-2.jpg",
    name: "Festive Red"
  },
  3: {
    bg: "bg-gradient-to-br from-[hsl(182,65%,32%)] to-[hsl(152,65%,35%)]",
    image: "/src/assets/gift-card-template-3.jpg",
    name: "Elegant Forest"
  }
};

const GiftCard = ({ template, amount, message, from, to, className }: GiftCardProps) => {
  const selectedTemplate = templates[template];
  
  return (
    <div 
      className={cn(
        "relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-[var(--shadow-card)] card-reveal",
        selectedTemplate.bg,
        className
      )}
    >
      <div className="absolute inset-0 bg-black/10" />
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
