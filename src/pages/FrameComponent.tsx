import { FunctionComponent, useCallback } from "react";
import styles from "./FrameComponent.module.css";
const FrameComponent: FunctionComponent = () => {
  const onRectangleClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='text']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onMenuButtonImageClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='text']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.instantHelpParent}>
      <div className={styles.instantHelp}>Instant Help</div>
      <button className={styles.helpmark1} autoFocus />
      <div className={styles.patientHelped}>Patient Helped</div>
      <div className={styles.healthcarePartner}>Healthcare Partner</div>
      <div className={styles.k}>200K+</div>
      <div className={styles.div}>3500+</div>
      <button className={styles.logo} autoFocus>
        HEAL-THerapy
      </button>
      <b className={styles.healthMedicine}>{`Health & Medicine`}</b>
      <b className={styles.services}>Services</b>
      <b className={styles.consulation}>Consulation</b>
      <button className={styles.loginbutton} autoFocus />
      <button className={styles.login} autoFocus>
        Login
      </button>
      <div className={styles.frameChild} onClick={onRectangleClick} />
      <img
        className={styles.menubuttonIcon}
        alt=""
        src="/menubutton@2x.png"
        onClick={onMenuButtonImageClick}
      />
      <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      <b className={styles.para1}>
        <p className={styles.connectPatient}>Connect Patient</p>
        <p className={styles.connectPatient}>And Healthcare</p>
        <p className={styles.connectPatient}>Seamlessly</p>
      </b>
      <div className={styles.para2}>
        <p className={styles.connectPatient}>
          Heal-Therapy connect hundred of hospital and
        </p>
        <p className={styles.connectPatient}>
          healthcare to patient around India
        </p>
      </div>
      <div className={styles.segment1line} />
      <div className={styles.searchbox} />
      <div className={styles.text} id="Test" data-scroll-to="text">
        Find Your Doctor...
      </div>
      <button className={styles.searchbox1} autoFocus />
      <button className={styles.searchIcon1} autoFocus />
      <img
        className={styles.medicalDoctorsAndNursesCarIcon}
        alt=""
        src="/medicaldoctorsandnursescartooncharactersetvector-1@2x.png"
      />
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
    </div>
  );
};

export default FrameComponent;
