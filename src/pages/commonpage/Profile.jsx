import React from 'react'
import { useSelector } from 'react-redux';
import Slidebar from '../../components/sidebar/Slidebar';
import "./profile.css"
import { IDate } from '../../components/Functions/State';

const Profile = () => {
    const {
        user,
        userToken,
        loading,
        checkAuthLoading,
        isAuthenticated,
      } = useSelector((state) => state.user);
  return (
    <>
    <Slidebar/>
    <div class="user-profile body-width" style={{margin:"auto"}}>
  {/* <div class="profile-image">
  </div> */}
  <div class="profile-details">
    <h2>User Profile</h2>
    <ul>
      <li><strong>Username:</strong> {user?.username}</li>
      <li><strong>Email:</strong> {user?.email}</li>
      <li><strong>Date Joined:</strong> {IDate(user?.date_joined)}</li>
      <li><strong>Last Login:</strong> {IDate(user?.last_login)}</li>
    </ul>
  </div>
</div>

    </>
  )
}

export default Profile
