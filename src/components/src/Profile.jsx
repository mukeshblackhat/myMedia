"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/profile.module.css";
import useScrollToBottom from "../hooks/useScrollToBottom";
import { fetchUserData } from "../api/apiUtils";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserPhotosAsync,
  increasePage,
} from "../../redux/slices/photoSlice";

const Profile = ({ params }) => {
  const isBottom = useScrollToBottom();
  const [data, setData] = useState();
  const loading = useSelector((state) => {
    return state.photo.loading;
  });
  const page = useSelector((state) => {
    return state.photo.page;
  });
  const loader=useSelector((state) => {
    return state.photo.loader;
  })
  const photos = useSelector((state) => state.photo.photo);
  const [errorData, setErrorData] = useState(false);
  const dispatch = useDispatch();
  const { user } = params;

  useEffect(() => {
   
    let username = user;
    dispatch(fetchUserPhotosAsync({ username, page }));
    dispatch(increasePage());

    const fetchData = async () => {
      try {
        const userData = await fetchUserData(user);
        setData(userData);
        setErrorData(false);
      } catch (error) {
        console.log(error);
        setErrorData(true);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
   
    let username = user;
    dispatch(fetchUserPhotosAsync({username,page }));
    dispatch(increasePage());

  }, [isBottom]);

  {
    if (loading) {
      return (
        <>
          <div className={styles.loading}>Loading....</div>
        </>
      );
    } else if (errorData) {
      return (
        <>
          <div className={styles.loading}>Api Limit Reached try after some time ......</div>
        </>
      );
    } else {
      return (
        <>
          <div className={styles.topBar}>
            <Link className={styles.linkClass} href="/">
            <div className={styles.navbarText}><span className="headFirst">My</span>Media</div>
            </Link>
            {/* <div className={styles.lightModeText}>light mode</div> */}
          </div>

          <div className={styles.container}>
            <div className={styles.maxWidth}>
              <div className={styles.profileSection}>
                <div className={styles.profileImageWrapper}>
                  <img
                    className={styles.profileImage}
                    src={data?.profile_image.large}
                    alt="Profile"
                  />
                </div>
                <div className={styles.profileDetails}>
                  <div className={styles.username}>{data?.username}</div>
                  <div className={styles.name}>{data?.name}</div>
                  <div className={styles.bio}>{data?.user?.bio}</div>
                  <div className={styles.stats}>
                    <div className={styles.statItem}>
                      <div className={styles.statNumber}>
                        {data?.total_photos}
                      </div>
                      <div>Posts</div>
                    </div>
                    <div className={styles.statItem}>
                      <div className={styles.statNumber}>
                        {data?.followers_count}
                      </div>
                      <div>Followers</div>
                    </div>
                    <div className={styles.statItem}>
                      <div className={styles.statNumber}>
                        {data?.following_count}
                      </div>
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
                  const srcset = imageSizes
                    .map((image) => `${image.url} ${image.size}w`)
                    .join(", ");
                  const sizes =
                    "(max-width: 400px) 200px, (max-width: 1080px) 400px, 1080px";

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
              {loader&&<div className={styles.loading}>loading....</div>}
            </div>
          </div>
        </>
      );
    }
  }
};

export default Profile;
