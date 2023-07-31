import Card from './Card';
import { useEffect, useState } from 'react';
import { fetchRandomPhotos } from '../api/apiUtils';
import styles from "../styles/home.module.css";
import useScrollToBottom from '../hooks/useScrollToBottom';
import Link from 'next/link';


const Home = () => {
  const [data, setData] = useState(null);
  const [userData,setUserData] = useState(null);
  const [loader, setLoader] = useState(true);
  const isBottom = useScrollToBottom();

  useEffect(()=>{
    const  extractUsers=(array) => array?.map((item) => item.user);
    setUserData(extractUsers(data));
    console.log(userData)
  },[data])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchRandomPhotos();
        setData(response);
        setLoader(false);
      } catch (error) {
        setLoader(false);
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const fetchDataOnScroll = async () => {
      if (isBottom) {
        try {
          const response = await fetchRandomPhotos();
          setData((prevData) => [...prevData, ...response]);
          setLoader(false);
        } catch (error) {
          setLoader(false);
        }
      }
    };
    fetchDataOnScroll();
  }, [isBottom]);
if(loader){
  return(
    <>
    <div className={styles.loader}> MyMedia Loading ....</div>
    </>
  )
}else {

  return (
    <>
    <div className={styles.flexContainer}>
      <div className={styles.leftColumn}>
        {data?.map((item, index) => <Card key={index} data={item} />)}
      </div>
      <div className={styles.rightColumn}>


        <div className={styles.suggestedUsers}>Trusted Insider</div>
        {userData?.map((data, index) => {
          const { username, profile_image } = data;
          
          return (
            <div key={index} className={styles.userItem}>
              <div className={styles.userImage}>
                <img src={profile_image.small} alt="Profile" />
              </div>
              <Link className={styles.linkClass} href={`/profile/${username}`}>
              <div className={styles.userName}>{username}</div>
              </Link>
              <div className={styles.emptyDiv}></div>
            </div>
          );
        })}
      </div>
    </div>
  </>
  );}
};

export default Home;
