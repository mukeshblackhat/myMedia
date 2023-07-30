import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/card.module.css'
import DownloadLogo from '../assets/download.svg'

const Card=(data)=>{
  // const router = useRouter();
  // const handleClick = (username) => {
  //   router.push(`/a/${username}`); 
  // }; 
  console.log(DownloadLogo," donwload image")
 console.log(data.data)
 const reqData=data.data;
 const {user,urls,views,likes,downloads,description
 }=reqData;
 const {username,profile_image}=user;
 
    return(
        <>
   <div className={styles.card}>
      <div className={styles.topSection}>
        <div className={styles.profileImage}>
        <img
            src={profile_image.medium}
            alt="Profile"
            className={styles.profileImage}
          /></div>
      <Link  className={styles.linkClass} href={`/a/${username}`}>
        <div 
        className={styles.username}
         >{username}</div>
      </Link>
      </div>
      <div className="imageWrapper">
      <div className={styles.image}>
        <img
        className={styles.imgClass}
        src={urls.regular} 
        alt="Image" />
      </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.statItem}>{views}</div>
        <div className={styles.statItem}>{likes}</div>
        <div className={styles.statItem}>
            <div><img src={DownloadLogo.src}/></div>
            {/* <DownloadLogo/> */}
          {downloads}
          
          </div>
      </div>
      <div className={styles.description}>
        <div>{username}</div>
        <div className={styles.description}>{description}</div>
      </div>
      {/* <div className={styles.daysAgo}>days ago</div> */}
    </div>
</>

        
    )
}

export default Card