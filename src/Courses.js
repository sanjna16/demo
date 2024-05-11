import styles from "./Courses.module.css";
import Click from "./Click";
import Click1 from "./Click1";
const Courses = () => {
  return (
    <div className={styles.container}>
      <div className={styles.courses}>
        <div className={styles.grid}>
          <div className={styles.gridChild} />
          <div className={styles.gridItem} />
        </div>
        <header className={styles.statusBarvariant2Parent}>
          <div className={styles.mobileHeader2variant2}>
            <img
              className={styles.image3Icon}
              loading="lazy"
              alt="logo"
              src="/logo.png"
            />
          </div>
        </header>
        <section className={styles.coursesInner}>
          <div className={styles.unlockYourPotentialParent}>
            <h1 className={styles.unlockYourPotential}>
              Unlock Your Potential
            </h1>
            <h2 className={styles.welcomeToSarath}>
              Welcome to sarath Chandra Academy’s Courses Page, Where we offer a
              wide range of academic steams and comprehensive preparation for
              competitive exams. Whether you’re aiming for engineering, medical,
              law, or management, our expert faculty and innovation teaching
              methods will guide you towards success.
            </h2>
            <Click1></Click1>
          </div>
        </section>
        <section className={styles.courseHighlightsWrapper}>
          <div className={styles.courseHighlights}>
            <img
              className={styles.maskGroupIcon}
              loading="lazy"
              alt=""
              src="/cimage.png"
            />
            <h1 className={styles.upscCivilServices}>
              UPSC Civil Services Coaching​
            </h1>
            <div className={styles.highlightsList}>
              <img
                className={styles.circlewavycheckIcon}
                loading="lazy"
                alt=""
                src="/tick.svg"
              />
              <div className={styles.weeklyPrelimsAnd}>
                Weekly prelims and Mains Exams
              </div>
            </div>
            <div className={styles.highlightsList1}>
              <img
                className={styles.circlewavycheckIcon1}
                alt=""
                src="/tick.svg"
              />
              <div className={styles.guestLecturesBy}>
                Guest Lectures by IAS Officers
              </div>
            </div>
            <div className={styles.highlightsList2}>
              <img
                className={styles.circlewavycheckIcon2}
                alt=""
                src="/tick.svg"
              />
              <div className={styles.comprehensiveCoverageOf}>
                Comprehensive coverage of syllabus
              </div>
            </div>
            <b className={styles.b}>
              <span>₹ 59999</span>
              <span className={styles.span}>  - ₹ 63000</span>
            </b>

            <div className={styles.master1}>
              <Click></Click>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Courses;
