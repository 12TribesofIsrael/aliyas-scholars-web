
import { Award, BookOpen, Calendar, Heart, Moon, ShieldCheck, Users } from "lucide-react";

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ProgramCard({ icon, title, description }: ProgramCardProps) {
  return (
    <div className="program-card animate-on-scroll">
      <div className="w-12 h-12 mb-4 text-daycare-red">{icon}</div>
      <h3 className="text-xl font-poppins font-bold mb-2 text-daycare-blue">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export function ProgramHighlights() {
  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="section-heading text-center mb-12">Program Highlights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProgramCard
            icon={<ShieldCheck className="w-full h-full" />}
            title="Safe Environment"
            description="We prioritize safety with secure facilities, trained staff, and comprehensive safety protocols."
          />
          
          <ProgramCard
            icon={<Users className="w-full h-full" />}
            title="Qualified Teachers"
            description="Our experienced educators are certified, background-checked, and dedicated to childhood development."
          />
          
          <ProgramCard
            icon={<BookOpen className="w-full h-full" />}
            title="Play-Based Curriculum"
            description="Children learn through play-rich activities designed to develop cognitive, social, and physical skills."
          />
          
          <ProgramCard
            icon={<Award className="w-full h-full" />}
            title="Free Meals"
            description="Nutritious breakfast, lunch, and snacks provided daily, meeting dietary requirements."
          />
          
          <ProgramCard
            icon={<Moon className="w-full h-full" />}
            title="Overnight Care"
            description="Available from 11 PM to 6:30 AM for families with non-traditional work schedules."
          />
          
          <ProgramCard
            icon={<Heart className="w-full h-full" />}
            title="15% Cash-Pay Discount"
            description="Families who pay with cash receive a 15% discount on childcare services."
          />
        </div>
      </div>
    </section>
  );
}
