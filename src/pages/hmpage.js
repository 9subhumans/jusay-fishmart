import React from 'react';

function Homepage() {
  return (
    <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <div class='row'> 
    <a class="navbar-brand">LOGO</a>
    <form class="d-flex">
      <input class="d-flex" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    <a class="user-logo">USER ICON</a>
    </div>
  </div>
</nav>
  )
}
export default Homepage;
