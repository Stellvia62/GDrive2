import styles from "./Navbar.module.scss";
import logo from "../../assets/img/logo.svg";
import bell from "../../assets/img/bell-regular.svg"
import gear from "../../assets/img/gear-solid.svg"
import Avatar from "../Avatar/Avatar";
import menu from "../../assets/img/bars-solid.svg"
import question from "../../assets/img/question-solid.svg"

function Navbar() {

    return (
      <>
        <div className={styles.body}>
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
                <p>Google Drive</p>
            </div>
            <div className={styles.recherche}>
                <label htmlFor="search">
                    <input type="search" placeholder="Search Drive..." id="BRecherche"/>
                </label>
            </div>
            <div className={styles.icon}>
                <img src={bell} alt="Bell" />
                <img src={question} alt="Question" />
                <img src={gear} alt="Gear" />
            </div>
            <div className={styles.compte}>
                <p>Sebastien</p>
                <Avatar txt="Sebastien" class="avatar1"/>
            </div>
            <div className={styles.menu}>
                <img src={menu} alt="Menu" />
            </div>
        </div>
      </>
    )
  }
  
  export default Navbar;
  