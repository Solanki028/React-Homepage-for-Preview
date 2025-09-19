import React from 'react';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: "Chef Marcus Rodriguez",
      role: "Executive Chef",
      image: "https://images.unsplash.com/photo-1583394293214-28a5b26d5c90?w=300&h=300&fit=crop",
      description: "With over 15 years of culinary experience, Chef Marcus brings innovation and passion to every dish."
    },
    {
      name: "Sarah Chen",
      role: "Pastry Chef",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop",
      description: "Sarah's artistic approach to desserts has earned recognition from culinary institutes worldwide."
    },
    {
      name: "David Thompson",
      role: "Sommelier",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      description: "David curates our wine selection and creates perfect pairings for our seasonal menu."
    }
  ];

  return (
    <>
      <SEO 
        title="About Us - Our Story and Team"
        description="Learn about TasteCraft's journey, our commitment to culinary excellence, and meet the passionate team behind our exceptional dining experience."
        keywords="about tastecraft, restaurant story, culinary team, fine dining experience, chef biography"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Story of Culinary Excellence
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the passion, dedication, and artistry that drives TasteCraft's 
              commitment to delivering extraordinary culinary experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                A Decade of Culinary Innovation
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2014, TasteCraft began as a dream to create a dining experience 
                that celebrates both tradition and innovation. Our founders, passionate about 
                culinary arts, envisioned a place where exceptional ingredients meet 
                masterful techniques.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've built relationships with local farmers and artisans, 
                ensuring that every ingredient that enters our kitchen meets our exacting 
                standards for quality and sustainability.
              </p>
              <p className="text-lg text-gray-600">
                Today, TasteCraft stands as a testament to our unwavering commitment to 
                culinary excellence, having served over 100,000 guests and earned recognition 
                from food critics and culinary institutions alike.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop"
                alt="Restaurant interior"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from ingredient selection 
              to guest service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our ingredients or the 
                execution of our dishes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to sustainable practices and supporting local 
                producers whenever possible.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Guest Experience</h3>
              <p className="text-gray-600">
                Every guest deserves exceptional service and a memorable 
                dining experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Culinary Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our talented team of culinary professionals brings passion, 
              creativity, and expertise to every dish.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recognition & Awards
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">★★★★★</div>
              <p className="text-gray-600">Michelin Guide Recognition</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2023</div>
              <p className="text-gray-600">Best New Restaurant</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100K+</div>
              <p className="text-gray-600">Happy Guests Served</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">
            Experience Our Story Firsthand
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join us for an exceptional dining experience and become part of our story.
          </p>
          <Link to="/contact">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Make a Reservation
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
