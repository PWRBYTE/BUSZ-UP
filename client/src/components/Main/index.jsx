import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (

		<div>
			{/* header start */}
			<header id="header">
				
					<div className="navbar">
						<div className="navbar__item navbar__item--left">
							<div className="navbar__logo">
								<a href="#">
									<img className="logopic" src="image/01_header/logo_main.png" />
								</a>
							</div>
						</div>
						{/* menu start */}
						<div className="navbar__item navbar__item--center">
							<nav className="navbar__menu">
								<ul className="navbar__menulists">
									<li className="navbar__menulist navbar__menu--haschildren">
										<a href="#" className="navbar__menulink">
											Home
											<i className="fa-solid fa-angle-down" />
										</a>
										{/* <div className="navbar__submenu navbar__megamenu navbar__column--mega2">
											<div className="megamenu__list--item">
												<h4>Home Pages</h4>
											</div>
										</div> */}
									</li>
									<li className="navbar__menulist navbar__menu--haschildren">
										<a href="https://colab.research.google.com/drive/1sSyEDbEQfklmkYXdvZdIh35e2QtOzzNN#scrollTo=4042j_pdzoYq" className="navbar__menulink">
											Locator
											<i className="fa-solid fa-angle-down" />
										</a>
										{/* <div className="navbar__submenu navbar__submenu--single">
											<ul className="navbar__submenu--lists">
												<li className="navbar__submenu--list">
													<a href="#" className="navbar__submenu--link">
														<i className="fa-solid fa-address-book" />
														Employee Review
													</a>
												</li>
												<li className="navbar__submenu--list">
													<a href="#" className="navbar__submenu--link">
														<i className="fa-solid fa-address-book" />
														Locator
													</a>
												</li>
												<li className="navbar__submenu--list">
													<a href="#" className="navbar__submenu--link">
														<i className="fa-solid fa-address-book" />
														Page 3
													</a>
												</li>
											</ul>
										</div> */}
									</li>
									<li className="navbar__menulist navbar__menu--haschildren">
										<a href="http://localhost:3001/" className="navbar__menulink">
											Employees Review
											<i className="fa-solid fa-angle-down" />
										</a>
										{/* <div className="navbar__submenu navbar__submenu--single">
											<ul className="navbar__submenu--lists"></ul>
										</div> */}
									</li>
									{/* <li className="navbar__menulist navbar__menu--haschildren">
                <a href="#" className="navbar__menulink">
                  About Us
                  <i className="fa-solid fa-angle-down" />
                </a>
                <div className="navbar__submenu navbar__submenu--single"></div>
              </li> */}
									{/* <li className="navbar__menulist navbar__menu--haschildren">
                <a href="#" className="navbar__menulink">
                  Pages
                  <i className="fa-solid fa-angle-down" />
                </a>
                <div className="navbar__submenu navbar__submenu--single">
                  <ul className="navbar__submenu--lists">
                    <li className="navbar__submenu--list">
                      <a href="#" className="navbar__submenu--link">
                        <i className="fa-solid fa-address-book" />
                        Page 1
                      </a>
                    </li>
                    <li className="navbar__submenu--list">
                      <a href="#" className="navbar__submenu--link">
                        <i className="fa-solid fa-address-book" />
                        Page 2
                      </a>
                    </li>
                    <li className="navbar__submenu--list">
                      <a href="#" className="navbar__submenu--link">
                        <i className="fa-solid fa-address-book" />
                        Page 3
                      </a>
                    </li>
                  </ul>
                </div>
              </li> */}
									<li className="navbar__menulist navbar__menu--haschildren">
										<a href="#" className="navbar__menulink">
											About Us
											<i className="fa-solid fa-angle-down" />
										</a>
										<div className="navbar__submenu navbar__submenu--single"></div>
									</li>
								</ul>
							</nav>
						</div>
						{/* menu end */}
						<div className="navbar--right__wallet">
							<a href="#"><i className="fas fa-add"></i></a>
							<a href="#" className="btn">
								<i className="fa-solid fa-wallet"></i>
								<span id="wallet">Wallet connect</span>
							</a>
						</div>
						<div className="mobile-menu-trigger">
							<span></span>
						</div>
						<div className="logout">

							<a href="#" className="btn">
								<i className="fa-solid fa-"></i>
								<span id="wallet">Logout</span>
							</a>
						</div>
						<div className="navbar--right__state">
							{/* <a href="login.html"
                          ><i className=""> Logout</i
                      ></a> */}
							{/* <a href="#"><i className="fa-solid fa-moon"></i></a> */}
						</div>
						<div className="event__search__floater">
							<div className="search__anchor">
								<form id="event-search-form" action="get">
									<input type="text" className="search__bar" placeholder="Search Event" />
									<input className="search__submit" type="submit" />
									<div className="search__toggler" />
								</form>
							</div>
						</div>
					</div>

			</header>
			{/* header end */}
			{/* main start */}
			<nav className="float-action-button">
				<a href="#" className="buttons" title="Google+" data-toggle="tooltip" data-placement="left">
					<i className="fa fa-google-plus" />
				</a>
				<a href="#" className="buttons" title="Twitter" data-toggle="tooltip" data-placement="left">
					<i className="fa fa-twitter" />
				</a>
				<a href="#" className="buttons" title="Facebook" data-toggle="tooltip" data-placement="left">
					<i className="fa fa-facebook" />
				</a>
				<a href="#" className="buttons main-button" title="Share" data-toggle="tooltip" data-placement="left">
					<i className="fa fa-times" />
					<i className="fa fa-share-alt" />
				</a>
			</nav>
			<main id="main">

				<section className="sticky__bar">
					<ul className="socials__links">
						<li className="socials__item">
							<a href="#" className="socials__link">
								<i className="fa-brands fa-facebook-f" />
							</a>
						</li>
						<li className="socials__item">
							<a href="#" className="socials__link">
								<i className="fa-brands fa-twitter" />
							</a>
						</li>
						<li className="socials__item">
							<a href="#" className="socials__link">
								<i className="fa-brands fa-github" />
							</a>
						</li>
						<li className="socials__item">
							<a href="#" className="socials__link">
								<i className="fa-brands fa-instagram" />
							</a>
						</li></ul>
				</section>
				<section id="hero">
					<div className="container">
						<div className="hero__wrapper">
							<div className="namebox">
								<div className="hero__wrapper--left">
									<div>
										<h2>
											The one Step Solution for your Business Growth
										</h2>
										<h2>BuszUp</h2>
										<h2>BuszUp</h2>
										<h2>Locate ⋅ Find Employees ⋅ Settle</h2>


										<div className="hero__wrapper--right">
											<div className="hero__shapes">
												<div className="hero__shape--circle" />
												<div className="hero__shape--star">
													<i className="fa-solid fa-star" />
												</div>
												<div className="hero__shape--circle1" />
												<div className="hero__shape--star hero-star1">
													<i className="fa-solid fa-car" />
												</div>
												<div className="hero__shape--circle hero-circle1" />
												<div className="hero__shape--circle hero-circle3" />
												<div className="hero__shape--circle1 hero-circle2" />
												<div className="hero__shape--star hero-star2">
													<i className="fa-solid fa-pen" />
												</div>
												<div className="hero__shape--star hero-star3">
													<i className="fa-regular fa-square" />
												</div>
												<div className="hero__shape--star hero-star4">
													<i className="fa-regular fa-pin" />
												</div>
												<div className="hero__shape--star hero-star5">
													<i className="fa-regular fa-star" />
												</div>
											</div>
											<img src="image/02_hero/imgslider2.png" alt="" className="hero__image--person" />
											<img src="image/01_header/img-bg-slider.png" alt="" className="hero__image--circle" />
										</div></div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section id="heroBox">
					<div className="container">
						<div className="heroBox__wrapper">
							<div className="heroBox--item">
								{/* <i className="fa-solid fa-user" />
							<h3>Option 1</h3> */}
								<p>
									{/* Once you’ve set up your wallet of choice,
									  connect it to OpenSeaby clicking the NFT
									  Marketplacein the top right corner. */}
								</p>
								{/* </div>
						  <div className="heroBox--item">
							<i className="fa-solid fa-location" />
							<h3>Option-2</h3> */}
								<p>
									{/* Click Create and set up your collection. Add
									  social links, a description, profile & banner
									  images, and set a secondary sales fee. */}
									{/* </p>
						  </div>
						  <div className="heroBox--item">
							<i className="fa-solid fa-cocktail" />
							<h3>Option-3</h3>
							<p> */}
									{/* Upload your work (image, video, audio, or 3D
									  art), add a title and description, and customize
									  your NFTs with properties, stats */}
								</p>
							</div>
							{/* <div className="heroBox--item">
								  <i className="fa-solid fa-bookmark"></i>
								  <h3>List Them For Sale</h3>
								  <p>
									  Choose between auctions, fixed-price listings,
									  and declining-price listings. You choose how you
									  want to sell your NFTs!
								  </p>
							  </div> */}
						</div>
					</div>
				</section>
				<section id="auction">
					<div className="container">
						<div className="auction__wrapper">
							<div className="auction__top">
								<h2>Services </h2>
								<a href="#">Explore More </a>
							</div>
							<div className="auction__bottom">
								
								
								<div className="auction--item">
									<div className="auction__card">
										<div className="auction__card--media">
											<a href="#">
												<img src="image/03_Live Auctions/image-box-11.png" alt="" />
											</a>
											<div className="auction__media--BtnBid">
												<a href="#">
													<i className="fa-solid fa-bag-shopping" />Go</a>
											</div>
											<div className="auction__media--counter">
												<i className="fa-solid fa-fire-flame-curved" />
												<p className="card__time--text" id="card__time3" />
											</div>
										</div>
										<div className="auction__card--title">
											<h5>
												<a href="http://localhost:3001/">Employees Review</a>
											</h5>
										</div>
										<div className="auction__card--bottom">
											<div className="auction__price">
												<span>Find the best Employees for your next Venture for exponential growth and efficiency and keep track of them effortlessly</span>
											</div>

										</div>
									</div>
								</div>
								<div className="auctio
								n--item">
									<div className="auction__card">
										<div className="auction__card--media">
											<a href="#">
												<img src="image/03_Live Auctions/image-box-21.jpg" alt="" />
											</a>
											<div className="auction__media--BtnBid">
												<a href="#">
													<i className="fa-solid fa-bag-shopping" />Go</a>
											</div>
											<div className="auction__media--counter">
												<i className="fa-solid fa-fire-flame-curved" />
												<p className="card__time--text" id="card__time4" />
											</div>
										</div>
										<div className="auction__card--title">
											<h5>
												<a href="https://colab.research.google.com/drive/1sSyEDbEQfklmkYXdvZdIh35e2QtOzzNN#scrollTo=4042j_pdzoYq">Locator</a>
											</h5>
										</div>
										<div className="auction__card--bottom">
											<div className="auction__price">
												<span>Locate the best places for your next probable business venture target to grow rapidly and efficienty</span>

											</div>

										</div>

									</div>
								</div>
							</div>
							<div className="auction__pagination">
								<a href="#"><i className="fa-solid fa-arrow-left" /></a>
								<div className="pagination__btns">
									<div className="pagination__page" />
									<div className="pagination__page" />
									<div className="pagination__page" />
									<div className="pagination__page" />
									<div className="pagination__page pagination__page--active" />
									<div className="pagination__page" />
									<div className="pagination__page" />
									<div className="pagination__page" />
									<div className="pagination__page" />
								</div>
								<a href="#"><i className="fa-solid fa-arrow-right" /></a>
							</div>
						</div>
					</div>
				</section>
				<section id="seller">
					<div className="container">

						<section>
							{/* 03 page start */}
							<div id="page">
								<div id="about" className="pageControl" />
								<div className="experince-container-fluid">
									<div className="container">
										<div className="section-box-container">
											<div className="experince-header"><span className="experince-header-set">About Us</span></div>
											<div className="about-container">
												<div className="about-me-section">
													<div className="about-text">
														We are team PWRBYTE .We are a group of 4 enthusiastic coders , having variety of skills like that of Artificial Intelligence and Machine Learning, Blockchain developer and fullstack developers. We are 2nd year undergraduate
													</div>
													<div className="about-text">
														The project that we have designed is aimed to those businesses which have the desidaratum to burgeon .Our project contains both Machine Learning and Blockchain to make it mmore intelligent and the system transparent.
														This will solve the problem of both the business person as well as that of the common people. They can store their informations in blockchain and make the verification effortlessly.
													</div>
													<div className="about-text">
														The project in the near future will be developed in the fashion of white brand labeling , linking direct to consumer or D2C format.
														<div style={{ color: '#bfc0c4' }} className="about-text">
															Social
														</div>
													</div>
													<div className="skills-bar-about">
														<a className="social-links"><i className="margin fa-brands fa-github" /></a>
														<a className="social-links"><i className="fa-brands fa-linkedin-in" /></a>
														<a className="social-links"><i className="insta fa-brands fa-instagram" /></a>
														<a className="social-links" href="https://open.spotify.com/user/21xbxidz623as32iw4r3u3uiq" target="_blank"><i className="fa-brands fa-spotify" /></a>
														<a className="social-links"><i className="fa-brands fa-codepen" /></a>
													</div>
													
												</div>
												


													<div className="img-section">
														<img src="image/10_AboutUs/pwrbyte.jpg" />

												
												</div>
											</div>
										</div>
									</div>
									<div className="Animation_effect">

									</div>
								</div>
							</div>
						</section>
						

						
					</div>
					<section className="team">
        <div className="container">
          <div className="profile">
            <img src="image/10_AboutUs/Arijit.jpg" alt="" /><span className="name">Arijit Ghosh</span>
          </div>
          <div className="profile">
            <img src="image/10_AboutUs/Atrij.jpg" alt="" /><span className="name">Atrij Paul</span>
          </div>
          <div className="profile">
            <img src="image/10_AboutUs/Sabuj.jpg" alt="" /><span className="name">Sabuj Ghosh</span>
          </div>
          <div className="profile">
            <img src="image/10_AboutUs/Moy.jpg" alt="" /><span className="name">Sworjjomoy Pathak</span>
          </div>
        </div>
      </section>
					
				</section>
				<section id="pick">
					<div className="container">
						<div className="pick__wrapper">
							
							<div className="filter--btn">Load More</div>
						</div>
					</div>
				</section>
			</main>
			{/* main end */}
			{/* footer start */}
			<footer id="footer">
			
			</footer>
			{/* footer end */}
			{/* scroll */}
			<div id="scroll--top">
				<i className="fa-solid fa-angle-up" />
			</div>
		</div>
	);
}

export default Main;
