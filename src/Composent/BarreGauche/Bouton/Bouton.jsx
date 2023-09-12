import styles from "./Bouton.scss";

function Bouton(txt) {

    return (
      <>
            <button className="Bouton">{txt.txt}</button>
      </>
    )
  }
  
  export default Bouton;
  