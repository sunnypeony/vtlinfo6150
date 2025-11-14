
import './PanelsPage.css';
import Image1 from "../assets/nathan-da-silva-k-rKfqSm4L4-unsplash.jpg";
import Image2 from "../assets/domenico-loia-hGV2TfOh0ns-unsplash.jpg";

function PanelsPage() {
  return (
    <section className="panels">
      <div className="panel">
        <img src={Image1} alt="Starting a daily programming routin with a cup of coffee" />
        <div className="panel__text">
          <h2 className="panel__title">Pariatur magna ut cupidatat in eiusmod ex magna occaecat.</h2>
          <p className="panel__content">
            Labore excepteur dolor non adipisicing pariatur cupidatat ut. Id cupidatat sunt velit reprehenderit officia in pariatur quis pariatur pariatur reprehenderit consectetur nisi. Voluptate reprehenderit dolore incididunt et labore tempor in anim adipisicing mollit ut cillum laboris.
          </p>
        </div>
      </div>

      <div className="panel reverse">
        <img src={Image2} alt="A clear working desk environment with a bright window" />
        <div className="panel__text">
          <h2 className="panel__title">Voluptate qui ut ex enim.</h2>
          <p className="panel__content">
            Eiusmod velit do id magna ad anim laborum consectetur veniam magna sint officia. Ipsum reprehenderit culpa eu nulla. Eiusmod pariatur anim esse non incididunt aliquip mollit irure irure. Duis irure quis ullamco exercitation exercitation tempor consequat cupidatat. Dolore ad deserunt tempor incididunt id consectetur dolore aliquip laboris magna mollit id tempor.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PanelsPage;