import styles from "./BarreGauche.module.scss";
import Bouton from "./Bouton/Bouton";
import compass from "../../assets/img/compass-regular.svg";
import ecran from "../../assets/img/desktop-solid.svg";
import friend from "../../assets/img/people-group-solid.svg";
import clock from "../../assets/img/clock-regular.svg";
import star from "../../assets/img/star-solid.svg";
import trash from "../../assets/img/trash-solid.svg";
import backup from "../../assets/img/arrow-rotate-left-solid.svg";

function BarreGauche() {

    return (
      <>
        <div className={styles.body}>
            <div className={styles.container}>
                <Bouton txt="Upload New File"/>
                <div className={styles.lien}>
                    <img src={compass} alt="Compass" />
                    <p>My drive</p>
                </div>
                <div className={styles.lien}>
                    <img src={ecran} alt="Ecran" />
                    <p>Computers</p>
                </div>
                <div className={styles.lien}>
                    <img src={friend} alt="Friend" />
                    <p>Shared with me</p>
                </div>
                <div className={styles.lien}>
                    <img src={clock} alt="Clock" />
                    <p>Recent</p>
                </div>
                <div className={styles.lien}>
                    <img src={star} alt="Star" />
                    <p>Starred</p>
                </div>
                <div className={styles.lien}>
                    <img src={trash} alt="Trash" />
                    <p>Trash</p>
                </div>
                <div className={styles.lien}>
                    <img src={backup} alt="Backup" />
                    <p>Backups</p>
                </div>
            </div>
        </div>
        
      </>
    )
  }
  
  export default BarreGauche;
  