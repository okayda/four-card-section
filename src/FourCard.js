import style from "./scss/FourCard.module.css";

import supervisorIcon from "./images/icon-supervisor.svg";
import builderIcon from "./images/icon-team-builder.svg";
import karmaIcon from "./images/icon-karma.svg";
import calculatorIcon from "./images/icon-calculator.svg";

const FourCard = function () {
  return (
    <section className={style.card}>
      <div className={style.card__content}>
        <h2 className={style.card__content_main}>
          Reliable, efficient delivery
        </h2>
        <h2 className={style.card__content_sub}>Powered by Technology</h2>
        <p className={style.card__content_description}>
          Our Artificial intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>

      <div className={style.card__boxes}>
        <div className={style.card__supervisor}>
          <h2 className={style.card__box_title}>Supervisor</h2>
          <p className={style.card__box_description}>
            Monitors activity to identify project roadblocks
          </p>
          <img src={supervisorIcon} alt="" />
        </div>

        <div className={style.card__builder}>
          <h2 className={style.card__box_title}>Team Builder</h2>
          <p className={style.card__box_description}>
            Scans our talent network to create the optimal team for your project
          </p>
          <img src={builderIcon} alt="" />
        </div>

        <div className={style.card__karma}>
          <h2 className={style.card__box_title}>Karma</h2>
          <p className={style.card__box_description}>
            Regularly evaluates our talent to ensure quality
          </p>
          <img src={karmaIcon} alt="" />
        </div>

        <div className={style.card__calculator}>
          <h2 className={style.card__box_title}>Calculator</h2>
          <p className={style.card__box_description}>
            Uses data from past projects to provid better delivery estimates
          </p>
          <img src={calculatorIcon} alt="" />
        </div>
      </div>
    </section>
  );
};

export default FourCard;
