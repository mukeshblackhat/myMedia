import Card from './Card';
import { useEffect, useState } from 'react';
import { fetchRandomPhotos } from '../api/apiUtils';
import styles from "../styles/home.module.css";
import useScrollToBottom from '../hooks/useScrollToBottom';

const Home = () => {
  const [data, setData] = useState(null);
  const [userData,setUserData]=useState(null);
  const [loading, setLoading] = useState(true);
  const isBottom=useScrollToBottom();

  useEffect(()=>{
    const  extractUsers=(array) =>array?.map((item) => item.user);
    setUserData(extractUsers(data));
    console.log(userData)
  },[data])

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchRandomPhotos();
        setData(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
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
          setLoading(false);
        } catch (error) {
          setLoading(false);
        }
      }
    };
    fetchDataOnScroll();
  }, [isBottom]);
  

  return (
    <>
    <div className={styles.flexContainer}>
      <div className={styles.leftColumn}>
        {data?.map((item, index) => <Card key={index} data={item} />)}
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.suggestedUsers}>Suggested Users</div>
        {userData?.map((data, index) => {
          const { username, profile_image } = data;
          
          return (
            <div key={index} className={styles.userItem}>
              <div className={styles.userImage}>
                <img src={profile_image.small} alt="Profile" />
              </div>
              <div className={styles.userName}>{username}</div>
              <div className={styles.emptyDiv}></div>
            </div>
          );
        })}
      </div>
    </div>
  </>
  );
};

export default Home;
