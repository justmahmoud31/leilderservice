import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

export const FeatureCard = ({ image, title, description }: FeatureCardProps) => (
  <Card className="hover:shadow-lg transition-shadow duration-300 rounded-2xl overflow-hidden">
    <div className="relative w-full">
      <img src={image} alt={title}  />
    </div>
    <CardContent className="p-5">
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </CardContent>
  </Card>
);
