import portfolioImage from '../../assets/cover/danny.png';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
          <img
            src={portfolioImage}
            alt="Your Portfolio Image"
            style={{ width: "192px", height: "192px", borderRadius: "50%" }}
          />
        </div>
        <p>
          Aspiring web developer with a passion for creating impactful digital experiences. Equipped with strong skills in HTML, CSS, JavaScript, and responsive design, I am committed to continuously learning and refining my abilities in front-end development. With a keen eye for detail and a dedication to user-centric design principles, I always strive to deliver intuitive and visually appealing websites. The following projects have equipped me with a solid foundation in web development and a knack for problem-solving. I am eager to contribute my enthusiasm and technical skills to a dynamic team, making meaningful contributions from day one.
        </p>
      </div>
    </section>
  );
} 

export default About;
