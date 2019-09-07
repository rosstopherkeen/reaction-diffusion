import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    I'm <Styled.a href="http://twitter.com/rosstopherkeen/">Prajwal</Styled.a>
    {` `}and this blog is where I try out and
    <br />
    learn new things on the web.
    Spread the word.
  </Fragment>
)

{/* <Styled.a href="http://example.com/">your name</Styled.a>
    {` `}
    goes. */}