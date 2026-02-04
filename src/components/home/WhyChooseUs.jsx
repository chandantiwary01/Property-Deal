import React from 'react';
// Import your background and icons manually
import bgTexture from '../../assets/whychooseus.png';
import safetyIcon from '../../assets/safety.png';
import qualityIcon from '../../assets/quality.png';
import experienceIcon from '../../assets/experience.png';
import professionalIcon from '../../assets/professional.png';
import staffIcon from '../../assets/staff.png';

const FeatureItem = ({ iconSrc, title, description }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="w-16 h-16 mb-6 flex items-center justify-center">
      
      <img src={iconSrc} alt={title} className="w-full h-full object-contain" />
    </div>
    
    <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">{title}</h3>
    <p className="text-gray-300 text-sm leading-relaxed max-w-[250px]">
      {description}
    </p>
  </div>
);

const WhyChooseUs = () => {
  
  const features = [
    {
      iconSrc: safetyIcon, 
      title: "Safety",
      description: "Lorem Ipsum has been Ipsum has beenLorem Ipsum has been Ipsum has been"
    },
    {
      iconSrc: qualityIcon,
      title: "Quality Work",
      description: "Lorem Ipsum has been Ipsum has beenLorem Ipsum has been Ipsum has been"
    },
    {
      iconSrc: experienceIcon,
      title: "Experience",
      description: "Lorem Ipsum has been Ipsum has beenLorem Ipsum has been Ipsum has been"
    },
    {
      iconSrc: professionalIcon,
      title: "Professional",
      description: "Lorem Ipsum has been Ipsum has beenLorem Ipsum has been Ipsum has been"
    },
    {
      iconSrc: staffIcon,
      title: "Qualified Staff",
      description: "Lorem Ipsum has been Ipsum has beenLorem Ipsum has been Ipsum has been"
    },
    {
      iconSrc: experienceIcon, 
      title: "Experience",
      description: "Lorem Ipsum has been Ipsum has beenLorem Ipsum has been Ipsum has been"
    }
  ];

  return (
    <section 
      className="py-24 px-6 bg-black relative overflow-hidden"
      style={{
        // FIX: Used the bgTexture variable here inside the template literal
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bgTexture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-20 relative z-10">
        <h2 className="text-4xl font-bold text-white mb-6">Why Choose Us</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Lorem Ipsum has been Ipsum has beenLorem Ipsum has been Ipsum has beenLorem Ipsum has been Ipsum has been
          Lorem Ipsum has been Ipsum has beenLorem Ipsum has been Ipsum has beenLorem Ipsum has been Ipsum has been
          beenLorem Ipsum has been ipsum has been
        </p>
      </div>

      {/* Grid Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8 relative z-10">
        {features.map((feature, index) => (
          <FeatureItem 
            key={index} 
            iconSrc={feature.iconSrc} 
            title={feature.title} 
            description={feature.description} 
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;