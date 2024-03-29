import { FC, useState } from "react";
import ocean from "./assets/videos/ocean.mov";
import Header from "./components/Header";
import Button from "./components/Button";
import Social from "./components/Social";
import Form from "./components/Form";
import Footer from "./components/Footer";

const App: FC = () => {
  const [form, setForm] = useState(false);

  return (
    <section className="showcase">
      <Header />
      <video src={ocean} muted loop autoPlay></video>
      <div className="overlay"></div>
      <div className="text">
        <h2>Never stop</h2>
        <h3>Fighting for our planet</h3>
        <p>
          Help us save the ocean, support our campaign to protect the planet.
        </p>
        {form && <Form />}
        <Button
          text={form ? "Close" : "Join us"}
          onClick={() => setForm(!form)}
        />
      </div>
      <Social />
      <Footer />
    </section>
  );
};

export default App;
