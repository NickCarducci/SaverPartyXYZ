import React from "react";

const races = [
  ["Not reported", 53673566],
  ["German", 30165672],
  ["African American", 22347395],
  ["American", 20188305],
  ["Irish", 19279211],
  ["English", 16623938],
  ["Mexican", 14026904],
  ["Italian", 12836020],
  ["Polish", 6296378],
  ["French", 4870907],
  ["White", 3349097],
  ["Scotch-Irish", 3283065],
  ["Norwegian", 3241637],
  ["Scottish", 3142893],
  ["Dutch", 2552688],
  ["American Indian", 2469636],
  ["Swedish", 2436825],
  ["Puerto Rican", 2423856],
  ["Hispanic", 2358751],
  ["Chinese", 2114471],
  ["Filipino", 1938790],
  ["Russian", 1927040],
  ["European", 1898978],
  ["French Canadian", 1860070],
  ["Mexicano", 1835863],
  ["Uncodeable entry", 1789309],
  ["Spanish", 1695819],
  ["Black", 1667462],
  ["Mexican American", 1603578],
  ["Asian Indian", 1390397],
  ["Korean", 1136978],
  ["African", 1127595],
  ["Religious response", 1089597],
  ["Cuban", 1012617],
  ["Vietnamese", 997185],
  ["Japanese", 981302],
  ["Greek", 942723],
  ["Native American", 936294],
  ["Portuguese", 913859],
  ["Hungarian", 903963],
  ["Indian", 895496],
  ["Welsh", 886139],
  ["Dominican", 861514],
  ["Danish", 855797],
  ["British", 828089],
  ["Salvadoran", 753126],
  ["Jamaican", 689001],
  ["Ukrainian", 665131],
  ["Mixture", 648620],
  ["Colombian", 544230],
  ["Swiss", 535408],
  ["Haitian", 531397],
  ["Czech", 513626],
  ["Slovak", 512212],
  ["Afro American", 486603],
  ["Canadian", 476057],
  ["Anglo", 469772],
  ["Finnish", 435446],
  ["Austrian", 433292],
  ["Guatemalan", 431471],
  ["Cherokee", 428372],
  ["Lithuanian", 423926],
  ["Lebanese", 348641],
  ["Armenian", 337554],
  ["Iranian", 317970],
  ["Czechoslovakian", 315466],
  ["Mexican State", 315059],
  ["Scandinavian", 308051],
  ["United States", 307947],
  ["Ecuadorian", 297169],
  ["Taiwanese", 283498],
  ["Hawaiian", 267396],
  ["Peruvian", 264940],
  ["Romanian", 259778],
  ["Croatian", 257413],
  ["Spaniard", 250111],
  ["Eastern European", 249483],
  ["Honduran", 247499],
  ["Pakistani", 246332],
  ["Bohemian", 230764],
  ["Asian", 222849],
  ["Belgian", 217524],
  ["Nicaraguan", 211532],
  ["Pennsylvania German", 202528],
  ["Cambodian", 189505],
  ["Laotian", 172122],
  ["Latino", 170104],
  ["Brazilian", 163608],
  ["Northern European", 161076],
  ["Yugoslavian", 160441],
  ["Nigerian", 158436],
  ["Guyanese", 151006],
  ["Trinidadian", 147268],
  ["Hmong", 137620],
  ["Egyptian", 133818],
  ["Thai", 131225],
  ["West Indian", 126490],
  ["Western European", 123205],
  ["Slovene", 118957],
  ["Arabic", 109871],
  ["Syrian", 106479],
  ["Negro", 105213],
  ["Spanish American", 105085],
  ["Serbian", 104888],
  ["Panamanian", 102821],
  ["Albanian", 102201],
  ["Turkish", 99190],
  ["Herzogovinian", 96438],
  ["Israeli", 96338],
  ["Venezuelan", 83674],
  ["Samoan", 80136],
  ["Arab", 76263],
  ["Argentinean", 74342],
  ["Chilean", 73462],
  ["Bangladeshi", 73299],
  ["Cape Verdean", 71816],
  ["Slavic", 68523],
  ["Sicilian", 68290],
  ["Costa Rican", 67629],
  ["Palestinian", 67532],
  ["Ethiopian", 66822],
  ["Latvian", 66714],
  ["Mexican American Indian", 66137],
  ["Chicano", 64298],
  ["Cajun", 62000],
  ["Australian", 60949],
  ["East Indian", 57603],
  ["Celtic", 53438],
  ["Afghan", 52107],
  ["Bolivian", 50475],
  ["Central American", 50291],
  ["Barbadian", 50173],
  ["Ghanian", 49434],
  ["Bulgarian", 46468],
  ["Indonesian", 44953],
  ["Eskimo", 42968],
  ["British Isles", 42137],
  ["South African", 41422],
  ["Cantonese", 38774],
  ["Assyrian", 37845],
  ["Jordanian", 37762],
  ["Chaldean", 37344],
  ["Latin", 36874],
  ["Somalian", 35977],
  ["Belizean", 34152],
  ["Guamanian", 33652],
  ["Moroccan", 33402],
  ["Iraqi", 33323],
  ["Latin American", 32957],
  ["Texas", 32765],
  ["North American", 32460],
  ["Basque", 32121],
  ["Maltese", 30479],
  ["Icelander", 30388],
  ["Macedonian", 30384],
  ["Malaysian", 30382],
  ["Tongan", 29410],
  ["Bahamian", 27588],
  ["Luxemburger", 26378],
  ["Middle Eastern", 25358],
  ["Liberian", 25140],
  ["Prussian", 25007],
  ["Grenadian", 24360],
  ["South American", 24349],
  ["Belorussian", 23653],
  ["Sri Lankan", 23374],
  ["Afro", 21304],
  ["Pacific Islander", 20646],
  ["Central American Indian", 20303],
  ["Estonian", 19706],
  ["Dutch West Indian", 19081],
  ["Eritrean", 18781],
  ["Kenyan", 16918],
  ["Hong Kong", 15773],
  ["Creole", 15239],
  ["Burmese", 14699],
  ["Sudanese", 14157],
  ["Uruguayan", 14134],
  ["Antiguan and Barbudan", 13988],
  ["Chamorro", 13752],
  ["New Zealander", 13724],
  ["Okinawan", 13682],
  ["Vincent-Grenadine Islander", 12921],
  ["Fijian", 12535],
  ["Sierra Leonean", 12239],
  ["Appalachian", 11945],
  ["Eurasian", 11809],
  ["Bengali", 11406],
  ["Polynesian", 11347],
  ["Punjabi", 11184],
  ["Yemeni", 10930],
  ["Aleut", 10483],
  ["St. Lucia Islander", 9782],
  ["Nepali", 9763],
  ["Acadian", 9681],
  ["Amerasian", 9347],
  ["South American Indian", 9282],
  ["Central European", 9229],
  ["Micronesian", 8839],
  ["Kurdish", 8747],
  ["Paraguayan", 8605],
  ["U.S. Virgin Islander", 8424],
  ["California", 8065],
  ["Basque, Spanish", 8000],
  ["Cameroonian", 7908],
  ["Algerian", 7893],
  ["Flemish", 7680],
  ["Moldavian", 7156],
  ["Saudi Arabian", 7019],
  ["Western African", 6525],
  ["Southerner", 6510],
  ["Volga German", 6235],
  ["Rom", 6198],
  ["Georgia CIS", 6143],
  ["Mulatto", 6137],
  ["Marshallese", 6040],
  ["Kitts/Nevis Islander", 5943],
  ["Senegalese", 5919],
  ["Mongolian", 5831],
  ["Dominica Islander", 5803],
  ["Singaporean", 5638],
  ["Slavonian", 5546],
  ["Basque, French", 5290],
  ["Azerbaijani", 5264],
  ["Bermudan", 5004],
  ["Tibetan", 4980],
  ["Trinidad and Tobago Islander", 4703],
  ["Uzbeg", 4652],
  ["Ugandan", 4647],
  ["Manx", 4371],
  ["Zimbabwean", 4262],
  ["Carpatho Rusyn", 4177],
  ["Bavarian", 4116],
  ["Tunisian", 4034],
  ["New York", 4002],
  ["Pennsylvania", 3990],
  ["Cypriot, Greek", 3821],
  ["Khmer", 3740],
  ["Congolese", 3723],
  ["Newfoundlander", 3708],
  ["Castillian", 3585],
  ["Southern European", 3403],
  ["Cornish", 3367],
  ["Aryan", 3308],
  ["Part Hawaiian", 3207],
  ["Saxon", 3127],
  ["Florida", 3101],
  ["Tirol", 3069],
  ["Kuwaiti", 3068],
  ["Cypriot", 3034],
  ["Georgia", 3026],
  ["Gambian", 2971],
  ["Ivorian", 2960],
  ["Northern Irelander", 2885],
  ["St. Croix Islander", 2872],
  ["German Russian", 2870],
  ["North African", 2849],
  ["Guinean", 2843],
  ["Kentucky", 2798],
  ["Tanzanian", 2782],
  ["Libyan", 2722],
  ["Moravian", 2672],
  ["Palauan", 2599],
  ["Azorean", 2557],
  ["Singhalese", 2540],
  ["Surinamese", 2437],
  ["Canarian", 2424],
  ["Montserrat Islander", 2379],
  ["St. Thomas Islander", 2351],
  ["Montenegran", 2339],
  ["Turkestani", 2325],
  ["Gujarati", 2243],
  ["Ruthenian", 2240],
  ["New Mexico", 2233],
  ["Colored", 2218],
  ["Frisian", 2145],
  ["British West Indian", 2129],
  ["Indiana", 2120],
  ["Nova Scotian", 2106],
  ["Balearic Islander", 2060],
  ["Eastern African", 2047],
  ["Soviet Union, N.E.C.1", 1963],
  ["Virginia", 1920],
  ["Windish", 1787],
  ["Mandarin", 1780],
  ["Oklahoma", 1771],
  ["North Carolina", 1759],
  ["Tennessee", 1742],
  ["Cayman Islander", 1722],
  ["Malian", 1674],
  ["Tamil Nadu", 1654],
  ["Togolese", 1644],
  ["Tahitian", 1619],
  ["Crimean", 1606],
  ["Angolan", 1557],
  ["South Carolina", 1525],
  ["Catalonian", 1513],
  ["Aruba Islander", 1507],
  ["Zairian", 1503],
  ["Zambian", 1500],
  ["Alaska", 1468],
  ["Montagnard", 1466],
  ["Rwandan", 1453],
  ["Kashmiri", 1446],
  ["North Caucasian Turkic", 1339],
  ["Ibo", 1286],
  ["Ohio", 1266],
  ["Mississippi", 1249],
  ["Sorbian/Wend", 1245],
  ["Illinois", 1222],
  ["Black Thai", 1213],
  ["Corsican", 1122],
  ["West Virginia", 1089],
  ["Cayenne", 1060],
  ["Maori", 1055],
  ["Fulah", 1026],
  ["Berber", 981],
  ["Tobagonian", 919],
  ["Rusyn", 916],
  ["Alabama", 882],
  ["Missouri", 867],
  ["Yoruba", 861],
  ["Louisiana", 852],
  ["Galician", 846],
  ["Saipanese", 842],
  ["Mauritian", 821],
  ["Michigan", 811],
  ["Goanese", 807],
  ["Soviet Central Asia", 798],
  ["Tajik", 798],
  ["Anguilla Islander", 798],
  ["Mauritanian", 784],
  ["Tejano", 780],
  ["Kansas", 774],
  ["French West Indian", 759],
  ["British Virgin Islander", 745],
  ["Guadeloupe Islander", 716],
  ["Arkansas", 705],
  ["Magyar", 699],
  ["Arizona", 681],
  ["New Jersey", 639],
  ["Botswanan", 631],
  ["Malawian", 624],
  ["Nigerien (Niger)", 605],
  ["Chuukese", 595],
  ["Hessian", 587],
  ["Liechtensteiner", 567],
  ["Beninese", 561],
  ["Carpathian", 553],
  ["Oregon", 544],
  ["African Islander excluding Madagascar", 541],
  ["Mozambican", 540],
  ["Suisse", 539],
  ["Turks and Caicos Islander", 536],
  ["Indo Chinese", 530],
  ["Pathan", 529],
  ["Syriac", 526],
  ["North Caucasian", 525],
  ["Ponapean", 524],
  ["Minnesota", 518],
  ["West German", 516],
  ["Switzer", 515],
  ["Massachusetts", 512],
  ["San Marino", 506],
  ["Pacific, N.E.C1", 491],
  ["Zulu", 487],
  ["Lapp", 480],
  ["Iowa", 473],
  ["Nebraska", 465],
  ["Burundian", 462],
  ["Monegasque", 461],
  ["Emirati", 459],
  ["Vermont", 457],
  ["Yapese", 430],
  ["Maryland", 428],
  ["Macao", 421],
  ["Wisconsin", 403],
  ["Madagascan", 402],
  ["Pomeranian", 386],
  ["Inuit", 370],
  ["Cypriot, Turkish", 361],
  ["Rome", 357],
  ["Colorado", 348],
  ["Montana", 344],
  ["Dobrujan", 343],
  ["Omani", 342],
  ["Afrikaner", 336],
  ["Manchurian", 320],
  ["St. Maarten Islander", 294],
  ["Javanese", 293],
  ["East German", 284],
  ["Silesian", 272],
  ["Namibian", 256],
  ["Breton", 203],
  ["Greenlander", 202],
  ["Cossak", 173],
  ["Andorran", 150],
  ["Walloon", 150],
  ["Channel Islander", 150],
  ["Gibraltan", 150],
  ["Faroe Islander", 150],
  ["Karelian", 150],
  ["Lorrainian", 150],
  ["Friulian", 150],
  ["Ladin", 150],
  ["Berliner", 150],
  ["Hamburger", 150],
  ["Hannover", 150],
  ["Lubecker", 150],
  ["Sudentenlander", 150],
  ["Westphalian", 150],
  ["Cretan", 150],
  ["Cycladic Islander", 150],
  ["Trieste", 150],
  ["Abruzzi", 150],
  ["Apulian", 150],
  ["Basilicata", 150],
  ["Calabria", 150],
  ["Amalfian", 150],
  ["Liburian", 150],
  ["Lombardian", 150],
  ["Marche", 150],
  ["Molise", 150],
  ["Neopolitan", 150],
  ["Piedmontese", 150],
  ["Puglia", 150],
  ["Sardinian", 150],
  ["Toscana", 150],
  ["Trentino", 150],
  ["Umbrian", 150],
  ["Valle Daosta", 150],
  ["Venetian", 150],
  ["Occitan", 150],
  ["Madeiran", 150],
  ["Aland Islander", 150],
  ["Romansch", 150],
  ["Suisse Romane", 150],
  ["Livonian", 150],
  ["Finno Ugrian", 150],
  ["Mordovian", 150],
  ["Gruziia", 150],
  ["Kalmyk", 150],
  ["Ossetian", 150],
  ["Kashubian", 150],
  ["Wallachian", 150],
  ["Muscovite", 150],
  ["Bashkir", 150],
  ["Chuvash", 150],
  ["Gagauz", 150],
  ["Tuvinian", 150],
  ["Yakut", 150],
  ["Lemko", 150],
  ["Bioko", 150],
  ["Bucovina", 150],
  ["Andalusian", 150],
  ["Asturian", 150],
  ["Gallego", 150],
  ["Valencian", 150],
  ["La Raza", 150],
  ["Canal Zone", 150],
  ["Criollo", 150],
  ["Californio", 150],
  ["Nuevo Mexicano", 150],
  ["St. John Islander", 150],
  ["Ceuta", 150],
  ["Rio de Oro", 150],
  ["Bahraini", 150],
  ["Qatar", 150],
  ["Bedouin", 150],
  ["Gaza Strip", 150],
  ["South Yemen", 150],
  ["Aden", 150],
  ["Central African Republic", 150],
  ["Chadian", 150],
  ["Congo Brazzaville", 150],
  ["Djibouti", 150],
  ["Equatorial Guinean", 150],
  ["Gabonese", 150],
  ["Guinea Bissau", 150],
  ["Lesotho", 150],
  ["Hausa", 150],
  ["Swaziland", 150],
  ["Union of South Africa", 150],
  ["Dinka", 150],
  ["Nuer", 150],
  ["Darfur", 150],
  ["Tanganyikan", 150],
  ["Zanzibar Islander", 150],
  ["Upper Voltan", 150],
  ["Voltan", 150],
  ["Central African", 150],
  ["Baluchistan", 150],
  ["Bhutanese", 150],
  ["Andamanese", 150],
  ["Andhrapradesh", 150],
  ["Assamese", 150],
  ["Karnatakan", 150],
  ["Keralan", 150],
  ["Maharashtran", 150],
  ["Madrasi", 150],
  ["Mysore", 150],
  ["Nagaland", 150],
  ["Rajasthani", 150],
  ["Sikkim", 150],
  ["East Indies", 150],
  ["Veddah", 150],
  ["Maldivian", 150],
  ["Shan", 150],
  ["Borneo", 150],
  ["Sumatran", 150],
  ["Issei", 150],
  ["Nisei", 150],
  ["Ryukyu Islander", 150],
  ["Meo", 150],
  ["North Borneo", 150],
  ["Formosan", 150],
  ["Ma", 150],
  ["Tasmanian", 150],
  ["Australian Aborigine", 150],
  ["Kapingamarangan", 150],
  ["Cook Islander", 150],
  ["Niuean", 150],
  ["Kosraean", 150],
  ["Carolinian", 150],
  ["Kiribatese", 150],
  ["Nauraun", 150],
  ["Tinian Islander", 150],
  ["Melanesian Islander", 150],
  ["New Guinean", 150],
  ["Papuan", 150],
  ["Solomon Islander", 150],
  ["New Caledonian Islander", 150],
  ["Vanuatuan", 150],
  ["Nonwhite", 150],
  ["Connecticut", 150],
  ["District of Columbia", 150],
  ["Delaware", 150],
  ["Idaho", 150],
  ["Maine", 150],
  ["Nevada", 150],
  ["New Hampshire", 150],
  ["North Dakota", 150],
  ["Rhode Island", 150],
  ["South Dakota", 150],
  ["Utah", 150],
  ["Washington", 150],
  ["Wyoming", 150],
  ["Tokelauan", 137]
];

