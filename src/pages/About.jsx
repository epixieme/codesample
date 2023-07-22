import Button from "../components/Button";
import bgImg from "../assets/images/about-hero-img.jpg";

export default function About() {
  return (
    <section className="about-container">
      <img src={bgImg} className="about-hero-img" />
      <section className="about-content">
        <h1>
          Forget the allotment waiting list, get ahead of the game and start
          growing.
        </h1>
        <p>
          The benefits of home grown produce are endless, eg. saving costs,
          reducing the environmental impact of packaging.
        </p>
        <p>
          Our mission is to get people growing. Allotment wait lists are getting
          longer and surplus land is going to waste.
        </p>
        <p>
          Lets skip the queue and put you in touch to rent land directly from
          our community of land owners.
        </p>
      </section>
      <section className="about-call-to-action">
        <h2>What are you waiting for? Your plot is waiting.</h2>
        <h3>Check out our List of Rentals</h3>
        <Button btnText="Explore our plots" />
      </section>
    </section>
  );
}
