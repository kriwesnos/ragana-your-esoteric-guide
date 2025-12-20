import { Link } from 'react-router-dom';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  className?: string;
  image?: string;
}

export function ServiceCard({ icon: Icon, title, description, delay = 0, className, image }: ServiceCardProps) {
  const { t } = useLanguage();

  return (
    <div
      className={cn(
        "group relative bg-card rounded-2xl shadow-spiritual border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          {/* Icon overlay */}
          <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-primary/90 flex items-center justify-center backdrop-blur-sm">
            <Icon className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>
      )}

      {/* Decorative gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div className="relative p-6">
        {/* Icon (only show if no image) */}
        {!image && (
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-7 h-7 text-primary" />
          </div>
        )}

        {/* Content */}
        <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Link */}
        <Link
          to="/contacts"
          className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
        >
          {t('services.more')}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
