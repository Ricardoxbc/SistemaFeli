
function Home() {
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
				<section className="full-width text-center" style={{ padding: "40px 0" }}>
					<h3 className="text-center tittles">RESPONSIVE TILES</h3>
					{/* Tiles */}
					<article className="full-width tile">
						<div className="tile-text">
							<span className="text-condensedLight">
								2<br />
								<small>Administrators</small>
							</span>
						</div>
						<i className="zmdi zmdi-account tile-icon" />
					</article>
					<article className="full-width tile">
						<div className="tile-text">
							<span className="text-condensedLight">
								71
								<br />
								<small>Clients</small>
							</span>
						</div>
						<i className="zmdi zmdi-accounts tile-icon" />
					</article>
					<article className="full-width tile">
						<div className="tile-text">
							<span className="text-condensedLight">
								7<br />
								<small>Providers</small>
							</span>
						</div>
						<i className="zmdi zmdi-truck tile-icon" />
					</article>
					<article className="full-width tile">
						<div className="tile-text">
							<span className="text-condensedLight">
								9<br />
								<small>Categories</small>
							</span>
						</div>
						<i className="zmdi zmdi-label tile-icon" />
					</article>
					<article className="full-width tile">
						<div className="tile-text">
							<span className="text-condensedLight">
								121
								<br />
								<small>Products</small>
							</span>
						</div>
						<i className="zmdi zmdi-washing-machine tile-icon" />
					</article>
					<article className="full-width tile">
						<div className="tile-text">
							<span className="text-condensedLight">
								47
								<br />
								<small>Sales</small>
							</span>
						</div>
						<i className="zmdi zmdi-shopping-cart tile-icon" />
					</article>
				</section>
				<section className="full-width" style={{ margin: "30px 0" }}>
					<h3 className="text-center tittles">RESPONSIVE TIMELINE</h3>
					{/* TimeLine */}
					<div id="timeline-c" className="timeline-c">
						<div className="timeline-c-box">
							<div className="timeline-c-box-icon bg-info">
								<i className="zmdi zmdi-twitter" />
							</div>
							<div className="timeline-c-box-content">
								<h4 className="text-center text-condensedLight">Tittle timeline</h4>
								<p className="text-center">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
									nobis rerum iure nostrum dolor. Quo totam possimus, ex, sapiente
									rerum vel maxime fugiat, ipsam blanditiis veniam, suscipit labore
									excepturi veritatis.
								</p>
								<span className="timeline-date">
									<i className="zmdi zmdi-calendar-note zmdi-hc-fw" />
									05-04-2016
								</span>
							</div>
						</div>
						<div className="timeline-c-box">
							<div className="timeline-c-box-icon bg-success">
								<i className="zmdi zmdi-whatsapp" />
							</div>
							<div className="timeline-c-box-content">
								<h4 className="text-center text-condensedLight">Tittle timeline</h4>
								<p className="text-center">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
									nobis rerum iure nostrum dolor. Quo totam possimus, ex, sapiente
									rerum vel maxime fugiat, ipsam blanditiis veniam, suscipit labore
									excepturi veritatis.
								</p>
								<span className="timeline-date">
									<i className="zmdi zmdi-calendar-note zmdi-hc-fw" />
									06-04-2016
								</span>
							</div>
						</div>
						<div className="timeline-c-box">
							<div className="timeline-c-box-icon bg-primary">
								<i className="zmdi zmdi-facebook" />
							</div>
							<div className="timeline-c-box-content">
								<h4 className="text-center text-condensedLight">Tittle timeline</h4>
								<p className="text-center">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
									nobis rerum iure nostrum dolor. Quo totam possimus, ex, sapiente
									rerum vel maxime fugiat, ipsam blanditiis veniam, suscipit labore
									excepturi veritatis.
								</p>
								<span className="timeline-date">
									<i className="zmdi zmdi-calendar-note zmdi-hc-fw" />
									07-04-2016
								</span>
							</div>
						</div>
						<div className="timeline-c-box">
							<div className="timeline-c-box-icon bg-danger">
								<i className="zmdi zmdi-youtube" />
							</div>
							<div className="timeline-c-box-content">
								<h4 className="text-center text-condensedLight">Tittle timeline</h4>
								<p className="text-center">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
									nobis rerum iure nostrum dolor. Quo totam possimus, ex, sapiente
									rerum vel maxime fugiat, ipsam blanditiis veniam, suscipit labore
									excepturi veritatis.
								</p>
								<span className="timeline-date">
									<i className="zmdi zmdi-calendar-note zmdi-hc-fw" />
									08-04-2016
								</span>
							</div>
						</div>
					</div>
				</section>
			</section>
		</>

	)
}

export default Home

