
export function EnrollmentForm() {
  return (
    <section id="enrollment-form" className="py-16 bg-daycare-blue relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img 
          src="/lovable-uploads/926d7d6a-1fb2-4ba0-a36f-d74e96414194.png" 
          alt="Background Pattern" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-poppins font-extrabold mb-6">
            Nurturing Minds, Building Futures
          </h2>
          <p className="text-xl text-white/90 mb-8">
            At Aliyas Little Scholars, we believe every child deserves the best start in life.
            Our dedicated team of educators creates a warm, engaging environment where children
            can learn, grow, and thrive.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-3">Quality Care</h3>
              <p>Certified teachers and staff dedicated to your child's development</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-3">Safe Environment</h3>
              <p>Secure facilities with modern safety measures and protocols</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-3">Learning Through Play</h3>
              <p>Age-appropriate activities that make learning fun and engaging</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
