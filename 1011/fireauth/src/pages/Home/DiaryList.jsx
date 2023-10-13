import React from "react";
import styles from "./Home.module.css";
import iconEdit from "../../images/icon-edit.svg";
import iconDelete from "../../images/icon-delete.svg";
import { deleteDocument, useFirestore } from "../../hooks/useFirestore";

export default function DiaryList({ diaries }) {
  const { deleteDocument } = useFirestore("diary");
  return (
    <>
      {diaries.map((item) => {
        console.log(item);
        return (
          <li key={item.id}>
            <article className={styles["diary-article"]}>
              <h3 className={styles["article-title"]}>{item.title}</h3>
              <time className={styles["article-time"]} dateTime="2023-03-15">
                {/* createTime을 이용해 날짜 최신화 */}
                2023.02.24.THU
              </time>
              <p className={styles["article-content"]}>{item.text}</p>

              <div className={styles["button-group"]}>
                <button type="button">
                  <img src={iconEdit} alt="수정" />
                </button>
                <span></span>
                <button type="button">
                  <img
                    src={iconDelete}
                    onClick={() => deleteDocument(item.id)}
                    alt="삭제"
                  />
                </button>
              </div>
            </article>
          </li>
        );
      })}
    </>
  );
}