class Racists extends React.Component {
  constructor(props) {
    super(props);

    let noData = [];
    let date = [];
    let types = [];
    let race = [];
    let raceData = [];
    const total = 281430734;
    races
      .filter((x, i) => races.length - i > 500)
      .forEach((x) => {
        race.push(x[1] / total);
        raceData.push([x[0], x[1] / total]);
      });
    const all = [...race];
    var lowPer = Math.min(...all);
    var highPer = Math.max(...all);
    var state = {
      default: race.length,
      increment: 1,
      last: null,
      next: 9,
      //"engl churchill; Is H; mlk pearl harbor, 911"
      types,
      date,
      highPer,
      noData,
      yAxis: highPer - lowPer,
      lowPer,
      raceData
    };
    this.state = state;
  }
  componentDidUpdate = () => {
    if (this.state.last !== this.state.laststate) {
      this.setState({ laststate: this.state.last }, () => {
        let race = [];
        let raceData = [];
        var total = 0;
        races
          .filter(
            (x, i) =>
              (this.state.last === null && races.length - i > 500) ||
              (i + 1 > this.state.last && i < this.state.next)
          )
          .map((x) => {
            total = total + x[1];
            return x;
          })
          .forEach((x) => {
            race.push(x[1] / total);
            raceData.push([x[0], x[1] / total]);
          });
        //console.log(raceData);
        const all = [...race];
        var lowPer = Math.min(...all);
        var highPer = Math.max(...all);
        //console.log(dataData);
        var state = {
          highPer,
          yAxis: highPer - lowPer,
          lowPer,
          raceData
        };
        this.setState(state);
      });
    }
  };
  render() {
    const { increment } = this.state;
    const labelstyle = {
      backgroundColor: "rgba(50,120,200,.6)",
      top: "0px",
      height: "min-content",
      display: "flex",
      maxWidth: "100%",
      left: "2px",
      flexWrap: "wrap"
    };
    const buttonStyle = {
      userSelect: "none",
      border: "1px solid black",
      color: "black",
      backgroundColor: "rgb(220,220,220)",
      borderRadius: "4px",
      padding: "5px",
      margin: "2px"
    };

    const linecss = {
      left: "0px",
      bottom: "0px",
      display: "flex",
      position: "absolute",
      width: "100%",
      height: "200px",
      transform: "translate(0%,0%) scale(1,-1)"
    };
    const shortNumber = (scler, notRound) => {
      var newnum = String(Math.round(scler));
      if (notRound) newnum = String(scler);
      var app = null;
      var decimal = null;
      const suff = ["", "k", "m", "b", "t"];
      for (let i = 0; i < suff.length; i++) {
        if (newnum.length > 3) {
          decimal = newnum[newnum.length - 3];
          newnum = newnum.substring(0, newnum.length - 3);
        } else {
          app = i;
          break;
        }
      }
      return newnum + (decimal ? "." + decimal : "") + suff[app];
    };
    //console.log(this.state.oilprice);
    let start = 0;
    const race = this.state.raceData.map((x, i) => {
      start = start + x[1];
      const red = Math.round(180 - (i / this.state.raceData.length) * 180);
      // console.log(red);
      return {
        color: `rgba(${red + 50},50,50,${0.8})`,
        //share: x[1] * 100,
        share: x[1] * 31.42,
        start: start - x[1]
      };
    });
    //console.log(race);
    const StringDecimal = (y, suffindex = 3) => {
      var string;
      if (y) {
        const x = String(y);
        if (x.includes(".")) {
          const here = x.indexOf(".");
          string = x.substring(0, here) + x.substring(here, here + suffindex);
        } else string = x;
      }
      return string;
    };
    const total = 281430734;
    return (
      <div
        style={{
          width: "100%",
          minHeight: "240px",
          position: "relative",
          backgroundColor: "black"
        }}
      >
        <div
          style={{
            bottom: "0px",
            zIndex: "1",
            backgroundColor: "rgba(255,255,255,.3)",
            padding: "4px 8px",
            position: "absolute",
            right: "0px"
          }}
        >
          <a
            style={{ color: "grey" }}
            href={
              "https://www.census.gov/topics/population/ancestry/data/tables.All.List_230149264.html"
            }
          >
            {this.state.raceData.length} of {races.length} races
          </a>
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <div
              style={{ padding: "4px 10px" }}
              onClick={() => this.setState({ last: null, next: 9 })}
            >
              &#8634;
            </div>
            <select
              defaultValue={increment}
              state={increment}
              onChange={(x) =>
                this.setState({ increment: Number(x.target.value) })
              }
            >
              {[1, 2, 3, 4, 5, 50].map((x) => (
                <option key={"increm" + x} id={x}>
                  {x}
                </option>
              ))}
            </select>
            <div
              style={{
                border: "1px solid",
                padding: "4px 10px",
                userSelect: "none"
              }}
              onClick={() => {
                if (this.state.last !== null) {
                  var incr = increment;
                  if (this.state.last - increment < 0)
                    incr = this.state.last + 1;
                  if (incr > 0) {
                    this.setState({
                      last:
                        this.state.last === 0 ? null : this.state.last - incr,
                      next: this.state.next - incr
                    });
                  } else
                    this.setState({
                      last: null,
                      next: 9
                    });
                }
              }}
            >
              {"<"}
            </div>
            {this.state.chosenDecade}
            <div
              style={{
                border: "1px solid",
                padding: "4px 10px",
                userSelect: "none"
              }}
              onClick={() => {
                if (races.length - this.state.next > 0) {
                  var incr = increment;
                  if (this.state.next + increment > races.length)
                    incr = races.lenth - this.state.next + 1;
                  //    incr > 0 &&
                  if (incr > 0) {
                    this.setState({
                      last: this.state.last + incr,
                      next: this.state.next + incr
                    });
                  } else
                    this.setState({
                      last: races.length - 9,
                      next: races.length
                    });
                }
              }}
            >
              {">"}
            </div>
          </div>
        </div>
        <div
          style={{
            zIndex: "1",
            textAlign: "left",
            position: "absolute"
          }}
        >
          <div
            style={{
              color: "white",
              maxWidth: "100%",
              wordWrap: "break-word",
              fontSize: "10px",
              backgroundColor: "lightseagreen"
            }}
          >
            {this.state.raceData.length === this.state.default ? ( // races.length
              <a
                style={{
                  color: "white",
                  fontSize: "12px"
                }}
                href="https://vaults.biz"
              >
                all races in the Ancestry Question (2000)
              </a>
            ) : (
              this.state.raceData.map((x, i) => {
                const num = races[this.state.last + i][1];
                const ratio = num / total;
                return (
                  <div key={"racist" + x[0]}>
                    {x[0]}
                    <br />
                    {
                      StringDecimal(
                        100 * ratio,
                        ratio < 0.00001
                          ? 6
                          : ratio < 0.0001
                          ? 5
                          : ratio < 0.001
                          ? 4
                          : ratio < 0.01
                          ? 3
                          : 2
                      )
                      //StringDecimal(x[1] * 100, 3)}
                    }
                    %
                  </div>
                );
              })
            )}
          </div>
        </div>
        <div style={{ transform: "translate(0px,220px)" }}>
          <svg
            style={linecss}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="rotate(-90, 10,10)" fill="none" strokeWidth="10">
              {race.map((x, i) => (
                <circle
                  key={"pie" + i}
                  r="5"
                  cx="10"
                  cy="10"
                  stroke={x.color}
                  strokeDasharray={`${x.share} ${31.42}`}
                  //stroke-dasharray={`${x.share} ${100}`} //"10.99 31.4"
                  transform={`rotate(${x.start * 360}, 10,10)`}
                />
              ))}
            </g>
          </svg>
        </div>
      </div>
    );
  }
}
export default Racists;
