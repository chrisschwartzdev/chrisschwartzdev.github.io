import { Page } from './Page';
import styles from './Page404.module.scss';

export const Page404 = () => {
  return (
    <Page title={"Chris Schwartz - 404"}>
      <div className={styles.container404}>
        <h1>404</h1>

        <p><strong>Page not found :(</strong></p>
      </div>
    </Page >
  )
}