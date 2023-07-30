"use client";
import { useState, useEffect } from "react";
import styles from '../styles/profile.module.css';
import useScrollToBottom from "../hooks/useScrollToBottom";
import { fetchUserData, fetchUserPhotos } from '../api/apiUtils';
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from '../../redux/slices/counterSlice'
import { addPhotos } from "@/redux/slices/photoSlice";


const Profile = ({ params }) => {
  const isBottom=useScrollToBottom();
  const [data, setData] = useState();
  const [pgCount,setPgCount]=useState(1);
  const [photos, setPhotos] = useState([]);
  const photo = useSelector((state) => {console.log(state); return state.photo});
  const [loading, setLoading] = useState(true);
  const [errorData,setErrorData]=useState(false);
  const {user}=params;
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUserData(user);
        setData(userData);
  
        const photoRes = await fetchUserPhotos(user, pgCount);
        setPhotos(photoRes);
        dispatch(addPhotos(photoRes));
        setPgCount((prevPgCount) => prevPgCount + 1);
        setLoading(false);
        setErrorData(false)

      } catch (error) {
        console.log(error)
        setErrorData(true)
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

   useEffect(()=>{console.log(photo)},[photo])

    useEffect(() => {
      const fetchDataOnScroll = async () => {
        if (isBottom) {
          try {
            const photoRes = await fetchUserPhotos(user, pgCount);
            console.log("line 51 photo to reducer", photoRes)
            dispatch(addPhotos(photoRes));
            setPhotos((prevPhotos) => [...prevPhotos, ...photoRes]);
            setPgCount((prevPgCount) => prevPgCount + 1);
            setLoading(false);
          } catch (error) {
            setErrorData(true)
            setLoading(false);
          }
        }
      };
  
      fetchDataOnScroll();
    }, [isBottom]);

    

  {if(loading ){ return(<>
<div>Loading</div>
  </>) }
  else if(errorData){
    return(
      <>
      <div>Api Limit Reached try after some time ......</div>
      </>
    )
  }
  else{
  return (
    <>
     <div className={styles.topBar}>
        <div className={styles.navbarText}>MyMedia</div>
        {/* <div className={styles.lightModeText}>light mode</div> */}
      </div>
      <div>
      <h1>Counter: {count}</h1> {/* Display the counter state */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
      <div className={styles.container}>
        <div className={styles.maxWidth}>
          <div className={styles.profileSection}>
            <div className={styles.profileImageWrapper}>
              <img className={styles.profileImage} src={data?.profile_image.large} alt="Profile" />
            </div>
            <div className={styles.profileDetails}>
              <div className={styles.username}>{data?.username}</div>
              <div className={styles.name}>{data?.name}</div>
              <div className={styles.bio}>{data?.user?.bio}</div>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>{data?.total_photos}</div>
                  <div>Posts</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>{data?.followers_count}</div>
                  <div>Followers</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>{data?.following_count}</div>
                  <div>Following</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.photoSection}>
            {photos?.map((photo, index) => {
              // console.log(photo);
              const imageSizes = [
                { size: 200, url: photo.urls.thumb },
                { size: 400, url: photo.urls.small },
                { size: 1080, url: photo.urls.regular },
              ];
              const srcset = imageSizes.map((image) => `${image.url} ${image.size}w`).join(', ');
              const sizes = '(max-width: 400px) 200px, (max-width: 1080px) 400px, 1080px';
              
              return (
                <div key={index} className={styles.photoItem}>
                  <div className={styles.photoImageWrapper}>
                    <img 
                    // src={photo?.urls?.regular} 
                    className={styles.photoImage}
                    srcset={srcset}
                    sizes={sizes}
                    alt={`Photo ${index + 1}`}
                     />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );}}
};

export default Profile;
