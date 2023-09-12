function Proveedores () {
	return (
<>
  {/* Notifications area */}
  <section className="full-width container-notifications">
    <div className="full-width container-notifications-bg btn-Notification" />
    <section className="NotificationArea">
      <div className="full-width text-center NotificationArea-title tittles">
        Notifications <i className="zmdi zmdi-close btn-Notification" />
      </div>
      <a href="#" className="Notification" id="notifation-unread-1">
        <div className="Notification-icon">
          <i className="zmdi zmdi-accounts-alt bg-info" />
        </div>
        <div className="Notification-text">
          <p>
            <i className="zmdi zmdi-circle" />
            <strong>New User Registration</strong>
            <br />
            <small>Just Now</small>
          </p>
        </div>
        <div
          className="mdl-tooltip mdl-tooltip--left"
          htmlFor="notifation-unread-1"
        >
          Notification as UnRead
        </div>
      </a>
      <a href="#" className="Notification" id="notifation-read-1">
        <div className="Notification-icon">
          <i className="zmdi zmdi-cloud-download bg-primary" />
        </div>
        <div className="Notification-text">
          <p>
            <i className="zmdi zmdi-circle-o" />
            <strong>New Updates</strong>
            <br />
            <small>30 Mins Ago</small>
          </p>
        </div>
        <div
          className="mdl-tooltip mdl-tooltip--left"
          htmlFor="notifation-read-1"
        >
          Notification as Read
        </div>
      </a>
      <a href="#" className="Notification" id="notifation-unread-2">
        <div className="Notification-icon">
          <i className="zmdi zmdi-upload bg-success" />
        </div>
        <div className="Notification-text">
          <p>
            <i className="zmdi zmdi-circle" />
            <strong>Archive uploaded</strong>
            <br />
            <small>31 Mins Ago</small>
          </p>
        </div>
        <div
          className="mdl-tooltip mdl-tooltip--left"
          htmlFor="notifation-unread-2"
        >
          Notification as UnRead
        </div>
      </a>
      <a href="#" className="Notification" id="notifation-read-2">
        <div className="Notification-icon">
          <i className="zmdi zmdi-mail-send bg-danger" />
        </div>
        <div className="Notification-text">
          <p>
            <i className="zmdi zmdi-circle-o" />
            <strong>New Mail</strong>
            <br />
            <small>37 Mins Ago</small>
          </p>
        </div>
        <div
          className="mdl-tooltip mdl-tooltip--left"
          htmlFor="notifation-read-2"
        >
          Notification as Read
        </div>
      </a>
      <a href="#" className="Notification" id="notifation-read-3">
        <div className="Notification-icon">
          <i className="zmdi zmdi-folder bg-primary" />
        </div>
        <div className="Notification-text">
          <p>
            <i className="zmdi zmdi-circle-o" />
            <strong>Folder delete</strong>
            <br />
            <small>1 hours Ago</small>
          </p>
        </div>
        <div
          className="mdl-tooltip mdl-tooltip--left"
          htmlFor="notifation-read-3"
        >
          Notification as Read
        </div>
      </a>
    </section>
  </section>
  {/* navLateral */}
  <section className="full-width navLateral">
    <div className="full-width navLateral-bg btn-menu" />
    <div className="full-width navLateral-body">
      <div className="full-width navLateral-body-logo text-center tittles">
        <i className="zmdi zmdi-close btn-menu" /> Inventory
      </div>
      <figure className="full-width navLateral-body-tittle-menu">
        <div>
          <img
            src="assets/img/avatar-male.png"
            alt="Avatar"
            className="img-responsive"
          />
        </div>
        <figcaption>
          <span>
            Full Name Admin
            <br />
            <small>Admin</small>
          </span>
        </figcaption>
      </figure>
      <nav className="full-width">
        <ul className="full-width list-unstyle menu-principal">
          <li className="full-width">
            <a href="home" className="full-width">
              <div className="navLateral-body-cl">
                <i className="zmdi zmdi-view-dashboard" />
              </div>
              <div className="navLateral-body-cr">HOME</div>
            </a>
          </li>
          <li className="full-width divider-menu-h" />
          <li className="full-width">
            <a href="#!" className="full-width btn-subMenu">
              <div className="navLateral-body-cl">
                <i className="zmdi zmdi-case" />
              </div>
              <div className="navLateral-body-cr">ADMINISTRATION</div>
              <span className="zmdi zmdi-chevron-left" />
            </a>
            <ul className="full-width menu-principal sub-menu-options">
              <li className="full-width">
                <a href="company" className="full-width">
                  <div className="navLateral-body-cl">
                    <i className="zmdi zmdi-balance" />
                  </div>
                  <div className="navLateral-body-cr">COMPANY</div>
                </a>
              </li>
              <li className="full-width">
                <a href="providers" className="full-width">
                  <div className="navLateral-body-cl">
                    <i className="zmdi zmdi-truck" />
                  </div>
                  <div className="navLateral-body-cr">PROVIDERS</div>
                </a>
              </li>
              <li className="full-width">
                <a href="payments" className="full-width">
                  <div className="navLateral-body-cl">
                    <i className="zmdi zmdi-card" />
                  </div>
                  <div className="navLateral-body-cr">PAYMENTS</div>
                </a>
              </li>
              <li className="full-width">
                <a href="categories" className="full-width">
                  <div className="navLateral-body-cl">
                    <i className="zmdi zmdi-label" />
                  </div>
                  <div className="navLateral-body-cr">CATEGORIES</div>
                </a>
              </li>
            </ul>
          </li>
          <li className="full-width divider-menu-h" />
          <li className="full-width">
            <a href="#!" className="full-width btn-subMenu">
              <div className="navLateral-body-cl">
                <i className="zmdi zmdi-face" />
              </div>
              <div className="navLateral-body-cr">USERS</div>
              <span className="zmdi zmdi-chevron-left" />
            </a>
            <ul className="full-width menu-principal sub-menu-options">
              <li className="full-width">
                <a href="admin" className="full-width">
                  <div className="navLateral-body-cl">
                    <i className="zmdi zmdi-account" />
                  </div>
                  <div className="navLateral-body-cr">ADMINISTRATORS</div>
                </a>
              </li>
              <li className="full-width">
                <a href="client" className="full-width">
                  <div className="navLateral-body-cl">
                    <i className="zmdi zmdi-accounts" />
                  </div>
                  <div className="navLateral-body-cr">CLIENT</div>
                </a>
              </li>
            </ul>
          </li>
          <li className="full-width divider-menu-h" />
          <li className="full-width">
            <a href="products" className="full-width">
              <div className="navLateral-body-cl">
                <i className="zmdi zmdi-washing-machine" />
              </div>
              <div className="navLateral-body-cr">PRODUCTS</div>
            </a>
          </li>
          <li className="full-width divider-menu-h" />
          <li className="full-width">
            <a href="sales" className="full-width">
              <div className="navLateral-body-cl">
                <i className="zmdi zmdi-shopping-cart" />
              </div>
              <div className="navLateral-body-cr">SALES</div>
            </a>
          </li>
          <li className="full-width divider-menu-h" />
          <li className="full-width">
            <a href="inventory" className="full-width">
              <div className="navLateral-body-cl">
                <i className="zmdi zmdi-store" />
              </div>
              <div className="navLateral-body-cr">INVENTORY</div>
            </a>
          </li>
          <li className="full-width divider-menu-h" />
          <li className="full-width">
            <a href="#!" className="full-width btn-subMenu">
              <div className="navLateral-body-cl">
                <i className="zmdi zmdi-wrench" />
              </div>
              <div className="navLateral-body-cr">SETTINGS</div>
              <span className="zmdi zmdi-chevron-left" />
            </a>
            <ul className="full-width menu-principal sub-menu-options">
              <li className="full-width">
                <a href="#!" className="full-width">
                  <div className="navLateral-body-cl">
                    <i className="zmdi zmdi-widgets" />
                  </div>
                  <div className="navLateral-body-cr">OPTION</div>
                </a>
              </li>
              <li className="full-width">
                <a href="#!" className="full-width">
                  <div className="navLateral-body-cl">
                    <i className="zmdi zmdi-widgets" />
                  </div>
                  <div className="navLateral-body-cr">OPTION</div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </section>
  {/* pageContent */}
  <section className="full-width pageContent">
    {/* navBar */}
    <div className="full-width navBar">
      <div className="full-width navBar-options">
        <i className="zmdi zmdi-swap btn-menu" id="btn-menu" />
        <div className="mdl-tooltip" htmlFor="btn-menu">
          Hide / Show MENU
        </div>
        <nav className="navBar-options-list">
          <ul className="list-unstyle">
            <li className="btn-Notification" id="notifications">
              <i className="zmdi zmdi-notifications" />
              <div className="mdl-tooltip" htmlFor="notifications">
                Notifications
              </div>
            </li>
            <li className="btn-exit" id="btn-exit">
              <i className="zmdi zmdi-power" />
              <div className="mdl-tooltip" htmlFor="btn-exit">
                LogOut
              </div>
            </li>
            <li className="text-condensedLight noLink">
              <small>User Name</small>
            </li>
            <li className="noLink">
              <figure>
                <img
                  src="assets/img/avatar-male.png"
                  alt="Avatar"
                  className="img-responsive"
                />
              </figure>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <section className="full-width header-well">
      <div className="full-width header-well-icon">
        <i className="zmdi zmdi-truck" />
      </div>
      <div className="full-width header-well-text">
        <p className="text-condensedLight">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde aut
          nulla accusantium minus corporis accusamus fuga harum natus molestias
          necessitatibus.
        </p>
      </div>
    </section>
    <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
      <div className="mdl-tabs__tab-bar">
        <a href="#tabNewProvider" className="mdl-tabs__tab is-active">
          NEW
        </a>
        <a href="#tabListProvider" className="mdl-tabs__tab">
          LIST
        </a>
      </div>
      <div className="mdl-tabs__panel is-active" id="tabNewProvider">
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <div className="full-width panel mdl-shadow--2dp">
              <div className="full-width panel-tittle bg-primary text-center tittles">
                New Provider
              </div>
              <div className="full-width panel-content">
                <form>
                  <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--12-col">
                      <legend className="text-condensedLight">
                        <i className="zmdi zmdi-border-color" /> &nbsp; DATA
                        PROVIDER
                      </legend>
                      <br />
                    </div>
                    <div className="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input
                          className="mdl-textfield__input"
                          type="number"
                          pattern="-?[0-9]*(\.[0-9]+)?"
                          id="DNIProvider"
                        />
                        <label
                          className="mdl-textfield__label"
                          htmlFor="DNIProvider"
                        >
                          DNI
                        </label>
                        <span className="mdl-textfield__error">
                          Invalid number
                        </span>
                      </div>
                    </div>
                    <div className="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input
                          className="mdl-textfield__input"
                          type="text"
                          pattern="-?[A-Za-z0-9 ]*(\.[0-9]+)?"
                          id="NameProvider"
                        />
                        <label
                          className="mdl-textfield__label"
                          htmlFor="NameProvider"
                        >
                          Name
                        </label>
                        <span className="mdl-textfield__error">
                          Invalid name
                        </span>
                      </div>
                    </div>
                    <div className="mdl-cell mdl-cell--12-col">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input
                          className="mdl-textfield__input"
                          type="text"
                          id="addressProvider"
                        />
                        <label
                          className="mdl-textfield__label"
                          htmlFor="addressProvider"
                        >
                          Address
                        </label>
                        <span className="mdl-textfield__error">
                          Invalid address
                        </span>
                      </div>
                    </div>
                    <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input
                          className="mdl-textfield__input"
                          type="tel"
                          pattern="-?[0-9+()- ]*(\.[0-9]+)?"
                          id="phoneProvider"
                        />
                        <label
                          className="mdl-textfield__label"
                          htmlFor="phoneProvider"
                        >
                          Phone
                        </label>
                        <span className="mdl-textfield__error">
                          Invalid phone number
                        </span>
                      </div>
                    </div>
                    <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input
                          className="mdl-textfield__input"
                          type="email"
                          id="emailProvider"
                        />
                        <label
                          className="mdl-textfield__label"
                          htmlFor="emailProvider"
                        >
                          E-mail
                        </label>
                        <span className="mdl-textfield__error">
                          Invalid E-mail
                        </span>
                      </div>
                    </div>
                    <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input
                          className="mdl-textfield__input"
                          type="text"
                          id="webProvider"
                        />
                        <label
                          className="mdl-textfield__label"
                          htmlFor="webProvider"
                        >
                          Web
                        </label>
                        <span className="mdl-textfield__error">
                          Invalid web address
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-center">
                    <button
                      className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored bg-primary"
                      id="btn-addProvider"
                    >
                      <i className="zmdi zmdi-plus" />
                    </button>
                  </p>
                  <div className="mdl-tooltip" htmlFor="btn-addProvider">
                    Add provider
                  </div>
                  <p />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mdl-tabs__panel" id="tabListProvider">
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--8-col-desktop mdl-cell--2-offset-desktop">
            <div className="full-width panel mdl-shadow--2dp">
              <div className="full-width panel-tittle bg-success text-center tittles">
                List Providers
              </div>
              <div className="full-width panel-content">
                <form action="#">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                    <label
                      className="mdl-button mdl-js-button mdl-button--icon"
                      htmlFor="searchProvider"
                    >
                      <i className="zmdi zmdi-search" />
                    </label>
                    <div className="mdl-textfield__expandable-holder">
                      <input
                        className="mdl-textfield__input"
                        type="text"
                        id="searchProvider"
                      />
                      <label className="mdl-textfield__label" />
                    </div>
                  </div>
                </form>
                <div className="mdl-list">
                  <div className="mdl-list__item mdl-list__item--two-line">
                    <span className="mdl-list__item-primary-content">
                      <i className="zmdi zmdi-truck mdl-list__item-avatar" />
                      <span>1. Provider name</span>
                      <span className="mdl-list__item-sub-title">DNI</span>
                    </span>
                    <a className="mdl-list__item-secondary-action" href="#!">
                      <i className="zmdi zmdi-more" />
                    </a>
                  </div>
                  <li className="full-width divider-menu-h" />
                  <div className="mdl-list__item mdl-list__item--two-line">
                    <span className="mdl-list__item-primary-content">
                      <i className="zmdi zmdi-truck mdl-list__item-avatar" />
                      <span>2. Provider name</span>
                      <span className="mdl-list__item-sub-title">DNI</span>
                    </span>
                    <a className="mdl-list__item-secondary-action" href="#!">
                      <i className="zmdi zmdi-more" />
                    </a>
                  </div>
                  <li className="full-width divider-menu-h" />
                  <div className="mdl-list__item mdl-list__item--two-line">
                    <span className="mdl-list__item-primary-content">
                      <i className="zmdi zmdi-truck mdl-list__item-avatar" />
                      <span>3. Provider name</span>
                      <span className="mdl-list__item-sub-title">DNI</span>
                    </span>
                    <a className="mdl-list__item-secondary-action" href="#!">
                      <i className="zmdi zmdi-more" />
                    </a>
                  </div>
                  <li className="full-width divider-menu-h" />
                  <div className="mdl-list__item mdl-list__item--two-line">
                    <span className="mdl-list__item-primary-content">
                      <i className="zmdi zmdi-truck mdl-list__item-avatar" />
                      <span>4. Provider name</span>
                      <span className="mdl-list__item-sub-title">DNI</span>
                    </span>
                    <a className="mdl-list__item-secondary-action" href="#!">
                      <i className="zmdi zmdi-more" />
                    </a>
                  </div>
                  <li className="full-width divider-menu-h" />
                  <div className="mdl-list__item mdl-list__item--two-line">
                    <span className="mdl-list__item-primary-content">
                      <i className="zmdi zmdi-truck mdl-list__item-avatar" />
                      <span>5. Provider name</span>
                      <span className="mdl-list__item-sub-title">DNI</span>
                    </span>
                    <a className="mdl-list__item-secondary-action" href="#!">
                      <i className="zmdi zmdi-more" />
                    </a>
                  </div>
                  <li className="full-width divider-menu-h" />
                  <div className="mdl-list__item mdl-list__item--two-line">
                    <span className="mdl-list__item-primary-content">
                      <i className="zmdi zmdi-truck mdl-list__item-avatar" />
                      <span>6. Provider name</span>
                      <span className="mdl-list__item-sub-title">DNI</span>
                    </span>
                    <a className="mdl-list__item-secondary-action" href="#!">
                      <i className="zmdi zmdi-more" />
                    </a>
                  </div>
                  <li className="full-width divider-menu-h" />
                  <div className="mdl-list__item mdl-list__item--two-line">
                    <span className="mdl-list__item-primary-content">
                      <i className="zmdi zmdi-truck mdl-list__item-avatar" />
                      <span>7. Provider name</span>
                      <span className="mdl-list__item-sub-title">DNI</span>
                    </span>
                    <a className="mdl-list__item-secondary-action" href="#!">
                      <i className="zmdi zmdi-more" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

	)
}
export default Proveedores