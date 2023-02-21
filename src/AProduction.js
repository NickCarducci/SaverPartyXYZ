import React from "react";
import Cable from "./Dropwire";
import TwitterTweetEmbed from "./TwitterTweetEmbed";
class AProduction extends React.Component {
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
    return (
      width && (
        <div>
          <TwitterTweetEmbed
            style={{
              float: "right"
            }}
            key="1433877605606952965"
            tweetId="1433877605606952965"
          />
          Kudlow thinks emergency spending is required to keep successful
          companies paying the same intermediate-good prices. Does supply-side
          mean to bloat means of production prices to trust-build?
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/16xeox2a9jgiwAi5ZQHugwsXU4D5ELu2k/preview"
            }
            float="left"
            title="Save the Nation (Newsmax) - intro"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          Social safety isn't price-fixing, millions won't be paying for
          decisions of congress because we only service (bond-launder) with 10%
          and debt spend with 40%
          <button
            style={buttonstyle}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({
                freedomFromCompoundLaundering: !this.state
                  .freedomFromCompoundLaundering
              });
            }}
          >
            <h3>freedomFromCompoundLaundering</h3>
            <br />
            and retarded comparative advantage, tech advance,
            price-deflation-per-hour nationalism. You've got the thing
            upsidedown.
          </button>
          <br />
          {/*} <div
        style={{
          zIndex: 1,
          display: this.state.freedomFromCompoundLaundering
            ? "block"
            : "none"
        }}
      >*/}
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
                  : "https://drive.google.com/file/d/15Hxp8VGKCFJWkNPbwQ5EYcXHvGXx22Fz/preview"
              }
              float="right"
              title="Save the Nation (Newsmax) - intro"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Freedom to do what we want to do to fulfill their destiny. Is that
            decided by you laundering to compuond interest (and
            government-/wallSt-gentrification) terms or business account (and
            target margins)
          </div>
          <br />
          "Stabilize Ukraine economy with loans," says IMF {/**Fiona Hill */}
          (keep down payments upon reposession, useless-price-inelasticity of
          bid-to-ask (money cannot wash dishes, but launder to contractors and
          bonds rent-seeking))
          <div
            style={{
              shapeOutside: "rect()",
              float: "right",
              width: "200px",
              border: 0,
              fontSize: "60px"
            }}
          >
            F
          </div>
          <br />
          <br />
          most crimes aren't illegal by natural or comparative law, but
          incarceration makes profit on net loss operation with bonds, which is
          inflationary... a waste... dead-weight, public or private, doesn't
          matter
          <br />
          <br />
          cannot trust finite producers to innovate in a bona fide sense, nor
          regulators to target margin & jury-permit-mvp-duress finite producers
          in a bona fide sense, either
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
                  : "https://drive.google.com/file/d/1ACzvwjH5snzzpBJvJNcwYXX7AMlj5FPu/preview"
              }
              float="left"
              title="Anna Swanson - Forbes portrait"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <h2>
              money growth is inflationary, labor-competition with new business,
              not existing trust-building, is deflationary
            </h2>
            Anna Swanson: "lowering economic growth will lead to inflation," but
            growth is measured by immigration of working age, prices and hours
            determined by anything, including busy work without customers ready
            willing and able or selling business accounts, down-payments to gdp
            1/11
          </div>
          <br />
          <br />
          degrees for the inefficient economists, Larry Summers wants
          tax-revenue by free rider mutable 40% debt spending and 10%
          bond-laundering. He pleads, "Allow the fed to do what it needs to do,"
          truncated sales tax after cash:debt*income thru income is the right
          answer. Not selling out or counting debt and hours as productive
          <h2>
            they take your economic degree away if you are
            anti-debt-rent-seeking as dead-weight, useless for supply and demand
            price-deflation per hour (output)
          </h2>
          "robbed of purchasing power by higher prices," totally ignores the
          bond-index-fund investors not working, prices should be declining
          amongth population growth over time, as was before 1913 if not even
          private banking were allowed to surrender settlement of your own being
          the burden of your customers/employers
          <h2>don't need to engineer interest-rates, can rule it out</h2>
          “Right wing populism is nationalism,” Fareed Zakaria. no inflation, is
          temporary."
          <br />
          <br />
          “Free open and fair economic system,” Dept Defense. Free would be
          fair, those aren’t ever mutually exclusive, unless you think down
          payment kept upon repossession of collateral from loitering-borrowers’
          consumers is free, abjectly lo, by delusions
          <br />
          <br />
          What are the symptoms of strep vs. a viral infection?
          <br />
          A true streptococcal infection of the throat often leads to
          excruciating throat pain accompanied by difficulty swallowing and even
          speaking. Fever may be present, and the tonsils are often covered with
          a whitish layer of pus. Cough and runny nose are not commonly related
          to strep throat, but it is possible to have a streptococcal infection
          along with a viral upper respiratory infection and symptoms of a cold.
          The bacterial infection may result in enlarged, tender lymph nodes in
          the neck. Children may have an accompanying rash; a streptococcus
          infection along with a rash is commonly termed scarlet fever.
          <br />
          <br />
          Why do you need the state to own pipeline, use dollar-share-split or
          tax to purchase and rent-seek free rider mutable, just target-margin a
          consenting consumer surrogate for a toll, no need to rent-seek
          broadband either, no way it saves except in monthly to principal
          hidden like expiring-insurance and M4A; why don't you divide principal
          to month to bona fide compare?
          <br />
          <br />
          Navarro: "everyone can put a 401k and hedge inflation," catsimitidis
          replies, "those people made a ton of money!" what a fucking idiot,
          that is last-trade, one at a time
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
                  : "https://drive.google.com/file/d/1PdnEEY9CA7fw01HdtLCvOAS7mf65p4gM/preview"
              }
              float="left"
              title="Brian Deese - official portrait"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              style={{
                transform: "scale(-1,1)"
              }}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/17yzun7_Cvqn7rwDSaR-k1AZuINkvZY38/preview"
              }
              float="right"
              title="Brian Deese - official portrait"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Working with ports across the country, to make production transport
            faster (money cannot wash dishes, demand by more money is useless
            laundering to liabilities & trust-building. DEMOCRATS DONT WANT TO
            MARGIN TARGET. Money is elastic, summers saying it won’t cause
            inflation and will include more people than existing small
            government contractors than contributors and new labor is incorrect
            <br />
            <br />
            Housing healthcare transportation rent-seeking
            <br />
            <br />
            “Artificial interest rates,” but home value isn’t artificial?
            Fucking wall st con. Reverse debt:cash*income stop hiding premiums
            for monthly savings THEN truncated sales tax
          </div>
          <br />
          <br />
          “$24k/yr public schools, tax-payers,” upon 40% debt spending? Stfu Al
          D’mato market-communist. Free market communism now: get wall st out of
          business. Savers pay
          <br />
          <br />
          Eradication of poverty is the best friend of poorness
          <br />
          <br />
          “Artificial interest rates,” but home value isn’t artificial? Fucking
          wall st con Catsimitidis. Reverse debt:cash*income stop hiding
          premiums for monthly savings THEN truncated sales tax
          <br />
          <br />
          nothing socialist about reappropriating/controlling
          <br />
          Supply line traitor by rent-seeking instead of target margin personal
          investment. Stop separating consumers, labor and investors! The only
          public utility that isn’t a waste is contractor and bond laundering
          operating-costs. Bipartisans are a minority, if without ideological
          duress. Only jury can tax beyond sewage police lawsuits, but not for
          operating-contractors nor -bonds, not by bonds (now 40% nationwide,
          10% service, 100% withdrawalable (not at once, collective bargain
          fraud), not "tax-payer")
          <h2>bipartisans looking for a fight</h2>
          <br />
          <br />
          <a
            href="https://health.clevelandclinic.org/virus-vs-bacteria-whats-causing-my-kids-cold/"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            6/2020, WHO:
          </a>
          <br />
          "FACT: The coronavirus disease (COVID-19) is caused by a virus, NOT by
          bacteria
          <br />
          The virus that causes COVID-19 is in a family of viruses called
          Coronaviridae. Antibiotics do not work against viruses.
          <br />
          Some people who become ill with COVID-19 can also develop a bacterial
          infection as a complication. In this case, antibiotics may be
          recommended by a health care provider."
          <h2>
            <a
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters?gclid=Cj0KCQiA4b2MBhD2ARIsAIrcB-T1u2IWMw6zQLL9M02SXRpxiKQV3FxD52g5QxVZsc3Qnj279KqfoMIaAltVEALw_wcB#virus"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              WHAT A FUCKING JOKE
            </a>
          </h2>
          <br />
          <br />
          First asymptomatic test is retarded in the eyes of a bona-fide
          statistician for time-series (epiology)
          <br />
          Highest testing and vaccination rate is because they are the same
          predolictions zuhdi jasser. Stop blaming the byproduct as cause
          <br />
          <br />
          Chase points paid by investing fractional reserve in contract by
          hypocritical-libertarians by time-royalty not awaiting customers but
          still laundering and KEEPING down payments upon repossession of
          collateral, birthing Marxism as to diametrical opposition to such
          credit/business-cycle
          <br />
          <br />
          "Never done medicine to benefit others,” vaxxers think virion is an
          evolutionary-trait&nbsp;
          <a
            href="https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            as opposed to exclusive virion-production by bacteria
          </a>
          <br />
          <button
            style={buttonstyle}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({
                bipartisannationalism: !this.state.bipartisannationalism
              });
            }}
          >
            <h3>bipartisan-nationalism of free rider mutable tax</h3>
            <br />
            from outside the market, collective flaccid loss
          </button>
          <br />
          {/*<div
        style={{
          zIndex: 1,
          display: this.state.bipartisannationalism ? "block" : "none"
        }}
      >*/}
          "Trumps economy wasn't anemic like Obama, we have driven all races to
          work," you're going the wrong way JJD, we want less hours-worked and
          more people immigrating-working-age, right?
          <h2>
            fake jobs, demand by money is elastic, demand by immigration working
            age is the other way
          </h2>
          Micron semiconductors: “Sustained government support mean jobs,” is
          literally racketeering R&D monopsony-trust-building existing small
          business over new business, contributors & labor
          <br />
          <br />
          stop laundering share-split involuntary fractional reserve in
          non-signed contract to lenders and landlords for implausible use
          intent&nbsp;
          <a
            href="https://30under5.us"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            number of units beyond 5 or 30 days
          </a>
          <br />
          <br />
          marxists don't want you to go bankrupt but amortize reimbursement of
          down payments to borrowing loiterers' consumers/employer, by reverse
          debt:cash*income thru history, and spoofable=geohash/month reporting
          from your open-source-paytech-provider to accounting softwares and
          banks
          <br />
          <br />
          people on the bottom-left, don't want higher hidden premiums for
          monthly-"savings" in debt-spending by wall st nor
          government-gentrifiers, rent-seeking on operating public networks
          instead of target-margining tolls and production usage, private
          investors. the bipartisan right want to rent-seek broadband with for
          government bonds and contractors without competition of r&d by
          bootstraped contributors, rather small business over new business ppp
          trust-building-monopsony
          <br />
          <br />
          Anthony Scaramoocci: "great investor, keeping down payements upon
          reposession." On dollars, “not worth anything, but you can trade it
          for goods or services.” Actually it represents the deeds of 20% of the
          US being federal lands. "Because of scarcity, prices of Bitcoin is
          going higher.[ But it is merely a surrogate of actual," and is merely
          as secure as the wallet, who store your passwords, unless the
          transaction has your name written on it. Transferring power from state
          to wallet isn't a technological innovation in security, merely a
          social one.
          <br />
          <br />
          who owns bitcoin? it should be given equally first, if anything. the
          nodes are the many copies? the pr copy doesn't seem to say the node
          that affirms transactions updates the history of transactions that
          ever happen. Or is the transaction the hash and not the history, then
          where is it distributed/replicated? the security-contribution of
          blockchain isn't the RSA-modulo-hashing but the consensus with the
          IPFS theorum, which can be achieved by content-addressability if you
          don't need to edit nor anonymize, or an ArrayArrays to match count of
          id to anon entry.
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1rq_W7Sqm35VzGsYW5dsJ5Y925Hcew_Wr/preview"
            }
            float="right"
            title="Chris Salcedo - Thanksgiving rants about trade without accrual, blaming socialists"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          Pilgrims cannot do their best work without incentive to do so, while
          right-wingers wish to keep profits in corporations and accrual
          <br />
          <br />
          Chris Salcedo: “Plot of land for each family, hoever much they made,
          was theirs, turned loose the power of the free market, good old
          fashioned free enterprise, …their own crops and products,” without
          third party beneficiary
          <br />
          <br />
          The flaws of user-side is more: who owns your wallet? the ledger isn't
          immutable because the identification is still determined by the
          wallet-auth, who store your password on their servers
          <br />
          <br />
          weed is a competitor to public-park-parks. I was right that dollars
          come from G-d when my Econ double major was taken away from me
          <br />
          <br />
          de-fi decentralized finance from an exchange that needlessly doesn't
          hide uuid in brokerage-tranches unlike {">"}5% equity-13D filers,
          abjectly to compete with consumers. 2 week anonymous-executions and
          execution-discovery-reporting
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
                  : "https://drive.google.com/file/d/1uAbr1jJ8Wo9jnCvp-EqGvgfTO3EjzSgD/preview"
              }
              float="left"
              title="Mark Halpern's voter-biased polls - gloating for duress of infrastructure for 40% debt spend, without even a warning"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            “Banks consolidate money and loan it out, that’s how banks make
            money, I’m gonna receive my loan, no middle-men.” facilitating
            human-trafficking by proxy, no better than fractional reserve by
            government away from social labor's earnings and individual labor
            savings, only useful on collective bargaining per unit on the same
            market, as productivity by price-deflation is per hour, not GDP.
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
                  : "https://drive.google.com/file/d/1xbr43udEmylbwPwIvzG7JVO52TgKu9ef/preview"
              }
              float="right"
              title="Mark Halpern's voter-biased polls - gloating for duress of infrastructure for 40% debt spend, without even a warning"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            People DO NOT want bipartisan spending on free rider mutable “roads
            & bridges,” when 40% is by new debt, nor even before all debt is
            reversed to cash spending
            <br />
            <br />
            "entitlements are inflationary," but (rent-seeking such free rider
            mutable tolls for target margin AFTER reversing debt:cash*income
            instead of laundering by bailout dollar-park-share-split nor cancel
            forbidden by past settled demand), is not? busy-work if without
            consumer-investor anyway (stop separating them! redundant as all
            fuck)
            <br />
            infrastructure is going to provide jobs for the eastern seaboard,
            the rest is governmental malpractice" RPK
            <br />
            <br />
            third party beneficiary is way to cash:debt*income as amortizing
            reimbursement of down payments upon reposession.. thru supply Chain
          </div>
          <br />
          saver party will retire you,
          <br />
          by class-action-trust-building-tort/amortization or tech-advancement
          without dead-weight-rentier in supply and demand, other than labor
          <h2>
            monthly-savings for premium hidden is a waste, gdp/down-payments
            11/1 is not a job; boycotting credit as income as ticket seller:
            have to make my own paytech. don't let 501c3 rent-seek
          </h2>
          premiums hidden by 40% debt spending is red herring by People's,
          Socialist's and Greens, whom do not want to ban invoices &
          expiring-insurance nor cash:debt*income thru history
          <br />
          reappropriating labor equity isn't social, certainly
          <br />
          transitory is accross supply chain, desistable
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
                  : "https://drive.google.com/file/d/1ZshzQVUqk-igkvo35kId9emEp-MMcQJ2/preview"
              }
              float="left"
              title="The Count w/ rob schmitt - jenna ellis and bruce levell on discovery-related-torts"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            They will use the&nbsp;
            <a
              href="https://github.com/nickcarducci/react-fumbler"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              tools at their disposal
            </a>
            , _ in the hands of the judge. Penalty jail, prison, fine. But they
            make money on that by net loss bonds, to boot. Isn’t that a conflict
            of interest to make the whole judicial body moot? YES, AND THEY ARE
            TREASONOUS
            <br />
            <br />
            <h2>law by name alone</h2>
            Deleting messages isn’t an obstruction of justice, especially not a
            crime in itself to boot except in tortious claims by legitimate
            parties, not the bonded-state without a victim. For instance,
            closed-source-licensure by fda is illegal law, but is convictable
            anyway (for no victim)
            <br />
            “I suppose turnabout is fair play.” Jim Acosta
          </div>
          <br />
          <br />
          you can't 10.5 celcius,
          <a
            href="https://www.carbonbrief.org/explainer-how-the-rise-and-fall-of-co2-levels-influenced-the-ice-ages"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            greenhouse gases make things hotter, but is average heat across the
            poles as well, obliquity aligns with the CO2 binding, so either
            humans come in 41k/yr cycles, or CO2 de-binding is also a natural
            occurance
          </a>
          <div style={{ padding: "10px" }}>
            Im on the left because accrual isn’t income and finite producers
            don’t want jury
            <br />
            <br />
            Non-voters win again! Give us an Occupy wall st candidate (not
            bailout nor cancel, but reverse debt:cash*income)
            <br />
            _a green and socialist candidate was on the ballot. Why you no
            vote?...
            <br />
            they want to cancel or bailout not reverse. Read my platform
            SaverParty.xyz carducci.us
            <br />
            <br />
            Not hiring for smoking or not getting vaxxed before jury that virus
            is a killer is ILLEGAL per natural law, lest give us a list of your
            employees to deflect without jury-truth
            <br />
            <br />
            "Individuals as well, business in general are getting caught in the
            squeeze," cnn abiguates one party into supply and demand to bring it
            forward or whatever the fuck
            <br />
            <br />
            Rat race competing with consumers is not free markets that communism
            seeks to UPHOLD, and market-communism seeks to launder. After all,
            it is not very social to reappropriate the means of labor unless for
            torts, nor keep margins in corporations and unions for without
            perpetual-motion-machines in public (like parks, truncated sales tax
            rangers) else target-margins in private ownership (tolls on highways
            and pipes), consumer as producer choice (charging stations
            margin-targeted as well, as is not a price efficiently found to
            foster output productivity per price per hour, and apples/orange
            elasticity as opposed to insular-market elasticity is as subjective
            as the pricing mechanism is without a bid-ask last trade tick… just
            your gut (propensity to spend earnings…)
            <br />
            <br />
            all retailers with fake consumers (loitering borrowers)
            <br />
            Fortune 500 companies shouldn’t be the goal, taxed for the
            opportunity to sell out is a&nbsp;
            <span role="img" aria-label="red flag">
              🚩
            </span>
            &nbsp;
            <a
              href="https://www.forbes.com/largest-private-companies/list/2/#tab:rank"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              originally wrote this about tax to be public-traded corporate
            </a>
            &nbsp;as opposed to a non-rent-seeking proprietor with&nbsp;
            <a
              href="https://lightte.ch"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              custom contracts
            </a>
          </div>
          <h2>drop dead common-sense: chicken or egg, doesn't matter</h2>
          protection from disearse and death, but those latter aren't judged by
          the actual cause, just the byproduct. still&nbsp;
          <a
            href="https://froth.app/consumption"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            retail sales
          </a>
          &nbsp;have the biggest have most of the debt/down-payment 11/1 share,
          surely not hospitality
          <br />
          <br />
          Their whole lives to save
          <br />
          <h2>proper registration of closed-source animal-testing</h2>
          They were forced to bet on IRA by duress or jail
          <br />
          Truncated sales tax can suffice, to say force was needed to fund free
          rider immutables with asset appraisal based on lies is NUTS, fucking
          afro-tool
          <h2>
            gdp/down-payment is no different to prices than share-split making
            those "purchases" with loitering-borrowers' customers/employers
            money, made true by share-split of laborequity.org
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
                  : "https://drive.google.com/file/d/1aCHWX6VWL86E0WC-WFRIAMS4_PUPFlwv/preview"
              }
              float="right"
              title="Saturday Agenda w/ jo pinion - slighted inflation fears for partial-cause, not even most"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Quarter of a trillion in debt, that is just part of regular spending
            and if that were included, part of mostly wall st. Fucking
            hypocrites. Not hiring people because of your weed prejudice is
            retarded
            <br />
            <br />
            “Inflation effects the middle lower working class the most”
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
                  : "https://drive.google.com/file/d/1xLfnrDWHCYtzezFokQWbbJS40nWDtm0a/preview"
              }
              float="left"
              title="Saturday Agenda w/ jo pinion - Marxist slander"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            wall st and gentrification-by-government is market-communism and
            rent-seeking, occupy wall st is free-market-communism or socialism
            that is labor without dead-weight-rentier in supply and demand,
            outlay profits today. Do not separate labor and consumers of
            intermediate-goods, the value is theirs, not to be reappropriated by
            wall st appraisals and withdrawal-structures backed by court-actions
            and class precedencial malfeasance of natural, countervailing and
            comparative law
            <br />
            <br />
            spend more decrease inflation, I don't know who believes that,
            American people get it, the left doesn't. the left wants more
            control, an accelerated march to communism."
            <br />
            <br />
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1zOv5ecK_yGP9xZ4VmhR5EtCATCk0MEOV/preview"
              }
              float="right"
              title="The Count w/ rob - fmr diversity for neo-nationalist-fixed-income job-guy Trump"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Decrease production, increase production, how about allow consumers
            to choose the rate Production by money costs more, less production
            by money costs less. America first without working age immigration
            is retarded to your stated druthers, JIM JORDAN (hypocrite)
          </div>
          <br />
          profits are net loss of individual savings: supply-siders are
          market-communists: "
          <a
            href="https://hightoweradvisors.com/stephanie-link.html"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            stock prices reflect higher profits, and that is a good sign.
          </a>
          " the bitch thinks hours is productivity too. IT'S THE FUCING
          DENOMINATOR IN THE TIME-SERIES under preferably price-deflation than
          output changes
          <h2>
            "are we going to 'get' the infrastricture money, we still have a
            liquidity boom"&nbsp;
            <span style={{ fontSize: "8px" }}>
              you don't just 'get' dollar-park-share-split for rent-seeking on
              operating-contractor purposes
            </span>
          </h2>
          plenty of jobs gdp/down-payments 11/1 is BUSY-WORK without actual
          setlled customers, but not enough working-age immigration, if you want
          that, we never needed emergency policy when cap rent at 5 units or 30
          days, not price
          <div
            style={{
              float: this.state.iosNoPhoto ? "" : "left"
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <TwitterTweetEmbed
                /*style={{
            display: "inline-block",
            position: "relative",
            height: "min-content",
            shapeOutside: "rect()",
            float: "left",
            width: "600px",
            maxWidth: "100%"
          }}
          float doesn't work for twitter api widgets
          */
                key="1421471623136358405"
                tweetId="1421471623136358405"
              />
            </div>
          </div>
          <br />
          <br />
          wages are great for the consumer," are you literally separating new
          business and consumers? 75% of gdp, bitch what is 25%?
          <br />
          <br />
          can't have inflation without financing (cannot spend bond-value on
          goods, but can withdrwawal against it in accrual, fractional-reserve
          in private-contracts. HYPOCRITE non-bona-fide criticism. stop calling
          bond-value savings little bitch kudlow)
          <br />
          <br />
          Why would their not be investors bound to targeted margins for being
          finite producer network? And eminent domain of none except the market
          <br />
          <span role="img" aria-label="clown show">
            🚨🚨🐿🛢🚬💊🤡
          </span>
          &nbsp;without government gentrification rent seeking. Refinery jobs is
          lifeblood of smaller towns, don’t let 10k’s job loss be thwarting
          nobody interested in investment (or carbon binded into the air)
          <br />
          <br />
          sales tax elimination, favorablely-disposed to Eric Adams," Larry
          Kudlow, only because you are laundering to 10% and 40% in state
          debt-service. cash:debt*income thru history and THEN ween cops off
          bonds. tax the outlets
          <br />
          <br />
          Marx is dead-utilitarian, maybe autonomy for emulating in finite
          producers
          <br />
          marxist authoritarian regimes
          <h2>“Trade as economic investment”</h2>
          Newsmax, “relying on aid to survive.” DOES AID DO THE DISHES? fucking
          morons
          <div
            style={{
              padding: "10px"
            }}
          >
            "Accrual couldn’t have gotten out of hand without the fed financing
            it.” These are modern socialists”
            <h2>
              nationalizing, rent-seeking broadband&nbsp;
              <span style={{ fontSize: "8px" }}>
                capital-investment does not increase production, just
                monopsonizes intermediate-supply-demand rather than outlay
                profits now
              </span>
            </h2>
            the right doesn't want truncated sales tax to be enforced, would
            rather home sales tax and debt, but then they aren't bona fide
            critical and say:
            <br />
            <br />
            "Simon and schumpeter+penguin house 27% of the market, cannot do
            anything without 'socialist' approval, they allow profits to not be
            outlaid and used for acquisition? Or do you misunderstand that
            infinite producers is an assumption of the reasoning behind free
            market efficiency in per hour output?
            <br />
            <br />
            “I’d like everyone be a millionaire, but not from [free rider
            mutable tax & debt government contractors] handouts[, yet by
            accrual, keeping down-payments upon reposession].”
            <br />
            <br />
            “Lefties don’t care about work,” the right doesn’t care about ACTUAL
            jobs before down payments 1/11 gdp, mostly because of wall st. They
            think inflation is a bigger deal than debt inelasticity of accrual
            appraised. CANT YOU COUNT BONA FIDE MAN?
            <br />
            <br />
            “Socialist wants government banks, controller of currency, hat in
            hand to foreign oil producers, to stop lending to domestic oil
            production,” I want to stop all lending, which wouldn’t improve
            competitiveness. More money demand is elastic for same resources by
            inelasticity of bid-to-ask, and more labor demand is elastic the
            other way
            <br />
            <br />
            “If it were up to this former communist, we’d be bankrupt!” Any
            cause of bankruptcy is the lending instead of business-account
            trading in the first place
            <br />
            <br />
            <h2>
              prosperity, housing market rebounded and prices are pretty hi-"
              Larry kudlow. "We've had a lot of banking deregulation but a lot
              of m2."
            </h2>
            60% fed bought 40% debt spending 10%
            <br />
            <br />
            Milton Friedman said that is the root cause of inflation while wall
            st makes more of that “Too money [accrual, share-split] chasing too
            few goods”
            <br />
            <br />
            By three months in, we reopened and didn’t need more relief.” 20% up
            was the plan by bipartisans. “Federal reserve was still implementing
            their emergency policies.” Treasury implemented shutdown policies,
            when the alarm was from more asymptomatic testing, not accounting
            for cohort size in timely deaths, making the cause for shutdowns
            insignificant. GOP do not regret spending so much, bailing out
            lenders and landlords.
            <br />
            <br />
            You dollars are getting less because of gov spend, but wall st
            accrual is 1.2x greater..
          </div>
          <br />
          Public housing and infrastructure is rent-seeking by government, 40%
          debt service & 40% debt spending. We need to reverse debt:cash*income
          <br />
          <br />
          SAVER IS BOTTOM-LEFT, NOT&nbsp;
          <a
            href="https://youtu.be/MTM2Pw73Ol0?t=172"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            VAXX-COMPLIANT, ANTIVAXX
          </a>
          <h2>anyone who calls themselves a scholar is a bastard</h2>
          Ro Khanna's latest cajole: "stimulous decreases inflation because it
          increases supply capacity." To purchase trust-building the same
          resources, does nothing for comparative advantage competition, the
          epitome of price-efficiency towards infinite producers, even...
          <h2>follow the white squirrel</h2>
          let consumers decide, but regulate producers,&nbsp;
          <a
            href="https://www.carbonbrief.org/explainer-how-the-rise-and-fall-of-co2-levels-influenced-the-ice-ages"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            understand that ice cores consisting of carbon is not proven to be
            absurd CO2
          </a>
          , the alternative you think is only
          upkeepable-electric-charging-stations, rent-seeked by gov
          gentrification
          <br />
          "people don't want handouts, they want good paying jobs, and an
          opportunity to succeed," those are opposites (oxymoron), Rick Santorum
          <br />
          "100k walked out&nbsp;
          <a
            href="https://fred.stlouisfed.org/graph/?g=H5XB"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            due to vaccine mandates
          </a>
          ," Logan Raddick
          <br />
          <h2 style={{ backgroundColor: "white", color: "black" }}>
            inflation is from wall st mostly, 60% new debt $12k/person/year:
            uppers legal by natural law
          </h2>
          brain-fog, is this a long-game to correlate marijuana use? it is a
          currency alternative, you&nbsp;
          <a
            href="https://teapharmacy.party"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            FAT PEICE OF SHIT GROCER PHARMACY GUY
          </a>
          , drop dead
          <br />
          positive-correlation with vaccination rate-of-change year-to-year &&
          hospitalizations, and symptom rate-of-change is insignificant,
          <a
            href="https://froth.app"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            virion-poop irregardless
          </a>
          "sellout to the state to rent seek and remain complacent rather than
          a&nbsp;
          <a
            href="https://github.com/NickCarducci/react-instagram-post/blob/7fb823bffdc7ce83b4a27df576779cfc0eaf9b0d/license.lz.txt"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            UNIVERAL
          </a>
          &nbsp;license,"&nbsp;
          <a
            href="https://truncatedsalestax.com"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            NO THANKS
          </a>
          <br />
          GOP/DEMS, you need to win Occupy over
          <br />
          <a
            href="https://froth.app"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            Same precedenccial excess deaths and hospitalizations for
            cohort-size, testing is basis rate not prevalence
          </a>
          {"<>~o"}; stop terrorising with your bizarre notions without
          concordiance with the jury-truths determined by non-desistations but
          absence of such exclusive-tort, within-ability of individual bid not
          "investors," in purchases without labor in such margins of
          non-perpetual-motion-machine with operating-costs-rent-seekable
          (competing-with-consumers)
          <h2>Cases have to solve, elections have to move</h2>
          everything w/ operating is rent-seekable&nbsp;
          <a
            href="https://constitutioncenter.org/interactive-constitution/article/article-iii"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            like imprisonment for net loss profit, jury-abdication or
            industrial-interest, duress-plea, perjury is moot
          </a>
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
                  : "https://drive.google.com/file/d/1Wg30Sv47tNa8_ECoTLG0DpUlSR6OrkSX/preview"
              }
              float="right"
              title="National Report - rittenhouse qualifications among police malfeasance"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            got a wide-stance
            <h2>Marx rolling over in his grave</h2>
            Half as many or half as much unemployed to population RATIO since
            half-life
            <br />
            <h2>
              Laws and precedence can be illegal in natural law (NAP,
              comparative, competing with consumer intent)
            </h2>
            Buyer beware open source license fda
            <br />
            <br />
            No breakdown guarantee or it’s free is like a friends and family
            discount, 40% debt-spending of $4t/yr fed spend pre-3/2020 with
            gdp/down 11/1 and $2t cash (pre-3/2020)
            <br />
            <br />
            Your income goes up because of inflation of assets, so is that a
            good thing? " i worry the concentration of state power," but not
            rentier? not bona fide critique
          </div>
          <br />
          Ask Jen Psaki and the White House before they remove their
          overwhelming dislikes amidst login.gov malfeasance for
          repeat-offenders and fraud, if the chicken or egg came first, like it
          matters, maggots grow from meat, the sun revolves around the earth and
          light speed squared, even matters.
          <br />
          <br />
          vaccines/antibodies only clear the byproduct, not the cause of
          infection and illness in bacteria-cell byproduct
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
                  : "https://drive.google.com/file/d/1rN9tCSjZrzT3KFiiV0ot69NV0hiiw0wt/preview"
              }
              float="left"
              title="National Report - rittenhouse qualifications among police malfeasance"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <h2>realizing common sense is fallacy</h2>
            if cops cannot recover nor protect, you can step up. qualify my dick
            <br />
            <br />
            is he qualified? the riots for 90days prior was obvious malfeasance
          </div>
          <br />
          <br />
          <h2>no candidate, no vote, less power</h2>
          expiring-insurance abetting invoices that are theft begetting
          expiring-insurance a vote-no is deduced from not-voting, candidates of
          plural-majority non-voters should have no power and default to "no"
          unless for holdings of industry-interest to force-abstain of
          sitting-officials
          <h2>
            duress is not a choice; off-jury-duty when understanding that
            expiring-insurance is fraud&nbsp;
            <span style={{ fontSize: "8px" }}>
              I called to eliminate copays,” millions of people have trusted
              upside trajectory- Bill Shatner
            </span>
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
                  right: "0px"
                }}
              >
                MARKET-COMMUNIST WALL ST
              </div>
              <Cable
                onError={handleScollImgError}
                src={
                  this.state.iosNoPhoto
                    ? ""
                    : "https://drive.google.com/file/d/1KP6m5YVS2Uc2mqEzWOJhRQBU-oDKfMhP/preview"
                }
                float="right"
                title="National Report - rittenhouse qualifications among police malfeasance"
                scrolling={this.props.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
                scrollTop={this.props.scrollTop}
              />
              non-voters won, not your "compromise," how about some
              RECIPROCATION macro-benefits of roads 40% debt service instead of
              tolls without bond- nor contractor-rent-seeking
              <br />
              "fairly distributed across the country." BET $TBT
              <br />
              At least your socialist colleagues would not and you are willing
              to do so,” have me on, pussy
            </div>
            <br />
            <br />, not "bizzare," and imprisonment by bonded-gov makes profit
            on their net loss operation, insularly (without bonded-with-strings
            as income on all books except m2), such a conflict of interst makes
            all state-prosecutions moot, "for cause" of industry-interest
          </h2>
          <a
            href="https://fred.stlouisfed.org/graph/?g=IHdV"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            teachers back to work
          </a>
          &nbsp;because that is important for teachers and kids," says alison
          maloney, feigning their well-being, prohibiting them from earning
          wealth and open-sourcing trade-secrets for gov-bond and -contractor
          rent-seeking
          <br />
          labor shortage is not an for low pay, but working age. need
          immigration or cash:debt*income thru history with settled transactions
          (by units) afterwards
          <h2>a feigned-cause ignorace</h2>
          wealth tax likely will not be free, merely price-inelastic of
          bid-to-ask
          <br />
          population growth has no effect on gdp/p inflation
          <br />
          debt spending will only increase the inflation rate," buddy, most of
          the problem is private
          <br />
          inflation by wall st, mostly (60% new debt)
          <br />
          Wall st is so much interfering with business that we are about to
          seasonally draft non-compete nannies in expiring-insurance and
          grandiose intermediate-good home-warrantly collective bargaining fraud
          <br />
          <br />
          <h2>tax payer my ass</h2>
          New Jersey spends $31,546,720,000/$59,838,000,000 (2016) and you allow
          Phil Murphy to rent-seek instead of use tolls and target-margins,
          allow producers to invest, before reverse cash:debt*income instead of
          cancel forbidden by past demand, to boot
          <br />
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <h2>had your entire lives to save</h2>
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1Vm7sbQjl0DCdSPu7e7f6wfLpDfaYQUkn/preview"
              }
              float="right"
              title="National Report - GOP gerontocracy rental-income plea"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            "People are feeling it, especially those on fixed income," they are
            reliant because of that, finance & corporate profits prohbits
            savings of individual labor savings. learn some fucking economics
            old hick. Biden is continuing Trumps' spending & trust-building
            policies. even if pandemics had grounds to fix prices, fix for
            cohort size. virion is dead byproduct of bacteria and cell, not the
            cause of infection nor illness
            <br />
            <br />
            only charity from another customer of what towards ask-dollar-market
            is to be bought, is not a total bid-to-ask waste. money from
            share-split or an unused checking account is merely price-elastic,
            and useless
            <br />
            <br />
            Why is there only $2-6t currencyComponentOfM1 checking when $4t/yr
            should be new cash down-payment portion of gdp $20t? The 40%
            debt-spending with strings should come out as $1.8t/yr excess cash,
            like births life expectancy ago accounts for deaths not having to
            count the whole. There must be an account where $1.8t cash from fed
            spend is destroyed, but the $18t debt velocity in $20t gdp remains
            the same
          </div>
          <div
            style={{
              padding: "10px",
              backgroundColor: "rgba(255,60,60,.4)",
              color: "white"
            }}
          >
            where do you get that assessment of socialism from? Socialism is
            when labor has means
            <br />
            <br />
            _ Socialism is when government owns and controls the means of
            production. Setting prices is regulation of exchange of goods.
            <br />
            "so·cial·ism
            <br />
            /ˈsōSHəˌlizəm/
            <br />
            a political and economic theory of social organization which
            advocates that the means of production, distribution, and exchange
            should be owned or regulated by the community as a whole."
            <br />
            <br />
            “owned by the community” by the whole is a misinterpretation of
            Marx, against credit cycle and corporate profits, where labor has
            all margins. I’m disappointed in that google result, an affront to
            people that actually studied historical markets.
            <br />
            “According to Marx's theory, surplus value is equal to the new value
            created by workers in excess of their own labor-cost, which is
            appropriated by the capitalist as profit when products are sold.”
            Occupy wall st is like free market communism, force profit outlays
          </div>
          <br />
          stock options isn't money you fucking retard, good morning bad news,
          tax breaks on loan interest is also retarded unless you are the
          government contractors/lenders... subsidies off the ground isn't
          really the chance given since it pays .8 debt for every dollar without
          strings
          <br />
          <br />
          "Zip now, pay later," literally loitering for useless price
          inelasticity, thanks wall st
          <br />
          <br />
          “We don’t want politics in this case: no more black pastors!”
          <br />
          You’re allowed to influence the jury with TRUTHS
          <br />
          <br />
          Nearly on market-communist, right-wing, expiring-premium for
          deductible Mark Levin radio-show:
          <br />
          "It will depend on what the jury believes,” alan dersh, what a nut
          <br />
          <br />
          alright take a break fatass
          <br />
          Courageous enough crazy enough to keep working against $32/person/day
          new debt from wall st, not gov as much as spending is not tax-paid at
          40% debt-spending and at best 10% debt service, keep getting up,
          shutdown closed down the world 60m hotel-restaurant let off? That
          sounds like more than total 170m employed,&nbsp;
          <a
            href="https://fred.stlouisfed.org/graph/?g=H5XB"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            I count -34m -4m-18m+12m unemployed (12k, 1.2m, 1.4m continuing
            claims) [15-24,24-54,55+] got back to work within a few months after
            3/2020
          </a>
          , but Trumps’ ppp trust-building is continuing, like claims for mostly
          65+, but recovery in employment to population is all 15-24. the
          elderly still maintain&nbsp;
          <a
            href="https://fred.stlouisfed.org/graph/?g=FSwQ"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            their 20x/person rental-income 55+/millennials
          </a>
          <b>
            scanning for bona-fides: craft beers, r&d monopsony,
            education(trade-secrets)
          </b>
          <br />
          open-carry-without-luggage is causes war like
          open-source-without-teapharmacy.party licensure
          <br />
          <br />
          <h2>
            “Giving money to terrorist organizations like Black Lives Matter!”
            Catsimitidis
          </h2>
          On way to battle violent crime by prejudice is inviting livelihood
          &nbsp;
          <a
            href="https://nationalsecuritycasino.com"
            style={{ color: "white" }}
          >
            castle doctrine
          </a>
          <br />
          <br />
          “Giving money to terrorist organizations like Black Lives Matter!”
          Catsimitidis Capital instead of expiring-insurance abetting invoices
          begetting expiring-insurance. Purposefully-impossible AND implausible
          use, borrowers loitering on lender-counterfeit-in-contract-collusion;
          20x/person rental-income 55+/millennials, wall st debt inelasticity
          bid-to-ask 44x, inflation merely 1.2x, gdp/down-payments literally,
          “11 debt for every down payment,” mostly wall st, lo 40% fed spending
          and debt spending of $12k/person/year for $4t/yr free rider mutable
          tax, rent-seeking for contractors and bond-index-funds the operating
          and upkeep of the eminent domain taken from a bizarre notion of
          “tranquility,” to literally mean, “pay premium for lower
          monthly-deductible.”
          <br />
          <br />
          10% debt service, except 40% turnpike akin to fed racket. families
          don't need it until&nbsp;
          <span style={{ backgroundColor: "white", color: "black" }}>
            invoices are theft and insurance don't expire
          </span>
          <h2>
            America first will falter for loss of comparative advantage per
            hour, excess bid-to-ask&nbsp;
            <span style={{ fontSize: "8px" }}>
              immigrate working age, by size
            </span>
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
                  : "https://drive.google.com/file/d/1MWkVVA7Js3xVl25-pEGAVgXMgjTphW5m/preview"
              }
              float="left"
              title="nj 101.5 & Rudy Giuliani - VA insurance expiring-insurance ebetting invoices begetting expiring-insurance"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            is VA just another insurance supply-side scheme to bring forward
            demand for monthly-deductible, deductible?
            <br />
            <br />
            “I get my care from the VA and have been waiting for an
            appointment.” It just doesn’t help to herd non-compete drafts beyond
            the season. collective-bargaining non-competes beyond rollover-tech
            minutes into schedules of not just outlays but hours
            non-concurrentable, idk man. investment banks can keep to equity,
            timelesspaydayroyalty scoped for industry-type for p2p only =&nbsp;
            <a
              href="https://altfi.agency"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              alternativefinance
            </a>
            <br />
            <br />
            truncated sales tax ween aid & comfort to production tax of law
            without rackets. open-carry is the cause... you are saying the cause
            of jan 6 is not having&nsp;
            <a
              href="https://thumbprint.us/voting"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              content-addressability
            </a>
            &nbsp;in elections?
          </div>
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
                  : "https://drive.google.com/file/d/1_84GrnemaNdpGtTtm5pKlZjHs17Shl_Q/preview"
              }
              float="right"
              title="Allison Maloney - Jan 6 bipartisan exclusion of anti-wall st. non-voter"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            "This is not hypocrisy, this is not double standards
            <br />
            This is about safety
            <br />
            Rittenhouse - or jan 6/afghanistan." Holy shit wtf are you talking
            about
            <br />
            Hope right, for an afro-wall-st. Gotta keep up instead of slow down,
            right{/**si se (te?) puede */}
          </div>
          <br />
          <br />
          "do things better, sex crimes, fraud, you name it,"
          <h2>
            <a
              href="https://nationalsecuritycasino.com"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              r&d, jury-permit, convict-intranet failures
            </a>
          </h2>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              style={{
                transform: "scale(-1,1)"
              }}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1ExEXuhF2FfrcxX2Y8bEiwaI4-yJ1QRhX/preview"
              }
              float="left"
              title="Phil Murphy FB - solar panel gentrification and trust-building"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Open design
            <br />
            <br />
            When your baby goes to bootcamp rather than your husband, it’s been
            a hard two/few weeks,”
            <br />
            <br />
            Jobs is the denominator of productivity, haha, busy work might take
            “creative destruction” literally and create shovel ready jobs by the
            latter. Any job a politician creates is a waste. Only customers can
            create jobs
            <br />
            <br />
            “Unlike most of wall street, we only have.one boss: our customer” Ed
            Bugos dollar vigilante, vigilante meaning a risk, discounting even
            potential-market-entrants, more and more as
            bond-value-withdrwawalable overpowers dollar
          </div>
          <br />
          <br />
          We are feeling richer because the wall st gains,” you feel wealthy,
          not be wealthy
          <br />
          Always transitory, this and that, holiday spenders is high, retailers
          already spent,”
          <br />
          <br />
          Deficit concurrently when bundling apples and oranges, not price
          elastic, transitively
          <h1>
            charity is useless price inelasticity (bid-to-ask), contributing (by
            project)/volunteers (by hour) is not&nbsp;
            <span
              style={{
                fontSize: "8px"
              }}
            >
              unless the giver was going to purchase in the same market with
              that money, of course
            </span>
          </h1>
          "I think it was a good bill, not a great bill," rep. Bacon on his 13
          GOP bipartisan government-rent-seeking
          <br />
          it is ideological duress
          <br />
          trust-building
          <br />
          <br />
          Education is merely closed-source trust-building, every Gov program is
          price-elastic waste
          <h2>the kids should work</h2>
          Judge Janine wants to keep the kids dependent with trade-secret-op by
          60% tax
          <h2>
            cant audit magnetic-data, dunce. Need content-addressable voting
          </h2>
          Wall St is the cause of inflation, but GOP/Libertarians will not
          curtail them from getting in our business' and means of labor,
          innovation liker pipelines should be privately invested &
          margin-targeted (finite prod)
          <h2>
            excess deaths cannot account for cohort size, not plateauing
            lifetime with sewage of wrinkly-old-80
          </h2>
          At least eminent domain only considers article 4, not oil. Then all
          but Saver antimandate says, "not antivaxx" giving credence to virus
          for being deadly but not a national security issue, stead of
          bacterial-cause
          <br />
          <br />
          Networks for oil can be margin-targeted, not owned and rent-seeken by
          the state and its lenders/contractors
          <br />
          <br />
          Fines instead of regulation means no corporate leaders jailed only
          regular-people which is net loss profit by bonds
          <br />
          <br />
          130k veterans suicided much needed solutions is not taking guns from
          people that are sad. I would argue those without emotions are more
          dangerous
          <br />
          <br />
          rule of law is no longer if it isn't prosecuted in
          comparative/common/natural law, lest you're prejudiced
          <br />
          <br />
          invoices beget expiring-insurance. m4a according to Schumer is not
          invoice are theft, but higher premiums hidden by 40% debt spending 10%
          debt service, .8$ for every dollar fed spending (without strings, not
          counting it twice as debt & spending concurrently)
          <br />
          what nationalization entails
          <br />
          dangerous libertarians
          <br />
          <br />
          Eminent domain for utility patents, I’ll give mine if you give yours.
          Nothing is invented by humans, just discovered, but that doesn’t mean
          the capital is a perpetual motion machine without
          government-contractors taking rent or laundering to bonds, as 501c3
          dissolves to such a black hole
          <div style={{ padding: "10px" }}>
            wabc highlights
            <br />
            If you don’t have a simple majority of eligible voters, you can’t
            just decide a collective bargain eminent domain, especially if
            rent-seeking by it inextricably linked to contractors
            <br />
            <br />
            Sewage police lawsuits article 4 is free rider immutable, is nat
            sec, but collective bargain can happen if subcontractors don’t
            benefit, certainly not got to benefit government contractors
            <br />
            <br />
            Wabc wants to hide higher prices from wall st debt spending in tech
            advancement, and “ we will pay any price,” self indulgent eminent
            domain, defeating its purpose
            <br />
            <br />
            America first America last then realizing common sense is wrong and
            slavery it’s retarded (comparative advantage tech advancement -
            "Illiterate father made Fredrick Douglas chore all the time"), for
            per hour price-deflation amidst population growth, being normal
            without debt, mostly exhibited by pre-1913 gdp/p being nearly
            constant
            <br />
            <br />
            Grid R&D by gov becomes outdated faster than they contribute,
            deregulation of jury-found mvp duress truth isn’t a contribution
            <br />
            <br />
            Everyone wants clean water, socialist control of the economy to
            ensure trade is trade , as gdp/down payments is not job, and big oil
            is not voluntary. Don’t meet market communist broadband, but
            socialist keeping individual actors out of defining truths (accrual,
            hung-jury-permits), keep Gov and wall st out of HHS business, not
            regulating oil or charging station of rentier upkeep duress
            <br />
            <br />
            Recession is due to deflation, economic pain,” James Golden.
            Deflation means that means of labor decreases cost, inflation
            doesn’t create jobs of utility, just jobs (busy-work,
            trust-building)
            <br />
            <br />
            Occupy is free market communism
          </div>
          <br />
          <button
            style={buttonstyle}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({ freemarketcomm: !this.state.freemarketcomm });
            }}
          >
            <h3>free-market-communism</h3>
          </button>
          <br />
          {/*<div
        style={{
          zIndex: 1,
          display: this.state.freemarketcomm ? "block" : "none"
        }}
      >*/}
          Mark Zandy (CNN): “spending/tax will not add to inflation,” it will if
          it was going to be outlaid to coorporate profits, but
          debt-inelasticity is a graver differential, 44x vs 1.2x
          <div style={{ padding: "10px" }}>
            Newsmax highlights
            <br />
            Don’t bring it up if already moot by another court, but the torts
            beyond possible is of matter to every tort…
            <br />
            <br />
            You need to prove guilt, that is why so many cases don’t make it to
            trial,” uh, no, trial isn’t had for people dubbed insane for poor
            wall st & gov (rent-seeking hhs, cap rent 5 units or 30 days
            implausible rentier use) driven economic conditions driving
            homelessness, just labeled mentally-insane.
            <br />
            <br />
            Only jury 1/12 is legally crazy, without reasonable doubt
            <br />
            In defense of property in way of livelihood, extrapolating is fine
            for coins if that precedence isn’t also based on lies
            <br />
            <br />
            “One person didn’t have a gun, so it is ill-founded, but is it
            reasonable?” Megan Kelly. That’s pretty synonymic
          </div>
          <br />
          Please speed it up,”
          <br />
          You told us just now you needed it for protection”
          <br />
          I did but I didn’t think I was going to need to protect myself”
          <br />
          You brought it for protection, but didn’t think you would need it for
          protection?”
          <br />
          I’m trying to clarify the two different answers I think he just gave,
          it’s your honor”
          <br />
          Go ahead”
          <br />
          I asked you why you brought the gun, you said you needed it for
          protection [in case, not will need]”
          <br />
          I said, “protection against what,” you said “you didn’t think you
          needed protection. I’m confused, can you help me understand why you’re
          telling us you needed a gun for protection, but didn’t think you would
          need a gun.” You prepare for the unlikely too. Life isn’t an expected
          Sum, obscured by the mean or random-emulated sample.
          <br />
          I needed the gun for protection but I said I didn’t think I would have
          to use the gun and end up defending myself.
          <br />
          <h2>jury-permitting-mvp</h2>
          “People are being banned on social media for arguing for Kyle’s
          innocence[, but not for guilt to boot],” says Rogan O. to Emma
          Rechenberg “We will await a jury decision.” Thinking a 12 person
          sample without every person included (included, not discluded for
          temporary-notions), and voluntary is more random than such. When I say
          jury defines truth, I mean 11/12 of a population. Not randomness
          emulated or even the deterministic-randomness of fate/G-d
          <br />
          <br />
          “Friendly” says the potentially-guilty, but that would be
          intent-bona-fide, intent to not neglect intent, as a guilty mental
          illness wouldn’t
          <br />
          <h2>
            “Mass psychosis,” every episode is rational, ask a murderer why,
            without a motive it isn’t necessarily of chargeability. You,
            however, are misleading people, which is not an issue with their
            mind unless you show me brainscans
          </h2>
          <br />
          Bats and clubs, mele weapons, “doesn’t think they have those things.
          Why is skateboard guy not on trial if you aren’t allowed to skateboard
          open carriers?&nbsp;
          <h2>Just because the illegal-precedence went wrong this time?</h2>
          <br />
          <br />
          Shouldn’t leave it behind, “ to protect me in a hostile environment,
          not hostile against me by prejudice[, evidently going to stop fire],”
          <br />
          “I told him I was an EMT while I wasn’t,” wearing gloves already dirty
          <h2>
            "loose cannon," malfeasant cannon critique with countervailing
            natural & illegal-precedence, "protect your property, not the
            streets"
          </h2>
          Dems, republicans, libertarians & greens agree on rent-seeking, but
          not the plural-majority non-voters, nor even simple majority
          ideologically duressed voters
          <br />
          <br />
          I want popular vote of non-voter plural-majority to turnout, rank
          choice ruins our chance about the AARP Bipartisans.
          <br />
          <br />
          there aren’t enough stances for that many parties. It is wall st
          pharma cop by premium, wall st pharma cop by premium, anti rent
          seeking . There are three colors Red WHITE and blue. Libertarians are
          hypocrites for private debt and greens want cancel or bailout,
          not&nbsp;
          <a
            href="https://www.theatlantic.com/politics/archive/2011/10/poll-most-americans-support-occupy-wall-street/246963"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            reverse debt:cash*income
          </a>
          <br />
          <br />
          gdp/down-payments 11/1 is busy-work, not a business. surrendering your
          expiring-insurance is third party beneficiary standing of your
          customers. 20x/person rental-income 55+/millennials&nbsp;
          <a
            href="https://30under5.us"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            implausible landlord use
          </a>
          <h2>
            "no business being there, no business with a gun, no business
            shooting and killing two people"
          </h2>
          State prosecution: "so if law is not being enforced, you can
          disreguard it?" YES THAT IS COMPARATIVE LAW! judge doesn't allow him
          to answer for? class precedence malfeasance american bar assocoation
          racketeering. UNBLOCK ME BITCH
          <h2>
            Prosecution (guilty of open-carry-laws, no-luggage): Nick Smith is
            allowed to "guard properties," if only cops can brandish for arson,
            and you can bop somebody in the nose for stealing your car, what
            about mall cops?
          </h2>
          <h2>
            Turning point thinks religion "barring you from choice," but
            anti-mandate not anti-vaxx, saying keystone XL is national security
            issue, but virus is cause and not merely byproduct of bacteria =
            tards
          </h2>
          "not allowed to protect property," that's why you are there, is your
          reason for protecting property with your gun just because people are
          there && you happened to have your gun?
          <h2>Involuntary</h2>
          <br />
          portapotty, flatbed trailer, you'd agree unoccupied car on fire,
          traffic cones, on fire, correct? correct “Being mad about something,
          along those lines,” would like to have a gun… that is neglect of what
          is justifiable to be mad about, unless you think the other will think
          such a thing. Just like prisoners’ dilemma duress insurance &
          reciprocation
          <br />
          <br />
          fire-cadet-member vs on-roster (Andiock fire depaertment, liability
          reasons "invoices begets insurance" only ride-along)
          <br />
          Entrapping by video games, gives stunning Full-bore blowback recoil
          response, yeah I like video games and guns, but that isn’t real life.”
          Follows with, "are you trying to be famous," Yes! Then grills the
          18-year-old on his emt work, "when was that," as the prosecution puts
          his elbows out, as if he were about to do the chicken dance
          <br />
          <br />
          intent-neglect prejudice of jury-truths (11/12) as attorney aba with
          conflict on interest to
          <h2>im in contempt under moot duress to out my sanity</h2>
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
                  : "https://drive.google.com/file/d/1wM-jROJPp1FV_rV91-8x7fxd0dErjc69/preview"
              }
              float="left"
              title="Phil Murphy FB - solar panel gentrification and trust-building"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            when you can hate by saying tard but not retard, you know education
            closed-source DOESN'T WORK
            <br />
            how is curfew relevant to decision-making but
            <br />
            what he thinks of law is dispositive, anyway. natural law TRUMPS lil
            bitch
            <h2>
              <a
                href="https://teapharmacy.party"
                style={{
                  color: "rgb(20,100,200)"
                }}
              >
                class precedence malfeasanace
              </a>
              &nbsp;- racketeering, trust building
            </h2>
            "There to help people is what defense attorneys would say," no a
            good, bona fide one would say he wanted to “protect his livelihood,”
            are police doing enough?
          </div>
          Maybe it is racketeering, excess deaths don’t standardize for cohort
          size
          <br />
          Occupy is free market communism with jury for duress within mvp
          (11/12) not simple majority
          <br />
          Elections are for movements and can be won on a plural-majority.
          Occupy never ran a candidate
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
                  : "https://drive.google.com/file/d/1YqIDonTmY-4-Hgd0ZIyzeeHs5rYZkXhw/preview"
              }
              float="right"
              title="'Occupy' Democrats - zuckerberg between two real occupy stances (without rent-seeking)"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            {/**4 more yrs. Please take your meds. And please don't drive. Less nuts are good. Phil Murphy is your governor
            · 46m
            Nick Carducci

            vaxxers think virus is alive and cannot account excess deaths for cohort size. I'll choose what drugs to take, top-left
            · 44m
            Nick Carducci

            non-voters won, claimed that no candidate was available. no politician has consent of majority if you know how to count, you tard
            · 43m
            Nick Carducci

            probably on pension. your whole life to save. pathetic old man, gdp/down-payments 11/1 isn't a real job, just busy-work & self-harming */}
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
                  : "https://drive.google.com/file/d/1liTKiGzreb1MUzRu6vySz5hwns3ounjG/preview"
              }
              float="left"
              title="National Report - ted harvey on "
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Ted Harvey, “normally, lawyers would not allow the defendant to make
            his own case.”
            <br />
            <br />
            Invoices begets expiring-insurance
            <br />
            “People that don’t make a lot of money benefit from how healthcare
            is now,”
            <br />
            <br />
            "100k scott afghanistan, sdaa visa, reimburse non-profits is 40% new
            debt..." that isn't tortable
            <br />
            private sector effort&nbsp;
            <a
              href="https://lightte.ch"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              without rent-seeking
            </a>
            , volunteering capital, not whatever busy-work down payments - gdp =
            -10
          </div>
          <br />
          <br />
          Ratio is a little confusing, coming from a calculus & statistics
          background as epiological moves to the first derivative space (roc),
          appropriately predecessors to economics, lo macro is pure
          retardation&nbsp;(
          <a
            href="https://micro-theory.com"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            speaking as micro
          </a>
          )<br />
          <h2>
            occupy is free-market-communism&nbsp;
            <span>
              just steward it, bro. settle down-payments to gdp lest not job
            </span>
          </h2>
          "doesn't matter democrat republican conservative moderate or liberal."
          need 10% assumbly of petitioning party to be recognized by these
          douches
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
              market communist james comer
            </div>
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1AHml7B4xYcTfbNoMiC_Wubw60zq6aopa/preview"
              }
              float="left"
              title="National Report - james comer complaining about spending but not wall st? the latter is more"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            "when printing money it devalues the money," what do you think wall
            st does? they are simple majority of new debt $32/person/day
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
                  : "https://drive.google.com/file/d/1r2tdiue-fvza7KRvjwd1n_rVj6fcjgq-/preview"
              }
              float="right"
              title="national Report - emma rechenberg & shaun kraisman invite vaxxers only"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            "Inflation hurts the seniors the most"
            <br />
            they had their WHOLE LIVES to save but children don't have income
            either, and they have 20x 55+/millennials rental-income for NOT
            WORKING. let alone how they worked half as much as we do now (1970
            is half-life for working-age comparison)
            <h2>stfu granny, elderly out to sea</h2>
            <br />
            <br />
            "anti-mandate not anti-vaxx"
            <h2>
              saying virus is deadly instead of a byproduct of bacterial-cause,
              but is not a national security issue, but then claim keystone XL
              is, is nuts
            </h2>
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
                  : "https://drive.google.com/file/d/1A-KTlgBADA5dhi14YhdbU8yq0yFL1Gvi/preview"
              }
              float="right"
              title="national Report - emma rechenberg & shaun kraisman invite vaxxers only"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            even if you go against the political science and go for the
            biomedical science, they criminalize you, but religion barring you
            from doing it is ok," a turning point retard
            <br />
            <br />
            duress beyond mvp decided by jury (11/12) is not a choice, legally!
            Is moot
            <h2>fines are corporate-government collusion</h2>
            "self-inflicted loss" is not measured from a grandiose target,
            amanda brohante, or before it is attributable; "conservative" news
            network thinks accrual is earned
          </div>
          <br />
          <br />
          1/3 of colds start with coronavirus, how can you tell that if you only
          test for covid. fucking retard spadea, always flopping. there are
          2k/yr discovered by cdc,&nbsp;
          <a
            href="https://www.nature.com/articles/d41586-019-00991-4"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            output dead by cell when coming in contact with bacteria
          </a>
          <h2>
            dedication to the future in r&d monopsony/government-gentrification
            is slighted about competition
          </h2>
          stupid to appreciate 50% in a polytechnic election instead of
          plural-majority. A losing plural-majority Occupy Wall St candidate is
          very plausible with rcv.plural-majority is the choice of the people,
          not adding up second place until you get to 50%. absolutely self-harm
          <h2>vaxxers think virus is alive</h2>
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
              market communist buddy carter
            </div>
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1AIaEZo54EXMimDbOPrwVOf1o2L0_WhkM/preview"
              }
              float="left"
              title="National Report - Buddy Carter calling government-gentrification, socialism?"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            down-payments to gdp 1/11 is not a real job, telling you what to do
            from bonds valued by their own collateralization
            <h2>
              Humanitarian issue in paid family leave is slighted about
              competition
            </h2>
            "illegal to discriminate on race or gender, [but not countervailing
            laws nor illegal-precedence]"
          </div>
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
                  : "https://drive.google.com/file/d/1uoWMksjplSMpJHIFZpISe97Wyq_w4CB3/preview"
              }
              float="right"
              title="Cortes & pelligrino - describing the opportunities amidst down payments to gdp 1/11"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Plenty of opportunities to go around, from the wall st counterfeit
            is literally busy-work without consumers, why would you work for a
            corporation instead of yourself? The "conservatives" are such
            sellouts and market-communists. employment to population is double
            what it was since 1970 (if you can call continuing claims
            "unemployment," I can call half unemployed to population (without
            claims), double), 10x more hours for a median home and totally not
            normal for population growth alone produced gdp/p before 1913
            nearly-constant, save the private-credit cycle. More like plenty of
            cash to spend, against $12k/person/year new debt
            <h2>those aren't real jobs, just countefeit for trust-building</h2>
          </div>
          <br />
          <br />
          "Most of those children who died, died with comorbidities," those with
          co-morbidities shouldn't have antibody-dysregulation by
          vaccines/mRNA-sporing-grafts, the point is that they were going to die
          anyway, standardize for cohort size, Jeffery Barke, MD
          <br />
          <br />
          Less cases with less mandates," Stinchfeild falling for
          basis-rate-fallacy in less testing by symptoms only. FUCKING RETARDED
          <h3>
            literally the tax-payer doesn't pay debt, nor do children. and how
            is that paid less than thru the supply chain third party beneficiary
            counterfeit in contract by private, which is 1.2x public debt, for
            useless price inelasticity, to boot
          </h3>
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
                  : "https://drive.google.com/file/d/1Z5pq01MWz52ao0uctuOmIZsnpHBJgZ-w/preview"
              }
              float="left"
              title="Spicer & co - Astroworld trial attorney argues for insurance, LMKeith smirks about the cash-grab"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            wall st amoral, dictitorial, and [ruins] out liberty and freedom
            (except he said socialism). where in the world does labor have means
            mean that
            <br />
            <br />
            "excess deaths insignificant is a fastball," Anderson Cooper, CNN
            <br />
            <br />
            <h2>
              patents are rent seeking, profits are net loss & net loss is
              profits accrual-withdrawalable with bonds
            </h2>
            is election tech required to provide security, is utility owned by
            G-d, at least misrepresentation of the inventor is more appaling if
            plagerized with so much malfeasance, certainly not to rent-seek for
            bonds of yesterday signed by private actors, to which communism was
            meant to fight (Odessa). gov would likely not make utility actually
            free but hide a subcontractor
          </div>
          <br />
          <br />
          don't withhold profits in corporate nor treasury bond-index-fund
          negative accounts
          <br />
          Transformational change," says the gentrifier, market-communist
          <br />
          <br />
          Everyone else spends $12k/year/person new debt and you’re going to
          hold me against my $20k on shorting debt, I’m forced to match prices
          with? I would have made money if the people I traded against couldn’t
          see my portfolio like I couldn’t see theirs
          <br />
          <br />
          That’s why they don’t make it anonymous
          <br />
          <br />
          Insurance hides the fair value; you think you are saving but it is
          only that price because invoices that are theft abetted by insurance
          premiums, and deductibles unclaimed. Simple logic
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
                  : "https://drive.google.com/file/d/1dQqu10Aav2loeg83VDapPurvezgWdQNW/preview"
              }
              float="left"
              title="Spicer & co - Astroworld trial attorney argues for insurance, LMKeith smirks about the cash-grab"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            As you know, everyone is suing eachother,” says the old person as a
            matter of fact, nearly harming-himself to save face for
            illegal-precedence. If anything wouldn’t the crowd be charged?
            Directives aren’t liable, unless compelled.
            <br />
            <br />
            Gross negligence vs premises inherent risk is obfuscated to keep
            class precedence malfeasance lawyers in “business”
          </div>
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
                  : "https://drive.google.com/file/d/1NW3gXnCMPurVRbnt1XGdMMLrm2h07A7Q/preview"
              }
              float="right"
              title="Spicer & co - Astroworld trial attorney argues for insurance"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            “It is going to come down to how much insurance there is,” grossly
            forlorn of not-surrendering the non-settle-ability of
            non-concurrentable premiums promised in all claims. Without that
            prisoners’ dilemma, there is not that capacity. In NJ, they will
            remove you from jury duty for being against insurance
            premium-non-concurrentable-fraud of those forced to pay into it as
            the insureds’ customers.
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
                  : "https://drive.google.com/file/d/1ePUoaev7de96svHVg49pQvcjA8iNmoIF/preview"
              }
              float="left"
              title="Spicer & co - Ohio GOP senate candidate pleading for public schooling"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            “It’s about the American dream, we need to ensure people are
            educated,” GOP wants nothing to do with school privatization,
            unlocking trade-secrets and allowing vocational
            timelesspaydayroyalty scoped for industry type by p2p to not
            fraudulently collectively bargain on non-concurrentable outlays nor
            general income, abject competing with consumers intent. Libertarians
            are fine with debt, certainly do not want to cash:debt*income back
            to 1908
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
                  : "https://drive.google.com/file/d/1BZbvtzL2quTdG842uNe9E7NN9VaHhOkv/preview"
              }
              float="right"
              title="Spicer & co - Malliotakis gentrification of free rider mutable roads, not even target margin but bond laundering"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            $300b to roads, highways and bridges, but it is concurrently while
            deficit of 5x the amount is paid by new debt (costing
            savers/bartender-money, not children for bond-index-fund value of
            bid to ask fraudulently-withdrawalable), and those&nbsp;
            <a
              href="https://www.njta.com/media/5688/financial-summary-through-september-2020.pdf"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              cost 40% debt service in states
            </a>
            <br />
            <br />
            What has the Pentagon done that is good? Your ansswer to china-rare
            earths is to spend it on stations instead of&nbsp;
            <a
              href="https://magnate.company"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              modular-circular-magnetic-engines
            </a>
            <br />
            <br />
            “Capital investment can increase production,” talking about tax free
            rider mutable beyond article 4 & debt-paid (not tax-payer-paid)
            fraud-WABC “conservative” market-communism instead of
            targeting-margins instead. TRUNCATED SALES TAX YOUR GROCERY AFTER
            REVERSE DEBT:CASH*INCOME.
          </div>
          <br />
          <br />
          "Negotiating a lease" is retarded: all competing on
          prohibited-settled-trade for useless price-inelasticity
          <br />
          <br />
          “Executive took too much power, because it was an emergency,” Alan
          Dershowitz… can’t count insignificant deaths for cohort size nor
          population growth, let alone life-expectancy plateauing at wrinkly-old
          80, biologically-appropriate
          <h2>Article III, Section 2</h2>
          <br />
          "we don't live in a dictatorship, but a constitutional-republic
          [except when it comes to jury-found-science/-permits]"
          <br />
          <br />
          Finite producer or employers is not a choice; only can only
          discriminate without comment for labor and consumer, price
          withstanding
          <br />
          <br />
          old people love to make an example out of young men.
          "illegal-precedence for me but not for thee,"&nbsp;
          <a
            href="https://chicago.suntimes.com/2021/11/6/22766726/astroworld-festival-travis-scott-8-dead-numerous-injured-houson-music"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            it's called a mosh pit
          </a>
          .<h2>if you want to change the law, change the law</h2>
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
                  : "https://drive.google.com/file/d/1IGE7idpmZKtXPF5VGuxLKdzg6rmNdq3w/preview"
              }
              float="left"
              title="Eric Bolling - Travis Scott concert"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            If you want to blame T. Scott for not believing somebody random I
            mean
            <h2>"wealth-creation," today is counterfeit</h2>
            "shipping is free," money-laundering concurrent-deficit, isn't it?
            <br />
            Blah blah blah, "kills viruses," uh we have decided in science that
            virus is dead, greg
            <h2>
              Wait, at 40% debt spending, 10% debt service, that IS .8 new debt
              for every fed spending*&nbsp;
              <span style={{ fontSize: "8px" }}>* no strings attached</span>
            </h2>
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
                  : "https://drive.google.com/file/d/15j93_DyPxqA3eZQZEWfwbtWNspMYXsXN/preview"
              }
              float="right"
              title="American Agenda - Pete Schiff libertarian Euro Asset Counterfeiters, private only"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            “Importing what everyone else produces” Peter Schiff
            <br />
            It is paid for my printing-money [share-split, third party
            beneficiary, reverse debt:cash*income],” we pay for it thru
            withdrawalability by market-maker steward-spread of collective
            appraisal (last-trade is market-cap collateralized/booked
            <br />
            “Inflation is an unofficial tax. Increase burden of that tax higher
            and higher as government spend.” Half new debt is private industry,
            hypocrite. We pay it thru the supply chain
          </div>
          <br />
          <h2>
            Wages that are competitive in the workforce as well,"&nbsp;this
            bitch trust-builds
          </h2>
          Greg-Kelly:&nbsp;
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/230116/"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            brain-virus epstein-barr
          </a>
          <br />
          <br />
          Talk about value of bid to ask cancel forbidden or Newsom payday loan
          maniac! I choose the latter and reverse it, you boob
          (cash:debt*income)
          <br />
          <br />
          credit cards accepted from covenant house, contributing to the
          $12k/debt/person/year newly generated for no benefit, if prices are
          elastic (the giver is not a consumer, too), claims to be helping
          people. I am building paytech to boycott, have to front-Mastrcard's
          perpetual loss when writing their book to their own fucking ask
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
                  : "https://drive.google.com/file/d/19x6RdSobBfVJS9ejwb_Xdu5a35BKxoSf/preview"
              }
              float="left"
              title="John Bachmann Pinion - americn state farm king foundation"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <h2>“No one wants to be coherced”</h2>
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
                  : "https://drive.google.com/file/d/1_a79vnA1MOgMEBSC8e_Q2QDUyjY-tzwA/preview"
              }
              float="right"
              title="John Bachmann Pinion - young socialists for american tards"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            "people think we have the right to know vaccination status," Jo
            Pinion, are you only calling the collusion simple majority of the
            voting plural minorities?
            <h2>fuck off afro-tool</h2>You need to prove guilt, that is why so
            many cases don’t make it to trial,” uh, no, trial isn’t had for
            people dubbed insane for poor wall st & gov (rent-seeking hhs, cap
            rent 5 units or 30 days implausible rentier use) driven economic
            conditions driving homelessness, just labeled mentally-insane.
            <br />
            The plea if prosecuted for perjury makes the state liable for not
            looking at the cameras or acquitting, or prosecuting permits beyond
            mvp duress in a trade of currency not capital, without jury (11/12)
            as finite producers cannot efficiently bestow quality and price
            efficiency (per hour)
            <br />
            <br />
            your policy, like contract, is my dollars for your collective
            non-bargain in
            <br />
            Payday loans (Gavin Newsom)
          </div>
          <div
            style={{
              height: "min-content"
            }}
          ></div>
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1-ndUm6LZNgxq6B_9C-rE3QSaigTALmta/preview"
            }
            float="left"
            title="John Bachmann Pinion - g chang slander-potential (desist not only just reasonable doubt)"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          “700k people died because China released covid” G
          "paywall-teleprompter" Chang presumes with failure inseminating cell
          with virus, other than this cartoon
          <h1>
            We report that Pf bacteriophage were present in 25 of 37 (68%)
            Pa-infected wounds in our cohort. Furthermore, wounds infected with
            Pf-positive strains were significantly older than wounds infected
            with Pf-negative strains, and Pf was more commonly found in chronic,
            nonhealing wounds.&nbsp;
            <a
              href="https://www.science.org/doi/10.1126/science.aat9691"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              source J M Sweere 2019
            </a>
            . We propose that filamentous phage may be relevant to human
            interactions with a broad range of pathogenic and commensal bacteria
            and that these viruses may have profound, direct effects on human
            health and disease.
          </h1>
          <br />
          <br />I gotta do your fucking job for free everyday jo pinion
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
                  : "https://drive.google.com/file/d/1wSZtU7YxHHi-i59wOmaAXEd-_3ry60Sq/preview"
              }
              float="right"
              title="John Bachmann Pinion - alan dersh replay racketeering basis rate fallacy, epiology"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <h2>
              you cannot attribute byproduct test for cause without controlled
              studies, if basis-rate-fallacy of excess deaths from population
              growth a life expectancy ago weren't with standing for not just
              reasonable-doubt, but desistation
            </h2>
            nj 101.5 Jeff on Dennis & Judy "I think&nbsp;
            <a
              href="https://brainscan.info"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              you're insane
            </a>
            &nbsp;if you do not get the vaccine, I just don't think the
            government should mandate it," first of all, article 4 if it weren't
            nuts to think virus is like, an evolutionary trait rather than just
            debris, but secondly, hung-jury-permits is illegal.
            <h2>choice isn't duress, "you can make choices,"</h2>
            <br />
            <br />
            <iframe
              style={{
                shapeOutside: "rect()",
                float: "left",
                width: "600px",
                maxWidth: "80%",
                border: 0
              }}
              src="https://www.youtube.com/embed/mJempu8ebT0"
              title="YouTube video player"
            />
            Nick Carducci: "I’m gonna squat on the minority opinion of&nbsp;
            <span style={{ textDecoration: "line-through" }}>vaccine</span>
            &nbsp;masks but for antidepressants, nih funded mental illness
            impact on infection,
            <h2>I don't know why you keep calling with this [info]</h2>
            <span
              style={{
                textDecoration: "line-through"
              }}
            >
              just for friends and family - masks don’t stop bacteria
            </span>
            , atmospheric convection heat over density is true so it doesn’t
            float in perfect equilibrium.
            <br />
            <h2>thanks for letting us know, okay? CLICK</h2>
            desist&nbsp;
            <a
              href="https://truncatedsalestax.com"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              nj 101.5/hackensack
            </a>
            <br />
            <br />
            50% false positive is literally random for binary evens, especially
            when virus doesn’t even correlate with sickness
          </div>
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
                  : "https://drive.google.com/file/d/1w9IyiffCLSYbMdszycSvQl7JFPQbILME/preview"
              }
              float="right"
              title="National Report - MI/WI pipeline"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            “That is a problem, [and if I am AG I will do _ about precedence
            standing]”
            <br />
            What about abuse of eminent domain for trade instead of sewage
            police lawsuits
          </div>
          <br />
          <br />
          “With their insurance it is at no cost to them, “except by measure of
          insurance with collective bargaining fraud of non-concurrentable
          claims higher premium
          <br />
          <br />
          “Gas, childcare and clothing are impediments to work,”
          <br />
          Every dollar in welfare pays .4$ to bond-index-funds (+interest), and
          taxes except wealth hits consumers… outlay corporate profits, today!
          Target margin instead of raise premium for lower deductible with
          invoices are theft & reverse debt:cash*income - then let’s talk
          welfare! lo it is useless price-inelasticity and makes producers rich
          for the same thing... unless you take it from their rich consumers,
          not just the rich... like a purchase by someone who needs to use that
          money elsewhere overwhelms the collective bargaining of a concentrated
          purchase that is meant to be merely relative to a big potential
          spender, from the jump
          <br />
          {/*width && <Fraud6 width={Math.min(600, width - 100)} />*/}
          <h4>
            <a href="https://fred.stlouisfed.org/graph/IHdV">
              accrual is bizarre
            </a>
            , my fucking <a href="https://vau.money">money</a>
          </h4>
          {/*<Cable
          onError={handleScollImgError}
          src={
            this.state.nofredgraphs
              ? ""
              : "https://fred.stlouisfed.org/graph/graph-landing.php?g=IHdV&width=500&height=660"
          }
          float="left"
          title=""
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />*/}
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
                  : "https://drive.google.com/file/d/1z_mmLUDrvwzKgnMbJB5il7TsT_1hiFxA/preview"
              }
              float="right"
              title="Spicer & co - Huckabee on markets infinite producers"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            "it's one thing for private to mandate things for employees you have
            to suck up, thats a market decision"
            <br />
            <h2>
              HOW THE FUCK IS FINITE PRODUCERS A MARKET DECISION YOU MOTHER OF
              ALL FUCKERS&nbsp;
              <span style={{ fontSize: "8px" }}>
                how is the tax-payer expenses when it is 40%, this is
                bartender-money
              </span>
            </h2>
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1RzFsXcRcjQxnd23CzzXgBbvVxir33Ooq/preview"
              }
              float="left"
              title="Spicer & co - Missouri Attorney General"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            "One agency for people to determine their lives, and what they put
            in their body,”
            <br />
            This excludes all producers other than with scientific consensus of
            duress in minimal viable product without hung-jury-permits
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
                  : "https://drive.google.com/file/d/1c0ehItLuHSTcKV5YKpYtbkGwFtUaMnCC/preview"
              }
              float="right"
              title="Chris Salcedo - Tim Burchett TN"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            "broadband, participants in the jobs of tomorrow," but you (Tom
            Reed) are laundering rents on the networks to bond-index-funds,
            right?
            <br />
            <br />
            “All meant for big cities,” exemplary in those 16 who crossed.
            Abject racketeering. He continues, “the weird thing about it is,
            they’re all moving to TN!”
            <br />
            <br />
            $700 fines who don’t comply with covid directive. Even if you wanted
            the spending, that is duress, voidable/removable for being the cause
          </div>
          <br />
          <h2>voluntary is more random than emutalatable</h2>
          <span
            style={{
              backgroundColor: "rgb(29,161,242)",
              color: "white"
            }}
          >
            "I don't think anyone doesn't want the&nbsp;
            <a
              href="https://www.isidewith.com/poll/488729614"
              style={{ color: "white" }}
            >
              infrastructure bill
            </a>
            "
          </span>
          &nbsp;says Catsimitidis, owner of several truncated sales
          tax/open-source-license/hung-jury-permit/class-precedence-malfeasance
          targets
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
                  : "https://drive.google.com/file/d/1CfqaE70PC0v150zxHBkVkCJJMNsROJPn/preview"
              }
              float="left"
              title="Chris Salcedo - Mary Walters with Jack4NJ in back"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            "Socialist-blueprint," ... reality is, usually when we put money
            out, we don't get it back, listen, there is a reason why public
            banking ACO..." Rep Pete King gets cutoff by Curanai, wife of usurer
            <br />
            Presumes standard of living (to me, price-deflation over hours) is
            derived by market-communist spending
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
                  : "https://drive.google.com/file/d/10aIMsTXuWwqgVZdpeNDJZnZi_ZVyl2n6/preview"
              }
              float="right"
              title="Chris Salcedo - Tx guber Huffines"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            “Pure marxist theology,” where is your proof?
            <br />
            Don’t they think nationalists should have payout instead of
            illegals? While you cry about epiologically-induced supply chain
            problems?
            <br />
            That’s exactly what communism implies: torts
          </div>
          <br />
          People that work at home mostly work for themselves, and corporations
          do not work for the country so as to contribute an invention that will
          retire us
          <br />
          <br />
          non-voters won, simple-majority this time, not just plural
          <h2>
            It is bartender-money, you fucking slut. 40% debt-spending, 10%
            debt-service&nbsp;
            <span
              style={{
                fontSize: "8px"
              }}
            >
              borrowers loiter lenders counterfeit insurers expire
            </span>
          </h2>
          Cared for physically and mentally, well the cause is rentiers not
          mental acuity. Cops need care and weened off
          bond-index-funds/closed-source-pharmacy-license, Catsimitidis just
          wants to avoid truncated sales tax on his grocers' bounty AFTER
          reverse debt:cash*income and cap 5 units or 30 days to not bailout
          rentier/landlord/lender/counterfeiter (down-payments to gdp 1/11
          bid-price-fixed to "value"-ask)
          <br />
          <br />
          Disease is diagnosed by byproduct not the cause by {/*near-death */}
          Bill "The Artifact" O'Reilly
          <br />
          <br />
          “Shut down pipelines to aid Russia,”
          <br />
          How about you let producers surrogate consumers instead of have
          eminent domain appraised by force. You’re a market-communist, Salcedo
          <br />
          <br />
          “Mass psychosis,” every episode is rational, ask a murderer why,
          without a motive it isn’t necessarily of chargeability. You, however,
          are misleading people, which is not an issue with their mind
          <h2>unless you show me brainscans</h2>: stop&nbsp;
          <a
            href="https://nationalsecuritycasino.com"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            malfeasance for convict intranet
          </a>
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
                  : "https://drive.google.com/file/d/1m4AVZMiMRkXkuUsb6syWhlkzxgf746Gk/preview"
              }
              float="left"
              title="Dennis Prager"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Prager thinks people cannot come back to consensus, based on a
            plural-minority of people wanting mandates. It is horseshoe, retard
            <h2>
              speak english, hispanic: labor and means == jury without
              racketeering
            </h2>
            now chris salcedo says "marxist extremism," and one of the vitures
            of his show is to, "refuse to define you"
            <br />
            <br />
            existing business is inherently complacent and obstructive
          </div>
          <br />
          <br />
          “$50b bolster energy generally,” make the producers invest, don’t
          force consumers’ and producers’ hand, unless jury-consensus 11/12
          <h2>give me a list of Twitter employees</h2>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              style={{
                width: "250px",
                height: "540px"
              }}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1dUQs5SMhnD0U5YFA-kqQzzbpCJm47SRY/preview"
              }
              float="right"
              title="Majority Report - copyright gestation king"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              style={{
                width: "250px",
                height: "540px"
              }}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1kIRTTRRk9AkSOt3F7m2BqVXRGhEh5BNk/preview"
              }
              float="left"
              title="Majority Report - friends and family"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <a
              href="https://link.springer.com/article/10.1007/s00259-021-05314-2"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              <h2>
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
                &nbsp;cartoon-science
              </h2>
            </a>
            "Robust natural immunity is what we need," mRNA-sporing-graft
            inventor
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
                  : "https://drive.google.com/file/d/1PX3Jlh2Agc7CMQkQszPpt8AMnZWArcqH/preview"
              }
              float="right"
              title="The Balance - Sesame st & Cnn personalities"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/19n4xZepkafa1bCRM1hA0Ix26HzabhF-2/preview"
              }
              float="right"
              title="The Balance - Sesame st & Cnn personalities"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            market-communism of board-precedence- ("noble lie" - Pierre Kory
            MD), non-concurrentable collective bargaining or delaying collective
            write down, closed-source licensure-trusts
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              style={{
                width: "250px",
                height: "540px"
              }}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1H4sPombp4sU_EMqD8pjP7eoxwUrxgkwd/preview"
              }
              float="left"
              title="Indisputable TYT - virus cartoon evidence front"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <h2>
              take it in the ass, Rudy&nbsp;
              <span style={{ fontSize: "8px" }}>
                krugman says insurance is a net loss
              </span>
            </h2>
            <br />
            Science is: you cannot fire someone for sickness, only price-cuts
            (you don’t hire someone else and continue paying 65+ with half of
            2.8m claims, while working age work twice as much as 1970 and 10x
            hours to own median home)
          </div>
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              style={{
                width: "400px",
                height: "350px"
              }}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1zjBOJduQJiR1B2-wwC0bmNpuCCPerexi/preview"
              }
              float="left"
              title="BBB laundering concurrent deficit"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Bond-laundering, government and wall st-monopsony & -gentrification.
            This is only a 1/2 portion of normal (-3/2020) federal spending (
            <span style={{ backgroundColor: "white", color: "black" }}>
              share-split of public-parks
            </span>
            ) that is 40% new debt and 10% debt service, and in stead of
            outplaying corporate profits, not necessarily having a collective
            bargain but much more a bid-price-to-ask inelasticity of debt 4400%
            as opposed to 102% “realized”-inflation, which is merely relative
            while the former is absolute and undetected in
            year-to-year-progressions
            <br />
            <br />
            "Republicans voted for it because they get a cut, normal political
            waste," on concurrent-deficit-paid-for before corporate profits
            outlay today && reverse debt:cash*income don't cancel forbidden by
            past demand amortize reimbursement of down payments upon repo
            timelesspaydayroyalty scoped for industry-type for p2p as is
            non-concurrentable, that is outlays & hours
            <br />
            <br />
            Higher premium vs monthly-deductible is, “Socialized-medicine.” What
            is social about that?
            <br />
            To Rudy
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              style={{
                height: "80px"
              }}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1JLdZKFHz712layg6u2TRa6_1h7vbufxm/preview"
              }
              float="left"
              title="angelina"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Correlation is not causation, you literally need to control the
            rubicon with vaccuum
            <br />
            <br />
            <a
              href="https://teapharmacy.party"
              style={{ color: "rgb(20,100,200)" }}
            >
              anti-biotics
            </a>
            <br />
            Bacteria causes infection, exclusively; protection from the
            byproduct, not the cause.
          </div>
          Do you realize how significant for standing is simple majority won by
          non-voters? Wall st pharma cop v wall st pharma cop
          <br />
          <br />
          Testing 2k/yr new types is NOT insemination of cell
          <br />
          <br />
          Hung-jury-permits
          <br />
          <br />
          They take you off jury duty if you think invoices are theft Bacteria
          causes infection exclusively
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
                  : "https://drive.google.com/file/d/11I4kbNZgy2jReY0L6NVYTlor7njnxIXA/preview"
              }
              float="right"
              title="farmers insurance and bert"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            How can you call what you do "customers?" You borrow collude and
            loiter to launder the accrual bid-price to ask of counterfeit means,
            of late argued foreseeable then blundering themselves into
            premediation, complicity & malfeasance
            <br />
            <br />
            "Time-off, good work, as a paren't making preschool affordable and
            child tax deduction is going to make such a huge difference for new
            parents,"&nbsp;
            <span
              style={{
                backgroundColor: "rgb(180,220,255)",
                color: "black"
              }}
            >
              at cost of inequality
            </span>
            &nbsp;and loss of vocational work for half & +careworker, net
            comparative advantage loss and education of trade-secrets cudgel of
            wall st impediments
          </div>
          <Cable
            onError={handleScollImgError}
            style={{
              width: "640px",
              maxWidth: "100%",
              height: "480px"
            }}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1-pLg-9iUTiqDziZ9h6o4O6VB21SOZgsv/preview"
            }
            float="left"
            title="newsmax"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
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
                  : "https://drive.google.com/file/d/1M7Tu5zFDl13OHlq4Qay3tkjF_Y3TqKYw/preview"
              }
              float="left"
              title="buttgieg south bend"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            basic government services, like public Ssssssschoolssss," Bill
            O'Reilly
            <br />
            <br />
            "this is the largest investment since the creation of the interstate
            highway system, as well in public transit for seniors and people
            with disabilities, electric rail-cars, transformative-acheivements
            in safety"&nbsp;
            <span>
              regulate, don't fine == jailtime. r&d tax is trust-building,
              nothing else
            </span>
            ;
            <br />
            "infrastructure is so elemental in societal but when it is strong,
            every community feels the benefits"
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
                  : "https://drive.google.com/file/d/1a5e4ICmb2iFIZ4jlg0j4dhHGe8V0yeOa/preview"
              }
              float="left"
              title="allen"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <span
              style={{
                backgroundColor: "rgb(197,179,88)",
                color: "black"
              }}
            >
              Working families-gerontocracy
            </span>
            : "union dues makes Virginia more competitive"
            <br />
            NYC = wall st pharma cop v wall st pharma cop, NJ = wall st pharma
            cop v wall st pharma cop
            <br />
            <br />
            “Creates demand & drives up the price” -Dennis (nj 101.5), if you
            are counting production - busy-work, to which output-deflation per
            hour is second-, lattest-derivative of “productivity,” it is &nbsp;
            <span
              style={{
                backgroundColor: "white",
                color: "black"
              }}
            >
              actually the other way around
            </span>
            . The chicken or egg, it is still a birth of evolution, of which the
            virus is not lo bacterial-cell byproduct
          </div>
          <br />
          <span
            style={{
              backgroundColor: "rgb(170,90,220)"
            }}
          >
            gdp to down payments is possible
          </span>
          <br />
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/grdvhc3dlct9dy8/Screen%20Shot%202021-11-08%20at%2012.39.25%20PM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            "Of course government has an understandable interest in policy &
            finance, however no individual can whip house-disciplinary matters,
            of sex or racket Standards committee is not a ‘court of law,’ as
            would require legal-representation, and that might lead to a process
            that might benefit the wealthy that can afford lawyers than those
            that cannot,” lawyers also are interested in
            industrial-precedence&nbsp;
            <span
              style={{
                backgroundColor: "navy"
              }}
            >
              save-face
            </span>
            <br />
            <br />
            "stop warding donors with _ from the house of lords.
            <br />
            the only reason to be in that house is the lobbying, 'their
            philanthophy'; least-deserving good cause in this land"
          </div>
          <br />
          <br />
          <span
            style={{
              backgroundColor: "rgb(166,16,30)",
              color: "black"
            }}
          >
            Conserving accrual & collective-bargaining fraud
          </span>
          &nbsp; $32/day/person cost is paid by all of us, inflation being 102%,
          debt-inelasticity 4400%
          <br />
          <span
            style={{
              backgroundColor: "white",
              color: "black"
            }}
          >
            no-surrender third party beneficiary
          </span>
          &nbsp;
          <span
            style={{
              backgroundColor: "orange",
              color: "black"
            }}
          >
            castle (as livability/livelihood, when police recovery &
            tort-conservative malfeasance) doctrine
          </span>
          <br />
          "Take into consultancy with private business," for collective
          bargaining to eminent domain but not for rent-seeking
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/5n3ifq04zcdssvc/italian%20fu.gif?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            covid pandemic courtesy, _, and respect would be counting population
            correctly
            <br />
            <br />
            jury doesn't have to move - elections do.
            <br />
            oh, my druthers! Government Accountability malfeasance
            <br />
            There are just not enough producers to make them compete, we need to
            dispel the notion that prices and quality is found without
            target-margins in whole supply chain. It’s becoming harder to
            complete jobs when down payments to gdp is 1/11 and
            intermediate-goods are out of scope. If they give you the wrong
            material or abjectly do not show up for the hours in receipt, that
            is fraud, not forced majeure. Good luck
            <br />
            <br />
            If you pay later, you may be liened if the estimated-scope
            intermediate-cost turns out to be grandiose; which is hardly
            possible for an addition, and is more common rather than paying as
            you go, respectively. Estimation is immutable, but your risk is
            capped when you pay up front and kept out of escrow in smaller
            investments. The onus is on you for grandiose scopes and hiring the
            wrong people, like any other business.
          </div>
          <br />
          <br />
          parliamentary standards commissioner, Kathryn Stone:
          <br />
          <br />
          <a
            href="https://www.theguardian.com/politics/2021/nov/02/why-stakes-so-high-owen-paterson-suspension-vote"
            style={{ color: "rgb(20,100,200)" }}
          >
            First
          </a>
          , breaching the part of the MPs’ code of conduct on paid advocacy.
          Paterson said he was acting as a whistleblower over milk safety but
          the commissioner said this was only true of the initial approach and
          first meeting. Thereafter, follow-up communications “were intended to
          benefit his clients rather than to raise a serious wrong”.
          <br />
          <br />
          40% debt spending, 10% debt service: $12k/person/year, 60% wall st
          <br />
          <span
            style={{
              backgroundColor: "white",
              color: "black"
            }}
          >
            BROADBAND == RENT-SEEKING
          </span>
          , MAKE VERIZON INVEST LIKE THE REST OF US, target-margin
          networks/finite producers instead of gentrify nor trust-build
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/6stkluhs7lns1in/Screen%20Shot%202021-11-08%20at%209.29.17%20AM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            “Families with bills to pay every month,” Bidens’ solution is to
            rent-seek broadband and increase premiums hidden to allow the
            producer to work less, instead of declare invoices are theft,
            reverse debt:cash*income not cancel forbidden by previous-demand nor
            bailout, cap rent 5 units or 30 days, ban insurance as collective
            bargaining fraud non-concurrentable, “currency” being 20% fed lands;
            timelesspaydayroyalty scoped for industry-type to replace debt, as
            non-concurrentable "currency," person-to-person, outlays; keep
            investment banks in equity
            <br />
            <br />
            Non-voters win even presidential elections with claims of no
            candidate, all others won by ideological duress
            <br />
            <br />
            Jason Chafitz, “guess what, when democrats have all branches they
            call the shots,” another “conservative,” who thinks politicians are
            more in control than natural law, like free rider mutable tax or
            debt is useless price inelasticity for government gentrification
            trust-building monopsony . Collective bargaining MAYBE for truncated
            sales tax for non-free rider immutable sewage police lawsuits. Let
            producers pay into pipes and broadband instead of allow government
            to rent-seek and pay instead of investing by producers like the rest
            of us.
            <br />
            Except, trash is "stacking up," you cannot let up until uber for
            trash........................
            <div style={{ textAlign: "right", height: "min-content" }}>
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/zrfgli98vbmo325/Screen%20Shot%202021-11-08%20at%2011.48.11%20AM.png?raw=1"
                }
                float="right"
                title=""
                scrolling={this.props.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
                scrollTop={this.props.scrollTop}
              />
            </div>
            <br />
            <br />
            "The people on fixed-incomes, limited incomes, it hits them the
            most. the rich dont' feel it," yeah, because the rich are
            bond-holders making double-money on welfare
            <br />
            <br />
            Keep wall st & Gov out of business
          </div>
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/p64vihn8yjlcofe/Screen%20Shot%202021-11-08%20at%209.18.08%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/vyiahyqr306zpay/Screen%20Shot%202021-11-08%20at%209.15.26%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            These fines are obviously bond-laundering & racketeering before
            jury-conviction of virus, with all the evidence questioned by its
            defense as harmless debris of a bacterial-infection, that such a
            cause in which antibodies do nothing to reduce
            <br />
            <br />
            In review of economic numbers, cnn is going in the wrong direction.
            Less unemployment continuing claims, less unemployment, that’s the
            opposite of technological-advancement. Cut poverty for
            relative-poorness is cheating by "less deficit," for paid off bonds
            instead of reverse third party beneficiary.
          </div>
          <br />
          <br />
          "No harm done," with insurance and Medicare for all further heightened
          premiums for producer-collusion, you already paid more
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/v3zgfosdnxj2n6k/Screen%20Shot%202021-11-08%20at%208.26.32%20AM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Everyone always flops, are these actors? If a virus is a
            live-evolutionary-trait, then it is a matter of security
            <br />
            “Hard-hat is not like a virus that is contagious,” you have no proof
            that we don’t make them individually or that bacteria changes the
            viral-cellular-debris
          </div>
          <br />
          in what world is growing the economy measured by prices*hours*trades,
          good?
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/wyoj6nca2d4vt3j/Screen%20Shot%202021-11-08%20at%208.19.17%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Broadband infrastructure is great for those who don't have it," this
            self-proclaimed conservative advocated for market-communists for
            free-rider-mutables instead of making Verizon invest in it
            themselves, with target-margins for being a networking
            <br />
            <br />
            <div style={{ textAlign: "right", height: "min-content" }}>
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/jxph5g8f5ac5wj1/Screen%20Shot%202021-11-08%20at%2011.04.41%20AM.png?raw=1"
                }
                float="right"
                title=""
                scrolling={this.props.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
                scrollTop={this.props.scrollTop}
              />
              Not selling a book/have precedence to save face,
              hung-jury-convictions & non-voter duress
            </div>
            Newsmax boasts having weekly testing, first time a virus has been so
            asymptomatically, and the costs are bad for your customers. Do not
            claim choice/efficiency from finite producers. This is how you
            money-launder. any infrastructure is a waste that is not sewage,
            police lawsuits that is free-rider-immutable Inflation mostly
            happens from private debt, to which laws currently countervail. jobs
            without customers are always busy-work or inflation by tax for free
            rider-mutables or debt, which is MOSTLY PRIVATE
          </div>
          <br />
          Rot in hell
          <div style={{ textAlign: "right", height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/2nrvk2vw11qe80u/Screen%20Shot%202021-11-08%20at%2011.45.31%20AM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
          </div>
          <div style={{ textAlign: "right", height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/6v1p04pp3mx9pwg/Screen%20Shot%202021-11-08%20at%2011.47.56%20AM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/cq8xj36s0wyt2rw/Screen%20Shot%202021-11-08%20at%208.04.29%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            "We cannot handle this [vaccine mandate] admist supply chain
            shortages," Burchett describes the 6% staunch-antivaxx loss but like
            it is a supply-chain-shortage of labor rather than of working-age,
            epiologically. WE WORK MORE THAN YOUR GENERATION.
            <br />
            <br />
            Maliotakis saying subways have been malinvested, asking for more
            funds instead of using customers' money like the rest of us. Says it
            will save trillions by spending now. How? A complete lie
          </div>
          {/*. bond-laundering & useless price-inela*/}
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              style={{ width: "100px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/iix8y2rq7nydedo/recessive%20avlon.jpeg?raw=1"
              }
              float="right"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/xm2rt5sc9vxia93/Screen%20Shot%202021-11-08%20at%207.45.34%20AM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Market-communism (socialism is stewardship, not this.
            Social-spending is an oxymoron. Not even family-subsizies are
            social) is trust-building, not competitive. self-harm economically.
            Isn't it known that monopoly is a waste?
            <br />
            <br />
            Even family-subsidies isn’t social-spending. Social-spending is an
            oxymoron, reappropriating means from labor
            <br />
            <br />
            Socialism is consumer protection, market-communism is the spending
            that GOP feigns. Market-communist for broadband and all this crap
            <br />
            <br />
            "Listen to your doctor, not Biden," someone on Cnn, whom have
            incentive to slight-precedence.
            <br />
            Less spread of disease cannot be measured by changing basis, bitch
            Kim Swire
          </div>
          <br />
          <button
            style={buttonstyle}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({ supplyside: !this.state.supplyside });
            }}
          >
            <h3>supply-side-"economics"</h3>
          </button>
          <br />
          {/*<div
        style={{
          zIndex: 1,
          display: this.state.supplyside ? "block" : "none"
        }}
      >*/}
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/nq9w93srerrwdzr/Screen%20Shot%202021-11-07%20at%203.10.27%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            "Trump made sure that the HBCU got the funding that they needed,"
            how conservative is the GOP and how altruistic is are the Dems
            <br />
            <br />
            universal healthcare is higher premiums paid by share-split,
            poorness in lieu of poverty is self-harm
            <br />
            <br />
            Vector-implications of finance in the immigrant-less supply chain
            retiring and continuing claims beyond epiological basis of excess
            deaths under expected by population growth a life expectancy
            ago&nbsp;
            <span role="img" aria-label="squirrel">
              🐿
            </span>
            $32/person/day new debt, mostly-private, value is not price but
            fraud, embezzlement or laundering
          </div>
          <br />
          <br />
          “Foreign devils, nanjing massacre by Japanese” against tea pharmacy
          party opium open-source-licensure" too much
          malarkey/assumptions/presumptions/wokeness
          <br />
          <br />
          medicare for all is just lower deductible for higher premium, it is
          not a bargain concurrentable, non-expiring
          <br />
          the right uses this "monthly-savings" tactic, too
          <br />
          "mutual-aid doesn't always have to be
          [charity-useless-price-elastic]financial"
          <br />
          <br />
          Price goes up when demand is money instead of labor
          <br />
          price-should be getting better over time, gdp/p was nearly constant
          before 1913 when 3% pop growth so
          <br />
          <br />
          turnout is awaiting non-gentrification, public nor private, collective
          bargaining a bundle instead of whole account boost (by share-split or
          tax). hrmm
          <br />
          prices are elastic from useless charity non financial, or is a greater
          bid for same resources collective bargaining ever the same as lowered
          ask from collective ESCROW.
          <br />
          <br />
          non-escrow is money-laundering embezzlement prone, like allowing
          mechanics to claim way more than otherwise settled from an
          individualized-write-down (individual/collective = bid/ask)
          <br />
          <br />
          left == jobs, cancel, right == profits, bailout, bottom == efficiency,
          reverse
          <br />
          a simple majority beat both candidates, rank choice collusion of
          plural-minorities beat the plural-majority
          (Occupy/anti-vaxx/non-voters(detest&eligibleVoters)
          <br />
          <br />
          The total ms is paralytic&nbsp;
          <a href="https://froth.app" style={{ color: "rgb(20,100,200)" }}>
            polio prevalence
          </a>
          &nbsp;you fucking idiot D Morris
          <br />
          changing updates requite consumers ready willing and able settled
          without collective bargaining non-concurrency
          <div
            style={{
              height: "min-content"
            }}
          >
            <iframe
              style={{
                shapeOutside: "rect()",
                float: "right",
                width: "600px",
                maxWidth: "80%",
                border: 0
              }}
              src="https://www.youtube.com/embed/p7075yIUBW4?start=550"
              title="YouTube video player"
            />
            <br />
            <br />
            Cost-effective by charging stations instead of&nbsp;
            <a
              href="https://magnate.company"
              style={{ color: "rgb(20,100,200)" }}
            >
              modular-circular-magnet-engines
            </a>
            ? Let consumers decide, fuckers. Infrastructure market-communism for
            useless price inelasticity of free rider mutables instead of
            target-margins
            <br />
            <br />
            "Bipartisan infrastructure bill, salt relief," how about
            bringing-true-market-liquidity with truncated sales tax
            <br />
            <br />
            “Mark 5 deranged evil spirits into pigs,” D.Morris deranged but
            real?
            <br />
            obstensibly_misuse -B.S.
            <br />
            <a
              href="https://github.com/NickCarducci/react-fumbler/blob/master/src/index.js"
              style={{ color: "rgb(20,100,200)" }}
            >
              Blacklist
            </a>
            &nbsp;any misuse of presumptions, event integral-“real” with
            presumptional-derivative
            <br />
            <br />
            <h2>So many colors</h2>
            For every dollar I lose from not working dor you,&nbsp;
            <span style={{ backgroundColor: "orange", color: "black" }}>
              i own copyright
            </span>
          </div>
          <br />
          <span
            style={{
              backgroundColor: "rgb(166,16,30)",
              color: "black"
            }}
          >
            Judge Janine
          </span>
          &nbsp;"The left is happy to have children sit at home, they don't care
          that your kids aren't being educated, their kids competing on a global
          level while their kids will not"&nbsp;
          <span style={{ textDecoration: "underline" }}>trade-secrets</span>
          <br />
          <span
            style={{
              backgroundColor: "rgb(46,90,216)",
              color: "black"
            }}
          >
            Democrats on Virginia Guber
          </span>
          &nbsp;"leaving our kids in the dust," children stay choring and
          accruing debt instead of timelesspaydayroyalty scoped for
          industry-type/ max-profit-royalty per IP that is design & discoveries
          in regards to nothing new under the sun. Mark Warner: job-creation
          slave-drivers produce busy-work, good! poorness in lieu of poverty
          boost to bid for without collective bargaining as not in escrow but in
          general-savings like laundering the ask, not gaining bid-propensity
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/ww7bequ48cypjvy/Screen%20Shot%202021-11-07%20at%2011.07.05%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <span
              style={{
                backgroundColor: "rgb(197,179,88)",
                color: "black"
              }}
            >
              Central-planning by name alone
            </span>
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/xzk4fi06duzb97y/Screen%20Shot%202021-11-07%20at%2011.13.09%20AM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            “Consumption, voluntary-economic-arrangements aren’t actualized
            production. The treasury is a 1.2x better steward-of-dollars 20% fed
            lands than banks $12k/person/year. Dave Brat: “Milton Friedman,
            ‘inflation from the fed.’” Marxist-control tendies up to and until
            infinite producers/jury, pussy!
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/5qc6ppyotykkfva/Screen%20Shot%202021-11-07%20at%2011.00.19%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            “I don’t want to say 100% but pretty much because I don’t want to
            jinx it,” hahahah
            <br />
            Big tech has a lot of users, so hackers don’t really see Sekur as a
            target,” are you implying that big tech being 90% has known
            vulnerabilities that constitute 1/10days hack event?
            <br />
            <br />
            Sekur password is only as secure as SIM card, if I request a
            password recovery, you use the same authentication as a new SIM.
            This is why we need convict-intranet repeat offender use case
            login.gov, so the key is provided by state ID (in person)
          </div>
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/pxayw0ysgw8g3vm/Screen%20Shot%202021-11-07%20at%2010.47.19%20AM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            How is closed source more secure?
            <br />
            Cors is fine
            <br />
            <br />
            Jesus came down to stop animal-sacrifice & money-changers, had
            literally no problem with adultery, 4 years for a wall, 10 years for
            solving all security flaws in telecommunications. 1 Peter 2:10
            conscripted 'for' to mean every sunday, rather than an
            alternative-sarcastic-toast (AST)
          </div>
          <br />
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/oq4111tqdtgrhyp/Screen%20Shot%202021-11-07%20at%2010.36.04%20AM.png?raw=1"
              }
              float="left"
              title="facebook.com - Occupy Wall st reviews"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            “Undercollateralized loans, assess the credit-worthiness of the
            individual, sort of this innumerable…” I can’t legally say kill me,
            nor even maybe fml lest Involuntary Commitment &
            gun-rights-malarkey, so my distain will have to be portrayed by kys,
            bro
            <br />
            “Only 5m people out of the workforce right now,” Payne, uh maybe per
            10 year cohort since 1970….
            <br />
            Rudy thinks keeping your copyright, not selling-out, is being a
            lazy-bum. Down payments to gdp is 1/11 is haram (& retarded)
          </div>
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <iframe
              style={{
                shapeOutside: "rect()",
                float: "right",
                width: "600px",
                maxWidth: "90%",
                border: 0
              }}
              src="https://www.youtube.com/embed/-spTY4y8euI"
              title="YouTube video player"
            />
            “Will you be ok with non-vaccinated do not work Religious exemptions
            with real precedence (Eric adams doesn’t even look into the cause of
            that, just blindly calls precedence real, “do it with the science,
            but social development is the smile, not being able to identify the
            child. I looks forward to getting rid of the mask, but with the
            science, not closing it down.) “doing bitcoin right” would be you
            buying it not overstepping your authority and force a purchase by
            state
            <br />
            <br />
            All WABC does is slander socialism (labor has means) as
            reappropriating money (market-communism). then says only cops should
            have guns
            <br />
            <br />
            Family leave/ppp/ctc is discrimination for innovators, contributors
            & children. The old people get paid, I'm not. Probably wants to keep
            excessive rent, insurance & accrual that necessitates fixed income
            <br />
            <br />
            <div
              style={{
                height: "min-content"
              }}
            >
              {/*<img
              alt=""
              style={{
                shapeOutside: "rect()",
                float: "left",
                width: "200px"
              }}
              src={`${
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/ruozefjvlqgl5q2/Screen%20Shot%202021-11-08%20at%209.21.26%20AM.png?raw=1"
              }`}                />*/}
              <Cable
                onError={handleScollImgError}
                style={{
                  height: "500px"
                }}
                src={
                  this.state.iosNoPhoto
                    ? ""
                    : "https://drive.google.com/file/d/1AKHfVNXAR8yqzjJOznMWbYGEApa4pnEA/preview"
                }
                float="left"
                title="facebook.com - Occupy Wall st reviews"
                scrolling={this.props.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
                scrollTop={this.props.scrollTop}
              />
              <Cable
                onError={handleScollImgError}
                style={{
                  height: "500px"
                }}
                src={
                  this.state.iosNoPhoto
                    ? ""
                    : "https://drive.google.com/file/d/1nhwR5mV8zN_nwmHYJhUVm6k3wCpQRX8x/preview"
                }
                float="left"
                title="nextdoor.com - anti-rent-seeker bona fides"
                scrolling={this.props.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
                scrollTop={this.props.scrollTop}
              />
              <Cable
                onError={handleScollImgError}
                style={{
                  height: "500px"
                }}
                src={
                  this.state.iosNoPhoto
                    ? ""
                    : "https://drive.google.com/file/d/1BEPoDIKY-KpnDGIwPA6Xw0X8U52fhij1/preview"
                }
                float="left"
                title="nextdoor.com - anti-rent-seeker bona fides"
                scrolling={this.props.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
                scrollTop={this.props.scrollTop}
              />
              After some clutch comments about haggling-discrimination with
              friends & family discount comparative law jason borne
              <Cable
                onError={handleScollImgError}
                src={
                  this.state.iosNoPhoto
                    ? ""
                    : "https://drive.google.com/file/d/1YWQM3kIi1ea1Cl7n9RkxmO9v8mOx7K1W/preview"
                }
                float="left"
                title="nextdoor.com - anti-rent-seeker bona fides"
                scrolling={this.props.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
                scrollTop={this.props.scrollTop}
              />
              <br />
              sampling randomly is emulated randomness, to which volutary and
              jury-permits is more
              <br />
              <br />
              Obvious bond-laundering
              <br />
              Biden wants to compensate monetarily for losing children? That’s
              not even their fault (they can look for them) nor can it be
              monetized. Children aren’t worth anything unless you’re about to
              admit you use them for chores. GOP think it is a “calling card”
              for more immigrants while they drool about their epiological
              “supply chain problem.” The bipartisans do not care what “cause”
              money is launders for anymore, as long as third party beneficiary
              accrual gets bailed out thru the supply chain instead of reversed.
              “Stock market is looking strong,” they say to describe prices
              increasing. That is like saying you are going to raise rhetoric! A
              market is strongest when it is efficient, ask meeting bid. They
              got elected because there isn’t an occupy candidate, so people
              don’t turnout and are under ideological duress
            </div>
          </div>
          <br />
          <br />
          Only 5m people out of the workforce right now,”&nbsp;
          <span style={{ textDecoration: "underline" }}>market-communist</span>
          &nbsp;accrual is money&nbsp;
          <span style={{ backgroundColor: "orange", color: "black" }}>
            Payne Jr.
          </span>
          , uh maybe per 10 year cohort since 1970
          <br />
          <br />
          Reduced hospitalizations/byproducts in half, says fraud Peter
          Michalos. bacteria causes inflamation. replication is mitosis. FUCKING
          RETARD&nbsp;
          <span role="img" aria-label="reverse">
            🔄
          </span>
          . your testing is made for each type-detected... that's a /basis rate
          fallacy. "Fines for non-compliance and being fired for not being
          vaccinated. thats a thing that is happening, to show
          protection."&nbsp;
          <span style={{ backgroundColor: "navy", color: "white" }}>
            Racketeering tool
          </span>
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
                  : "https://drive.google.com/file/d/1Q1m8c1DNGXwgfQEW0R-1OszAQYg4eCzr/preview"
              }
              float="left"
              title="kildee"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            More jobs is not serving the people... it is brought forward demand
            without consumers for busy-work and bond profit of net losses
            <br />
            <br />
            Saver party tax policy is corporate profit outlays not forcing
            purchases of your government-chosen contractors, and stopping credit
            as income
          </div>
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
                  : "https://drive.google.com/file/d/1vOirQ6LnXFUv5SnW9krxMBEM2hY0JfaR/preview"
              }
              float="left"
              title="kildee"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            "Republicans' policies succeed," left wants jobs, Saver wants
            efficiency, right wants profit, Trumps' policies worked in what way?
            price-deflation under hours is still declining -.2x/yr, trust-built
            existing small business over labor & spent 5x normal for Bidens'
            precedence to do so, & promised to drain the swamp but allowed
            pandemic-diagnosis on less than expected excess deaths
            <br />
            <br />
            Now Carl is saying Marx has at all commented about gun rights. The
            means of labor should be owned by labor has nothing to do with this!
            Might even perceive a gun as means to defend yourself as a laborer.
            Fucking retard
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
                  : "https://drive.google.com/file/d/18Q6PtCKmIejCALTuWmlM6ZI8R5nELHV2/preview"
              }
              float="left"
              title="kildee"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            You cannot say 700k died because of the coronavirus you fucking
            retard, you would need to test all deaths to make a claim of
            changing prevalence. It isn’t even correlated with symptoms!
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
                  : "https://drive.google.com/file/d/15GEbh4xZ_7h_hlIRPQ_m2bPhKKlYVx4h/preview"
              }
              float="right"
              title="kildee"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Marx would never market-communize. shut the fuck up and drop dead
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
                  : "https://drive.google.com/file/d/1ngajRbXkaO09FAY-deW1IGelAB_OIU1P/preview"
              }
              float="left"
              title="kildee"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <span
              style={{
                backgroundColor: "rgb(255,180,255)",
                color: "black"
              }}
            >
              Employing people instead of allowing them to invent
            </span>
            &nbsp;is less competitive. You do not want to "keep momentum," with
            busy-work (no customers). “The left invest in education,” you mean
            monopsony & allow them racketeer their trade-secrets & license
            closed-source-licenses?
            <br />
            <br />
            $1.2t gets tax-payers paid for during $4t/yr concurrent 40% deficit
            is loitering. It doesn’t actually get you those things, they exist
            before it is paid for, you just enabled a higher price for
            reappropriating means from labor, government gentrification & bond
            laundering. Not “goodies,” as described by Cnn
            <br />
            <br />
            Collective bargaining investment isn’t as effective as marginal
            investment by consumer-sprint
            <br />
            Left jobs, right bailout accrual profit. bottom-left is efficient,
            supply and demand with only labor, outlaid right away without
            private communes unsettled. The right want bankruptcy & credit-cycle
            instead of suspension of assumption of borrowers' customers' money
            brought forward. Collective bargaining investment isn’t as effective
            as marginal investment by consumer-sprint
          </div>
          <br />
          <br />
          competing with consumers
          <br />
          Republicans want everyone to enslave each other without
          discrimination. FUCKING WAIT FOR CUSTOMERS BEFORE WITHDRAWING LOSER
          <br />
          <br />
          My family are home-contractors, NY Republicans think homes are by
          default a burden, no, dead-weight-finance disables settlement. YOU ARE
          FUCKING LOITERING AND COLLUDING WITH LENDERS of saver-money
          <br />
          <br />
          "Domestic terrorist BLM, millions of dollars of property damage," Rep
          Peter King. not if you sold at once and amortized for reimbursement of
          down payments upon repo, reverse don't cancel debt:cash*income
          <br />
          <br />
          poverty eradication is the best-friend of generating retarded-poorness
          <br />
          <span style={{ backgroundColor: "rgb(180,220,255)", color: "black" }}>
            "Families are feeling it the most, cutting child poverty in half,"
          </span>
          &nbsp; for a moment while you make the producer a lot richer for not
          having to lower price nor work to live
          <br />
          <br />
          "Tax-free-INCOME-for-life," so-called-conservative Newsmax ad, calling
          rental-income, income
          <br />
          <br />
          GORDON CHANG WHAT EVIDENCE DO YOU HAVE THAT CHINA SPREAD THE VIRUS
          SUCCESSFULLY, YOU JUST STARTED TESTING FOR IT fucking retard
          <br />
          <br />
          <span
            style={{
              backgroundColor: "navy",
              color: "white"
            }}
          >
            “You’re a navy seal you don’t need one,” I missed the part where I
            was taught to catch bullets,”&nbsp;
            <a href="https://truncatedsalestax.com" style={{ color: "white" }}>
              Carl Higby NY NJ & CT
            </a>
          </span>
          <br />
          <br />
          Anthony Tatar fighter for rights of depression-obscurity. Every
          episode is rational “If you have thoughts of suicide, call the hotline
          and we will help you,” is that the number Epstein called?
          <br />
          Share-split tsy-laundering-concurrent-40%-deficit
          <br />
          “Critical to have income coming in,” Payne slights&nbsp;
          <span
            style={{
              textDecoration: "underline"
            }}
          >
            market-communism
          </span>
          &nbsp; rhetorically, “once you live of land, fixed dividends or
          income, no matter what market does.”
          <br />
          <br />
          “'$10m at $1m/yr you are going to run out of money in ten years,' ...
          'what do you mean?'” Payne jr. Another’s gain past zero-sum is more
          work
          <br />
          <br />
          Profits nor America first is conservative
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
                  : "https://drive.google.com/file/d/1IQgjYABEqXe0Wve8tomTx2uHu8KdmLTg/preview"
              }
              float="left"
              title="hodge, scott of Tax Foundation speaking about the importance of expensing"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            if you had a large growth portfolio, you made 18% a year.&nbsp;
            <span
              style={{
                backgroundColor: "white",
                color: "black"
              }}
            >
              Outlay corporate profits, today
            </span>
            <br />
            <h2>You might be dumb and rich, but you're criminal</h2>
            <br />
            "You haven't had an infaltion issue in 40 years," are you
            obfuscating absent supply of labor from rental-income?
            <br />
            Boomers have worked half as much as the&nbsp;
            <span
              style={{
                backgroundColor: "white",
                color: "black"
              }}
            >
              youngest millennials
            </span>
            , who lives more and more in the
            old-person-lender-loitering-collusion
            <br />
            "milennials average aren't in home anymore," well 30 is still
            negative net worth of last-trade-value of frauduulent outstanding
            without collective-write-down
          </div>
          <br />
          <br />
          Stocks anticipating inflation and earnings
          <br />
          "(flush, common-sense, more money, more supply!) Consumers are always
          ready to spend their own money,”&nbsp;
          <span style={{ backgroundColor: "orange", color: "black" }}>
            Payne Capital Management
          </span>
          &nbsp;while down payments to gdp is 1/11
          <br />
          "Americans got an early holiday gift this week when the House finally
          passed the bipartisan infrastructure bill. This means better roads,
          bridges, broadband, and water for all of us. And the crazy part is,
          the two parties actually did it together."
          <br />
          <br />
          <span style={{ backgroundColor: "rgb(255,180,255)", color: "black" }}>
            "No Labels is a national movement of Democrats, Republicans and
            independents working to bring our leaders together to solve
            America’s toughest problems."
          </span>
          <br />
          <br />
          How the hell is “no-label” bipartisan instead of poly? A
          plural-majority of non-voters always win. We want an anti-rent-seeking
          candidate
          <br />
          Nick Carducci
          <br />
          SaverParty.xyz
          <br />
          <br />
          “‘Not all skin folk are kinfolk,’” pinion says “this tells us how to
          behave,” but rather it tells us now not to
          <br />
          <span
            style={{
              backgroundColor: "rgb(166,16,30)",
              color: "black"
            }}
          >
            "save small business under pandemic rule. thats what we do. we rush
            in and bail people out.treasury rates is the discounting mechanism,
            bonds moving higher, yields lower."
          </span>
          <br />
          <br />
          "GDP will be reduced by -1 by every dollar of government spending."
          What kind of market-communist math is that? Do you not count
          government debt in m2 without currencyComponentOfM1.
          <br />
          {/*I'm estimating that net value is because you fucking count
          "investment"-government-gentrification as income. the capital loss is*/}
          Another fool who counts Investment and Government as Exported when
          attempting to accounting for income
          <br />
          <br />
          gdp by another measure than the actual price*trades is nuts, unless
          burgeoning for price*hours*trades, when price =
          currencyComponentOfM1/public-park-lands
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
                  : "https://drive.google.com/file/d/16pwuj68t2vRkTIBTYniyVXVbVKpXABSM/preview"
              }
              float="left"
              title="hodge, scott of Tax Foundation speaking about the importance of expensing"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            full-expensing for capital investment, important for the economy
            today," Scott hodge
            <br />
            "book (finance, accountants salivating, put in by economists,
            capital investment for full-expensing, net-operating-loss bail-outs
            vs irs tax-cash-profits (cash, "pro-growth, rules out depreciaton
            and expensing").
            <br />
            literally said loss-deductions was, "good," first for growth and
            then said to be "pro-growth" would be to stop that. then he fucking
            finished with, "importance of expensing, as is scheduled to do," for
            the economy,&nbsp;
            <span style={{ backgroundColor: "orange", color: "black" }}>
              more admittance of trust-building on air
            </span>
          </div>
          <br />
          <br />
          America first&nbsp;
          <a
            href="https://www.academia.edu/48950663/Economics_of_Politics_Public_Finance_Term_Paper"
            style={{ color: "rgb(20,100,200)" }}
          >
            foreign tax increase above corporate
          </a>
          , for the only&nbsp;
          <span
            style={{
              backgroundColor: "white",
              color: "black"
            }}
          >
            utilitarian purpose being to
          </span>
          , "go public"
          <br />
          <br />
          ACLU WAS ON THE SIDE OF BUSINESS/Consumer, hung-jury-permits,&nbsp;
          <a
            href="https://doi.org/10.3389/fcimb.2018.00396"
            style={{ color: "rgb(20,100,200)" }}
          >
            "science"
          </a>
          <br />
          “Economists turn away because they didn’t want to be ridiculed by Paul
          Krugman too,” Kevin Hasset presenting&nbsp;
          <a
            href="https://www.academia.edu/43983386/Can_a_socialist_or_communist_system_compete_effectively_in_a_global_economy"
            style={{ color: "rgb(20,100,200)" }}
          >
            Socialism, Capitalism & Democracy
          </a>
          <br />
          <br />
          <h2>What am I living in the fucking Giver?</h2>
          <span
            style={{
              backgroundColor: "rgb(170,90,220)"
            }}
          >
            Can only discriminate without comment for labor and consumer, price
            withstanding
          </span>
          <br />
          <br />
          Registered voter, likely voter, why would you not include non-voters
          as representative-authority after moooving on the election with what
          uya got
          <span style={{ backgroundColor: "rgb(240,160,160)", color: "black" }}>
            “I don’t want to put you on the spot because this is how you make
            your living,” Tom Basile
          </span>
          <br />
          <br />
          Single largest investment in public works in the nations history, turn
          the climate crisis as an opportunity
          <br />
          <br />
          Blue collar blue print jobs infrastructure resilience, 2-3 months of
          ghost cities, will visit ports first. Why not charge the shipping?
          Racketeering
          <br />
          <br />
          Scott Georgia bipartisan $339m rent-seeking-laundering
          <span
            style={{
              backgroundColor: "orange",
              color: "black"
            }}
          >
            High speed internet
          </span>
          <span
            style={{
              backgroundColor: "rgb(180,255,220)",
              color: "black"
            }}
          >
            , _, water quality, charging stations electric vehicles Useless
            price inelasticity, labor-monopsony instead of regulation, fines
            instead of jailtime, net loss imprisonment by bonds instead of
            truncatedsalestax.com 666&nbsp;
            <a href="https://billbiden.org">BBB</a>
          </span>
          <br />
          <br />
          Non-voters always win in detest & eligible voters in plural-majority
          <br />
          <br />
          “Self destructive, make own case,” is that disqualifying now, newt?
          <br />
          “Customer-client,” finished
          <br />
          <br />
          <span role="img" aria-label="clown">
            🤡
          </span>
          "Bipartisan $5t emergency spending, Myself, Trump, MNuchin, then
          jammed thru another $2t with no bipartisanship," (R) Larry Kudlow
          <br />
          <br />
          "The emergency is over, the economy is expanding. before they destroy
          it with taxes, regulation and energy damage. We are growing at $6t",
          Larry continues "they are still printing, the pandemic is over." Money
          Market is the big cause of the inflation (ignoring
          value-"price"-elasticity from debt-inelasticity)
          <br />
          <br />
          "They project 2% gdp growth, what the heck is that," uhh stasis of
          basis? that is population growth half life ago
          <br />
          <br />
          <span style={{ backgroundColor: "rgb(255,180,255)", color: "black" }}>
            net-loss-bond-laundering
          </span>
          , if you can keep it
          <br />
          <br />
          <span
            style={{
              textDecoration: "underline"
            }}
          >
            market-communist
          </span>
          -takeover in the healthcare & energy industry
          <br />
          <br />
          "Left loves jobs," the right loves profits, the bottom left loves
          efficiency, emulating with regulation of contracting infinite
          producers
          <br />
          <br />
          what if technology for charging stations need to upgrade, but you
          already forced everyone to "purchase" it
          <h2>Throwing out the baby with the bathwater</h2>
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
                  : "https://drive.google.com/file/d/1uSLG4f6g9Zy3no16Nmvzbl-fSUDcHoox/preview"
              }
              float="left"
              title="biden infrastructure monopsony"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
          </div>
          <br />
          Chargin-stations, led-pipes,&nbsp;
          <span
            style={{
              backgroundColor: "orange",
              color: "black"
            }}
          >
            broadband
          </span>
          , all can be purchased by consumers
          <br />
          torts may be appropriate for every-subsidy prior
          <br />
          <br />
          Power-grid monopsony instead of target-margin is ILLEGAL
          trust-building beyond article 4, & free rider mutable
          <br />
          <br />
          There is nothing social about gentrification/welfare, price-inelastic
          and a boon to producer-ask
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
                  : "https://drive.google.com/file/d/1Tlbew46Y9zEv_xyv0te65CAAjLighfTq/preview"
              }
              float="right"
              title="bulwark"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            The bulwarks favorite part of the free rider mutable gentrification
            bill is the front-running of low income housing improvements and
            rent seeking by the government instead of actually regulating? Debt
            inelasticity 4400% is more real than inflation 102%, says the super
            wealthy are going to pay for it when it only costs consumers in
            comparison to outplaying corporate profits today. It concurrently
            with 40% debt spending is LAUNDERING to say it is paid for, even
            when gorging consumers with their own money, forcing purchases and
            gentrification of the poors’ homes
          </div>
          <br />
          "you and I and our kids will all pay," this prick is fucking
          delusional
          <br />
          <Cable
            onError={handleScollImgError}
            style={{
              width: "80px"
            }}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1G5ZPxvVXeXAHlYtynAUs8mOjqYYAkRIc/preview"
            }
            float="left"
            title="zeoli"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          <br />
          socialism is conservative, not those protecting accrual and insurance
          <br />
          collective bargaining fraudulent. Literally thinks spending will
          bankrupt our country, right now it is impossible without using more
          saver-money third party beneficiary share-split for government
          gentrification and bond laundering which is mostly private, and Marx
          just wants to stop private actors from counterfeiting in contract
          (third party beneficiary/no-surrender is already law, not
          "progressive-kook-
          <span
            style={{
              backgroundColor: "orange",
              color: "black"
            }}
          >
            marxist
          </span>
          -nutjobs," marx would never gentrify nor reappropriate means of labor,
          only regulate market-communist tranch-fag wall st)
          <br />
          <br />
          “Family court supervision FUCKING LUNATIC. borrowers loiter.
          Pensioners are PIGS using grandiose accrual value not bid-price ready
          willing and able,” NY Commissioner Shae of my dreams. YOU STILL HAVE
          MY NUGG, and your mortgage collateral is bartenders’-money
          <h3>
            <a href="https://fred.stlouisfed.org/graph/IHdV">
              (( (v2- (GDP/(m2-currencyComponentOfM1)) )*currencyComponentOfM1 -
              NM - ND) / P) / currencyComponentOfM1
            </a>
          </h3>
          {/*width && <Fraud6 width={Math.min(600, width - 100)} />*/}
          <span style={{ backgroundColor: "white", color: "black" }}>
            Jury-duty: accrual is bizarre&nbsp;
            <span role="img" aria-label="shh face finger lips">
              🤫
            </span>
          </span>
          <br />
          <a
            href="https://truncatedsalestax.com"
            style={{ color: "rgb(20,100,200)" }}
          >
            Illegally
          </a>
          &nbsp;carrying guns on street is only cases as to not
          threaten-recklessly.&nbsp;
          <a
            href="https://teapharmacy.party"
            style={{ color: "rgb(20,100,200)" }}
          >
            confistacting
          </a>
          ? Well, at least they aren't shooting on site, but they are making
          money on net loss thru imprisonment when bonded
          <br />
          sonthing is corrupt when login.gov is so, so malfeasant towards&nbsp;
          <a
            href="https://thumbprint.us/phone"
            style={{ color: "rgb(20,100,200)" }}
          >
            repeat-offender-comms
          </a>
          <br />
          Class action can be a compelled mediation & hung-jury-desist order
          <br />
          <br />
          reappropriating money and scalping the bond net loss profits with
          useless price-inelasticity free rider mutable instead of cap rent 5
          units 30 days to force settlement, of which Schumer says affirmitavily
          invices are theft is NOT in medicare for all but merely a greater
          premium for less deductible to make the producers inexorbinantly rich
          over "poverty" or if let, price-deflation
          <br />
          <span style={{ backgroundColor: "brown" }}>
            growth of brought forward demand, ideological duress muck
          </span>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/8av0hooby5uek3r/clyburn.jpeg?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
          </div>
          <br />
          <br />
          you aren't transformative by gentrifying r&d&nbsp;
          <span style={{ backgroundColor: "rgb(180,220,255)", color: "black" }}>
            gentrify, don't target-margin
          </span>
          <br />
          you aren't more competitive by bloating demand befor the bid-is ready,
          willing & able, for useless dead-weight-rentier cost on labor to
          sustain
          <br />
          broadband and carbon capture monopsony by colonialist Pelosi
          <br />
          laundering 40% debt spending concurrently to pay-fors, profits
          redistribution instead of immediate corporate outlays Psaki
          <br />
          if you don't want liability you need to open-source and only certify
          instead of prohibit
          <br />
          consensus amongst the industry-precedence-incentivized takes the cake
          for biggest pro-testor! I got D in Game Theory bc racism
          <div
            style={{
              backgroundColor: "rgb(14,118,168)",
              padding: "20px",
              paddingRight: "40px",
              width: "calc(100% - 150px)"
            }}
          >
            "Paid by whom? https://usdebtclock.org/"
            <br />
            <br />
            _ Everyone pays for it and everyone benefits. Duh.
            <br />
            Curious curious like 3
            <br />
            <br />
            comparative advantage isn’t worth it when replacing two industrial
            workers with one and the other watching their kids. Future and past
            demand are cheated
            <br />
            <br />
            _ Do you have children?
            <br />
            <br />
            that’s exactly my point. I’m the child doing chores. Enough
            gerontocracy. Let me take the job. Enough trust-building
            <br />
            <br />
            _ Do you have children? Yes or no?
            <br />
            <br />
            I said I’m the child. How dumb can you be. That means no
            <br />
            <br />
            _ So—this topic does not apply to you as a worker. You haven’t
            needed this benefit—so you just have an opinion to offer, and not
            much more. No “real” experience, just your “two cents.”
            <br />
            <br />
            I’m a worker… are you racist or something? Everyone works, even kids
            <br />
            <br />
            _ Money exists between our ears. Chase alone could conjure up 29
            trillion this afternoon—hell, they may already have—we will never
            know. Plus, debt is good, at least that's the conventional wisdom.
            That money is coming from everyone on Linkedin—we're good for it—we
            are money. Our "American" productivity is what will pay off the
            debt. #societyandculture
            <br />
            <br />
            _ So, you don't bet on America to pay its debt? Is that your worry?
            That American won't pay what it owes? Why do you not believe in
            America?
            <br />
            <br />
            I appreciate your acknowledgment that conventional wisdom can be
            changed. Alternative finance like max profit royalty contracts in
            Vaults.biz or Pipe . Communism was actually written in context of
            credit-cycle by market communists. I attest productivity is actually
            price deflation under hours
            <br />
            <br />
            insightful 1
            <br />
            _ No, I'm not racist. Kids in my family don't work jobs—they go to
            school. You have to ask if adults who work can't get paid family
            leave—will child workers get a fair deal? Capitalism can easily pay
            for all of this. Folks need to stop acting silly.
            <br />
            <br />
            we can actually reverse debt:cash*income, so Savers compel 20% US is
            fed lands/bartender-money as a third party beneficiary to the down
            payments to gdp 1/11. 10x more hours than 1970 to own median home,
            not because of gdp/p nearly constant before 1913.
            Timelesspaydayroyalty scoped for industry-type, settle cap 5 units
            or 30 days Saver Party
            <br />
            <br />
            _ Sigh. The point is this—they do these things (good pay, WLB, long
            family leave, public option health care, etc.) in western Europe,
            and the world capitalism hasn't ended. We can do them in
            America—that is my point.
            <br />
            <br />
            it’s useless price inelasticity, monopsony, gentrification &
            trust-building. Get out. Schumer admitting now invoices are theft is
            out of Medicare for all and it means higher premiums to match
            deductible lowering
            <br />
            <br />
            _ Dude, what (blank) are you saying? 🙄 Wow.
            <br />
            <br />
            just look up "third party beneficiary" law, then "monopsony." Only
            need it because of debt, implausible landlord use and collective
            bargaining fraud, and it is useless price inelasticity
          </div>
          <br />
          "Federal reserve is going to stop inflation by creating more
          debt-inelasticity," Jake Tapper says smiling
          <br />
          <br />
          Future hours rollover non-concurrentable UNITS (lest apt. book escrow
          withut refund but review for grandiose consumer protection law scopes
          <br />
          <span style={{ backgroundColor: "rgba(180,220,255,.4)" }}>
            Government healthcare literally lied about me punching and kicking,
            trying to elope for going in for a knee injury after being presented
            with an unidentified syringe. Riverview will not reveal the hallway
            footage to this day (5 months before the time of this writing)
          </span>
          <br />
          "job gains, a lot to celebrate, ..."&nbsp;considering instead of&nbsp;
          <span style={{ backgroundColor: "white", color: "black" }}>
            outlay corporate profits today
          </span>
          , tax profits for bond laundering 10% debt-service but 40-50% spending
          is new debt or grandiose accrual of collateral valued by those very
          bonds.
          <br />
          <span style={{ backgroundColor: "rgb(255,180,255)", color: "black" }}>
            monopsony, fine, not regulate/target-margin
          </span>
          <br />
          "infrastructure enormous, tremendous benefit to the economy," he
          continues "get shit done," on cnn.
          <br />
          “The economy is not just inflation, it is job creation,”&nbsp;
          <span style={{ backgroundColor: "rgb(180,220,255)", color: "black" }}>
            cnn/biden busy-work
          </span>
          <br />
          <br />I work for copyright, you work against $12k/year/person new
          debt, postly private. expansion of social safety net is
          reappropriating labors' means to trust-building parents from children,
          existing business from workers. timelesspaydayroyalty scoped for
          industry-type max-profit royalty contracts like alternative finance
          after&nbsp;
          <span style={{ backgroundColor: "white", color: "black" }}>
            reverse debt:cash*income
          </span>
          <br />
          <br />
          So you are telling me, Trump paid Obama’s pro-stitute pee bed?
          <br />
          <br />
          Bipartisas want to collude rank choice to fine instead of regulate,
          closed-source-license instead of certify
          <br />
          <br />
          <span>Teapharmacy.party</span>. Gentrification/charity had
          intermediate supply-demand elasticity of 1:1 to price-change.
          Investment as GDP, means Net exports is selling out - except for
          dollars as 20% US is Federal Lands/bartender-money
          <br />
          <h2>
            Do you have a gigantic dent&nbsp;
            <a
              href="https://brainscan.info"
              style={{ color: "rgb(20,100,200)" }}
            >
              in your head
            </a>
            ?
          </h2>
          private MARKET-communist republicans and libertarians want to hoard
          profits, copyrights & concurrentability (non-expiring unit) in
          corporations rather than OUTLAY CORPORATE PROFITS TODAY
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              style={{
                width: "120px"
              }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/e29e0ruqx6o4cz6/Screen%20Shot%202021-11-05%20at%2012.01.15%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Brainwashing the oxymoron,&nbsp;
            <span
              style={{
                backgroundColor: "rgb(240,160,160)",
                color: "black"
              }}
            >
              "Big-Government-Socialism"
            </span>{" "}
            to mean government gentrification of jury & intermediate
            supply-demand? Do you have a gigantic dent in your head?
            <br />
            Even if 2.5m ms + acute flaccid paralysis was not paralytic polio &,
            not only uncartoonized cause lest electron microscope
            bacteria-cell-virus snapshot, but lest&nbsp;
            <a
              href="https://www.nature.com/articles/d41586-019-00991-4"
              style={{ color: "rgb(20,100,200)" }}
            >
              bacteria-in-order
            </a>
            , ad Article 4 grounds would be found by a jury to convict the all
            but not than an "alive, evolutionary-trait or manifestation of
            antimatter," to duress within an indiscrimiate minimal viable
            product without duress and reciprocal exclusio lest
            involuntary-servitude with unmet standing to sue
            <br />
            +500k/200k basis jobs, Productivity over Hours&nbsp;
            <span style={{ backgroundColor: "orange", color: "black" }}>
              is like, the opposite of hours
            </span>
          </div>
          <br />
          in what world would Marx mandate anything except labor having means.
          They gentrify, reappropriating means is not Socialism, but
          market-communism. Mandates with hung-jury is like, legal-communism.
          <br />
          <br />
          Rudy talking about his $90b budget then bashes Marxism as
          market-communist... He literally invented communism to, "fight that"
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              style={{
                width: "800px",
                maxWidth: "calc(100% - 50px)"
              }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/1t1njxazwq70gjk/Screen%20Shot%202021-11-05%20at%2011.13.36%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/38jcaugeyanm73p/Screen%20Shot%202021-11-05%20at%204.36.10%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/znqq689vncdjjyq/Screen%20Shot%202021-11-05%20at%204.35.56%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <br />
            <iframe
              style={{
                shapeOutside: "rect()",
                float: "right",
                width: "600px",
                maxWidth: "90%",
                border: 0
              }}
              src="https://www.youtube.com/embed/OqgUxnqc3AM"
              title="YouTube video player"
            ></iframe>
            Cases pending religious class-precedence-malfeasance for religious
            beliefs by pedo-preist Peter follower sancctions & derelictions when
            everyone thinks G-d made virus or it is a human evolutionary trait
            rather than bacterial-source, exclusively
            <br />
            <br />
            If $2-6t currencycomponentM1 travels 1ce a year, where does it go if
            gdp to down payments is 11/1, $1.98 trillion
            <br />
            I was curious where the money goes if $4t/yr is fed spending before
            3/2020
            <br />
            But it actually is half new debt, 10% is debt-service, but yes gdp
            to down payments is 11/1, or $2t a year, happens to be the total
            outstanding public park deeds of 20% fed lands, $88t bond value,
            third party beneficiary should be reversed
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/qo7bxddaumkvybt/Screen%20Shot%202021-11-05%20at%204.36.22%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <br />
            <br />
            Inflation problem from immigration or supply chain solved?
            <br />
            If you knew you could solve supply trade problems with immigration
            but without wall st to not have inflation, would you do it?
            <br />
            <br />
            <span
              style={{
                backgroundColor: "rgb(180,220,255)",
                color: "black"
              }}
            >
              ERIC ADAMS CANNOT FUCKING REQUEST TO BE PAID BEYOND DOLLARS
            </span>
            , he has to buy it himself, do not let a bitcoin pass thru the
            office so spuriously
            <br />
            <br />
            Psychotic and antisocial is subjective - Paternity male but is trust
            building against the&nbsp;
            <span
              style={{
                backgroundColor: "rgb(240,160,160)",
                color: "black"
              }}
            >
              baby taking that job
            </span>{" "}
            for 2 lost vocational workers for one and a nanny
            <br />
            Anybody but the illegals, cosigning share-split but complains about
            supply chain, just let them in Karen you fucking kook on Rita Cosby
            <br />
            They say children savers will pay by share split down payments to
            gdp 1/11 endlessly, are you kidding me?
            <br />
            50% of $4t/yr pre-3/2020 fed expenditures is debt Kathy you TOTAL
            BITCH
          </div>
          <br />
          <span role="img" aria-label="alarm">
            🚨
          </span>
          &nbsp;getting on&nbsp;
          <a
            href="https://truncatedsalestax.com"
            style={{ color: "rgb(20,100,200)" }}
          >
            probation if you've done something wrong
          </a>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/6q73v4euxw1y08k/Screen%20Shot%202021-11-04%20at%2010.40.19%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Our choice is to have voucher, keep public schools, but not remove
            it. Baby steps or entrapping? Inception deep state
            <br />
            <br />
            Preventing deaths is not changing the byproduct, but not the cause
            <br />
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/o5ahjh9qlae7nz4/bob%20costas.jpeg?raw=1"
              }
              float="right"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <br />
            <Cable
              onError={handleScollImgError}
              style={{ width: "50px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/237l11jixc8e38s/Screen%20Shot%202021-10-29%20at%203.17.55%20PM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            "Science," Bob Costas, what a fucking idiot
            <br />
            <br />
            "Protect citizens," says the colonialist
            <br />
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/dqm5hvza8llrcnx/Screen%20Shot%202021-11-04%20at%209.44.28%20PM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <br />
            you cannot owe what you have not earned! any compounding from poor
            investment is the fault of the investor
            <br />
            <br />
            Want to solve your over-population-by-boomer ("supply chain")
            problem?
            <br />
            Your laws are all over the place. Enforcing one often countervails
            another. You are prohibiting trade when stopping immigration, for
            instance
          </div>
          <br />
          <br />
          Insurance discounts is an oxymoron & fraud,
          class-precedence-malfeasance
          <br />
          INSURANCE CANNOT SAVE YOU MONEY WITHOUT CONCURRENTABLE UNITS
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/yx7er7xf4vaozto/Screen%20Shot%202021-11-04%20at%209.36.46%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Perjury is not a crime because you are under duress and is vailed by
            Amendment 5 unless you’re lie harms others rather than launderers
            net loss imprisonment for a net loss, like in competition with
            closed-source-ingredient-list&nbsp;
            <a
              href="https://teapharmacy.party"
              style={{ color: "rgb(20,100,200)" }}
            >
              pharma cops
            </a>
            . why do you care if I smoke when it is a performance enhancer? YOU
            NEED TO LOSE WEIGHT IF IT WER LAW NOT TO BE I GUESS WE WILL USE LAWS
            INSTEAD OF NATURAL LAW IN RETRIBUTIONAL PERPETRUITY
            <br />
            <br />
            This guy definitely gets off on imprisonment for lying to stay out
            of jail, even if there is no victim except yourself
          </div>
          <br />
          DEMOCRATS: “Gdp is growing, we’ve gotten things done,” that isn’t a
          measure of productivity, being prices*hours*trades
          <br />
          The voters told us that we don’t like ANY of the candidates
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/1mzbqrwnnj00tvl/Screen%20Shot%202021-11-04%20at%208.10.21%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            paid family-leave is gerontocracy trust-building. I'm the child
            doing the chores. Let me take the job. enough trust-building
            <br />
            Gentrification and reappropriation of labors' savings isn't
            socialism, forbidding corporate profits year to year and implausible
            use rent is, but not public banking. Democrats & Republicans
            solution to inequality is always gentrification & fines instead of
            regulation
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/wxrqv7gotpyeq17/Screen%20Shot%202021-11-04%20at%208.04.48%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            market-communism permeates in finance not just public
            <br />
            willful disobedience with hun-gjury-permitted science is abject
            gentrification for government
            <br />
            <br />
            Not actually fighting against vaccine mandates when you say vaccine
            helps. If the virus is deadly, you are required to stop that within
            the minimal viable duress parameters
          </div>
          <br />
          <br />
          Stinchfeild calls cops free thinking when they have no retort for
          viral-cause of deaths other than, "just because." Fucking flop
          <div
            style={{
              float: this.state.iosNoPhoto ? "" : "left"
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <TwitterTweetEmbed
                key="1428312309685002241"
                tweetId="1428312309685002241"
              />
            </div>
          </div>
          "I projected the virus would kill 500k americans, and it did," any
          tard could estimate that since age-standardized excess deaths expected
          is 1.2m from population growth alone
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/b22mgsqdly71pqc/Screen%20Shot%202021-11-04%20at%207.58.41%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/xee2x3qx1xo5j5l/Screen%20Shot%202021-11-04%20at%207.58.31%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
          </div>
          <br />
          <br />
          PUBLIC DEBT {"<"} PRIVATE DEBT
          <br />
          Mark Levin, retarded market-communist, doesn’t realize private debt is
          more than public in $12k/person/year, complains when government does
          it, claims our children will pay when gdp to down payments is 11/1 and
          total debt is 4400% currencyComponentOfM1 tied up in corporate bank
          accounts. LITERALLY DEFICIENT IN COUNTING or lying to you night in and
          out. third party beneficiary contracts are impossible without waiting,
          all you can do is sell business-account, not appraise before consumer
          pays. Profits are a net loss of individual-labor-savings
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/75h7jbg8eypoor2/Screen%20Shot%202021-11-04%20at%206.35.41%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Republicans are the party of solutions,” you haven’t solved anything
            more than tying your shoes
            <br />
            <br />
            Bipartisan support for Infrastructure but plural majority against
            both parties
            <br />
            <br />
            no need to tax profits instead of outlay immediately and stopping
            private-market-communism for debt-service in free rider immutables
            but most roads can have margin target tolls and private-pipes can be
            regulated without fines nor gentrification. STFU LYNDSAY, FUCKING
            COUNT EVERY PERSON not just voters who have ideological duress at
            worst and a candidate to rep at best
          </div>
          <br />
          there are policy alternatives but you are just gluttonous
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/4idoe10sagtj4qj/Screen%20Shot%202021-11-04%20at%206.17.02%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            “Stolen technology,” USPTO grunt Michael McCaul. No utility is
            invented but discovered, copyright is sufficient for IP competition
            <br />
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/c09o1qixp2xrdbz/Screen%20Shot%202021-11-04%20at%206.08.39%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <br />
            High gas prices will get better, Bank of America just doesn’t want
            to reverse debt:cash*income so they don’t present it as a solution
          </div>
          <br />
          THERE ARE SO MANY LAWS THEY COUNTERVAIL WITH OTHERS AND PRECEDENCE;
          competing-with-consumers is abject intent
          <div
            style={{
              shapeOutside: "rect()",
              float: "left",
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/bp3bpgjld5zhcjl/Screen%20Shot%202021-11-04%20at%205.56.45%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
          </div>
          “Allow people to opt out as county from spending bill,” a private
          market-communist cajoles literally theft in contract as long as it is
          voluntary between the counterfeiting lender and loitering borrower
          <br />
          <br />
          Market-communists fighting anti-rentier for it is the way of american
          life, drop dead
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/ec9cu6oljvwl611/Screen%20Shot%202021-11-04%20at%205.38.39%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/1880nukh2xmkj3o/newt.jpeg?raw=1"
              }
              float="right"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Elections do not have the power merely for having to move without
            <br />
            . Socialists were NEVER redistribution of labor’s equity except
            retributable torts for third party beneficiary insurance collective
            bargaining fraud & implausible landlord use DEAD-WEIGHT in
            supply-demand
            <br />
            <br />
            Communism is agains market-communism, rampant corporate profits and
            hung-jury-permits, prejudicial assumptions, countervailing laws and
            neglected-intent
            <br />
            <br />
            What kind of socialist with means to labor would allow mandates or
            private business discrimination and involuntary servitude of the
            discriminated’s contributions lest retributed without jury 11/12 in
            the populous not randomized emulated but voluntary with abstain as a
            default “no” unless is from conflict of interest. You're fucking
            idiots Brian Mast and Chris Salcedo
          </div>
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/ud95p1ay8g45hrr/Screen%20Shot%202021-11-04%20at%205.15.19%20PM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            mandatory-testing isn't even necessary since it gives false
            positives of bacterial causes
            <br />
            <br />
            <iframe
              style={{ width: "90%", border: 0 }}
              src="https://www.youtube.com/embed/10kjUOVqk7o"
              title="YouTube video player"
            ></iframe>
            <a href="https://froth.app" style={{ color: "rgb(20,100,200)" }}>
              Work to feed my family
            </a>
            ,” no you fucking tool you work for the bank impossibly involving
            savers’ money THATS MY MONEY TO SPEND can only “promise”
            business-line
            <br />
            <br />
            Osha/Article4 regulation when the ONLY proof you have virus is
            created by virus is a FUCKING CARTOON?
          </div>
          <div
            style={{
              shapeOutside: "rect()",
              float: "left",
              display: "flex",
              flexWrap: "wrap",
              width: "100%"
            }}
          >
            <div
              style={{
                height: "min-content"
              }}
            >
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/iwcdoybc89tz1nv/Screen%20Shot%202021-11-04%20at%204.26.54%20PM.png?raw=1"
                }
                float={null}
                title=""
                scrolling={this.props.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
                scrollTop={this.props.scrollTop}
              />
            </div>
            <div
              style={{
                display: "flex",
                height: "min-content"
              }}
            >
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/3rkidthbcl7hxrm/Screen%20Shot%202021-11-04%20at%204.27.33%20PM.png?raw=1"
                }
                float={null}
                title=""
                scrolling={this.props.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
                scrollTop={this.props.scrollTop}
              />
            </div>
            <div
              style={{
                display: "flex",
                height: "min-content"
              }}
            >
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/chc8pfzxgyes735/Screen%20Shot%202021-11-04%20at%204.27.21%20PM.png?raw=1"
                }
                float={null}
                title=""
                scrolling={this.props.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
                scrollTop={this.props.scrollTop}
              />
            </div>
            <div
              style={{
                display: "flex",
                height: "min-content"
              }}
            >
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/3vpw5afaduwqur5/Screen%20Shot%202021-11-04%20at%204.26.43%20PM.png?raw=1"
                }
                float={null}
                title=""
                scrolling={this.props.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
                scrollTop={this.props.scrollTop}
              />
            </div>
            <div
              style={{
                display: "flex",
                height: "min-content"
              }}
            >
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/mwmd4ag3fc53q5b/Screen%20Shot%202021-11-04%20at%204.26.33%20PM.png?raw=1"
                }
                float={null}
                title=""
                scrolling={this.props.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
                scrollTop={this.props.scrollTop}
              />
            </div>
            <div
              style={{
                display: "flex",
                height: "min-content"
              }}
            >
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/cca4uxl24gj4j2j/Screen%20Shot%202021-11-04%20at%204.27.11%20PM.png?raw=1"
                }
                float={null}
                title=""
                scrolling={this.props.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
                scrollTop={this.props.scrollTop}
              />
            </div>
            <div
              style={{
                width: "400px",
                maxWidth: "100%",
                display: "flex",
                height: "min-content"
              }}
            >
              Grounds for a new French Revolution against the White House
              <br />
              <br />
              “At least she is not arrogant,” she just said she is never wrong.
              Being in power, humble & wrong is dangerous
              <br />
              <br />
              Age-standardized excess deaths are less than expected by cohort
              size epiologically and bacteria makes virus exclusively (J M
              Sweere, 2019)
              <br />
              <br />
              Marx would never allow market-communes overpower consumer-rights
              of scientific consensus without hung-jury-permits of minimal
              viable product in duress excess
            </div>
          </div>
          <br />
          Marxism uses community to stop suppliers competing with consumers, not
          the indifvidual when they are rightly outlaying profits to labor
          immediately without market-communism
          <div
            style={{
              maxWidth: "calc(100% - 46px)",
              width: "max-content",
              height: "min-content"
            }}
          >
            "We are rich," Rudy says, but with nothing but wealth-inequality,
            the lands have always been the same
            <Cable
              onError={handleScollImgError}
              style={{ width: "50px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/vk68ahw9woekrzi/kerrick%20rudy.jpeg?raw=1"
              }
              float="right"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
          </div>
          <div
            style={{
              maxWidth: "calc(100% - 46px)",
              width: "max-content",
              height: "min-content"
            }}
          >
            "everytime Biden goes out, he potentially destroys, himself." SAY IT
            YOU FUCKING TOOL. REEEETARD
            <br />
            Ween them off bonds with&nbsp;
            <a
              href="https://truncatedsalestax.com"
              style={{ color: "rgb(20,100,200)" }}
            >
              truncated sales
            </a>
            &nbsp;tax AFTER reverse debt:cash&income
            <br />
            <Cable
              onError={handleScollImgError}
              style={{ width: "50px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/o2rrreussf9cijs/nypd.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
          </div>
          <br />
          <br />
          Contributors of utility do actual work, or trading hours for
          copyright, not trading dollars for labor, belaboring the rate
          <br />
          Assess a county with 40% "value" premium discrimination for similar
          House. Republicans and libertarians think price is determined by what
          the borrower and lender can agree, without regaur for those who pay
          the borrower, loitering
          <br />
          <br />
          "Bad or anyone affected," that is your onus Greg. fucking liablility
          communist
          <br />
          <br />
          The&nbsp;
          <a
            href="https://micro-theory.com"
            style={{ color: "rgb(20,100,200)" }}
          >
            Reasoning for infinite producers
          </a>
          &nbsp;to make price-efficient and hung-jury is false
          <br />
          <br />
          “$1 back rub grandpa,” Judy replies, “I would never do that,” while
          $32/day/person new mostly private debt
          <br />
          <br />
          In therapy, your purpose is to lose customers
          <div
            style={{
              maxWidth: "calc(100% - 46px)",
              width: "max-content",
              height: "min-content"
            }}
          >
            finite producers cannot emulate jury-permitting
            <br />
            <Cable
              onError={handleScollImgError}
              style={{ width: "50px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/237l11jixc8e38s/Screen%20Shot%202021-10-29%20at%203.17.55%20PM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            It's coming out, not in
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              style={{ width: "80px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/n782ienk5rxl6fl/Screen%20Shot%202021-11-04%20at%209.08.58%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            “Invoking superhero neurosis to cajole vaccine profits into coffers
            from children, of which aren’t even affected by it.”
          </div>
          <br />
          <div
            style={{
              shapeOutside: "rect()",
              float: "left",
              width: "100%"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/aadxeks7evt2f59/Screen%20Shot%202021-11-04%20at%205.15.08%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
          </div>
          Benny Johnson, “it came from a lab and is as deadly as the flu. That’s
          what the medical experts say.” Imagine if he said those thinks
          together over and over, me might realize Wuhan mimicked nature, then
          tested for it naturally occurring.
          <br />
          <br />
          <span style={{ backgroundColor: "white", color: "black" }}>
            gerontocracy/dead-weight-rentier begs immigration
          </span>
          : If you are listening to people of who to ask on in the media pit,
          and you’r angry of getting them angry,” Uncovering the root cause my
          ass
          <br />
          <div
            style={{
              width: "calc(100% - 46px)",
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/0870zbp8e2nevz7/Screen%20Shot%202021-11-04%20at%202.56.11%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
          </div>
          "Boosters not being asked now but being workshopped” against what
          basis? Stop saying virus is the cause or age-standardized excess
          deaths is unexpected, "if you want to open the liability to producers,
          I'd be for that," cajoling for class-precedence-malfeasance, he
          continues
          <br />
          <br />
          “I am who I am and that’s how I became who I am,” Ed Durr.
          <br />
          “Greatest political feat in recent memory”
          <br />
          <br />
          <div
            style={{
              width: "calc(100% - 46px)",
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/y1eus6keqalc13c/jayapal.jpeg?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
          </div>
          <span
            style={{
              backgroundColor: "white",
              color: "black"
            }}
          >
            Reverse debt:cash*income
          </span>
          <br />
          Anti-afro, anti-child, anti-woman?
          <br />
          Social welfare plan or gentrification
          <br />
          <br />
          Tax payers don’t pay
          <br />
          Family leave is trust building parents
          <br />
          <div
            style={{
              width: "calc(100% - 46px)",
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/re8tpd0n5ceboye/Screen%20Shot%202021-11-04%20at%203.07.17%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
          </div>
          We won, the non-voters, if you count them. The empathy with the old
          people in New Jersey voting isn’t as important as their will
          <br />
          <br />
          “$20m 200x average cvs employee” Steve Cortes, $100k average admins
          useless non-workers. Profits is net loss of individual labor savings
          <br />
          <br />
          I will be using ArrayArrays and withholding the copyright and I have
          medical opinions for entry
          <br />
          <br />
          AP calling Murphy, no candidate.
          <br />
          Less turnout, less standing
          <br />
          NO ONE CARES WHAT EITHER OF YOU THINK, FUCKING NERDS
          <br />
          <br />
          <span
            style={{
              backgroundColor: "orange",
              color: "black"
            }}
          >
            I guess non-voters won
          </span>
          <br />
          Our&nbsp;
          <a
            href="https://projectequity.org"
            style={{ color: "rgb(20,100,200)" }}
          >
            <span role="img" aria-label="hammer & sickle">
              ☭
            </span>
          </a>
          &nbsp;Biggest export is population,” Trevalese
          <br />
          <iframe
            style={{ width: "90%", border: 0 }}
            src="https://www.youtube.com/embed/A2kSh0A8Ad0"
            title="YouTube video player"
          ></iframe>
          <br />
          <br />
          home sales shouldn't fund free rider immutable keeping interest rates
          zero is a second order effect, their principle is itegral to
          over-gorging (useless-price-inelasticity for intermediate
          supply-demand is trust-building from new entrants) innovators and
          corporate profits held year to year like tiny market-communes, far
          from finite producers
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/8dsttrbercht04v/Screen%20Shot%202021-11-04%20at%2012.58.56%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <div style={{ height: "min-content" }}>
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/p4e0zss43s4t62m/Screen%20Shot%202021-11-04%20at%2012.58.32%20PM.png?raw=1"
                }
                float="left"
                title=""
                scrolling={this.props.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
                scrollTop={this.props.scrollTop}
              />
            </div>
          </div>
          <br />
          ppp trust-building. outlay corporate profits now, I'll work for my own
          IP, thanks
          <br />
          <br />
          Growth is not rebounding. The key to get the global economy running is
          labor
          <br />
          <br />
          immigrants will&nbsp;
          <a
            href="https://fred.stlouisfed.org/graph/?g=HRsT"
            style={{ color: "rgb(20,100,200)" }}
          >
            fix your supply chain
          </a>
          <br />
          <br />
          “Helping the poor without driving out the wealthy,” actually outlay
          corporate profits today would help, charity alone is inelastic unless
          changing wealth standing, truncated sales tax to keep the state out of
          home sales & mortgage out of gdp to down payment 11/1
          <br />
          <br />
          DOLLARS ARE 20% FED LANDS FOR BARTENDER_MONEY NOT bonds
          <br />
          <br />
          Vote Murphy out while voting in Pharma cop citarelli, he wouldn’t want
          to reverse debt:cash*income, cap rent nor truncate sales tax sewage
          police lawsuits. YEAH FUCKING RIGHT
          <br />
          <br />
          Savers pay, bartender-money 20% fed-lands bartender-money, can’t
          servive when rental-income 20x/person 55+/millennial dead-weight
          doesn’t do ACTUAL work. 10x 1970 hours to buy home. cap rent 5
          units/30 days
          <br />
          <br />
          Message sent by the people,” not really
          <br />
          We don’t have an anti wall st choice
          <br />
          Truncated sales tax ween cops sewage lawsuits, jury-desistation and
          permits, cap rent 5 units to 30 days, epiological basis and voluntary
          randomness not emulated by making coins out of people
          <br />
          <br />
          Murphy wins elections with ideological duress, but it doesn’t givee
          him power unless he had the whole eligible population.
          <br />
          Im a voluntary pollster, I don’t think calling people with phones who
          have time to pick up is very random, even if you shuffle the numbers,
          neither is early announcement of voting results unless you can change
          it & it is streamed not tranched
          <br />
          <div style={{ width: "calc(100% - 80px)" }}>
            {!this.state.spotifyerror && (
              <Cable
                style={{
                  width: "100%",
                  height: "380"
                }}
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://open.spotify.com/embed/track/5cf1ZfI16kHp3S1ySpQ36G"
                }
                float="left"
                title="'Ready, Able' Grizzly Bear, emphatic of consumer-side-economics imo"
                scrolling={this.props.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
                scrollTop={this.props.scrollTop}
              />
            )}
          </div>
          Socialist is anti dead weight, not gentrification
          <br />
          Market-communism/gentrification is not communism for consumer
          protection for Pareto-finite producers/socialism
          <br />
          <br />
          "Common sense de-radicalization of our children"
          <br />
          parents will obfuscate anti-banker but teach anti-gov-regulation. only
          hung-jury-desistation can disclude
          <br />
          <br />
          “Russia Germany government choose education,” Rudy Giuliani makes this
          up about Marx (Odessa credit-cycle).
          <br />
          <span
            style={{
              backgroundColor: "rgb(180,255,220)",
              color: "black"
            }}
          >
            “The most killed in the country and the most old people killed,”
          </span>
          imagine exogenous cause in your regression spoken from your mouth but
          not understood
          <br />
          <br />
          Then he talks about inflation 120% federal spending instead of 4400%
          debt-value-inelasticity from labor as intermediate supply-demand
          without dead-weight, mostly private of $32/day/person and rent above 5
          units/30 days WASTE
          <br />
          <br />
          <span style={{ backgroundColor: "rgb(255,180,255)", color: "black" }}>
            third party beneficiary
          </span>
          <br />
          imagine the standing of government if turnout decreases. if nj was a
          city it would be nyc, by size
          <br />
          <br />
          <a
            href="https://flo.uri.sh/visualisation/7722228"
            style={{ color: "rgb(20,100,200)" }}
          >
            nj gubernatorial participation doesn't meet voter registration since
            before 2000
          </a>
          {/*<iframe
          src="https://flo.uri.sh/visualisation/7722228/embed"
          title="Interactive or visual content"
          style={{ width: "100%", height: "600px", border: 0 }}
          ></iframe>*/}
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              style={{ width: "400px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/ihy6kj78f64ojxp/Crouch-Gritty.jpeg?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            wall st candidates, the both of yas
            <br />
            <span
              style={{
                backgroundColor: "orange",
                color: "black"
              }}
            >
              It’s basically a tie, force the vote
            </span>
            <Cable
              onError={handleScollImgError}
              style={{ width: "400px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/sby7z35rtwt3gbo/Screen%20Shot%202021-11-03%20at%206.20.51%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
          </div>
          <br />
          That's not even half of the state. no anti-rentier choice, just
          bipartisan monopsony. no anti-wall st candidates. Do they...
          <br />
          <br />
          I guess a victory lap for a win that he would have hoped for,” Lemon
          on Murphy
          <br />
          People aren’t coins
          <br />
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "400px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/llygt1c875758o1/Screen%20Shot%202021-11-03%20at%2010.40.19%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
          </div>
          “Millionaire pay fair share and take a break workers Protect women’s
          health, more available and more affordable, childcare affordable,
          expanding paid family leave and childcare more than anywhere in
          America. Creating clean energy economy with good job, recover from
          awful scourge by following science, and helping small business get
          back up on their feet.”
          <br />
          <br />
          login.gov malfeasance makes repeat offenders of white collar crime
          too, to which libertarians are gimps to boot
          <br />
          <br />
          <a
            href="https://teapharmacy.party"
            style={{ color: "rgb(20,100,200)" }}
          >
            occupy
          </a>
          &nbsp;pharma cops.
          <br />
          <br />
          Simple majorities rank choice collusion 62% plural-minorities
          <br />
          <br />
          GOP don't want to solve supply chain with immigration, for voting, not
          to work;&nbsp;
          <span style={{ backgroundColor: "rgb(197,179,88)", color: "black" }}>
            1% of GS owned by Murphy
          </span>
          <br />
          <br />
          borrowers loiter free stuff without settlement. value isn't price!
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "150px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/jap8sd5pgcggouw/Screen%20Shot%202021-11-03%20at%2012.38.17%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <span style={{ backgroundColor: "white", color: "black" }}>
              Marxist-pareto, not market-communism consumer protection without
              dead-weight-rentier
            </span>
            : ween cops off bonds max $60 3% under $2k truncagtes sales tax free
            rider immutable sewage police lawsuits instead of bond-profit net
            loss imprisonment and scientific interests to substantiate
            industry-precedence-incentive, intentful-neglect nor
            hung-jury-permists. BAN ACCRUAL MOSTLY Private
            dead-weight-implausible-rentier paid by labor. profit little
            communes, outlay corp profits today
            <br />
            <br />
            "late to the game trade-secret trust-building in public education
            brought forward purposedully-impossibly, you are checked and mated
            John Bachman you fucking prude!
          </div>
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              style={{ width: "250px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/4b4jr30u21zic1a/Screen%20Shot%202021-11-03%20at%2012.26.19%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            "If you own a home like me," Charlie Kirk, I cash advanced as many
            cards as possible and bought $TVIX. Did you?
            <span
              style={{
                backgroundColor: "rgb(255,180,255)",
                color: "black"
              }}
            >
              gentrification/jobs/trust-building/monopsony/move forward brought
              forward
            </span>
            <br />
            Reason to not cheat (bad) if available instead of fate (follower) is
            proof that fate is false. If you would cheat, you likely believe in
            fate/G-d original cause like carface not tank of regulate fentanyl
            user or bacteria in virus&nbsp;
            <span role="img" aria-label="flowers">
              🍁🌸🌼
            </span>
            <span
              style={{
                backgroundColor: "rgb(120,180,255)",
                color: "black"
              }}
            >
              wait for consumers: bottom left
            </span>
          </div>
          <br />
          sanitation is not free rider mutable - up to smelly torts to regulate,
          not fine == prisontime? Nah, they would have to pay for the smell, the
          complaining neighbor, unless the offender has money to do it
          <br />
          <span style={{ backgroundColor: "rgb(255,120,120)", color: "black" }}>
            fractional reserve in contract
          </span>
          <br />
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "250px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/p0vxsdzoypaebm3/Screen%20Shot%202021-11-03%20at%206.34.08%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            When social issues is progressives throwing the moderates
            (not-reappropriating, consumer-protection) under the bus, slap my
            ass and call me later
            <br />
            <br />
            Weed is a performance enhancer, stop the slander, take this site
            down.&nbsp;
            <a
              href="https://feeldifferentdrivedifferent.org/slowed-reaction-time"
              style={{ color: "rgb(20,100,200)" }}
            >
              Your studies are biased
            </a>
            <br />
            <br />
            “Drunk drivers are involved in 25% of motor vehicle fatalities, and
            many accidents involve drivers who test positive for cannabis.” What
            a joke! This is called basis rate fallacy where most of the
            population smokes by default. Event/population epiological study
            would show less prevalence of car crashes by weed users is just
            that. Performance enhancing!
          </div>
          <br />
          <br />
          Pro rate get a job at jfw.com literally says 20m-2.8m continuing
          claims as substantial enough to say it is a bad thing they ended the
          brief moment they were here, that's an insignificant amount of 170m
          with income other than copyright price-fixing, trust-building
          notwithstanding it is abjectly based on miscalculating age
          standardized excess deaths without accounting for cohort size
          <br />
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "250px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/t3v7ub9zakogc0j/Screen%20Shot%202021-11-03%20at%2010.09.42%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
          </div>
          <br />
          <Cable
            onError={handleScollImgError}
            style={{ width: "250px" }}
            img={true}
            src={
              this.state.settleDropboxFree
                ? ""
                : "https://drive.google.com/file/d/1i0CxrHTZsqFhNfvWYhLBb8xWG_VTVs19/preview"
            }
            float="right"
            title="Wake Up America (Newsmax) - Butch Miller: on healthcare, 'conservatives push back'"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          <a
            href="https://micro-theory.com"
            style={{ color: "rgb(20,100,200)" }}
          >
            "Access to healthcare
          </a>
          , what is right for them
          <br />
          <br />
          As conservatives, we have to push back, [against false bid pooling],"
          impedes upon margins to emulate infinite producers and labor of
          demand, outlaid escrow immediately or of non-optionable&nbsp;
          <a href="https://carducci.sh" style={{ color: "rgb(20,100,200)" }}>
            intermediate-materials-and-labor
          </a>
          , abet by expiring-insurance and collective bargaining fraud by false
          bid pools, does invoices emit itself
          <br />
          <br />
          "bipartisan infrastructure bills $1.2t," while 40% goes to
          debt-service and half is new debt or cost consumers. outlay corporate
          profits, today. regulate, don't monopsonize
          <br />
          <br />
          “Beat the supply chain problem,” how except allow immigrants in
          fucking troll Kilmeade? its because there are so many old people we
          are working more than you when you were young
          <br />
          <br />
          "Spending package both sides (62% of the ideologically-under-duress
          country) cannot come together on spending" Emma Rechenberg
          <br />
          <br />
          Youngkin, “we are going to make a down payment on schools,” sounds
          market-communist! Causes inflation but 44x worse, debt-inelasticity,
          mostly private
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            style={{ width: "250px" }}
            img={true}
            src={
              this.state.settleDropboxFree
                ? ""
                : "https://drive.google.com/file/d/1i0CxrHTZsqFhNfvWYhLBb8xWG_VTVs19/preview"
            }
            float="left"
            title="John Bachmann Now - Bob McDonnell says, 'education reformer' to prevent, nay, suppress, the split"
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          Republicans do not want to privatize education
          <br />
          “Education reformer”
          <br />
          Libertarians are against public school monopsony but it is not worth
          the white collar lawlessness elsewhere
          <br />
          1970 10x more hours worked to own a home has nothing to do with
          emotions you fucking droll
          <br />
          <br />
          "emotionally discurbed homeless," facts aren't affected by feelings
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "250px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/18v6bgyjiy4vfio/Screen%20Shot%202021-11-03%20at%209.22.56%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              style={{ width: "250px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/l2z31vxcoffpalm/Screen%20Shot%202021-11-03%20at%2010.22.00%20AM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
          </div>
          <br />
          "We are build for a two-party-system, there is no room for
          socialists," this is the face of white collar crime. Ask her about
          Occupy. After torts, Socialists want zero spending, gentrification by
          bipartisans, implausible landlord use excess rental-units,
          collective-bargaining fraud in insurance and abetted invoices that are
          theft. Probably an advocate for rank choice to collude with the other
          1/3 against occupy-youth plural majority-non-voters
          <br />
          <br />
          Micron sustained government support monopsony-jobs for all? Wtf?
          <br />
          one cannot create jobs without demand & subsidies are elastic for the
          same thing, just trust-building for existing business labor!
          <br />
          <br />
          affordable housing is NOT gentrification, Eric Adams.
          <br />
          <br />
          Curtis Sliwa also is against 30under5.us. there is no implausible
          landlord use detest rep
          <br />
          <br />
          Saver money, not tax-payer money. Labor and productivity-competition
          is not “poverty-exporting” fucking racist American First Pat Fallon
          retard
          <br />
          <br />
          Drop dead birpartisans
          <br />
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "250px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/zfua76guh633dis/Screen%20Shot%202021-11-02%20at%205.56.41%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              style={{ width: "250px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/2sdd6evfq81khpl/Screen%20Shot%202021-11-02%20at%205.56.54%20PM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            competition is scarcely competitive-optimal
            <br />
            <div>
              Amortizing a collective write-down of debt:cash inelasticity and
              running of saver share-split at $2t/yr new debt fed spending
              ($4t/yr = _+tax) $32/day/person mostly private 1/11 down payment
              to gdp&nbsp;
              <span role="img" aria-label="side eyes">
                😒
              </span>
            </div>
          </div>
          <br />
          <br />
          STEM have interests to substantiate their precedencial-claims.
          Industry can be just as bright, given the opportunity WITHOUT private
          & public gentrification. The right don’t want to pay but don’t want to
          default, and you don’t want to reverse. Historians anti-debt are?
          Bartenders
          <br />
          <br />
          “Can’t produce a product, the Bipartisan infrastructure Bill,”
          regulate don't&nbsp;
          <a
            href="https://www.njta.com/media/5688/financial-summary-through-september-2020.pdf"
            style={{ color: "rgb(20,100,200)" }}
          >
            fine/gentrify/monopsony
          </a>
          , but you have no power when a plural-majority didn’t turn out to
          declare the tax or share-split of savers permitted with such a
          hung-jury. Only child-policies instantiated with static properties
          default without a jury of the lawful application of science, & its
          nomenclature Bipartisans want to fine, not regulate or jailtaime
          without bonds as profit net loss of not just private commune but
          public useless price inelasticity of intermediate-supply-demand that
          should be EXCLUSIVELY labor .
          <br />
          supply chain shortages are from charlie dent, david chalion
          <br />
          <br />
          500k (NJ)mail in
          <br />
          How many voted already?
          <br />
          732k - David Wilestein 1/3 of total vote, 2.1m is not the turnout;
          only of each 1/3 Dems, Republicans, non-voters (
          <a
            href="https://nextdoor.com/p/yJhWyXgPTdNG?utm_source=share&extras=Njc0NDU4Nzc%3D"
            style={{ color: "rgb(20,100,200)" }}
          >
            detesting/eligible, like my little brother
          </a>
          )
          <br />
          Particularly small business (trust-building)
          <br />
          Good teachers” Rick Gates on elections
          <br />
          <br />
          “Stop buying from people who hate you,” Charlie Kirk
          <br />
          <br />
          700k+ in the US but age-standardized excess deaths are not 15m excess
          deaths expected from population growth its life expectancy ago GLF
          <br />
          <br />
          <a
            href="https://www.google.com/search?q=gene+%22splicing%22+covid+gordon+chang"
            style={{ color: "rgb(20,100,200)" }}
          >
            paywall Chang
          </a>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              style={{ width: "250px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/9wgqtjnumlvi6qs/Screen%20Shot%202021-11-04%20at%209.15.17%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Your "proof" that virus inceminates cell by lab design apart from
            evolutionary tract, just testing for it and assuming nature didn't
            produce it is BEHIND AFUCKING PAYWALL. you stop saying there is
            proof without presenting it fucking creep
          </div>
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "250px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/lmxowqwaneelv8h/Screen%20Shot%202021-11-02%20at%2012.23.55%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              style={{ width: "350px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/dzkpuyhx9pzgh38/Screen%20Shot%202021-11-02%20at%2012.25.59%20PM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            don't vote new jersey: no-
            <a
              href="https://thumbprint.us/voting"
              style={{ color: "rgb(20,100,200)" }}
            >
              content-addressability
            </a>
            &nbsp;requites certification; it also is to show you have no
            anti-rent-seeking candidate
          </div>
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "250px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/88x4my8d880a938/stamp%20south%20park.gif?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
          </div>
          <br />
          Political science finds exogenous-ideological-duress too
          <br />
          coding is nomenclature
          <br />
          lawful-science is? rhetoric
          <br />
          Marx is pareto efficient, greens and libertarians unite or sswing
          voters stay home, occupy && non-voters have plural-majority ( We don't
          need you)
          <br />
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "250px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/d56ktt0dgcvsutb/Screen%20Shot%202021-11-02%20at%2011.16.00%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <br />
            <br />
            new debt is $32/day/person, 22.5% greater after 3/2020 US Census
            BiPartisan Covid fraud
            <br />
            can't even say 44 years when 4400% checking is bond-value &
            1.1*currencyComponentOfM1/yr = gdp without bonds
          </div>
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "400px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/nfno5l8ro0fqamg/Screen%20Shot%202021-11-02%20at%2011.04.02%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <br />
            "We would love to have more job opportunities, and that's what we
            are going to do on day 1," busy work without consumers is what that
            is, folks
            <br />
            <br />
            Republicans & libertarians don’t want to pay, but they want to keep
            debt
            <br />
            <br />
            Book burners (public) v writers (private), hoarding isn’t efficient
            boy
          </div>
          <br />
          <br />
          Gentrification of they skies!!&nbsp;
          <span role="img" aria-label="heart eyes">
            😍
          </span>
          <br />
          <br />
          <div style={{ width: "400px", height: "min-content" }}>
            <div
              style={{
                position: "absolute",
                zIndex: "1",
                textAlign: "center",
                width: "400px",
                backgroundColor: "rgba(10,10,10,.4)"
              }}
            >
              Voluntary is more random than emulating
            </div>
            <Cable
              onError={handleScollImgError}
              style={{ width: "400px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/y61jqw26a0xqe4j/Screen%20Shot%202021-11-07%20at%208.43.37%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            "We did it in Trump time," since 3/2020 we are still on trump-time
            (brought forward demand 5x $4t/yr)
            <br />
            <br />
            Bernie Sanders is the only Glass Steagall supporter
            <br />
            Healthcare.gov law is not owning healthcare
            <br />
            Insurance pays into non-concurrentable collective bargaining fraud
            <br />
            Brought forward demand tiny communes
          </div>
          <br />
          “CRT is not on the curriculum (VA), but voters still consider this a
          major issue.” Cnn
          <br />
          Monitor & vote (report)
          <br />
          Need another force on the state,” cudgel. Support new business with
          regulation not small business with
          <br />
          <br />
          They don’t care where they get the money from, just want their pension
          now. Children don’t pay, savers get fucked NOW that’s MY BOAT
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "400px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/fo1rlozyknzey11/Screen%20Shot%202021-11-01%20at%206.22.59%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            collective-bargaining fraud
            <br />
            Dynomite! social security! fucking boomers 20x/person
            55+/millennials rental income, we should be tech advance without
            rentier price deflation under hours
            <br />
            <br />
            meals at no extra cost?!? how do you non-expiry rollover meals
            without embezzlement?
          </div>
          <br />
          <div
            style={{
              width: "calc(100% - 46px)",
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/doyv68xypfhxi8g/gristedes.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            “Venezuela, Iran, China are socialist,” John Catsimitidis one day
            later Michael newsbounds. Vote no on socialism, we don’t want to
            change America,” yeah I bet you a grocer don’t want to pay for free
            rider immutable sewage police lawsuits in truncated sales tax, that
            way prisoners don't make money on net loss with bonds, want to keep
            customers alive, conflating justice and
            racketeering/class-action-precedence-malfeasance/trust-building/competing-with-consumers
          </div>
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "400px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/tpigy8s0qe5ynpf/Screen%20Shot%202021-11-02%20at%2011.59.02%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            “Early release cash parole, incarcerated control”
            <br />
            <br />
            Private communes instead of taxed profits is a cop-out of truncated
            sales tax
            <br />
            <br />
            Tho mostly hhs gentrification, White House YouTube approval rating
            is the absolute mirror of down-payments to gdp (1/11)
            <br />
            <br />
            Interviewing and iteration is not reading and following
            <br />
            Let's go brandon, what do you want him to come thru with? you know
            ralph
          </div>
          <br />
          <br />
          Foster care makes money for "the system" because of bonds (profit with
          net loss, lo profit generally is just withheld outlays in private dead
          weight - to boot up field)
          <br />
          <br />
          you don't need insurance, you need the hours or otherwise
          non-concurrentable outlay-schedules they hoard and abett in invoices
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "400px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/rg2hcqxwbxi7d2i/Screen%20Shot%202021-10-31%20at%206.22.48%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            "tax-credits" discrimination before consumers decide what they want
            is as punitive as:
            <br />
            "Own, don't regulate," Joe Biden,
            <br />
            <br />
            If you give us breathing room with more debt, you make the rich rich
            with bonds. poorness=(poverty/equality)
            <br />
            <br />
            we aren't "short workers" for demand, we are short People for
            debt-inflation.
          </div>
          <br />
          It takes 10x more hours than 1970 to own a house outright
          <br />
          <br />
          "Problems with the Supply Chain, workers haven't returned as fast into
          the labor force," are you talking about before 1970?
          <br />
          <br />
          "If you don't want people to buy something, you put a price on it,"
          what the fuck are you smoking, Bill on Cuomo post-G20?
          <br />
          People can decide, even if there were scientific consensus without
          hung-jury (11/12) that it is more than just obliquity as ice cores
          show carbon, not CO2, which may be&nbsp;
          <span
            style={{
              backgroundColor: "rgba(255,220,255,.4)"
            }}
          >
            normal greenhouse
          </span>
          <br />
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "400px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/inh63m0ex72w19p/Screen%20Shot%202021-10-31%20at%203.39.56%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            "why can't we allow expensive things be prohibitory," to which Biden
            replies, "because we need gas, you know that." inflation is from
            debt, mostly private $32/day/person new
          </div>
          <br />
          <div
            style={{
              width: "calc(100% - 46px)",
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/ouygcocw4i5uiwa/Screen%20Shot%202021-11-04%20at%203.34.28%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            “Not a never trumper but a common sense immigration supply chain
            problem laundering borrower loitering customers down payments 1/11
            of GDP. invoices are theft
          </div>
          <br />
          <div style={{ width: "400px" }}>
            <div
              style={{
                position: "absolute",
                zIndex: "1",
                textAlign: "center",
                width: "400px",
                backgroundColor: "rgba(10,10,10,.4)"
              }}
            >
              DEBT KING
            </div>
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={`${
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/flm0pqa0vr34316/debt%20king.jpeg?raw=1"
              }`}
            />
          </div>
          <br />
          Mark Levin's fill in literally says, "pass an agenda rather than win."
          Are you saying there is a bona fides that prevents you from "winning"
          by competing with consumers. rot in hell rich zeoli you
          private-market-communist. outlay corporate profits today you fuckinh
          retard. hours worked is the opposite of productivity retard
          <span style={{ backgroundColor: "brown", color: "black" }}>
            Democrats, Republicans, Peoples, Greens & Libertarians call this a
            "massive labor shortage"
          </span>
          <br />
          <a href="https://micro-theory.com">5-6m out of work people</a>, that
          is out of 170m people, half of the 6m is 65+.
          <h3>
            <a href="https://fred.stlouisfed.org/graph/HRsT">
              let people retire, douches
            </a>
          </h3>
          {/*<Cable
          style={{ height: "760px", width: "100%" }}
          onError={handleScollImgError}
          src={
            this.state.nofredgraphs
              ? ""
              : "https://fred.stlouisfed.org/graph/graph-landing.php?g=HRsT&width=500&height=660"
          }
          float="left"
          title="price inflation never by population except when dead weight by public or private"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />*/}
          {/*
            width && <Population width={Math.min(600, width - 100)} /> //HRsT
            */}
          <br />
          <br />
          "substitution of coal, what we will bring to the G20, proofin the
          pudding will be in the media, we will see what will be done, china is
          considered."
          <br />
          <br />
          "highways, roads, bridges public transport ecetera," all price-elastic
          <br />
          <br />
          glass ceiling
          <br />
          medicine monopsony for useless r&d trust-building with pharma cops
          closed-source-licensure
          <br />
          <span
            style={{
              backgroundColor: "rgb(180,255,220)",
              color: "black"
            }}
          >
            protection ov a vaccine
          </span>
          :&nbsp;
          <a
            href="https://teapharmacy.party"
            style={{ color: "rgb(20,100,200)" }}
          >
            fraud
          </a>
          "help the american worker, good jobs, good pay," how is that when
          productivity-to-retire is price-deflation over hours? you just want to
          gentrify
          <br />
          doesn't want to open-source-license, but fine & monopsonize
          supply-demand intermediate chain
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{
                width: "400px"
              }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/feblr7vblfcwsff/Screen%20Shot%202021-10-31%20at%203.28.32%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            in the polling-world, we say voluntary is more random than random
            <br />
            I think he laughed at the numbers here, too
            <br />
            “[Dispell the notion, ]can’t grow the economy, support our workers,
            and fight climate at the same time,”
          </div>
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{
                width: "400px"
              }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/x951muio7qcmmkh/Screen%20Shot%202021-10-31%20at%203.23.06%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Unlock all posibilities [of precedence but not third party
            beneficiary law of most-of-gdp mortgages 11x down-payments
            currencyComponentOfM1] they have to all corners of their community.
            We all deserve a thriving..." community would be where labor is not
            gentrified with dead-weight-rentier of the government, fair housing
            is not profiting off of anothers' labor. I come from families of
            builders, and we want to settle, YOU WANT TO GENTRIFY
            slavery-by-collateral proxy
          </div>
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{
                width: "400px"
              }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/6v02a1tdty0ug3i/Screen%20Shot%202021-10-31%20at%203.22.48%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            On contract-non-compete is not a guide, open-source is... Joy
            Beyheart&nbsp;
            <a href="https://carducci.us" style={{ color: "rgb(20,100,200)" }}>
              ■-■¬(≖_≖ )
            </a>
          </div>
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{
                width: "400px"
              }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/7rde9rh0kamctv3/Screen%20Shot%202021-10-31%20at%202.37.02%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            "1.4% since trump was president,&nbsp;
            <a
              href="https://billbiden.org"
              style={{ color: "rgb(20,100,200)" }}
            >
              now 4%
            </a>
            &nbsp;since then," it matches what MARKET-communist that
            Maoist-Trump started. comparative advantage is lost for foreign tax,
            trust building for bond-laundering-enslaved SAVERS share-split and
            not debt-bound-inelasticity (not bond-inelasticity) NOT "child paid
            tax payer [vacations]. “1970’s socialist failure,” Benny reports.
          </div>
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{
                width: "400px"
              }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/8pkfijqsis35hoz/Screen%20Shot%202021-10-31%20at%203.17.45%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
          </div>
          <br />
          <a href="https://billbiden.org" style={{ color: "rgb(20,100,200)" }}>
            billbiden.org
          </a>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/arjyhpkgc1pevun/Screen%20Shot%202021-10-31%20at%202.36.54%20PM.png?raw=1"
              }
              float={null}
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/i75otmhvja66uju/Screen%20Shot%202021-10-31%20at%202.36.26%20PM.png?raw=1"
              }
              float={null}
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
          </div>
          <br />
          <br />
          Didn’t I just dispel this two hours ago? Collapsing economy = jobs?
          <br />
          <br />
          "I don’t want to malign him but he was questionably a 'Nazi,'” well
          that’s nice you fucking faggot&nbsp;
          <a href="https://www.news-medical.net/news/2006/10/23/1500-animal-species-practice-homosexuality.aspx">
            <span aria-label="cig" role="img">
              🚬
            </span>
          </a>
          &nbsp;practice implies it is an evolutionary-trait
          <br />
          <br />
          “Irresistible force is the progressive spending,” Dick Morris couldn’t
          be more wrong about public opinion
          <br />
          <br />
          “Infrastructure is important to our district, but most is debt
          service, reverse debt:cash*income & outlay corporate profits today
          <br />
          <iframe
            style={{ width: "90%", border: 0 }}
            src="https://www.youtube.com/embed/nKvUf7F4Xn4"
            title="YouTube video player"
          ></iframe>
          <br />
          Communism by Marx's description, was for regulating finite producers’
          for insteace moving with hung-jury-permits, is to protect consumers,
          market-communism is the opposite of what he preached to give labor the
          profits of the private commune-corporations.&nbsp;
          <a href="https://lightte.ch" style={{ color: "rgb(20,100,200)" }}>
            501c3
          </a>
          &nbsp;otherwise&nbsp;
          <a href="https://vaults.biz" style={{ color: "rgb(20,100,200)" }}>
            dissolves
          </a>
          &nbsp;to the state, they aren’t really non-profit & those tax payer
          money aren’t paid by children but by savers now in debt inelasticity,
          brought forward demand, and later in dollar share split, federal land
          being 20% of the U.S. borders and the collateral of the dollar. Only
          article 4 truncated sales tax for free rider mutable sewage police
          lawsuits (not roadways and their egregious debt service) without
          hung-jury-permits but scientific consensus is legal
          <br />
          <br />
          stealing, chores is faster, and has led to wealth iniquality and
          everything the wealthy have, but primarily it is the problem by
          indiscriminate slavery-by-collateral proxy of collective bargaining
          fraud of non-concurrentable hours & outlays, accrual & implausible
          landlord use gentrification.
          <br />
          <br />
          Are you going to say that is marxist to have uncensored public
          schools? If Marx was in charge there wouldn’t be public truancy, only
          private customers having&nbsp;
          <span
            style={{
              backgroundColor: "white",
              color: "black"
            }}
          >
            their means to choose
          </span>
          <br />
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "300px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/cufwopycj55z9bp/Screen%20Shot%202021-10-31%20at%204.39.58%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            “FDR didn’t allow German-Jewish immigrants in up to the publicized
            quota,” he was wrong to assume job-shortage wouldn’t be met with
            more customers and retirement, lest New Deal bailout. labor-prices
            are elastic, as well as consumer proportionately, again, without
            dead-weight-rentier of any form (accrual, collective-bargain
            non-concurrentable fraud, closed-source-secret-ingredient-licenses,
            or rent-beyond-plausible-use)
            <br />
            Rafael Medoff: "FDR once said, 'Jews are a
            potentially-dangerous-influence in the society'"
            <br />
            <br />
            You have no proof the virus is the cause of infection instead of the
            byproduct. Illness happens when antibodies go to clean up
            <br />
            <br />
            In what world is socialism gentrification?
            <br />
            <br />
            Snapshot not order of electron microscope, but bacteria has been
            proven to make virus with cell
          </div>
          <br />
          <br />
          <br />
          <br />A resurgence of covid tests, or positivity as tests are lessened
          for greater symptoms,” as people have are vaccinated, they don’t test
          them for covid, and if they have symptoms without covid, they don’t
          consider that’s the cause of infection is bacteria, and illness is
          virus of any kind, that antibodies clean up. Never has virus been
          shown to enter dna into cell except in a cartoon Mario Incanomo
          <br />
          <br />
          Dead-wight-rentier of supply and demand with only labor, profits
          should be margin targeted for finite producers cannot be assumed to
          self-regulate like infinite producers can, and outlaid to labor. Tax
          cuts only help labor if there is no private-commune profit, as profit
          is net loss of individual labor savings
          <br />
          <br />
          By the time an award is given for breaking spells, the information is
          already no longer spell-breaking and known. Qualify my ass
          <br />
          I’m made fun of because you’re a follower and cannot have an original
          thought?
          <br />
          <br />
          Hired by ppp trust-building,&nbsp;
          <span
            style={{
              backgroundColor: "rgba(255,220,255,.4)"
            }}
          >
            sacrifice your fruits of labor for working the weekend
          </span>
          . old people had their entire lives to save, but took a chance on
          government debt, except
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/7kna7kxss5vxx96/SocialSecurityWarning.jpeg?raw=1"
              }
              float="left"
              title="imprisonment or insurmountable fine if you do not invest in public companies and keep down payments of your borrowers' customers' after reposession"
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Costing $140m 5k immigrants in NYC, Wabc counts debt service but
            expenses are 50% new debt, and says tax payer money. That’s the
            definition of money laundering. to boot, more people alone doesn't
            cost anything, it is subsidies.
            <br />
            <br />
            If you want anyone to do the job, judge Janine, nobody shouldn’t be
            able to say discrimination if there is another disqualifier. Only
            labor and consumers can discriminate without comment. Employers
            cannot discriminate without comment, else ageism can be
            implied/deduced both ways
            <br />
            Advertising can discriminate for ideas, unless proven false (11/12
            jury), platforms can only if they pay writers
            <br />
            <br />
            Rudy can give it but not take it You can call people
            mentally-capacitated for being homeless while it takes ten more
            hours to own a median home since 1970 but I can't call you this?
            grow up:
          </div>
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/8hyos5mzsirffep/Screen%20Shot%202021-10-31%20at%2011.27.07%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            The following comment is removed by the colluders
            <br />
            <br />
            <span style={{ backgroundColor: "rgba(220,255,255,.4)" }}>
              double people work today than 1970 per capita, and employment is
              back to normal, just look at saverparty .xyz for the data not the
              lies spewed by this grocer in wabc's owner. continuing claims are
              normal 2.8m, mostly retirees too. ppp was trust-building by the
              right...
              <br />
              <br />
              Keep talking about Marx like this I will sue. Gentrification is
              not socialism. He wrote of Odessa. My family moved 1850 instead of
              being near pogroms over the credit cycle, keeping down payments
              upon LOSING repo. Reverse debt:cash*income is the only way out. If
              what world does that mean public education, except to regulate
              finite producers than cannot themselves. To Marx, discussion is
              means of labor, too, not to be wielded by the state,
              dead-weight-rentier, public nor private.
              <br />
              <br />
              People on the right and top left think it is ok to hoard hours of
              doctors and childcare. It's gentrification, not socialism. You're
              delusional
              <br />
              <br />
              It is retardation to think although NJ has a lot of old people,
              per capita deaths is skewed like age-standardized when not
              accounting for cohort-size. what does that make you?"
            </span>
          </div>
          <br />
          How is Marx "I don't think parent's should choose what they teach."
          Where do you get that from labor should have means instead of the
          credit cycle Pretty sure having school trade-secrets instead of
          allowing kids to decide is market-communism, not the finite producer
          pro-test reasoning for regulations beyond the “free market” of
          accrual, closed-source-ingredient-licenses & collective bargaining
          fraud in insurance over hours and outlays non-concurrentable nor
          rollover. People on the right and top left think it is ok to hoard
          hours of doctors and childcare. It’s gentrification, not socialism
          <br />
          <br />
          Rudy, Giuliani you fucking retard, NJ has a lot of old people, per
          capita deaths is skewed like age-standardized when not accounting for
          cohort
          <br />
          <br />
          Family leave: Trust building parents. Why not end finance instead?
          Then we can take time off, care for our own. Making a careperson
          instead of two vocations
          <br />
          <br />
          quality is not gained by government gentrification, prices are
          elastic.
          <br />
          <br />
          “Every year Americans waste $21m on car insurance [relative to
          average, from zebra],” does not count inflation from
          non-concurrentable invoices/hours of insurance collective bargain
          fraud
          <br />
          <br />
          Every consumer is a laborer unless they are? A dead-weight-rentier
          <br />
          Profits taxed cost the consumer unless the corporation keeps it
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/u3myomhs7j8igps/Screen%20Shot%202021-10-30%20at%205.57.26%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            "Dwindling retirement (bonds) and call you a conspiracy theorist to
            want a strong dollar," are oxymorons you fucking retard tool
            jiggering loose consumer/saver money for the
            corporate-profit-plantation
            <br />
            20% of all land in U.S. borders are federally owned, that is what
            backs the dollar, not the bonds. the bonds have no claim, based on
            their delusions and greed called, "brought forward demand"
            <br />
            <br />
            rot in political hell joe pinion
          </div>
          <br />
          "Yunkin wants to defund public schools (trade-secrets), defund working
          families (trust-building), ...parents shouldn't decide what goes in
          schools, "
          <span style={{ backgroundColor: "white", color: "black" }}>
            only scientific-consensus can desist or convict
          </span>
          <br />
          <br />
          <iframe
            style={{ width: "100%" }}
            src="https://www.youtube.com/embed/NBTw_p-WChI"
            title="YouTube video player"
          ></iframe>
          <br />
          <br />
          "Many New York police officers have worked through the pandemic and
          brought it home to their families." you fucking retards, the&nbsp;
          <a
            href="https://www.science.org/doi/10.1126/science.aat9691"
            style={{ color: "rgb(20,100,200)" }}
          >
            bacteria is in your house
          </a>
          <br />
          <br />
          "healthcare, childcare is more affordable," Murphy lies about net loss
          of greater premium for medical-suppliers for collective bargining
          fraud of non-concurrentable scheduled-hours of care for lower co-pay,
          making people rich by not forcing them to settle. invoices are theft
          don't need to launder profits to government and launder profits
          <br />
          <br />
          “Women’s healthcare is not front-running abortion docs,” it is
          invoices are theft & insurance is fraud of collective bargaining at
          best, gentrification and colonialism, human rights issue at worst it
          &nbsp;
          <span
            style={{
              textDecoration: "strike-through"
            }}
          >
            is mandatory pregnancy testing
          </span>
          <br />
          <br />
          Your office just gave me disability for saying, “invoices are theft,”
          and withheld me from jury duty for the very same! Absolutely
          retardation of lawfully application of science without
          hung-jury-conviction/-permit (11/12)
          <br />
          <div style={{ height: "min-content" }}>
            <a href="https://truncatedsalestax.com">
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/g6q30mahdybbhea/murphy%20mind.gif?raw=1"
                }
                float="left"
                title=""
                scrolling={this.props.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
                scrollTop={this.props.scrollTop}
              />
            </a>
          </div>
          <br />
          <br />
          "I don't want to be diplomatic, don't trust the&nbsp;
          <a
            href="https://thumbprint.us/privacy"
            style={{ color: "rgb(20,100,200)" }}
          >
            mail-in-ballots
          </a>
          &nbsp;in New Jersey," David Wilestein of NJ
          <br />
          <br />
          How do you get 10% of assembly before having anyone there?&nbsp;
          <span style={{ backgroundColor: "rgba(255,220,255,.4)" }}>
            Can I turn a sitting-seat without running them as petitioning
            independent? Only sitting parties, right
          </span>
          . May I ask why? quite absurd to trust-build
          ideolgical-duress-coalitions, burdgeoning those tradeoffs for max 10
          parties impossibly
          <br />
          <br />
          To get vaxxed or get axed," GOP say nothing against virus as national
          security issue nor 11/12 jury-requirement to permit in mvp duress so
          as to not involuntarily serve the contributions of the discriminated
          <br />
          <br />
          Roads tunnels and bridges aren't free rider immutable, GOP &
          Libertarian would rather monopsonize and increase margins than
          regulate (by jury-quota, not government-laundered-profit) and target
          margins
          <br />
          Nobody voting in Congress to reappropriate the means of laborers is
          socialist
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/c9qkyz0y85uifbi/Screen%20Shot%202021-10-30%20at%201.21.45%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            stfu clay, by split-share accrual, stop calling it a social program,
            call it gentrification, trust-building
            <br />
            <span style={{ backgroundColor: "rgba(255,220,255,.4)" }}>
              consumers should pay for free rider immutable things
            </span>
            :&nbsp;
            <a
              href="https://truncatedsalestax.com"
              style={{ color: "rgb(20,100,200)" }}
            >
              truncatedsalestax
            </a>
            ,&nbsp;
            <span style={{ backgroundColor: "rgba(255,220,255,.4)" }}>
              business waits for consumers in an industry-type
            </span>
            : royalty with max profit,
          </div>
          <br />
          WABC ARE FULL OF COMMUNISTS gentrifying If people want to buy energy
          grid, they will. government doesn't need to own it, they can
          target-margin-networks
          <br />
          <br />
          Profits are net loss of individual labor savings, bond profit or
          corporate bid-capacity, such is market-communism other than communism
          for regulating finite producer-reality, as marx purported to be
          maintained per laborer in their non-gentrified/-monopsonied means
          <br />
          <br />
          Kudlow: "Rates would be 3%," it would be impossible, there is only
          $2-6t currencyComponentOfM1. $4t/yr fed spend is 50% new debt for
          $32/day/person mostly private to match, 10% debt-service public, up
          to&nbsp;
          <a
            href="https://www.njta.com/media/5688/financial-summary-through-september-2020.pdf"
            style={{ color: "rgb(20,100,200)" }}
          >
            40% in NJ Bipartisanship, Libertarian neglect
          </a>
          <br />
          <br />
          Pro-growth of hours and real wages of goods-inflation discounting
          home-prices? that's most of GDP and accrual 11x down!
          <br />
          <br />
          Pro-self-harm more like it
          <br />
          <br />
          "forward vs backwards, I'd say that's the choice here," Phil Murphy
          <br />
          <br />
          Adv Solar Engy: “Save enough to pay for college, make tuition on
          choosing another timeline.” Deficit concurrent isn’t paid-for, that is
          laundering like children but savers paying now in debt-inelasticity of
          withdrawn value, not settled price, tax payer vacation
          <br />
          <br />
          Payne Capital Management: "Who decides the value, is it what the
          government says vs what you say, it's so ridiculous," money managers
          literally describing fraud after Kudlow. Then Stephen Moore describes
          profits in this economy, success, while I&nbsp;
          <a href="https://thumbprint.us" style={{ color: "rgb(20,100,200)" }}>
            boycott credit as income
          </a>
          &nbsp;in competition with Ticketmaster. The shill son follows trying
          to save face, "we need to pay back at some point," while withdrawing
          against the appraised "value" not bid-price settled, just like
          rebating capital losses to cancel out, as a market does. there is
          always someone on the other side of the trade/ the only growth of the
          zero-sum-pie beyond labor-price-elasticity is comparative advantage.
          <br />
          <br />
          People are price-elastic, too. gdp/p amidst 3% population growth
          before 1913 was nearly flat year-to-year. So, real wages is attainment
          of something other than productivity or
          technolocial-advancement-measure in time-series regressions
          <br />
          <br />
          America first tax for production offshore is not abiding to
          comparative advantage, a microeconomic claim
          <br />
          <br />
          Your "
          <a
            href="https://bankingisnot.biz"
            style={{ color: "rgb(20,100,200)" }}
          >
            business
          </a>
          " is not&nbsp;
          <a href="https://froth.app" style={{ color: "rgb(20,100,200)" }}>
            hung-jury-permitted
          </a>
          <br />
          <br />I did the research. not-voting should at least be a no in power
          to advocate for more intrusion beyond finite producer
          fiscal/open-source/collective-bargaining-fraud regulations, jury
          requires 11/12 scientific consensus for duress within minimal viable
          product requited, lo I went with current candidates knowing 38% of NJ
          are detesting and eligible voters for Occupy/Savers and libertarians
          just need to understand that private industry can create
          "dead-weight-rentier" in supply and demand, too. MELE SOLOMENO
          SCHARFENBERGER FRIEDMAN RAISCH BESON COLE TROMBINO (MCCABE HALCROW
          BRUNO BADE PAGANO) 2021 Nov 2
          <br />
          <br />
          Profit tax instead of margin target/ tax after bond reverse debt:cash
          (green new deal), but just outlay to individuals, write your own
          contracts instead of public & pay half - as of now. Ween cops off
          bonds with truncated sales tax for article 4 free rider immutable
          sewage police lawsuits. 3under2.us. Cap rent at 5 units or 30 days for
          implausible landlord use. 30under5.us. Ban insurance collective
          bargaining abetting invoices (Medicare for all) &
          non-concurrentable/non/rollover schedules of outlays & hours. In
          regulation for finite producer reality of price-finding over “value”
          by appraisal, we call that competing with consumers, prohibiting
          trade, not of a Tranquil society as promised in the preamble with so
          many purposeful-impossibilities by mostly private contracts,
          $32/day/person new debt for useless price inelasticity.
          <br />
          <br />
          "-2% gdp less rich, well off," isn't measuring hours on that trade
          which should be lessening when you look at the average instead like a
          ratio-in-a-time-series. The rich take all the fruits of tech
          advancement with rentier, not inheritance/gifts/disposable
          wealth/savings of labor without dead weight of supply and demand of
          other labor. If you need a reason, look at&nbsp;
          <a
            href="https://micro-theory.com"
            style={{ color: "rgb(20,100,200)" }}
          >
            comparative advantage
          </a>
          <br />
          <br />
          Disqualifying injury because I do physical therapy with no
          improvement, just&nbsp;
          <a
            href="https://www.researchgate.net/publication/43297722_Repair_of_Traumatic_Skeletal_Muscle_Injury_with_Bone-Marrow-Derived_Mesenchymal_Stem_Cells_Seeded_on_Extracellular_Matrix"
            style={{ color: "rgb(20,100,200)" }}
          >
            sustaining the alive muscle
          </a>
          <br />
          <br />
          G-ddamn, dude. write your own proprietorship-contracts, pay half as to
          individualize profits?&nbsp;
          <a href="https://lightte.ch" style={{ color: "rgb(20,100,200)" }}>
            501c3
          </a>
          &nbsp;otherwise&nbsp;
          <a href="https://vaults.biz" style={{ color: "rgb(20,100,200)" }}>
            dissolved
          </a>
          &nbsp;to
          <div style={{ height: "min-content" }}>
            <a href="https://billbiden.org">
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/wiz85clgvr3jxdg/China%20trump.gif?raw=1"
                }
                float="left"
                title=""
                scrolling={this.props.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
                scrollTop={this.props.scrollTop}
              />
            </a>
          </div>
          <br />
          11m illegals estimated in addition to 330m.. aren’t you blowing things
          out of proportion? Debt is more harmful to your savings than that.
          More people makes as much competition for work as consumption lowering
          the costs of both equally, if there is no dead-weight-rentier in
          accrual, insurance collective bargaining fraud nor implausible use
          landlords
          <br />
          <br />
          Redistribution of labor means is the least socialist thing to do,
          unless you are attaining&nbsp;
          <a
            href="https://perfectsociety.co"
            style={{ color: "rgb(20,100,200)" }}
          >
            Saver bliss
          </a>
          , amortization of reimbursement of down payments upon repo
          <br />
          <br />
          "Profits are the mothers milk of stocks [admitting collusion]and the
          lifeblood of the economy [keeps people in busywork
          rentier-laundering],” Larry Kudlow
          <br />
          <br />
          politics is the lawful application of science, where nomenclature is
          paramountally-integral to the scientific method, without
          industrial-bias
          <br />
          <br />
          Would you interview bankers about banking regulations and
          collective-bargaining claims in non-rollover/non-concurrentable&nbsp;
          <span style={{ backgroundColor: "rgba(205,225,255,.4)" }}>
            expiring gift cards
          </span>
          ?
          <br />
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/i9qpspzi3w5vtdf/Screen%20Shot%202021-10-30%20at%2010.14.19%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Democrat flaunting higher stock prices and trust-building
            ppp/childcare/parental-leave gerontocracy & hours instead of
            retirement targeting
          </div>
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/7b3e5wzfn29q8n0/Screen%20Shot%202021-10-30%20at%209.47.58%20AM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Curtis says the mentally disturbed, bo follows with fiscal insanity…
            that is the byproduct, not the cause of implausible landlord use and
            other competing with consumer methods
            <br />
            <br />
            not-voting is AT LEAST a blank write-in
            <br />
            <br />
            GOP talk about infrastructure instead of social programs for
            gentrification, which isn't socialism that is being good stewards of
            labors' means (not moving it) but gentrification as well
            <br />
            <br />
            Valueless dollars and growth is an oxymoron of bona fides
          </div>
          <br />
          bo snerdley you fat jackass, wants to "give people mental help," what
          about price-elasticity? that isn't free rider immutable nor makes any
          sense, forced "care" is&nbsp;
          <a
            href="https://truncatedsalestax.com"
            style={{ color: "rgb(20,100,200)" }}
          >
            absolutely crazy
          </a>
          <br />
          <br />
          You’re saying I’m disabled because i know retail traders do not have
          their trades hidden in tranches & am irritable about being called
          schizophrenic? It’s based on the opinions of people that I am fighting
          the legality of their income. Your jury system discounts anyone who
          thinks the same that invoices are theft and insurance is fraud as
          well. I was assessed as bizarre after saying that
          <br />
          <br />
          sign a long-term contract for your copyrights you sellout, can't
          handle it on your own?
          <br />
          <br />
          Chief retard
          <br />
          recession based on two months of gdp decrease when population is
          integral and hours is additive is not productive, but retarded.
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/g18t4usgx0lk0mb/Screen%20Shot%202021-10-29%20at%2010.10.55%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            indicator or smoking gun of crime
            <br />
            "A big indicator of economics is the bond market, and the 20yr
            paying more than 30 yr means coming recession," as opposed to
            showing abject money laundering and writing down what cannot be
            fulfilled but priced-in partially to keep the fraud of consent up.
            <br />
            <br />
            rot in hell usurer
          </div>
          <br />
          <div style={{ height: "min-content" }}>
            <a href="https://journals.openedition.org/monderusse/9324#:~:text=As%20in%20other%20East">
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/jk1hs5euciilzga/Screen%20Shot%202021-10-29%20at%209.52.51%20PM.png?raw=1"
                }
                float="left"
                title=""
                scrolling={this.props.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
                scrollTop={this.props.scrollTop}
              />
            </a>
            your charity is useless as prices are elastic
            <br />
            Trust-building gerontocracy
            <br />
            They had their whole lives to save
            <br />
            "Some people need help, 100m's... I want elderly, ill, don't have
            much assets, government should help, and you can work OR your an
            addict I don't want to hire you nor give welfare on that basis,
            35-males, lucky I don't get knifed, go wash dishes for a free meal,"
            yet launders money from borrowers' customers and collude on third
            party beneficiary usurped. It's impossible to not end in this
            situation with such stupid economic policies of old people, 25-54/3
            1970 6m/20m unemployed, today 6m/40m
            <br />
            <br />
            You say my disability started Oct 2017 (knee-injury from a
            guard-rail next to your running-trail, pain wasn't analyzed, nor
            hospital muscular stiching before 2-year-long appeal) but mental
            diagnosis, being conflict of interest based on calling rollover
            insurance, “bizarre and the presumption of guilt without evidence,
            nor ability to sustain ourselves when it takes 10x more hours to own
            a median home than 1970 because of idiot old-people
          </div>
          <br />
          Jesus never said money-changers can merely repent
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/vbn55ky4hn6sy9t/Screen%20Shot%202021-10-29%20at%209.25.36%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Prostitution is a reverse divorce and marriage is nothing more than
            a monetary exchange. Abortion is murder but when you support rentier
            beyond plausible use&nbsp;
            <a
              href="https://www.guttmacher.org/gpr/2019/09/us-abortion-rate-continues-drop-once-again-state-abortion-restrictions-are-not-main"
              style={{ color: "rgb(20,100,200)" }}
            >
              what do you expect
            </a>
            , mandatory testing or jailtime?
          </div>
          <br />
          Steve Cortez rejects sin but forgives it. the only sin is
          money-changing, not adultery you fucking prude
          <br />
          <br />
          follow others why don't you, pig
          <br />
          crimes are crimes, insanity is not viable plea,&nbsp;
          <span style={{ backgroundColor: "white", color: "black" }}>
            irritability is not a disability
          </span>
          , it's a rational human reaction
          <br />
          <br />
          State-funded-prosecution-team Says Media Does Not Present Evidence,
          permittable-without-trial for cause in production
          <br />
          Anti-debt not allowed to own guns in nj
          <br />
          Allow viewers of news to be jurors
          <br />
          Not every argument will be examined because of sequestration threat by
          the judge
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/vgx4xdrkedjl4w1/Screen%20Shot%202021-11-01%20at%206.25.21%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/nf5t7r92aygp79o/Screen%20Shot%202021-11-01%20at%206.25.45%20PM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            no one wants to do jury duty; only reason-cause to dismiss should
            be&nbsp;
            <span style={{ backgroundColor: "rgba(255,220,255,.4)" }}>
              industry-precedence-interests & neglect-of-intent
            </span>
            <br />
            Castle doctrine for shared streets == closed carry only
            <br />
            You aren’t guilty if you follow precedence or law, even if they
            countervail
            <br />
            Any with opinions on it dismissed for reasonable cause, but also
            seek jurors to know.
            <br />
            Judge already examined the evidence!
            <br />
            Jurors aren’t allowed to think about the issue prior to this point
            in time, but have to be experts. Anyone with
            industry-precedence-interests are allowed to remain on jury between
            the racketeer and the defense, peoples’ representation, absent
            <br />
            Comparative law ( and accrual jury, hypocrisy of gun reason for
            cause
          </div>
          <br />
          you can willfully break the law if there is a countervailing law or
          law is based on illegal
          <br />
          <br />
          “Marxist Black Lives Matter says to sanction any violence,” says Bill
          O’Reilly after I say to arm the children against gerontocracy in Daily
          Wire chat over Kyle Rittenhouse class precedence malfeasance. These
          are real lawyers with real jobs”
          <br />
          <br />
          Republican: "Money makes tuition affordable for those struggling," no,
          the university would have to lower price or release the trade secrets
          to survive, allowing the student to find the information for fucking
          free. You can better donate to Loyolanyc.org by forcing their
          information online
          <br />
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://drive.google.com/file/d/1csslueZ68OUPqFZGbgzfPbLqJI_U7iLF/preview"
              }
              float="right"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            “These are real people with real jobs,” about G-d knows what,
            probably rent-seeking broadband & R&D market-communism, 11/1
            debt:down-payments is a loitering-borrower, not a customer
            <br />
            derelect addicted abusive," prejudice about what is an addiction,
            like your&nbsp;
            <a
              href="https://teapharmacy.party"
              style={{ color: "rgb(20,100,200)" }}
            >
              expiring premium pharma cop fda craft beer sanctioned
              concentration pills
            </a>
            <br />
            <br />
            millennials have more responsibility, being&nbsp;
            <a
              href="https://fred.stlouisfed.org/graph/?g=FSwQ"
              style={{ color: "rgb(20,100,200)" }}
            >
              -20x/person millennials/55+ rental-income recklessl
            </a>
            <br />
            <h2>castle doctrine is for benefit of the doubt</h2>
            Killing a 3-time rapist might be of comparative law per your own or
            anothers’ livelihood over physical or login.gov malfeasance ,” says
            Kenosha Wisconsin state-prosecution blaming Kyle for carry without
            luggage and net loss profit by bonds 40% debt spend and 10-40% bond
            laundering (debt-service)
          </div>
          <br />
          <h2>
            why is skateboarder not provided-charges for jury? incarceration is
            profits by bonds. all courts are removable "for cause" of having
            industry-interest & history of intent-prejudice for opninions on
            countervailing laws and illegal-precendence.
          </h2>
          gun-rights laws are illegal, like plea-deal-perjuries are moot
          <div>
            left:Kyle was asked for mercy, right: only after having another gun
            pointed at him, squirrel: everyone should use luggage
          </div>
          <h2>
            Malfeasance makes castle doctrine plausible-intent for recovery
            viable
            <br />
            It is his place of work/livelihood{" "}
          </h2>
          kyle played cop, but the prosecuting-state-bound-experts-racketeering
          vs kyle, not precedence for the people
          (not-wreckless-threat-comparative-law in
          open-carry-law-and-precedence), yet mostly hhs gentrification;
          exhibitory-evidence is White House YouTube approval rating is the
          absolute mirror of down-payments to gdp (1/11)
          <br />
          <br />
          Cops can only brandish arsonists and you can fight if the building is
          empty, or if they want to harm the cop or victims if interfere
          otherwise, of course. cops need to be paid by truncated sales tax, not
          net loss on incarceration thru bonds-abetting
          <br />
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/vn8z86hh1iv1yez/Screen%20Shot%202021-10-30%20at%208.13.48%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            “Millionaire pay fair share and take a break workers
            <br />
            Protect women’s health, more available and more affordable,
            childcare affordable, expanding paid family leave and childcare more
            than anywhere in America. Creating clean energy economy with good
            job, recover from awful scourge by following science, and helping
            small business get back up on their feet.”
          </div>
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/llygt1c875758o1/Screen%20Shot%202021-11-03%20at%2010.40.19%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Republicans can’t decide between a "
            <a href="https://login.gov" style={{ color: "rgb(20,100,200)" }}>
              thorough vetting process
            </a>
            " and only taking people with "threats" against their lives
            <br />
            <br />
            People think they are more important than they actually are, that's
            why we started free space, to show that people are crap," stfu
            <br />
            <br />
            literally said "rollover insurance," is a bizarre policy
            <br />
            as they profit off of non-concurrentable collective bargaining fraud
            <br />
            Probably out for my copyright at thumbprint.us et al
            <br />
            calling any detestation of the status quo, schizoaffective, when I
            found out that the stock market does not anonymize your trades when
            tranching them for no utilitarian-reason necessary except to
            troucnce competition when they are consumers as opposed to "playing
            the ball" in production
          </div>
          <br />
          <a
            href="https://truncatedsalestax.com"
            style={{ color: "rgb(20,100,200)" }}
          >
            useless douche-bag-yeast-cleaners
          </a>
          , slanderous with conviction-desistable of without proof than
          subjective opinion, not persuasive and bizarre, conflict of interest
          borne too - by administration that excludes tort-reformers from jury
          for abject and open trust building
          <br />
          in the retarded United States, where it takes 10x more hours to own a
          home outright than in 1970, and the GOP blames this on oil rather than
          private debt primarily, think irritability with the stats quo is a
          mental disorder
          <br />
          <br />
          Mark Levin always detests marxists and then advertises a collective
          bargaining fraud that expires (monthly, unsettled)
          <br />
          <br />
          Blowing up buildings, self-proclaimed marxists," marx would never do
          that you fucking idiot, that is another laborers' means not usurped by
          MOSTLY private "industry" of brought forward demand/competing with
          consumers in all forms loitering, accrual and fraud and trade-secrets
          <br />
          <br />
          George P. Bush: "We could use the $1b to illegals to remove them[,
          like hitmen],"
          <br />
          <br />
          <a href="https://billbiden.org" style={{ color: "rgb(20,100,200)" }}>
            Biden CAN['t]
          </a>
          &nbsp;use the executive pen," to reappropriate funds, if not everyone
          voted
          <br />
          <br />
          Bottom left is calling out the dead-weight-rentier, not sure if you
          mean top left? Occupy will never not anti-rent-seeker, we have plural
          majority in every place in the world
          <br />
          <br />
          Not bottom left, at least third party beneficiary, implausible
          landlord use & non-concurrentable collective bargaining fraud
          <br />
          <br />
          No one represents occupy: reverse don’t cancel nor bailout nor
          gentrify by public nor private, open-source everything. Not voting is
          a vote for that
          <br />
          <br />
          38% of nj don’t vote because there isn’t an anti-rent-seeking nor
          bailout/cancel candidate (reverse/occupy/Saver)
          <br />
          <br />
          menendez&nbsp;
          <a href="https://carducci.us" style={{ color: "rgb(20,100,200)" }}>
            ■-■¬(≖_≖ )
          </a>
          <br />
          <br />
          Tos yes is moot if duress beyond mvp decided by without
          hung-jury-permits and of without surrendering third party beneficiary
          as with fraud of collective-bargaining, fda-secret-ingredients, nor in
          accrual of that very collateral, ….unsettled and all that entails….
          <br />
          <br />
          disabilities not for deaf-people
          <a
            href="https://teapharmacy.party"
            style={{ color: "rgb(20,100,200)" }}
          >
            They don't give over the counter
          </a>
          &nbsp;to near-sighted people like you
          <div
            style={{
              maxWidth: "100%",
              width: "600px",
              display: "flex",
              flexWrap: "wrap"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/h1xmimv6k58zwke/IMG_2265.PNG?raw=1"
              }
              float={null}
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <div style={{ width: "200px", justifyContent: "column" }}>
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/6fqa08lrp1rpagq/IMG_2575.jpeg?raw=1"
                }
                float={null}
                title=""
                scrolling={this.props.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
                scrollTop={this.props.scrollTop}
              />
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/237l11jixc8e38s/Screen%20Shot%202021-10-29%20at%203.17.55%20PM.png?raw=1"
                }
                float={null}
                title=""
                scrolling={this.props.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
                scrollTop={this.props.scrollTop}
              />
            </div>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/xd20k4x7nql0q8w/coughs%20and%20sneezes.jpeg?raw=1"
              }
              float={null}
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
          </div>
          <div style={{ height: "min-content" }}>
            <a href="https://en.wikipedia.org/wiki/Base_rate_fallacy">
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/5ipsfibplwlj5sk/Screen%20Shot%202021-10-29%20at%202.05.59%20PM.png?raw=1"
                }
                float="left"
                title=""
                scrolling={this.props.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
                scrollTop={this.props.scrollTop}
              />
            </a>
            97% hospitalized with covid aren't vaccinated," Peter "
            <a
              href="https://en.wikipedia.org/wiki/Base_rate_fallacy"
              style={{ color: "rgb(20,100,200)" }}
            >
              basis rate fallacy
            </a>
            " King
            <br />
            I'll give you&nbsp;
            <a
              href="https://truncatedsalestax.com"
              style={{ color: "rgb(20,100,200)" }}
            >
              the treatment
            </a>
            , cig
            <br />
            retribution, cash advance to short debt;&nbsp;
            <a
              href="https://thumbprint.us/privacy"
              //style={{ color: "rgb(20,100,200)" }}
            >
              pawn
            </a>
          </div>
          <Cable
            onError={handleScollImgError}
            img={true}
            src={
              this.state.settleDropboxFree
                ? ""
                : "https://www.dropbox.com/s/xfb7b4f3kv49g1x/Screen%20Shot%202021-10-29%20at%2011.05.05%20AM.png?raw=1"
            }
            float="right"
            title=""
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          donations, on the newsfeed, not subscribers to "watch," (if people
          paid into it, data beyond mvp is notwithstanding).
          <br />
          <br />
          No-Mask-mandate correlate with testing basis you fucking retard
          <br />
          ginnie pig/abuse, give me virus I’ll take chance to prove it
          <br />
          “Doesn’t end because you say it doesn’t, you can stop it by going to
          the polls,” ideological-duress you fucking prick trevalese. There is
          no occupy candidate
          <br />
          <Cable
            onError={handleScollImgError}
            img={true}
            src={
              this.state.settleDropboxFree
                ? ""
                : "https://www.dropbox.com/s/z6y9wbkoafx6eor/Screen%20Shot%202021-10-28%20at%206.27.19%20PM.png?raw=1"
            }
            float="left"
            title=""
            scrolling={this.props.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          “The left doesn’t allow dissent, liberals & conservatives allow it.”
          The left allows any idea except vaxxers took over the comment section.
          Most people allow discussion. You’re lying to yourself that Marx
          Piketty and I would stop comments. Paul Krugman didn’t block my
          replies when I had Twitter… stfu Prager, you fucking prude
          <br />
          <br />
          "how the conservatives on the right can fight the radical-left,"
          bottom left is anti-rent0-seeking, conservative for labor, not accrual
          third party beneficiary malfeasnace, collective bargaining fraud nor
          implausible landlord use
          <br />
          <br />
          tax-payer vacation paid by children, except really, savers (not
          savings accounts, they get paid by reappropriation of labors' means)
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/v1urbz58grw645c/Screen%20Shot%202021-10-28%20at%206.07.22%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/hqwyjgxoxoonscu/Screen%20Shot%202021-10-28%20at%206.07.35%20PM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            "funding" is not taxing producers that consumers pay for unless you
            allow corporations to keep profits year to year instead of outlay to
            labor immediately, why except to communize-privately for no
            practical collective bargain nor consent of consumers, prices being
            bound to finite-producer discretion, not equillibrium as our
            reasoning for
            unregulated(precedentially-fettered-by-private-debt)-markets gains
            consensus is more science than simple majority, having to all but
            not move in election
          </div>
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/jupjqyuu0t1oykg/Screen%20Shot%202021-10-28%20at%205.26.36%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Cost of living in large measure because of Biden policies, try
            actually counting retard self-harmer
            <br />
            consistently seeing byproduct, not the cause
            <br />
            <br />
            coverage by collective bargaining fraud instead of invoices are
            theft is economic retardation
            <br />
            <br />
            “Let markets work all by themselves,” Bob “fine don’t regulate”
            Sellers (hypocrite) well money “market,” collective-bargaining
            non-concurrentable fraud, ingredient-list-hidden+FDA-license,
            hung-jury-permits &
            <br />
            Implausible landlord use is not
            <br />
            You would want to own one if without accrual, collateral not
            unsettled, making the whole supply chain of labor and&nbsp;
            <span style={{ backgroundColor: "white", color: "black" }}>
              dead-weight-rentier
            </span>
            , “unsettled”
          </div>
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/0eph1ozt7lr0ruy/Screen%20Shot%202021-10-29%20at%2012.35.16%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Take them “out[ of office or retribution],” lo the power rests with
            the non-voters as a vote; or amortizing debt:cash*income third party
            beneficiary non-malfeasanace in precedent (but not law)
            <br />
            <br />
            Chores literally, "jiggers" profits from consumers, laundering
            individual labor savings to profits in corpoations y/y. it's not
            about color, at least root of word
            <br />
            <br />
            200yrs afro/euro match current income, 44years cash*trade/debt match
            current income... purposefully-impossible. Green new deal would be
            reverse debt:cash*income not cancel forbidden nor bailout
            lenders/landlords scheming implausible use, competing with consumer
            intent, dead-weight-rentier abjectly
          </div>
          <br />
          <span style={{ backgroundColor: "rgba(255,220,255,.4)" }}>
            wealth/hours
          </span>
          : poorness,&nbsp;
          <span style={{ backgroundColor: "rgba(255,220,255,.4)" }}>
            cost of living
          </span>
          : home-inflation,&nbsp;
          <span style={{ backgroundColor: "rgba(255,220,255,.4)" }}>
            income/hours
          </span>
          : poverty,
          <br />
          <br />
          why do you think?&nbsp;
          <a href="https://30under5.us" style={{ color: "rgb(20,100,200)" }}>
            implausible landlord use
          </a>
          , pharma-cops and fda-craft-beers?
          <br />
          <br />
          Self-abstain rather than having holdings is a default no
          <br />
          <br />
          Hour is purchased because it is a fixed good, if is impossible to get
          back a grandiose scope it is consumer risk for review; can't sell it
          twice un-lest concurrentable... like tech or
          another-item-in-same-reality
          <br />
          <br />
          poorness=(poverty/equality), C+I+G is redundant, NE is
          self-gentrification, & P is integral; gdp=m1v1==m2v2 is impossible
          <br />
          <br />
          education grants is useless price inelasticity and intermediate
          supply-demand trust-building, also bolstering trade-secrets
          <br />
          <br />
          Biden is making tax-credit refundable for to balkanize wealth between
          old and young
          <br />
          <br />
          Democrats want “taxes on profits above a billion dollars,” instead of
          forcing outlay to individual labor savings. Republicans want profits
          to be kept by the private communes.
          <br />
          <br />
          green new deal would be reverse debt:cash*income reimburse down
          payments upon repo amortized
          <br />
          medicare for all vs obamacare would be invoices are theft &&
          non-concurrentable collective bargaining fraud banned
          <br />
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/wpfdmigmvlu0q08/Screen%20Shot%202021-11-04%20at%202.19.45%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            bipartisans want to fine and libertarians don't want to regulate
            <br />
            Paid family leave is waste of comparative advantage, just fire them
            <br />
            Child tax credit is parent monopsony over children
            <br />
            "tuition-free" is like the right saying monthy-payment is less when
            total is greater
            <br />
            <br />
            The right wants to fine instead of regulate. not-voting is a vote,
            when your option isn't there
          </div>
          <br />
          <div
            style={{
              backgroundColor: "rgba(255,100,225,.4)",
              padding: "10px"
            }}
          >
            pay tax twice to go public! ok retard (the reptilian-deep-state
            can't handle name-calling) Murphy feigning&nbsp;
            <a
              href="https://teapharmacy.party"
              style={{ color: "rgb(20,100,200)" }}
            >
              weed
            </a>
            &nbsp;for ideological-duress/non-voters isn't consent beyond article
            4/scientific-consensus without hung-jury-permits (11/12). binary
            simple majority is having to move, but plural majorities will trump
            ideological duress of party-coalating, and pro-tests to move from
            natural/common/international-law, not precedence
            evidently-necessarily-historically
          </div>
          <br />
          <br />
          <div
            style={{
              float: this.state.iosNoPhoto ? "" : "left"
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <TwitterTweetEmbed
                key={" 1425460613711605760"}
                tweetId={"1425460613711605760"}
              />
            </div>
          </div>
          "{"<"}1% 44% income tax"
          <br />
          “MU polling is very variable; with the advent of cell phones, people
          don’t want to answer calls right now,” Chris Christie Cannot
          extrapolate voters, unshuffled population to boot, like coins
          <br />
          <br />
          “Obligation to accept legitimacy of this election”
          <br />
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/h1pckpafyv9wagn/biden%20official.jpg?raw=1"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <span
              style={{
                backgroundColor: "rgb(180,255,220)",
                color: "black"
              }}
            >
              "Negotiate and lower the price of drugs,"
            </span>
            &nbsp;does that mean it will declare invoices and theft or are you
            buying non-compete nurses gentrifying? reverse debt:cash*income
            don't lessen poverty doubly retiring the bond-index-funds
            <br />
            Must certify honor system signatures without content addressability,
            audit magnetic-data hard disc is fraud
          </div>
          <br />
          <TwitterTweetEmbed
            style={{
              width: "300px",
              float: "left"
            }}
            key="1433857610923532288"
            tweetId="1433857610923532288"
          />
          Savers split both parties, occupy && non-voters win plural-majority
          (if no-rank-choice)
          <br />
          <br />
          republicans like ppp trust-building, libertarians like
          private-gentrification, instead of regulating finite producers in
          target-margin networks & duress of business over consumers'
          protections. FDA only purpose is closed-source ingredient list of
          craft beers
          <br />
          <br />
          socialists are conservative, never reappropriating means of another
          nor have hung-jury-permits of duress in minimal-viable-product,
          publicly nor privately; supply chain is all labor or dead weight
          profit-private-commune
          <br />
          <br />
          You cannot squat on land, like New Jersey, and discriminate, gentrify
          beyond Article 4
          <br />
          marx described communism as a cudgel against finite producers, now it
          is government, or private, gentrification
          <br />
          <br />
          socialism where supply and demand is without dead weight (20x
          55+/millennial rental-income)
          <br />
          wealth-distribute from tax-payer vacation, not share-split neither
          accrual, lazy old people had your whole lives to save for retirement
          <br />
          regulate instead of fine and monopsony; poverty=(poverty/equality),
          gdp/p*bond=((1/price)/hours), no regard for tech-advancement in
          bipartisan racketeering, and gimpy-self-harm in private-communes (that
          not of regulation against credit-cycle for labor exclusivity to supply
          and demand theorum, all other brokerage fee target-margin for
          networking or being finite producer alone)
          <br />
          <a
            href="https://carducci.sh"
            style={{
              display: "inline-block",
              color: "rgb(20,100,200)",
              textAlign: "center",
              width: "100%"
            }}
          >
            all parties
          </a>
          <br />
          &nbsp;do is unite in lieu of consent granted (without "ideological
          duress")
          <br />
          <br />
          please say euro and afro to be consistent
          <div style={{ flexWrap: "wrap", display: "flex" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/bylo9brxxw6nxmx/Screen%20Shot%202021-10-28%20at%2011.10.58%20AM.png?raw=1"
              }
              float={null}
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/u2l0gw7i6dal5fo/Screen%20Shot%202021-10-28%20at%2011.13.24%20AM.png?raw=1"
              }
              float={null}
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/4lsgyyetyfdguq4/Screen%20Shot%202021-10-28%20at%2011.13.06%20AM.png?raw=1"
              }
              float={null}
              title=""
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
          </div>
          "seeking unemployment [from work] is a joke, bad economics, bad
          politics,"&nbsp;
          <a
            href="https://froth.app/consumption"
            style={{ color: "rgb(20,100,200)" }}
          >
            Larry Kudlow
          </a>
          <br />
          <div style={{ width: "200px" }}>
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={`${
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/o1575yuzp6w9lw2/this%20is%20kudlow.jpeg?raw=1"
              }`}
            />
          </div>
          <br />
          {/*
          width && <Employment width={Math.min(600, width - 100)} /> //H5XB
        */}
          <h4>
            <a href="https://fred.stlouisfed.org/graph/H5XB">
              price inflation never by population except when dead weight by
              public or private
            </a>
          </h4>
          {/* <Cable
          style={{ height: "760px", width: "100%" }}
          onError={handleScollImgError}
          src={
            this.state.nofredgraphs
              ? ""
              : "https://fred.stlouisfed.org/graph/graph-landing.php?g=H5XB&width=500&height=660"
          }
          float="left"
          title="price inflation never by population except when dead weight by public or private"
          scrolling={this.props.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />*/}
          <div
            style={{
              backgroundColor: "black",
              overflow: "hidden",
              height: "50px",
              width: "calc(100% - 46px)",
              display: "flex",
              position: "relative",
              padding: "4px 10px"
            }}
          >
            <div
              style={{
                right: "23px",
                zIndex: "1",
                boxShadow: "inset -15px 0px 14px 2px rgb(5,5,5)",
                overflow: "hidden",
                height: "50px",
                width: "46px",
                display: "flex",
                position: "absolute",
                padding: "4px 10px"
              }}
            />
            <div
              style={{
                overflowX: "auto",
                overflowY: "hidden",
                height: "62px",
                width: "calc(100% - 46px)",
                display: "flex",
                position: "relative",
                padding: "4px 10px"
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  marginBottom: "12px",
                  display: "flex",
                  position: "absolute",
                  height: "calc(100% - 12px)",
                  width: "max-content"
                }}
              >
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "#9749ffff",
                      color: "white"
                    }}
                    href="https://thumbprint.us"
                  >
                    thumbprint.us
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(225, 100, 170)",
                      color: "black"
                    }}
                    href="https://magnate.company"
                  >
                    magnate.company
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(5,5,5)",
                      color: "white"
                    }}
                    href="https://teapharmacy.party"
                  >
                    teapharmacy.party
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(5,5,5)",
                      color: "white"
                    }}
                    href="https://30under5.us"
                  >
                    30under5.us
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(5,5,5)",
                      color: "white"
                    }}
                    href="https://3under2.us"
                  >
                    3under2.us
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(5,5,5)",
                      color: "white"
                    }}
                    href="https://truncatedsalestax.com"
                  >
                    truncatedsalestax.com
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(5,5,5)",
                      color: "white"
                    }}
                    href="https://2052.live"
                  >
                    2052.live
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(5,5,5)",
                      color: "white"
                    }}
                    href="https://residualsplit.us"
                  >
                    residualsplit.us
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(5,5,5)",
                      color: "white"
                    }}
                    href="https://equityutilitymoney.com"
                  >
                    equityutilitymoney.com
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(5,5,5)",
                      color: "white"
                    }}
                    href="https://micro-theory.com"
                  >
                    micro-theory.com
                  </a>
                </div>
                <a
                  style={{
                    height: "100%",
                    position: "relative",
                    display: "flex",
                    width: "min-content"
                  }}
                  href="https://froth.app"
                >
                  <img
                    style={{ height: "100%", width: "auto" }}
                    src={`${
                      this.state.settleDropboxFree
                        ? ""
                        : "https://www.dropbox.com/s/u9kahqiqiiqse5t/froth%20logo300150.png?raw=1"
                    }`}
                    alt="froth.app"
                  />
                </a>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(218, 198, 90)",
                      color: "blue"
                    }}
                    href="https://foiegras.life"
                  >
                    foiegras.life
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "#0000fa",
                      color: "white"
                    }}
                    href="https://vaults.biz"
                  >
                    vaults.biz
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "white",
                      color: "black"
                    }}
                    href="https://nationalsecuritycasino.com"
                  >
                    nationalsecuritycasino.com
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(200, 230, 255)",
                      color: "rgb(178, 90, 197)"
                    }}
                    href="https://moldmask.co"
                  >
                    moldmask.co
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      color: "rgb(112, 101, 55)",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(212, 171, 95)"
                    }}
                    href="https://humanharvest.info"
                  >
                    humanharvest.info
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(5,5,15)",
                      color: "#92b8daff"
                    }}
                    href="https://vau.money"
                  >
                    vau.money
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "#c39767ff",
                      color: "white"
                    }}
                    href="https://scopes.cc"
                  >
                    scopes.cc
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "#92b8da",
                      color: "#cfe2f3"
                    }}
                    href="https://browser.glass"
                  >
                    browser.glass
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "#3f6aadff",
                      color: "white"
                    }}
                    href="https://actuapedia.com"
                  >
                    actuapedia.com
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(5,5,5)",
                      color: "white"
                    }}
                    href="https://keybox.email"
                  >
                    keybox.email
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(5,5,5)",
                      color: "white"
                    }}
                    href="https://drive.google.com/file/d/1fEi15P1689bWpKBzUprB3DjZKf4h_Cf3/view?usp=sharing"
                    //"https://vianickcarducci.medium.com/im-on-the-blockchain-742e3702721"
                  >
                    blockchain.fart
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(5,5,5)",
                      color: "white"
                    }}
                    href="https://linkedin.com/in/nickcarducci"
                  >
                    nick
                  </a>
                  @
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(5,5,5)",
                      color: "white"
                    }}
                    href="https://carducci.sh"
                  >
                    carducci.sh
                  </a>
                </div>
              </div>
            </div>
            <br />
            <div
              onMouseEnter={() =>
                this.setState({ hoverDemandExplained: true }, () => {
                  clearTimeout(this.stophoverDemandExplain);
                  this.stophoverDemandExplain = setTimeout(
                    () => this.setState({ hoverDemandExplained: false }),
                    4200
                  );
                })
              }
              style={{
                marginTop: "10px",
                width: "100%",
                position: "relative",
                height: "36px"
              }}
            >
              <span
                style={{
                  textAlign: "left",
                  fontSize: "20px",
                  padding: "4px 10px",
                  transition: ".3s ease-in",
                  position: "absolute",
                  opacity: !this.state.hoverDemandExplained ? 1 : 0
                }}
              >
                <span
                  style={{
                    fontWeight: "bolder",
                    textDecoration: "underline"
                  }}
                >
                  Consumer
                </span>
                -Side Economics & Human Rights
              </span>
              <span
                style={{
                  marginTop: "10px",
                  textAlign: "left",
                  fontSize: "20px",
                  padding: "4px 10px",
                  transition: ".3s ease-in",
                  position: "absolute",
                  opacity: this.state.hoverDemandExplained ? 1 : 0
                }}
              >
                <span
                  style={{
                    fontWeight: "bolder",
                    textDecoration: "underline"
                  }}
                >
                  Socialist
                </span>
                -Conservative & laborequity.org
              </span>
              <div
                onClick={() =>
                  this.setState({ openAbout: !this.state.openAbout })
                }
                style={{
                  color: "white",
                  position: "absolute",
                  right: "66px",
                  zIndex: "1",
                  margin: "10px",
                  padding: "4px 10px",
                  backgroundColor: "blue",
                  borderRadius: "6px"
                }}
              >
                {this.state.openAbout ? "Close" : "About"}
              </div>
            </div>
            <div
              style={{
                color: "rgb(200,200,200)",
                backgroundColor: "rgb(5,5,5)",
                height: this.state.openAbout ? "min-content" : "0px",
                overflow: "hidden",
                wordBreak: "break-word",
                width: "calc(100% - 46px)",
                position: "relative",
                padding: "4px 10px",
                paddingTop: "20px",
                transition: ".3s ease-in"
              }}
            >
              “If nat security, make everyone share sacrifice,” said jihadist
              Colin Powell. Half do it for money, half do it because they are
              psycho. The latter half of the same hold for cops care. Who says
              national security is so at steak that you can’t use tech
              advancement and small teams? Certainly not before two-week public
              review of the evidence of murder in action.
              <br />
              <br />
              non-voters 38% is a vote of non-consent, not even giving mind to
              simple majority scientific monopoly of possibly without hung-jury
              (many more resolved science and law that doesn't make it into
              political discourse), especially with ideological duress of
              political-party-making
              <br />
              <br />
              <span style={{ backgroundColor: "white", color: "black" }}>
                Repealing the grocery tax is not grocery tax after reverse
                debt:cash*invoices
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
                <Cable
                  onError={handleScollImgError}
                  img={true}
                  src={
                    this.state.settleDropboxFree
                      ? ""
                      : "https://www.dropbox.com/s/bgz2xzey09bj5an/Screen%20Shot%202021-11-03%20at%206.45.39%20PM.png?raw=1"
                  }
                  float={null}
                  title=""
                  scrolling={this.props.scrolling}
                  fwd={this["scrollImg" + scrollnum()]}
                  scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
                  scrollTop={this.props.scrollTop}
                />
                <div style={{ width: "200px" }}>
                  <div
                    style={{
                      position: "absolute",
                      zIndex: "1",
                      textAlign: "center",
                      width: "400px",
                      backgroundColor: "rgba(10,10,10,.4)"
                    }}
                  >
                    APPRAISAL KING
                  </div>
                  <Cable
                    onError={handleScollImgError}
                    img={true}
                    src={
                      this.state.settleDropboxFree
                        ? ""
                        : "https://www.dropbox.com/s/um8lxim6ddi9qen/Screen%20Shot%202021-11-03%20at%206.46.00%20PM.png?raw=1"
                    }
                    float={null}
                    title=""
                    scrolling={this.props.scrolling}
                    fwd={this["scrollImg" + scrollnum()]}
                    scrollTopAndHeight={
                      this.props.scrollTop + window.innerHeight
                    }
                    scrollTop={this.props.scrollTop}
                  />
                </div>
              </div>
            </div>
            <br />
            Yang trumpeting rank choice voting for primaries by tech
            <br />
            “2-3 parties in them”
            <br />
            <br />
            vm=gdp for both monies? v1 is fraudulent. $170t total market cap,
            $88t bond value, $2-6t cash currencyComponentOfM1 checking but
            $4t/yr of federal spending is normal? Most of gdp is bonds, about
            10/11 of them if&nbsp;
            <a style={{ color: "rgb(150,220,255)" }} href="https://vaults.biz">
              recalc gdp for without m2 minus currencyComponentOfM1
            </a>{" "}
            (TrueGdp) Boom times produce scarcity as people is integral to gdp
            that is labor elastic for propensity to consume, and gdp/p is
            fraudulently brought forward, dead weight by private or public is no
            matter.
            <br />
            <br />
            Prosperity is tranquility, settled trade
            <br />
            <br />
            Productivity is hours under price-deflation over a time-series
            <br />
            <br />
            Sustainability, Inclusivity and Accessability
            <br />
            A&nbsp;
            <a
              style={{ color: "rgb(150,220,255)" }}
              href="https://www.investopedia.com/articles/personal-finance/070715/insurance-companies-vs-banks-separate-and-not-equal.asp"
            >
              duressful
            </a>
            -economy of our&nbsp;
            <a
              style={{ color: "rgb(150,220,255)" }}
              href="https://www.investopedia.com/articles/investing/110513/utilizing-prisoners-dilemma-business-and-economy.asp"
            >
              doing, but not our choosing
            </a>
            ; on the clock, cornered, hoarded & counterfeit
            <br />
            <span style={{ fontSize: "30px" }}>&</span>&nbsp;&nbsp;&nbsp;The
            forces that are out to obfuscate and scourge&nbsp;
            <a
              style={{ color: "rgb(150,220,255)" }}
              href="https://micro-theory.com"
            >
              $82tdebt:$2tcurrencyComponentOfM1
            </a>
            &nbsp;(savings)
            <br />
            <span style={{ /**rgb(250,10,88) */ color: "rgb(250,100,100)" }}>
              suffocating inventors
            </span>
            &nbsp;- disturbing opportunity [default-1/42 reposession
            adjunication malfeasance (if debt-didn't exist, for all
            purchases)];&nbsp;
            <span style={{ color: "rgb(180,180,180)" }}>
              not acting to ban counterfeit-in-contract financial-cannibalism or
              rentier-colonisation to launder to rich with bonds
            </span>
            <div
              style={{
                margin: "4px 0px",
                padding: "4px 0px",
                borderTop: "2px solid",
                borderBottom: "2px solid"
              }}
            >
              Harm, net-agressive self-defense, prevention of others owning
              assets
            </div>
            <span
              style={{
                color: "rgb(255,240,240)"
              }}
            >
              if you move [not advise w/o intent or neglect to deceive, unless
              under non-state-tort(A5)] people you are at fault
              <br />
              read 'state' as p2s not public service role, see liability of
              product advertising... which should carry same crime of
              intent/negligence non-state-tort...
            </span>
            <br />
            <br />
            <div
              style={{
                margin: "4px 0px",
                padding: "4px 0px",
                borderTop: "2px solid",
                borderBottom: "2px solid"
              }}
            >
              <span style={{ color: "rgb(80,220,0)" }}>
                Competing with customers
              </span>
              &nbsp;- growth causes consterNation
            </div>
            <span
              style={{
                color: "rgb(240,255,245)"
              }}
            >
              You can tax sales (of end-products, not equity) for
              free-rider-immutable services, wealth for systematic reparations
              but really those are torts, and adjunicate torts to repair
              unjustice;&nbsp;
              <span
                //ref={this.law}
                style={{
                  transition: ".3s ease-in",
                  color: this.state.highlightLaw ? "white" : "",
                  backgroundColor: this.state.highlightLaw
                    ? "rgb(170,100,205)"
                    : ""
                }}
              >
                any tax or debt otherwise not only is involuntary slavery and a
                trust-building monopsony by the government, their contractors
                and their propograndising conspitators in ratings and education,
                but debt benefits the bond-holders & interference by tax or
                credit does nothing for the state of the world or the utilities
                purchased but raise prices and circumvent Savers who have worked
                for what they earn
              </span>
              . Saver Party represents the people that work or fund
              entrepreneurs on their&nbsp;
              <a
                style={{ color: "rgb(150,220,255)" }}
                href="https://vaults.biz"
              >
                customers' time
              </a>
              , and do not borrow or lend, and it is good for quality + -price.
              It is an obvious&nbsp;
              <a
                style={{ color: "rgb(150,220,255)" }}
                href="https://www.opensecrets.org/2020-presidential-race/joe-biden/industries?id=N00001669"
              >
                red-herring
              </a>
              &nbsp; to help Wall st; yet the Republicans do the same. Saver
              party exists and represents&nbsp;
              <a
                style={{ color: "rgb(150,220,255)" }}
                href="https://www.isidewith.com/poll/488729614"
              >
                most Americans
              </a>
              . Why call your parties one of the primary two; bipartisanship
              representing a minority of Americans - and no civil or human
              rights - is a lie, if claiming it to be what people want - or
              deserve.
            </span>
            <span style={{ color: "grey" }}>
              &nbsp; Like my stuff? Hire me! 7322331085. I am asking for 4100%
              of what you think is possible. Please collude with Twitter, CNN &
              AP to gaslight people into thinking they want to fulfill my wishes
              for myself by splitting their equity, try not to let them on to
              what is happening
            </span>
            <br />
            <br />
            <div
              style={{
                marginBottom: "4px",
                padding: "4px 0px",
                borderTop: "2px solid",
                borderBottom: "2px solid"
              }}
            >
              <span style={{ color: "rgb(25,122,158)" }}>
                International Relations
              </span>
              &nbsp;- Individual World Order
            </div>
            <span
              style={{
                color: "rgb(240,245,255)"
              }}
            >
              In order to compete with a debt-based country (not because it is
              economically unfair, like a&nbsp;
              <a
                style={{ color: "rgb(150,220,255)" }}
                href="https://www.academia.edu/43983386/Can_a_socialist_or_communist_system_compete_effectively_in_a_global_economy"
              >
                communist economy is not as strong economically
              </a>
              &nbsp;as a productive && EFFICIENT, micro-controlled/empowered by
              currency concord one), China wars/threatens. However, from my
              historical market studies - world peace would come from the
              understanding of and repairing, as needed, the following:
            </span>
          </div>
        </div>
      )
    );
  }
}
export default AProduction;
