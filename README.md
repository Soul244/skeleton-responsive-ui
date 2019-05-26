# Skeleton Responsive UI
React version of responsive css boilerplate: http://getskeleton.com/

# Using

## (IMPORTANT) Global Styles

Before the start, you have to import GlobalStyles and use it in a parent component, like app.js, it doesn't have a props, just css code:

    import React from "react";
    import {
      GlobalStyles,
      Container,
    } from "skeleton-responsive-ui";
    
    function App() {
      return (
        <>
          <GlobalStyles />
          <Container>
          ...other things
          </Container>
        </>
      );
    }
    
    export default App;

Global Styles component has couple of css impromevent for html tags.

## LAYOUT
### Container && Row

Everything have to be inside Container and Row. Of course a row defines a horizontal stack. They have only utils props. I will explain it later.

    import React from "react";
    import {
      GlobalStyles,
      Container,
      Row,
      Column,
    } from "skeleton-responsive-ui";
    
    function App() {
      return (
        <>
          <GlobalStyles />
          <Container>
            <Row>
              <Column column="twelve">
    		<H1>Hello World</H1>
              </Column>
            </Row>
          </Container>
        </>
      );
    }
    
    export default App;


### Column

You have to set a column size using of these strings: 
one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve or you can use one of them one-third, one-half, two-thirds. These values are same for offset.  

| Property | Description | Default value | type |
| -------- | ----------- | ------------- | ---- |
| `column`  | Column size | Required | string |
| `offset`  | Offset size of a column | null | string|

#### Column Example 

    import React from "react";
    import {
      Container,
      Row,
      Column,
      GlobalStyles,
    } from "skeleton-responsive-ui";
    
    function App() {
      return (
        <>
          <GlobalStyles />
          <Container>
            <Row>
	          <Column column="five">5/12/Column>
              <Column column="seven">7/12</Column>
            </Row>
          </Container>
        </>
      );
    }
    
    export default App;

#### Offset Example

    import React from "react";
    import {
      Container,
      Row,
      Column,
      GlobalStyles,
    } from "skeleton-responsive-ui";
    
    function App() {
      return (
        <>
          <GlobalStyles />
          <Container>
            <Row>
	          <Column column="five">5/12/Column>
              <Column column="five" offset="two">7/12</Column>
            </Row>
          </Container>
        </>
      );
    }
    
    export default App;

## Button

Simple button. Just have one props: primary. If you set primary, button will be blue. 

| Property | Description | Default value | type |
| -------- | ----------- | ------------- | ---- |
| `primary`  | Button will be blue | null| bool |

## Other Components

There are Hr, Input and H1,H2, H3, H4, H5, H6 components inside package. You don't have to use them. It is up to you. They are simple and don't have special props. 

## Utils

Package has four utils props as global. You can set them all other components (Container, Row, Column, Button, Input etc.).

| Property | Description | Default value | type |
| -------- | ----------- | ------------- | ---- |
| `fullWidth`  | Width will be 100% | null| bool|
| `maxFullWidth`  | Max Width will be 100%| null | bool|
| `pullRight`  | float will be right| null | bool|
| `pullLeft`  | float will be left| null | bool|
