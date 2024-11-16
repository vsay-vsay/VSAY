import clsx from 'clsx';
import Image from 'next/image'

interface Testimonial {
  content: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
}

const testimonials: Testimonial[][] = [
  [
    {
      content:
        'TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.',
      author: {
        name: 'Sheryl Berge',
        role: 'CEO at Lynch LLC',
        image: "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
      },
    },
    {
      content:
        'I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.',
      author: {
        name: 'Amy Hahn',
        role: 'Director at Velocity Industries',
        image: "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
      },
    },
  ],
  [
    {
      content:
        'The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.',
      author: {
        name: 'Leland Kiehn',
        role: 'Founder of Kiehn and Sons',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      },
    },
    {
      content:
        'There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.',
      author: {
        name: 'Erin Powlowski',
        role: 'COO at Armstrong Inc',
        image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      },
    },
  ],
  [
    {
      content:
        'I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.',
      author: {
        name: 'Peter Renolds',
        role: 'Founder of West Inc',
        image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
      },
    },
    {
      content:
        'This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.',
      author: {
        name: 'Amy Hahn',
        role: 'Director at Velocity Industries',
        image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
      },
    },
  ],
]

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export default function FUITestimonialWithGrid() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="relative bg-transparent py-20 sm:py-10 z-1 bg-page-gradient"
    >
      <div className="absolute -z-1 inset-0 h-[600px] w-full bg-transparent opacity-5 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="absolute top-0 z-[0] h-screen opacity-20 w-screen bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="absolute inset-x-0 -top-10 opacity-50 z-10 m-auto h-[27rem] max-w-lg sm:h-64 sm:max-w-7xl"></div>

      <div className="relative z-[2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-white">What our customers are saying</h2>
            <p className="mt-4 text-lg text-gray-500">
              Here’s what some of our clients think of us. These are true testimonials from satisfied customers.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-16 mt-16 lg:grid-cols-2 lg:gap-12">
            {testimonials.flat().map((testimonial, index) => (
              <li key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    className="h-14 w-14 rounded-full object-cover"
                    src={testimonial.author.image}
                    alt={testimonial.author.name}
                    width={56}
                    height={56}
                  />
                </div>
                <div>
                  <QuoteIcon className="h-6 w-6 text-purple-500" />
                  <p className="mt-1 text-base text-white">{testimonial.content}</p>
                  <div className="mt-2">
                    <p className="text-sm font-medium text-purple-500">{testimonial.author.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.author.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
