export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-3xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-foreground mb-4">Get in touch</h1>
        <h2 className="text-xl text-muted-foreground">Drop us a line</h2>
        <p className="mt-4 text-sm text-muted-foreground">
          Have a question about a product, your routine, or an order? Our team of skincare experts is here to help you.
        </p>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 sm:p-10 shadow-sm">
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-muted border-none rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-brand-500" 
                placeholder="Jane Doe" 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-muted border-none rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-brand-500" 
                placeholder="jane@example.com" 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
            <select 
              id="subject" 
              className="w-full bg-muted border-none rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-brand-500"
            >
              <option>Order Inquiry</option>
              <option>Product Question</option>
              <option>Routine Advice</option>
              <option>Returns & Refunds</option>
              <option>Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
            <textarea 
              id="message" 
              rows={5}
              className="w-full bg-muted border-none rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-brand-500 resize-y" 
              placeholder="How can we help you?" 
            />
          </div>

          <button 
            type="button" 
            className="w-full bg-brand-900 text-brand-50 py-4 rounded-full font-medium hover:bg-brand-700 transition-colors shadow-sm"
          >
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );
}
