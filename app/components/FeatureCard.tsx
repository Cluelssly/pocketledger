type FeatureCardProps = {
  icon: string;
  title: string;
  text: string;
};

export default function FeatureCard({ icon, title, text }: FeatureCardProps) {
  return (
    <div className="home-card">
      <div className="home-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
