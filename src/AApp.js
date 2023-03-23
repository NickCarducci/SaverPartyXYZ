import React from "react";
import Cable from "./Dropwire";
import Government from "./government";
import TwitterTweetEmbed from "./TwitterTweetEmbed";

class AApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    for (let i = 0; i < 350; i++) {
      this["scrollImg" + i] = React.createRef();
    }
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  };
  componentWillUnmount = () => {
    clearTimeout(this.viewBLMtimeout);
    clearInterval(this.waitReverse);
    clearTimeout(this.scrollTimeout);
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = (e) => {
    //universal
    if (!this.state.offScroll) {
      const innerHeight = window.innerHeight;
      const scrollTop = window.scrollY; //+ window.innerHeight;
      // const scrollHeight = window.pageYOffset; //document.documentElement.scrollHeight;

      const top = scrollTop === 0;
      this.setState(
        {
          landedPresentation: false,
          scrolling: true,
          openMenu: top ? false : this.state.openMenu,
          top,
          scrollTop
        },
        () => {
          clearTimeout(this.timey);
          this.timey = setTimeout(
            () =>
              this.setState({
                onscroll:
                  window.document.body.scrollHeight -
                    window.document.body.clientHeight >
                  50
              }),
            200
          );

          clearTimeout(this.scrollTimeout);
          this.scrollTimeout = setTimeout(() => {
            this.setState(
              {
                scrollPlacementHeight: Math.round(
                  (innerHeight - 65) *
                    (window.scrollY / document.documentElement.scrollHeight)
                ),
                scrolling: false,
                landedPresentation: scrollTop > scrollTop + innerHeight + 40
              },
              () => {
                clearTimeout(this.scrollScrollTimeout);
                this.scrollScrollTimeout = setTimeout(() => {
                  this.setState({ landedPresentation: false });
                }, 2577);
              }
            );
          }, 900);
        }
      );
    }
  };
  render() {
    //const {} = this.state;
    //console.log(this.state.username);
    //const space = " ";
    const setting = (n, more) => {
      return {
        style: {
          color: this.state["hoverin" + n] ? "rgb(50,70,90)" : "black",
          cursor: "pointer",
          ...more
        },
        onMouseEnter: () => this.setState({ ["hoverin" + n]: true }),
        onMouseLeave: () => this.setState({ ["hoverin" + n]: false })
      };
    };
    const setting2 = (n, more) => {
      return {
        style: {
          color: this.state["hoverin" + n]
            ? "rgb(80,100,120)"
            : "rgb(50,70,90)",
          cursor: "pointer",
          ...more
        },
        onMouseEnter: () => this.setState({ ["hoverin" + n]: true }),
        onMouseLeave: () => this.setState({ ["hoverin" + n]: false })
      };
    };
    const handleScollImgError = (e) => {
      if (e) {
        this.setState({ settleDropboxFree: true });
      }
    };
    let arrayOfnumbers = [0];
    const scrollnum = () => {
      const num = arrayOfnumbers[arrayOfnumbers.length - 1] + 1;
      arrayOfnumbers.push(num);
      return num;
    };
    const space = " ";
    return (
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          transition: ".3s ease-in",
          display: "flex",
          flexDirection: "column",
          justifyContent: this.state.onscroll ? "start" : "space-around",
          maxheight: "min-content",
          height: "calc(100vh - 20px)",
          fontFamily: "sans-serif",
          textAlign: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            position: "relative",
            top: "0px",
            marginTop: "30px"
          }}
        >
          <div
            {...setting(8, {
              zIndex: "9",
              border: "1px solid",
              textAlign: "left",
              color: "black",
              textDecoration: "none",
              position: "fixed",
              left: "-50px",
              top: "60px",
              transform: "rotate(90deg)"
            })}
          >
            <a href="https://reverseamortization.quora.com">
              reconciliation as default
            </a>
            <br />
            <a href="https://thetax.party">thetaxparty.com</a>
            <br />
            <a href="https://regcops.quora.com">commie.dev/police</a>
          </div>
          <div
            {...setting(8, {
              zIndex: "9",
              border: "1px solid",
              textAlign: "right",
              color: "black",
              textDecoration: "none",
              position: "fixed",
              left: "-120px",
              bottom: "140px",
              transform: "rotate(90deg)"
            })}
          >
            <a href="https://revenuedata.doi.gov">Save America</a>
            {space}(no contracts)
            <br />
            <a href="mailto:sayists@icloud.com">
              Now seeking President 2024 nominations
            </a>
          </div>
          <div
            onClick={this.props.setIndex}
            {...setting(8, {
              textDecoration: "none",
              position: "fixed",
              right: "30px",
              top: "40px"
            })}
          >
            &diams;
          </div>
          <div
            style={{
              fontSize: "12px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center" //did he just call life a hypno rectangle? endogeous a la carte life
              //depression is either natural or systemic
              //What if Jesus pbuh was a wuss//"lifting of veil " monoraji "love everyone tell true from lovespace heart not head"
              // I think we got it
              //cnbc tells me not to trade in innuendo
              //rocket
              //hallucinations detemined by closed source

              //
            }}
          >
            Save the rats, fund rich NSF applicants, or imprison custom builds?
            <br />
            Does an anti-finance third party lose two non-voters for every swing
            voter gained?
            <br />
            <br />
            Combining your money to surrender individual bid? illegal.
            <br />
            PlaintiffRecessionTax.com
            <br />
            <span>
              <a href="https://vaults.biz/money">Tripling currency</a>
              {space}is satan
            </span>
            <br />
            ​I will fight over the pandemic fraud humanharvest.info
            <br />
            <span style={{ textDecoration: "line-through" }}>
              ​UT NM WY revenuedata.doi.gov worthless
            </span>
            <br />
            Employee retention is niether conservative nor progressive
            <br />
            Amendment 10 enumerates what?
            <br />
            ​you just have to shame yourself for religious science
            <div style={{ width: "300px" }}>
              Shelter computer labs
              <br />
              <span style={{ textDecoration: "line-through" }}>
                job security, employee retention, paper pushing.
              </span>
              <br />
              The federal reserve and OCC can just stop bankruptcies to save
              deposits instead. Progressively tax progressive industries (codify
              general interest government debt, student debt, and realty
              foreclosure; default personal LFP, not usually backing deposits).
              <br />
              <span style={{ fontSize: "12px" }}>
                https://www.quora.com/search?q=publishing&author=49662667 Don't
                cops punish while threats prevent crime? What kind of punishment
                isn't investigated? Isn't investigation required for punishment?
                <br />
                Should social security injury disability, supplemental trauma,
                or old age and survivors' past housing and medical factors of
                old age and survivors' insurance beneficiaries pay liabilities
                before retirement and end? Are the developmentally disabled
                either ever any more than or even as retarded as the everyday
                risk-lover? Do everyday people or bankers benefit from
                shrinkflation in excess of inflation?
              </span>
              <h2>
                Consumer advocate of minimal viable duress by UN association to
                own, statewise donee beneficiary, and federal non-response.
                {space}
                <i style={{ color: "grey", fontSize: "16px" }}>
                  If a deadline is set by someone else, didn't you surrender
                  another employer's freedom?
                </i>
              </h2>
              &bull;{space}TaxSecurityFirst.com for Risk-Free banking
              <br />
              &bull;{space}
              <a href="https://">Codify past debts progressively</a>
              {space}by{space}
              <a href="https://micro-theory.com">industry factor benefit</a>
              {space}without interest.
              <br />
              &bull;{space}Final goods not in voice nor advance nonsale warranty
              <br />
              &bull;{space}Affix legal dependency instead of custody for
              inflation.
              <br />
              &bull;{space}Under 18 proprietors, no homeschool nor truancy
              required (suggested work for yourself towards a{space}
              <a href="https://vau.money/login">
                tax advantaged primary residence
              </a>
              {space}account)
              <br />
              &bull;{space}Moving to learn to code....
              <br />
              &bull;{space}Surtures, medics for all 43% medicare for all and 47%
              no insurance
              <br />
              &bull;{space}SSDI injury
              <br />
              &bull;{space}SSI trauma traded,{space}
              <a href="https://jester.com.co">
                not the verb by which anyone can be
              </a>
              {space}(The currency is{space}
              <a href="https://vaults.biz/money">20% of the country</a>
              {space}you tard:{space}
              <i>Have you yet eloped a self-retarding group or function?</i>)
              <br />
              &bull;{space}Tax after recessions and during its inflation part
              for{space}
              <a href="https://kinddocket.com">investigative punishment</a>
              {space})
              <br />
              &bull;{space}Progressively tax the progressive industry
              <br />
              &bull;{space}Deposits invested don't need to be bailed out like
              Ron Paul wants. GIVE ME A BIN.
              <hr />
              Why do banks cause a run by selling assets subpar to pay their
              employees instead of use transaction fees?
              <br />
              <span style={{ color: "orangered", opacity: 0.6 }}>
                Why is bankruptcy allowed to cause bank runs instead of
                codifying student and government debt while liens use realty
                foreclosure and shareholder loans from limited family
                testamentary partnership protect against corporate bonds?
              </span>
              <br />
              <span style={{ color: "grey" }}>
                Would a runoff or approval election assuage a strategic voter’s
                paranoia from voting sincerely yet also platform a generational
                plurality? Is a pair of approvals more genuine than any more
                than two?
              </span>
              {space}
              <span style={{ color: "cadetblue" }}>
                Does a general runoff or approval vote election solve strategic
                voting?{space}
                <i>
                  Are pair or explicit and approval vote elections disingenuous
                  while runoff elections game for insincere voters that expect
                  their bloc to be no different than before?
                </i>
              </span>
              <h4>
                Should buyers be allowed to dispose of their property
                intertemporally if they cannot plausibly use it themselves?
              </h4>
              Should government hike taxes on factors after surplus or public
              debt and contextually-codify private debts into non-recurring
              total interest payday loans after reducing liabilities to
              history’s current income modulo of intertemporal principal credit?{" "}
              {space}
              <span style={{ color: "chocolate" }}>
                Should government hike taxes on entertainment after a budget
                surplus or on outlaid industry factors after a recession to
                cover?
              </span>
              {space}Should foreclosures keep debt service interest or either
              provide an option to homeowners to refinance at the new lower
              price or return equity if at a higher price already? Do debt
              payments come from customers or third-party donee beneficiaries?
              {space}
              <span style={{ color: "darkviolet" }}>
                Should homeless trespassers be jailed in shelters until moving
                to work or have a computer lab and learn to code their way out?
              </span>
              {space}
              <span style={{ color: "forestgreen" }}>
                Should teenagers be compelled to go to school or work?
              </span>
              {space}Are adult children mentally ill or dependent because of
              compounding inflation? Should immigrants, children, and everyday
              customers or government and lending factors pay for debt
              inflation?
              <br />
              <br />
              <a href="https://occupywall.us">
                Is a security contagion bank runs or positive 2-10 rates?
              </a>
              {space}Can we have tax cuts following a year of deflation and
              surplus? Do banks fail because of wages or subpar asset sales and
              defaults? Can’t banks just pay employees by transaction fees
              instead?
              <h5 style={{ margin: "4px 0px" }}>
                vaults.biz/money - stop lending deposits
              </h5>
              <h4 style={{ margin: "4px 0px" }}>
                Libertarians haven’t liberated sh*t!
              </h4>
              <hr />
              <h5 style={{ margin: "4px 0px" }}>occupywall.us</h5>Are nonsale
              medical escrow advances or serviceable sutures materially
              beneficial public healthcare?
              <div style={{ fontSize: "12px" }}>
                I cannot deny what I do not know, but he is a Republican and
                they like to cover deflation. Should government tax during or
                following either a recession or tax cuts too far and remit such
                surplus due to the federal reserve until each service expense
                tract deflates? He also believes in virus zombie-human
                physiology genealogy and sunk my anti-vaxx case for bath
                sectional data and 1941–1946 but also obesity expectations:
              </div>
              Is FDIC, unemployment benefits, paycheck protection, or tort
              reform better?
              <br />
              Should government tax during or following either a recession or
              tax cuts too far and remit such surplus due to the federal reserve
              until each service expense tract deflates?
              <h3>It was expected. humanharvest.info</h3>To many like me, Rand
              Paul is an Udder-joke and an accomplice.
              <br />
              Face it you{space}
              <i>are</i>
              {space}racist. They only show mitosis "doctor", perhaps to cover.
              Aren’t virus physiology zombie brain (anyone who thinks like that
              is dangerous)? Vaccines or baths. But for protected classes.
              {space}
              <span style={{ color: "cornflowerblue" }}>
                Usual significant.
              </span>
              {space}Why would vaccines work for old people specifically?
              <div style={{ fontSize: "12px" }}>
                Are foreign direct exports or imports worth anything good for
                rich, developed, and expensive domestic countries otherwise?
                Does public healthcare need to use insurance instead of taxes
                because of illegal immigrants? Is that bureaucracy worth
                anything good?
              </div>
            </div>
            <TwitterTweetEmbed
              style={{
                overflowX: "auto"
              }}
              key="1634763631056375814"
              tweetId="1634763631056375814"
            />
            Pretty sure Iran wants risk free banking. Hijab is for
            {/*cucks; [P McD: "so many visions, so little time"] */ space}
            commie.dev/cukl(s). Can we cut taxes when we have deflation
            (saltbank.org)?
            <br />
            <span>
              Do not say material shrinkflation is good for people or else (bad
              advice).{space}
              <span style={{ color: "lightslategray" }}>
                Tax hikes (too far){space}
                <span style={{ color: "darkviolet" }}>or surplus</span>
                {space}make remittances to the treasury
              </span>
              {space}as tax cuts (too far)
              {space}
              <span style={{ color: "green" }}>or recessions</span>
              {space}make remittances to the federal reserve.
            </span>
            {
              //The only human right is that which to own. Land . Sad but pedo is consent thing.
              //Interior or salt bank money
              //terror warnings lmao it's NOT FUNNY
              //Our goal is NOT _, but it IS _
            }
            <h4>hike remit fed, cut remit payers</h4>
            Tax cut deflation in tract to service expenses.
            {space}
            <i style={{ fontSize: "12px" }}>
              Cop credit should cover recessions with a hike and if deflation
              then doubly cuts!{space}
              <b>if you want to end convenience yields.</b>
            </i>
            {space}
            <span style={{ fontSize: "14px" }}>
              Do you support tax hikes after recessions to cover deficits?
              {space}
              <b>
                Should government tax during or following either a recession or
                tax cuts too far and remit such surplus due to the federal
                reserve until each service expense tract deflates?
              </b>
            </span>
            <br />
            1. Reduce surrendered cash opportunities
            <br />
            <span style={{ fontSize: "12px" }}>
              (emulate debt service interest and collateral{space}
              <a href="https://www.quora.com/unanswered/Does-a-third-party-donee-beneficiary-have-valid-claims-over-homes-bought-with-someones-invoices-or-either-their-cash-or-nonsale-in-kind-advances">
                exchange
              </a>
              )
            </span>
            2. Industry-merchant degree-context payday
            <br />
            <span style={{ fontSize: "12px" }}>
              (concurrent industry accessable)
            </span>
            <span>
              3.{space}
              <a href="https://www.quora.com/unanswered/Does-the-NBER-care-about-safety-or-taxes-Whys-marginal-inflationary-unemployment-a-bigger-issue-in-setting-next-years-tax-rate-than-constitutional-reconciliation">
                Recessionary
              </a>
              {space}interim hikes
            </span>
            <span style={{ fontSize: "12px" }}>
              (constitutional Article{space}
              <a
                style={{ color: "forestgreen" }}
                href="https://www.quora.com/unanswered/Are-personal-corporate-and-lien-debt-illegal-if-just-tax-hikes-in-the-next-year-to-cover-annual-deficits-is-constitutional"
              >
                1 § 8
              </a>
              )
            </span>
            <h4>bankingisnot.biz - vau.money - marginalism.uk</h4>
            <div style={{ width: "300px" }}>
              If the gift tax on donor property excludes relieved debt, what's
              the point of deducting interest expenses?
              <br />
              <br />
              Why doesn't QE match a positive 10-2 curve?
              <h4>Duress perjury debt for functional tax falls</h4>
              flint was caused by defunding?
              <br />
              no demand all of the sudden
              <br />
              join wipo save our elderly and taiwan
              <h3>Dollar interior vote.</h3>
              (save the rainforest)
              <h2>
                <a href="https://2024nj.com/carducci">Tax Security, First!</a>
              </h2>
              <i>Close Temporal book.com.co substitutive fraud suit</i>
              {space}not name your price tool nor capital gains tax for
              entertainment and principal until value added sales tax.
              <br />
              <br />
              Why isn't a whole lot of people out of work considered
              materiality?{space}
              <i>
                Is Yellen asking the citizenry what to do about debt? Does debt
                cause war? Why does Janet Yellen discuss Russian debt when
                talking about the Ukrainian-Russian war?
              </i>
              {space}Does the government use debt instead of tax for last year's
              spending because a convenience yield is{space}
              <a href="https://vau.money/login">material</a>
              {space}or productive?
              <h3>
                <a href="https://vaults.biz/immi">stop birthright trumpers</a>
              </h3>
              Tripling checking was NOT constitutional (did your checkable
              deposits more than triple?); that is dollar vote for
              revenuedata.doi.gov.
              <br />
              <span style={{ fontSize: "12px" }}>
                Ability garners needs (no tax deals for{space}
                <a href="https://micro-theory.com">bezos</a>)
              </span>
              <br />
              <i>
                (
                <a href="https://www.reddit.com/r/occupywallstreet/comments/10xy1zq">
                  constitutional
                </a>
                ) For thetax.party falls{space}
                <span
                  onClick={() =>
                    this.setState({ openFind: !this.state.openFind })
                  }
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline"
                  }}
                >
                  alone
                </span>
              </i>
              <br />
              <br />
              <div
                style={{
                  backgroundColor: "darkolivegreen",
                  color: "linen",
                  transition: ".3s ease-in",
                  fontSize: this.state.openFind ? "" : "0px"
                }}
              >
                <a
                  style={{
                    color: "burlywood"
                  }}
                  onMouseEnter={(e) => {
                    this.setState({ viewBLM: !this.state.viewBLM }, () => {
                      clearTimeout(this.viewBLMtimeout);
                      this.viewBLMtimeout = setTimeout(() => {
                        this.setState({ viewBLM: false });
                      }, 5000);
                    });
                  }}
                  href="https://insurancebenefits.quora.com/How-does-the-anarchist-concept-of-mutual-aid-differ-from-other-models-of-social-assistance-1"
                >
                  Vote
                </a>
                {space}your age
                <br />
                {this.state.viewBLM && (
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "300px"
                    }}
                  >
                    Shouldn't we end blmanagement even though it{space}
                    <a
                      style={{
                        color: "burlywood"
                      }}
                      href="https://saverparty.quora.com/Was-the-small-black-business-community-helped-by-Donald-Trump-1"
                    >
                      makes a profit to save
                    </a>
                    {space}money?
                  </div>
                )}
                i said safe assets or stolen purchase after checkable deposit
                revenuedata.doi.gov vote and{space}
                <span
                  onClick={() =>
                    this.setState(
                      { openReverse: !this.state.openReverse },
                      () => {
                        let i = 0;
                        setInterval(this.waitReverse);
                        this.waitReverse = setInterval(() => {
                          i++;
                          if (i > 5) this.handleScroll();
                        }, 2000);
                      }
                    )
                  }
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  reverse
                </span>
                {space}total to cash liability
                <br />
                <br />
                Are tax exemptions for either paying interest and debt service
                or out-of-pocket deductible and copay expenses disincentives to
                use them?
                <br />
                <div
                  style={{
                    width: "300px",
                    transition: ".3s ease-in",
                    fontSize: this.state.openReverse ? "" : "0px"
                  }}
                >
                  <h3>
                    ​or universal taxes for plaintiffs; ​we aren't asking we are
                    looking to obstruct your maligned income. ​idk occupiers are
                    terrorist now
                  </h3>
                  every richer twice a poor, every income a cost.{space}
                  <a
                    style={{
                      color: "burlywood"
                    }}
                    href="https://youtu.be/Te6sIBuc150"
                  >
                    Is welfare an unemployment benefactor
                  </a>
                  ? ​continuing claims are Sid Nanda "​They don’t count
                  underemployment or people who have stopped looking for a job."
                  not
                  {space}
                  <a
                    style={{
                      color: "burlywood"
                    }}
                    href="https://vaults.biz/party"
                  >
                    employment ratio
                  </a>
                  . drug test discrimination and involuntary civil commitment
                  1968 gun control act reporting bias?
                  <br />
                  <br />
                  Is fighting for the right to own a war crime? -{space}
                  <b>Are risk-free or safe assets deadly?</b>
                  <br />
                  <br />
                  I say Occupy Wall St (Occupy Straight Edge) is self-defense.
                  That’s basically my worst.
                  <br />
                  <br />
                  <a
                    style={{
                      color: "burlywood"
                    }}
                    href="https://vau.money"
                  >
                    Tax Security First
                  </a>
                  <br />
                  <br />
                  <b>Reverse amortization:</b>
                  {space}payable income reversal to (annual cash to) liabilities
                  (ratio){space}
                </div>
                <br />
                <div style={{ width: "300px" }}>
                  No damn tariffs! Any loss happens from exclusion, to keep
                  income or to incentivize fdi (only if deflationary or
                  equalizing) and consumption.
                  <br />
                  <br />
                  perishable subsstitute prevention plausible.
                  <br />
                  <br />
                  Don’t republicans, democrats, and nonvoters want prevention
                  based government escrow but only the powerful want deficits?
                  <br />
                  <br />
                  Isn't legal slander admitted malfeasance?
                  <br />
                  <br />
                  Compulsory spying is no different in america, racist Newsmax.
                  expected of any private company.
                  <br />
                  <br />
                  MAGA made bank runs possible.
                  <br />
                  <br />
                  pucker up. if you are rich you can tell people to drop dead.
                </div>
                <br />
                They flee crime and corruption. We are all employees We could
                handle them without finance (otherwise real income is marginal
                and should deflate or retire with competition). I don't get it.
                tiktok private data? what is different. I will cap at 5 units
                per landlord.
                <br />
                <br />
                <div style={{ width: "300px" }}>
                  Although fireperson insurance isn't a game-made risk, doesn't
                  it serve to prevent falling reserves and sink potential
                  use-benefit of future demand? (elderly healthcare wisdom
                  shouldn't matter still because real income is marginal, and
                  poverty despondence is)
                  <br />
                  <br />
                  The "long run" amortizes debts to settled-potential while in
                  the short run third party donee beneficiary purchases are
                  stolen by contract.{space}
                  <i>Short term bets what the "long run" can’t handle.</i>
                  {space}Real income investment begs deflation, retirement, or
                  equalization, which would bear true short run variable labor
                  capital if that ever actually happened.{space}
                  <i>
                    True inflation is currency growth if base consumption is
                    survey subject to shrinkflation, time to outcome
                    “productivity”, or layoffs with stayed prices, instead of
                    per capita use to benefit utility of whole life products,
                    which would count real income growth as inflationary as
                    well.
                  </i>
                  <h4>
                    china U.S. pharma semiconductor; only 4/5 of the U.S. is
                    private property; Russia Ukraine deed agriculture
                  </h4>
                  I don't believe in the Russian-Ukrainian war; I want the
                  {space}
                  <a
                    style={{
                      color: "burlywood"
                    }}
                    href="https://marginalism.uk"
                  >
                    land their treasury owns
                  </a>
                  .
                  <br />
                  <br />
                  Immigration{space}
                  <a
                    style={{
                      color: "burlywood"
                    }}
                    href="https://virtualid.quora.com"
                  >
                    gateway
                  </a>
                  {space}implemented.
                  <br />
                  <br />
                  Perhaps banks shouldn’t{space}
                  <a
                    style={{
                      color: "burlywood"
                    }}
                    href="https://vau.money"
                  >
                    force
                  </a>
                  {space}investment.{space}
                  <i>
                    Do any Republicans, libertarians, democrats, or greens want
                    to embargo contracts and banking duress?
                  </i>
                  {space}Can an individual advertise their candidacy on
                  television without breaking campaign finance laws?{space}
                  <i>Are libertarians or communists, savers?</i>
                  {space}Is only allowing official political parties to raise
                  enough funds for television advertising fair?{space}
                  <i>
                    How does a political party under{space}
                    <a
                      style={{
                        color: "burlywood"
                      }}
                      href="https://adailyimpeachment.quora.com/Should-the-IRS-revoke-the-tax-exempt-status-of-churches-who-engage-in-political-campaigning-1"
                    >
                      52 U.S. Code § 30101(16)
                    </a>
                    {space}ever become official? Aren't these regulations to
                    become one by being one exclusionary in being written after
                    other parties have already been established?{space}
                    <b>
                      Why are political party committees allowed to raise more
                      funds from single donors than new parties? Isn’t that
                      exclusionary?
                    </b>
                  </i>
                  {space}How can individual candidates organize an advertisement
                  fund if affiliated candidate committees aren't allowed to say
                  "paid for by" their super PAC in campaign commercials? Does
                  another initial donor need to hire and fire?{space}
                  <a
                    style={{
                      color: "burlywood"
                    }}
                    href="https://monopolies.quora.com/Is-only-allowing-official-political-parties-to-raise-enough-funds-for-television-advertising-fair-1"
                  >
                    Why
                  </a>
                  ?
                  <br />
                  <br />
                  Newsmax thinks money is{space}
                  <a
                    style={{
                      color: "burlywood"
                    }}
                    href="https://humanharvest.info"
                  >
                    real
                  </a>
                  . I see workers.
                  {space}
                  <a
                    style={{
                      color: "burlywood"
                    }}
                    href="https://marginalism.uk"
                  >
                    Can you imprison someone like that?
                  </a>
                  {space}If you are happy and you know it, no meds.
                  <br />
                  <br />
                  <span style={{ color: "grey" }}>
                    Would a libertarian or saver refund payroll taxes when
                    he/she cuts social security and Medicare?
                  </span>
                  {space}Would amortizing a reversal of inflation work by
                  multiplying a person’s income and liabilities by that year’s
                  cash to debt ratio?
                  <h4>
                    Let people keep their income but for debt inflation, and let
                    producer payee disbursements keep their income but for
                    liability inflation.
                  </h4>
                  <span style={{ color: "indianred" }}>
                    Would final general payday loans after multiplying a
                    person’s income and liabilities by that year’s cash to debt
                    ratio amount to the same balances as returning debt services
                    and foreclosing?
                  </span>
                  {space}Shouldn't those who paid into social security and
                  medicare payments be returned disbursements except for its
                  proportion by that year's cash to debt and liability ratio?
                  <br />
                  <br />
                  Does a full reserve bank or federal reserve treasury
                  depositary charter have to hold{space}
                  <a
                    style={{
                      color: "burlywood"
                    }}
                    href="https://revenuedata.doi.gov"
                  >
                    currency
                  </a>
                  {space}in paper denominations?
                  <br />
                  <br />
                  Isn't there yet an ATM network that holds cash exclusively for
                  transaction fees?
                  <br />
                  <br />
                  Can a data signature ever remain unduplicated? For instance,
                  can't either the internet service provider mask and alter
                  static IP addresses or someone spoof their MAC/SID?
                </div>
                <br />
                {this.state.openReverse && (
                  <span>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ openAccrual: !this.state.openAccrual });
                      }}
                    >
                      de-bunking
                    </button>
                    {space}truancy and{space}
                    <a
                      style={{
                        color: "burlywood"
                      }}
                      href="https://2024nj.com/bachelors"
                    >
                      education
                    </a>
                    ,{space}
                    <a
                      style={{
                        color: "burlywood"
                      }}
                      href="https://realecon.quora.com"
                    >
                      really
                    </a>
                    .
                  </span>
                )}
                {this.state.openAccrual && <br />}
                <div
                  style={{
                    transition: ".3s ease-in",
                    backgroundColor: "lightgrey",
                    fontSize: !this.state.openAccrual && "0px",
                    width: "300px"
                  }}
                >
                  Would it be dangerous to allow people to not attend high
                  school?
                  {space}&bull;{space}
                  <i>Does the military do more than train?</i>
                  <br />
                  <br />
                  True inflation and real income to award entrepreneurs{space}
                  <i>by total consumption</i>
                  <br />
                  Business is just mutual leisure
                  <br />
                  depositary external
                </div>
                <br />
                <div style={{ width: "300px" }}>
                  <a
                    style={{
                      color: "burlywood"
                    }}
                    href="https://rolloverinsurance.quora.com"
                  >
                    inconsolable
                  </a>
                  {space}positive complements can{space}
                  <a
                    style={{
                      color: "burlywood"
                    }}
                    href="https://thumbprint.quora.com/Can-moderators-act-like-they-own-parts-of-the-public-domain"
                  >
                    be
                  </a>
                  {space}free
                  <h2>
                    <a
                      style={{
                        color: "burlywood"
                      }}
                      href="https://www.quora.com/Why-do-governments-hire-economists-if-they-cant-predict-anything-with-at-least-50-accuracy-according-to-most-people-not-me-though-How-do-they-help-the-government-in-anyway-if-everyone-thinks-they-dont-even/answer/Nick-Carducci"
                    >
                      implausible
                    </a>
                    {space}use{space}
                    <a
                      style={{
                        color: "burlywood"
                      }}
                      href="https://www.reddit.com/r/realeconomics/comments/zhy3r1/why_is_confidence_in_american_banks_at_27_in_2022/"
                    >
                      leases
                    </a>
                  </h2>
                  <span
                    style={{ color: "darkviolet", backgroundColor: "linen" }}
                  >
                    What is the right amount of inflationary marginal
                    unemployment? You're all a bunch of socialists. Progressive
                    isn't a deficit, but..
                  </span>
                  <br />
                  <br />
                  Can people evict their children during deflation?
                  <br />
                  <br />
                  don't hold your neighborhood back
                  <br />
                  <br />
                  {this.state.openReverse && (
                    <span>
                      <button
                        /*
                      moral laws for what I like, to prevent the interspective
                      */
                        onClick={(e) => {
                          e.preventDefault();
                          this.setState({
                            openOverhead: !this.state.openOverhead
                          });
                        }}
                      >
                        Is overhead,
                      </button>
                      {space}
                      <a href="https://micro-theory.com">profit</a>?
                    </span>
                  )}
                  {this.state.openOverhead && <br />}
                  <div
                    style={{
                      transition: ".3s ease-in",
                      backgroundColor: "lightgrey",
                      fontSize: !this.state.openOverhead && "0px",
                      width: "300px"
                    }}
                  >
                    Is marginal benefit from escrow or in real-time?
                    Microeconomist technologists won’t take more than they give
                    by fraud and third party donee beneficiary.
                    <h3>
                      Government should{space}
                      <a
                        style={{
                          color: "burlywood"
                        }}
                        href="https://islamicbanks.quora.com"
                      >
                        prevent
                      </a>
                      {space}harm (we lock down{space}
                      <i>if</i>
                      {space}humans make{space}
                      <a
                        style={{
                          color: "burlywood"
                        }}
                        href="https://bacterium.quora.com"
                      >
                        weapons
                      </a>
                      {space}
                      involuntarily) not enforce it!
                    </h3>
                    <div style={{ width: "300px", color: "chocolate" }}>
                      How can insurance be “low cost” when it contracts labor
                      with escrow overhead? Would you vote to ban sports
                      contracts beyond a season?
                      <h2>Anarchy == seasonal contracts</h2>
                      Aren’t armed services (13%) and income security benefits
                      (11%) bipartisan while SSA/Medicare, Republican? Aren’t
                      Medicaid (46%) and government pensions (7%) Democrat?
                      Shouldn’t broke entrepreneurs get r&d, science and
                      technology funds (33%) instead?
                    </div>
                    {this.state.openReverse && this.state.openOverhead && (
                      <a href="https://fred.stlouisfed.org/graph/?g=XlqS">
                        <Cable
                          style={{ width: "100%", maxWidth: "300px" }}
                          img="true"
                          onError={handleScollImgError}
                          src={
                            this.state.noyoutube
                              ? ""
                              : "https://www.dropbox.com/s/7czmfmt51nnyff1/Screen%20Shot%202022-12-08%20at%202.07.04%20PM.png?raw=1"
                          }
                          float={null}
                          title="commie.dev/banks vau.money vaults.biz/gdp"
                          scrolling={this.state.scrolling}
                          fwd={this["scrollImg" + scrollnum()]}
                          scrollTopAndHeight={
                            this.state.scrollTop + window.innerHeight
                          }
                          scrollTop={this.state.scrollTop}
                        />
                      </a>
                    )}
                    <h1 {...setting(0)}>
                      Saver{" "}
                      <a
                        style={{
                          color: "burlywood"
                        }}
                        href="https://www.reddit.com/r/saverparty/"
                      >
                        Party
                      </a>
                    </h1>
                    <div style={{ width: "300px" }}>
                      Insurance companies are labor contracts. They are
                      intractable Ponzi schemes, as opposed to multi-level
                      marketing{space}
                      <a
                        style={{
                          color: "burlywood"
                        }}
                        href="https://anchor.fm/micro-theory/episodes/Strategic-Voting-with-a-potential-network-effect-and-new-antifinance-alternative-e1qvulq"
                      >
                        I describe
                      </a>
                      {space}
                      them as multi-level capital). Negligence CAN be{space}
                      <a
                        style={{
                          color: "burlywood"
                        }}
                        href="https://generalmaintenanceunit.quora.com/"
                      >
                        held to desist
                      </a>
                      {space}without insurance. I am pro-permit (and
                      certification, yet not license but for “know your
                      customer”).
                    </div>
                  </div>
                </div>
                <br />
                <b>
                  <a
                    style={{ fontSize: "15px", fontWeight: "normal" }}
                    href="https://marx.quora.com/What-is-Marxs-definition-of-Utopia-1"
                  >
                    universal education
                  </a>
                </b>
                <div style={{ width: "300px" }}>
                  You're fired; with great power (crowding out,{space}
                  <a
                    style={{
                      color: "burlywood"
                    }}
                    href="https://beingstable.quora.com/What-would-happen-if-the-marginal-propensity-to-consume-was-increased-1"
                  >
                    anyone can make a train
                  </a>
                  ) comes great usufructuary, which is not to cover healthcare
                  expenses with{space}
                  <a
                    style={{
                      color: "burlywood"
                    }}
                    href="https://www.quora.com/What-are-some-real-world-examples-of-non-inferior-Giffen-goods-Do-they-exist-at-all/answer/Nick-Carducci"
                  >
                    labor contracts
                  </a>
                  .
                </div>
                <h4>
                  <a
                    style={{
                      color: "burlywood"
                    }}
                    href="https://truncatedwholesaletax.com"
                  >
                    truncatedwholesaletax
                  </a>
                </h4>
                <div
                  style={{
                    width: "300px",
                    transition: ".1s ease-out",
                    fontSize: this.state.openQuestions ? "" : "0px"
                  }}
                >
                  {this.state.openReverse && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.setState({
                          openQuestions: !this.state.openQuestions
                        });
                      }}
                    >
                      Questions
                    </button>
                  )}
                  Are the mentally ill criminals?{space}
                  <span style={{ color: "grey" }}>
                    Medical records are used by the police because criminals can
                    plead insanity.
                  </span>
                  {space}oh you need a comma? although I used because, the
                  latter allows the former class to be prosecuted as criminals
                  without crime. How isn’t old age social security an
                  intractable Ponzi scheme? Why are anti-finance people
                  involuntarily committed?
                  {space}
                  <span style={{ color: "grey" }}>
                    If you are injured and never had a job, you get{space}
                    <a
                      style={{
                        color: "burlywood"
                      }}
                      href="https://bureau.quora.com/What-is-the-relationship-between-social-welfare-and-economic-inequality-1"
                    >
                      supplemental
                    </a>
                    . If you are injured and had a job, you get{space}
                    <a
                      style={{
                        color: "burlywood"
                      }}
                      href="https://2024nj.com/disability"
                    >
                      SSDI
                    </a>
                    .{/*Simple math*/}
                  </span>{" "}
                  How many mentally ill on SSDI actually have an injury like my
                  lacerated leg?{space}Did people not vote for Hershel Walker in
                  the runoff because of Donald Trump?{space}How does one
                  anticipate their own position?{space}Why does turnout in
                  Georgia reflect the land instead of the people or an
                  electronic depositary fund account balance?
                </div>
                <h4 {...setting(1)}>
                  Bonds by{space}
                  <a
                    style={{
                      color: "burlywood"
                    }}
                    href="https://www.reddit.com/r/realeconomics/comments/wpet89/what_economic_theories_are_wrongincorrect"
                  >
                    private
                  </a>
                  {space}
                  <a
                    style={{
                      color: "burlywood"
                    }}
                    href="https://occupyrepublicans.quora.com/How-would-a-backing-of-gold-allow-the-amount-of-deficit-spending-Trump-did"
                  >
                    investors
                  </a>
                  {space}
                  also <a href="https://vaults.biz/party">inflate</a>
                </h4>
                {this.state.openReverse && (
                  <a href="https://fred.stlouisfed.org/graph/?g=UOG0">
                    <Cable
                      style={{ width: "100%", maxWidth: "300px" }}
                      img="true"
                      onError={handleScollImgError}
                      src={
                        this.state.noyoutube
                          ? ""
                          : "https://www.dropbox.com/s/7v0g480c8nfy862/Screen%20Shot%202022-10-09%20at%2012.53.52%20PM.png?raw=1"
                      }
                      float={null}
                      title="vaults.biz/party, thetax.party, truncatedwholesaletax.com"
                      scrolling={this.state.scrolling}
                      fwd={this["scrollImg" + scrollnum()]}
                      scrollTopAndHeight={
                        this.state.scrollTop + window.innerHeight
                      }
                      scrollTop={this.state.scrollTop}
                    />
                  </a>
                )}
                {this.state.openReverse && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({
                        moreInfo: !this.state.moreInfo
                      });
                    }}
                  >
                    {this.state.moreInfo ? "less" : "more"}
                  </button>
                )}
                <div
                  style={{
                    width: "100%",
                    maxWidth: "300px",
                    fontSize: this.state.moreInfo ? "14px" : "0px",
                    padding: "6px"
                  }}
                >
                  <span>
                    Why is{space}
                    <a
                      style={{
                        color: "black"
                      }}
                      href="https://saverparty.quora.com/Isnt-American-oil-expensive-because-of-labor"
                    >
                      higher wages
                    </a>
                    {space}
                    as inflation{space}
                    <a
                      style={{
                        color: "black"
                      }}
                      href="https://vaults.biz"
                    >
                      political cushion
                    </a>
                    ? Now that{space}
                    <a
                      style={{
                        color: "black"
                      }}
                      href="https://fredaccount.stlouisfed.org/dashboard/83986"
                    >
                      we work
                    </a>
                    {space}
                    and{space}
                    <a
                      style={{
                        color: "black"
                      }}
                      href="https://beingstable.quora.com/Wouldn-t-lending-have-to-stop-completely-to-ever-make-the-paying-down-of-all-public-and-private-debt-at-all-possible-wit"
                    >
                      spend
                    </a>
                    {space}
                    more than{space}
                    <a
                      style={{
                        color: "black"
                      }}
                      href="https://humanharvest.info"
                    >
                      ever
                    </a>
                    , do economists think they are still{space}
                    <a
                      style={{
                        color: "black"
                      }}
                      href="https://insurancebenefits.quora.com/How-would-Florida-residents-save-money-and-or-profit-with-hurricane-insurance-if-they-all-share-the-risk"
                    >
                      productive
                    </a>
                    ?{space}
                    <span
                      style={{
                        transition: ".3s ease-in",
                        fontSize: this.state.openReverse ? "0px" : ""
                      }}
                    >
                      <span style={{ fontSize: "11px" }}>
                        Doesn't the CPI survey miss{space}
                        <a href="https://commie.dev">shrinkflation</a>?
                      </span>
                      {space}
                      <i style={{ fontSize: "12px" }}>
                        Isn’t a recession always in long-term employment but for
                        technical short-term inefficiencies?
                      </i>
                    </span>
                  </span>
                </div>
                <div
                  style={{
                    width: "min-content",
                    minWidth: "180px",
                    color: "white",
                    backgroundColor: "rgba(20,20,20,.6)",
                    fontSize: this.state.moreInfo ? "14px" : "0px",
                    padding: "6px"
                  }}
                >
                  {/*redacted after announced (curious)
                    <br />
                    <br />
                    deviant credit{space}
                    <a href="https://commie.dev" style={{ color: "white" }}>
                      is not
                    </a>{space}
                    output exchanged price.
                  <br />*/}
                  <span
                    style={{
                      fontSize: this.state.moreInfo ? "12px" : "0px"
                    }}
                  >
                    Crime related to deficit spending
                    <br />
                    <a
                      style={{
                        color: "white"
                      }}
                      href="https://targetmarginnetworks.quora.com"
                    >
                      Utilies
                    </a>
                    {space}
                    <a
                      style={{
                        color: "white"
                      }}
                      href="https://generalmaintenanceunit.quora.com"
                    >
                      management
                    </a>
                    {space}
                    <a
                      style={{
                        color: "white"
                      }}
                      href="https://courttechnology.quora.com"
                    >
                      experience
                    </a>
                    <br />
                    <a
                      style={{
                        color: "white"
                      }}
                      href="https://saltbank.org"
                    >
                      Right to own[ership]
                    </a>
                    {space}
                    and{space}
                    <a
                      style={{
                        color: "white"
                      }}
                      href="https://thetaxparty.com"
                    >
                      liberty
                    </a>
                  </span>
                  <br />
                  Docket,{space}
                  <a
                    href="https://leisuretoprefer.com"
                    style={{ color: "white" }}
                  >
                    desist
                  </a>
                  , spoof geohash (
                  <a href="https://saltbank.org" style={{ color: "white" }}>
                    protest
                  </a>
                  )
                  <br />
                  <br />
                  <span style={{ color: "linen" }}>
                    <span style={{ color: "lightsteelblue" }}>
                      Is Amendment 14.4 an abrogation of Article 3.3?
                      <br />
                      <i>
                        Article 1.8 states a common defense and general welfare
                      </i>
                    </span>
                    {space}
                    <i style={{ color: "silver" }}>
                      (and to borrow money on the credit of the United States,
                      which makes no mention on who is to invest).
                    </i>
                    <br />
                    Although all "Duties, Imposts and Excises shall be{space}
                    <a
                      style={{ color: "linen" }}
                      href="https://islamicbanks.quora.com/If-marriage-is-dissolved-upon-chastity-in-U-S-justice-system-why-isnt-paydayt-legal-If-suitable-compensation-for-div"
                    >
                      uniform
                    </a>
                    {space}
                    throughout the United States"{space}
                    <span style={{ color: "darkseagreen" }}>
                      does not mention debt, defense nor welfare{space}
                      <span style={{ color: "lightgrey" }}>
                        [
                        <a
                          style={{ color: "lightgrey" }}
                          href="https://kondratiev.quora.com/Is-in-person-instruction-better-than-online-because-of-body-language-or-a-need-to-speak-with-hand-motions-If-the-teache"
                        >
                          over such 'uniform' terms
                        </a>
                        ]
                      </span>
                      , <i>so such an implied matter is uniformity</i> for
                      expensing
                      <span style={{ color: "lightgrey" }}>
                        [-receipts]
                      </span>{" "}
                      but not in the commercial{space}
                      <a
                        style={{ color: "darkseagreen" }}
                        href="https://microtheory.quora.com/Doesn-t-price-being-cardinal-imply-that-the-intercept-can-be-negative"
                      >
                        supposition
                      </a>
                      {space}
                      <span style={{ color: "lightgrey" }}>
                        [as to imply welfare is inherently not uniform]
                      </span>
                      .
                    </span>
                    <br />
                    <i
                      style={{
                        fontSize: this.state.moreInfo ? "12px" : "0px"
                      }}
                    >
                      So, not only will I say Article 1.8 abrogates itself, but
                      {space}
                      <a
                        style={{ color: "linen" }}
                        href="https://federalreserve.quora.com/Wouldnt-the-Federal-Reserve-be-unable-to-reverse-split-checkable-deposits-into-the-balance-good-will-value-Isnt-the-F"
                      >
                        [yes]
                      </a>
                      {space}
                      amendment 14.4 amends the{space}
                      <a
                        style={{ color: "linen" }}
                        href="https://occupywallst.quora.com/If-the-top-3m-wealthiest-in-America-have-14m-in-assets-and-300k-in-cash-why-are-financial-markets-such-the-news-in-mo"
                      >
                        faith and credit
                      </a>
                      {space}
                      of the United States as if it were in question{space}
                      <a
                        style={{ color: "linen" }}
                        href="https://secretary.quora.com/Don-t-you-feel-Bill-Mahr-asking-about-a-Ukrainian-tax-deal-instead-of-duty-free-international-trade-for-Russia-is-weird"
                      >
                        constitutionally
                      </a>
                      {space}
                      <span style={{ color: "lightgrey" }}>
                        [over what else but the terms of such a{space}
                        <a
                          style={{ color: "linen" }}
                          href="https://courttechnology.quora.com/What-are-the-steps-to-remove-a-President-who-is-unfit-for-duty-due-to-mental-illness-1"
                        >
                          foreign
                        </a>
                        -
                        <a
                          style={{ color: "linen" }}
                          href="https://froth.quora.com/Other-than-political-and-banking-issues-why-do-market-industry-sectors-move-together-in-prices"
                        >
                          investor
                        </a>
                        {space}
                        question]
                      </span>
                      .
                    </i>
                  </span>
                  <div
                    style={{
                      backgroundColor: "rgba(100,160,255,.5)"
                    }}
                  >
                    <a href="https://commie.dev" style={{ color: "white" }}>
                      Why is economic growth favored to saving?
                    </a>
                  </div>
                </div>
              </div>
              {!this.state.openReverse && this.props.lastWidth && (
                <Government
                  lastWidth={Math.min(300, this.props.lastWidth - 20)}
                />
              )}
              <h2
                style={{
                  fontSize: !this.state.openReverse ? "20px" : "0px",
                  transition: ".3s eaase-in"
                }}
              >
                &bull;{space}Troll farm (malware & spyware phishing;{space}
                <a href="https://thumbprint.us">anti-confidential computing</a>
                {space}red-herring) buy many a phone number, gsa fault still (
                <span
                  style={{
                    color: "burlywood"
                  }}
                >
                  <a
                    style={{
                      color: "burlywood"
                    }}
                    href="https://generalmaintenanceunit.quor.com"
                  >
                    there is virtue in courts handling censorship cases not FBI
                  </a>
                  ; I speak with hobbyists without interest present nor future.
                  Abusing network effects
                </span>
                ).
                <br />
                <br />
                &bull;{space}Stakeholder voting is by default reconciled for
                past budgets and only enters debt prior to deflation of
                government contractors' living costs (which should be
                immediate).
                <br />
                <br />
                &bull;{space}Court technology is pro rated, why not duct
                variably (fixed off market outright durable). Put parachutes on
                duty!
                <br />
                <br />
                &bull;{space}
                <i>​1/3 don't vote because everyone likes debt, Mr. LaTurner</i>
                {space}(AOC was only good on Amazon)
              </h2>
              <h4
                {...setting(3, {
                  margin: "0"
                })}
              >
                <a href="https://courttechnology.quora.com/Is-Amendment-14-4-an-abrogation-of-Article-3-3-1">
                  Save
                </a>
                {space}
                the{space}
                <a href="https://www.quora.com/Why-is-there-an-FDA-USPTO-or-NIH-when-we-can-name-and-open-source-without-prescription-costs">
                  rats
                </a>
                {space}
                &bull;{space}
                <a href="https://www.quora.com/Should-all-military-operations-other-than-non-violent-reconnaissance-missions-be-made-available-for-public-review-after-two-weeks-of-execution">
                  <span role="img" aria-label="rat">
                    🐀
                  </span>
                </a>
                {space}
                &bull;{space}
                <a href="https://www.quora.com/unanswered/Why-arent-whistleblowers-allowed-on-the-jury">
                  <span role="img" aria-label="chipmunk">
                    🐿
                  </span>
                </a>
              </h4>
              <h4 {...setting(3)}>
                <a href="https://www.quora.com/unanswered/Do-lower-prescription-drugs-come-by-price-controls-on-copay">
                  Price
                </a>
                {space}
                control prem
                <br />
                <br />
                Actually it’s 36% (
                <a href="https://www.pewresearch.org/fact-tank/2020/09/29/increasing-share-of-americans-favor-a-single-government-program-to-provide-health-care-coverage/">
                  Increasing share of Americans favor a single government
                  program to provide health care coverage
                </a>
                ,{space}
                <a href="https://www.pewresearch.org/fact-tank/2018/10/03/most-continue-to-say-ensuring-health-care-coverage-is-governments-responsibility/">
                  60% in US say health care coverage is government’s
                  responsibility
                </a>
                , used to be 31%). The rest are for private partnership,
                private, or no contracts, but many of us that vote universal
                healthcare would take that over the insurance companies.
              </h4>
              {this.state.openReverse && (
                <Cable
                  style={{ width: "100%", maxWidth: "300px" }}
                  img="true"
                  onError={handleScollImgError}
                  src={
                    this.state.noyoutube
                      ? ""
                      : "https://www.dropbox.com/s/i4n49rvipyd21jx/Screen%20Shot%202022-11-12%20at%2012.38.47%20PM.png?raw=1"
                  }
                  float={null}
                  title="ASP 50, 200 market concentration unpoverty generally inequality, VX_F, NZD/USD"
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + scrollnum()]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
              )}
              <br />
              <br />
            </div>
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            //alignSelf: "start",baby step debt ceiling, then paid of  aces
            bottom: "3px",
            right: "5px"
          }}
        >
          5 per landlord
          <br />
          no <a href="https://realvelocity.asia">capitalization</a>
          <br />
          no contracts
        </div>
      </div>
    );
  }
}

export default AApp;
