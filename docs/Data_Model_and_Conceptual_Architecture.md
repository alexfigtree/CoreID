# CoreID Data Model and Conceptual Architecture

For the MIT Human Dynamics group blockchain-backed individual identity open source prototype


## Data Model:

The Data model consists consists of mock data in JSON format. There are separate data structures for Claims and Documents


| Data Model  | Corresponding JSON  | Issues  |
|---|---|---|
| Dashboard  | [Documents.json](https://github.com/alexfigtree/CoreID/blob/master/data/documents.json)  |  [#21](https://github.com/alexfigtree/CoreID/issues/21) |
| Claims  | [Claims.json](https://github.com/alexfigtree/CoreID/blob/master/data/claims.json) | [#21](https://github.com/alexfigtree/CoreID/issues/21)  |


Documents.json:
The payload takes the form of an array of objects, and contains the following required fields:
  - link
  - type
  - title
  - dateAdded
  - lender
  - signed
  - signedBy
  - signedDate
  - content
  - signatures

Claims.json:
The payload takes the form of an array of objects, and contains the following required fields:
  - signedDate
  - rejected
  - validated
  - invalidated
  - signedBy
  - verifiedBy
  - payload: object consisting of
      - fact
      - DateTime
  - signatures


## Conceptual Architecture:

https://www.draw.io/#Halexfigtree%2FCoreID%2Fmaster%2Fdocs%2Fdiagrams%2FConceptual_Architecture.xml

