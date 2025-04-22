
export function EnrollmentForm() {
  return (
    <section id="enrollment-form" className="py-16 bg-daycare-blue">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center text-white mb-8">
          <h2 className="text-4xl md:text-5xl font-poppins font-extrabold mb-4">
            Enroll Your Child Today
          </h2>
          <p className="text-xl text-white/90">
            Fill out the form below to schedule a tour or request more information.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="p-6 md:p-8">
            <p className="text-center text-gray-700 mb-6">
              Please note: This is a placeholder for the GoHighLevel form embed.
              In the production version, replace this with the actual iframe.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-daycare-blue focus:border-daycare-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-daycare-blue focus:border-daycare-blue"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-daycare-blue focus:border-daycare-blue"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-daycare-blue focus:border-daycare-blue"
                />
              </div>
              
              <div>
                <label htmlFor="child-age" className="block text-sm font-medium text-gray-700 mb-1">
                  Child's Age
                </label>
                <select
                  id="child-age"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-daycare-blue focus:border-daycare-blue"
                >
                  <option value="">Select age range</option>
                  <option value="infant">Infant (0-12 months)</option>
                  <option value="toddler">Toddler (1-2 years)</option>
                  <option value="preschool">Preschool (3-4 years)</option>
                  <option value="pre-k">Pre-K (4-5 years)</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-daycare-blue focus:border-daycare-blue"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-daycare-red hover:bg-daycare-red/90 text-white font-bold py-3 px-6 rounded-md transition-colors"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
