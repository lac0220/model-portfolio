import classes from './Home.scss';

export default function Home() {
    return (
        <section id="home">
        <div className="home">
          <ul className="home__name">
            <h3>Catalina Plamadeala</h3>
            <p>Model | Artist</p>
          </ul>
        </div> 
        <div className="home__socialmedia">
  <a href="https://www.linkedin.com/in/catalinaplamadeala97" target="_blank" alt="Instagram logo"><i className="fab fa-instagram"/></a>    {/* instagram */}
  <a href="https://www.linkedin.com/in/catalinaplamadeala97" target="_blank" alt="Facebook logo"><i className="fab fa-facebook" /></a>    {/* facebook */}
  <a href="https://www.linkedin.com/in/catalinaplamadeala97" target="_blank" alt="Linkedin logo"><i className="fab fa-linkedin" /></a>    {/* linkedin */}
</div>    
      </section>
    );
  }
