import styles from "./Home.module.scss"
import Navbar from "../../Composent/Navbar/Navbar";
import BarreGauche from "../../Composent/BarreGauche/BarreGauche";
import MyDrive from "../../Composent/MyDrive/MyDrive";
import QuickAcces from "../../Composent/QuickAcces/QuickAcces";
import AllFiles from "../../Composent/AllFiles/AllFiles";

const Home = () =>{
    return(
        <> 
            <div className={styles.body}>
                <Navbar/>
                <div className={styles.body2}>
                    <BarreGauche />
                    <div className={styles.body3}>
                        <MyDrive/>
                        <QuickAcces/>
                        <AllFiles/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;