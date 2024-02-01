import * as React from "react";
import { Link } from "react-router-dom";

const Stuur: React.FC<any> = () => {
  return (
    <section>
      <ul>
        <li>
          <Link to={"/kosie"}>KØSIE</Link>
        </li>
        <li>
          <Link to={"/klasie"}>Kl@sie</Link>
        </li>
      </ul>
    </section>
  );
};

export default Stuur;
