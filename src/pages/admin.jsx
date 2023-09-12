function Admin() {

	return (
		<>
			{
				//<!-- Notifications area -->
			}
			<section className="full-width container-notifications">
				<div className="full-width container-notifications-bg btn-Notification"></div>
				<section className="NotificationArea">
					<div className="full-width text-center NotificationArea-title tittles">Notifications <i
						className="zmdi zmdi-close btn-Notification"></i></div>
					<a href="#" className="Notification" id="notifation-unread-1">
						<div className="Notification-icon"><i className="zmdi zmdi-accounts-alt bg-info"></i></div>
						<div className="Notification-text">
							<p>
								<i className="zmdi zmdi-circle"></i>
								<strong>New User Registration</strong>
								<br />
								<small>Just Now</small>
							</p>
						</div>
						<div className="mdl-tooltip mdl-tooltip--left" htmlFor="notifation-unread-1">Notification as UnRead</div>
					</a>
					<a href="#" className="Notification" id="notifation-read-1">
						<div className="Notification-icon"><i className="zmdi zmdi-cloud-download bg-primary"></i></div>
						<div className="Notification-text">
							<p>
								<i className="zmdi zmdi-circle-o"></i>
								<strong>New Updates</strong>
								<br />
								<small>30 Mins Ago</small>
							</p>
						</div>
						<div className="mdl-tooltip mdl-tooltip--left" htmlFor="notifation-read-1">Notification as Read</div>
					</a>
					<a href="#" className="Notification" id="notifation-unread-2">
						<div className="Notification-icon"><i className="zmdi zmdi-upload bg-success"></i></div>
						<div className="Notification-text">
							<p>
								<i className="zmdi zmdi-circle"></i>
								<strong>Archive uploaded</strong>
								<br />
								<small>31 Mins Ago</small>
							</p>
						</div>
						<div className="mdl-tooltip mdl-tooltip--left" htmlFor="notifation-unread-2">Notification as UnRead</div>
					</a>
					<a href="#" className="Notification" id="notifation-read-2">
						<div className="Notification-icon"><i className="zmdi zmdi-mail-send bg-danger"></i></div>
						<div className="Notification-text">
							<p>
								<i className="zmdi zmdi-circle-o"></i>
								<strong>New Mail</strong>
								<br />
								<small>37 Mins Ago</small>
							</p>
						</div>
						<div className="mdl-tooltip mdl-tooltip--left" htmlFor="notifation-read-2">Notification as Read</div>
					</a>
					<a href="#" className="Notification" id="notifation-read-3">
						<div className="Notification-icon"><i className="zmdi zmdi-folder bg-primary"></i></div>
						<div className="Notification-text">
							<p>
								<i className="zmdi zmdi-circle-o"></i>
								<strong>Folder delete</strong>
								<br />
								<small>1 hours Ago</small>
							</p>
						</div>
						<div className="mdl-tooltip mdl-tooltip--left" htmlFor="notifation-read-3">Notification as Read</div>
					</a>
				</section>
			</section>
			{
				//<!-- navLateral-- >
			}
			<section className="full-width navLateral">
				<div className="full-width navLateral-bg btn-menu"></div>
				<div className="full-width navLateral-body">
					<div className="full-width navLateral-body-logo text-center tittles">
						<i className="zmdi zmdi-close btn-menu"></i> Inventory
					</div>
					<figure className="full-width navLateral-body-tittle-menu">
						<div>
							<img src="assets/img/avatar-male.png" alt="Avatar" className="img-responsive" />
						</div>
						<figcaption>
							<span>
								Full Name Admin<br />
								<small>Admin</small>
							</span>
						</figcaption>
					</figure>
					<nav className="full-width">
						<ul className="full-width list-unstyle menu-principal">
							<li className="full-width">
								<a href="home" className="full-width">
									<div className="navLateral-body-cl">
										<i className="zmdi zmdi-view-dashboard"></i>
									</div>
									<div className="navLateral-body-cr">
										HOME
									</div>
								</a>
							</li>
							<li className="full-width divider-menu-h"></li>
							<li className="full-width">
								<a href="#!" className="full-width btn-subMenu">
									<div className="navLateral-body-cl">
										<i className="zmdi zmdi-case"></i>
									</div>
									<div className="navLateral-body-cr">
										ADMINISTRATION
									</div>
									<span className="zmdi zmdi-chevron-left"></span>
								</a>
								<ul className="full-width menu-principal sub-menu-options">
									<li className="full-width">
										<a href="company" className="full-width">
											<div className="navLateral-body-cl">
												<i className="zmdi zmdi-balance"></i>
											</div>
											<div className="navLateral-body-cr">
												COMPANY
											</div>
										</a>
									</li>
									<li className="full-width">
										<a href="providers" className="full-width">
											<div className="navLateral-body-cl">
												<i className="zmdi zmdi-truck"></i>
											</div>
											<div className="navLateral-body-cr">
												PROVIDERS
											</div>
										</a>
									</li>
									<li className="full-width">
										<a href="payments" className="full-width">
											<div className="navLateral-body-cl">
												<i className="zmdi zmdi-card"></i>
											</div>
											<div className="navLateral-body-cr">
												PAYMENTS
											</div>
										</a>
									</li>
									<li className="full-width">
										<a href="categories" className="full-width">
											<div className="navLateral-body-cl">
												<i className="zmdi zmdi-label"></i>
											</div>
											<div className="navLateral-body-cr">
												CATEGORIES
											</div>
										</a>
									</li>
								</ul>
							</li>
							<li className="full-width divider-menu-h"></li>
							<li className="full-width">
								<a href="#!" className="full-width btn-subMenu">
									<div className="navLateral-body-cl">
										<i className="zmdi zmdi-face"></i>
									</div>
									<div className="navLateral-body-cr">
										USERS
									</div>
									<span className="zmdi zmdi-chevron-left"></span>
								</a>
								<ul className="full-width menu-principal sub-menu-options">
									<li className="full-width">
										<a href="admin" className="full-width">
											<div className="navLateral-body-cl">
												<i className="zmdi zmdi-account"></i>
											</div>
											<div className="navLateral-body-cr">
												ADMINISTRATORS
											</div>
										</a>
									</li>
									<li className="full-width">
										<a href="client" className="full-width">
											<div className="navLateral-body-cl">
												<i className="zmdi zmdi-accounts"></i>
											</div>
											<div className="navLateral-body-cr">
												CLIENT
											</div>
										</a>
									</li>
								</ul>
							</li>
							<li className="full-width divider-menu-h"></li>
							<li className="full-width">
								<a href="products" className="full-width">
									<div className="navLateral-body-cl">
										<i className="zmdi zmdi-washing-machine"></i>
									</div>
									<div className="navLateral-body-cr">
										PRODUCTS
									</div>
								</a>
							</li>
							<li className="full-width divider-menu-h"></li>
							<li className="full-width">
								<a href="sales" className="full-width">
									<div className="navLateral-body-cl">
										<i className="zmdi zmdi-shopping-cart"></i>
									</div>
									<div className="navLateral-body-cr">
										SALES
									</div>
								</a>
							</li>
							<li className="full-width divider-menu-h"></li>
							<li className="full-width">
								<a href="inventory" className="full-width">
									<div className="navLateral-body-cl">
										<i className="zmdi zmdi-store"></i>
									</div>
									<div className="navLateral-body-cr">
										INVENTORY
									</div>
								</a>
							</li>
							<li className="full-width divider-menu-h"></li>
							<li className="full-width">
								<a href="#!" className="full-width btn-subMenu">
									<div className="navLateral-body-cl">
										<i className="zmdi zmdi-wrench"></i>
									</div>
									<div className="navLateral-body-cr">
										SETTINGS
									</div>
									<span className="zmdi zmdi-chevron-left"></span>
								</a>
								<ul className="full-width menu-principal sub-menu-options">
									<li className="full-width">
										<a href="#!" className="full-width">
											<div className="navLateral-body-cl">
												<i className="zmdi zmdi-widgets"></i>
											</div>
											<div className="navLateral-body-cr">
												OPTION
											</div>
										</a>
									</li>
									<li className="full-width">
										<a href="#!" className="full-width">
											<div className="navLateral-body-cl">
												<i className="zmdi zmdi-widgets"></i>
											</div>
											<div className="navLateral-body-cr">
												OPTION
											</div>
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</nav>
				</div>
			</section>
			{
				/*
				<!--pageContent -->
				
				*/
			}
			<section className="full-width pageContent">
				{
					/*
					<!-- navBar -->
					
					*/
				}
				<div className="full-width navBar">
					<div className="full-width navBar-options">
						<i className="zmdi zmdi-swap btn-menu" id="btn-menu"></i>
						<div className="mdl-tooltip" htmlFor="btn-menu">Hide / Show MENU</div>
						<nav className="navBar-options-list">
							<ul className="list-unstyle">
								<li className="btn-Notification" id="notifications">
									<i className="zmdi zmdi-notifications"></i>
									<div className="mdl-tooltip" htmlFor="notifications">Notifications</div>
								</li>
								<li className="btn-exit" id="btn-exit">
									<i className="zmdi zmdi-power"></i>
									<div className="mdl-tooltip" htmlFor="btn-exit">LogOut</div>
								</li>
								<li className="text-condensedLight noLink"><small>User Name</small></li>
								<li className="noLink">
									<figure>
										<img src="assets/img/avatar-male.png" alt="Avatar" className="img-responsive" />
									</figure>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<section className="full-width header-well">
					<div className="full-width header-well-icon">
						<i className="zmdi zmdi-account"></i>
					</div>
					<div className="full-width header-well-text">
						<p className="text-condensedLight">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde aut nulla accusantium minus corporis
							accusamus fuga harum natus molestias necessitatibus.
						</p>
					</div>
				</section>
				<div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
					<div className="mdl-tabs__tab-bar">
						<a href="#tabNewAdmin" className="mdl-tabs__tab is-active">NEW</a>
						<a href="#tabListAdmin" className="mdl-tabs__tab">LIST</a>
					</div>
					<div className="mdl-tabs__panel is-active" id="tabNewAdmin">
						<div className="mdl-grid">
							<div className="mdl-cell mdl-cell--12-col">
								<div className="full-width panel mdl-shadow--2dp">
									<div className="full-width panel-tittle bg-primary text-center tittles">
										New Administrator
									</div>
									<div className="full-width panel-content">
										<form>
											<div className="mdl-grid">
												<div className="mdl-cell mdl-cell--12-col">
													<legend className="text-condensedLight"><i className="zmdi zmdi-border-color"></i>
														&nbsp; DATA ADMINISTRATOR</legend><br />
												</div>
												<div className="mdl-cell mdl-cell--12-col">
													<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
														<input className="mdl-textfield__input" type="number"
															pattern="-?[0-9]*(\.[0-9]+)?" id="DNIAdmin" />
														<label className="mdl-textfield__label" htmlFor="DNIAdmin">DNI</label>
														<span className="mdl-textfield__error">Invalid number</span>
													</div>
												</div>
												<div className="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">
													<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
														<input className="mdl-textfield__input" type="text"
															pattern="-?[A-Za-záéíóúÁÉÍÓÚ ]*(\.[0-9]+)?" id="NameAdmin" />
														<label className="mdl-textfield__label" htmlFor="NameAdmin">Name</label>
														<span className="mdl-textfield__error">Invalid name</span>
													</div>
												</div>
												<div className="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">
													<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
														<input className="mdl-textfield__input" type="text"
															pattern="-?[A-Za-záéíóúÁÉÍÓÚ ]*(\.[0-9]+)?" id="LastNameAdmin" />
														<label className="mdl-textfield__label" htmlFor="LastNameAdmin">Last
															Name</label>
														<span className="mdl-textfield__error">Invalid last name</span>
													</div>
												</div>
												<div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
													<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
														<input className="mdl-textfield__input" type="tel"
															pattern="-?[0-9+()- ]*(\.[0-9]+)?" id="phoneAdmin" />
														<label className="mdl-textfield__label" htmlFor="phoneAdmin">Phone</label>
														<span className="mdl-textfield__error">Invalid phone number</span>
													</div>
												</div>
												<div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
													<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
														<input className="mdl-textfield__input" type="email" id="emailAdmin" />
														<label className="mdl-textfield__label" htmlFor="emailAdmin">E-mail</label>
														<span className="mdl-textfield__error">Invalid E-mail</span>
													</div>
												</div>
												<div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
													<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
														<input className="mdl-textfield__input" type="text" id="addressAdmin" />
														<label className="mdl-textfield__label" htmlFor="addressAdmin">Address</label>
														<span className="mdl-textfield__error">Invalid address</span>
													</div>
												</div>
												<div className="mdl-cell mdl-cell--12-col">
													<legend className="text-condensedLight"><i className="zmdi zmdi-border-color"></i>
														&nbsp; ACCOUNT DETAILS</legend><br />
												</div>
												<div className="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">
													<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
														<input className="mdl-textfield__input" type="text"
															pattern="-?[A-Za-z0-9áéíóúÁÉÍÓÚ]*(\.[0-9]+)?" id="UserNameAdmin" />
														<label className="mdl-textfield__label" htmlFor="UserNameAdmin">User
															Name</label>
														<span className="mdl-textfield__error">Invalid user name</span>
													</div>
												</div>
												<div className="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">
													<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
														<input className="mdl-textfield__input" type="password" id="passwordAdmin" />
														<label className="mdl-textfield__label" htmlFor="passwordAdmin">Password</label>
														<span className="mdl-textfield__error">Invalid password</span>
													</div>
												</div>
												<div className="mdl-cell mdl-cell--12-col">
													<legend className="text-condensedLight"><i className="zmdi zmdi-border-color"></i>
														&nbsp; CHOOSE AVATAR</legend><br />
												</div>
												<div className="mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet">
													<div className="mdl-grid">
														<div
															className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone">
															<label className="mdl-radio mdl-js-radio mdl-js-ripple-effect"
																htmlFor="option-1">
																<input type="radio" id="option-1" className="mdl-radio__button"
																	name="options" value="avatar-male.png" />
																<img src="assets/img/avatar-male.png" alt="avatar"
																	style={{ height: "45px", width: "45px;" }} />
																<span className=" mdl-radio__label">Avatar 1</span>
															</label>
														</div>
														<div
															className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone">
															<label className="mdl-radio mdl-js-radio mdl-js-ripple-effect"
																htmlFor="option-2">
																<input type="radio" id="option-2" className="mdl-radio__button"
																	name="options" value="avatar-female.png" />
																<img src="assets/img/avatar-female.png" alt="avatar"
																	style={{ height: "45px", width: "45px;" }} />
																<span className=" mdl-radio__label">Avatar 2</span>
															</label>
														</div>
														<div
															className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone">
															<label className="mdl-radio mdl-js-radio mdl-js-ripple-effect"
																htmlFor="option-3">
																<input type="radio" id="option-3" className="mdl-radio__button"
																	name="options" value="avatar-male2.png" />
																<img src="assets/img/avatar-male2.png" alt="avatar"
																	style={{ height: "45px", width: "45px;" }} />
																<span className=" mdl-radio__label">Avatar 3</span>
															</label>
														</div>
														<div
															className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone">
															<label className="mdl-radio mdl-js-radio mdl-js-ripple-effect"
																htmlFor="option-4">
																<input type="radio" id="option-4" className="mdl-radio__button"
																	name="options" value="avatar-female2.png" />
																<img src="assets/img/avatar-female2.png" alt="avatar"
																	style={{ height: "45px", width: "45px;" }} />
																<span className=" mdl-radio__label">Avatar 4</span>
															</label>
														</div>
													</div>
												</div>
											</div>
											<p className="text-center">
												<button
													className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored bg-primary"
													id="btn-addAdmin">
													<i className="zmdi zmdi-plus"></i>
												</button>
												<div className="mdl-tooltip" htmlFor="btn-addAdmin">Add Administrator</div>
											</p>
										</form>
									</div>
								</div>
							</div>
							<div className="mdl-tabs__panel" id="tabListAdmin">
								<div className="mdl-grid">
									<div
										className="mdl-cell mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--8-col-desktop mdl-cell--2-offset-desktop">
										<div className="full-width panel mdl-shadow--2dp">
											<div className="full-width panel-tittle bg-success text-center tittles">
												List Administrator
											</div>
											<div className="full-width panel-content">
												<form action="#">
													<div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
														<label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="searchAdmin">
															<i className="zmdi zmdi-search"></i>
														</label>
														<div className="mdl-textfield__expandable-holder">
															<input className="mdl-textfield__input" type="text" id="searchAdmin" />
																<label className="mdl-textfield__label"></label>
														</div>
													</div>
												</form>
												<div className="mdl-list">
													<div className="mdl-list__item mdl-list__item--two-line">
														<span className="mdl-list__item-primary-content">
															<i className="zmdi zmdi-account mdl-list__item-avatar"></i>
															<span>1. Administrator name</span>
															<span className="mdl-list__item-sub-title">DNI</span>
														</span>
														<a className="mdl-list__item-secondary-action" href="#!"><i
															className="zmdi zmdi-more"></i></a>
													</div>
													<li className="full-width divider-menu-h"></li>
													<div className="mdl-list__item mdl-list__item--two-line">
														<span className="mdl-list__item-primary-content">
															<i className="zmdi zmdi-account mdl-list__item-avatar"></i>
															<span>2. Administrator name</span>
															<span className="mdl-list__item-sub-title">DNI</span>
														</span>
														<a className="mdl-list__item-secondary-action" href="#!"><i
															className="zmdi zmdi-more"></i></a>
													</div>
													<li className="full-width divider-menu-h"></li>
													<div className="mdl-list__item mdl-list__item--two-line">
														<span className="mdl-list__item-primary-content">
															<i className="zmdi zmdi-account mdl-list__item-avatar"></i>
															<span>3. Administrator name</span>
															<span className="mdl-list__item-sub-title">DNI</span>
														</span>
														<a className="mdl-list__item-secondary-action" href="#!"><i
															className="zmdi zmdi-more"></i></a>
													</div>
													<li className="full-width divider-menu-h"></li>
													<div className="mdl-list__item mdl-list__item--two-line">
														<span className="mdl-list__item-primary-content">
															<i className="zmdi zmdi-account mdl-list__item-avatar"></i>
															<span>4. Administrator name</span>
															<span className="mdl-list__item-sub-title">DNI</span>
														</span>
														<a className="mdl-list__item-secondary-action" href="#!"><i
															className="zmdi zmdi-more"></i></a>
													</div>
													<li className="full-width divider-menu-h"></li>
													<div className="mdl-list__item mdl-list__item--two-line">
														<span className="mdl-list__item-primary-content">
															<i className="zmdi zmdi-account mdl-list__item-avatar"></i>
															<span>5. Administrator name</span>
															<span className="mdl-list__item-sub-title">DNI</span>
														</span>
														<a className="mdl-list__item-secondary-action" href="#!"><i
															className="zmdi zmdi-more"></i></a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div >
				</div >
			</section >
		</>

	)
}


export default Admin