import React, { useContext } from "react"
import { PageLayout, PageTitle } from "../components"
import { Container, Image } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import { ThemeContext, SEO } from "../utils"

export default ({ data }) => {
  const MediaLink = ({ title, author, link }) => (
    <li key={title} style={{ color: "gray" }}>
      <a rel="noopener noreferrer" href={link}>
        {title}
      </a>
      &nbsp;-<i>{author}</i>
    </li>
  )

  const {
    author,
    occupation,
    readingList,
    showsList,
    designations,
    unemployed,
  } = data.site.siteMetadata
  const { toString } = useContext(ThemeContext)

  const bookLinks = readingList.map(book => MediaLink(book))
  const showLinks = showsList.map(show => MediaLink(show))

  return (
    <PageLayout>
      <SEO title="About Me" />
      <PageTitle title="About Me" />
      <Container>
        <Image
          rounded
          height="200"
          src={`../../icons/profile-pic.png`}
          alt={author}
        />
        <article className="w-75 m-auto pt-2 text-justify">
          <p className="h3 i-5 mt-4 pt-2 mb-5">
            Hello there! I'm Tom and I work as a software engineer in AI, before
            which I studied Physics at Imperial College London.
          </p>{" "}
          <p className="h3 i-5 mb-5">
            I'm passionate about working with technology that has the potential
            to drive massive impact across society. In that vein, I'm currently
            exploring and learning about AI at{" "}
            <a href="https://www.nplan.io/"> nPlan</a> and before that I worked
            in Ethereum, helping to build the protocol's first privacy protocol
            at <a href="https://aztec.network/">Aztec</a>.
          </p>
          <p className="h3 i-5 mb-5">
            Live and work in London, feel free to hit me up for a coffee and
            chat!
          </p>
          <ul>
            <li>
              <h3>
                <a href="https://twitter.com/tom_waite_">@tom_waite_</a>
              </h3>
            </li>
            <li>
              <h3>
                <a href="href=mailto:thomas.waite4@gmail.com">
                  thomas.waite4@gmail.com
                </a>
              </h3>
            </li>
          </ul>
        </article>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        occupation
        author
        designations
        readingList {
          title
          author
          link
        }
        showsList {
          title
          author
          link
        }
      }
    }
  }
`
