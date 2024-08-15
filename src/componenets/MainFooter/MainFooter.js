import './MainFooter.css';
import find_a_store from "../../assets/img/find-a-store@2x_0.png";
import check_network from "../../assets/img/check-network@2x_0.png";
import my_o2 from "../../assets/img/my-o2@2x_0.png";
import track_order from "../../assets/img/track-order@2x.png";
import search from "../../assets/img/search@2x_0.png";
import facebook from "../../assets/img/facebook@2x_0.png";
import youtube from "../../assets/img/youtube@2x_0.png";
import instagram from "../../assets/img/instagram@2x.png";
import twitter from "../../assets/img/twitter@2x_0.png";
import o2_flurry_bubbles from "../../assets/img/o2-flurry-bubbles.png";

function MainFooter() {
  return (
    <footer id="footer">
      <img className='bubble_img' src={o2_flurry_bubbles}></img>
      <div id="o2-footer">
        <div className="global-navigation-grid">
          <div className='container'>
            <div className='row'>
              <div className='footer_p1'>
                <div className='row_columns first_col'>
                  <div className='menu-activity'>
                    <div style={{
                      display:"grid"
                    }}>
                      <div className='display_flex'>
                        <img src={find_a_store} className='image_footer'></img>
                        <a href='https://stores.o2.co.uk/' className='first_col_a'>Find a store</a>
                      </div>
                      <div className='display_flex'>
                        <img src={check_network} className='image_footer'></img>
                        <a href='https://www.o2.co.uk/coveragechecker' className='first_col_a'>Check our network</a>
                      </div>
                      <div className='display_flex'>
                        <img src={my_o2} className='image_footer'></img>
                        <a className='first_col_a'>Sign in to My O2</a>
                      </div>
                      <div className='display_flex'>
                        <img src={track_order} className='image_footer'></img>
                        <a href='https://www.o2.co.uk/help/pay-monthly/how-to-track-your-order' className='first_col_a'>Track my order</a>
                      </div>
                      <div className='display_flex padding_bottom_none'>
                        <img src={search} className='image_footer'></img>
                        <a href='https://www.o2.co.uk/searchresult?view=html&q1=top&x1=page_type&q=&referrerPageUrl=https%3A%2F%2Fwww.o2.co.uk%2Fshop%2Fbasket&query=' className='first_col_a'>Search</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row_columns'>
                  <div>
                    <h1 className='popular_in_shop'>Popular in shop</h1>
                    <div style={{display: "grid"}}>
                      <a href='https://www.o2.co.uk/shop/apple/iphone-15-pro-max' className='second_col_a first_col_a'>iPhone 15 Pro Max</a>
                      <a href='https://www.o2.co.uk/shop/apple/iphone-15-pro' className='second_col_a first_col_a'>iPhone 15 Pro</a>
                      <a href='https://www.o2.co.uk/shop/apple/iphone-15' className='second_col_a first_col_a'>iPhone 15</a>
                      <a href='https://www.o2.co.uk/shop/apple/watch-series-9-sport-band-41mm' className='second_col_a first_col_a'>Apple Watch Series 9</a>
                      <a href='https://www.o2.co.uk/shop/apple/watch-ultra-2-titanium-with-trail-loop-carbon-neutral' className='second_col_a first_col_a'>Apple Watch Ultra 2</a>
                      <a href='https://www.o2.co.uk/shop/samsung/galaxy-s23-ultra' className='second_col_a first_col_a'>Samsung Galaxy S23 Ultra</a>
                      <a href='https://www.o2.co.uk/shop/samsung/galaxy-s23' className='second_col_a first_col_a'>Samsung Galaxy S23</a>
                      <a href='https://www.o2.co.uk/shop/samsung/galaxy-z-flip5' className='second_col_a first_col_a'>Samsung Galaxy Z Flip5</a>
                      <a href='https://www.o2.co.uk/shop/google/pixel-8-pro' className='second_col_a first_col_a'>Google Pixel 8 Pro</a>
                      <a href='https://www.o2.co.uk/shop/sim-cards/sim-only-deals#deviceType=phone&contractLength=undefined' className='second_col_a first_col_a'>Sim only</a>
                      <a href='https://www.virginmedia.com/broadband' className='second_col_a first_col_a'>Virgin Media broadband deals</a>
                    </div>
                  </div>
                </div>
                <div className='row_columns display_grid'>
                  <div style={{ paddingBottom: "7px" }}>
                    <h1 className='popular_in_shop'>Help and support</h1>
                    <div style={{display: "grid"}}>
                      <a href='https://www.o2.co.uk/help' className='second_col_a first_col_a'>Help home</a>
                      <a href='https://www.o2.co.uk/contactus' className='second_col_a first_col_a'>Contact us</a>
                      <a className='second_col_a first_col_a'>My O2</a>
                      <a href='https://www.o2.co.uk/help/device-and-sim-support/collection-and-delivery' className='second_col_a first_col_a'>Collection and delivery</a>
                    </div>
                  </div>
                  <div>
                    <h1 className='popular_in_shop'>Shop</h1>
                    <div style={{display: "grid"}}>
                      <a href='https://www.o2.co.uk/shop/phones#sort=content.sorting.featured&page=1' className='second_col_a first_col_a'>Phones</a>
                      <a href='https://www.o2.co.uk/shop/tablets#sort=content.sorting.featured&page=1' className='second_col_a first_col_a'>Tablets</a>
                      <a href='https://www.o2.co.uk/shop/sim-cards/sim-only-deals#deviceType=phone&contractLength=undefined' className='second_col_a first_col_a'>Pay Monthly Sim</a>
                      <a href='https://www.o2.co.uk/shop/sim-cards/pay-as-you-go' className='second_col_a first_col_a'>Pay As You Go Sim</a>
                      <a href='https://www.virginmediao2.co.uk/' className='second_col_a first_col_a'>Virgin Media O2 Joint Venture</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='margin_left'>
                <div className='icons_div'>
                  <a href='https://www.facebook.com/o2uk' className='first_col_a third_col_a'>
                    <img className='second_col_social' src={facebook}></img>
                  </a>
                  <a href='https://www.youtube.com/user/o2ukofficial' className='first_col_a third_col_a'>
                    <img className='second_col_social' src={youtube}></img>
                  </a>
                  <a href='https://twitter.com/o2' className='first_col_a third_col_a'>
                    <img className='second_col_social' src={twitter}></img>
                  </a>
                  <a href='https://www.instagram.com/o2uk/' className='first_col_a third_col_a'>
                    <img className='second_col_social' src={instagram}></img>
                  </a>
                </div>
                <div className='fifth_col'>
                  <a href='https://www.o2.co.uk/abouto2' className='fifth_col_a'>About O2</a> | <a href='https://www.o2.co.uk/better-connections-plan' className='fifth_col_a'>Better Connection Plans</a> | <a href='https://jobs.virginmediao2.co.uk/en_US/careersmarketplace' className='fifth_col_a'>Careers</a> | <a href='https://news.virginmediao2.co.uk/' className='fifth_col_a'>News & PR</a> | <a href='https://www.o2.co.uk/sponsorship' className='fifth_col_a'>Sponsership</a> | <a href='https://www.o2.co.uk/virgin-media-o2' className='fifth_col_a'>Virgin Media and O2</a>
                </div>
                <div className='fifth_col'>
                  <a href='https://www.o2.co.uk/access-for-all' className='fifth_col_a'>Accessibility</a> | <a href='https://www.o2.co.uk/termsandconditions' className='fifth_col_a'>Terms & Conditions</a> | <a href='https://www.o2.co.uk/termsandconditions/privacy-policy' className='fifth_col_a'>Privacy policy</a> | <a href='https://www.o2.co.uk/cookie-policy' className='fifth_col_a'>Cookie policy</a> | <a href='https://www.o2.co.uk/abouto2/corporate-statements' className='fifth_col_a'>Modern Slavery Statement</a><a className='fifth_col_a fifth_col_last'>© 2023 Telefónica UK Limited</a>
                </div>
                <div className='fifth_col'>
                  <a className='fifth_col_text'>In relation to consumer credit, Telefónica UK Limited is authorised and regulated by the Financial Conduct Authority (Reference Number 718822)</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
