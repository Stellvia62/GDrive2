import styles from "./Avatar.scss";

function Avatar(txt) {
    let FL = txt.txt.substring(0,1);
     return (
        
      <>
        <div className={txt.class}>
            <p>{FL}</p>
        </div>
      </>
    )
  }
  
  export default Avatar;
  