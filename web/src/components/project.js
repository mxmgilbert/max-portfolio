import { format, distanceInWords, differenceInDays } from "date-fns";
import React from "react";
import { Link } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockContent from "./block-content";
import Container from "./container";
import RoleList from "./role-list";

import styles from "./project.module.css";

function Project(props) {
  const {
    _rawBody,
    title,
    subtitle,
    externalLink,
    categories,
    projectNumber,
    mainImage,
    logo,
    members,
    publishedAt,
    relatedProjects
  } = props;
  return (
    <article className={styles.root}>
      <section className={styles.gridSection}>
        <p className={styles.chapter}>{projectNumber}</p>
        <h2 className={styles.hItalic}>
          <span>{title}</span>
        </h2>
        <img
          src={imageUrlFor(buildImageObj(mainImage))
            .width(1200)
            .height(Math.floor((9 / 16) * 1200))
            .fit("crop")
            .url()}
          alt={mainImage.alt}
        />
        <h2 className={styles.hColorWhite}>{subtitle}</h2>
        <div className={styles.textContent}>
          {_rawBody && <BlockContent blocks={_rawBody} />}
          <a href={externalLink} target="_blank" className={styles.cBtn}>
            Voir le site
          </a>
        </div>
        <div className={styles.tree}></div>
        <img
          className={styles.logo}
          src={imageUrlFor(buildImageObj(logo)).url()}
          alt={mainImage.alt}
        />
      </section>
    </article>
  );
}

export default Project;
