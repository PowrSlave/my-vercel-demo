import { server } from '../config'
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
  return (
    <div>

      <h1>Situation Slide</h1>

      <p>Job Title and Industry: Head of Marketing, Utility/Electric company</p>

      <p>Critical Business Issue: Get customers more engaged in the energy consumption process</p>

      <p>Problem/reasons</p>
        <ul>
          <li>Fines from the government when diesel generators are fired up</li>
          <li>Customer apathy / lack of choice</li>
          <li>Fire and forget autopay</li>
          <li>energy isn’t that expensive</li>
          <li>Marketing not tailored to customer</li>
          <li>Lack of data</li>
          <li>Multiple ways to reach customer but what is best?</li>
        </ul>

        <p>Specific Capabilities</p>
        <ul>
          <li>Email campaign that leverages personalized data to “draw in” the customer</li>
          <li>Opt in “learning” thermostat service to reduce energy bill 20%</li>
        </ul>

    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }
