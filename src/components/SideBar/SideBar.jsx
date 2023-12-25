import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { Scrollbars } from "react-custom-scrollbars";
// import { LogoImg, LogoSmallImg } from "../_components/imagepath";

const Sidebar = (props) => {
  const [isSideMenu, setSideMenu] = useState("");
  const [isSideMenuLevel, setSideMenuLevel] = useState("");
  const [isSideMenuLevel2, setSideMenuLevel2] = useState("");

  const toggleSidebar = (value) => {
    console.log(value);
    setSideMenu(value);
  };
  const toggleSidebar1 = (value) => {
    console.log(value);
    setSideMenuLevel(value);
  };
  const toggleSidebar2 = (value) => {
    console.log(value);
    setSideMenuLevel2(value);
  };

  useEffect(() => {
    function handleMouseOver(e) {
      e.stopPropagation();
      if (
        document.body.classList.contains("mini-sidebar") &&
        document.querySelector("#toggle_btn").offsetParent !== null
      ) {
        var targ = e.target.closest(".sidebar");
        if (targ) {
          document.body.classList.add("expand-menu");
          document
            .querySelectorAll(".subdrop + ul")
            .forEach((ul) => (ul.style.display = "block"));
        } else {
          document.body.classList.remove("expand-menu");
          document
            .querySelectorAll(".subdrop + ul")
            .forEach((ul) => (ul.style.display = "none"));
        }
        return false;
      }
    }

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  useEffect(() => {
    $(document).on("change", ".sidebar-type-four input", function () {
      if ($(this).is(":checked")) {
        $(".sidebar").addClass("sidebar-eight");
        $(".sidebar-menu").addClass("sidebar-menu-eight");
        $(".menu-title").addClass("menu-title-eight");
        $(".header").addClass("header-eight");
        $(".header-left-two").addClass("header-left-eight");
        $(".user-menu").addClass("user-menu-eight");
        $(".dropdown-toggle").addClass("dropdown-toggle-eight");
        $(".white-logo").addClass("show-logo");
        $(
          ".header-one .header-left-one .logo:not(.logo-small), .header-five .header-left-five .logo:not(.logo-small)"
        ).addClass("hide-logo");
        $(".header-two .header-left-two .logo:not(.logo-small)").removeClass(
          "hide-logo"
        );
        $(".header-two .header-left-two .dark-logo").removeClass("show-logo");
      } else {
        $(".sidebar").removeClass("sidebar-eight");
        $(".sidebar-menu").removeClass("sidebar-menu-eight");
        $(".menu-title").removeClass("menu-title-eight");
        $(".header").removeClass("header-eight");
        $(".header-left-two").removeClass("header-left-eight");
        $(".user-menu").removeClass("user-menu-eight");
        $(".dropdown-toggle").removeClass("dropdown-toggle-eight");
        $(".white-logo").removeClass("show-logo");
        $(
          ".header-one .header-left-one .logo:not(.logo-small), .header-five .header-left-five .logo:not(.logo-small)"
        ).removeClass("hide-logo");
      }
    });
  }, []);

  let pathName = props.location.pathname;

  return (
    <>
      <div className="sidebar" id="sidebar">
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          autoHeight={true}
          autoHeightMin={0}
          autoHeightMax="95vh"
          thumbSize={300}
          universal={false}
          hideTracksWhenNotNeeded={true}
        >
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              {/* Main Menu */}
              <ul>
                <li className={`${"/dashboard" === pathName ? "active" : ""}`}>
                  <Link to="/dashboard">
                    <i className="fa-solid fa-gauge"></i>{" "}
                    <span> Dashboard </span>
                    <span className="menu-arrow"></span>
                  </Link>
                </li>

                <li className={`${"/profile" === pathName ? "active" : ""}`}>
                  <Link to="/profile">
                    <i className="fa-solid fa-user"></i>
                    <span> Profile </span>
                    {/* <span className="menu-arrow"></span> */}
                  </Link>
                </li>

                <li
                  className={`${"/programfinder" === pathName ? "active" : ""}`}
                >
                  <Link to="/programfinder">
                    <i className="fa-solid fa-gauge"></i>{" "}
                    <span> Program Finder </span>
                  </Link>
                </li>
                <li
                  className={`${
                    "/applicationstatus" === pathName ? "active" : ""
                  }`}
                >
                  <Link to="/applicationstatus">
                    <i className="fa-solid fa-gauge"></i>{" "}
                    <span> Application status </span>
                  </Link>
                </li>

                <li
                  className={`${"/normalsearch" === pathName ? "active" : ""}`}
                >
                  <Link to="/normalsearch">
                    <i className="fa-solid fa-user"></i>
                    <span> Quick Apply </span>
                    {/* <span className="menu-arrow"></span> */}
                  </Link>
                </li>


                <li
                  className={`${"/normalsearch" === pathName ? "active" : ""}`}
                >
                  <Link to="/chatsupport">
                    <i className="fa-solid fa-user"></i>
                    <span> chat with university </span>
                    {/* <span className="menu-arrow"></span> */}
                  </Link>
                </li>
                <li
                  className={`${"/normalsearch" === pathName ? "active" : ""}`}
                >
                  <Link to="/applyloan">
                     <i class="fa-solid fa-money-check-dollar"></i>
                    <span> Apply for Loan </span>
                    {/* <span className="menu-arrow"></span> */}
                  </Link>
                </li>

                <li
                  className={`${"/normalsearch" === pathName ? "active" : ""}`}
                >
                  <Link to="/build">
                       <i class="fa-solid fa-file-export"></i>
                    <span>  Build my SOP</span>
                    {/* <span className="menu-arrow"></span> */}
                  </Link>
                </li>
                {/* <li className="menu-title">
                  <span></span>
                </li> */}

                <li
                  className={`${
                    "/writetous" === pathName ? "active submenu" : "submenu"
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "HelpDesk" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "HelpDesk" ? "" : "HelpDesk")
                    }
                  >
                    <i className="fa-solid fa-handshake-angle"></i>
                    <span> Help Desk</span> <span className="menu-arrow" />
                  </Link>
                  {isSideMenu == "HelpDesk" ? (
                    <ul
                      style={{
                        display: isSideMenu == "HelpDesk" ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link
                          to="/writetous"
                          className={`${
                            "/writetous" === pathName ? "active" : ""
                          }`}
                        >
                          Write To us
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>

           

                <li
                  className={`${
                    "/writetous" === pathName ? "active submenu" : "submenu"
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "HelpDesk" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "HelpDesk" ? "" : "HelpDesk")
                    }
                  >
                    
                  </Link>
                </li>
              </ul>
              {/* /Main Menu*/}
              {/* Management */}
              <ul>
  

                <li
                  className={`${
                    "/referaFriend" === pathName ? "active submenu" : "submenu"
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "MyNetwork" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "MyNetwork" ? "" : "MyNetwork"
                      )
                    }
                  >
                    <i className="fa-solid fa-network-wired"></i>
                    <span> My Network</span> <span className="menu-arrow" />
                  </Link>
                  {isSideMenu == "MyNetwork" ? (
                    <ul
                      style={{
                        display: isSideMenu == "MyNetwork" ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link
                          to="/referaFriend"
                          className={`${
                            "/referaFriend" === pathName ? "active" : ""
                          }`}
                        >
                          Refer A friend
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>

                <li className={`${"/" === pathName ? "active" : ""}`}>
                  <Link to="/login">
                    <i className="fa-solid fa-right-from-bracket"></i>
                    <span>Sign Out</span>
                  </Link>
                </li>
              </ul>
              {/* /UI Interface */}
            </div>
          </div>
        </Scrollbars>
      </div>
    </>
  );
};
export default withRouter(Sidebar);
