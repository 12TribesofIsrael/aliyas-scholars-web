
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
      </div>
    </section>
  );
}
