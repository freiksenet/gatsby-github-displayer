import React from "react"

const RepositoryList = ({ repositories }) => (
  <div>
    {repositories.nodes.map((repository, i) => (
      <div key={i}>
        <h2>{repository.name}</h2>
      </div>
    ))}
  </div>
)

export default RepositoryList
