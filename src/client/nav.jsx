import './styling/nav.css';
import pic1 from './styling/images/Pictures/2.jpg';

function Nav() {
  return (
    <div className="Nav">
      <section id='sec1'>
        <div className = "appName">ChatApp</div>
        <div className="chatList">

          {/* a form shall come here*/}
          <div className="searchBar">
            <input type="text" placeholder='Search' id="srch" />
            <input type="submit" value="" className="search_button"/>
          </div>
          {/* the form ends here*/}

          {/* Tile for the chats list, should be looped */}
          <div className="chatTile">
            <img src={pic1} alt="" className='chatIcon'/>
            <div className="chatDetz">
              <div className="usersName">User A</div>
              <div className="lastText">The last sent text</div>
            </div>
          </div>
          {/* looping ends here */}

        </div>
      </section>
    </div>
  );
}

export default Nav;