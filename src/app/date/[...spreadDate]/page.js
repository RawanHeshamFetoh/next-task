import React from 'react'
import styles from '../date.module.css'
const page = ({params}) => {
    const{ spreadDate } = params;

  return (
    <div className={styles.date}>
      <ul>
        {
            spreadDate.map((date, index) => (
              <li key={index}>
                {date}
              </li>
            ))
        }
      </ul>
    </div>
  )
}

export default page
