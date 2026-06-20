import "./Services.css";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Web Development",
    price: "₹4999",
    rating: "⭐⭐⭐⭐⭐",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description: "Modern responsive websites and web apps.",
  },
  {
    id: 2,
    title: "AI Chatbot Development",
    price: "₹6999",
    rating: "⭐⭐⭐⭐⭐",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    description: "Custom AI chatbots for business automation.",
  },
  {
    id: 3,
    title: "Cloud Deployment",
    price: "₹3999",
    rating: "⭐⭐⭐⭐⭐",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    description: "AWS, Azure and Cloud deployment solutions.",
  },
  {
    id: 4,
    title: "UI/UX Design",
    price: "₹2999",
    rating: "⭐⭐⭐⭐⭐",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6",
    description: "Beautiful and modern user experiences.",
  },
  {
    id: 5,
    title: "Digital Marketing",
    price: "₹3499",
    rating: "⭐⭐⭐⭐⭐",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    description: "SEO, Social Media & Marketing campaigns.",
  },
  {
    id: 6,
    title: "Mobile App Development",
    price: "₹7999",
    rating: "⭐⭐⭐⭐⭐",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    description: "Android & iOS application development.",
  },
];

function Services() {
  return (
    <div className="services-page">

      <div className="services-header">
        <h1>Premium Services</h1>
        <p>Choose the best professional service for your business</p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <img src={service.image} alt={service.title} />

            <div className="service-content">
              <h2>{service.title}</h2>

              <p>{service.description}</p>

              <div className="rating">
                {service.rating}
              </div>

              <h3>{service.price}</h3>

              <Link
                to="/booking"
                className="book-btn"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Services;