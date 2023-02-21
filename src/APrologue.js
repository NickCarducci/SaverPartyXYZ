import React from "react";
import TwitterTweetEmbed from "./TwitterTweetEmbed";
import Cable from "./Dropwire";
import Dies from "./dies";
import Epiology from "./epiology";
import Polio from "./polio";
import Lifetimes from "./lifetimes";
import TestingCases from "./testingcases";
import Vaxx from "./vaxx";
import AProduction from "./AProduction";
class APrologue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    for (let i = 0; i < 350; i++) {
      this["scrollImg" + i] = React.createRef();
    }
  }
  render() {
    const { width } = this.props;
    const buttonstyle = {
      border: "1px solid black",
      color: "black",
      backgroundColor: "rgb(220,220,220)",
      borderRadius: "15px",
      padding: "15px",
      margin: "10px"
    };
    let arrayOfnumbers = [0];
    const scrollnum = () => {
      const num = arrayOfnumbers[arrayOfnumbers.length - 1] + 1;
      arrayOfnumbers.push(num);
      return num;
    };
    const handleScollImgError = (e) => {
      if (e) {
        this.setState({ settleDropboxFree: true });
      }
    };
    const space = " ";
    return (
      <div
        style={{
          backgroundColor: "rgb(205,205,205)",
          fontFamily: "'Nunito', sans-serif",
          overflow: "hidden",
          //height: !this.state.journal ? "0px" : "",
          //position: !this.state.journal ? "fixed" : "relative",
          width: "100%",

          textAlign: "center"
        }}
      >
        <div
          style={{
            width: "calc(100% - 50px)",
            zIndex: 3,
            position: "absolute"
          }}
        >
          <a
            href="https://squatcommune.com"
            style={{
              textDecoration: "none",
              right: "170px",

              fontWeight: "bolder",
              position: "fixed",
              fontSize: "8px"
            }}
          >
            Gift cards (FTC)
          </a>
          <a
            href="https://billbiden.org"
            style={{
              textDecoration: "none",
              right: "90px",

              fontWeight: "bolder",
              position: "fixed",
              fontSize: "8px"
            }}
          >
            Class Action Suit
          </a>
          <a
            href="https://micro-theory.com"
            style={{
              textDecoration: "none",
              right: "40px",

              fontWeight: "bolder",
              position: "fixed",
              fontSize: "8px"
            }}
          >
            Vain & co.
          </a>
          <div
            style={{
              transform: "rotate(90deg)",
              backgroundColor: "rgb(205,205,205)",
              position: "fixed",
              width: "40px",
              display:
                this.state.landedPresentation && this.state.openMenu
                  ? "block"
                  : "none",
              left: "0px",
              top: "0px"
            }}
          >
            <div
              onClick={() => this.setState({ openMenu: false })}
              style={{
                transform: "scale(-1,-1)",
                position: "relative",
                float: "left",
                textAlign: "left",
                padding: "4px 10px",
                maxHeight: "40px",
                height: "40px",
                color: "black",
                border: "2px blue solid",
                width: "max-content",
                transition: ".3s ease-out"
              }}
            >
              {this.props.inSection /*.split(" ").map((x) => `${x}\n`)*/}
            </div>
          </div>
          <div
            onClick={() =>
              this.setState({
                openMenu: !this.state.openMenu,
                offScroll: !this.state.offScroll
              })
            }
            style={{
              color: "rgb(200,200,200)",
              width:
                !this.props.top && this.props.scrolling
                  ? "min-content"
                  : "max-content",
              fontSize: "9px",
              position: "fixed",
              padding: "4px 10px",
              height:
                this.props.inSection !== "story" && this.state.openMenu
                  ? "min-content"
                  : this.props.top || !this.props.scrolling
                  ? "56px"
                  : "60px",
              right: "0px",
              top: "0px",
              backgroundColor: `rgba(5,5,5,${this.props.top ? 0.5 : 1})`
            }}
          >
            <span
              style={{
                textAlign: "center",
                width: this.state.openMenu
                  ? ""
                  : !this.props.top && this.props.scrolling
                  ? "min-content"
                  : "max-content",
                transition: ".3s ease-out"
              }}
            >
              EXPLICIT
            </span>
            <span
              aria-label="skull & bones"
              role="img"
              style={{
                padding: "4px",
                display: this.state.openMenu ? "none" : "flex",
                opacity: this.props.top ? 0 : 1,
                transition: ".3s ease-out"
              }}
            >
              ☠️
            </span>
            {!this.state.openMenu &&
              this.props.inSection
                .replace("-", " ")
                .split(" ")
                .map((x) => (
                  <span
                    key={x}
                    style={{ width: "max-content", position: "relative" }}
                  >
                    {x.length < 5 ? x : x.substring(0, 5)}
                  </span>
                ))}
            {[
              "New",
              "Rentier-Colonialism",
              "Abuse of Power",
              "War on Poverty",
              "Gun Safety",
              "False Advert in House",
              "Polling Fraud",
              "Immigration",
              "Ownership Fraud",
              "False Advert in Senate",
              "Insurance Fraud",
              "Virus",
              "Monopoly",
              "Education",
              "Null Hypothesis",
              "Securities Fraud",
              "Systemic Inequality",
              "Mission",
              "Early Comms",
              "Illegal Gov Decrees",
              "close"
            ].map((x) => (
              <div
                key={x}
                style={{
                  position: "relative",
                  color: this.props.inSection === x ? "rgb(255,250,235)" : "",
                  opacity:
                    this.props.inSection !== "story" && this.state.openMenu
                      ? 1
                      : 0,
                  transition: ".3s ease-in",
                  margin: "2px"
                }}
              >
                {x !== "close" ? (
                  <span
                    style={{
                      width: this.state.openMenu
                        ? ""
                        : !this.props.top && this.props.scrolling
                        ? "min-content"
                        : "",
                      transition: ".3s ease-in",
                      fontSize:
                        this.props.inSection !== "story" && this.state.openMenu
                          ? this.props.inSection === x
                            ? "20px"
                            : "12px"
                          : "0px"
                    }}
                  >
                    {x}
                  </span>
                ) : (
                  <span
                    style={{
                      fontSize: "20px"
                    }}
                  >
                    &times;
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
        <a
          style={{
            shapeOutside: "rect()",
            float: "left",
            width: "max-content",
            padding: "0px 10px",
            fontSize: "20px",
            fontFamily: "'Pacifico', sans-serif",
            color: "rgb(230,230,255)",
            backgroundColor: "rgb(32, 22, 11)"
          }}
          href="https://carducci.us"
        >
          carducci.us
        </a>
        <a
          style={{
            shapeOutside: "rect()",
            float: "left",
            width: "max-content",
            padding: "0px 10px",
            fontSize: "20px",
            fontFamily: "'Pacifico', sans-serif",
            color: "rgb(230,230,255)",
            backgroundColor: "rgb(32, 22, 11)"
          }}
          href="https://3under2.us"
        >
          3under2.us
        </a>
        <a
          style={{
            shapeOutside: "rect()",
            float: "left",
            width: "max-content",
            padding: "0px 10px",
            fontSize: "20px",
            fontFamily: "'Pacifico', sans-serif",
            color: "rgb(230,230,255)",
            backgroundColor: "rgb(32, 22, 11)"
          }}
          href="https://truncatedsalestax.com"
        >
          truncatedsalestax.com
        </a>
        <div>
          elasticity in the same market.
          <br />
          voters are not identical coins;{/* Cnn jason sekerovic*/}
          <br />
          poor=pov/social.
          <br />
          38% detest & eligible voters, occupy never represented reverse
          debt:cash, cancel forbidden by past demand and bailout by labor,
          <br />
          voluntary more random than random, 1/11 down payment to gdp.
          <br />
          Public park rangers 20% fed lands. wrong answer to pass,
          <br />
          epiologial cohort size, not age-standardized excess deaths
          <br />
          600k/200k jobs/pop-growth a month is the opposite of productivity (of
          hours).
        </div>
        1/3 public/private gentrification beyond article 4
        receipt-method/outlay-scope and free rider immutable reason, bipartisans
        collude rcv 50% over plural majority, if not simple
        <br />
        get bankers out of home contractor,&nbsp;
        <a href="https://teapharmacy.party/drugs">cops out of pharma</a>, and
        insurers out of surgery. don't give me that free market crock, we assume
        infinite producers to find perfect equillibrium of non-laborless-demand.
        <br />
        <br />
        Productivity is price deflation per hour. In no way is deflation to fair
        value, bad, nor is pure technological advancement price deflation.
        <br />
        <br />
        "fever is leading sign of covid (but that is 5% of pneumonia, influenza
        covid)," exogen
        <br />
        <br />
        "If you kept money in a savings account, that would be a foolish place
        to keep it. Interest rates on bank accounts are far lower than the
        return you can make by investing it wisely." What is we change economic
        policy? Downvote
        <br />
        <br />
        “To be red-pilled is to ask: 'am I better to get the virion, than the
        vaccine?'” - Carl Higbie
        <br />
        Save facers like the null hypothesis
        <br />
        <br />
        <Cable
          style={{
            width: "100%"
          }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1Wh2pEDuxdSm-2Rwvr5B30QJTEYigPg3l/preview"
          }
          float="left"
          title="National Report (Newsmax) - NM Mike Murphy / Besty Mc."
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “We have a republican form of government, where we have
        representatives,” but not insofar that they can infringe upon natural
        human rights, said in Tranquil society and voluntary trade.
        <br />
        <br />
        "Because we are vaccinated, there will no longer be a pandemic."
        <h2>Excess deaths 500k</h2>
        <Cable
          style={{
            width: "100%"
          }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1SzQo5COx6e1jTHJChY-nD9hWw5vDcgtu/preview"
          }
          float="left"
          title="National Report (Newsmax) - Dr. Sophia Deben, Surgeon in Miami, terrorist"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        We haven’t seen this high of a death rate over our lifetimes, because
        now there are a lot of old age deaths! WWII lull in baby-making and
        immigrant baby-making fills in the 2010-2020 excess deaths level,
        boomers called boomers because year over year change is 1.2m/yr+
        2020-2030 80+
        <br />
        <br />
        "It would inconveniece quite a few people." I don't want excess
        antibodies nor fetal cell lines, this duress without jury-science is not
        inconvenient. Exhibit virion injecting DNA into cell.
        <br />
        <br />
        Rich as defined by items that are of utility to others or good will
        value of last trade is not necessarily of utility to you. Most if not
        all wealth today is relative. You cannot make everyone rich, but you can
        by making everyone more equal, based on labor-based-demand, not
        rental-income. This would produce productivity that makes life easier,
        making everyone rich in that sense.
        <br />
        Tech advancement is going backwards. We work 10x more than the boomer
        generation did today (10x hours per average-home-sold, c1970).&nbsp;
        <a href="https://nationalsecuritycasino.com/gdp">GDP/p 1800–1913</a>
        &nbsp; was oscillating from the repo-cycle but not exponentially rising.
        Finance is the isolated reason, therefore, that price deflation per hour
        over time lowers, by lender, landlord, insurer work deficit, not
        population/unscarcity. Economists would easily arrive at this conclusion
        if they had homes, equities, bonds and intermediate-labor in inflation,
        gini and poverty.
        <br />
        <br />
        <Cable
          style={{
            width: "100%"
          }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1eSuR04qtn_yuvryCZbvpmooqJRZ_Xctc/preview"
          }
          float="right"
          title="National Report (Newsmax) - Joe Gamali National VP Fraternal Order of Police"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “Bail reform has been an unmitigated disaster everywhere it has been
        tried.”
        <br />
        If you have no evidence from the arresting officer, no bail nor jail.
        Also, white collar crime justice is malfeasant, I will have to take the
        law into my own hands.
        <br />
        "Fund them properly," not bonded net loss but truncated sales tax by
        those arrested, while customers.
        <br />
        <br />
        There is no such thing as a medical authority, why are PCR tests a uspto
        issue? Has nothing to do with brought forward demand by free rider
        mutable tax that is pure inflation. Why do tests need to be produced by
        a website? Just take the risk as a private investor like the rest of us.
        Stop the r&d monopsony trust-building. "Acknowledged the pain that they
        are feeling," for asymptomatic tests? Population life expectancy ago
        grew by 1.2 million people, holy shit. 500 thousand in U.S. and 5
        million worldwide is insignificant jeff zelani, stop terrorizing. You
        are a destabilizing force, a national security threat.
        <br />
        “The whole world no one saw it coming,” 2015 Census Bureau projected
        this “pandemic.”
        <br />
        Deadly virus only comes out, it’s prevalence 5% of symptomatic cases is
        not all-cause, “injecting DNA in an instant,” is made up.
        <br />
        <br />
        Delta is bacterial byproduct, it didn’t kill anyone. Injective dna into
        cell is made up.
        <br />
        All you have to do is (cash/debt)*income every year back… what do you
        mean never recover financially less people. That doesn’t matter,
        labor-competition is perfectly elastic.
        <br />
        <br />
        Cash bond war arms
        <br />
        If bonds fund the MIC, beyond Article 4 scope, isn’t that a war crime?
        <br />
        war bonds are cheating at war, no one wants to pay without your
        counterfeit, Savers only can fight with their bare hands and trde their
        earnings. Bond index funds, gentrification free rider mutable tax is
        pure inflation, can spend our share split!
        <br />
        <br />
        Beth Van Duyne with Rob Schmitt: "Finish the wall after money had
        already been allocated for it," no article 4 is tax only, so truncated
        sales tax after.
        <h2>
          Bond index funds would take up arms to stop cash v bonds over parks;
          Only way out is (cash/debt)*income every year back is middle ground
        </h2>
        Good teachers invest in kids’ 1-level-board max-profit-royalty, not
        payday loans general income nor compounding interest of third party
        donee surrendered freedom (EULA)
        <br />
        <br />
        You aren’t counting all cases, just non-exclusive byproduct. Stop
        trusting dr saveface. testing asymptomatic 5% of all-prevalence is
        retarded dr schafner and smerconish. ms matches paralytic polio and
        sewage lifetime portality is correlated since 1775. YOU DID NOTHING
        EXCEPT FRAUD, you literally made up, "virion injecting DNA in cell."
        what makes it not eligible to all, with side-effects nor ingredient
        list, for what? People have a right to try WITH INGREDIENT LIST without
        doctor cop script release prohibiting trade and causing poverty. Shove
        the nobel prize up your ass. Severity as difference between bacterial
        and viral is not a different method, so it cannot be multiple exclusive
        cause, let alone all-prevalence by byproduct. Evolution goes from
        bacteria={">"}cell={">"}virion, never has the virion infected a cell: it
        only comes out. Antibodies stop cell debris from blood clotting, and you
        are only counting 5% of actual all-cause cases.
        <br />
        <br />
        Good doctors with great training, following eachother
        <br />
        Nutrients that prevent covid from taking over the human body, how have
        we survived all these years? I used common sense. Ms is paralytic polio
        and lifetime mortality is lessening from sewage and nutrition since 1775
        <h2>
          Grades attendance stat actually learning subjects, like GDP and
          prices*hours is productivity. FUCK OFF; "Take your pills," Ablest is
          ok; need a xanax doc, I'm long - put the pfizer in the water - jail
          profits when bonds not consumers before arrest truncated sales tax
          2025 against menendez 10x more work and 20x/millennial rental-income,
          1.2m/yr+, 55m/yr+ boomers WORLDWIDE work so much! People that follow
          "unamortized savings," by verifiably-all-cause (not-just-prevalence)
          inflation is not population as gdp/p nearly constant ocillation
          1800-1913, but finance. Levin Oreilly and Valdes are basket-cases, and
          need to be locked up for competing with consumers. THEY ARE RETARDED.
          TO SAY DISABLED ARE SELF HARMERS IS RETARDED, ETYMOLOGICALLY, LEGALLY
          and PRODUCTIVELY.I WILL NOT SIGN FOR NON COMPETE NOR
          CREDIT/EXPIRY/ESTIMATE AS INCOME!
        </h2>
        Jack sesh.show (Katie Halper,Youtube) - "It is not that insulin doesn't
        work, it is that they are profiting unfairly that makes it not
        work."&nbsp;
        <a href="https://humanharvest.info">Healthcare Banking</a>
        <br />
        <br />
        JustTheNews.com: "'Yeah, politicians should be able to make money
        handsomely,' lifelong public service somehow make multimillion gains,"
        by 20 years to double homes but that NOT included in poverty metrics. OR
        YOU CAN FORCE ABSTAIN ANY HOLDINGS financial disclosure form disparity
        of uuid anon over pattern day trading competing with consumers, as well
        as 2 week execution public discovery release.
        <br />
        <br />
        Nationalizing & rent-seeking prek is not socialist. watching eachothers
        kids to increase hours worked is not&nbsp;
        <a href="https://bankingisnot.biz">per hour price deflation</a>
        &nbsp;productive.
        <br />
        <br />
        “Universal pre k, goes to climate, help 300k kids and can slip into
        poverty if those payments towards bills, dry up,” reverse don’t cancel
        nor bailout, Democrat pig. JustTheNews.com: “Cooler heads will prevail,
        and they will make a deal.”
        <br />
        Hold dems responsible for what they elected, to achieving the impossible
        to get things done, thru reconciliation, not a rift, but a rapture
        against not increasing the deficit beyond 40% debt spending, if we
        itemize some parts and don’t include others, like we get away with in
        treasury share accounting.
        <br />
        <br />
        Katie Halper: “What is Elizabeth Warren saying? Where has she been.”
        Matt Bruenig: “I think she was talking about the debt, let’s see what
        she is Tweetingggahh.” Third Guy (Jack sesh.show): “Well, they were
        looking at restarting the debt.&nbsp;
        <span role="img" aria-label="smirk">
          😏
        </span>
        ”
        <br />
        “Her feed is '[Expand the courts, student debt, pass build back
        better],' that’s pretty much it.” Matt Bruenig
        <br />
        <br />
        Faux conservatives: "if you subsidize childcare, you get more of it.
        Worked hard to save your whole life in bond value." That is made up
        shit. If you put up dollar v bonds in court over parks, who the fuck do
        you think wins? "Fix some roads and bridges," why can't you use electric
        tolls retard? Collateralized gets serviced, uncollateralized gets bailed
        out or kept down payments impossibly implausibly deniable. "More than
        700k americans dead because of covid." They died ON TIME! fucking idiot.
        “Wall st has no confidence in Biden, when BBB isn’t funded, stocks go
        down. I don't think anyone is in charge of the government, I don't think
        anyone is in charge of the company.”
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1maCIn-XcjVOGRl8NGhtMP3fbaK-AJdW6/preview"
          }
          float="right"
          title="National Report (Newsmax) - Daniel Linville on Manchin and debt"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        Everyone wants to cancel debt, but no one wants to cancel the national
        debt. Roads are free rider mutable, but why does expats need 40% debt
        service?
        <h1>
          Bill O'Reilly: "nationalism is socialism" takes away urge to work, we
          work 10x more than you did!
          <br />
          <span style={{ fontSize: "18px" }}>
            bernie sanders isnt socialist, he wants to nationalize bridge tolls
            and broadband network fees. he doesn't want to stand up to insurance
            companies. he wants to trust build
          </span>
        </h1>
        Rich Zeoli, of Mark Levin ilk: “Machin could have destroyed interests of
        WV,” like it is ever to a precincts benefit to go against another
        human’s, comparative advantage tech advantage is retarded if you enslave
        others, isn’t it not matter if it really is damaging? Scientific jury is
        not mob-rule, it is consensus. So no candidate, no vote means default,
        “no.” "The virus likes to keep its host alive," but where does the first
        one come from, are you a Creationist?
        <br />
        <br />
        Put a virion in front of an industry variable multiple of 11/12 without
        any Dr. Savefaces & they'll conclude it is non-exclusive byproduct of a
        bacterial infection/not the killer prevalent cause. Vaccines are just a
        front-ran racket, Chris Reeves foundation counts the same prevalence of
        paralytic polio as ms, and 1775 sewage started becoming cool. Only 5% of
        suspected cases and less than expected total deaths from population
        growth alone. "
        <a href="https://youtu.be/Weqb9KrQ-TU?t=21">
          Virion injects DNA into cell
        </a>
        ," is made up.
        <br />
        <br />
        The inflation that everyone is dealing with, is from share split, no
        doubt about it. Even when $4t/yr fed spend 40% debt spend only is $2t
        currencyComponentOfM1? Is 1/3 of total debt? Nothing to do with work
        deficit of lenders landlords of insurers? GDP/p before 1913 used to be
        nearly constant, so obviously inflation is from finance, as
        labor-competition is elastic for population/scarcity.
        <br />
        <br />
        "Could have easily helped his community with the money," says some
        conservative who thinks money adds ANYTHING except bails our finance. we
        can literally reverse debt instead (cash/debt)*income every year back.
        WHAT A FUCKING RETARD. "Trump cared about the greater good of mankind,
        not the hedge funds," he spent more than the rest of them! Bill
        "unamortized savings" O'Reilly: "They are poor they need government
        services,” EVERY FREE RIDER MUTABLE SERVICE ISN’T HELPED BY GOVERNMENT.
        fucking 'conservatives' will be quick to sellout principles if their
        lender work deficit jives. "The national debt is unsustainable," but 2x
        that in private isn't? Borrowers loiter on the third party donee
        claimable beneficiary freedoms surrendered, force majeure implausible
        deniability.
        <br />
        <br />
        <Cable
          style={{
            height: "240px"
          }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1sKFyx2kFFyl52J46w-8CKBNPIPf6nQrI/preview"
          }
          float="left"
          title="Chris Salcedo (Newsmax) - slander and propoganda, count population growth for significance, retard"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        "More have died of china virus under Biden than Trump, not per time not
        per population size. We are seeing replicating and infection quickly,
        infection is upper resperatory infection, not deep within the lungs that
        caused deaths and hospitalizations. I admitted 3 people with 3 jabs,
        they cannot leave. Now they are doing well, they went home. We are
        watching them. If it is mild, at least have some antibodies. 50%
        isolates are omicron, 1.7% when hospitalized. Viruses mutate," or do you
        just test for what you would like to find? There are hundred of
        thousands, and coronavirus is only 5% of PIC hospitalizations. "He is
        not attacking the virus but the zmericans and citizens patients, more
        paternally patronize patients, more they comply with the Dr. Saveface.
        More infectious, less virulent, less to do with vaccinations. Most
        hospitalized for the omicron are in fully-vaccinated people."
        <br />
        <br />
        White House: "Unvaccinated are looking at a severe winter of illness and
        death, for yourselves for your families. The virion is an evolutionary
        trait to do so, it injects its DNA into the cell in an instant."
        <h2>
          "The data does not show that omicron is deadly, but delta D614G
          chinavirus is."
        </h2>
        "CDC says, 'unvaccinated have been infected,' a vaccine that is clearly
        facing shortcomings." Prevalence does not cause/transmission, make.
        "Little over 98% who catch it, survive." “Are they sworn to silence of
        violent forced unneccesary roughness entry as well? Well ok they bust
        into your home and take electronics, they don't tell you why, they make
        up violence about you, so what? Did you get in contact with your
        Senator?"
        <br />
        <br />
        "Smash and grabs, 40 year high murder rates," because of finance. trade,
        don't spend. 1/3 public/private
        <h2>crack no scripts currency; state-victimized work deficit</h2>
        "Great guy, high bail, jail," wall st pharma cop vs wall st pharma cop,
        is the plural minorities. pay cops by those they arrest, with evidence
        from arresting officer or no bail nor jail.
        <br />
        <br />
        If you don’t have evidence, then let them go or no bail. If you do you
        can always review it later
        <h3>
          Out of 170m drug-free prejudice employees, half 2.8m continuing
          claims, most disability, we work 10x as much as boomers did
        </h3>
        Are you conservative? You want to nationalize bridge tolls and broadband
        network fees instead of forcing companies to get led out, something that
        a industry variant jury would decide certainly 11/12
        <h2>
          population growth caused the pandemic, life expectancy ago, alone. you
          think marijuana causes accidents because most people smoke.
        </h2>
        Bo Snerdly killed Rush Limbaugh: "We can't describe how all this came to
        be, ultimately, questions of life are so vast they go beyond our
        understanding. Deaths came unexpectedly from covid, wen you are getting
        a check but not working for it it does something to your psyche too.
        ...How about the people that you lost, for how long they were in your
        life."
        <h2>
          logically, bacteria evolved into cell with nucleus, and virion comes
          out when infected with bacteria.
        </h2>
        <Cable
          style={{
            height: "600px"
          }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1pVrqOnIpwQpSRkXzNOmRn53mVL5fFz4e/preview"
          }
          float="left"
          title="American Agenda (Newsmax) - "
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        Parental-Gerontocracy, useless price-inelasticity for financial bailout
        of spending, 1/3 public/private, not trade, trust-building like bbb ppp
        existing contractors: "ccc 1.6 1.6 for something else, manchin would
        have signed off." Kilmead responds to his guest, "Right, the biggest
        mistake he made is not having the votes in the Senate." "Come over to
        Republicans and then trump will get credit for the majority. At least an
        independent that caususes with the Republicans."
        <br />
        <br />
        $2.5t social welfare spending isn't socialist. socialist puts labor
        above bureaucracy
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1Eiu-ZvgSKKFkZjAKbnoNC5VhUVjk7DWq/preview"
          }
          float="right"
          title="Ric Grenell on population growth, excess deaths, and China"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “If you have natural immunity, you shouldn’t even take the vaccine, I’ve
        had a saveface doctor say just that.”
        <br />
        <br />
        We have to make sure the threat is not credible, so we make up that he
        kicked and punched trying to elope from an faux orthopedic surgeon whom
        heard rollover-insurance and locked him up for 13 days in Carrier
        <h2>
          no-scripts, open-source licensure, ban invoices. you don't have to
          gentrify, you aren't socialist. you want to lower poverty to make
          poorness richer.
        </h2>
        "Take on the drug companies to lower the costs of prescription drugs.
        <br />
        Elderly wanted to stay home, forced into nursing homes.
        <br />
        Medicare..."
        <br />
        <br />
        "A woman impeded an arrest.
        <br />
        $25m to victimize small businesses," and $1m in acting wages. that is
        third party donee beneficiary claimable and surrendering of anothers'
        rights.. I could kill you for that if the courts do nothing.
        <br />
        <br />
        Taxes will continued to have to pay for it, like poverty will only be
        saved for one month’s expenses. Just like Mark Levin (Republican,
        Libertarian) says you have “savings,” unamortized but in reality a net
        loss for useless price inelasticity of bid-to-ask.
        <h2>no surrender anothers' freedom</h2>
        REPUBLICANS KNOW THAT A DEFAULT WOULD BE A “DISASTER” – BUT THEY ARE
        “UNITED IN OPPOSITION TO RAISING THE DEBT CEILING”
        <br />
        <TwitterTweetEmbed
          style={{
            width: "300px",
            float: "right"
          }}
          key="1411470492834439171"
          tweetId="1411470492834439171"
        />
        The thing is, it wouldn't be a disaster to reverse the debt, I have
        designed an economy for government to symbiotically to work with the
        economy, on a per hour productivity (price-deflation) microeconomic
        basis.
        <h2>
          parental gerontocracy: lender landlord insurer work deficit, public
          and private
        </h2>
        Kilmeade: "family climate immigration. Print up some cash if we want to,
        do something that we need." Only need for cash is made by third party
        donee beneficiary claimable.
        <br />
        Why is Joe Manchin trying to hurt this country by getting in the way of
        good economic policies?
        <br />
        "$2.9t taxes real and harmful."
        <br />
        Build Back Better is measured as a good thing only because watching
        eachothers’ kids boons the jobs numbers, and poverty only includes
        materials, but not the wealth gap from bonds, homes, equities and
        corporate profits deriding intermediate-labor. If we cared for the most
        bang for an hour of work, we would ban that which the bipartisans wish
        to pay off, that is invoices and expiring-claims, on third party donee
        beneficiary claimables.
        <br />
        (Poverty/equality)=poorness, including assets; we aren’t serfs nor
        employables, outlay corporate profits, (cash/debt)*income every year
        back, ban non-rollover insurance & cap rent at 5 units or 30 days, not
        price! M4a used to mean invoices are theft and no-scripts, now it just
        means doctors get paid by bond-index-funds’ work deficit. Now
        bipartisans are nationalizing bridge tolls and broadband network fees.
        Normal spending is 1/4 1/4 1/4 insurance-premium pentagon pensions, 10%
        debt service, 40% debt spending, $4t/yr (2010–2020) producing $2t
        CurrencyComponentOfM1 checking. Go figure!
        <h2>
          nationalizing bridge tolls and broadband network fees, free rider
          mutable monopsony beyond article 4 and useless price-inelasticity of
          bid-to-ask
        </h2>
        Goodwin: “Joe Biden promised he would work with Manchin, but the
        Democrats outsourced to Progressives.” What free rider mutable
        contractor beyond article4 scope do you want paid, market-communist?
        Kilmeade: “This is no way thru the pandemic, cannot spend anymore.” What
        bridge tolls and broadband network fees do you want to nationalize? “Now
        they are starving after Afghanistan taken over by terrorists and we
        don’t deal with them. ...Won’t even ask about the China virus that is
        poisoning the world, again.”
        <h2>deaths were lower than expected from population growth alone</h2>
        Debbie Dingle: "We have to preserve performance while we move to energy,
        upkeep-able rent seekable charging stations, without customers.
        Childcare monopsony useless bid-to-ask instead of banning invoices,
        "lowering prescription drugs" instead of banning prescriptions for&nbsp;
        <a href="https://teapharmacy.party">pharmacy currency</a>, all grows the
        wealth gap, that in which inflation nor poverty accounts for, causing a
        great work deficit; anyone going to say global climate change isnt
        real,&nbsp;
        <a href="https://magnate.company">see exteme weather</a>, ice glaciers?
        Work together to get something done, find common ground, problems we are
        addressing, need to come together on.{" "}
        {/*smaller groups test work with scientists."*/}
        <br />
        <br />
        Truncated sales tax weens cops off bonds so they get paid by those they
        arrest.
        <br />
        <br />
        anyone who doesn't support immediate immigration is a union&nbsp;
        <a href="https://nationalsecuritycasino.com/trump">retard/gimp</a>
        &nbsp;"patriotic and anti-americanism turned off latinos in drove.
        biden's build back bancruptcy bill."
        <h1>
          1/4 1/4 1/4 premium pentagon pensions 10% debt-service, 40% njta, 40%
          debt-spending, 50% nj, 1/3 public/private: fighting fire with fire,
          %4t/yr 2010-2020 fed spend, how only $2t currencyComponentOfM1
        </h1>
        <Cable
          style={{
            height: "250px"
          }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/130cAu9SFO_c01K5eU8TmxhOUfRa7Kx_w/preview"
          }
          float="right"
          title="war bonds - doing all you can, brother?"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        Dick Morris, advisor to Clinton and Trump: “Unemployment, crash, falls
        apart. …inflation weren’t happening until Biden introduced it. …can’t
        make gold and silver nor park deeds, G-d did that.”
        <br />
        <br />
        “All come to defend the nation attacked,” is as stupid as open-carry,
        per behavioral economics and threats, albeit justified, can
        incorrectly-countervail safe-spaces. “To lower blood pressure, one way
        is to take medication,” or work out! Fucking troll
        <br />
        <br />
        "5m-250k, 3m peasant farmers starve to death. ...USSR-free-enterprise
        was and what Putin wants to be." If that is what happened in excess,
        population growth calls for 1m/yr, and 3m is 150% that estimate of
        excess, year to year BASIS. Just as expected, first with 1.2m/yr+ covid
        in U.S., 505m/yr+ in worldwide, and 15m/5yr+ in Great Leap Forward.,
        and&nbsp;
        <a href="https://www.christopherreeve.org/living-with-paralysis/stats-about-paralysis">
          2.5m
        </a>
        /2/38 accute flaccid paralysis in&nbsp;
        <a href="https://www.chop.edu/news/feature-article-flashback-parenting-and-summer-1950s#%3A~%3Atext%3DFor%20parents%20of%20children">
          paralytic polio
        </a>
        <br />
        <br />
        Bernie Sanders, glass steagall/fdic/m4a==invoices-are-theft sellout:
        “Pay raise in inflation accounted for dollars. Maybe we will stand up
        for working families, elderly, children instead of the lobbyist, 40%
        childhood poverty is over, tell that to the struggling in WV and
        America. Pentagon gets 4x more than what whether lower cost of
        prescription Expand medicare to have dental and eyeglasses, I suspect,
        working families, I’ll pay for the damn poll, see what the people of WV
        feel. Equation is clean, one side billionaire pay nothing, climate,
        child poverty, prescription drugs, the other side, says we do. Pass
        infrastructure, and then we will get to bbb. Was that a mistake? We
        needed tandem for this reason, it’s we needed to keep duress together,
        pass bill to working class needs. Childcare paid family leave,
        environment program, biden agenda dead? Climate, protecting American
        democracy, denying color, disabilities, young people old people. What is
        terribly important is pass voting rights, states cannot deny people the
        right to vote. Trying to suppress by extreme gerrymandering. We need 50
        votes to do that. How that is 1 person 1 vote, what he does would be a
        tragedy. Tell man chins of the world that we want a healthy climate,
        scientists say we have to act right now, to change our energy
        systems.&nbsp;
        <a href="https://qr.ae/pGzTNz">Cost of living adjustments</a>, is Biden
        doing enough to help? Younger workers earn less than older, and sending
        good paying jobs to Mexico. Representing people whom corporate CEOs
        don’t give people what they need.”&nbsp;
        <a href="https://nationalsecuritycasino.com/gdp">
          POVERTY/EQUALITY=POORNESS
        </a>
        , BERNIE WILL SOLVE POVERTY BECAUSE HE THINKS YOU ARE A DUMB SERF AND
        EMPLOYABLE FOREVER, YOUR INPUT COSTS ARE RENT/MATERIAL AND NEVER HOMES,
        EQUITIES, BONDS, NOR HOMES OUTRIGHT, RIGHT? child tax credit is
        parental-gerontocracy and public insurance is expiring claims still, no
        other way to have doctors on call. Lowering prices by price-fixing
        misappropriates labor equity from our (labor) propensity to spend such
        non-financial-earnings; lowering prices without unions, immediate
        immigration, open-source-licensure and no-script pharmacy demositary.
        <br />
        <br />
        Rudy: “Is it covid? Cannot get healthcare people, that might be from
        covid overreaction for miscounting expected deaths.” “We all want
        infrastructure help, bridges do need help, now there is a lot of other
        crap in there, you know what we are going to fund broadband, bridge
        repair, road repair.” Tax from outside market is pure inflation and
        monopsony. "Big picture, long term 2x/florida live here. Why do you
        think there is a&nbsp;
        <a href="https://qr.ae/pGzTNz">
          lag except in how long producers eat the cost
        </a>
        &nbsp;exclusively? Stop calling it long term, like we are meant to be
        serfs and employables forever People’s issues, the school voucher for
        property tax."
        <br />
        <br />
        Rita Cosby: “Need better free rider mutable nursing home system with
        expiring claims of stacked intermediate-labor for
        useless-price-inelasticity of bid-to-ask. Nursing home deaths, because
        of covid.”
        <br />
        <br />
        hate crimes are when there is no scapegoat
        <br />
        <br />
        Dermott Shae: "Decriminalization of alc, peeing & marijuana is now civil
        summons default." Car-smoking-marijuana is prevalence not cause!
        retards. Jails shouldn’t exist, except for murderers, third party donee
        beneficiary no surrender EULA white collar criminals, and closed-source
        FDA pharma currency script cops. Not per incarceration net loss bond
        profit swaths of lifers.&nbsp;
        <a href="https://qr.ae/pGzTgd">
          When you launder money it matter not what you spend on
        </a>
        . we can have a trade no spend economy, with industry various multiple
        of 11/12 jury for permits, desistation or convictions with arresting
        evidence, or no jail nor bail.
        {/*"If the default there is no one in jail"*/}
        <br />
        <br />
        Rob Carson (unvaxxed because of his heart's current condition): “To
        catch covid, traveled to NY. That’s right, I have it,” that just means
        you PRODUCED it. Antibodies act to stop viral debris blood clotting, and
        symptoms are a warning mechanism, but the&nbsp;
        <a href="https://qr.ae/pGzp1w">INFECTION</a>&nbsp;is from bacteria.
        <h2>
          FREE THE KIDS FROM JAKE TAPPER PARENTAL-GERONTOCRACY AND THE
          NATIONALIZED BIPARTISAN BRIDGE TOLLS/NETWORK FEES; TRUNCATED SALES TAX
        </h2>
        Ayanna Pressley: "disabled that make this democratic majority possible,
        cancel student debt (bailout uncollateralized), service collateral like
        Andrew Yang. (cash/debt)*income every year back would be too well
        mediated for force majeure implausible deniability
        repo-cycle-kept-down-payments.
        <br />
        Stop obstructing President’s agenda, that is the people’s. He got 1/3 of
        the vote, counting non-voters as a vote, 'neither'"
        <br />
        <br />I got Republicans by the&nbsp;
        <a href="https://nationalsecuritycasino.com/trump">balls</a>.
        <br />
        I says, your racists
        <br />
        They says how are wes racists
        <br />
        And so I goes, immigration
        <br />
        Then they say, “we only want the good jobs and I say that is almost
        worst because they they will run thru the jobs plumber dishwasher; and
        go opes bankers, insurer, that’s us
        <h2>
          Mission to make sure everyone gets the coverage they deserve. An
          better. This is a solicitation for insurance
        </h2>
        Larry Kudlow says we, “actually have to pay this debt off!” as opposed
        to the rest. We have the Nile river of disparity between us Saver Party
        servicing and bailing with 40-50% debt spending FOR DECADES, $4t/yr
        (2010-2020), how mv1===mv2==GDP & $2t CurrencyComponentOfM1? 56/40m
        normal 65+ now 75+ since 2015, 500k excess deaths, “requires cell to
        reproduce,” is no pandemic but non-exclusive byproduct warning mechanism
        of bacterial infection! Twice public share of absolute and $12k/year/p
        debt, $3k/year/p bond, $64/year/p new is private! Only way out is
        (cash/debt)*income every year back! On third party donee beneficiary
        force majeure implausible deniability grounds and repo-cycle kept down
        payments standing, granting trade no spending, that is expiring nor
        estimates, or surrendered as option to buy, without realization,
        concurrently of 1-level-board notwithstanding.
        <br />
        <br />
        “The only thing mortally-wounded is trumps election prospects.”
        <br />
        Dr oz: “Wuhan funding conspiracy ‘certified,’ viral induction
        inconclusive (debunked/confirmed) in HIV.”
        <br />
        <br />
        <Cable
          style={{
            width: "300px"
          }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.youtube.com/embed/DN_OV_3PVHA"
          }
          float="right"
          title="CNN - Mary Trump with JAcosta on Census Projected Mortality, Non-Voter Turnout, and Doubt Trump Lost"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        Mary Trump: "My (great-?)grandfather was a former NAZI, I know Donald
        bought into every single antisimetic trope out there. Reduce the amount
        of testing to lower spread accross the country, malignant personalities
        and lies. The fact that he keeps getting away with crimes, lying about
        elections, extraordinarily dire for future of the economy; put economy
        over the safety and health of american people, how distorted leader of
        GOP is today. How Donald looked so sick, red streaks in his eyes, hair
        was a mess, didn't want realease to be shown a loser, how twisted and
        weird is that? rather than the insurrection at the capital? If our
        system cannot respond to threat to future of american irrevocabable
        progress, and he didn't want to be called a loser, clear problems he
        has, massive trouble, how is he allowed to consider, that is not a
        matter of if the people consider it, it is a matter if a whole political
        party has to consider it."
        <br />
        <br />
        Dr. Peter Hotez: "Protections being vaccinated 21k triple last month,
        get vaxxed, boosted, tested for christmas gatherings, lining up at spot
        in urgest care, sense of urgency, need to know, potentially infect their
        loved-ones, new normal here in ny omicron picking up like the first
        wave, what we have to do, doesn't feel as gravitas as first being here."
        Gotta play it safe, no question about it. already expected another delta
        wave, 50% two doses, unvaccinated pile into hospoitals, 4-6 week lag
        from africa than UK, that is why so much social distruption with
        CHristmas, 3rd two doses of mRNA sporing growth from infection but ok
        for ICU admission. a 1/3 have gotten the booster, 70% infection
        reduction, but not hospitlization nor cause of death. healthcare
        workforce becoming sick can be retarded. two doses, need the booster.
        this isa 3 dose vaccine, been saying that. if you are infected and
        recovered you don't need to get vaccinated, that is not true. A lot of
        hospitalizations in the U.S. if child is not vaccinated. General public
        only asymptomatic or travel purposes, data is too low. two doses not
        enough, need third dose booster. omicron is transmissable, if we don't
        play it safe I don't see how we can continue the season."
        <h1>
          I'm not against innumerable-beyond-by-last-trade torts, just expiring
          claims insurer work deficit and state vic
        </h1>
        home equity line of credit made it possible, help a little, help a lot,
        dip into home equity for tuition! Everyone can bank at BethPage Federal
        Credit Union, we care about what you care about, no HELC fee for under
        $500k
        <br />
        <br />
        options to buy, sold, on estimates: consumer fraud act nj
        <br />
        Curtis Sliwa: "If everyone who said they voted for me did I would be
        sworn into office already, 1/5 even bothered to vote pulling my shorts,
        chain, or didn’t vote at all. Neck and Neck races turns out, but not
        like a full place of options, including an abstainer’s, “no” for the
        policy reign of the office
        <h2>
          disenfranchise children with schools, free rider immutable truncated
          sales tax only
        </h2>
        Elise Stefanik: "We have done our job as Republicans to show that jobs
        can double if we watch eachother' kids. Talk about inflation, from tax
        and spend being only 1/3 total with private debt, that impacts real
        americans with crumbling roads and inflrastructure, we can rent-seek and
        launder to bonds the bridge tolls and network fees, target-margins for
        microeconomic reasoning of free market self-regulation of perfect
        equillibrium of per hour price deflation from comparative advantage
        <br />
        <Cable
          style={{
            width: "100%",

            height: "400px"
          }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.youtube.com/embed/W-Vv1vysGzE"
          }
          float="right"
          title="Open Gov Foundation Hack4Congress"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        tech advancement of good products over blind jobs numbers with infinite
        producers be damned. These are true rising-stars, and standing up for
        hardworking every day , measured by credit as income instead of
        productivity per hour price deflation with open source utility. I am
        exciting, looking forward, to increase that number."
        <h2>What does Stephen Moore want for Christmas?</h2>
        "know what is in it after spend it, 72 hours, 2 weeks, public review."
        <br />
        <br />
        Rattle off for my 2025 Senate Run to take out Menendez who is not
        servicing collateralized debt and bailing out uncollateralized, or
        writing off forbidden past demand, I don’t know which cancel means.
        Cash:debt*income,
        <br />
        pharmacy depositary without scripts,
        <br />
        truncated sales tax sewage police lawsuits,
        <br />
        industry variant multiple of 11/12 jury,
        <br />
        1-level-board max-royalty contracts,
        <br />
        cap rent at units and days not prices,
        <br />
        no estimates for ability to sell options to buy, third party beneficiary
        donee claimable.
        <h1>
          This land is our land, in dollar v bond parks (20% of Tranquil and
          voluntary U.S.).
        </h1>
        "read by law U.S. code 302 in G-d we trust, Donald Trump save the
        country and the world. Tragedies of life like gambling and drug
        addiction, consequences of lifetime in Hell." Like the prejudice by
        employers? STFU BITCH. "Finance is not the cause of all the problems!
        actually, with trade but not spending, there wouldn't be any problems;
        price-elastic free rider mutable of 1/1. This isn't for people, it is
        paying off the donors and bonds, just like putting rentier-class
        pay-to-play lender landlord work deficit. Only contributions from people
        they represent. True for both parties, they are true to their donors
        everywhere, not constitutents."
        <h1>
          "Address quality of life by cops." Fuck off 'former intelligence
          public discoverable' Richard Steve Rogers, first why
        </h1>
        don't we ween you off bonds so you are paid by those you arrest, with
        evidence or no jail, never bail, character "evidence," nor hung-multiple
        of 11/12 industry various jury
        <br />
        <br />
        "'Immigration,' to enforce the law and protect the citizens of the
        United States, you sound like a Union douche Richard St. Paul
        <br />
        <br />
        "U.S. is an accountable nation to its people. Communism, at least coming
        from Russia, almost led to nuclear blows. You don't capitulate to
        dictatorial regimes that do not listen to their people. They are not
        liberal democracies, they work to support their own vision. Make NATO
        stand up against what is happening in Ukraine: it invaded the Czeck
        Republic and Poland, we can all see what they are doing here. What will
        the West do in response? Only G-d knows. Inflation, preying on the
        economy, will americans get the boom they so desparately need?"
        <h2>
          please include intermediate-labor, assets, homes and bonds in
          inflation, not just materials and labor
        </h2>
        “After peak inflation, 13% higher prices in assets. Downside presents
        opportunities to take revenues as income, not&nbsp;
        <a href="https://qr.ae/pGz7wX">price appreciate market concentration</a>
        &nbsp;in public versus private corporation and individual.”
        <br />
        <br />
        "Debt ceiling isn’t about spending it is about a statement from American
        Express that you, ‘need to pay.’" It is promising money of another at
        force majeure implausible deniability, third party benefii donee
        claimable no surrender in a standard EULA of that which you cannot
        surmise in reality. Simply (cash/debt)*income thru hisotry, cap rent at
        5 units or 30 days not price for market liquidity, and make sure Claudia
        Tenney hangs herself!
        <br />
        <br />
        "Omicron is not sending people to the hospitals nor morgue; political
        science, not medical science. Just hurting our small business, with more
        we can do with monopclonal antibodies, social distancing, not people
        able to go to work because they have a medical or King James Bible
        reason to not take the vaccine, so it doesn't overflow hospitals." They
        haven't built more hospital beds since at least 1970, half life,
        population and 10x productivity price deflation per hour ago, not
        because of population because of labor competition, but because of
        finance, invoices, expirign claims, implausible landlord use and repo
        cycle kept down payments, or other implausibly deniable competing with
        consumers or force majeure intent.
        <br />
        <br />
        Don't want healthcare policy dictated from the oval office, scientist
        saveface nor business. Get a permit, try to prove a virion is an
        evolutionary trait if it, "requires cell to reproduce" to a jury of
        industry various multiple of 11/12, and it is not a non-exclusive
        warning mechanism of an all inclusive cause: bacterial-infection.
        <Cable
          style={{
            width: "100%",

            height: "400px"
          }}
          onError={handleScollImgError}
          src={
            this.state.serviceCancelingImages
              ? ""
              : "https://drive.google.com/file/d/1AhoiZt01HAtTbQbOGBqSMmIiUUFYRCSY/preview"
          }
          float="left"
          title="Saturday Agenda (Newsmax) - Joe Pinion on foreign relations and their means by finance"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        <h2>
          Russia, China and U.S are "invested" in eachother, war only happens
          because bonds, not 1-level-board max-royalty-profit and equities
          concurretable (full reserve depositary, rollover-insurance). "Begin to
          hold accountable, ensure the leadership we deserve."
        </h2>
        <h1>
          "It is going to be bad, anti-growth, more tax less of it." taxes
          outside market is pure-inflation, as is lender landlord insurer work
          deficit for no gain in good products, just busy-work
        </h1>
        Stephen Moore: "We have to kill government debt, but not private, albeit
        twice as much! Medicare cover more issues, or childcare issues for
        families. Immigration of working age, just sagged of its own weight.
        Saddles the next generation with trillions of debt, it gets harder. The
        Dems think the people are with them, center right patriotic reject 90%
        the left beleives in. Stong border and foreign relations, complete give
        up with Putin, we are lying down, 'you know what you are totally right,
        you can have Ukraine back.' In the Economist, 'What will America Fight
        For?' Not territory, but sovereignity of Ukraine, anti-free markets,
        colonialism and/or anti-finance, that is what Putin wants. What will the
        left fight nor? Climate Change, and miscounting ice cores for CO2
        natural debinding as axis races the sun 41k years. They are nuts! Did
        anyone see coal consumption of 5%/yr+ coal burning and CO2 binding,
        please cleanup your foul atmosphere because it is affecting the rest of
        the world? The Defense and military motion now is to make it carbon
        neutral, not national defense, only carbon neutral matters."
        <h2>
          "It is going to be bad, anti-growth, more tax less of it. You can’t
          grow your way out of debt if you are taxing." You can’t surmount
          $12k/year/p debt, $3k/year/p bond, $64/year/p you fucking bitch liz
          peek. "Hoover & FDR lowered revenues while taxing more, yet the first
          two of Trump years tax-revenues were way up while lower corporate tax!
          Getting more in direct government benefits than paying in."
        </h2>
        "I have a supply side pooch too, *barks in agreement*, After Obama years
        we actually did have to pay it off, I was involved in that. lender
        landlord insurers are free loaders on third party donee beneficiary wind
        and solor carter subsidies, but instead the competition is so
        trust-built in gov, free market really works, ppp trust building is not
        the way to go!" "Well, what about government contractors and 10-40% debt
        service!"
        <h1>
          “It is an amazing product, measures by busy-work, it is not just a
          feel good product.”
        </h1>
        "Being on earth is hard enough." It doesn’t have to be, retard.
        <br />
        "I’m a risk taker and producer. Retail not inventory, looted products
        are still being paid for by target, and they won’t stop trying."
        <br />I am a contributor, you are a spender, not a trader, when credit
        is income while it is theft. Wait for consumers. 1-level-board
        max-royalty-contracts. "You do need cash and cash flow, to pay the
        dividend." 5 1.2 doesn't stop from taking care of your health with
        expiring claims false bid pools non-rollover insurance is a third party
        beneficiary donee claimable is a big beast to tame, so I am not too
        worried."
        <br />
        <br />
        Inventory with bifurcating markets didn’t lower car prices because
        unions and nationalism
        <br />
        <br />
        <Cable
          style={{
            width: "100%",

            height: "400px"
          }}
          onError={handleScollImgError}
          src={
            this.state.serviceCancelingImages
              ? ""
              : "https://drive.google.com/file/d/1P2-8zDKsXGuHJf5qtmNhvH5EQcceY6kE/preview"
          }
          float="left"
          title="America Right Now (Newsmax) - Tom Basile with Chuck Fleischmann of TN on FEMA front-running monopsony, expiring claim false bid pools and government gentrification"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        We fund no matter we will be here to help you. Can we not have delivery?
        Stop front-running on fraudulent basis
        <br />
        <br />
        <TwitterTweetEmbed
          style={{
            width: "300px",
            float: "left"
          }}
          key="1413909110140149768"
          tweetId="1413909110140149768"
        />
        <h2>
          I said population growth a life expectancy ago, but the only way to
          get the point across seems to be to say, “I projected this mortality.”
        </h2>
        "Nasty thing to economy and jobs story, crazy progressive caucus with
        close to 100 people I don’t think they are going to buy it, not
        progressive enough, will be against it." Mick Mulveyney responds,
        "Freedom caucus that I founded moving against its original principles.
        'Hope is a placeholder for future compromise,'” on lending compound or
        general income beyond 1-level-board max-royalty-contract. "50-50 senate
        im deciding vote, that is good math, but with a 50-50 senate, every vote
        is the deciding vote."
        <br />
        <br />
        "Sacrifice the short run for the long run," is delusional. inflation
        should include assets, bonds, homes and intermediate-labor.
        <h2>
          you are holding it upsidedown: it is per hour price-deflation, not
          blind growth which is integrally population anyway, gdp/p isolates
          inflation.
        </h2>
        Brooke Rollins, think tank for pro growth trump acheivements and build
        for the future: "CBO is not a friend of conservatives, leftist, not
        radical, lower numbers with gov spending, unfair scoring of trump tax
        cuts, biden all out war over CBO on the numbers $3t $2.66t interest.
        Changes fabric of america and may never recover if this bill passes.
        Shine more light on the tax hike part of the bill."
        <br />
        "Anti-growth, -business, -worker, -family-wage, now focused on spending
        and inflation which is fine, but the tax thing is a disaster." Brooke
        responds, "You are a leader of everything. You are sort of a moral
        compass in the west wing, everyone adored you. The greatest economy in
        the U.S., maybe the world, 40% earners saw an increase of 50% of their
        net worth. These are people who were strapped with only government
        income. When you raise taxes the dream goes away. Inflation is why we
        are working 7 days a week 24 hours a day. …We have to stop this ‘deal.’"
        After you supported to nationalize bridge tolls and network fees, you
        call childcare helping the child? give the child the job. #FreeBritney
        <br />
        "If you tax something, you get less of it, if you subsidize, you get
        more of it." That goes against price-elasticity, you probably think
        credit is more than monopsony and loitering and implausibly deniable
        repo-cycle-kept-down-payments.
        <br />
        "Social issues, housing, immigration; national economic council runs
        through economic and trade stuff; then foreign policy; the only groups
        that can call inter-agency meetings. Mnuchin ran the treasury but it
        sort of had it's own operation.
        <hr />
        <br />
        "As it happens, my reverse mortgage loan was declined, and I am now
        living below the poverty level and struggling for survival. Are there
        any suggestions?"
        <br />
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "15px",
            padding: "10px",
            margin: "10px"
          }}
        >
          The only solution is a class one: (cash/debt)*income every year back.
          Compound and general income investment is subject to the impossibility
          doctrine, and force majeure of the repo-cycle kept down payments is
          implausibly deniable. We also need to enforce actualized market
          liquidity by capping rent at units or days, not price, for implausible
          landlord use grounds. Finally, we need to ban non-rollover-insurance
          for third party donee beneficiary grounds as well, as the expiring
          claims are false bid pools, laundered from the co-signers’ employers
          and customers. With these policies and truncated sales tax afterwards,
          for free-rider-immutable sewage-police-lawsuits thereafter, poverty
          (especially if accounting for assets, homes, bond and
          intermediate-labor, not just material, food, energy and rent) will not
          be the default, from the absence of a lender-landlord-insurer work
          deficit. Only groups that can call inter-agency meetings
        </div>
        Mark Pinklefeld and David Bahnsen: “Only REITs and MLP has dividends
        now.” Larry Kudlow: "I can't in good heart tell people to buy bonds."
        <br />
        "Buy dividends. If tighter credit markets because fed sort of has to
        take liquidity out of the market, and stock market inflation not going
        p/e but growing cash-flow. High p/e of FANG and tech is 40's, high for
        record earnings growth pulled forward by covid, market smarter than
        vaccines over the stupid pandemic. Musk to trade his equity, that will
        yeild 700k from tax revenues from his sales. $11b liquidity from
        market-maket market-communist spread, to exercise options. Musk started
        companies employes thousand of people, wouldn't it be more productive to
        open source with no jobs? Musk actually knows business, as he is
        loitering on borrowed intermediate-collateral. Can shut the door on
        competition." Competing with consumer behavior, even,
        'intermediate-supply,' is illegal.
        <h2>
          having no burden of religion, price, quality nor duress of minimal
          viable product, is conservative?
        </h2>
        <Cable
          style={{
            width: "100%",

            height: "400px"
          }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1sF4f9OPlvAE6QCs1zXJeGedyoaUEn1lY/preview"
          }
          float="left"
          title="America Right Now (Newsmax) - Tom Basile on covid religion"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “We know the 96%+ efficiency rate for vaccines is waning.” you are
        counting non-exclusive byproduct, that doesn't make for an
        all-inclusive&nbsp;
        <a href="fda.gov/media/144245/download#page=42">cause</a>. The pandemic
        was projected anyway from population growth, and ms matches paralytic
        polio. Do you honestly beleive virion, if it is the cause of death,
        "requires cell to replicate," meaning it only comes out and it is
        therefore an evolutionary trait? No, it is&nbsp;
        <a href="https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference">
          bacterial-byproduct
        </a>
        , 'severity' is not a differential for vitro retrospective&nbsp;
        <a href="https://youtu.be/Weqb9KrQ-TU?t=21">analysis</a>.
        <br />
        <br />
        “I felt better after I tested negative,” terrorizes Kudlow with null
        hypothesis. “Every citizen gets tested 1 or 2 a month. Only citizen is
        in finance? They have a lender landlord insurer work deficit. 'Whoops
        more asymptomatic than expected,' so we wore masks to protect eachother,
        need asymptomatic testing. Best thing is to have stay-at-home-tests,
        then see to have Christmas parties.” Rob Redfield. “The virion only
        comes out, so it cannot be the cause of death.”
        <br />
        <br />
        "Biden is surrounded by doctrinaires; I am conservative, but need some,
        'walking around sense.' Yeah, this only makes sense only to a point, but
        look at where you are, what you are trying to do, and why it would work
        in the real world. ...Understood how the economy works, didn’t want
        to&nbsp;
        <a href="https://fred.stlouisfed.org/graph/?g=Gkvt">stunt its growth</a>
        . The&nbsp;
        <a href="https://nationalsecuritycasino.com/gdp">economy</a>
        &nbsp;slumped into a recession. Literally, 'choked in the crib,' that
        were imposed in Obama regulations.
        <br />
        'The only thing, big, should be government.' We are going to even up,
        not just with inflation, but stagflation that we knew in late 70’s,
        early 80’s Rohi Chopra, consumer protection, 'hates banks' and wants to
        overturn the FDIC, which is very good (that is glass Steagall in an
        institution, bonds aren’t savings. Dollar v bond park deeds)
        <br />
        Politicians need credible, competent views, not so far out of the&nbsp;
        <a href="https://www.theatlantic.com/politics/archive/2011/10/poll-most-americans-support-occupy-wall-street/246963/">
          mainstream
        </a>
        , that the candidate wouldn’t understand why they would appoint the
        person. Understand appreciate system that makes American prosperity,
        agenda of the agencies they run. When investors have invested billions
        with somebody, and they have a 'fiduciary' responsibility, it effects
        what they say and do. They regulate to manipulate business to espouse
        interests of government. Exxon claiming green new deal. People can’t
        afford to not openly oppose it. Sometimes people come along but not
        often. A government in name only."
        <br />
        <br />
        “People are rejecting the Biden agenda.” Phil Graham: “Yea.”
        <br />
        "His&nbsp;
        <a href="https://nationalsecuritycasino.com/trump">
          immigration and pandemic
        </a>
        &nbsp;policies are in tatters;
        <br />
        Adjust to what the public wants, but not what the crazy woke left people
        want."
        <h2>I’m not doing this to learn from you but to criminalize you</h2>
        "Very few people whom you convince their policy is wrong will change
        their policy, you were an influence for good and I'm glad you were there
        for issues of wrongheadedness. You implemented right-headedness."
        <h2>anti-business and -child policy</h2>
        Larry Kudlow: "They did get infrastructure bill with help of gop spread
        over 10 years, green new deal, the rest is infrastructure. they did get
        emergency relief bill last winter and THAT was the trigger point
        inflation. I wouldn't count that as a win. I mean the emergency is
        almost over. Should have built wall, packing court is dead, nationalized
        election bill is dead. Manchin and Sinema will not play with the rules
        of super majority. Foreign policy retreat from Afghanaistan emboldens
        Putin to threaten to invade Ukraine, Biden will make concessions to
        Putin. China is sending airplanes. Taiwan airspace. climate change,
        economic catastrophe, rejected. Remember, 'bankers are a-holes, have
        federal reserve manage all loans.' She had to withdrawal. Progressive
        socialist work requirements," what does that even mean? "Union US
        battery subsidies for Ford gm Chrysler aren't 'Right to work.'
        ...Leftover pandemic issues, inflation folks out of work, small business
        unemployed. Excess continued gov spend, fed money printing and reg that
        stops business and energy.” Manchin won no new spending $5-6t no
        gimmicks, work requirements for able bodied people." What does that
        mean? “Not one year of 2k, 3.5k ccc. Permanent child welfare, no work
        requirements for the parents. ...One year of spending with 10 years of
        tax hikes. No electric benchmarks. Doesn’t let go, can’t buy him off.
        70% in a red state. doing the lords work. bbb so-called transformational
        proposals is dead. now they are going to bring it back this coming
        winter. lot of pomp and circumstance, ordnary budget matters, not this
        big bill. next test is february. Inflation will remain at and above
        where it is today. After a booming 4th quarter, third week of January,
        7% growth of the broadest inflation measure 7 maybe 6, argue against any
        government spending/stimulous. Lefties will make another run at it,
        manchin isn't caving in. I think he is a republican by february. I would
        not rule that out."
        <h2>wall st is twice as much debt as government</h2>
        "'We have to regulate this, throw money are that,' no human thinks it
        will lower inflation. America is smarter than politicians think. And
        they said no to Joe Biden."
        <h2>non-voters won, default, "no"</h2>
        <a href="https://billbiden.org">JOE BIDEN</a>: "JOB PROGRAMS, JOB
        OPPORTUNITIES, TO KEEP PEOPLE SAFE AND SET THEM UP FOR SUCCESS," GREG
        KELLY: "ALWAYS MAKING EMPTY PROMISES," WOULD DOUBLE EMPLOYMENT BY
        WATCHING EACHOTHERS' KIDS. MAYBE COMPETING WITH CONSUMERS SHOULD BE
        ILLEGAL?!? STOP & REVERSE THE LENDER LANDLORD WORK DEFICIT!!! NOT FOR
        BOND INDEX FUND GAIN, INCLUDE THAT IN POVERTY LEVELS
        <br />
        <br />
        "The Social spending package that we call Build Back Better."
        <br />
        <br />
        THE DESTRUCTION OF PUBLIC EDUCATION IS GOOD, STOP THE SLAVERY. LET US
        EARN MONEY. TRADE, DO NOT SPEND. TRADE SECRET CROCK NOAM CHOMSKY. GO TO
        HELL ALREADY. RICH VALDES: “DEMOCRATIC-SOCIALISTS SAY YOU NEED JUSTICE
        IN EVERY AREA OF SOCIETY, AND WE SHOULD, ACTUALLY HAVE, IN EVERY AREA OF
        SOCIETY, JUSTICE.” THE NATUIONAL DEBT IS UNSUSTAINABLE AND THE BIDEN
        ECONOMIC POLICIES CAN MAKE IT EVEN WORSE. WHAT ABOUT PRIVATE WHICH IS
        TWICE AS MUCH, LOITERER, FORCE MAJEURE KEPT DOWN PAYMENT REPO
        IMPLAUSIBLE DENIABILITY.
        <br />
        <br />
        <Cable
          style={{
            width: "100%",

            height: "400px"
          }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1H1D5lVH3JdHoMU1X-nd23Vm_AvxEfvwZ/preview"
          }
          float="left"
          title="Spicer & co (Newsmax) - 'social spending' nationalist rent-seeking bridge tolls & network fees"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        <h3>
          "DARKEST 1/3 REAL ESTATE 4/5 POPULATION SUBVERT CHURCHES, AND WHISPER
          AS WOULD THE VIPER TO EVE." NO SHIT. AS A DETECTIVE, YOU EXPLORE
          MOTIVE AND METHOD BY VICARIOUS ACADEMIC EXERCISE. THEY ARE WRITING
          THEIR OWN EMBODIMENT OF WHAT THEY CRITIQUE, AND THE REASON WHY
          FREE-MARKETS IS QUALITY AND PRICE ASSUMPTION. PAUL HARVEY (1964,
          HUNDREDS OF YEARS AFTER MARX SPEAKING ON THE CREDIT-CYCLE
          USELESSNESS). "SCHOOLS HAVE AND GIVE TO THOSE WHO WANT UNTIL KILL
          INCENTIVES OF THE AMBITIOUS." EDUCATION-BY-DEFAULT IS TRADE SECRET
          MONOPSONY
        </h3>
        <br />
        "Where does the money come from?" CNN responds, "We already told you. 'I
        blame it on the Tea Party movement, Moms for Liberty is a danger to
        society and only 1/3 public/private.'" 1/4 1/4 1/4 premium pentagon
        pensions 10% debt-service, 40% debt-service njta. literacy-rates are
        like reasonable doubt duress of commerce minimal viable product Tranquil
        society and voluntary trade. Lender landlord insurer work deficit. 40%
        debt-spending, $12k/year/p debt, $3/year/p bonds, $64/year/p new
        currencyComponentOfM1, $6k/year/p gdp, $66k/year/p GDP.
        <br />
        <br />
        Monica Crowley bond-index-fund v dollar-park shill, “Trump has a [pro
        corporate-profit, hours-worked/utility & anti-monsanto/-finance-growth
        economic agenda, to&nbsp;
        <a href="https://blog.ucsusa.org/doug-boucher/world-population-growth-exponential/">
          make more babies constant 2% requires more significant birth rate
        </a>
        ], lower taxes, less of a regulatory burden, and that the pipelines are
        as open as possible.
        <br />
        Labor shortage as long as virus occurs, and will be 2% target
        ‘inflation.’” Republican Gov: we will have to live with virus, endemic
        nor pandemic, life is meant to be lived, thrive in spite of coronavirus,
        data seems successful, it is no longer about the virus and public health
        but power and control. Not helping worker citizen and business, but
        locking in their power of control over us.”
        <br />
        All about political power on the left, so bingo on that.”
        <br />
        Raise rates multiple times to tamp down inflation. All these things that
        have been kind of helping us out, now higher mortgage costs, higher car
        oatients.” Yeah 3.5k Biden inflation than to 2021, stagflation weakening
        economy with inflation, higher interest rates late 70s early wrench
        economy out of entrenched inflation is very painful thing. Only way to
        get this monstrous inflation under control is raise interest rates.
        Americans don’t understand what is coming their way if we do not get
        inflation under control as soon as possible.
        <br />"
        <a href="https://fred.stlouisfed.org/graph/?g=G8nU">
          I don’t see any light at the end of the tunnel
        </a>
        .” Sean Spicer 12/17/2021 6:30 pm est
        <br />
        <br />
        “People care about how their 401k looks, how many hours they work and
        how much they pay for the same intermediate goods, inflation from lender
        landlord insurer work deficit, that’s why the Democrats are trying to
        pivot.”
        <br />
        <br />
        <Cable
          style={{
            width: "100%",

            height: "400px"
          }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/11OmL8aTfYogU3JOQLEX_PjU97P5h896q/preview"
          }
          float="left"
          title="Chris Salcedo (Newsmax) - sin sacrifice and Rich Lowry"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        <h2>
          “NOT JUST ANY BABY, IT IS CHRIST IN THE FLESH,” SAYS THE JEHOVAS
          WITNESS, SKEEVING FORTUNE SIN SACRIFICE LIKE IT WORKS. TOTALLY
          DELUSIONED. THEY STILL BLOODLET GOATS OUT THERE
        </h2>
        <h1>
          "THE OTHERS ARE ANTI-BUSINESS ANTI-SUCCESS. PROFITS ARE VERY GOOD FOR
          THE STOCK MARKET, HOWEVER, THE INFLATION PROBLEM IS HABPPENING. THAT
          CUTS INTO MIDDLE CLASS REAL INCOMES FOR FAMILY HOUSEHOLDS. GDP GROWTH
          COULD BE 9% GROWTH AND INFLATION 7%. IT WILL BE A BIG PROBLEM FOR THE
          ECONOMY: THE FED WILL HAVE TO STOP BUYING ALTOGETHER." LARRY KUDLOW
          RACKETPROP.
        </h1>
        <Cable
          style={{
            width: "100%",

            height: "400px"
          }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1JttI2c7h8Z_HvZjZjOgTlfgKG45CHreh/preview"
          }
          float="left"
          title="Chris Salcedo (Newsmax) - we need to ween cops off net loss bond profit and fine victimization."
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “Extremists have to prove their outlandish theory, the onus is on the
        changer, not the status quo,”
        <br />
        Never for ppp trust building existing businesses, nor duress in
        voluntary trade and a Tranquil society without competition with
        consumers in price or quality. Private can take market share and
        institute any duress because of free market theory is reasoned by
        perfect equilibrium, but in REALITY, networks and bridge tolls need to
        be target-margined, not nationalized. Taxes need to be truncated on
        production-sales, not free rider mutable 1/4 1/4 1/4 expiring premium
        pentagon pension net loss 10% debt service, 40% njta, 40% debt spending,
        50% nj
        <br />
        <br />
        “Whatever man or woman is on the tip of our spear, so the world knows we
        take our enemies to bear. Democrat socialists and American media turns
        their eye from Afghanistan to beta male pajama boy yes-men. I’m a
        retarded hispanic still who thinks virus kills but it isn’t dangerous.”
        <h1>
          CASH ADVANCE TO $TBT: HUD RENT-SEEKING CAP UNITS OR DAYS, NOT PRICE -
          HOME CONTRACTOR GENTRIFICATION: PROFITS, INTERMEDIATE-LABOR, HOMES,
          BONDS NOR EQUITIES IN INFLATION POVERTY, MEASURE NOR GINI; MEANT TO BE
          PERPETUAL SERFS AND EMPLOYABLE-NON-OWNERS
        </h1>
        "We need the research, they need the money." Why wouldn’t you allow the
        individual researchers do their own thing, instead of funnel the fruits
        of their labor to corporate profits withheld outlays
        <br />
        <br />
        Fenatnyl is used in pnemonia, "let's not wipe them out, but help them
        out." Mind your own fucking business, Dog. What, are you considering
        wiping us out? Have to talk yourself and the genocidal right down? Leave
        us the fuck alone. Stop prohibiting a currency of a pharmacy depositary
        that would require no-scripts and open-source ingredient lists, no FDA
        market-communist Bolling.
        <br />
        <br />
        The messy hair and implausible landlord use landlord work deficit
        diagnosis: schizophrenic-bipolar. I'm fucking pissed, a human thing!
        <br />
        <Cable
          style={{
            width: "100%",

            height: "400px"
          }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1qva7F4s76eUhuIo-g4g5ScJqzy1tBSjd/preview"
          }
          float="left"
          title="Eric Bolling (Newsmax) - we need to ween cops off net loss bond profit and fine victimization."
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        "Give the mental help services money to help cops, in addition to cops."
        If you tell an orthopedic surgeon psychiatrist, “rollover insurance,”
        then they lock you up for 13 days in RiverviewMedCtr Red Bank, NJ.
        "Psychosis of unscientific fear that they have a 13d-retail uuid Anon
        for a reason," according to Chris Salcedo
        <br />
        Simple negligence, criminally liable state victimization beyond torts?
        Speeding is already a law, but that doesn’t mean it isn’t still state
        victimization.
        <br />
        <br />
        “They are a threat, by assumption, so they can use deadly force against
        them.” Try it Brandon.
        <br />
        <br />
        Feelings are normal human things, finance is not: it is spending, not
        trading. invoices, expiring claims, implausible landlord use, repo cycle
        kept down payments, closed source licensure for a
        competitive-depositary, leave us alone!
        <br />
        <br />
        "There is only 3 or 4 people that can do this," sounds like we should
        target margin instead of have expiring claims.
        <br />
        <br />
        <h2>
          EXPIRING CLAIMS NO SURRENDER EULA THIRD PARTY DONEE BENEFICIARY
          CLAIMABLE OF OTHER BUSINESS, AS NON-LABORLESS-DEMAND
          <br />
          did Trump lose? I am a magnetic data, login.gov and content
          addressability&nbsp;
          <a href="https://thumbprint.us/voting">freak</a>. We do know
          non-voters won simply in guber and plurally in presidential. We will
          split both parties ideological-duress.
        </h2>
        "take care to not overwhelm the hospitals, tax and spend ourselves into
        oblivion." Dr Richard McCormick and what about others as to compete with
        consumers? 1/3 public/private, is that not a comparative advantage
        technological advancement net loss? It is useless price inelasticity of
        bid-to-ask, then minopsony for borrowing loiterer government
        gentrification for rent-seeking and nationalized network fees and bridge
        tolls, instead of industry variant multiple of 11/12 jury free rider
        immutable or collective non-flaccid bargain truncated sales tax with
        sewage-police-lawsuit basis, (cash/debt)*income every year back, and
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1asL7BfwWXQx2_lQl7nf662Go4OVfIg09/preview"
          }
          float="left"
          title="John Bachmann Now (Newsmax) - 'GOP aren't constituting market-communism!' he cries. 'You are imagining 1/4 1/4 1/4 premium pentagon pensions 10% debt service, 40% in njta, 40% debt spending, 50% in nj, lender landlord insurer work deficit.'"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “Everything paid after ten years, that it will make inflation in ten
        years, it’s just that, it’s speculation,” trust-building government
        gentrification and free rider mutable monopsony is not. Useless
        price-inelasticity of bid-to-ask is reality.
        <br />
        <div
          style={{
            backgroundColor: "rgb(240,220,180)",
            borderRadius: "15px",
            padding: "10px",
            margin: "10px"
          }}
        >
          “When you can’t get the bill passed, you blame republicans for the
          inflammation.” $12k/year/p debt, $3k/year/p bond, $64/year/p new
          checking, $6k/year/p gdp, $66k/year/p GDP, 5 years doubles hours to
          home when before 1913 gdp/p was nearly constant amidst 3%/yr
          realm/regime/basis.
        </div>
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.serviceCancelingImages
              ? ""
              : "https://drive.google.com/file/d/1jWVrrm9se0Rd_UKO87xs5dKYSLOwi2M3/preview"
          }
          float="right"
          title="National Report (Newsmax) - Marcela Roca MD candidate"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        Cunt, there is nothing socialist about nationalizing bridge tolls nor
        redistribution except from those who didn't earn it like finance
        invoice, expiring claims, implausible landlord use & repo cycle kept
        down payments work deficit competing with consumers. If you were
        actually conservative for per hour price deflation from comparative
        advantage for technological advancement, you would call this
        market-communism.
        <h2>
          1-LEVEL-BOARD MAX_ROYALTY-PROFIT IS WITHOUT THIRD PARTY DONEE
          BENEFICIARY CLAIMABLE&nbsp;&bull;&nbsp;(CASH/DEBT)*INCOME EVERY YEAR
          BACK.{" "}
          {/*"Want to give kids the gift that keeps on giving, get them rare earths, "ammo"*/}
          IT'S YOUR HONOR TO CLASS RESOLVE, YOUR HONOR. AMORTIZE MEDIATION OF
          PRINCIPAL, KEEP TO INDUSTRY-VARIANT-MULTIPLE-OF-11/12-JURY (IVMOETJ)
          FOR FREE RIDER IMMUTABLE/COLLECTIVE-BARGAIN TRUNCATED SALES TAX
          DESIGNATION, AND MINIMAL VIABLE PRODUCT DURESS TO FIT WITHIN TRANQUIL
          SOCIETY AND VOLUNTARY TRADE, STAY OUT OF OPEN-SOURCE-PHARMACIES AND
          CHARACTER ASSASINATION, FOR STATE-VICTIMIZED-GAIN, RACKETPROP.
        </h2>
        <Cable
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/10UzLHCATHl36gXglvJ440aoPiIe_IhpL/preview"
          }
          float="left"
          title="Katie Halper - 'Free assange,' but first slander (Abby)"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        <div
          style={{
            backgroundColor: "rgb(180,240,200)",
            borderRadius: "15px",
            padding: "10px",
            margin: "10px"
          }}
        >
          “This war cost $2.3t and $2t, of course, to the MIC,” but there is
          only $2t checking CurrencyComponentOfM1. Where does that go? velocity
          of m2 minus gdp divided by m2 minus CurrencyComponentOfM1 times
          CurrencyComponentOfM1 $6k/year/p, GDP $66k/year/p
        </div>
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1aXtSwUbmlEz-S6euO7QIDhHCE9UKJaYK/preview"
          }
          float="right"
          title="Katie Halper - 'Free assange,' but first slander (kevin)"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “'If he is extradited he is going to kill himself.' They don't say he
        will get medical or psychiatric treatment, they give him a prison
        doctor, whatever that means.” Did he tell you this? Who cares? It is a
        human thing to do. They will lock you up in New Jersey for 13 days for
        saying rollover-insurance to an orthopedic surgeon, and give Paul
        Krugman saying the same thing in a half-baked way. “It is a legally
        binding contract lest war power with the United States to not make net
        loss bond profit on a lifetime prison sentence for this Mendoza
        extradition. May not be criminal if jailors only funded by truncated
        sales tax. $14m seized state victimization free rider mutable monopsony
        & gentrification. That from private is hard enough. lender landlord
        insurer net loss work deficit.”
        <h1>“This is not a partisan statement, this is a literal fact.”</h1>
        Usually microeconomics says consumer discrepancy-of-propensity causes
        prices, but if 5%/yr home prices is a second order effect after 7.5%/yr
        bonds, then producers of retail goods evidently withhold raising price
        until they need it, integrally.
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1TqPnQf1tlCvDzL7QhQoTQBJJIp3ZkDQA/preview"
          }
          float="left"
          title="Katie Halper - 'Free assange,' but first slander (richard)"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “Prisons are notoriously bad to be relied upon for any sort of
        treatment.” Why are you so obsessed with mental health like sadness
        isn’t natural? Ptsd moral injury from the drone program Daniel Hail.
        <br />
        <div
          style={{
            backgroundColor: "rgb(240,180,200)",
            borderRadius: "15px",
            padding: "10px",
            margin: "10px"
          }}
        >
          2 week closed discovery as anon uuid for 13d-retail executions
          <br />
          Tamper proof dns grid & convict intranet, end to end encryption on
          device.
        </div>
        <br />
        Political prisoner, or perpetual serf & employable?
        <br />
        <h2>
          <a
            style={{
              shapeOutside: "rect()",
              float: "left",
              width: "max-content",
              padding: "0px 10px",
              fontSize: "20px",
              fontFamily: "'Pacifico', sans-serif",
              color: "rgb(230,230,255)",
              backgroundColor: "rgb(32, 22, 11)"
            }}
            href="https://30under5.us"
          >
            30under5.us
          </a>
          population before 1913 3% and gdp/p nearly constant,
          <br />
          <span style={{ fontSize: "9px" }}>
            lest repo-cycle keep down payment options to buy sold on estimate of
            intermediate material and labor intent
          </span>
          <br />
          <br />
          <span style={{ fontSize: "16px" }}>
            expiring claim settlements at down payment with outstanding scoped
            out estimates is still due upon the contractor.
          </span>
          <span style={{ fontSize: "16px" }}>
            NJ consumer fraud act is fraudulent option to buy, sold
          </span>
          <br />
          <a
            style={{
              shapeOutside: "rect()",
              float: "left",
              width: "max-content",
              padding: "0px 10px",
              fontSize: "20px",
              fontFamily: "'Pacifico', sans-serif",
              color: "rgb(230,230,255)",
              backgroundColor: "rgb(32, 22, 11)"
            }}
            href="https://thumbprint.us/payments"
          >
            thumbprint.us/payments
          </a>
          <br />
          3m/yr+ 40m legal 6m illegal, good for labor shortage. finance is first
          order effect, however, by lender landlord insurer work deficit, fry
          yourselves like bacon
        </h2>
        <Cable
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1e_PYRIN4UkzoCFqMs--y4-lojfMLvqog/preview"
          }
          float="left"
          title="Spicer & co (Newsmax) - some shill hindi saveface doctor"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        <div
          style={{
            backgroundColor: "rgb(200,180,250)",
            borderRadius: "15px",
            padding: "10px",
            margin: "10px"
          }}
        >
          government recommends not the J&J fetal cell line, go for excess
          antibody mRNA-sporing-graft, oncogenic-dysregulation prone for
          immunocompromized blood disorder patients as well as every human
          being, for a 'pandemic' of no significant age standardized excess
          deaths, per cohort size, boomers 56m/40m 2020-2030 75+
        </div>
        <br />
        Shoprite didn’t want to fget sued for replacing the workforce with
        machines, and that’s why they racket prop covid, to excuse layoffs,
        although this is not with market standing of course (competing with
        consumers of intermediate-labor), just an academic exercise.
        <br />
        <br />
        Covid is a very dangerous disease, you think it doesn’t require cell to
        reproduce, at first? Is an evolutionary trait of our cellular anatomy?
        What is the taxonomy, imbecile dr saveFace? Show the vivo not vitro
        retroactive in court
        <h1>
          lender, landlord, insurer work deficit; non-exclusive byproduct does
          not all-inclusive cause, make
          <br />
          <Cable
            style={{ height: "320px" }}
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1rEmn7j3V0_N3vAiauhNe0wI7xX2tabbt/preview"
            }
            float="left"
            title="American Agenda (Newsmax) - healthcare gentrifier John Byrnes Education Firector Concerned Vegterans for American fiefdom of asset valuations not in inflation"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          <span
            style={{
              fontSize: "12px"
            }}
          >
            "community care choice card," STOP FUCKING insurance net loss of
            veteran heathcare, it is not concurrentable and not conservative to
            have such a collective loss. "care they need and care they obviously
            use," "we wen't back to the mat, and front run their doctors, c
            cfora.org"
          </span>
          <br />
          ms matches paralytic polio as acute flaccid paralysis class, and
          sewage+nutrition correlates with lifetime mortality since 1775.&nbsp;
          <a href="https://humanharvest.info/polio">YOU HAVE FIXED NOTHING</a>,
          U.S. Census Bureau and I PROJECTED this "pandemic," by population
          growth alone
        </h1>
        "You’re not going to know you have it if you aren’t tested. When you
        aren’t sick." So what the fuck are you complaining about. Virus, the
        only “being” in the world without taxonomy beyond a cell, “it only comes
        out.” Bacteria is the exclusive cause of the non-exclusive artifact.
        Let’s get back to an all-inclusive symptomatic regime.
        <br />
        <br />
        “Why are we freaking out now, because it is a new variant, why are we
        locking down or allowing businesses to discriminate without
        jury-permitting? “It was the delta that was the deadly one.” It is not
        part of the Tranquil and voluntary trade minimal viable product. It only
        comes out, so it cannot be the cause of death. Deaths have been
        insignificant thru “Delta,” and the other D614G cellular debris.
        <br />
        “You can deactivate a virus, you cannot kill it,” Jeff, have you fucking
        made virus with an&nbsp;
        <a href="https://youtu.be/Weqb9KrQ-TU?t=21">
          un-bacterially-infected cell
        </a>
        , yet? Douche
        <br />
        <br />
        If you do this, and look at that, the red circles go up into a
        “protective range.” But it still isn’t vivo, is it? It's just a
        warning-mechanism byproduct or artifact.
        <br />
        <br />
        "It works! Is that they found in this study." There is a null hypothesis
        over byproduct for cause, as missing forrest for trees. Symptomatic
        credential is all-inclusive of non-exclusive. “Access to affordable and
        regular testing,” is not provided by front-running demand for not only
        expiring claims, but propensity non-negotiated.
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1Y55slELkbZM6bZg49CWtDycwfHgMlrzP/preview"
          }
          float="left"
          title="National Report (Newsmax) - Applebees removes non-vaxx from dining: Carl DeMaio, Jenna Ellis, Jesse James Duff"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “Military, now being discharged, over their vaccination status,” Emma
        Reckenburg
        <br />
        “Virus is the reason for all government deficiencies.”
        <br />
        <br />
        "donate to nursing home victims for Andrew Cuomo's 'tightbacks,' and the
        nursing home deaths that followed." It was likely terror, the only
        people I knew that died were lovers, they fucking passed in the same
        week after telling them they are going to. You choose when you go,
        naturally. We were short&nbsp;
        <a href="https://humanharvest.info/polio">700k/year+ ON TIME</a>
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1OFc89bvPS-B5BJU9MTf-nyoPtHrKozTH/preview"
          }
          float="right"
          title="National Report (Newsmax) - Applebees removes non-vaxx from dining"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        "Rising crime, like a patron refusing to leave Applebees when failing to
        show a vaccination card." It is illegal to discriminate without
        jury-desistation and permit for duress in minimal viable product. There
        is poof virus is a byproduct of bacterial infection. This "crime" is a
        crime.
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1YeVqtSMnulM3lCz18UkLt62Nrg1M923m/preview"
          }
          float="left"
          title="Spicer & co (Newsmax) -  border control"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “They were already deported or have a criminal record, so they try to
        avoid the apprehension process. They also seek to trade without credit.
        So we cannot have that exclusion from the market, as fat piggies on the
        article 4 racketprop out of scope receipt and outlay abuse. You’re a
        fucking pussy Drug smugglers and human traffickers, hundreds compared to
        hundreds of thousands caused by login.gov convict intranet repeat
        offender malfeasance, because they know it is one step away from end to
        end on device tamper proof grid dns."
        <h1>
          “At the end of the day, people vote with their pocketbook, and they
          have less than they did when president trump was in office.”
        </h1>
        "'[$2t covid bill passes, and we learned we should have gone even
        further, we are going to hr1 fed gov takeover of election process to
        stoke majority already in place, rcv 50% plural majority forelorn],' for
        what?"
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1KgA8YatW3flwtNFM3-CYKlWTJBzPK2mP/preview"
          }
          float="right"
          title="Spicer & co (Newsmax) - "
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        <div
          style={{
            backgroundColor: "rgb(180,250,220)",
            borderRadius: "15px",
            padding: "10px",
            margin: "10px"
          }}
        >
          1/3 public private $12k/year/p debt, $3k/year/p bonds, $64/year/p new
          cash currencyComponentOfM1 checking, $66k/year/p GDP, $6k/year/p gdp,
          mv1===mv2==GDP, but m2 is bonds + currencyComponentOfM1?
        </div>
        <br />
        "Green new deal program so obsessed with global climate change agenda
        because they have a naive belief we can work with China on Climate
        Change, I know they do not give a rif for it. Lighter military
        resistance, is why there is more hostility[, on the horizon excess than
        happens every day already].
        <br />
        third party beneficiary donee claimable force majeure implausible
        deniability beyond free rider immutable && article 4 scope of outlays
        AND receipt-method. (NOT BONDS, like 10% debt service feds and 40% njta)
        <h1>
          House cost mortgage; 1-level-board max-royalty-contracts will replace
          debt "investments."
          <br />
          Socialists don't market-communist profits, our leaders are popular not
          principaled, only desistation, conviction and permit for commerce
          beyond minimal viable product. america first is not taxing and job
          barriers nationally, nor comparative advantage.
        </h1>
        fuck your, "sticking the landing," you have productivity upsidedown:
        price deflation per hour; rot in hell.
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/10lEOqnzrm09WCfx9JheTFgLxlDLkvqKF/preview"
          }
          float="right"
          title="Spicer & co (Newsmax) - Kelly Tshibaka Alaska Senate candidate"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        <h2>
          1/3 public/private, look after&nbsp;
          <a href="https://laborequity.org">savers</a>', tax payers have been on
          vacation. taxes outside the market is pure price inflation, and beyond
          multiple of 11/12 industry variant jury free rider mutable collective
          non-flaccid bargain designation;
        </h2>
        lest expiring or corporate profit account withheld or taxxed income
        ooutlays twice is a net loss, or options to but sold as down payment by
        estimates of changing material, labor and regulations;
        <h2>
          and other free rider immutable with basis sewage police lawsuits 3%
          under $2k max $60 I estimate, no gift nor non-production-tax, nor
          income or large item flat tax, but a flat flat tax: truncated.
        </h2>
        Consumer Fraud Act in NJ IS fraud and racketprop itself. Put every
        industry on the jury. But how is the law so messy you can't allow us to
        public review your acquittal until one piece of non-character "evidence"
        had.
        <br />
        <br />
        Does it make sense to have stimulus when immigration at record highs,
        work requirements for government benefits, it helps childcare providers
        with loads of student dent. Bailout and collateralized launders service
        to keep appraisal fixed.
        <h2>
          "who knows when things will be back to normal, don't want to offend
          the commies, they are going to run out of alphabet and have a run on
          bonds for cash' standing." Morgan Stanley lender work deficit
        </h2>
        <Cable
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1ANWiJjMfpBx3PahYpb1XkKwBSEhBYCIY/preview"
          }
          float="left"
          title="Cortes and Pellegrino (Newsmax) - Rich Granell's taxonomy lab leak matches one of hundred of thousands non-exclusive artifact asymptomatic instead of all-inclusive symptomatic regime naivity"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        "It's a virus, we know everyone is going to get exposed to it. We think
        the virus is an evolutionary trait, since it requires cell to produce,
        and cells have evolutionary taxonomy through protistology, and
        virus&nbsp;<a href="https://qr.ae/pGqBA8">only comes out</a>. We aren't
        going to stop the virus. We will find out the true origins of the virus,
        eventually."
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1TF2nLbWvCP2ErKiGXYksl1mEXsqbDgec/preview"
          }
          float="right"
          title="Stinchfield (Newsmax) - NFL vaxxed still produce virion"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “NFL is mostly vaccinated and positive, hope they get well,” stinchfeild
        saying you should worry about asymptomatic covid 🤣it only comes out
        doofus, it is byproduct of bacterial-infection
        <br />
        <br />
        "Does it make sense to have stimulus when immigration at record highs,
        work requirements for government benefits, it helps childcare providers
        with loads of student dent. Bailout and collateralized launders service
        to keep appraisal fixed.
        <br />
        5.3m worldwide is 50m/yr short expected from population growth a
        lifetime ago.
        <br />
        They didn’t even know they are sick that is why they need to get this
        testing done. A lot of cases are asymptomatic. So you mean it isn’t an
        indication of illness
        <br />
        Fuck off hypertension 9 days after the vaccine, onset of excess antibody
        production. 4 people here is your money back, you gotta turn around.
        testing, then infusion PCR, then antibody testing. When I told a psych
        in NJ at riverviewMedCtr that their income is fraud and should be
        rollover-insurance, I got strapped to a chair, lied about kicked and
        punch trying to elope from what i thought was an orthopedic surgeon
        appointment, they plunged the blood test into my nerve 3 different
        places, I'll do it on my own time, douche bag
        <br />
        Die in a hole
        <br />
        Viruses are for people that spread it."
        <br />
        <br />
        <Cable
          style={{
            height: "230px"
          }}
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1mjXoF0xU96sIZG2_8Udkflfe-XeJQa7L/preview"
          }
          float="left"
          title="GBNews - conservatives vs torries on debt-based-investments vs 1-level-board max-royalty-contracts"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “Conservatives lost their reputation on the economy,” “Tories lost their
        reputation on the economy, as you say, with interest/inflation soaring
        through the roof.”
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1xLcJCA-DOP-_1-jxuFPU8j2pE982KdaE/preview"
          }
          float="right"
          title="Eric Bolling (Newsmax) - Quisha King Co-Chair Moms for liberty"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “It is marxism, we know what it is it is what it is we all know what it
        is.”
        <h1>
          Marx wants industry various jury science, where are you getting
          business rights over consumers in duress beyond minimal viable
          product? dig yourself a ditch and crawl in
          <br />
          <style style={{ fontSize: "9px" }}>
            build back welfare forever, that's where the money comes from. not
            tax payer funds, but 40% debt spending. nationalizing network fees
            and bridge tolls, closed source uspto for Fauci Beagle Craft Beer.
          </style>
          <Cable
            style={{ height: "260px" }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1jqagH5SKLYkIUESRWnAgdPvnmCD9_Vqo/preview"
            }
            float="right"
            title="World Economic Forum (Facebook) - The state will 'step in' to cover half of household energy bills, instead of banning invoices, for lender work deficit and price fixed"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          i will commit perjury under duress from state victimization, fuck off,
          that is what a plea bargain is.
          <br />
          <br />
          That is called price fixing, lender work deficit. Let the prices fall
          and for energy networks, target margin. Can certainly ban invoices
          upon third party beneficiary law
          <span style={{ fontSize: "9px" }}>
            republican funding scheme with your tax dollars, not even testing
            immigrants for "muh jobs" like union trust building barrier to entry
            for labor shortage second order effect after 56m/40m 75+ 2020-2030.
          </span>
          “Target,” is a verb, “margin,” is an accounting term, of legal
          grounds, as a “network,” in microeconomic reason, perfect equilibrium
          infinite producer and trade, not spending nor &nbsp;
          <a href="https://www.investopedia.com/ask/answers/031815/why-are-there-no-profits-perfectly-competitive-market.asp">
            laborless-demand
          </a>
          .
          <br />
          <br />
          “Third party donee beneficiary,” is a legal term that I am admittedly
          trying to&nbsp;
          <a href="https://law.justia.com/cases/california/supreme-court/3d/11/394.html">
            make more precedent
          </a>
          <span style={{ fontSize: "9px" }}>
            <Cable
              style={{
                height: "440px"
              }}
              onError={handleScollImgError}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1Byf7lrChYlx_HkI8p6WSFl6vmI2RTJq3/preview"
              }
              float="left"
              title="Dennis and Judy fill-ins (NJ 101.5) - Chase bank ad"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            “Teach your kids good money habits.” coming from a fractional
            reserve bank that contributes to impossibility $12/year/p debt,
            $3k/year/p bonds, $64/year/p new cash
            <br />
            "Give money that has true meaning, that is going to buy life saving
            care, say goodbye to your newborn because he is not going to make
            it. Don’t haggle with doctors with child life services. One of the
            amazing thing is they will not turn away children because their
            parent’s cannot afford medical care, instead of bringing down prices
            without discrimination, be the consumer friend, family, happy-face,
            nor checking or asset account, even if we don’t; count it in
            inflation like forever employable."
          </span>
          "Are they going to run on a better market, or lower inflation? Raising
          taxes may have a deflationary tact as well, the spending and liquidity
          they pump intot the market. the best stimulous plans is the vaccines.
          I mean, with the variants, vaccines prevent disease and death, allow
          you to go to dinner, maybe make treatments more available. STAY THE
          FUCK OUT OF PHARMACY PIG
          <br />
        </h1>
        raise rates will tamper inflation and increase cost of borrowing for
        businesses (that isn't income from consumers, when compounding of on
        general income and gifting. Trade, no spending. Wineberg is a market
        communist, drop dead!), inflation is transitory but it keeps growing and
        growing and growing, tax cuts, it is bewildering how much stuff is in
        here. people carrying them out were pretty normal," Charlie Gasparino
        <br />
        <br />
        <Cable
          style={{ height: "440px" }}
          onError={handleScollImgError}
          img={true}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.dropbox.com/s/018s7f6k3e8405a/Screen%20Shot%202021-12-16%20at%205.28.44%20PM.png?raw=1"
          }
          float="left"
          title="blm riot vs jan 6 numbers comparative innocence"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “Lift everyone up, take care of everyone across the city, but that they
        are safe. Message to every elected official to be responsive to those in
        the city. …give them the tools. Everyone has to be loud, louder than
        before, can’t have half the team running left and half the team right,
        you will lose 3 yards every time. Let’s take the team where in Neds to
        go. New York does bounce back. Let’s colonialize Greenland.” Dermott
        Shae
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1cLLyItHh3EcQMup6habyRWqaGSLF9Y7t/preview"
          }
          float="right"
          title="mortality projection 2015- plandemic"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “Letting everyone out of jail, and then preventing people from going to
        jail, overnight graffiti, working with kids, delivering food during
        covid, while they were sick, couldn’t take a day off because they
        couldn’t, but we look at the murder of George Floyd and the terror that
        came out of it. Small group hijacking a worthy cause. Attacked _, not
        perfect, we have to correct, I’ll _ that.
        <br />
        The deplorable amount of people that turned out to vote, we need to
        stand up and change the tide, the left are afraid they are going to get
        challenged. We need people to say enough his enough. WE ARE NOT GOING TO
        TAKE IT ANYMORE. Laws that are literally designed to take tools away
        from police. We have worked to lower incarceration. Seeing as a model
        for the whole county. You get to claim good but not chaos.
        <br />
        Based on a threat to public safety, a threat to their fellow human
        beings. Drop dead socialists, though.”
        <Cable
          style={{ width: "100%" }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1E-CpXiM_1zEzSXfvV6TmG6z-ns7_lSRf/preview"
          }
          float="right"
          title="weed wallet gateway currency"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        <button
          style={buttonstyle}
          onClick={(e) => {
            e.stopPropagation();
            this.setState({
              suppledemand: !this.state.suppledemand
            });
          }}
        >
          <h3>Supply & demand</h3>
          <br />
          profits are the mother's milk of stocks, inflation that of the same
          until intermediate-labor is demanded by labor again, without
          rent-seeker
        </button>
        <br />
        {/*<div
          style={{
            zIndex: 1,
            display: this.state.suppledemand ? "block" : "none"
          }}
        >*/}
        <a href="https://fred.stlouisfed.org/graph/?g=H5XB">supply chain</a>
        &nbsp;problems by&nbsp;
        <a href="https://fred.stlouisfed.org/graph/?g=FSwQ">damage</a>
        &nbsp;from&nbsp;
        <a href="https://teapharmacy.party">lender/landlord work deficit</a>
        <br />
        <h2>
          assigning my mom as my disability payee because she has collateralized
          debts, that loitering borrower bitch
        </h2>
        <a href="https://fred.stlouisfed.org/graph/?g=JHaU">$12k/yr+</a>,
        $32/day+, $200k total debt per person. $3k/yr+, $8/day+, $60k total m2
        per person. $60k/yr+, $.18/day+,&nbsp;
        <a href="https://fred.stlouisfed.org/graph/?g=JHaE">$6k total</a>
        &nbsp;checking CurrencyComponentOfM1 per person means that gdp is made
        high by debt made and paid for, like nannying eachothers kids' to boost
        jobs numbers
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1sKoqq8bnYagXwXJN1JtZ2OeibhjHLbo9/preview"
          }
          float="left"
          title="Spicer & co - CBO: House-Passed 'reconciliation' Bill Will Amnesty 6.5m illegal Aliens"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        <br />
        <a href="https://humanharvest.info">Lawfully present</a>&nbsp;in
        actuality (1m/yr, 6m actualizable), or else you are merely prohibiting
        trade. If you want to solve the&nbsp;
        <a href="https://fred.stlouisfed.org/graph/?g=Gkvt">supply</a>
        -chain-
        <a href="https://fred.stlouisfed.org/graph/?g=Hc1R">crisis</a>,
        immigrate-working-age
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1YKrOjnMBtzPp989vm35ueO1E8tm1nF7B/preview"
          }
          float="right"
          title="Spicer & co - Braun & maternity doctor senator"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        Humming on high gear, spending sugar high is only 20% of normal fed/debt
        spending and 8% of total debt /wall st
        <br />
        <br />
        <br />
        <div style={{ height: "min-content" }}>
          <TwitterTweetEmbed
            style={{ float: "left", width: "300px" }}
            key="1425460613711605760"
            tweetId="1425460613711605760"
          />
        </div>
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1rMg7pGn2m2yCO-cPOilJtUWwyMwSsCB0/preview"
          }
          float="left"
          title="Daily Caller - Republicans want education"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “Republicans want education,”
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.youtube.com/embed/4hrMuZEGGmk"
          }
          float="right"
          title="Dick Morris (77WABC) - intent for accounting home sales and bond last trade outside of inflation and gini, but inside net asset value"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “Giving people work and job skills is the way to bring people up, but
        yes if you commit a crime, you need to do your service,”
        <br />
        <br />
        expiring claims, invoices, down payments kept upon repo-cycle and option
        to buy upon estimates of materials and labor, dollar-share being the
        most perfect durable-good without maintenance requirements rent-seekable
        operating cost for contractors racketeered and with autonomously-misled
        duress in minimal viable product and truncated sales tax free rider
        immutable sewage police lawsuits by jury-permits of ALL industries
        represented as the ONLY sequestor nor cause for removal of and from the
        jury
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1ioILc5Y8uIatE5HwcawL1tj9qjz-t_0O/preview"
          }
          float="left"
          title="Eric Bolling (Newsmax) - slandering the bottom-left as not being conservative while counting expiring claims and invoices as withdrawable income, but not inequality (gini is half home-prices and quarter of debt-outstanding, 60/40 private/fed spending 1/4 pension 1/4 premiums 1/4 pentagon free rider mutable tax/debt-spending 60/40)"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “Conservative,” asinine examples of agenda driven reporting
        <br />
        <br />
        "Omicron is contageous, but far less deadly, doesn't stop people from
        lining up for a "clinic. NY and NJ have seen heaviest lockdown measures,
        vaccinations, and&nbsp;
        <a href="https://www.ecdc.europa.eu/sites/default/files/documents/Methods-for-the-detection-and-identification-of-SARS-CoV-2-variants.pdf">
          largest omicron positivity
        </a>
        ." They only&nbsp;
        <a href="https://www.cdc.gov/flu/about/professionals/antigenic.htm">
          pick out of hundreds of thousands
        </a>
        &nbsp; of potential sequences, likely that&nbsp;
        <a href="https://www.labcorp.com/coronavirus-disease-covid-19/covid-news-education/guide-covid-19-variants-what-you-need-know-about#:~:text=Because%20our%20tests%20target%20the%20SARS-CoV-2%20nucleocapsid">
          exist before discovery by guessing
        </a>
        . Eric Bolling to Mike Carter, "I dont know, Fauci doesn't know. Yes, it
        is infectious, but is it deadly? only time will tell." I know it,
        "requires cell to replicate," that means it is byproduct, not cause. You
        haven't&nbsp;
        <a href="https://youtu.be/Weqb9KrQ-TU?t=21">
          created virion with cell without mitosis nor bacteria
        </a>
        .
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1WhYJcBJ6qjhiDGVnBwUiPZuwTTjmXByb/preview"
          }
          float="right"
          title="Eric Bolling (Newsmax) - slandering the bottom-left as not being conservative while counting expiring claims and invoices as withdrawable income, but not inequality (gini is half home-prices and quarter of debt-outstanding, 60/40 private/fed spending 1/4 pension 1/4 premiums 1/4 pentagon free rider mutable tax/debt-spending 60/40)"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “Can’t vaccinate straight, don’t mandate, but it still is the cause of
        death, can be suppressed by antibodies and I respect Article 4,” says
        the republican and libertarian. Saver knows prevalence does not make
        cause, and this case it doesn’t but byproduct of bacterial-infection,
        and age standardized excess deaths doesn’t account for 1.2m/yr+ 75+
        2015-
        <br />
        <br />
        <h2>
          There is nothing social about nationalization, nor reappropriation of
          laborequity.org&nbsp;
          <span style={{ fontSize: "9px" }}>
            (job-work per hour price-deflation, isolated IP and profits in best
            case as price equillibrium by infinite producers, must regulate to
            emulate)
          </span>
        </h2>
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1xTa9hFKSJEdzsfx3Fn4_aMDGSIL6OYpZ/preview"
          }
          float="left"
          title="American Agenda (Newsmax) - Heritage foundation justice deserved undefined and useless, just net loss profit per incarceration by bonds instead of truncated sales tax"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “The justice they deserve,” like state victimized tort in fines and
        expiring claims inflation? That is not deserved and I was removed from
        jury duty for having this idea about non-rollover insurance third party
        beneficiary law by competing with consumers in a false bid pool,
        laundering the false bid from your consumers and employer
        <br />
        <br />
        “Inclusion,” as it relates to “just capital,” broadness, of accrual and
        false bid pools (expiring-claims), by legal-nomenclature is not a good
        thing
        <br />
        <br />
        <a href="https://teapharmacy.party">
          opening the licensure-source and border
        </a>
        &nbsp;can solve the lender-work-deficit-supply-chain-crisis,&nbsp;
        <a href="https://humanharvest.info">prevalence does not cause make</a>
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1zaKeY475sf9FRuLMnbAVAEvUo4da6Rni/preview"
          }
          float="right"
          title="American Agenda (Newsmax) - (R) Roger Williams on the debt ceiling"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “I’ve been up here 12 years and I’m one of the few, the problem isn’t
        spending but cash flow,” do you mean investment?
        <br />
        <br />
        “No private sector component” is trust-building. Why can’t bridges have
        tolls and broadband+ oil-pipes have margin-targeted consumer-surrogates
        without rent-seeking government gentrification (for requiring
        maintenance) beyond article 4 scope of receipts and outlays, non-voters
        detesting the wall st Pharma cop oligopoly of simple minorities with
        their own ideological duress? Money taxed just raises price for
        intermediate materials and labor.
        <h2>
          “We are the party of less government and Main St. America,”&nbsp;
          <span style={{ fontSize: "9px" }}>more like market-communist</span>
        </h2>
        <br />
        Home loans by the army actually does affect our ability to be suppliers
        (gentrification) and launders third party beneficiary from their
        customers and employers
        <br />
        <br />
        The radio talk shows are all sponsored by the home financing and
        insurance companies
        <br />
        <br />
        “Donate to shelter to help solve homelessness in LA and around the
        country.” John Bachmann. Money doesn’t do anything, except bailout
        egregious lenders ({">"}5 units or 30 days) and allow them to keep
        operating like this
        <br />
        <br />
        the strong economy as defined by congress is price*hours, and if
        bond-index-funds is not in gini, albeit valued beyond amortization
        capacity in third party beneficiary law counterfeit, Powell will not
        consider its change in effect from his policies:
        poorness=(poverty/equality), which doesn't account for home-prices 11/1
        gdp/down unless it benefits them in withdrawal. Not even btc can stop
        fractional reserves than without third party beneficiary laws enforced
        in invoices, false bid pools (expiring claims), implausible landlord use
        and repo-cycle keeping down payments
        <br />
        get cops off bonds and state off victimization by fines:
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1f71scLubT_A2ps52OmtkwXmA_ELkw7Wc/preview"
          }
          float="left"
          title="John Bachmann Now - More Marxist anti-credit slander"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        the right wants to repo-cycle keep down-payments and loiter as
        borrowers, stoking lender-work-deficit, the left wants to bailout or
        cancel. Third party beneficiary law requites cash:debt*income thru
        history (amortization of reverse dont'cancel or correcting collateral
        fair value to purchases without debt:cash inelasticity 4400%, inflation
        102%)
        <br />
        <br />
        paying my mom my disability because she has collateralized-debt and they
        cannot touch mine
        <br />
        <br />
        free market communism means no rent-seeking in public nor private.
        public parks is perfectly durable, all else needing maintenance is
        rent-seekable, free rider mutable is reason to keep govenrment to sewage
        police lawsuits and not broadband/bridge-tolls rent-seeking instead of
        target-margin consumer surrogate & jury-for-business and free rider
        immutable truncated sales tax designation. invoices, false bid pools and
        implausble landlord use are theft
        <br />
        <br />
        “For a good big truck you are going to spend $70k easy,” don’t you
        realize you are promising anothers’ money and loitering on the
        collateral?
        <br />
        <br />
        October 2019 respiratory outbreak of asymptomatic-testing vs
        cases,&nbsp;
        <a href="humanharvest.info">
          insignificant hospitalizations & deaths year-to-year
        </a>
        <br />
        "decentralization is to incorporate everyone, whether being corporate or
        individual," says Fetch.ai CEO Humayun Sheikh “Financial products make a
        lot of money, very useful, transfer money across, search and discovery
        of [shipping].”
        <br />
        <br />
        "Demand of maple syrup is up 20%," John Prado ("commercial"-banker),
        because of debt-spending, public and private, why does that not become
        checking, anyway? Demand by more people is actually price-deflating on
        net because they need to work for their funds
        <br />
        <br />
        Options volume on ask or bid thru history would map holdings, like “the
        market” sees in retail trades (non 13d) hypocrisy is illegal by making
        laws for some but not others to disclose, let alone Amendment 13 being
        involuntary for being not part of a minimal viable product of trade
        except for spread making (front-running and hoarding by “market-makers”
        “in any direction”)
        <br />
        <h2>
          lenders, insures, landlords, free rider mutable government, and
          competing with consumers lagging work
        </h2>
        "Supply lagging demand," implying suppliers aren’t demand (labor isn’t
        demand) doesn’t need government free rider mutable tax 40%,
        debt-spending 60% and 10-40% debt-service fed-state, it needs target
        margin consumer surrogate in private investors, with invoices and
        insurance banned for settlement instead of breaking third party
        beneficiary standing and grounds
        <br />
        <button
          style={buttonstyle}
          onClick={(e) => {
            e.stopPropagation();
            this.setState({
              racketeeringDoneeClaimables: !this.state
                .racketeeringDoneeClaimables
            });
          }}
        >
          <h3>racketeeringDoneeClaimables</h3>
          <br />
          third party beneficiary donee as per finance/rentier,
          landlord/lender/insurer work-deficit: invoice,
          expiring/estimated-material-&-labor/plausible undeniability of
          forseeable force majeure (fract-reserve-in-contract) claims (fixed
          with cash:debtincome thru history, truncated sales tax free rider
          immutable sewage police lawsuits multiple of 11/12 industry variant
          jury, 1-level-board max-profit-royalty), implausible landlord use
          (fixed by cap unit or days, not price), &
          repo-cycle-kept-down-payments, loitered for same price elastic
          intermediate good and laundered.
        </button>
        <br />
        {/*} <div
          style={{
            zIndex: 1,
            display: this.state.racketeeringDoneeClaimables ? "block" : "none"
          }}
        >*/}
        False bid pools or accrual
        <br />
        <br />
        <h2>
          why do you count&nbsp;<a href="https://30under5.us">homeless</a>
          &nbsp;as&nbsp;
          <a href="https://brainscan.info">mentally-ill</a>?
        </h2>
        "mentally-ill are those whom are committing crimes too," it is an
        opinion or due to economic policies (10x more hours per home since when
        John Catsimitidis was working-age, not from population growth as gdp/p
        was nearly constant before central banks enabled exorbinant amounts of
        debt)
        <br />
        <br />
        "Bail bonds is nothing at $1k, basically letting this criminal off
        free," Rep Pete King racketeering criminals for bail bonds instead of
        keeping people when evidence is had. Saver wants the third option of
        no-delay acquitting without evidence
        <br />
        <br />
        I went for disability for my knee but they gave it on the basis of messy
        hair, as a mental disorder. Mental disorder is diagnosed by opinion and
        is primary evidence to social security now before hole in the leg
        <br />
        <br />
        Infrastructure to the right is paying back the debt instead of reversing
        for impossible and third party beneficiary, they count costs 40-50% debt
        spending as costing tax-payers when it if funded by share-split of
        Savers&nbsp;
        <span role="img" aria-label="white-circle">
          ⚪
        </span>
        . Proponents of trial lawyers for pick & choose laws, illegal precedence
        by comparative law, over class solutions
        <br />
        <br />
        Price-fixing is misappropriation, if producers are infinite, but the
        landlord still has a work deficit unless you cap per unit (5) or days
        (30)
        <br />
        <br />
        The right and left wing media think antibodies stop illness rather than
        just their basis rate. Saver is bottom left, where government nor
        business has authority beyond jury-permitting consensus of&nbsp;
        <a href="https://humanharvest.info">the presentable facts</a>
        <br />
        <br />
        <Cable
          style={{
            maxWidth: "100%",
            width: "400px"
          }}
          onError={handleScollImgError}
          src={
            this.state.noSpotify
              ? ""
              : "https://open.spotify.com/embed/episode/3MVGr23zEtyaKeIc3S5nAi?t=3247782"
          }
          float="right"
          title="Spotify - Philip Goff on Joe Rogan"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        Matter is was consciousness does
        <br />
        Causal skeleton charge mass
        <br />
        Physical science tells you what chemicals effect but not their vivo
        watched
        <br />
        “Consciousness fills the mathematical structures,” it depends on what
        you define as math, with basis rate fallacy or not.
        <br />
        <span
          style={{
            backgroundColor: "rgba(200,100,150,.5)"
          }}
        >
          “Math is quantitative, not qualities, smell of coffee or red of
          sunset, leaving our descriptors leaves out consciousness itself, we
          shouldn’t be surprised it doesn’t because In Galileo’s error math was
          going to be the language of science, but not the philosophical work
          earth around sun guy did to get there. …Qualities aren’t out there in
          the physical world, but the consciousness of the observer. …All is
          left is the variables can be captured in geometry.”
        </span>
        &nbsp;Assumes apples and oranges can be multiplied in gdp though dollars
        should be fixed for federal inventory as certificates.&nbsp;
        <span
          style={{
            backgroundColor: "rgba(200,100,150,.5)"
          }}
        >
          "If we want to bring consciousness fully into science, we need a new
          world view, we need to find a new way to to bring together what
          Galileo separated, we need to bring the qualitative domain [means] of
          consciousness and the quantitative means of science panpsychism.”
        </span>
        "descriptive neuroscience cannot express red to a blind person, entails
        an explanatory. ...Cannot capture those qualities in a purely
        quantitative language, but panpsychist v materialist..." language is
        only quantitiatively wrong when you multiply units together like a
        dumbass
        <br />
        <br />
        you really don't understand reason as cause without interview as vivo
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/164Nd8ipjyivj26jP7pGKDFqQCCP_uqSb/preview"
          }
          float="left"
          title="GBNews - Mark and retiring conservative, 'on his way out'"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “Those who’ve lived under marxism, they know what [market-]communism was
        like.” Marx never emulated an infinite producer reason in a finite
        producer world.
        <br />
        “Once a country has lived under marxism, they become passionately
        against marxism thru a time, to discover how marxism really is.” Marx is
        more conservative for labor being exclusively labor without
        market-communist profits withheld, outlay why don’tcha
        <br />
        <br />
        roger christian morathy
        <br />I studied Propoganda at Johns Hopkins University
        <h2>
          Jim Acosta racketeering share-split from third-party-beneficiary
          counterfeit. it is not covid-induced, your asymptomatic-testing caused
          panic, pension write downs and continuing claims to half 65+
        </h2>
        it is impossible to pay back past debt without share-split. you want to
        do it now because the public do not see dollar-park as just that in 40%
        debt spending and lender-work-deficit by 10-40% fed-state
        bond-laundering (debt-servicing). the only way forward is to reverse
        debvt:cash*income thru history
        <br />
        <br />
        There is a lag time to ppp trust-building inflation of work deficit of
        corporate profiteers withheld
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/10cpJ47AxAFbzmYqnv8EboEJtbb03Lcpd/preview"
          }
          float="right"
          title="Carl Higbie complaining about inflation 102% but not for market share of government over operational-net-loss with bond but free rider mutable utility, not understanding that prices drop when you do not bid as bona fide conservatives, of labor effort, would"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “The stock market crashed. Only the Biden admin can make the economy
        crash this bad,” Carl higbie measuring the economy by prices and hours
        instead of, well, the opposite
        <br />
        <br />
        Trump did ppp trust-building
        <br />
        Free rider mutable tax 60%, 40% debt spending
        <br />
        “The price at the pump is the greatest factor to see your agenda
        implemented on the US economy”
        <br />
        Things that aren’t possible without heavy subsidies, thinking that
        prices do not fall when capacity to buy is not there. Carl Higbie and
        Josh Mandel are rent-seekers for government contractors, furthest from
        conservative and demand only being labor. Why not target-margin (& jury
        for business) in consumer-surrogate
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1t30NDdxpNjNEGQDSefbflbuN4W-Bnpv3/preview"
          }
          float="left"
          title="Eric Bolling complaining about inflation 102% but not for market share of public corporation profits withheld for useless market-communism, checking account collective bargain"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        The right is pro-fractional reserve in contract
        <br />
        <br />
        Too many old people, 1.2m/yr 75+ since 2015, put money into the kettle,
        we can all be better of by reversing debt:cash*income thru history
        <br />
        <br />
        imagine thinking last traded on no volume is "damage," only Eric bolling
        and the Trump/Cheney GOP
        <h2>
          lender work deficit, market liquidity from capping rent at 5 units or
          30 days to force sale of useless accrual by rent, invloice or false
          bid pools and repo-cycle with down-payments kept instead of amortized
          by reverse cash:debt*income thru history
        </h2>
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1P6x8mETIn7I01tCPC7wfnXJGHqZJvFrY/preview"
          }
          float="right"
          title="Eric Bolling complaining about inflation 102% but debt-inelastity is 4400%, not including implausible landlord use and lender work deficit"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “Yeah there needs to be something”
        <br />
        <br />
        Bo Snerdley thinks more money makes higher prices, but not credit
        spending. Absolute hypocrisy, asking more about price elasticity after
        me saying money without working age cohort is useless for the same
        intermediate-material-and-labor ask
        <br />
        <br />
        These people are there to make profit[, by any means], not be charitable
        so they can rip them off,” amidst finite producer reality and infinite
        producer reasoning assumption for free markets being the most efficient
        net gain,
        <br />
        <br />
        bipartisans say hours worked is positive instead of positive if under
        another metric like price-deflation
        <h2>$12k/year/person counterfeit in contract</h2>
        republicans do more damage than the government because they want to pay
        off gov debt and private debt, false pool bids, implausible use landlord
        work deficit and keep deficit over repo-cycle
        <br />
        by law and order, but stopping immigration beyond criminal record, is
        prohibiting trade, which is just retarded for productivity per hour
        <br />
        <br />
        But those immigrants in 1850 don’t have claim to this land delegated to
        new ones. And they didn’t build the land nor infrastructure that does
        depreciate in quality and market value of last trade (but unbought)
        <br />
        <br />
        bipartisan is not less controversial 60% than 60% along bottom split
        lines, Johnathan Hayt
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1JUT4koSLHbAk2iq627LeYuQgQGIP-1DQ/preview"
          }
          float="left"
          title="Newsmax with Logan Raddick - John Burnett and Steve S. on insurance from racketeering security by fraudulent non-bona-fide-crime"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        Insurance companies paying out a claim is necessarily less than the
        expiring-premium
        <br />
        Breaking the bank is fractional reserve to be written down, 60/40 wall
        st/gov and 60% free rider mutable tax, 40% share-split compounding
        against hours worked
        <br />
        <br />
        "Who stands for this slander?” Asks can of their guests, marty tellopp
        and whoever else.
        <br />
        “Islam is not against our National Security.”
        <br />
        <br />
        Communist against invoices, false bid pools & hung-jury-permits
        <br />
        <br />
        official, recognized, proper route is not a reasoning of discrimination
        lest you're thinking immigration is bad...
        <br />
        putting people up with cash is monopsony for same goods of bid-to-ask,
        no?
        <br />
        <br />
        Im proud to be an American, where at least I know I’m free. And I won’t
        forget, the men who died, and gave that right to me, and ill proudly
        stand up, and sing this land is my land, this land is your land, from
        california, to the New York island. 20% of this land is backing the US
        dollar-share-split!
        <br />
        <br />
        Social isn't 'reappropriation, trust building & gentrification' - that
        is rather, "market-communism."
        <br />
        The right calls welfare, 'socialism,' because otherwise calling it
        "share-split" would lead in "accrual" as having the same description.
        <br />
        Market-communism is "dollar-park-share-split, and
        subprimally-redistribution (tax)," for market communists at the center,
        not 'giveaways.'
        <br />
        Redistribution by demand outside a market is "inflation," anyway. 40%
        share-split accrued, 605 redistributed, and 60/40 wall st/Gov
        $12k/year/person new debt
        <br />
        Welfare is "taking goods from labor," that isn't socialism. Occupy wall
        st anti-dead-weight-rentier in supply and demand (only labor) is
        <br />
        <br />
        “Childcare prek, housing more affordable education more affordable.”
        Phil Murphy’s plan is more spending, gentrification & trust-building. My
        policy is to cap rent 5 units or 30 days, reimbursement down payments
        upon repo amortization, replace debt with alternative finance (outlay
        corporate profits immediately, max profit royalty, p2p only
        non-concurrentable), banishment of invoices & false-bid-pools
        (non-rollover-insurance, false collective bargaining lest immediate
        escrow).
        <h2>
          A little voter fraud can go a long way in voter dissuassion in
          non-streamed but tranched results in early & mail-in voting,
          unshuffles, or overnight anomolies
        </h2>
        <a
          href="https://www.statista.com/statistics/284298/total-united-kingdom-hmrc-tax-receipts/"
          rel="nofollow"
        >
          <img
            src="https://www.statista.com/graphic/1/284298/total-united-kingdom-hmrc-tax-receipts.jpg"
            alt="Statistic: Tax receipts in the United Kingdom from 2000/01 to 2020/21 (in billion GBP) | Statista"
            style={{ width: "100%" }}
          />
        </a>
        <br />
        <Cable
          style={{ height: "370px" }}
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1VckMAKn52mWm2F7TCGH57WHKxz-AoEVo/preview"
          }
          float="left"
          title="George Galloway (RTUK)"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        Excess deaths year to year were so constant, seeing the bump in 75+
        population by 1.2m/yr (55m/yr extra people worldwide) starting 2015 was
        significant in dispelling my ignorance, but only after it was too late.
        The votes had already been cast, without notaries
        <br />
        <br />
        “For the lord has set his cannon against self-slaughter, I am the
        closest thing you will ever meet than is an entirely, free man” - George
        Galloway, “there’s not really two parties, they are two cheeks of the
        same ass.”
        <br />
        <br />
        “Scores of British tax payer money will have to be settled,” doss this
        bloke confuse settlement with share-split (cancel/bailout) and
        correcting the damages and no more (amortize).
        <br />
        <br />
        <h2>"problem-solvers" vs. savers</h2>
        Gop doesn’t want target margin and truncated sales tax but bailout past
        debt, at least
        <br />
        “Hide their income,” as opposed to corporate profits banked year to
        year, collective bargain my checking account
        <br />
        <br />
        Brought a lot of currency into china, being durables certificated by the
        dollar, albeit share-split
        <br />
        <br />
        Mandates aren’t successful,” as opposed to business without jury upon
        microeconomic infinite producer assumptions (of price quality and duress
        within minimal viable product)
        <br />
        <br />
        Spending is, not primarily taxes for 50% debt spending. Truncated sales
        tax 2025, after cash:debt*income thru history as to no longer debt
        service/bond launder 40%
        <br />
        <h2 ref={this.props.jesus}>The new covenant with G-d is a toast!</h2>
        “Abraham conquering G-d. Jesus becoming messiah and eternal life.”
        <br />
        <br />
        <a href="https://www.quora.com/If-Jesus-is-G-d-and-He-is-risen-how-much-did-He-really-sacrifice">
          If Jesus is G-d, and He is risen, how much did He really sacrifice?
        </a>
        <h3>Do Christians believe in sin sacrifice?</h3>I came down here to do
        that which you solve now with sleighing animals to no avail.
        <h2>New Testament (KVJ 2 Corinthians 5:12)</h2>
        To wit, that God was in Christ, reconciling the world unto himself, not
        imputing their trespasses unto them; and hath committed unto us the word
        of reconciliation. Now then we are ambassadors for Christ, as though God
        did beseech you by us: we pray you in Christ’s stead, be ye reconciled
        to God. For he hath made him to be sin for us, who knew no sin; that we
        might be made the righteousness of God in him.
        <h2>Old Testament (KJV Isaiah 53:7)</h2>
        He was oppressed, and he was afflicted, Yet he opened not his mouth: He
        is brought as a lamb to the slaughter, And as a sheep before her
        shearers is dumb, So he openeth not his mouth. He was taken from prison
        and from judgment: And who shall declare his generation? For he was cut
        off out of the land of the living: For the transgression of my people
        was he stricken. And he made his grave with the wicked, And with the
        rich in his death; Because he had done no violence, Neither was any
        deceit in his mouth. Yet it pleased the Lord to bruise him; he hath put
        him to grief: When thou shalt make his soul an offering for sin, He
        shall see his seed, he shall prolong his days, And nthe pleasure of the
        Lord shall prosper in his hand. He shall see of the travail of his soul,
        and shall be satisfied: By his knowledge shall my righteous rservant
        justify many; For he shall bear their iniquities.
        <h4>Dies because of sin</h4>
        <a href="https://thechurchoftruth.org/jesus-did-not-die-for-your-sins/">
          Para
        </a>
        &nbsp;Russo
        <br />
        <br />
        none of those quotes are stated by Jesus Himself. He made a toast for He
        knew Romans would crucify Him, because of their sins and hypocrisy.
        'Sacrifice and offering you did not desire, but a body you prepared for
        me; with burnt offerings and sin offerings you were not pleased.' "Then
        I said, ‘Here I am—it is written about me in the scroll— I have come to
        do your will, my God.’” Psalm 40:6, spoken by Jesus Himself
        <br />
        <br />
        “‘The days are coming,’ declares the Lord, ‘when I will make a new
        covenant with the people of Israel and with the people of Judah'”
        (Jeremiah 31:31).
        <br />
        <br />
        “This is my blood of the covenant, which is poured out for many for the
        forgiveness of sins” (Matthew 26:28).
        <br />
        <br />
        Jesus was like, ‘drink in the forgiveness of sins,’ then Peter made it a
        Sunday ritual, the Eucharist. I really imagine Jesus holding true to the
        anti-sin-sacrifice and …lessings of non-concurrentable monetary-debits.
        {space}
        <span
          style={{
            color: "blue"
          }}
        >
          I believe he would support moving to NAICS max-royalty instead of
          current money changing operations
        </span>
        <br />
        <br />
        If fed spend is $4t/yr, why is there only $2t currencyComponentOfM1?
        There is $170t bond value for all collateral equity, land and
        durable-goods, after all
        <br />
        If it is true 41k year carbon cycles are from humans and not natural
        binding, then humans must go extinct
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1HXTP4k7rrBIH0xVru-E3SZwtOlbAhae2/preview"
          }
          float="right"
          title="Newsmax Church"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        <a href=" https://www.kingjamesbibleonline.org/Colossians-1-14/">
          Jesus crisps
        </a>
        &nbsp;was never in the Bible, it was written by 1 Peter 2:10 and was
        actually against the sin-cleansing-sacrifices, watch out 1 John 2:22
        <br />
        <br />
        "the Bible is written by Jesus Christ, see corinthians 1 (written by
        &nbsp;
        <a href="https://www.christiancourier.com/articles/699-did-paul-sin-in-submitting-to-the-temple-ritual">
          Paul
        </a>
        ),"
        <br />
        <br />
        <a href="https://www.bible.com/bible/1/1PE.2.KJV#:~:text=13Submit">
          13Submit
        </a>
        &nbsp;yourselves to every ordinance of man for the Lord's sake: whether
        it be to the king, as supreme; 14or unto governors, as unto them that
        are sent by him for the punishment of evildoers, and for the praise of
        them that do well. 15For so is the will of God, that with well doing ye
        may put to silence the ignorance of foolish men: 16as free, and not
        using your liberty for a cloke of maliciousness, but as the servants of
        God. 17Honour all men. Love the brotherhood. Fear God. Honour the king.
        <br />
        <br />
        Assumption without backup can be desisted but not fined lest multiple
        times and in capacity without expiring insurance and for numerable
        “damage,” not feelings
        <br />
        https://www.bibletools.org/index.cfm/fuseaction/Bible.show/sVerseID/24083/eVerseID/24083
        matt 24:15
        <br />
        https://www.bibletools.org/index.cfm/fuseaction/Bible.show/sVerseID/2134/eVerseID/2134
        exodus 22:20
        <br />
        https://www.bibletools.org/index.cfm/fuseaction/Bible.show/sVerseID/2957/eVerseID/2957
        levidicus 9:3
        <br />
        https://www.gotquestions.org/millennial-sacrifices.html
        <br />
        "As the Lord’s Supper is a reminder of the death of Christ to the Church
        today, animal sacrifices will be a reminder during the millennial
        kingdom. To those born during the millennial kingdom, animal sacrifices
        will again be an object lesson. During that future time, righteousness
        and holiness will prevail, but those with earthly bodies will still have
        a sin nature, and there will be a need to teach about how offensive sin
        is to a holy and righteous God. Animal sacrifices will serve that
        purpose, "but in those sacrifices there is a reminder of sins year by
        year" (Hebrews 10:3)."
        <br />
        https://bible.knowing-jesus.com/topics/Sacrifice
        <br />
        <br />
        "Contraception is a mortal sin, I don’t care if you have a monogamous
        relationship with your fat wife"
        <br />
        Not enough fornication, to much contraception
        <br />
        <br />
        What is implied from animal sacrifice being required or couldn’t be
        stopped requiring Jesus
        <h2>Jesus died BECAUSE of sins</h2>
        <Cable
          style={{ height: "40px", width: "60px" }}
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1ccdgbORmMfrLUx4Bu8wSJnE3R6byDIKT/preview"
          }
          float="left"
          title="John Bachmann Now (Newsmax) - Jo Pinion and pastors talking Jesus"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “Experiment in civil discourse and disagree freely.” Jo Pinion.
        <br />
        Catholic-"Christian“: "Supernatural rising from dead and fulfilled
        prophecies, Jesus is a sin sacrifice.”
        <br />
        <hr />
        Cats: “Paganism-arson a hate crime?”
        <br />
        Curanaj: “What about a mosque, or a Christmas tree that represents
        christianity?”
        <br />
        <br />
        It will hurt our economy, so we need to stop people from exporting
        policy.
        <br />
        Laborless-demand is more work per expense, GDP/p-1/hour
        <br />
        Default is the closing of a surrendered bid of labor-borne-demand, kept
        down payments upon repo for foreseeably non-concurrentable <br />
        <br />
        <a
          href="https://www.statista.com/statistics/298465/government-spending-uk/"
          rel="nofollow"
        >
          <img
            src="https://www.statista.com/graphic/1/298465/government-spending-uk.jpg"
            alt="Statistic: Total managed expenditure of the United Kingdom government from 1977/78 to 2020/21 (in billion GBP) | Statista"
            style={{ width: "100%" }}
          />
        </a>
        <br />
        ("real" is discounting poorness for poverty,&nbsp;
        <a
          href="https://micro-theory.com"
          style={{
            color: "rgb(20,100,200)"
          }}
        >
          "true" accounts for bond-index-funds as property
        </a>
        ) "being unemployed means you build YOUR portfiolio." Cindy Adams
        doesn't get it
        <br />
        <br />
        Internet forces credit as income,&nbsp;
        <a href="https://github.com/NickCarducci/mastercard-backbank">
          I have to write my own paytech
        </a>
        . I won’t even take donations until then
        <br />
        <button
          style={buttonstyle}
          onClick={(e) => {
            e.stopPropagation();
            this.setState({
              insurancedisability: !this.state.insurancedisability
            });
          }}
        >
          <h3>
            insurance fraud: expiring claim false bid
            option-general-expiry-by-estimate-court-backed-appraisal useless
            price bid-to-ask inelasticity duress pools
          </h3>
          <br />
          6m/40m from 6m/20m 1970 unemployed, half continuing claims, most of
          disabiity, and 20x/millennial rental-income
        </button>
        <br />
        {/*<div
          style={{
            zIndex: 1,
            display: this.state.insurancedisability ? "block" : "none"
          }}
        >*/}
        <h2>
          Can my mom license as a mental institution so we can get more
          money?&nbsp;
          <a
            href="https://truncatedsalestax.com"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            Federal living arrangements type D baby
          </a>
        </h2>
        I have a hole im my leg but old people get half of disability, and they
        only give it to me t cost of slandering me as "insane"
        <br />
        <h2>
          Describing me as bizarre without correlative evidence of
          biological-malformity
        </h2>
        You haven’t looked at the evidence, after asking for permission to. I
        have sent the graphical image but your judge’s testimony doesn’t mention
        the muscular-stitches from the initial injury at Bayshore in 2015. This
        injury happened next to the trail on highway rt79 on my way from my
        fathers’. This statement is self-evidentiary and my fathers’ name,
        Verizon phone records show I lived there in 2015, and it became
        unbearable to walk for more than ten minutes, and now I am disfigured as
        my whole body depends on the&nbsp;
        <a
          href="https://www.researchgate.net/publication/43297722_Repair_of_Traumatic_Skeletal_Muscle_Injury_with_Bone-Marrow-Derived_Mesenchymal_Stem_Cells_Seeded_on_Extracellular_Matrix"
          style={{
            color: "rgb(20,100,200)"
          }}
        >
          vastus medialis
        </a>
        <br />
        <h2>Assigning my mother as payee</h2>
        You just want to pay off the lenders whom counterfeit third party
        beneficiary in contract, borrowers loiter and launder from hospitality
        workers like me. The opinions of your judge is presumptive of the
        precedence of incorrect nature - as I have told him on the phone, the
        hospital that diagnosed me said I kicked and punched when I was trying
        to elope, for an appointment that I wanted to fix my leg with
        <br />
        <br />
        People call themselves incorrectly misnomer as they gentrify,
        trust-build and reappropriate-labor, not emulate&nbsp;
        <a href="https://www.marxists.org/archive/marx/works/1848/communist-manifesto/ch02.htm">
          I am Marxist
        </a>
        <br />
        communism is the worst only when jury makes 1/12 legally-crazy,
        lest&nbsp;<a href="https://brainscan.info">head-dent</a>
        <h2>
          p2p "lending" without time, loitering & counterfeiting, and such
          without false bid pools,&nbsp;
          <span style={{ fontSize: "9px" }}>
            banking collective bargaining remain in concurrentable equity
          </span>
        </h2>
        Share split = monetary-investment(dilution/keep down payment upon repo
        vs max profit royalty)/contributing-partner, unless it is perfectly so
        as global/universal ubi
        <br />
        <br />
        public parks = durable goods/services
        <h2>net export of</h2>
        <Cable
          style={{ height: "40px", width: "60px" }}
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1rTktXHe1x8nZzDOO7anMw4sGV38-ZTum/preview"
          }
          float="left"
          title="virus insemination cartoon evidence"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        masks don't stop the&nbsp;
        <a href="https://pubs.acs.org/doi/10.1021/acssynbio.8b00135">cause</a>
        &nbsp;of&nbsp;
        <a href="https://theconversation.com/your-poo-is-mostly-alive-heres-whats-in-it-102848#:~:text=www.shutterstock.com-,Microbes,of%20the%20bacteria%20were%20alive.">
          infection
        </a>
        , illness is likely a warning mechanism of mitosis 1/day/cell
        <br />
        “Vaccinated counties will certainly see less cases,” because you aren’t
        counting all those hospitalized (let alone hospital bed count as
        misappropriated by false bid pools) by the actual cause, not the output…
        debris tested for potential blood clot post evolutionary bacterial
        contamination of cell
        <br />
        <br />
        "how can black people amass so much wealth," says a VA lt gov Republican
        opining upon compound interest
        <br />
        <br />
        <h2>
          Is rhino anti-trump or anti-neocon? Trump is more nationalistic to
          working age deficit boon&nbsp;
          <span
            style={{
              fontSize: "9px"
            }}
          >
            "free money share split tax payer vacation will be paid by our
            children!" - Righties
          </span>
        </h2>
        “Not having safety net does a lot of damage to economies and
        communities,” Larry Kudlow. Prices are elastic, allow people to live
        without income/durable-goods or hours worked instead by ending the
        &nbsp;
        <a
          href="https://30under5.us"
          style={{
            color: "rgb(20,100,200)"
          }}
        >
          rentier
        </a>
        .
        <br />
        <br />
        “Need to[ without reason],” arms race to which cats replies
        “understood.” Bite off your tongue, you need to
        <h2>
          regulation by jury science, not licensing. you can
          certify/force-open-source
        </h2>
        paid family leave - give me that opportunity to trade my labor
        commensurately
        <span style={{ color: "grey" }}>
          , not by share-splitting my funds or other networkers of comparative
          advantage in the market
        </span>
        <br />
        <br />
        "medicare negotiating prices," is not price-cap like monthly-savings is
        not higher premiums without amortization, especially when more money
        doesn't actually make the resources it buys
        <br />
        <br />
        “The only way is retreat,” but open carry would have no other use,
        closed carry no less
        <br />
        <br />
        "capital needs, good for nyc and ny," says John bailout Cats, money
        coming in is essential to keep mta afloat." we can reverse instead of
        bond launder 40% debt service
        <br />
        <br />
        Old people say we are entitled with a lack of gratitude, but borrowers
        loiter and rental-income is work-deficit, lenders keep down payments
        upon repossession, and landlords beyond 5 units or 30 days is
        implausible use intent to compete with consumers
        <br />
        <h2>
          nj GOP rent-seeking broadband and tolls, laundering 40% debt-service &
          50% debt-spending, instead of consumer surrogate and target margin
        </h2>
        "These investments are going to help," jobs and childcare false bid
        non-concurrentable nannycare pools of existing business trust building
        pre-k drinking water fines/government gentrification rent-seeking
        instead of regulations and jailtime.
        <br />
        <br />
        "Prices people pay will override any theoretical, stuff," Bill O'Reilly
        says of monthly deductible savings is "savings" to voters even if
        premium is greater in Sum (amortized, without time-series)
        <br />
        <br />
        2 week anon uuid-broker-trades & executionable-evidence-discovery
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1dmhFv9xjcAMv4wELQ07pAI_eJ2QbblPT/preview"
          }
          float="right"
          title="Spicer & co - Pat Fallon"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        People are taught to hate the country, so we need a draft to change
        that, and literally shoot suspects, ignore evidence of jail for pharmacy
        competition with open source licensure in uppers, when forcing a plea by
        duress to be labeled as disobedient. Rot in hell tool
        <br />
        <h2>
          It literally is, "
          <a
            style={{
              color: "rgb(20,100,200)"
            }}
            href="https://www.cdc.gov/flu/weekly/overview.htm#:~:text=5.%20Mortality%20Surveillance"
          >
            just the flu
          </a>
          ."
        </h2>
        the people hospitalized with the merk pill doesn't count those who went
        to the hospital with cause of bacteria but another byproduct (basis rate
        fallacy)
        <br />
        <br />
        <iframe
          style={{
            shapeOutside: "rect()",
            float: "left",
            border: 0
          }}
          src="https://www.youtube.com/embed/OqgUxnqc3AM"
          title="YouTube video player"
        />
        <Cable
          style={{ height: "auto", width: "300px" }}
          img={true}
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://www.dropbox.com/s/3lmwgcqcvrj1gx2/Projected%20mortality%20census.png?raw=1"
          }
          float={"right"}
          title="https://www.census.gov/library/stories/2017/10/aging-boomers-deaths.html"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        WWII was a life-expectancy ago... rate of change thru 2009 shows this{" "}
        <br />
        <br />
        In US 700k/less and in World 50m/less than population growth a lifetime
        ago... that is insignificant,&nbsp;
        <a href="https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference">
          changing byproduct testing
        </a>
        .
        <iframe
          style={{
            shapeOutside: "rect()",
            float: "right",
            border: 0
          }}
          src="https://www.youtube.com/embed/m-CwPBcrMYQ"
          title="YouTube video player"
        />
        <br />
        <br />
        {width && <Epiology lastWidth={Math.min(600, width)} />}
        <a
          href="https://youtu.be/Weqb9KrQ-TU?t=21"
          style={{
            color: "rgb(20,100,200)"
          }}
        >
          electron microscope
        </a>
        &nbsp;snapshot, cartoon in vivo virus insemination. I think it only
        comes out, & is&nbsp;
        <a
          href="https://wyss.harvard.edu/news/the-secret-life-of-bacteria-revealed/"
          style={{
            color: "rgb(20,100,200)"
          }}
        >
          exclusively caused by bacterial infection
        </a>
        .
        <br />
        <br />
        third party beneficiary is our law, no surrender what option to buy of
        intermediate-scope you can't concurrently-fulfill
        <br />
        <br />
        finite producers, 11/12 jury means 1 person is crazy when convicted or
        permitted in duress for minimal viable product for voluntary trade
        <br />
        <br />
        ms literally, "matches paralytic polio" in US numbers
        {width && <Polio lastWidth={Math.min(600, width)} />}
        <iframe
          style={{
            shapeOutside: "rect()",
            float: "left",
            border: 0
          }}
          src="https://www.youtube.com/embed/GDOaqkjfIcg"
          title="YouTube video player"
        />
        There is 2k/yr virus discovered, we test for one at a time based on
        predilections, insignificant aggregate hospitalizations when fixing for
        all types, & the only diagnostic difference between bacteria and virus
        is severity
        <br />
        <br />
        even if antibodies just clear up byproduct of bacterial-cause and virus
        only comes out, you can expect this 800n result
        <a
          href="https://link.springer.com/article/10.1007/s00259-021-05314-2"
          style={{
            color: "rgb(20,100,200)"
          }}
        >
          4.8%+ lymphoma "hot nodes"
        </a>
        <br />
        <br />
        excess antibodies attacking mRNA-spored-protein-graft
        <br />
        attacking your own cell with protein made from the grafted-mRNA*
        {/*<Cable
              style={{ height: "auto", width: "300px" }}
              img={true}
              onError={handleScollImgError}
              src={
                this.state.serviceCancelingImages
                  ? ""
                  : "https://www.dropbox.com/s/mgm24pg4qqzelyy/2009%20index%20wwii%20life%20expectancy.jpeg?raw=1"
              }
              float={"left"}
              title={
                `indicies of population and monies are expounded, ` +
                `respectively showing gdp/population is constant with ` +
                `fixed resources with differing forms and technological ` +
                `advancements but still same melted- or decompositional-forms`
              }
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <Cable
              style={{ height: "auto", width: "300px" }}
              img={true}
              onError={handleScollImgError}
              src={
                this.state.serviceCancelingImages
                  ? ""
                  : "https://www.dropbox.com/s/7juhzw918i6hxwm/index%20of%20growths.jpeg?raw=1"
              }
              float={"right"}
              title="full chart of the above that is zoomed-in"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <Cable
              style={{ height: "auto", width: "300px" }}
              img={true}
              onError={handleScollImgError}
              src={
                this.state.serviceCancelingImages
                  ? ""
                  : "https://www.dropbox.com/s/6a47ublnabh49ze/evidence%20rent%20no%2045%20to%2055%20work.jpeg?raw=1"
              }
              float={"left"}
              title="population cohorts show dramatic increase of 65-74 cohort over 2010's, absolutely"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />*/}
        "people smoke, and that is why the work is so bad," Greg Kelly, "they
        want to distract us while they steal from us!"
        <br />
        <br />
        <h2>
          <a href="https://www.newsweek.com/industries-staff-most-likely-smoke-weed-1468396">
            you fucking idiot
          </a>
        </h2>
        {/* <Cable
            style={{ width: "550px", maxWidth: "100%", height: "770px" }}
            onError={handleScollImgError}
            src={
              this.state.nofredgraphs
                ? ""
                : "https://fred.stlouisfed.org/graph/graph-landing.php?g=H5XB&width=500&height=660"
            }
            float="left"
            title=""
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          <Cable
            style={{ height: "760px", width: "100%" }}
            onError={handleScollImgError}
            src={
              this.state.nofredgraphs
                ? ""
                : "https://fred.stlouisfed.org/graph/graph-landing.php?g=HRsT&width=500&height=660"
            }
            float="left"
            title=""
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />*/}
        <a href="https://fred.stlouisfed.org/graph/HRsT">froth</a>.app/stats
        <a href="https://fred.stlouisfed.org/graph/H5XB">population 1.2m/yr</a>
        <br />
        <br />
        What is the crime of prostitution, duress? Stop saying we don't work, we
        work twice as much than you Goya CEO. Stop slandering socialism as
        reappropriating labor, DROP DEAD
        <br />
        <br />
        “With inflation already going higher, we don’t need anymore spending,”
        Larry Kudlow
        <br />
        What is a safety net that isn't welfare, false bid pools? LOITERER!
        <br />
        <br />
        Good paying jobs is not the goal, we want equity/retire/benefit from
        tech changes! Outlay corporate profits today! Don’t pay us with them for
        government, bond-index-fund, nor corporation profit!
        <br />
        <br />
        brought forward demand for expiring insurance hidden by expiring
        premiums is a false bid pool and third party beneficiary, counterfeited.
        Desist
        <br />
        <br />
        It’s force majeure of changing intermediate good (of grandiose scope
        onus upon the the buyer, estimate) and it is not an explicit option to
        buy at that price by such unfoldingly-impossible
        <br />
        <br />
        “Yeah and she wants to starve banks too, apparently,” Heather Childers
        responds to Bob Sellers, “mhm”
        <br />
        Like restrict compounding to wait for consumers before outlaying by
        accrual-laundering? Or actually cancel, forbidden or foreclosure with
        share-split or down-payment kept? The bipartisan oligopoly want to share
        split and cancel, I want to multiply cash:debt*income they history and
        max profit royalty p2p non-concurrentable
        <br />
        <br />
        To be under contract is a false bid, using your future labor, too. Not
        when it isn’t pooled, it is purely monopsony, not allowing the employee
        to work for their own profit or at least settle per hour without signing
        away rights discrimination for work by duress unnecessarily, merely and
        abjectly to not-compete rather than bargain of sorts impossibly in
        future time
        <br />
        <h2>performance degradation isn't even necessarily in your purview</h2>
        <Cable
          style={{ height: "440px" }}
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1Za9yLDIaZR17gNa2F0WlShpuj6gbefEI/preview"
          }
          float="left"
          title="Charlie Kirk - producer fill-in, insurance false bid pool coverage, coverage"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        <br />
        <br />
        "time constraints" is not the credit cycle false bid pool expiring
        non-concurrentable collective bargaining fraud scheme, keeping down
        payments upon reposession of collateral loitered. that is not freedom,
        more like freedumb. you can only sell a business account to a group,
        timelesspaydayroyalty scoped for industry-type for p2p only (as is
        non-concurrentable schedule)
        <h2>medical exemption only based on 1600 King</h2>
        <br />
        <Cable
          style={{ height: "440px" }}
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1UK8cetR32ilUBM-AQODYF-czVgvlFdmv/preview"
          }
          float="right"
          title="LinkedIn JHU post pfizer 'proofs'"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        Struggling what to do with insurance,” yeah when you are the breadwinner
        (and loiterer, launderer) of the family,” well you can have public
        insurance or just ban invoices. Insurance write down on exogenous fraud.
        It’s what they do.
        <br />
        <br />
        To be under contract is a false bid, using your future labor, too. Not
        when it isn’t pooled, it is purely monopsony, not allowing the employee
        to work for their own profit or at least settle per hour without signing
        away rights discrimination for work by duress unnecessarily, merely and
        abjectly to not-compete rather than bargain of sorts impossibly in
        future time
        <br />
        <br />
        torts/recouperation of true-bid-settled without racketeering is use of
        cops and jail, not net-loss bond profit whom care about us after the
        following, truncatedsalestax.com free rider immutable sewage police
        lawsuits
        <h2>borrowers loiter</h2>
        Cap rent at 5 units (of lease/lien (not-option without settled scope,
        just estimate) & expiring-false-pool-bid mechanic/nanny/doctor hours nor
        outlays, non-concurrentable) per person instead and watch the foodstuffs
        competition from actual liquidity amortize don't cancel, bailout nor
        <br />
        Gentrification is not positive. Collective bargaining certainly doesn’t
        work when 50% debt spending, rent-seeking.
        <br />
        If you didn’t force rental-costs and compete with other consumers, there
        wouldn’t only be fast food.
        <br />
        Tax from non-consumer of that market literally, “doesn’t matter,” wholly
        price-elastic
        <br />
        <br />
        excluding the non-contracted contributor (self-profit by money or kind)
        from the wage gap considering average weekly earnings is definitely
        illegal.
        <h2>
          every accountant today is culpable for third party beneficiary fraud
        </h2>
        <Cable
          style={{ height: "440px" }}
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1EpAirlQVCbgK9FxZq96n8yPPGpLzpsEi/preview"
          }
          float="left"
          title="NJ 101.5 - accountant tells gov Phil Murphy what he neeeds to do"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        Are you kidding me, when there is $31b taxes, $60b spending (2016)
        <br />
        <br />
        “Risk and debt, sometimes you have to go splat.” A GOP guy discusses his
        latest haul in the last credit cycle and how his borrowers didn’t even
        think to take their down payments in retribution after losing
        <h2>if you're going to foreclose, I'll forbid</h2>
        <br />
        <iframe
          style={{
            shapeOutside: "rect()",
            float: "right",
            width: "80%",
            border: 0
          }}
          src="https://www.youtube.com/embed/EssAVI0-bhA"
          title="YouTube video player"
        />
        “Handling sadness yourself invokes a great burden on those around you,”
        Biden racketeering for psychologists as priority over the folding burden
        of debt and landlords
        <br />
        <h2>is it deadly or not? article 4 hypocrites</h2>
        If you are in compliance just because your employer-monopsony free rider
        mutable tax and 40% debt spending- not tax payer… 10-40% fed-state
        bond-laundering/debt-service told you to spend on asymptomatic testing
        for 1.2m/yr expected deaths not being a pandemic, you can stand down,”
        Grant "anger management" Stinchfield. jury-permits are required for
        microeconomic reasoning to emulate infinite producers, target-margin
        consumer-surrogate investment bank by equity or p2p max profit royalty
        per IP as well #LibertariansAreGimps
        <br />
        <br />
        It doesn’t stop you from being sick, it just stops you from testing
        positive for the byproduct. The only difference between bacterial and
        viral cause is severity, according to current science, which is
        impossible.
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1WxVlPFKH9OkCA9DyFCytyZGJTj8Tqawf/preview"
          }
          float="left"
          title="Spicer & co - lindsay m keith abdication of abnormalities, change, innovation, angles, niches, creativity, uncommon-sense, chicken or egg (it doesn't matter! imagine that"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        "Is it normal, or abnormal?"
        <br />
        <br />
        "plenty of busy-work, the american life," while drowning in
        lender-work-deficit, closing the borders to the working-age, appraising
        assets without bid
        <h2>
          <a href="https://www.ftc.gov/sites/default/files/documents/statutes/credit-card-accountability-responsibility-and-disclosure-act-2009-credit-card-act/credit-card-pub-l-111-24_0.pdf#page=21">
            LET THEM FIGHT
          </a>
          ," ftc says to the states about expiring gift cards in
          false-bid-pools, otherwise known as competing with consumers, or
          "insurance coverage"
        </h2>
        Demand increasing by money or accrual invoices debt is like net
        exporting durable-goods for services and hamburgers, demand by
        working-age cohort size is like having everyone chip in
        <br />
        <br />
        “If someone sexually-assaulted my kid, I would want to cut the guys head
        off, I wouldn't be able to control myself,”
        mental-prejudice-false-bid-pool-sponsored deminski and Doyle replies,
        “oh yeah.”
        <br />
        <br />
        "depicting murder of another member would mean censure"
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1j4cdd0GjPNaGNucLdl2fgfTbp5Q4jCSt/preview"
          }
          float="right"
          title="Ocasio-Cortez responds to Gosar video"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        "inciting violence, begets violence, like invoices beget expiring
        insurance, silence normlizes violence, women is common with
        psychological, threats beatings, rape or abduction, the intent is clear-
        to discourage them from running for congress."
        <br />
        <br />
        “Political violence, to use your platform to depict violence depletes
        the credibility of this body,” is not defense of livelihood of
        fractional reserve in contract, false-savings-bid-expiring-pool
        <br />
        <br />
        no surrender = claim as much time as i can consume implausible use
        impossible settlement intent
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1nnYWqo7JBLK0s2yHXkbZp5l5knWBWTj0/preview"
          }
          float="left"
          title="McCarthy reacts to Gosar Censure Measure"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        no matter which way this trial shakes out, let's ritualize it with pizza
        rolls every Tuesday and communists see reason over countervailing laws
        and precendence
        <br />
        Kevin McCarthey, "A standard that you have others to abide by, but not
        yourselfs. you see, the other side of the isle incites violence, at
        detriment to this congress, I yield back."
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1z1uQeKUoFxBGkF2gVIYJIG_DG_X_kVTC/preview"
          }
          float="right"
          title="National Report - GOP budget guy"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        Socialists’ dream, “tax increases for small businesses,” a socialists
        dream would be to outlay
        <h2>Dr. saveFace vs Epiologist</h2>
        Transmission and spread of covid 19” the only thing spreading is
        testing, amongst 2k/yr newly discovered known possibilities of output,
        why don’t you test for them all to determine that covid is spreading?
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1WSKbJm2cG4PG1d93wYrJE_ab81aBBo_v/preview"
          }
          float="left"
          title="National Report - Dr. John 'good for nothing' Baugh"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        <br />
        Food pantries buy things for people, but it only helps if it is money
        coming from people also buying in the same market
        <h2>
          prices are elastic, instead of paying credit with bonds, ban credit
        </h2>
        Phil Murphy: "Keep up with higher education, state have role to play by
        donating bond funds that "assist" collges and universities by remaining
        strong, and helping families by insulated them by having to pay more
        <br />
        investment in revolving funds is one in affordability and
        competitiveness"
        <br />
        Stop trust-building! A majority of people in New Jersey don’t agree with
        you nor Jack. Investment by government or commercial bank is
        rent-seeking for no benefit except intermediate-good-price-inflation &
        monopsony over NEW educators, especially with 60% tax and 40% debt
        spending
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1QFbwrU6SEn6GVSe7iY4eikQbDEuJHbBu/preview"
          }
          float="left"
          title="Wake Up America - Joni Ernst terrorizing"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        {width && <Dies lastWidth={Math.min(600, width)} />}
        Joni Ernst: "On top of every Americans mine is the covid 19 pandemic,
        and the supply chain."
        <br />
        It’s not a pandemic, you just can’t count, the supply chain is not
        working half as much and issues were prevalent before, being that
        working age cohort size deficit. Epiological issue
        <br />
        <br />
        Origin of covid was a new asymptomatic testing regime. They use &nbsp;
        <a
          href="https://www.frontiersin.org/articles/10.3389/fcimb.2018.00396/full"
          style={{
            color: "rgb(20,100,200)"
          }}
        >
          cartoons
        </a>
        &nbsp;to prove in vivo insemination and&nbsp;
        <a
          href="https://www.nature.com/articles/s41598-020-73162-5"
          style={{
            color: "rgb(20,100,200)"
          }}
        >
          electron microscope
        </a>
        snapshot with&nbsp;
        <a
          href="https://youtu.be/Weqb9KrQ-TU?t=21"
          style={{
            color: "rgb(20,100,200)"
          }}
        >
          bacteria and virus
        </a>
        ...
        {width && <TestingCases lastWidth={Math.min(600, width)} />}
        <br />
        <br />
        Bacteria v virus disease diagnostic-difference is merely&nbsp;
        <a
          href="https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference"
          style={{
            color: "rgb(20,100,200)"
          }}
        >
          severity
        </a>
        , according to current scientist guesses
        <br />
        <br />
        Dr. SaveFace says Virus is alive. Is it like, an evolutionary trait?
        Don't trust radio talkshow hosts, trust econometrists
        <br />
        <br />
        No excuse Krugman isn’t age-discrimination for Nobel, as with appeal of
        disability without excuse not to give it with medical historical
        hospital and physical therapy by orthopedist evidence, asked for
        disclosure implies it will be evidence,&nbsp;
        <a
          href="https://www.google.com/search?q=dr+dickerson"
          style={{
            color: "rgb(20,100,200)"
          }}
        >
          then photo in appeal
        </a>
        . Give me disability for calling me bizarre for saying
        expiring-insurance is like ftc gift card stance of no-expiry advice to
        states
        <h2>Chris Salcedo: "federal Democratic socialists break the law"</h2>
        <div
          style={{
            height: "min-content"
          }}
        >
          <div
            style={{
              float: "left"
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap"
              }}
            >
              <Cable
                onError={handleScollImgError}
                style={{ height: "500px" }}
                src={
                  this.state.iosNoPhoto
                    ? ""
                    : "https://drive.google.com/file/d/1S6AvYvE1DfYUXTDhZyz02pQSzcO1ODpB/preview"
                }
                float="left"
                title="Phil Murphy - covering the basis, financially, for bond-index-fund contracting intermediate-good expiring ftc"
                scrolling={this.props.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
                scrollTop={this.props.scrollTop}
              />
              <Cable
                onError={handleScollImgError}
                style={{ height: "500px" }}
                src={
                  this.state.iosNoPhoto
                    ? ""
                    : "https://drive.google.com/file/d/1jpai688Y5J-tg6XHeqk41EVli-Dzxgna/preview"
                }
                float="right"
                title="Phil Murphy - covering the basis, financially, for bond-index-fund contracting intermediate-good expiring ftc"
                scrolling={this.props.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
                scrollTop={this.props.scrollTop}
              />
              <Cable
                onError={handleScollImgError}
                style={{ height: "500px" }}
                src={
                  this.state.iosNoPhoto
                    ? ""
                    : "https://drive.google.com/file/d/1RArQ7ylNrW8poYCWf4KsL9ZxHyFmQ7tA/preview"
                }
                float="left"
                title="Phil Murphy - covering the basis, financially, for bond-index-fund contracting intermediate-good expiring ftc"
                scrolling={this.props.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
                scrollTop={this.props.scrollTop}
              />
            </div>
          </div>
          $100k/year/person of debt is Gov premium for deductible savings, (40%
          debt spend on 40% of total new debt, public and private), how is that
          not checking after credit is spent? $6k currencyComponentOfM1/person?
          Do government rent-seeking hospitals just "reinvest" in bonds?
          <br />
          <br />
          "create jobs and grow the economy,"" is merely inequality and
          busy-work, busines roundtable launders gottheimer nj to rent-seeking
          government contractors and bond laundering 40% (10% federal, excluding
          QE?) with 40% debt-spending
        </div>
        <Cable
          onError={handleScollImgError}
          style={{ transform: "scale(-1,1)" }}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1n_OQsEOdbGI2ll5doHnQMheAwBScVMy9/preview"
          }
          float="right"
          title="Elizabeth Cohen - cnn medical shill"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        "19% [defianly excluded from discrininating favored-law of laurels,
        counting only voters, plural-minorities. eligible citizens not with
        standing.]" Elizabeth Cohen.
        <br />
        <h2>
          immunity by clearing byproduct naturally,&nbsp;
          <a
            href="https://health.clevelandclinic.org/virus-vs-bacteria-whats-causing-my-kids-cold/"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            bacterial-vs-virus cell
          </a>
        </h2>
        <a
          href="https://www.frontiersin.org/articles/10.3389/fcimb.2018.00396/full"
          style={{
            color: "rgb(20,100,200)"
          }}
        >
          in vivo cell-insemination cartoon
        </a>
        , vs&nbsp;
        <a
          href="https://www.youtube.com/watch?v=Weqb9KrQ-TU?start=21"
          style={{
            color: "rgb(20,100,200)"
          }}
        >
          electron microscope snapshot with bacteria and virus
        </a>
        <div
          style={{
            height: "min-content",
            float: this.state.iosNoPhoto ? "" : "right"
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <TwitterTweetEmbed
              key="1428312309685002241"
              tweetId="1428312309685002241"
            />
            <TwitterTweetEmbed
              key="1425460613711605760"
              tweetId="1425460613711605760"
            />
            <TwitterTweetEmbed
              key="1429182687588278276"
              tweetId="1429182687588278276"
            />
          </div>
        </div>
        <div
          style={{
            height: "min-content"
          }}
        >
          <Cable
            onError={handleScollImgError}
            style={{ transform: "scale(-1,1)" }}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1P7RFjPGgeKCTR-INs5zEV-9wciwkxPot/preview"
            }
            float="left"
            title="Kaitlan Collins - Forbes porait"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          Kaitlin Collins: “Roads for so long, aging highways, clear drinking
          water,” isn’t provided my demand of more money rather than
          working-age-cohort-size over rent-seeking-gerontocracy dead-weight.
          Why not regulate don’t fine == jailtime, except for net loss profit &
          closed source licensing saveFace board, target-margin of
          private-investor-consumer-surrogate, & jury-permit science mvp-duress
          instead of industry-precedencial-interest & racketeering-malfeasance,
          force non-“no”-vote-abstain for holders
          <br />
          <br />
          Heather Childers, Chad Wolfe, Bob Sellers, Shut the Fuck up, you
          cannot compare asymptomatic prevalence with symptomatic-testing, nor
          age-standardize without accounting for cohort-size, ever increasing
          1.2m/yr a lifetime-ago, sewage-diminishing-to-plateauing-returns
        </div>
        <div
          style={{
            height: "min-content"
          }}
        >
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1_f4yNmal6jbv5e6Sn_QgO2EWsgSOLGnT/preview"
            }
            float="right"
            title="Mayokas proud of sex offender haul 450/$8b-32b, how much from hearsay?"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          "450 sex offenders has been incarcerated by ICE"
          <br />
          The agency has an annual budget of approximately $8 billion, primarily
          devoted to three operational directorates — Homeland Security
          Investigations (HSI), Enforcement and Removal Operations (ERO)
          and&nbsp;
          <a
            href="https://login.gov"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            Office of the Principal Legal Advisor (OPLA)
          </a>
          .
        </div>
        <br />
        <h2>Politics: somewhere between reason and law</h2>
        <div
          style={{
            height: "min-content"
          }}
        >
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1llsMgN_9Y41Y1zouPEEf4EXGvnK9bivL/preview"
            }
            float="left"
            title="Jersey Shore Premium Outlets for sewage police lawsuits bridge tolls or traffic then 3under2.us without rent-seeking intermediate-monopsony"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          BORROWING-LOITERERS: STOP SPENDING MY FOOKING MONEY 20x/person
          55+/millennial rental-income implausible use or false pool bid
          expiring insurance when you can cash:debt*income thru history and
          &nbsp;
          <a
            href="https://carducci.us"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            truncated sales tax 2025 against menendez
          </a>
          . 60% wall st $12k/person/year, fda craft beer and 40% debt spending,
          10%-40% bond laundering, to state respectively
          <br />
          laws favor somebody; "the left permit chaos when it refers to their
          [livlihood]"
        </div>
        <h2>
          imagine the release of&nbsp;
          <a
            href="https://carducci.sh"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            inventory
            <span role="img" aria-label="squirrel down-left white-circle">
              🐿↙️⚪️
            </span>
          </a>
        </h2>
        cap 5 units or 30 days for implausible leasee use too
        <div
          style={{
            height: "min-content"
          }}
        >
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/19Bd6r59yDt1JZ24LRX4JW_9WLhd9s7mt/preview"
            }
            float="right"
            title="National Report - Addison Smith constipated about Marxist caste-regard critique"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          They literally, "profit off of net loss per incarceration"
          <br />
          Weed cops off {/*strawmanning non-*/}fda craft beer & bonds laundering
          10% and 40% debt spending Addison Smith, Truncated sales tax after
          cash:debt*purchases thru historically
          <h2>consumer, not animal investment</h2>
        </div>
        <br />
        <a
          href="https://3under2.us"
          style={{
            color: "rgb(20,100,200)"
          }}
        >
          sewage immutable free rider, smelly-torts without state as victim nor
          article 4, is not with standing
        </a>
        <br />
        Why cant you have conversations about the case with other jurors? NO
        FUCKING REASON, law-precedence-gimp, becoming-tard per
        natural/comparative law and therefore "" advantage surplus in
        trade-utility,
        <h2>price-deflation per hour over time (roc/t-span)</h2>
        <br />
        "hours logged is success," says Kat Cammack about mayorkas, is
        reciprocol
        <br />
        <br />
        says only symptoms are tested is why positivity is is higher, per basis
        capita
        <br />
        <div
          style={{
            height: "min-content"
          }}
        >
          <Cable
            onError={handleScollImgError}
            style={{ height: "500px" }}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1j3mvMeMO3OrpSc0wA9Z7g_mJrgXkge2p/preview"
            }
            float="left"
            title="Bernie and Sid - Carrier-Pooled-False-Bid"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          “More and more tax dollars to ‘pay’ for this stuff.” A few months
          after Rich Valdes clicks me for calling Mark Levin to discuss his
          pooled-false-demand scheme in CarShield and AmericanHomeFinancing
          <br />
          Most Americans smoke weed, most people are forced into IRA and social
          security by law, stock values aren’t utility nor prices
          <br />
          <br />
          Currency is concurrent units like public parks not 40% debt spending
          nor expiring insurance
        </div>
        <br />
        Not only open-carry, but legal!” CNN analyst on Wisconsin
        <br />
        <br />
        most people that are vaccinated now were forced to
        <div
          style={{
            height: "min-content"
          }}
        >
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1gDEFBXYiCvKQFYyDwfmdqw1dSYT3wbUw/preview"
            }
            float="right"
            title="Spicer & co - mindless stable to perjury as if it were tortiable without a victim"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          You can, with their own evidence perjure yourself to get out of jail
          while comparative law says&nbsp;
          <a href="https://teapharmacy.party">
            I can smoke however much weed I want and drive
          </a>
          , by claiming that you were disobedient. then they lie with 13 days
          after I just repeat what Paul Krugman says. not hiring because of
          pothead prejudice is retarded. 70% pro-weed, 10% of the employed by
          corporations... chicken or egg, doesn't matter
          <br />
          <br />
          "duress purjery can bankrupt you."
        </div>
        <div
          style={{
            height: "min-content"
          }}
        >
          <iframe
            title="Masterclass - Paul Krugman, 'insurance is a net loss'"
            style={{
              shapeOutside: "rect()",
              float: "left",
              width: "200px",
              border: 0
            }}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/aJEszZK54dw"
            }
          />
          "Appeals work, when system is deemed to not work, that is really bad."
          Blind justice about itself. 90 fucking days of chaos and &nbsp;
          <a href="https://truncatedsalestax.com">called me bizarre while</a>
          &nbsp;Krugman runs free saying,&nbsp;
          <a href="https://www.youtube.com/watch?v=aJEszZK54dw">
            “insurance is net loss,” in a fucking masterclass
          </a>
          <br />
          <br />
          80k/yr missing children maleasance repeat offenders convict intranet,
          login.gov malfeasance, every incarceration net loss profit by bonds
          maakes cops not care, grocer-pollsters malfeasant in duress to launder
          truncated sales tax to their bond-index-funds rather than only
          flat-flat truncated ales tax only AFTER cash:debt*puchases as to
          amortize down payment & repo instead of cancelliung gdp/down-payments
          that is purposefully-impossible and of prisoners' dilemma to match
        </div>
        <div
          style={{
            height: "min-content"
          }}
        >
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1KJdnYFYVUQt2lYPv7z6eXMIVnNPNkkqS/preview"
            }
            float="right"
            title="American Agenda (Newsmax) - Bob Sellers and Heather Childers"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          "inflation isn't counting services nor home prices, real gdp growth
          (productivity per price-deflating-hour as output) would otherise be
          negative (true gdp)"
          <br />
          "we need to spend more on services because we are spending so much on
          net capital exports (net exports via capital/services), not a
          different party thn the services, no less. we need to manufacture the
          picks and shovels to hug the innovation-curve
          <br />
          <br />
          “We need China for the high technology thing.” I’m peeing
        </div>
        <br />
        <br />
        Saver is libertarian without rentier seen as dead weight, profits are
        net loss of supply and demand individual labor savings, taking glass
        steagall grounds term back
        <br />
        kick you off nj jury duty for thinking torts should be in capacity
        without surrendering your customers/employers cash with false bid
        {!this.state.spotifyerror && (
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://open.spotify.com/embed/episode/06stKb6W6oaMopDgl5lkEG?t=3:55"
            }
            float="right"
            title="Office Hours w/ Scott Galloway - asset-lite flow Uber 2nd holding verbal disclosure (anon-uuid 2-weeks out for every broker-tranche-part)"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
        )}
        <br />
        <br />
        <h2>expiring insurance is so becoming of your tardness</h2>
        "Pinch and pinch and pinch, less money" means lower prices - if you ban
        insurance
        <br />
        <br />
        m4a was invoices are theft before schumer, but now is like MArk Levin,
        monthly-"savings" for higher premium, 40% debt-spending
        <br />
        <br />
        <a href="https://www.fbi.gov/file-repository/2015-ncic-missing-person-and-unidentified-person-statistics.pdf/view">
          80k/yr missing children unrecovered, that's 216/day, known at least
          since 2015 by FBI
        </a>
        , (for context, 15k/day people die, half of old age, covid with
        standing) and login.gov product-manager unlinkedin me when I lay blame
        on him (convict-intranet actual end-to-end,&nbsp;
        <a href="https://thumbprint.us/phone">tamper-proof dns grid</a>)
        <br />
        law-licensing board of court cases around the country blocks on Twitter
        <br />
        <br />
        Atmospheric convection heat/density, population growth life expectancy
        ago 1.2m/yr excess deaths expected ("heat" "rises" aka electrons via
        binding/solving compounds, after sun's ray? wtfff... light speed squared
        is a troll because it literlly, "doesn't matter" and cancels out like
        chicken or egg)
        <br />
        <button
          style={buttonstyle}
          onClick={(e) => {
            e.stopPropagation();
            this.setState({
              prodemic: !this.state.prodemic
            });
          }}
        >
          <h3>prodemic</h3>
          <br />
          US Census and I projected mortality 1.2m/yr+ 75+ 2015+
        </button>
        <a href="https://www.census.gov/library/stories/2017/10/aging-boomers-deaths.html">
          projecting
        </a>
        &nbsp;<a href="https://humanharvest.info">saveface</a>
        <br />
        {/*} <div
          style={{
            zIndex: 1,
            display: this.state.prodemic ? "block" : "none"
          }}
        >*/}
        contributions are doubly trade/spending, with working age cohort size
        and money being the opposite
        <br />
        excess deaths account for
        <h2>
          Federal-courts seem to be …prosecution-favorable” Vinoo Varghese
        </h2>
        <div
          style={{
            height: "min-content"
          }}
        >
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1F1gaYqdisbpk2xV1rAswFjMqNYuZdrWI/preview"
            }
            float="left"
            title="Newsmax & 'Bipartisan Research Center'"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          "This will never go away, but the way to get it under control is to
          get vaccinated" - Bipartisan Research Center
          (plural-minority-collusion, and simply when including the
          ideologically-duress with detest & eligible non-voters)
        </div>
        <br />
        "Boost holiday spike in cases," of testing-basis makes regression
        analysts cringe
        {width && (
          <Lifetimes
            lastWidth={Math.min(600, width)}
            style={{
              float: "right",
              width: "300px",
              height: "200px",
              transform: "translate(0,0)"
            }}
          />
        )}
        <br />
        <br />
        Vaxx and hospitalizations are literally, “positively correlated,” using
        fluview CDC PiC pneumonia influenza covid discharges
        <div style={{ height: "200px", width: "100%", marginTop: "50px" }}>
          <Vaxx
            lastWidth={Math.min(600, width)}
            style={{
              height: "200px",
              width: "100%",
              transform: "translate(0,0)"
            }}
          />
        </div>
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1GsZmX019fMpHyLWJHf2nQJ9lbrFS6Uy3/preview"
          }
          float="left"
          title="John Bachmann NOW - crumbling infrastructure racketeering operating contractor & bond rent seeking"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        "
        <a
          href="https://froth.app"
          style={{
            color: "rgb(20,100,200)"
          }}
        >
          Lawful-order
        </a>
        ”, hung-jury and bacterial v viral diagnosis by severity, in vivo
        cartoon, and electron microscope snapshot
        <br />
        <Cable
          onError={handleScollImgError}
          style={{ height: "500px" }}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1tu8Q_8rBXugE0StZbaAV4rdZCkBHn5Iu/preview"
          }
          float="right"
          title="Tucker Hawley - debasing mayorkas about something libertarian-danger"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        <br />
        <div
          style={{
            height: "min-content"
          }}
        >
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1qX_aUu8a0ffDIUHZ8LEYzqcKC1LpzaI-/preview"
            }
            float="left"
            title="John Bachmann NOW - crumbling infrastructure racketeering operating contractor & bond rent seeking"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          "crumbling infrastructure"
          <br />
          tolls for 40% debt spend 10% bond laundering (
          <a
            href="https://www.njta.com/media/5688/financial-summary-through-september-2020.pdf"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            40% in nj transit...
          </a>
          ), make Verizon pay and target-margins for finite-producer grounds
          <br />
          <a
            href="https://vaults.biz"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            worth its salt
          </a>
          <h2>
            punitive flat flat truncated sales tax 2025 against menendez AFTER
            cash:debt*purchases is only way to amortize, don't continue down
            payment upon repo, bailout nor cancel forbidden by past-demand
          </h2>
          this money will not reduce costs for the american people, need to
          target-margin consumer-surrogates in investors, not
          government-rent-seek housing, healthcare,
          trade-secret-child-concentration-education-camps ...nor broadband
        </div>
        <br />
        <a
          href="https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference"
          style={{
            color: "rgb(20,100,200)"
          }}
        >
          symptoms are the diagnosis of bacterial and viral cause
        </a>
        , they are the same, but bacterial is more acute.&nbsp;
        <a
          href="https://link.springer.com/article/10.1007/s00259-021-05314-2"
          style={{
            color: "rgb(20,100,200)"
            //color: "rgb(20,100,200)"
          }}
        >
          mRNA sporing grafts produce 4.8%+ blood disorder
        </a>
        <h2>existing business complacency</h2>
        wreckless endangerment of another human life (starvation, competing with
        consumers, expiring insurance net loss, "savings" monthly without
        amortizing-(premium) fraud)
        <br />
        <div
          style={{
            height: "min-content"
          }}
        >
          <Cable
            onError={handleScollImgError}
            style={{ height: "500px" }}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1dtvc0uNrjgLRh5uLGLdeGBa5TjlkeCuG/preview"
            }
            float="right"
            title="public protest in NYC - pfizer for medicare premiums hidden 40% debt-spending"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          <Cable
            onError={handleScollImgError}
            style={{ height: "500px" }}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1lQmQYx0DwWZsNvA_T9jRYjvomKL3d3nS/preview"
            }
            float="left"
            title="public protest in NYC - pfizer for medicare premiums hidden 40% debt-spending"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          <Cable
            onError={handleScollImgError}
            style={{ height: "500px" }}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1Ez6ksZS6cG9wu961OJslapUrJWlPsa77/preview"
            }
            float="right"
            title="public protest in NYC - pfizer for medicare premiums hidden 40% debt-spending"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          the youth-license law and livlihood gives license, to boot
          <br />
          gross negligence of comparative natural or illegal precedence or
          countervailing law as open-carry without luggage & malfeasance of
          suppressing 90 FUCKING DAYS OF DAMAGE, tort-stewarding capacity and
          victim with net loss profit of bonds is nullifying your honor and the
          law-licensing-boards of the parties
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            style={{ height: "800px" }}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1y_lzfInDkQ8OV5YXSHgIgg56VfaJSP7s/preview"
            }
            float="right"
            title="Kyle with gloves dirtied"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          death threats on voting for infrastructure" No labels (bipartisan
          collusion against the majority of non-voters, against wall st pharma
          cop vs wall st pharma cop)
          <br />
          That’s what theft in contract 40% debt spending and trust building,
          malfeasance in justice, will compel. To not make consumer-surrogate
          pay in target-margin for being finite producer and rather government
          rent seeking and 10% bond-laundering is a human rights issue. Please
          desist for your own good, and ours. Stop competing with consumers.
          <br />
          Nick Carducci.sh
          <br />
          <br />
          duress 86% vaxxed isn't a choice autonomous by producers in a finite
          producer reasoned non malreasant justice
          <br />
          <br />
          natural immunity is more effective than vaccination:" that doesn't
          control for symptoms of another cause retard, PIC fluview grasp is
          event put forward by CDC pnemonia influenza covid precedence is trash,
          use jury-permitting for science not industry-saveFace &
          holding-interest
          <br />
          <br />
          fda craft beer & invoices r theft
        </div>
        <h2>
          expiring-insurance is a net loss, I'm called, "bizarre," Krugman walks
          free
        </h2>
        <Cable
          onError={handleScollImgError}
          style={{ height: "500px" }}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1JDQze4bt2NuoY6JogVlEuMxa2ZG24kGY/preview"
          }
          float="left"
          title="National Report - Emma Rechenberg hand-raise"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        "when you spend trillions of dollars, you cause inflation" -the
        immutable ted cruz (debt inelasticity) 4400% v 102% (debt/down=gdp=11/1
        <br />
        <br />
        “The more the government spends, and prints, the more inflation you just
        talked about. 6.2%…” down payments kept upon repo ignoring unsettled,
        non-tranquil, bid-to-ask inelasticity 4400% debt/checking, 1100%
        gdp/down, purposefully-impossible
        <div
          style={{
            height: "min-content"
          }}
        >
          <Cable
            onError={handleScollImgError}
            style={{ height: "500px" }}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1lKNhgxFbH5iADQ9tC3ywRn7XK8_w2E0w/preview"
            }
            float="right"
            title="National Report - Emma Rechenberg hand-raise"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          <h2>splitting the bipartisans, the other way, non-voters win</h2>
        </div>
        <div
          style={{
            height: "min-content"
          }}
        >
          <Cable
            style={{ height: "500px" }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1QfdGD9XyBI1-iO4dDhynqENhabsqedUB/preview"
            }
            float="left"
            title="WABC w/ Deborah Valentine - here I tell chat to imagine me dx crotch chopping them"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          “Inflation 5.8% over 2008 recession,” Invlation v asset prices? or
          from continuing claims.... that's why you fucking retard
          "conservatives" Kilmeade
          {/*width && <InflationAsset width={Math.min(600, width)} />*/}
          <h4>
            <a href="https://fred.stlouisfed.org/graph/IYow">
              price inflation never by population except when dead weight by
              public or private
            </a>
          </h4>
          {/*<Cable
            style={{ height: "760px", width: "100%" }}
            onError={handleScollImgError}
            src={
              this.state.nofredgraphs
                ? ""
                : "https://fred.stlouisfed.org/graph/graph-landing.php?g=IYow&width=500&height=660"
            }
            float="left"
            title="price inflation never by population except when dead weight by public or private"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />*/}
          <h2>
            for the most interesting guck in the world, asset prices isn't
            inflation
          </h2>
        </div>
        <br />
        Everyone is back to work, we have half unemployment:population than 1970
        but 10x hours per home.
        <br />
        <br />
        <h2>the pandemic was never here</h2>
        cohort size isn't accounted for in excess deaths age standardized,
        population growth was 1.2m/yr life-expectancy ago
        <br />
        <br />
        hung jury-permits are illegal no matter what the racketeering courts say
        <br />
        <br />
        Scientists today think bacteria and virus are diagnosed by severity,
        nothing real
        <br />
        <h2>
          the right reasons free-market, instead of jury-permit/target margin,
          with infinite producers, hypocritically for government rent seeking
          instead
        </h2>
        make Verizon be consumer-surrogate broadband and target-margin
        <br />
        <br />
        Win that national security free rider mutable federal contract,” John
        Solomon, “nice About rent-seeking instead of consumer-surrogate of
        target-margin, jury-permit private investors
        <br />
        <br />
        Tax for every mile or value is not purchase sales price, truncated out
        of home sales HUD rent seeking government-gentrification, monopsony and
        trust-building contractors 40% debt spending and 10-40% bond laundering
        (debt servicing)
        <br />
        <br />
        Any non-consumer money (or tax) is wholly-elastic, and aid from similar
        demand of industry-predilections or physical contributions are help,
        trade is less so, and corporate profit is harm, why not outlay right
        away?
        <br />
        <br />
        Co-opting mutual aid as investment is predatory
        <br />
        Only money from consumer of the same market isn’t inflationary, actually
        helps. Otherwise physical help
        <br />
        <br />
        Health insurane is a net loss according to Krugman, prisoners' dilemma
        according to me for non-concurrentable-units. M4a meant invoices are
        theft before Schumer
        <br />
        Mechanic and home warrranty grandiose scopes, unsettled isn't collective
        bargain. Is fraud of such
        <br />
        <br />
        Collective bargaining for a purchase is true, but not laundering into
        general accounts or markets to prevent prices from falling by expiring
        insurance <br />
        Public banking is government rent seeking
        <br />
        <br />
        chip and metal shortage is manufactured, inventory is stacked of a
        bifurcating technological market of cheaper gas cars and electric new
        impossibly except for collusion amongst finite producers, abjectly
        <div
          style={{
            height: "min-content"
          }}
        >
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1z2ogVdmQMKjN0gCFyts1xRt_e6DMDIhh/preview"
            }
            float="right"
            title="Frederica Whitfield - headshot"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          Many are turning to [volunteer organizations, not charities that are
          elastic for same goods, as opposed to actual contributions] to collect
          goods, Frederica racketeers and cajoles aid/welfare by share-split
          instead of volunteering/contributing with actual things
        </div>
        <div
          style={{
            height: "min-content"
          }}
        >
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1a9gLVaGfwwEDrBR_AXo4dxARif9maNx6/preview"
            }
            float="left"
            title="CNN with John Avlon propoganda and slander before jury, whatever (but cannot disclude unless paid platform or jury-desist)"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          vaccines are propoganda, excess deaths age-standardized account for
          cohort size, please. notice ms matches paralytic polio 2.5m/38=39k/yr
          1951-53 adjusted for overal mortality (38 is life-expectancy, better
          to know as average-lifetime, of 1900 for polio-symptoms, not -cause as
          is bacteria) by sewage and population size (1.25/38=35k/yr)
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1FNVXPggrsPKXYSJFHahpsd1c7BSifa7t/preview"
            }
            float="left"
            title="Frederica Whitfield - Elizabeth Clayborne MD, saveFace efforts for malpractice"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          Why is bacteriaphage also called virus? Is it unsure where it comes
          from because you only have snapshot rather than in vivo control?
          <br />
          Scientists think viral v bacterial disease is severity&nbsp;
          <span role="img" aria-label="side-splitting-laughter">
            🤣
          </span>
          &nbsp;is a byproduct not cause. You’re a nut
        </div>
        <br />
        <br />
        expiring-insurance abett invoices begetting expiring-insurance
        <h2>
          broadband rent seeker manchin: will not target margin
          jury-permit-mvp-duress finite producers
        </h2>
        "People need to be working for their benefits,'" Chris Reegan quoting
        Manchin, talking about corporate/government selling out of labor-IP,
        against $12k/person/year funded-jobs from debt/down generated income,
        somehow never becomes checking because of BIPARTISAN FRAUDULENT
        accounting
        <br />
        <h2>
          "reduction of poverty by 50%" for a moment is the best friend of
          poorness, monthly-savings is negative when amortizing premium
          increase-hidden
        </h2>
        rent-seeker for gov contractors and 40% debt spend 10% bond-laundering
        (debt service). They take your econ degree away if you think
        debt/down=11/1 isn’t production, 60% wall st $32/person/day before
        3/2020.
        <br />
        <br />
        "if you can't print it, you can't inflate it," talking about accrual and
        expiring-insurance as opposed to settlement. inflation to people means
        price-inelasticity of bid-to-ask beyond concurrent-reality (currency) by
        any means, not goods price changes from dollar-park-share-split alone,
        without debt:cash*purchases USELESS-RETARDATION, for some hypocritical,
        gluttonous and racketeering reason of currency controllers from wall st
        malintents, exclusively. public parks are the backing of the dollar,
        made by G-d. you cannot legally-share-split in compounding nor
        general-income, competing with consumer-terms
        <div
          style={{
            height: "min-content"
          }}
        >
          <div
            style={{
              maxWidth: "200px",
              zIndex: "1",
              backgroundColor: "rgba(0,0,0,.4)",
              position: "absolute",
              left: "0px"
            }}
          >
            RETARD, socialism by name alone
          </div>
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1k5Eobtz4lNwWna6QJY197xEMK_Zvaag_/preview"
            }
            float="left"
            title="Dick Morris - retard on radio, consultant for bipartisans"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          sacrifice bond-index-funds and government-rent-seekers on free rider
          mutable operating broadband, roads, oil-pipes, land-bids
          <br />
          the cause of price-changes are debt 4400% and inflation by money 102%
        </div>
        <br />
        <iframe
          style={{
            shapeOutside: "rect()",
            float: "left",
            width: "200px",
            maxWidth: "80%",
            border: 0
          }}
          src="https://www.youtube.com/embed/nKvUf7F4Xn4"
          title="YouTube video player"
        />
        <br />
        <h2>
          Transitory bid-to-ask inelasticity, across Apple and oranges (public
          officials own stock, abstain (not default “no”))
        </h2>
        Wall St is a greater force of inflation (or inelasticity if you are a
        hypocrite about price-changes, by accrual implausibly contracted,
        counterfeit in contract and loitered collateral-intermediate-goods as
        opposed to using earnings like main st and
        bootstrapping-entrpreneurial-laborers), than government, being 60% of
        new debt, $32/person/day
        <br />
        Inflation may be temporary as per wages, but wages are just hiding the
        static inflation, unless you only call inflation changes and disregard
        past demand, and they are intermediate-supply to boot, that is labor,
        that is consumers, inseparable except by precedence of wall st third
        party beneficiary implausibly-compounded, laundered and keeping down
        payments upon reposession like regular entrapments with duress and
        abject-non-consent
        <h2>
          third rail majority is Saver, libertarian and greens are redundant,
          socialists think reposession of collateral shouldn't reimburse down
          payments & price-fixing with welfare is at all social for
          laborequity.org
        </h2>
        <div
          style={{
            height: "min-content"
          }}
        >
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/19PM-Mgnaf1tBKWOaqyADICjBdINxJr6c/preview"
            }
            float="right"
            title="Save the Nation (Newsmax) - 'Freedom Works'"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          "Infrastructure is an important topic," says the slighter of inflation
          of free rider-mutable contractor-operating rent-seeking by
          bond-laundering. let private own roads, but margin-target tolls
        </div>
        <br />
        <br />
        <h2>
          no payment, no discrimination, for labor no comment, no discrimination
        </h2>
        Think creatively, fantasy-level stuff of fantasies .
        <br />
        <br />
        Third party beneficiary trust-building just like Britney is John or
        Carlson, non-compete. Redraft every season, lmao…
        <br />
        <br />
        You can say people are Willy-nilly without evidence until the case to
        verifiably desist (with proof of not being)
        <br />
        <br />
        Brian Stelter, Rashad: "Misinformation on the platforms we see are from
        a small number of people, so we need to keep them off," only 1/12 jury
        of population is crazy and desistable, all else is reasonable doubt
        <br />
        <br />
        <div
          style={{
            height: "min-content"
          }}
        >
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1n46ZWb2JIxj059joG8g1rqAAlnvWbj0j/preview"
            }
            float="right"
            title="Save the Nation (Newsmax) - intro"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          I have been accused of punching and kicking BY THE STATE-HOSPITALS
          WITHOUT EVIDENCE, POLITICAL PRISONER HELD FOR 13 days, trying to elope
          the siringe of medication unrelating to my original knee issue and
          based on the opinion rather than biological malformality that non
          rollover insurance should be illegal is bizarre, while Paul Krugman,
          father of gdp, can describe it as a net loss (that is not a productive
          "business-producer" of willing/fully-aware consumers), I arrived at
          that conclusion with prisoners' dilemma logic and expiring-insurance
          per unit-concurrentable is an oxymoron
          <br />
          <br />I literally had an open shot at their ribs but they claimed I
          hit them then strapped me down
        </div>
        <div
          style={{
            height: "min-content"
          }}
        >
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1k5HHziJp8T-Pp1oqBYwn3JNh8lqDy24q/preview"
            }
            float="left"
            title="Save the Nation (Newsmax) - 'Freedom Works'"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          <h2>
            no talent, no problem. trade-secret education, keep kids from
            earning wealth. all in all, you're just another brick in the wall...
          </h2>
          "Coping with anemic job growth," in way of preventing immigration of
          working age immediately and doing busy-work (without customers
          down-payment/gdp 1/11), liberty to this afro-tool. My chorer,
          laundering fruits of labor profits to bonds, corporations and existing
          business ppp. calls r&d by rent-seeking-gov and wall st a "good thing"
        </div>
        <br />
        <h2>
          Brian Stelter,&nbsp;
          <a
            href="https://brainscan.info"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            mental disorder
          </a>
        </h2>
        mental disorder by name alone, just like diagnosis of bacterial-vs-viral
        infection, "how severe is it?" Bacteria is exclusive cause of virus, to
        submit your preconceived notions into evidence is abjectly illegal, but
        there is always doubt your actions are because of a
        biological-malformality without even controlled-correlative-regressions
        <br />
        <br />
        corporate culture is complacent culture
        <h2>
          I guess occupy wall st is on the right, then? I figured more
          bottom-left as Libertarians have higher prevalanece of wall st than
          ideolgically-duressed bipartisans
        </h2>
        CNN: "Will public utilities with operating costs create inflation as
        right wing pundits claim?" it will because it allows bond-index-funds
        not to work and contractors r&d advantage for useless-price-inelasticity
        of bid-to-ask. then they say you save-monthly with higher premiums (just
        like Mark Levin), without averageing collective write up costs of
        expiring-insurance without units-concurrentable
        <br />
        <hr ref={this.props.thumbprint} />
        <AProduction
          scrolling={this.props.scrolling}
          top={this.props.top}
          scrollTop={this.props.scrollTop}
          inSection={this.props.inSection}
          width={width}
        />
        <div
          style={{
            position: "relative",
            height: "min-content",
            width: "100%",
            fontSize: "10px",
            backgroundColor: "rgb(100,150,200)"
          }}
        >
          <a
            href="https://magnate.company"
            style={{
              color: "rgb(100,200,150)"
            }}
          >
            EVERYCREDIT HAS AN EQUAL AND OPPOSITE REACTION, in price,
            exclusively
          </a>
        </div>
        <button
          style={buttonstyle}
          onClick={(e) => {
            e.stopPropagation();
            this.setState({ c2020: !this.state.c2020 });
          }}
        >
          <h3>c2020</h3>
        </button>
        <br />
        {/*
      <div
        style={{
          zIndex: 1,
          display: this.state.c2020 ? "block" : "none",
          alignItems: "flex-end",
          width: "100%",
          height: "min-content"
        }}
      >
          <App
            settleDropboxFree={this.state.settleDropboxFree}
            width={width}
            ios={this.state.ios}
            inSection={(section) =>
              !this.state.ios &&
              this.setState({ inSection: section, openMenu: true }, () => {
                clearTimeout(this.openmenu);
                this.openmenu = setTimeout(
                  () => this.setState({ openMenu: false }),
                  5432
                );
              })
            }
            pauseScroll={() =>
              this.setState({ offScroll: true }, () => {
                clearTimeout(this.offScroll);
                this.offScroll = setTimeout(
                  () => this.setState({ offScroll: false }),
                  5432
                );
              })
            }
            landedPresentation={
              this.state.landedPresentation && this.state.openMenu
            }
            openMenu={this.state.openMenu}
            scrolling={this.props.scrolling}
            scrollTop={this.props.scrollTop}
            top={this.props.top}
            section={this.props.inSection}
            goToTop={() =>
              this.setState({ highlightLaw: true }, () => {
                setTimeout(
                  () => this.setState({ highlightLaw: false }),
                  10000
                );
                window.scroll({ top: 0, behavior: "smooth" });
              })
            }
          />
      </div>*/}
      </div>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <APrologue {...props} {...ref.current} />
));
