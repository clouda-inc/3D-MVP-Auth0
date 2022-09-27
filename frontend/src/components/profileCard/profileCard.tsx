import React from 'react'
import * as Styles from './profileCard.module.css'
interface ProfileCardProps{
  name:string|undefined,
  email:string|undefined
  imgUrl:string|undefined
  linkGoogle:()=>{}|undefined,
  linkLinkedIn:()=>{}|undefined
}
const ProfileCard = ({name,email,imgUrl,linkGoogle=()=>undefined,linkLinkedIn=()=>undefined}:ProfileCardProps) => {
  return (
    <div className={Styles.profileContainer}>
      <div className={Styles.profileImage}>
        <img src={imgUrl} />
      </div>
      <div className={Styles.profileInfo}>
        <span>Name {name}</span>
        <span>Email {email}</span>
      </div>
      <div className={Styles.profileActions}>
        <button className={Styles.googleBtn} onClick={linkGoogle}>Link Google</button>
        <button className={Styles.linkedinBtn} onClick={linkLinkedIn}>Link LinkedIn</button>
      </div>
    </div>

  )
}
export default ProfileCard