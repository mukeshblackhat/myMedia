import Link from "next/link";
import styles from "../styles/card.module.css";
import DownloadLogo from "../assets/download.svg";
import eye from "../assets/eye.svg"
import heartBlank from "../assets/heart-blank.svg"
import redHeart from "../assets/red-heart-svgrepo-com.svg"
import {useState} from "react"

const Card = (data) => {
  const reqData = data.data;
  const { user, urls, views, likes, downloads, description,liked_by_user } = reqData;
  const { username, profile_image } = user;
  const  [like,setLike]=useState(liked_by_user);
  console.log(like)
  const handleClick=()=>{
    setLike(!like)
  }
  return (
    <>
      <div className={styles.card}>
      
        <div className={styles.imageWrapper}>
          <div className={styles.image}>
            <img className={styles.imgClass} src={urls.regular} alt="Image" />
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.statItem}>
            <img className={styles.icons} src={eye.src}/>
            {views}</div>
          <div className={styles.likeHover} onClick={handleClick}>
            {like?(
              <img className={styles.icons}  src={redHeart.src}/>
            ):(
            <img className={styles.icons} src={heartBlank.src}/>
             
            )}
            
            {likes}</div>
          <div className={styles.statItem}>
           
              <img className={styles.icons} src={DownloadLogo.src} />
            
            {/* <DownloadLogo/> */}
            {downloads}
          </div>
        </div>

        <div className={styles.topSection}>
          <div className={styles.profileImage}>
            <img
              src={profile_image.medium}
              alt="Profile"
              className={styles.profileImg}
            />
          </div>
          <Link className={styles.linkClass} href={`/profile/${username}`}>
            <div className={styles.username}>{username}</div>
          </Link>
        </div>

        <div className={styles.description}>
          <div>{username}</div>
          <div className={styles.description}>{description}</div>
        </div>
        {/* <div className={styles.daysAgo}>days ago</div> */}
      </div>
    </>
  );
};

export default Card;
