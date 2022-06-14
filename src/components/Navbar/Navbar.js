import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MobileNavbarStyle = styled.nav`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: sticky;
  bottom: 0;
  background-color: white;
  width: 100%;
  padding: 10px;

  .mobile-navbar__icon-button {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .mobile-navbar__image--home {
    width: 20px;
  }

  .mobile-navbar__tittle {
    margin-bottom: 0;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: 800;
  }
`;

const Navbar = () => {
  return (
    <MobileNavbarStyle>
      <NavLink to="/form">
        <div className="mobile-navbar__icon-button">
          <span className="material-symbols-rounded">music_note</span>
          <h4 className="mobile-navbar__tittle">add new song</h4>
        </div>
      </NavLink>
    </MobileNavbarStyle>
  );
};

export default Navbar;
