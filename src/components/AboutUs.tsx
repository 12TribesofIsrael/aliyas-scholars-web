
export function AboutUs() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/926d7d6a-1fb2-4ba0-a36f-d74e96414194.png" 
              alt="Aliyas Little Scholars Daycare Logo" 
              className="max-w-sm w-full"
            />
          </div>
          
          <div className="animate-on-scroll">
            <h2 className="section-heading text-daycare-blue mb-6">About Us</h2>
            <p className="text-lg mb-4">
              At Aliyas Little Scholars, we believe that when children play, they learn—and when they learn, they thrive. 
              Our play-rich environments spark curiosity and encourage exploration, helping children grow in every way.
            </p>
            <p className="text-lg mb-4">
              We're more than just childcare; we're a community dedicated to nurturing the whole child through 
              educational activities, caring relationships, and safe spaces to explore and develop.
            </p>
            <p className="text-lg">
              Our qualified and experienced teachers create environments where children can discover, 
              create and develop important skills that will serve them throughout their lives.
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-poppins font-bold text-center mb-8 text-daycare-blue">Our Philosophy</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll order-2 md:order-1">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-poppins font-bold text-daycare-red mb-4">Empowering Daily Affirmations</h4>
                <p className="text-lg mb-4">
                  We believe in the power of positive affirmations to build confidence and self-esteem in young children.
                  Every day, our little scholars recite these important words as part of our morning routine.
                </p>
                <p className="text-lg">
                  These affirmations help children develop a growth mindset and believe in their abilities as they learn and grow.
                  When children see themselves as smart, brave, important, and scholarly, they approach challenges with confidence.
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <img 
                src="/lovable-uploads/5b0d2ad1-d154-4616-94fc-cb4ee0919109.png" 
                alt="Daily affirmations: I am smart, I am brave, I am important, I am a scholar" 
                className="rounded-lg shadow-lg w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
