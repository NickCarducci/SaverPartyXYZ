import React from "react";
//import { NaturalCurve } from "react-svg-curve";

//top500PublicValueNetYear includes dividends
const censusPopData = [
  {
    date: "Dec 1, 2020",
    pop: "330.66"
  },
  {
    date: "Jul 1, 2020",
    pop: "329.88"
  },
  {
    date: "Jul 1, 2019",
    pop: "328.24"
  },
  {
    date: "Jul 1, 2018",
    pop: "326.69"
  },
  {
    date: "Jul 1, 2017",
    pop: "324.99"
  },
  {
    date: "Jul 1, 2016",
    pop: "322.94"
  },
  {
    date: "Jul 1, 2015",
    pop: "320.64"
  },
  {
    date: "Jul 1, 2014",
    pop: "318.30"
  },
  {
    date: "Jul 1, 2013",
    pop: "315.99"
  },
  {
    date: "Jul 1, 2012",
    pop: "313.83"
  },
  {
    date: "Jul 1, 2011",
    pop: "311.56"
  },
  {
    date: "Jul 1, 2010",
    pop: "309.32"
  },
  {
    date: "Jul 1, 2009",
    pop: "306.77"
  },
  {
    date: "Jul 1, 2008",
    pop: "304.09"
  },
  {
    date: "Jul 1, 2007",
    pop: "301.23"
  },
  {
    date: "Jul 1, 2006",
    pop: "298.38"
  },
  {
    date: "Jul 1, 2005",
    pop: "295.52"
  },
  {
    date: "Jul 1, 2004",
    pop: "292.81"
  },
  {
    date: "Jul 1, 2003",
    pop: "290.11"
  },
  {
    date: "Jul 1, 2002",
    pop: "287.63"
  },
  {
    date: "Jul 1, 2001",
    pop: "284.97"
  },
  {
    date: "Jul 1, 2000",
    pop: "282.16"
  },
  {
    date: "Jul 1, 1999",
    pop: "279.04"
  },
  {
    date: "Jul 1, 1998",
    pop: "275.85"
  },
  {
    date: "Jul 1, 1997",
    pop: "272.65"
  },
  {
    date: "Jul 1, 1996",
    pop: "269.39"
  },
  {
    date: "Jul 1, 1995",
    pop: "266.28"
  },
  {
    date: "Jul 1, 1994",
    pop: "263.13"
  },
  {
    date: "Jul 1, 1993",
    pop: "259.92"
  },
  {
    date: "Jul 1, 1992",
    pop: "256.51"
  },
  {
    date: "Jul 1, 1991",
    pop: "252.98"
  },
  {
    date: "Jul 1, 1990",
    pop: "249.62"
  },
  {
    date: "Jul 1, 1989",
    pop: "246.82"
  },
  {
    date: "Jul 1, 1988",
    pop: "244.50"
  },
  {
    date: "Jul 1, 1987",
    pop: "242.29"
  },
  {
    date: "Jul 1, 1986",
    pop: "240.13"
  },
  {
    date: "Jul 1, 1985",
    pop: "237.92"
  },
  {
    date: "Jul 1, 1984",
    pop: "235.82"
  },
  {
    date: "Jul 1, 1983",
    pop: "233.79"
  },
  {
    date: "Jul 1, 1982",
    pop: "231.66"
  },
  {
    date: "Jul 1, 1981",
    pop: "229.47"
  },
  {
    date: "Jul 1, 1980",
    pop: "227.22"
  },
  {
    date: "Jul 1, 1979",
    pop: "225.06"
  },
  {
    date: "Jul 1, 1978",
    pop: "222.58"
  },
  {
    date: "Jul 1, 1977",
    pop: "220.24"
  },
  {
    date: "Jul 1, 1976",
    pop: "218.04"
  },
  {
    date: "Jul 1, 1975",
    pop: "215.97"
  },
  {
    date: "Jul 1, 1974",
    pop: "213.85"
  },
  {
    date: "Jul 1, 1973",
    pop: "211.91"
  },
  {
    date: "Jul 1, 1972",
    pop: "209.90"
  },
  {
    date: "Jul 1, 1971",
    pop: "207.66"
  },
  {
    date: "Jul 1, 1970",
    pop: "205.05"
  },
  {
    date: "Jul 1, 1969",
    pop: "202.68"
  },
  {
    date: "Jul 1, 1968",
    pop: "200.71"
  },
  {
    date: "Jul 1, 1967",
    pop: "198.71"
  },
  {
    date: "Jul 1, 1966",
    pop: "196.56"
  },
  {
    date: "Jul 1, 1965",
    pop: "194.30"
  },
  {
    date: "Jul 1, 1964",
    pop: "191.89"
  },
  {
    date: "Jul 1, 1963",
    pop: "189.24"
  },
  {
    date: "Jul 1, 1962",
    pop: "186.54"
  },
  {
    date: "Jul 1, 1961",
    pop: "183.69"
  },
  {
    date: "Jul 1, 1960",
    pop: "180.67"
  },
  {
    date: "Jul 1, 1959",
    pop: "177.83"
  },
  {
    date: "Jul 1, 1958",
    pop: "174.88"
  },
  {
    date: "Jul 1, 1957",
    pop: "171.98"
  },
  {
    date: "Jul 1, 1956",
    pop: "168.90"
  },
  {
    date: "Jul 1, 1955",
    pop: "165.93"
  },
  {
    date: "Jul 1, 1954",
    pop: "163.03"
  },
  {
    date: "Jul 1, 1953",
    pop: "160.18"
  },
  {
    date: "Jul 1, 1952",
    pop: "157.55"
  },
  {
    date: "Jul 1, 1951",
    pop: "154.88"
  },
  {
    date: "Jul 1, 1950",
    pop: "152.27"
  },
  {
    date: "Jul 1, 1949",
    pop: "149.19"
  },
  {
    date: "Jul 1, 1948",
    pop: "146.63"
  },
  {
    date: "Jul 1, 1947",
    pop: "144.13"
  },
  {
    date: "Jul 1, 1946",
    pop: "141.39"
  },
  {
    date: "Jul 1, 1945",
    pop: "139.93"
  },
  {
    date: "Jul 1, 1944",
    pop: "138.40"
  },
  {
    date: "Jul 1, 1943",
    pop: "136.74"
  },
  {
    date: "Jul 1, 1942",
    pop: "134.86"
  },
  {
    date: "Jul 1, 1941",
    pop: "133.40"
  },
  {
    date: "Jul 1, 1940",
    pop: "132.12"
  },
  {
    date: "Jul 1, 1939",
    pop: "130.88"
  },
  {
    date: "Jul 1, 1938",
    pop: "129.82"
  },
  {
    date: "Jul 1, 1937",
    pop: "128.82"
  },
  {
    date: "Jul 1, 1936",
    pop: "128.05"
  },
  {
    date: "Jul 1, 1935",
    pop: "127.25"
  },
  {
    date: "Jul 1, 1934",
    pop: "126.37"
  },
  {
    date: "Jul 1, 1933",
    pop: "125.58"
  },
  {
    date: "Jul 1, 1932",
    pop: "124.84"
  },
  {
    date: "Jul 1, 1931",
    pop: "124.04"
  },
  {
    date: "Jul 1, 1930",
    pop: "123.08"
  },
  {
    date: "Jul 1, 1929",
    pop: "121.77"
  },
  {
    date: "Jul 1, 1928",
    pop: "120.51"
  },
  {
    date: "Jul 1, 2020",
    pop: "329.88"
  },
  {
    date: "Jul 1, 2019",
    pop: "328.24"
  },
  {
    date: "Jul 1, 2018",
    pop: "326.69"
  },
  {
    date: "Jul 1, 2017",
    pop: "324.99"
  },
  {
    date: "Jul 1, 2016",
    pop: "322.94"
  },
  {
    date: "Jul 1, 2015",
    pop: "320.64"
  },
  {
    date: "Jul 1, 2014",
    pop: "318.30"
  },
  {
    date: "Jul 1, 2013",
    pop: "315.99"
  },
  {
    date: "Jul 1, 2012",
    pop: "313.83"
  },
  {
    date: "Jul 1, 2011",
    pop: "311.56"
  },
  {
    date: "Jul 1, 2010",
    pop: "309.32"
  },
  {
    date: "Jul 1, 2009",
    pop: "306.77"
  },
  {
    date: "Jul 1, 2008",
    pop: "304.09"
  },
  {
    date: "Jul 1, 2007",
    pop: "301.23"
  },
  {
    date: "Jul 1, 2006",
    pop: "298.38"
  },
  {
    date: "Jul 1, 2005",
    pop: "295.52"
  },
  {
    date: "Jul 1, 2004",
    pop: "292.81"
  },
  {
    date: "Jul 1, 2003",
    pop: "290.11"
  },
  {
    date: "Jul 1, 2002",
    pop: "287.63"
  },
  {
    date: "Jul 1, 2001",
    pop: "284.97"
  },
  {
    date: "Jul 1, 2000",
    pop: "282.16"
  },
  {
    date: "Jul 1, 1999",
    pop: "279.04"
  },
  {
    date: "Jul 1, 1998",
    pop: "275.85"
  },
  {
    date: "Jul 1, 1997",
    pop: "272.65"
  },
  {
    date: "Jul 1, 1996",
    pop: "269.39"
  },
  {
    date: "Jul 1, 1995",
    pop: "266.28"
  },
  {
    date: "Jul 1, 1994",
    pop: "263.13"
  },
  {
    date: "Jul 1, 1993",
    pop: "259.92"
  },
  {
    date: "Jul 1, 1992",
    pop: "256.51"
  },
  {
    date: "Jul 1, 1991",
    pop: "252.98"
  },
  {
    date: "Jul 1, 1990",
    pop: "249.62"
  },
  {
    date: "Jul 1, 1989",
    pop: "246.82"
  },
  {
    date: "Jul 1, 1988",
    pop: "244.50"
  },
  {
    date: "Jul 1, 1987",
    pop: "242.29"
  },
  {
    date: "Jul 1, 1986",
    pop: "240.13"
  },
  {
    date: "Jul 1, 1985",
    pop: "237.92"
  },
  {
    date: "Jul 1, 1984",
    pop: "235.82"
  },
  {
    date: "Jul 1, 1983",
    pop: "233.79"
  },
  {
    date: "Jul 1, 1982",
    pop: "231.66"
  },
  {
    date: "Jul 1, 1981",
    pop: "229.47"
  },
  {
    date: "Jul 1, 1980",
    pop: "227.22"
  },
  {
    date: "Jul 1, 1979",
    pop: "225.06"
  },
  {
    date: "Jul 1, 1978",
    pop: "222.58"
  },
  {
    date: "Jul 1, 1977",
    pop: "220.24"
  },
  {
    date: "Jul 1, 1976",
    pop: "218.04"
  },
  {
    date: "Jul 1, 1975",
    pop: "215.97"
  },
  {
    date: "Jul 1, 1974",
    pop: "213.85"
  },
  {
    date: "Jul 1, 1973",
    pop: "211.91"
  },
  {
    date: "Jul 1, 1972",
    pop: "209.90"
  },
  {
    date: "Jul 1, 1971",
    pop: "207.66"
  },
  {
    date: "Jul 1, 1970",
    pop: "205.05"
  },
  {
    date: "Jul 1, 1969",
    pop: "202.68"
  },
  {
    date: "Jul 1, 1968",
    pop: "200.71"
  },
  {
    date: "Jul 1, 1967",
    pop: "198.71"
  },
  {
    date: "Jul 1, 1966",
    pop: "196.56"
  },
  {
    date: "Jul 1, 1965",
    pop: "194.30"
  },
  {
    date: "Jul 1, 1964",
    pop: "191.89"
  },
  {
    date: "Jul 1, 1963",
    pop: "189.24"
  },
  {
    date: "Jul 1, 1962",
    pop: "186.54"
  },
  {
    date: "Jul 1, 1961",
    pop: "183.69"
  },
  {
    date: "Jul 1, 1960",
    pop: "180.67"
  },
  {
    date: "Jul 1, 1959",
    pop: "177.83"
  },
  {
    date: "Jul 1, 1958",
    pop: "174.88"
  },
  {
    date: "Jul 1, 1957",
    pop: "171.98"
  },
  {
    date: "Jul 1, 1956",
    pop: "168.90"
  },
  {
    date: "Jul 1, 1955",
    pop: "165.93"
  },
  {
    date: "Jul 1, 1954",
    pop: "163.03"
  },
  {
    date: "Jul 1, 1953",
    pop: "160.18"
  },
  {
    date: "Jul 1, 1952",
    pop: "157.55"
  },
  {
    date: "Jul 1, 1951",
    pop: "154.88"
  },
  {
    date: "Jul 1, 1950",
    pop: "152.27"
  },
  {
    date: "Jul 1, 1949",
    pop: "149.19"
  },
  {
    date: "Jul 1, 1948",
    pop: "146.63"
  },
  {
    date: "Jul 1, 1947",
    pop: "144.13"
  },
  {
    date: "Jul 1, 1946",
    pop: "141.39"
  },
  {
    date: "Jul 1, 1945",
    pop: "139.93"
  },
  {
    date: "Jul 1, 1944",
    pop: "138.40"
  },
  {
    date: "Jul 1, 1943",
    pop: "136.74"
  },
  {
    date: "Jul 1, 1942",
    pop: "134.86"
  },
  {
    date: "Jul 1, 1941",
    pop: "133.40"
  },
  {
    date: "Jul 1, 1940",
    pop: "132.12"
  },
  {
    date: "Jul 1, 1939",
    pop: "130.88"
  },
  {
    date: "Jul 1, 1938",
    pop: "129.82"
  },
  {
    date: "Jul 1, 1937",
    pop: "128.82"
  },
  {
    date: "Jul 1, 1936",
    pop: "128.05"
  },
  {
    date: "Jul 1, 1935",
    pop: "127.25"
  },
  {
    date: "Jul 1, 1934",
    pop: "126.37"
  },
  {
    date: "Jul 1, 1933",
    pop: "125.58"
  },
  {
    date: "Jul 1, 1932",
    pop: "124.84"
  },
  {
    date: "Jul 1, 1931",
    pop: "124.04"
  },
  {
    date: "Jul 1, 1930",
    pop: "123.08"
  },
  {
    date: "Jul 1, 1929",
    pop: "121.77"
  },
  {
    date: "Jul 1, 1928",
    pop: "120.51"
  }
];
const historicaldata = [
  {
    year: 1928,
    top500PublicValueNetYear: 43.81,
    tBill3MoValueNetYear: 3.08,
    tBondValueNetYear: 0.84,
    corpBondBaaValueNetYear: 3.22,
    top500PublicValueLastTrade: 143.81,
    tBill3MoValueLastTrade: 103.08,
    tBondValueLastTrade: 100.84,
    corpBondBaaValueLastTrade: 103.22
  },
  {
    year: 1929,
    top500PublicValueNetYear: -8.3,
    tBill3MoValueNetYear: 3.16,
    tBondValueNetYear: 4.2,
    corpBondBaaValueNetYear: 3.02,
    top500PublicValueLastTrade: 131.88,
    tBill3MoValueLastTrade: 106.34,
    tBondValueLastTrade: 105.07,
    corpBondBaaValueLastTrade: 106.33
  },
  {
    year: 1930,
    top500PublicValueNetYear: -25.12,
    tBill3MoValueNetYear: 4.55,
    tBondValueNetYear: 4.54,
    corpBondBaaValueNetYear: 0.54,
    top500PublicValueLastTrade: 98.75,
    tBill3MoValueLastTrade: 111.18,
    tBondValueLastTrade: 109.85,
    corpBondBaaValueLastTrade: 106.91
  },
  {
    year: 1931,
    top500PublicValueNetYear: -43.84,
    tBill3MoValueNetYear: 2.31,
    tBondValueNetYear: -2.56,
    corpBondBaaValueNetYear: -15.68,
    top500PublicValueLastTrade: 55.46,
    tBill3MoValueLastTrade: 113.74,
    tBondValueLastTrade: 107.03,
    corpBondBaaValueLastTrade: 90.14
  },
  {
    year: 1932,
    top500PublicValueNetYear: -8.64,
    tBill3MoValueNetYear: 1.07,
    tBondValueNetYear: 8.79,
    corpBondBaaValueNetYear: 23.59,
    top500PublicValueLastTrade: 50.66,
    tBill3MoValueLastTrade: 114.96,
    tBondValueLastTrade: 116.44,
    corpBondBaaValueLastTrade: 111.41
  },
  {
    year: 1933,
    top500PublicValueNetYear: 49.98,
    tBill3MoValueNetYear: 0.96,
    tBondValueNetYear: 1.86,
    corpBondBaaValueNetYear: 12.97,
    top500PublicValueLastTrade: 75.99,
    tBill3MoValueLastTrade: 116.06,
    tBondValueLastTrade: 118.6,
    corpBondBaaValueLastTrade: 125.86
  },
  {
    year: 1934,
    top500PublicValueNetYear: -1.19,
    tBill3MoValueNetYear: 0.28,
    tBondValueNetYear: 7.96,
    corpBondBaaValueNetYear: 18.82,
    top500PublicValueLastTrade: 75.09,
    tBill3MoValueLastTrade: 116.39,
    tBondValueLastTrade: 128.05,
    corpBondBaaValueLastTrade: 149.54
  },
  {
    year: 1935,
    top500PublicValueNetYear: 46.74,
    tBill3MoValueNetYear: 0.17,
    tBondValueNetYear: 4.47,
    corpBondBaaValueNetYear: 13.31,
    top500PublicValueLastTrade: 110.18,
    tBill3MoValueLastTrade: 116.58,
    tBondValueLastTrade: 133.78,
    corpBondBaaValueLastTrade: 169.44
  },
  {
    year: 1936,
    top500PublicValueNetYear: 31.94,
    tBill3MoValueNetYear: 0.17,
    tBondValueNetYear: 5.02,
    corpBondBaaValueNetYear: 11.38,
    top500PublicValueLastTrade: 145.38,
    tBill3MoValueLastTrade: 116.78,
    tBondValueLastTrade: 140.49,
    corpBondBaaValueLastTrade: 188.73
  },
  {
    year: 1937,
    top500PublicValueNetYear: -35.34,
    tBill3MoValueNetYear: 0.28,
    tBondValueNetYear: 1.38,
    corpBondBaaValueNetYear: -4.42,
    top500PublicValueLastTrade: 94.0,
    tBill3MoValueLastTrade: 117.11,
    tBondValueLastTrade: 142.43,
    corpBondBaaValueLastTrade: 180.39
  },
  {
    year: 1938,
    top500PublicValueNetYear: 29.28,
    tBill3MoValueNetYear: 0.07,
    tBondValueNetYear: 4.21,
    corpBondBaaValueNetYear: 9.24,
    top500PublicValueLastTrade: 121.53,
    tBill3MoValueLastTrade: 117.18,
    tBondValueLastTrade: 148.43,
    corpBondBaaValueLastTrade: 197.05
  },
  {
    year: 1939,
    top500PublicValueNetYear: -1.1,
    tBill3MoValueNetYear: 0.05,
    tBondValueNetYear: 4.41,
    corpBondBaaValueNetYear: 7.98,
    top500PublicValueLastTrade: 120.2,
    tBill3MoValueLastTrade: 117.24,
    tBondValueLastTrade: 154.98,
    corpBondBaaValueLastTrade: 212.78
  },
  {
    year: 1940,
    top500PublicValueNetYear: -10.67,
    tBill3MoValueNetYear: 0.04,
    tBondValueNetYear: 5.4,
    corpBondBaaValueNetYear: 8.65,
    top500PublicValueLastTrade: 107.37,
    tBill3MoValueLastTrade: 117.28,
    tBondValueLastTrade: 163.35,
    corpBondBaaValueLastTrade: 231.18
  },
  {
    year: 1941,
    top500PublicValueNetYear: -12.77,
    tBill3MoValueNetYear: 0.13,
    tBondValueNetYear: -2.02,
    corpBondBaaValueNetYear: 5.01,
    top500PublicValueLastTrade: 93.66,
    tBill3MoValueLastTrade: 117.43,
    tBondValueLastTrade: 160.04,
    corpBondBaaValueLastTrade: 242.76
  },
  {
    year: 1942,
    top500PublicValueNetYear: 19.17,
    tBill3MoValueNetYear: 0.34,
    tBondValueNetYear: 2.29,
    corpBondBaaValueNetYear: 5.18,
    top500PublicValueLastTrade: 111.61,
    tBill3MoValueLastTrade: 117.83,
    tBondValueLastTrade: 163.72,
    corpBondBaaValueLastTrade: 255.33
  },
  {
    year: 1943,
    top500PublicValueNetYear: 25.06,
    tBill3MoValueNetYear: 0.38,
    tBondValueNetYear: 2.49,
    corpBondBaaValueNetYear: 8.04,
    top500PublicValueLastTrade: 139.59,
    tBill3MoValueLastTrade: 118.28,
    tBondValueLastTrade: 167.79,
    corpBondBaaValueLastTrade: 275.88
  },
  {
    year: 1944,
    top500PublicValueNetYear: 19.03,
    tBill3MoValueNetYear: 0.38,
    tBondValueNetYear: 2.58,
    corpBondBaaValueNetYear: 6.57,
    top500PublicValueLastTrade: 166.15,
    tBill3MoValueLastTrade: 118.73,
    tBondValueLastTrade: 172.12,
    corpBondBaaValueLastTrade: 293.99
  },
  {
    year: 1945,
    top500PublicValueNetYear: 35.82,
    tBill3MoValueNetYear: 0.38,
    tBondValueNetYear: 3.8,
    corpBondBaaValueNetYear: 6.8,
    top500PublicValueLastTrade: 225.67,
    tBill3MoValueLastTrade: 119.18,
    tBondValueLastTrade: 178.67,
    corpBondBaaValueLastTrade: 313.98
  },
  {
    year: 1946,
    top500PublicValueNetYear: -8.43,
    tBill3MoValueNetYear: 0.38,
    tBondValueNetYear: 3.13,
    corpBondBaaValueNetYear: 2.51,
    top500PublicValueLastTrade: 206.65,
    tBill3MoValueLastTrade: 119.63,
    tBondValueLastTrade: 184.26,
    corpBondBaaValueLastTrade: 321.85
  },
  {
    year: 1947,
    top500PublicValueNetYear: 5.2,
    tBill3MoValueNetYear: 0.6,
    tBondValueNetYear: 0.92,
    corpBondBaaValueNetYear: 0.26,
    top500PublicValueLastTrade: 217.39,
    tBill3MoValueLastTrade: 120.35,
    tBondValueLastTrade: 185.95,
    corpBondBaaValueLastTrade: 322.7
  },
  {
    year: 1948,
    top500PublicValueNetYear: 5.7,
    tBill3MoValueNetYear: 1.05,
    tBondValueNetYear: 1.95,
    corpBondBaaValueNetYear: 3.44,
    top500PublicValueLastTrade: 229.79,
    tBill3MoValueLastTrade: 121.61,
    tBondValueLastTrade: 189.58,
    corpBondBaaValueLastTrade: 333.79
  },
  {
    year: 1949,
    top500PublicValueNetYear: 18.3,
    tBill3MoValueNetYear: 1.12,
    tBondValueNetYear: 4.66,
    corpBondBaaValueNetYear: 5.38,
    top500PublicValueLastTrade: 271.85,
    tBill3MoValueLastTrade: 122.96,
    tBondValueLastTrade: 198.42,
    corpBondBaaValueLastTrade: 351.74
  },
  {
    year: 1950,
    top500PublicValueNetYear: 30.81,
    tBill3MoValueNetYear: 1.2,
    tBondValueNetYear: 0.43,
    corpBondBaaValueNetYear: 4.24,
    top500PublicValueLastTrade: 355.6,
    tBill3MoValueLastTrade: 124.44,
    tBondValueLastTrade: 199.27,
    corpBondBaaValueLastTrade: 366.65
  },
  {
    year: 1951,
    top500PublicValueNetYear: 23.68,
    tBill3MoValueNetYear: 1.52,
    tBondValueNetYear: -0.3,
    corpBondBaaValueNetYear: -0.19,
    top500PublicValueLastTrade: 439.8,
    tBill3MoValueLastTrade: 126.33,
    tBondValueLastTrade: 198.68,
    corpBondBaaValueLastTrade: 365.95
  },
  {
    year: 1952,
    top500PublicValueNetYear: 18.15,
    tBill3MoValueNetYear: 1.72,
    tBondValueNetYear: 2.27,
    corpBondBaaValueNetYear: 4.44,
    top500PublicValueLastTrade: 519.62,
    tBill3MoValueLastTrade: 128.51,
    tBondValueLastTrade: 203.19,
    corpBondBaaValueLastTrade: 382.2
  },
  {
    year: 1953,
    top500PublicValueNetYear: -1.21,
    tBill3MoValueNetYear: 1.89,
    tBondValueNetYear: 4.14,
    corpBondBaaValueNetYear: 1.62,
    top500PublicValueLastTrade: 513.35,
    tBill3MoValueLastTrade: 130.94,
    tBondValueLastTrade: 211.61,
    corpBondBaaValueLastTrade: 388.39
  },
  {
    year: 1954,
    top500PublicValueNetYear: 52.56,
    tBill3MoValueNetYear: 0.94,
    tBondValueNetYear: 3.29,
    corpBondBaaValueNetYear: 6.16,
    top500PublicValueLastTrade: 783.18,
    tBill3MoValueLastTrade: 132.17,
    tBondValueLastTrade: 218.57,
    corpBondBaaValueLastTrade: 412.31
  },
  {
    year: 1955,
    top500PublicValueNetYear: 32.6,
    tBill3MoValueNetYear: 1.73,
    tBondValueNetYear: -1.34,
    corpBondBaaValueNetYear: 2.04,
    top500PublicValueLastTrade: 1038.47,
    tBill3MoValueLastTrade: 134.45,
    tBondValueLastTrade: 215.65,
    corpBondBaaValueLastTrade: 420.74
  },
  {
    year: 1956,
    top500PublicValueNetYear: 7.44,
    tBill3MoValueNetYear: 2.63,
    tBondValueNetYear: -2.26,
    corpBondBaaValueNetYear: -2.35,
    top500PublicValueLastTrade: 1115.73,
    tBill3MoValueLastTrade: 137.98,
    tBondValueLastTrade: 210.79,
    corpBondBaaValueLastTrade: 410.84
  },
  {
    year: 1957,
    top500PublicValueNetYear: -10.46,
    tBill3MoValueNetYear: 3.23,
    tBondValueNetYear: 6.8,
    corpBondBaaValueNetYear: -0.72,
    top500PublicValueLastTrade: 999.05,
    tBill3MoValueLastTrade: 142.43,
    tBondValueLastTrade: 225.11,
    corpBondBaaValueLastTrade: 407.89
  },
  {
    year: 1958,
    top500PublicValueNetYear: 43.72,
    tBill3MoValueNetYear: 1.77,
    tBondValueNetYear: -2.1,
    corpBondBaaValueNetYear: 6.43,
    top500PublicValueLastTrade: 1435.84,
    tBill3MoValueLastTrade: 144.95,
    tBondValueLastTrade: 220.39,
    corpBondBaaValueLastTrade: 434.11
  },
  {
    year: 1959,
    top500PublicValueNetYear: 12.06,
    tBill3MoValueNetYear: 3.39,
    tBondValueNetYear: -2.65,
    corpBondBaaValueNetYear: 1.57,
    top500PublicValueLastTrade: 1608.95,
    tBill3MoValueLastTrade: 149.86,
    tBondValueLastTrade: 214.56,
    corpBondBaaValueLastTrade: 440.95
  },
  {
    year: 1960,
    top500PublicValueNetYear: 0.34,
    tBill3MoValueNetYear: 2.88,
    tBondValueNetYear: 11.64,
    corpBondBaaValueNetYear: 6.66,
    top500PublicValueLastTrade: 1614.37,
    tBill3MoValueLastTrade: 154.18,
    tBondValueLastTrade: 239.53,
    corpBondBaaValueLastTrade: 470.33
  },
  {
    year: 1961,
    top500PublicValueNetYear: 26.64,
    tBill3MoValueNetYear: 2.35,
    tBondValueNetYear: 2.06,
    corpBondBaaValueNetYear: 5.1,
    top500PublicValueLastTrade: 2044.4,
    tBill3MoValueLastTrade: 157.81,
    tBondValueLastTrade: 244.46,
    corpBondBaaValueLastTrade: 494.32
  },
  {
    year: 1962,
    top500PublicValueNetYear: -8.81,
    tBill3MoValueNetYear: 2.77,
    tBondValueNetYear: 5.69,
    corpBondBaaValueNetYear: 6.5,
    top500PublicValueLastTrade: 1864.26,
    tBill3MoValueLastTrade: 162.19,
    tBondValueLastTrade: 258.38,
    corpBondBaaValueLastTrade: 526.43
  },
  {
    year: 1963,
    top500PublicValueNetYear: 22.61,
    tBill3MoValueNetYear: 3.16,
    tBondValueNetYear: 1.68,
    corpBondBaaValueNetYear: 5.46,
    top500PublicValueLastTrade: 2285.8,
    tBill3MoValueLastTrade: 167.31,
    tBondValueLastTrade: 262.74,
    corpBondBaaValueLastTrade: 555.19
  },
  {
    year: 1964,
    top500PublicValueNetYear: 16.42,
    tBill3MoValueNetYear: 3.55,
    tBondValueNetYear: 3.73,
    corpBondBaaValueNetYear: 5.16,
    top500PublicValueLastTrade: 2661.02,
    tBill3MoValueLastTrade: 173.25,
    tBondValueLastTrade: 272.53,
    corpBondBaaValueLastTrade: 583.85
  },
  {
    year: 1965,
    top500PublicValueNetYear: 12.4,
    tBill3MoValueNetYear: 3.95,
    tBondValueNetYear: 0.72,
    corpBondBaaValueNetYear: 3.19,
    top500PublicValueLastTrade: 2990.97,
    tBill3MoValueLastTrade: 180.09,
    tBondValueLastTrade: 274.49,
    corpBondBaaValueLastTrade: 602.47
  },
  {
    year: 1966,
    top500PublicValueNetYear: -9.97,
    tBill3MoValueNetYear: 4.86,
    tBondValueNetYear: 2.91,
    corpBondBaaValueNetYear: -3.45,
    top500PublicValueLastTrade: 2692.74,
    tBill3MoValueLastTrade: 188.84,
    tBondValueLastTrade: 282.47,
    corpBondBaaValueLastTrade: 581.72
  },
  {
    year: 1967,
    top500PublicValueNetYear: 23.8,
    tBill3MoValueNetYear: 4.31,
    tBondValueNetYear: -1.58,
    corpBondBaaValueNetYear: 0.9,
    top500PublicValueLastTrade: 3333.69,
    tBill3MoValueLastTrade: 196.98,
    tBondValueLastTrade: 278.01,
    corpBondBaaValueLastTrade: 586.92
  },
  {
    year: 1968,
    top500PublicValueNetYear: 10.81,
    tBill3MoValueNetYear: 5.34,
    tBondValueNetYear: 3.27,
    corpBondBaaValueNetYear: 4.85,
    top500PublicValueLastTrade: 3694.23,
    tBill3MoValueLastTrade: 207.49,
    tBondValueLastTrade: 287.11,
    corpBondBaaValueLastTrade: 615.36
  },
  {
    year: 1969,
    top500PublicValueNetYear: -8.24,
    tBill3MoValueNetYear: 6.67,
    tBondValueNetYear: -5.01,
    corpBondBaaValueNetYear: -2.03,
    top500PublicValueLastTrade: 3389.77,
    tBill3MoValueLastTrade: 221.32,
    tBondValueLastTrade: 272.71,
    corpBondBaaValueLastTrade: 602.9
  },
  {
    year: 1970,
    top500PublicValueNetYear: 3.56,
    tBill3MoValueNetYear: 6.39,
    tBondValueNetYear: 16.75,
    corpBondBaaValueNetYear: 5.65,
    top500PublicValueLastTrade: 3510.49,
    tBill3MoValueLastTrade: 235.47,
    tBondValueLastTrade: 318.41,
    corpBondBaaValueLastTrade: 636.96
  },
  {
    year: 1971,
    top500PublicValueNetYear: 14.22,
    tBill3MoValueNetYear: 4.33,
    tBondValueNetYear: 9.79,
    corpBondBaaValueNetYear: 14.0,
    top500PublicValueLastTrade: 4009.72,
    tBill3MoValueLastTrade: 245.67,
    tBondValueLastTrade: 349.57,
    corpBondBaaValueLastTrade: 726.14
  },
  {
    year: 1972,
    top500PublicValueNetYear: 18.76,
    tBill3MoValueNetYear: 4.07,
    tBondValueNetYear: 2.82,
    corpBondBaaValueNetYear: 11.41,
    top500PublicValueLastTrade: 4761.76,
    tBill3MoValueLastTrade: 255.68,
    tBondValueLastTrade: 359.42,
    corpBondBaaValueLastTrade: 808.99
  },
  {
    year: 1973,
    top500PublicValueNetYear: -14.31,
    tBill3MoValueNetYear: 7.03,
    tBondValueNetYear: 3.66,
    corpBondBaaValueNetYear: 4.32,
    top500PublicValueLastTrade: 4080.44,
    tBill3MoValueLastTrade: 273.66,
    tBondValueLastTrade: 372.57,
    corpBondBaaValueLastTrade: 843.92
  },
  {
    year: 1974,
    top500PublicValueNetYear: -25.9,
    tBill3MoValueNetYear: 7.83,
    tBondValueNetYear: 1.99,
    corpBondBaaValueNetYear: -4.38,
    top500PublicValueLastTrade: 3023.54,
    tBill3MoValueLastTrade: 295.08,
    tBondValueLastTrade: 379.98,
    corpBondBaaValueLastTrade: 806.95
  },
  {
    year: 1975,
    top500PublicValueNetYear: 37.0,
    tBill3MoValueNetYear: 5.78,
    tBondValueNetYear: 3.61,
    corpBondBaaValueNetYear: 11.05,
    top500PublicValueLastTrade: 4142.1,
    tBill3MoValueLastTrade: 312.12,
    tBondValueLastTrade: 393.68,
    corpBondBaaValueLastTrade: 896.12
  },
  {
    year: 1976,
    top500PublicValueNetYear: 23.83,
    tBill3MoValueNetYear: 4.97,
    tBondValueNetYear: 15.98,
    corpBondBaaValueNetYear: 19.75,
    top500PublicValueLastTrade: 5129.2,
    tBill3MoValueLastTrade: 327.65,
    tBondValueLastTrade: 456.61,
    corpBondBaaValueLastTrade: 1073.13
  },
  {
    year: 1977,
    top500PublicValueNetYear: -6.98,
    tBill3MoValueNetYear: 5.27,
    tBondValueNetYear: 1.29,
    corpBondBaaValueNetYear: 9.95,
    top500PublicValueLastTrade: 4771.2,
    tBill3MoValueLastTrade: 344.91,
    tBondValueLastTrade: 462.5,
    corpBondBaaValueLastTrade: 1179.96
  },
  {
    year: 1978,
    top500PublicValueNetYear: 6.51,
    tBill3MoValueNetYear: 7.19,
    tBondValueNetYear: -0.78,
    corpBondBaaValueNetYear: 3.14,
    top500PublicValueLastTrade: 5081.77,
    tBill3MoValueLastTrade: 369.71,
    tBondValueLastTrade: 458.9,
    corpBondBaaValueLastTrade: 1216.98
  },
  {
    year: 1979,
    top500PublicValueNetYear: 18.52,
    tBill3MoValueNetYear: 10.07,
    tBondValueNetYear: 0.67,
    corpBondBaaValueNetYear: -2.01,
    top500PublicValueLastTrade: 6022.89,
    tBill3MoValueLastTrade: 406.93,
    tBondValueLastTrade: 461.98,
    corpBondBaaValueLastTrade: 1192.53
  },
  {
    year: 1980,
    top500PublicValueNetYear: 31.74,
    tBill3MoValueNetYear: 11.43,
    tBondValueNetYear: -2.99,
    corpBondBaaValueNetYear: -3.32,
    top500PublicValueLastTrade: 7934.26,
    tBill3MoValueLastTrade: 453.46,
    tBondValueLastTrade: 448.17,
    corpBondBaaValueLastTrade: 1152.99
  },
  {
    year: 1981,
    top500PublicValueNetYear: -4.7,
    tBill3MoValueNetYear: 14.03,
    tBondValueNetYear: 8.2,
    corpBondBaaValueNetYear: 8.46,
    top500PublicValueLastTrade: 7561.16,
    tBill3MoValueLastTrade: 517.06,
    tBondValueLastTrade: 484.91,
    corpBondBaaValueLastTrade: 1250.56
  },
  {
    year: 1982,
    top500PublicValueNetYear: 20.42,
    tBill3MoValueNetYear: 10.61,
    tBondValueNetYear: 32.81,
    corpBondBaaValueNetYear: 29.05,
    top500PublicValueLastTrade: 9105.08,
    tBill3MoValueLastTrade: 571.94,
    tBondValueLastTrade: 644.04,
    corpBondBaaValueLastTrade: 1613.88
  },
  {
    year: 1983,
    top500PublicValueNetYear: 22.34,
    tBill3MoValueNetYear: 8.61,
    tBondValueNetYear: 3.2,
    corpBondBaaValueNetYear: 16.19,
    top500PublicValueLastTrade: 11138.9,
    tBill3MoValueLastTrade: 621.19,
    tBondValueLastTrade: 664.65,
    corpBondBaaValueLastTrade: 1875.23
  },
  {
    year: 1984,
    top500PublicValueNetYear: 6.15,
    tBill3MoValueNetYear: 9.52,
    tBondValueNetYear: 13.73,
    corpBondBaaValueNetYear: 15.62,
    top500PublicValueLastTrade: 11823.51,
    tBill3MoValueLastTrade: 680.35,
    tBondValueLastTrade: 755.92,
    corpBondBaaValueLastTrade: 2168.13
  },
  {
    year: 1985,
    top500PublicValueNetYear: 31.24,
    tBill3MoValueNetYear: 7.48,
    tBondValueNetYear: 25.71,
    corpBondBaaValueNetYear: 23.86,
    top500PublicValueLastTrade: 15516.6,
    tBill3MoValueLastTrade: 731.23,
    tBondValueLastTrade: 950.29,
    corpBondBaaValueLastTrade: 2685.5
  },
  {
    year: 1986,
    top500PublicValueNetYear: 18.49,
    tBill3MoValueNetYear: 5.98,
    tBondValueNetYear: 24.28,
    corpBondBaaValueNetYear: 21.49,
    top500PublicValueLastTrade: 18386.33,
    tBill3MoValueLastTrade: 774.95,
    tBondValueLastTrade: 1181.06,
    corpBondBaaValueLastTrade: 3262.5
  },
  {
    year: 1987,
    top500PublicValueNetYear: 5.81,
    tBill3MoValueNetYear: 5.78,
    tBondValueNetYear: -4.96,
    corpBondBaaValueNetYear: 2.29,
    top500PublicValueLastTrade: 19455.08,
    tBill3MoValueLastTrade: 819.7,
    tBondValueLastTrade: 1122.47,
    corpBondBaaValueLastTrade: 3337.2
  },
  {
    year: 1988,
    top500PublicValueNetYear: 16.54,
    tBill3MoValueNetYear: 6.67,
    tBondValueNetYear: 8.22,
    corpBondBaaValueNetYear: 15.12,
    top500PublicValueLastTrade: 22672.4,
    tBill3MoValueLastTrade: 874.35,
    tBondValueLastTrade: 1214.78,
    corpBondBaaValueLastTrade: 3841.62
  },
  {
    year: 1989,
    top500PublicValueNetYear: 31.48,
    tBill3MoValueNetYear: 8.11,
    tBondValueNetYear: 17.69,
    corpBondBaaValueNetYear: 15.79,
    top500PublicValueLastTrade: 29808.58,
    tBill3MoValueLastTrade: 945.28,
    tBondValueLastTrade: 1429.72,
    corpBondBaaValueLastTrade: 4448.2
  },
  {
    year: 1990,
    top500PublicValueNetYear: -3.06,
    tBill3MoValueNetYear: 7.49,
    tBondValueNetYear: 6.24,
    corpBondBaaValueNetYear: 6.14,
    top500PublicValueLastTrade: 28895.11,
    tBill3MoValueLastTrade: 1016.11,
    tBondValueLastTrade: 1518.87,
    corpBondBaaValueLastTrade: 4721.33
  },
  {
    year: 1991,
    top500PublicValueNetYear: 30.23,
    tBill3MoValueNetYear: 5.38,
    tBondValueNetYear: 15.0,
    corpBondBaaValueNetYear: 17.85,
    top500PublicValueLastTrade: 37631.51,
    tBill3MoValueLastTrade: 1070.73,
    tBondValueLastTrade: 1746.77,
    corpBondBaaValueLastTrade: 5564.25
  },
  {
    year: 1992,
    top500PublicValueNetYear: 7.49,
    tBill3MoValueNetYear: 3.43,
    tBondValueNetYear: 9.36,
    corpBondBaaValueNetYear: 12.17,
    top500PublicValueLastTrade: 40451.51,
    tBill3MoValueLastTrade: 1107.47,
    tBondValueLastTrade: 1910.3,
    corpBondBaaValueLastTrade: 6241.54
  },
  {
    year: 1993,
    top500PublicValueNetYear: 9.97,
    tBill3MoValueNetYear: 3.0,
    tBondValueNetYear: 14.21,
    corpBondBaaValueNetYear: 16.43,
    top500PublicValueLastTrade: 44483.33,
    tBill3MoValueLastTrade: 1140.67,
    tBondValueLastTrade: 2181.77,
    corpBondBaaValueLastTrade: 7267.12
  },
  {
    year: 1994,
    top500PublicValueNetYear: 1.33,
    tBill3MoValueNetYear: 4.25,
    tBondValueNetYear: -8.04,
    corpBondBaaValueNetYear: -1.32,
    top500PublicValueLastTrade: 45073.14,
    tBill3MoValueLastTrade: 1189.11,
    tBondValueLastTrade: 2006.43,
    corpBondBaaValueLastTrade: 7171.25
  },
  {
    year: 1995,
    top500PublicValueNetYear: 37.2,
    tBill3MoValueNetYear: 5.49,
    tBondValueNetYear: 23.48,
    corpBondBaaValueNetYear: 20.16,
    top500PublicValueLastTrade: 61838.19,
    tBill3MoValueLastTrade: 1254.39,
    tBondValueLastTrade: 2477.55,
    corpBondBaaValueLastTrade: 8616.71
  },
  {
    year: 1996,
    top500PublicValueNetYear: 22.68,
    tBill3MoValueNetYear: 5.01,
    tBondValueNetYear: 1.43,
    corpBondBaaValueNetYear: 4.79,
    top500PublicValueLastTrade: 75863.69,
    tBill3MoValueLastTrade: 1317.18,
    tBondValueLastTrade: 2512.94,
    corpBondBaaValueLastTrade: 9029.67
  },
  {
    year: 1997,
    top500PublicValueNetYear: 33.1,
    tBill3MoValueNetYear: 5.06,
    tBondValueNetYear: 9.94,
    corpBondBaaValueNetYear: 11.83,
    top500PublicValueLastTrade: 100977.34,
    tBill3MoValueLastTrade: 1383.84,
    tBondValueLastTrade: 2762.71,
    corpBondBaaValueLastTrade: 10098.32
  },
  {
    year: 1998,
    top500PublicValueNetYear: 28.34,
    tBill3MoValueNetYear: 4.78,
    tBondValueNetYear: 14.92,
    corpBondBaaValueNetYear: 7.95,
    top500PublicValueLastTrade: 129592.25,
    tBill3MoValueLastTrade: 1449.94,
    tBondValueLastTrade: 3174.95,
    corpBondBaaValueLastTrade: 10900.68
  },
  {
    year: 1999,
    top500PublicValueNetYear: 20.89,
    tBill3MoValueNetYear: 4.64,
    tBondValueNetYear: -8.25,
    corpBondBaaValueNetYear: 0.84,
    top500PublicValueLastTrade: 156658.05,
    tBill3MoValueLastTrade: 1517.2,
    tBondValueLastTrade: 2912.88,
    corpBondBaaValueLastTrade: 10992.59
  },
  {
    year: 2000,
    top500PublicValueNetYear: -9.03,
    tBill3MoValueNetYear: 5.82,
    tBondValueNetYear: 16.66,
    corpBondBaaValueNetYear: 9.33,
    top500PublicValueLastTrade: 142508.98,
    tBill3MoValueLastTrade: 1605.45,
    tBondValueLastTrade: 3398.03,
    corpBondBaaValueLastTrade: 12018.16
  },
  {
    year: 2001,
    top500PublicValueNetYear: -11.85,
    tBill3MoValueNetYear: 3.39,
    tBondValueNetYear: 5.57,
    corpBondBaaValueNetYear: 7.82,
    top500PublicValueLastTrade: 125622.01,
    tBill3MoValueLastTrade: 1659.84,
    tBondValueLastTrade: 3587.37,
    corpBondBaaValueLastTrade: 12957.88
  },
  {
    year: 2002,
    top500PublicValueNetYear: -21.97,
    tBill3MoValueNetYear: 1.6,
    tBondValueNetYear: 15.12,
    corpBondBaaValueNetYear: 12.18,
    top500PublicValueLastTrade: 98027.82,
    tBill3MoValueLastTrade: 1686.44,
    tBondValueLastTrade: 4129.65,
    corpBondBaaValueLastTrade: 14535.88
  },
  {
    year: 2003,
    top500PublicValueNetYear: 28.36,
    tBill3MoValueNetYear: 1.01,
    tBondValueNetYear: 0.38,
    corpBondBaaValueNetYear: 13.53,
    top500PublicValueLastTrade: 125824.39,
    tBill3MoValueLastTrade: 1703.49,
    tBondValueLastTrade: 4145.15,
    corpBondBaaValueLastTrade: 16502.87
  },
  {
    year: 2004,
    top500PublicValueNetYear: 10.74,
    tBill3MoValueNetYear: 1.37,
    tBondValueNetYear: 4.49,
    corpBondBaaValueNetYear: 9.89,
    top500PublicValueLastTrade: 139341.42,
    tBill3MoValueLastTrade: 1726.86,
    tBondValueLastTrade: 4331.3,
    corpBondBaaValueLastTrade: 18134.78
  },
  {
    year: 2005,
    top500PublicValueNetYear: 4.83,
    tBill3MoValueNetYear: 3.15,
    tBondValueNetYear: 2.87,
    corpBondBaaValueNetYear: 4.92,
    top500PublicValueLastTrade: 146077.85,
    tBill3MoValueLastTrade: 1781.19,
    tBondValueLastTrade: 4455.5,
    corpBondBaaValueLastTrade: 19026.57
  },
  {
    year: 2006,
    top500PublicValueNetYear: 15.61,
    tBill3MoValueNetYear: 4.73,
    tBondValueNetYear: 1.96,
    corpBondBaaValueNetYear: 7.05,
    top500PublicValueLastTrade: 168884.34,
    tBill3MoValueLastTrade: 1865.39,
    tBondValueLastTrade: 4542.87,
    corpBondBaaValueLastTrade: 20367.63
  },
  {
    year: 2007,
    top500PublicValueNetYear: 5.48,
    tBill3MoValueNetYear: 4.35,
    tBondValueNetYear: 10.21,
    corpBondBaaValueNetYear: 3.15,
    top500PublicValueLastTrade: 178147.2,
    tBill3MoValueLastTrade: 1946.59,
    tBondValueLastTrade: 5006.69,
    corpBondBaaValueLastTrade: 21009.29
  },
  {
    year: 2008,
    top500PublicValueNetYear: -36.55,
    tBill3MoValueNetYear: 1.37,
    tBondValueNetYear: 20.1,
    corpBondBaaValueNetYear: -5.07,
    top500PublicValueLastTrade: 113030.22,
    tBill3MoValueLastTrade: 1973.16,
    tBondValueLastTrade: 6013.1,
    corpBondBaaValueLastTrade: 19945.02
  },
  {
    year: 2009,
    top500PublicValueNetYear: 25.94,
    tBill3MoValueNetYear: 0.15,
    tBondValueNetYear: -11.12,
    corpBondBaaValueNetYear: 23.33,
    top500PublicValueLastTrade: 142344.87,
    tBill3MoValueLastTrade: 1976.12,
    tBondValueLastTrade: 5344.65,
    corpBondBaaValueLastTrade: 24598.1
  },
  {
    year: 2010,
    top500PublicValueNetYear: 14.82,
    tBill3MoValueNetYear: 0.14,
    tBondValueNetYear: 8.46,
    corpBondBaaValueNetYear: 8.35,
    top500PublicValueLastTrade: 163441.94,
    tBill3MoValueLastTrade: 1978.82,
    tBondValueLastTrade: 5796.96,
    corpBondBaaValueLastTrade: 26651.51
  },
  {
    year: 2011,
    top500PublicValueNetYear: 2.1,
    tBill3MoValueNetYear: 0.05,
    tBondValueNetYear: 16.04,
    corpBondBaaValueNetYear: 12.58,
    top500PublicValueLastTrade: 166871.56,
    tBill3MoValueLastTrade: 1979.86,
    tBondValueLastTrade: 6726.52,
    corpBondBaaValueLastTrade: 30005.47
  },
  {
    year: 2012,
    top500PublicValueNetYear: 15.89,
    tBill3MoValueNetYear: 0.09,
    tBondValueNetYear: 2.97,
    corpBondBaaValueNetYear: 10.12,
    top500PublicValueLastTrade: 193388.43,
    tBill3MoValueLastTrade: 1981.56,
    tBondValueLastTrade: 6926.4,
    corpBondBaaValueLastTrade: 33043.43
  },
  {
    year: 2013,
    top500PublicValueNetYear: 32.15,
    tBill3MoValueNetYear: 0.06,
    tBondValueNetYear: -9.1,
    corpBondBaaValueNetYear: -1.06,
    top500PublicValueLastTrade: 255553.31,
    tBill3MoValueLastTrade: 1982.72,
    tBondValueLastTrade: 6295.79,
    corpBondBaaValueLastTrade: 32694.52
  },
  {
    year: 2014,
    top500PublicValueNetYear: 13.52,
    tBill3MoValueNetYear: 0.03,
    tBondValueNetYear: 10.75,
    corpBondBaaValueNetYear: 10.38,
    top500PublicValueLastTrade: 290115.42,
    tBill3MoValueLastTrade: 1983.36,
    tBondValueLastTrade: 6972.34,
    corpBondBaaValueLastTrade: 36089.82
  },
  {
    year: 2015,
    top500PublicValueNetYear: 1.38,
    tBill3MoValueNetYear: 0.05,
    tBondValueNetYear: 1.28,
    corpBondBaaValueNetYear: -0.7,
    top500PublicValueLastTrade: 294115.79,
    tBill3MoValueLastTrade: 1984.4,
    tBondValueLastTrade: 7061.89,
    corpBondBaaValueLastTrade: 35838.08
  },
  {
    year: 2016,
    top500PublicValueNetYear: 11.77,
    tBill3MoValueNetYear: 0.32,
    tBondValueNetYear: 0.69,
    corpBondBaaValueNetYear: 10.37,
    top500PublicValueLastTrade: 328742.28,
    tBill3MoValueLastTrade: 1990.7,
    tBondValueLastTrade: 7110.65,
    corpBondBaaValueLastTrade: 39552.74
  },
  {
    year: 2017,
    top500PublicValueNetYear: 21.61,
    tBill3MoValueNetYear: 0.93,
    tBondValueNetYear: 2.8,
    corpBondBaaValueNetYear: 9.72,
    top500PublicValueLastTrade: 399768.64,
    tBill3MoValueLastTrade: 2009.23,
    tBondValueLastTrade: 7309.87,
    corpBondBaaValueLastTrade: 43398.81
  },
  {
    year: 2018,
    top500PublicValueNetYear: -4.23,
    tBill3MoValueNetYear: 1.94,
    tBondValueNetYear: -0.02,
    corpBondBaaValueNetYear: -2.76,
    top500PublicValueLastTrade: 382870.94,
    tBill3MoValueLastTrade: 2048.2,
    tBondValueLastTrade: 7308.65,
    corpBondBaaValueLastTrade: 42199.86
  },
  {
    year: 2019,
    top500PublicValueNetYear: 31.21,
    tBill3MoValueNetYear: 1.55,
    tBondValueNetYear: 9.64,
    corpBondBaaValueNetYear: 15.33,
    top500PublicValueLastTrade: 502371.39,
    tBill3MoValueLastTrade: 2079.94,
    tBondValueLastTrade: 8012.89,
    corpBondBaaValueLastTrade: 48668.87
  },
  {
    year: 2020,
    top500PublicValueNetYear: 18.01,
    tBill3MoValueNetYear: 0.09,
    tBondValueNetYear: 11.33,
    corpBondBaaValueNetYear: 10.41,
    top500PublicValueLastTrade: 592868.15,
    tBill3MoValueLastTrade: 2081.82,
    tBondValueLastTrade: 8920.9,
    corpBondBaaValueLastTrade: 53736.05
  }
];
/*const employmentdata = [
  {
    date: "Jan 1939",
    emp: "3,988"
  },
  {
    date: "Feb 1939",
    emp: "4,001"
  },
  {
    date: "Mar 1939",
    emp: "4,002"
  },
  {
    date: "Apr 1939",
    emp: "4,002"
  },
  {
    date: "May 1939",
    emp: "4,006"
  },
  {
    date: "Jun 1939",
    emp: "4,003"
  },
  {
    date: "Jul 1939",
    emp: "4,019"
  },
  {
    date: "Aug 1939",
    emp: "4,046"
  },
  {
    date: "Sep 1939",
    emp: "4,076"
  },
  {
    date: "Oct 1939",
    emp: "4,089"
  },
  {
    date: "Nov 1939",
    emp: "4,109"
  },
  {
    date: "Dec 1939",
    emp: "4,134"
  },
  {
    date: "Jan 1940",
    emp: "4,150"
  },
  {
    date: "Feb 1940",
    emp: "4,150"
  },
  {
    date: "Mar 1940",
    emp: "4,151"
  },
  {
    date: "Apr 1940",
    emp: "4,152"
  },
  {
    date: "May 1940",
    emp: "4,172"
  },
  {
    date: "Jun 1940",
    emp: "4,218"
  },
  {
    date: "Jul 1940",
    emp: "4,261"
  },
  {
    date: "Aug 1940",
    emp: "4,282"
  },
  {
    date: "Sep 1940",
    emp: "4,312"
  },
  {
    date: "Oct 1940",
    emp: "4,353"
  },
  {
    date: "Nov 1940",
    emp: "4,396"
  },
  {
    date: "Dec 1940",
    emp: "4,415"
  },
  {
    date: "Jan 1941",
    emp: "4,468"
  },
  {
    date: "Feb 1941",
    emp: "4,504"
  },
  {
    date: "Mar 1941",
    emp: "4,535"
  },
  {
    date: "Apr 1941",
    emp: "4,585"
  },
  {
    date: "May 1941",
    emp: "4,642"
  },
  {
    date: "Jun 1941",
    emp: "4,701"
  },
  {
    date: "Jul 1941",
    emp: "4,750"
  },
  {
    date: "Aug 1941",
    emp: "4,821"
  },
  {
    date: "Sep 1941",
    emp: "4,891"
  },
  {
    date: "Oct 1941",
    emp: "4,907"
  },
  {
    date: "Nov 1941",
    emp: "4,949"
  },
  {
    date: "Dec 1941",
    emp: "4,971"
  },
  {
    date: "Jan 1942",
    emp: "5,089"
  },
  {
    date: "Feb 1942",
    emp: "5,146"
  },
  {
    date: "Mar 1942",
    emp: "5,257"
  },
  {
    date: "Apr 1942",
    emp: "5,357"
  },
  {
    date: "May 1942",
    emp: "5,431"
  },
  {
    date: "Jun 1942",
    emp: "5,510"
  },
  {
    date: "Jul 1942",
    emp: "5,591"
  },
  {
    date: "Aug 1942",
    emp: "5,814"
  },
  {
    date: "Sep 1942",
    emp: "5,866"
  },
  {
    date: "Oct 1942",
    emp: "5,956"
  },
  {
    date: "Nov 1942",
    emp: "6,026"
  },
  {
    date: "Dec 1942",
    emp: "6,072"
  },
  {
    date: "Jan 1943",
    emp: "6,132"
  },
  {
    date: "Feb 1943",
    emp: "6,223"
  },
  {
    date: "Mar 1943",
    emp: "6,257"
  },
  {
    date: "Apr 1943",
    emp: "6,267"
  },
  {
    date: "May 1943",
    emp: "6,281"
  },
  {
    date: "Jun 1943",
    emp: "6,324"
  },
  {
    date: "Jul 1943",
    emp: "6,257"
  },
  {
    date: "Aug 1943",
    emp: "6,151"
  },
  {
    date: "Sep 1943",
    emp: "6,167"
  },
  {
    date: "Oct 1943",
    emp: "6,170"
  },
  {
    date: "Nov 1943",
    emp: "6,179"
  },
  {
    date: "Dec 1943",
    emp: "6,271"
  },
  {
    date: "Jan 1944",
    emp: "6,162"
  },
  {
    date: "Feb 1944",
    emp: "6,129"
  },
  {
    date: "Mar 1944",
    emp: "6,113"
  },
  {
    date: "Apr 1944",
    emp: "6,112"
  },
  {
    date: "May 1944",
    emp: "6,121"
  },
  {
    date: "Jun 1944",
    emp: "6,147"
  },
  {
    date: "Jul 1944",
    emp: "6,190"
  },
  {
    date: "Aug 1944",
    emp: "6,204"
  },
  {
    date: "Sep 1944",
    emp: "6,216"
  },
  {
    date: "Oct 1944",
    emp: "6,223"
  },
  {
    date: "Nov 1944",
    emp: "6,263"
  },
  {
    date: "Dec 1944",
    emp: "6,375"
  },
  {
    date: "Jan 1945",
    emp: "6,254"
  },
  {
    date: "Feb 1945",
    emp: "6,239"
  },
  {
    date: "Mar 1945",
    emp: "6,216"
  },
  {
    date: "Apr 1945",
    emp: "6,185"
  },
  {
    date: "May 1945",
    emp: "6,159"
  },
  {
    date: "Jun 1945",
    emp: "6,181"
  },
  {
    date: "Jul 1945",
    emp: "6,185"
  },
  {
    date: "Aug 1945",
    emp: "6,135"
  },
  {
    date: "Sep 1945",
    emp: "5,942"
  },
  {
    date: "Oct 1945",
    emp: "5,854"
  },
  {
    date: "Nov 1945",
    emp: "5,830"
  },
  {
    date: "Dec 1945",
    emp: "5,811"
  },
  {
    date: "Jan 1946",
    emp: "5,785"
  },
  {
    date: "Feb 1946",
    emp: "5,778"
  },
  {
    date: "Mar 1946",
    emp: "5,758"
  },
  {
    date: "Apr 1946",
    emp: "5,761"
  },
  {
    date: "May 1946",
    emp: "5,732"
  },
  {
    date: "Jun 1946",
    emp: "5,680"
  },
  {
    date: "Jul 1946",
    emp: "5,682"
  },
  {
    date: "Aug 1946",
    emp: "5,681"
  },
  {
    date: "Sep 1946",
    emp: "5,669"
  },
  {
    date: "Oct 1946",
    emp: "5,664"
  },
  {
    date: "Nov 1946",
    emp: "5,639"
  },
  {
    date: "Dec 1946",
    emp: "5,628"
  },
  {
    date: "Jan 1947",
    emp: "5,619"
  },
  {
    date: "Feb 1947",
    emp: "5,606"
  },
  {
    date: "Mar 1947",
    emp: "5,588"
  },
  {
    date: "Apr 1947",
    emp: "5,558"
  },
  {
    date: "May 1947",
    emp: "5,551"
  },
  {
    date: "Jun 1947",
    emp: "5,524"
  },
  {
    date: "Jul 1947",
    emp: "5,524"
  },
  {
    date: "Aug 1947",
    emp: "5,519"
  },
  {
    date: "Sep 1947",
    emp: "5,539"
  },
  {
    date: "Oct 1947",
    emp: "5,566"
  },
  {
    date: "Nov 1947",
    emp: "5,585"
  },
  {
    date: "Dec 1947",
    emp: "5,605"
  },
  {
    date: "Jan 1948",
    emp: "5,624"
  },
  {
    date: "Feb 1948",
    emp: "5,615"
  },
  {
    date: "Mar 1948",
    emp: "5,623"
  },
  {
    date: "Apr 1948",
    emp: "5,643"
  },
  {
    date: "May 1948",
    emp: "5,681"
  },
  {
    date: "Jun 1948",
    emp: "5,736"
  },
  {
    date: "Jul 1948",
    emp: "5,774"
  },
  {
    date: "Aug 1948",
    emp: "5,791"
  },
  {
    date: "Sep 1948",
    emp: "5,805"
  },
  {
    date: "Oct 1948",
    emp: "5,829"
  },
  {
    date: "Nov 1948",
    emp: "5,869"
  },
  {
    date: "Dec 1948",
    emp: "5,888"
  },
  {
    date: "Jan 1949",
    emp: "5,894"
  },
  {
    date: "Feb 1949",
    emp: "5,893"
  },
  {
    date: "Mar 1949",
    emp: "5,915"
  },
  {
    date: "Apr 1949",
    emp: "5,948"
  },
  {
    date: "May 1949",
    emp: "5,962"
  },
  {
    date: "Jun 1949",
    emp: "5,956"
  },
  {
    date: "Jul 1949",
    emp: "5,962"
  },
  {
    date: "Aug 1949",
    emp: "5,985"
  },
  {
    date: "Sep 1949",
    emp: "5,990"
  },
  {
    date: "Oct 1949",
    emp: "5,970"
  },
  {
    date: "Nov 1949",
    emp: "5,950"
  },
  {
    date: "Dec 1949",
    emp: "5,952"
  },
  {
    date: "Jan 1950",
    emp: "5,934"
  },
  {
    date: "Feb 1950",
    emp: "5,926"
  },
  {
    date: "Mar 1950",
    emp: "6,078"
  },
  {
    date: "Apr 1950",
    emp: "6,094"
  },
  {
    date: "May 1950",
    emp: "6,043"
  },
  {
    date: "Jun 1950",
    emp: "6,022"
  },
  {
    date: "Jul 1950",
    emp: "6,090"
  },
  {
    date: "Aug 1950",
    emp: "6,187"
  },
  {
    date: "Sep 1950",
    emp: "6,228"
  },
  {
    date: "Oct 1950",
    emp: "6,249"
  },
  {
    date: "Nov 1950",
    emp: "6,262"
  },
  {
    date: "Dec 1950",
    emp: "6,314"
  },
  {
    date: "Jan 1951",
    emp: "6,352"
  },
  {
    date: "Feb 1951",
    emp: "6,382"
  },
  {
    date: "Mar 1951",
    emp: "6,410"
  },
  {
    date: "Apr 1951",
    emp: "6,451"
  },
  {
    date: "May 1951",
    emp: "6,417"
  },
  {
    date: "Jun 1951",
    emp: "6,499"
  },
  {
    date: "Jul 1951",
    emp: "6,538"
  },
  {
    date: "Aug 1951",
    emp: "6,519"
  },
  {
    date: "Sep 1951",
    emp: "6,552"
  },
  {
    date: "Oct 1951",
    emp: "6,577"
  },
  {
    date: "Nov 1951",
    emp: "6,626"
  },
  {
    date: "Dec 1951",
    emp: "6,688"
  },
  {
    date: "Jan 1952",
    emp: "6,589"
  },
  {
    date: "Feb 1952",
    emp: "6,650"
  },
  {
    date: "Mar 1952",
    emp: "6,662"
  },
  {
    date: "Apr 1952",
    emp: "6,662"
  },
  {
    date: "May 1952",
    emp: "6,694"
  },
  {
    date: "Jun 1952",
    emp: "6,712"
  },
  {
    date: "Jul 1952",
    emp: "6,737"
  },
  {
    date: "Aug 1952",
    emp: "6,718"
  },
  {
    date: "Sep 1952",
    emp: "6,734"
  },
  {
    date: "Oct 1952",
    emp: "6,816"
  },
  {
    date: "Nov 1952",
    emp: "6,801"
  },
  {
    date: "Dec 1952",
    emp: "6,935"
  },
  {
    date: "Jan 1953",
    emp: "6,794"
  },
  {
    date: "Feb 1953",
    emp: "6,797"
  },
  {
    date: "Mar 1953",
    emp: "6,784"
  },
  {
    date: "Apr 1953",
    emp: "6,770"
  },
  {
    date: "May 1953",
    emp: "6,717"
  },
  {
    date: "Jun 1953",
    emp: "6,734"
  },
  {
    date: "Jul 1953",
    emp: "6,723"
  },
  {
    date: "Aug 1953",
    emp: "6,754"
  },
  {
    date: "Sep 1953",
    emp: "6,749"
  },
  {
    date: "Oct 1953",
    emp: "6,764"
  },
  {
    date: "Nov 1953",
    emp: "6,749"
  },
  {
    date: "Dec 1953",
    emp: "6,743"
  },
  {
    date: "Jan 1954",
    emp: "6,760"
  },
  {
    date: "Feb 1954",
    emp: "6,783"
  },
  {
    date: "Mar 1954",
    emp: "6,796"
  },
  {
    date: "Apr 1954",
    emp: "6,806"
  },
  {
    date: "May 1954",
    emp: "6,829"
  },
  {
    date: "Jun 1954",
    emp: "6,846"
  },
  {
    date: "Jul 1954",
    emp: "6,868"
  },
  {
    date: "Aug 1954",
    emp: "6,892"
  },
  {
    date: "Sep 1954",
    emp: "6,894"
  },
  {
    date: "Oct 1954",
    emp: "6,900"
  },
  {
    date: "Nov 1954",
    emp: "6,964"
  },
  {
    date: "Dec 1954",
    emp: "6,957"
  },
  {
    date: "Jan 1955",
    emp: "6,953"
  },
  {
    date: "Feb 1955",
    emp: "6,923"
  },
  {
    date: "Mar 1955",
    emp: "6,938"
  },
  {
    date: "Apr 1955",
    emp: "6,959"
  },
  {
    date: "May 1955",
    emp: "6,991"
  },
  {
    date: "Jun 1955",
    emp: "7,020"
  },
  {
    date: "Jul 1955",
    emp: "7,049"
  },
  {
    date: "Aug 1955",
    emp: "7,023"
  },
  {
    date: "Sep 1955",
    emp: "7,067"
  },
  {
    date: "Oct 1955",
    emp: "7,118"
  },
  {
    date: "Nov 1955",
    emp: "7,083"
  },
  {
    date: "Dec 1955",
    emp: "7,132"
  },
  {
    date: "Jan 1956",
    emp: "7,167"
  },
  {
    date: "Feb 1956",
    emp: "7,212"
  },
  {
    date: "Mar 1956",
    emp: "7,252"
  },
  {
    date: "Apr 1956",
    emp: "7,276"
  },
  {
    date: "May 1956",
    emp: "7,367"
  },
  {
    date: "Jun 1956",
    emp: "7,367"
  },
  {
    date: "Jul 1956",
    emp: "7,405"
  },
  {
    date: "Aug 1956",
    emp: "7,451"
  },
  {
    date: "Sep 1956",
    emp: "7,481"
  },
  {
    date: "Oct 1956",
    emp: "7,519"
  },
  {
    date: "Nov 1956",
    emp: "7,553"
  },
  {
    date: "Dec 1956",
    emp: "7,584"
  },
  {
    date: "Jan 1957",
    emp: "7,620"
  },
  {
    date: "Feb 1957",
    emp: "7,646"
  },
  {
    date: "Mar 1957",
    emp: "7,672"
  },
  {
    date: "Apr 1957",
    emp: "7,701"
  },
  {
    date: "May 1957",
    emp: "7,713"
  },
  {
    date: "Jun 1957",
    emp: "7,702"
  },
  {
    date: "Jul 1957",
    emp: "7,754"
  },
  {
    date: "Aug 1957",
    emp: "7,757"
  },
  {
    date: "Sep 1957",
    emp: "7,749"
  },
  {
    date: "Oct 1957",
    emp: "7,768"
  },
  {
    date: "Nov 1957",
    emp: "7,769"
  },
  {
    date: "Dec 1957",
    emp: "7,846"
  },
  {
    date: "Jan 1958",
    emp: "7,821"
  },
  {
    date: "Feb 1958",
    emp: "7,832"
  },
  {
    date: "Mar 1958",
    emp: "7,848"
  },
  {
    date: "Apr 1958",
    emp: "7,868"
  },
  {
    date: "May 1958",
    emp: "7,894"
  },
  {
    date: "Jun 1958",
    emp: "7,926"
  },
  {
    date: "Jul 1958",
    emp: "7,972"
  },
  {
    date: "Aug 1958",
    emp: "8,012"
  },
  {
    date: "Sep 1958",
    emp: "8,016"
  },
  {
    date: "Oct 1958",
    emp: "8,031"
  },
  {
    date: "Nov 1958",
    emp: "8,028"
  },
  {
    date: "Dec 1958",
    emp: "8,100"
  },
  {
    date: "Jan 1959",
    emp: "8,105"
  },
  {
    date: "Feb 1959",
    emp: "8,116"
  },
  {
    date: "Mar 1959",
    emp: "8,132"
  },
  {
    date: "Apr 1959",
    emp: "8,142"
  },
  {
    date: "May 1959",
    emp: "8,153"
  },
  {
    date: "Jun 1959",
    emp: "8,143"
  },
  {
    date: "Jul 1959",
    emp: "8,173"
  },
  {
    date: "Aug 1959",
    emp: "8,181"
  },
  {
    date: "Sep 1959",
    emp: "8,239"
  },
  {
    date: "Oct 1959",
    emp: "8,265"
  },
  {
    date: "Nov 1959",
    emp: "8,284"
  },
  {
    date: "Dec 1959",
    emp: "8,368"
  },
  {
    date: "Jan 1960",
    emp: "8,307"
  },
  {
    date: "Feb 1960",
    emp: "8,326"
  },
  {
    date: "Mar 1960",
    emp: "8,525"
  },
  {
    date: "Apr 1960",
    emp: "8,534"
  },
  {
    date: "May 1960",
    emp: "8,432"
  },
  {
    date: "Jun 1960",
    emp: "8,432"
  },
  {
    date: "Jul 1960",
    emp: "8,442"
  },
  {
    date: "Aug 1960",
    emp: "8,472"
  },
  {
    date: "Sep 1960",
    emp: "8,494"
  },
  {
    date: "Oct 1960",
    emp: "8,502"
  },
  {
    date: "Nov 1960",
    emp: "8,516"
  },
  {
    date: "Dec 1960",
    emp: "8,597"
  },
  {
    date: "Jan 1961",
    emp: "8,564"
  },
  {
    date: "Feb 1961",
    emp: "8,587"
  },
  {
    date: "Mar 1961",
    emp: "8,611"
  },
  {
    date: "Apr 1961",
    emp: "8,629"
  },
  {
    date: "May 1961",
    emp: "8,664"
  },
  {
    date: "Jun 1961",
    emp: "8,688"
  },
  {
    date: "Jul 1961",
    emp: "8,724"
  },
  {
    date: "Aug 1961",
    emp: "8,764"
  },
  {
    date: "Sep 1961",
    emp: "8,796"
  },
  {
    date: "Oct 1961",
    emp: "8,805"
  },
  {
    date: "Nov 1961",
    emp: "8,812"
  },
  {
    date: "Dec 1961",
    emp: "8,836"
  },
  {
    date: "Jan 1962",
    emp: "8,851"
  },
  {
    date: "Feb 1962",
    emp: "8,878"
  },
  {
    date: "Mar 1962",
    emp: "8,901"
  },
  {
    date: "Apr 1962",
    emp: "8,922"
  },
  {
    date: "May 1962",
    emp: "8,958"
  },
  {
    date: "Jun 1962",
    emp: "9,000"
  },
  {
    date: "Jul 1962",
    emp: "9,026"
  },
  {
    date: "Aug 1962",
    emp: "9,063"
  },
  {
    date: "Sep 1962",
    emp: "9,089"
  },
  {
    date: "Oct 1962",
    emp: "9,114"
  },
  {
    date: "Nov 1962",
    emp: "9,145"
  },
  {
    date: "Dec 1962",
    emp: "9,126"
  },
  {
    date: "Jan 1963",
    emp: "9,204"
  },
  {
    date: "Feb 1963",
    emp: "9,231"
  },
  {
    date: "Mar 1963",
    emp: "9,245"
  },
  {
    date: "Apr 1963",
    emp: "9,264"
  },
  {
    date: "May 1963",
    emp: "9,288"
  },
  {
    date: "Jun 1963",
    emp: "9,302"
  },
  {
    date: "Jul 1963",
    emp: "9,334"
  },
  {
    date: "Aug 1963",
    emp: "9,368"
  },
  {
    date: "Sep 1963",
    emp: "9,417"
  },
  {
    date: "Oct 1963",
    emp: "9,479"
  },
  {
    date: "Nov 1963",
    emp: "9,484"
  },
  {
    date: "Dec 1963",
    emp: "9,497"
  },
  {
    date: "Jan 1964",
    emp: "9,562"
  },
  {
    date: "Feb 1964",
    emp: "9,581"
  },
  {
    date: "Mar 1964",
    emp: "9,611"
  },
  {
    date: "Apr 1964",
    emp: "9,644"
  },
  {
    date: "May 1964",
    emp: "9,670"
  },
  {
    date: "Jun 1964",
    emp: "9,669"
  },
  {
    date: "Jul 1964",
    emp: "9,677"
  },
  {
    date: "Aug 1964",
    emp: "9,732"
  },
  {
    date: "Sep 1964",
    emp: "9,786"
  },
  {
    date: "Oct 1964",
    emp: "9,845"
  },
  {
    date: "Nov 1964",
    emp: "9,879"
  },
  {
    date: "Dec 1964",
    emp: "9,897"
  },
  {
    date: "Jan 1965",
    emp: "9,937"
  },
  {
    date: "Feb 1965",
    emp: "9,974"
  },
  {
    date: "Mar 1965",
    emp: "10,010"
  },
  {
    date: "Apr 1965",
    emp: "10,051"
  },
  {
    date: "May 1965",
    emp: "10,094"
  },
  {
    date: "Jun 1965",
    emp: "10,128"
  },
  {
    date: "Jul 1965",
    emp: "10,201"
  },
  {
    date: "Aug 1965",
    emp: "10,271"
  },
  {
    date: "Sep 1965",
    emp: "10,338"
  },
  {
    date: "Oct 1965",
    emp: "10,378"
  },
  {
    date: "Nov 1965",
    emp: "10,436"
  },
  {
    date: "Dec 1965",
    emp: "10,499"
  },
  {
    date: "Jan 1966",
    emp: "10,541"
  },
  {
    date: "Feb 1966",
    emp: "10,611"
  },
  {
    date: "Mar 1966",
    emp: "10,692"
  },
  {
    date: "Apr 1966",
    emp: "10,759"
  },
  {
    date: "May 1966",
    emp: "10,821"
  },
  {
    date: "Jun 1966",
    emp: "10,902"
  },
  {
    date: "Jul 1966",
    emp: "10,974"
  },
  {
    date: "Aug 1966",
    emp: "11,006"
  },
  {
    date: "Sep 1966",
    emp: "11,063"
  },
  {
    date: "Oct 1966",
    emp: "11,127"
  },
  {
    date: "Nov 1966",
    emp: "11,203"
  },
  {
    date: "Dec 1966",
    emp: "11,256"
  },
  {
    date: "Jan 1967",
    emp: "11,315"
  },
  {
    date: "Feb 1967",
    emp: "11,353"
  },
  {
    date: "Mar 1967",
    emp: "11,397"
  },
  {
    date: "Apr 1967",
    emp: "11,435"
  },
  {
    date: "May 1967",
    emp: "11,474"
  },
  {
    date: "Jun 1967",
    emp: "11,534"
  },
  {
    date: "Jul 1967",
    emp: "11,544"
  },
  {
    date: "Aug 1967",
    emp: "11,590"
  },
  {
    date: "Sep 1967",
    emp: "11,623"
  },
  {
    date: "Oct 1967",
    emp: "11,642"
  },
  {
    date: "Nov 1967",
    emp: "11,695"
  },
  {
    date: "Dec 1967",
    emp: "11,735"
  },
  {
    date: "Jan 1968",
    emp: "11,794"
  },
  {
    date: "Feb 1968",
    emp: "11,819"
  },
  {
    date: "Mar 1968",
    emp: "11,842"
  },
  {
    date: "Apr 1968",
    emp: "11,878"
  },
  {
    date: "May 1968",
    emp: "11,905"
  },
  {
    date: "Jun 1968",
    emp: "11,987"
  },
  {
    date: "Jul 1968",
    emp: "12,018"
  },
  {
    date: "Aug 1968",
    emp: "12,042"
  },
  {
    date: "Sep 1968",
    emp: "12,067"
  },
  {
    date: "Oct 1968",
    emp: "12,101"
  },
  {
    date: "Nov 1968",
    emp: "12,107"
  },
  {
    date: "Dec 1968",
    emp: "12,145"
  },
  {
    date: "Jan 1969",
    emp: "12,209"
  },
  {
    date: "Feb 1969",
    emp: "12,224"
  },
  {
    date: "Mar 1969",
    emp: "12,229"
  },
  {
    date: "Apr 1969",
    emp: "12,245"
  },
  {
    date: "May 1969",
    emp: "12,284"
  },
  {
    date: "Jun 1969",
    emp: "12,359"
  },
  {
    date: "Jul 1969",
    emp: "12,340"
  },
  {
    date: "Aug 1969",
    emp: "12,373"
  },
  {
    date: "Sep 1969",
    emp: "12,379"
  },
  {
    date: "Oct 1969",
    emp: "12,430"
  },
  {
    date: "Nov 1969",
    emp: "12,448"
  },
  {
    date: "Dec 1969",
    emp: "12,477"
  },
  {
    date: "Jan 1970",
    emp: "12,496"
  },
  {
    date: "Feb 1970",
    emp: "12,518"
  },
  {
    date: "Mar 1970",
    emp: "12,603"
  },
  {
    date: "Apr 1970",
    emp: "12,705"
  },
  {
    date: "May 1970",
    emp: "12,668"
  },
  {
    date: "Jun 1970",
    emp: "12,667"
  },
  {
    date: "Jul 1970",
    emp: "12,697"
  },
  {
    date: "Aug 1970",
    emp: "12,711"
  },
  {
    date: "Sep 1970",
    emp: "12,741"
  },
  {
    date: "Oct 1970",
    emp: "12,793"
  },
  {
    date: "Nov 1970",
    emp: "12,830"
  },
  {
    date: "Dec 1970",
    emp: "12,845"
  },
  {
    date: "Jan 1971",
    emp: "12,878"
  },
  {
    date: "Feb 1971",
    emp: "12,877"
  },
  {
    date: "Mar 1971",
    emp: "12,908"
  },
  {
    date: "Apr 1971",
    emp: "12,945"
  },
  {
    date: "May 1971",
    emp: "12,970"
  },
  {
    date: "Jun 1971",
    emp: "13,008"
  },
  {
    date: "Jul 1971",
    emp: "13,011"
  },
  {
    date: "Aug 1971",
    emp: "13,041"
  },
  {
    date: "Sep 1971",
    emp: "13,068"
  },
  {
    date: "Oct 1971",
    emp: "13,115"
  },
  {
    date: "Nov 1971",
    emp: "13,148"
  },
  {
    date: "Dec 1971",
    emp: "13,190"
  },
  {
    date: "Jan 1972",
    emp: "13,266"
  },
  {
    date: "Feb 1972",
    emp: "13,298"
  },
  {
    date: "Mar 1972",
    emp: "13,329"
  },
  {
    date: "Apr 1972",
    emp: "13,358"
  },
  {
    date: "May 1972",
    emp: "13,416"
  },
  {
    date: "Jun 1972",
    emp: "13,405"
  },
  {
    date: "Jul 1972",
    emp: "13,482"
  },
  {
    date: "Aug 1972",
    emp: "13,530"
  },
  {
    date: "Sep 1972",
    emp: "13,575"
  },
  {
    date: "Oct 1972",
    emp: "13,606"
  },
  {
    date: "Nov 1972",
    emp: "13,643"
  },
  {
    date: "Dec 1972",
    emp: "13,684"
  },
  {
    date: "Jan 1973",
    emp: "13,690"
  },
  {
    date: "Feb 1973",
    emp: "13,711"
  },
  {
    date: "Mar 1973",
    emp: "13,745"
  },
  {
    date: "Apr 1973",
    emp: "13,777"
  },
  {
    date: "May 1973",
    emp: "13,817"
  },
  {
    date: "Jun 1973",
    emp: "13,872"
  },
  {
    date: "Jul 1973",
    emp: "13,865"
  },
  {
    date: "Aug 1973",
    emp: "13,904"
  },
  {
    date: "Sep 1973",
    emp: "13,892"
  },
  {
    date: "Oct 1973",
    emp: "13,977"
  },
  {
    date: "Nov 1973",
    emp: "14,035"
  },
  {
    date: "Dec 1973",
    emp: "14,070"
  },
  {
    date: "Jan 1974",
    emp: "14,090"
  },
  {
    date: "Feb 1974",
    emp: "14,135"
  },
  {
    date: "Mar 1974",
    emp: "14,152"
  },
  {
    date: "Apr 1974",
    emp: "14,191"
  },
  {
    date: "May 1974",
    emp: "14,221"
  },
  {
    date: "Jun 1974",
    emp: "14,239"
  },
  {
    date: "Jul 1974",
    emp: "14,288"
  },
  {
    date: "Aug 1974",
    emp: "14,328"
  },
  {
    date: "Sep 1974",
    emp: "14,422"
  },
  {
    date: "Oct 1974",
    emp: "14,484"
  },
  {
    date: "Nov 1974",
    emp: "14,532"
  },
  {
    date: "Dec 1974",
    emp: "14,559"
  },
  {
    date: "Jan 1975",
    emp: "14,624"
  },
  {
    date: "Feb 1975",
    emp: "14,747"
  },
  {
    date: "Mar 1975",
    emp: "14,754"
  },
  {
    date: "Apr 1975",
    emp: "14,795"
  },
  {
    date: "May 1975",
    emp: "14,827"
  },
  {
    date: "Jun 1975",
    emp: "14,784"
  },
  {
    date: "Jul 1975",
    emp: "14,861"
  },
  {
    date: "Aug 1975",
    emp: "14,870"
  },
  {
    date: "Sep 1975",
    emp: "14,824"
  },
  {
    date: "Oct 1975",
    emp: "14,900"
  },
  {
    date: "Nov 1975",
    emp: "14,903"
  },
  {
    date: "Dec 1975",
    emp: "14,946"
  },
  {
    date: "Jan 1976",
    emp: "14,969"
  },
  {
    date: "Feb 1976",
    emp: "14,981"
  },
  {
    date: "Mar 1976",
    emp: "14,987"
  },
  {
    date: "Apr 1976",
    emp: "14,985"
  },
  {
    date: "May 1976",
    emp: "14,971"
  },
  {
    date: "Jun 1976",
    emp: "14,963"
  },
  {
    date: "Jul 1976",
    emp: "14,993"
  },
  {
    date: "Aug 1976",
    emp: "15,007"
  },
  {
    date: "Sep 1976",
    emp: "14,971"
  },
  {
    date: "Oct 1976",
    emp: "15,028"
  },
  {
    date: "Nov 1976",
    emp: "15,073"
  },
  {
    date: "Dec 1976",
    emp: "15,075"
  },
  {
    date: "Jan 1977",
    emp: "15,056"
  },
  {
    date: "Feb 1977",
    emp: "15,056"
  },
  {
    date: "Mar 1977",
    emp: "15,050"
  },
  {
    date: "Apr 1977",
    emp: "15,075"
  },
  {
    date: "May 1977",
    emp: "15,132"
  },
  {
    date: "Jun 1977",
    emp: "15,207"
  },
  {
    date: "Jul 1977",
    emp: "15,299"
  },
  {
    date: "Aug 1977",
    emp: "15,328"
  },
  {
    date: "Sep 1977",
    emp: "15,403"
  },
  {
    date: "Oct 1977",
    emp: "15,463"
  },
  {
    date: "Nov 1977",
    emp: "15,515"
  },
  {
    date: "Dec 1977",
    emp: "15,538"
  },
  {
    date: "Jan 1978",
    emp: "15,611"
  },
  {
    date: "Feb 1978",
    emp: "15,671"
  },
  {
    date: "Mar 1978",
    emp: "15,731"
  },
  {
    date: "Apr 1978",
    emp: "15,797"
  },
  {
    date: "May 1978",
    emp: "15,834"
  },
  {
    date: "Jun 1978",
    emp: "15,852"
  },
  {
    date: "Jul 1978",
    emp: "15,901"
  },
  {
    date: "Aug 1978",
    emp: "15,891"
  },
  {
    date: "Sep 1978",
    emp: "15,819"
  },
  {
    date: "Oct 1978",
    emp: "15,858"
  },
  {
    date: "Nov 1978",
    emp: "15,894"
  },
  {
    date: "Dec 1978",
    emp: "15,911"
  },
  {
    date: "Jan 1979",
    emp: "15,937"
  },
  {
    date: "Feb 1979",
    emp: "15,947"
  },
  {
    date: "Mar 1979",
    emp: "15,956"
  },
  {
    date: "Apr 1979",
    emp: "15,977"
  },
  {
    date: "May 1979",
    emp: "15,990"
  },
  {
    date: "Jun 1979",
    emp: "16,045"
  },
  {
    date: "Jul 1979",
    emp: "16,150"
  },
  {
    date: "Aug 1979",
    emp: "16,229"
  },
  {
    date: "Sep 1979",
    emp: "16,128"
  },
  {
    date: "Oct 1979",
    emp: "16,136"
  },
  {
    date: "Nov 1979",
    emp: "16,173"
  },
  {
    date: "Dec 1979",
    emp: "16,180"
  },
  {
    date: "Jan 1980",
    emp: "16,201"
  },
  {
    date: "Feb 1980",
    emp: "16,226"
  },
  {
    date: "Mar 1980",
    emp: "16,296"
  },
  {
    date: "Apr 1980",
    emp: "16,583"
  },
  {
    date: "May 1980",
    emp: "16,454"
  },
  {
    date: "Jun 1980",
    emp: "16,441"
  },
  {
    date: "Jul 1980",
    emp: "16,418"
  },
  {
    date: "Aug 1980",
    emp: "16,410"
  },
  {
    date: "Sep 1980",
    emp: "16,330"
  },
  {
    date: "Oct 1980",
    emp: "16,386"
  },
  {
    date: "Nov 1980",
    emp: "16,391"
  },
  {
    date: "Dec 1980",
    emp: "16,373"
  },
  {
    date: "Jan 1981",
    emp: "16,360"
  },
  {
    date: "Feb 1981",
    emp: "16,346"
  },
  {
    date: "Mar 1981",
    emp: "16,292"
  },
  {
    date: "Apr 1981",
    emp: "16,260"
  },
  {
    date: "May 1981",
    emp: "16,198"
  },
  {
    date: "Jun 1981",
    emp: "16,159"
  },
  {
    date: "Jul 1981",
    emp: "16,175"
  },
  {
    date: "Aug 1981",
    emp: "16,110"
  },
  {
    date: "Sep 1981",
    emp: "16,031"
  },
  {
    date: "Oct 1981",
    emp: "16,069"
  },
  {
    date: "Nov 1981",
    emp: "16,078"
  },
  {
    date: "Dec 1981",
    emp: "16,073"
  },
  {
    date: "Jan 1982",
    emp: "16,041"
  },
  {
    date: "Feb 1982",
    emp: "16,011"
  },
  {
    date: "Mar 1982",
    emp: "16,024"
  },
  {
    date: "Apr 1982",
    emp: "16,010"
  },
  {
    date: "May 1982",
    emp: "16,003"
  },
  {
    date: "Jun 1982",
    emp: "16,016"
  },
  {
    date: "Jul 1982",
    emp: "15,890"
  },
  {
    date: "Aug 1982",
    emp: "15,930"
  },
  {
    date: "Sep 1982",
    emp: "15,923"
  },
  {
    date: "Oct 1982",
    emp: "15,956"
  },
  {
    date: "Nov 1982",
    emp: "15,977"
  },
  {
    date: "Dec 1982",
    emp: "15,981"
  },
  {
    date: "Jan 1983",
    emp: "16,023"
  },
  {
    date: "Feb 1983",
    emp: "16,004"
  },
  {
    date: "Mar 1983",
    emp: "16,005"
  },
  {
    date: "Apr 1983",
    emp: "15,990"
  },
  {
    date: "May 1983",
    emp: "16,005"
  },
  {
    date: "Jun 1983",
    emp: "16,020"
  },
  {
    date: "Jul 1983",
    emp: "16,011"
  },
  {
    date: "Aug 1983",
    emp: "16,016"
  },
  {
    date: "Sep 1983",
    emp: "16,042"
  },
  {
    date: "Oct 1983",
    emp: "15,986"
  },
  {
    date: "Nov 1983",
    emp: "15,997"
  },
  {
    date: "Dec 1983",
    emp: "16,008"
  },
  {
    date: "Jan 1984",
    emp: "16,010"
  },
  {
    date: "Feb 1984",
    emp: "16,025"
  },
  {
    date: "Mar 1984",
    emp: "16,030"
  },
  {
    date: "Apr 1984",
    emp: "16,075"
  },
  {
    date: "May 1984",
    emp: "16,103"
  },
  {
    date: "Jun 1984",
    emp: "16,127"
  },
  {
    date: "Jul 1984",
    emp: "16,172"
  },
  {
    date: "Aug 1984",
    emp: "16,224"
  },
  {
    date: "Sep 1984",
    emp: "16,255"
  },
  {
    date: "Oct 1984",
    emp: "16,274"
  },
  {
    date: "Nov 1984",
    emp: "16,311"
  },
  {
    date: "Dec 1984",
    emp: "16,282"
  },
  {
    date: "Jan 1985",
    emp: "16,336"
  },
  {
    date: "Feb 1985",
    emp: "16,349"
  },
  {
    date: "Mar 1985",
    emp: "16,395"
  },
  {
    date: "Apr 1985",
    emp: "16,430"
  },
  {
    date: "May 1985",
    emp: "16,474"
  },
  {
    date: "Jun 1985",
    emp: "16,498"
  },
  {
    date: "Jul 1985",
    emp: "16,620"
  },
  {
    date: "Aug 1985",
    emp: "16,619"
  },
  {
    date: "Sep 1985",
    emp: "16,638"
  },
  {
    date: "Oct 1985",
    emp: "16,654"
  },
  {
    date: "Nov 1985",
    emp: "16,674"
  },
  {
    date: "Dec 1985",
    emp: "16,694"
  },
  {
    date: "Jan 1986",
    emp: "16,715"
  },
  {
    date: "Feb 1986",
    emp: "16,759"
  },
  {
    date: "Mar 1986",
    emp: "16,755"
  },
  {
    date: "Apr 1986",
    emp: "16,765"
  },
  {
    date: "May 1986",
    emp: "16,790"
  },
  {
    date: "Jun 1986",
    emp: "16,779"
  },
  {
    date: "Jul 1986",
    emp: "16,779"
  },
  {
    date: "Aug 1986",
    emp: "16,800"
  },
  {
    date: "Sep 1986",
    emp: "16,910"
  },
  {
    date: "Oct 1986",
    emp: "16,969"
  },
  {
    date: "Nov 1986",
    emp: "17,005"
  },
  {
    date: "Dec 1986",
    emp: "17,021"
  },
  {
    date: "Jan 1987",
    emp: "17,045"
  },
  {
    date: "Feb 1987",
    emp: "17,036"
  },
  {
    date: "Mar 1987",
    emp: "17,064"
  },
  {
    date: "Apr 1987",
    emp: "17,109"
  },
  {
    date: "May 1987",
    emp: "17,112"
  },
  {
    date: "Jun 1987",
    emp: "17,124"
  },
  {
    date: "Jul 1987",
    emp: "17,160"
  },
  {
    date: "Aug 1987",
    emp: "17,172"
  },
  {
    date: "Sep 1987",
    emp: "17,135"
  },
  {
    date: "Oct 1987",
    emp: "17,269"
  },
  {
    date: "Nov 1987",
    emp: "17,299"
  },
  {
    date: "Dec 1987",
    emp: "17,347"
  },
  {
    date: "Jan 1988",
    emp: "17,365"
  },
  {
    date: "Feb 1988",
    emp: "17,389"
  },
  {
    date: "Mar 1988",
    emp: "17,447"
  },
  {
    date: "Apr 1988",
    emp: "17,452"
  },
  {
    date: "May 1988",
    emp: "17,481"
  },
  {
    date: "Jun 1988",
    emp: "17,515"
  },
  {
    date: "Jul 1988",
    emp: "17,494"
  },
  {
    date: "Aug 1988",
    emp: "17,544"
  },
  {
    date: "Sep 1988",
    emp: "17,634"
  },
  {
    date: "Oct 1988",
    emp: "17,670"
  },
  {
    date: "Nov 1988",
    emp: "17,746"
  },
  {
    date: "Dec 1988",
    emp: "17,736"
  },
  {
    date: "Jan 1989",
    emp: "17,774"
  },
  {
    date: "Feb 1989",
    emp: "17,812"
  },
  {
    date: "Mar 1989",
    emp: "17,822"
  },
  {
    date: "Apr 1989",
    emp: "17,840"
  },
  {
    date: "May 1989",
    emp: "17,876"
  },
  {
    date: "Jun 1989",
    emp: "17,912"
  },
  {
    date: "Jul 1989",
    emp: "17,905"
  },
  {
    date: "Aug 1989",
    emp: "17,989"
  },
  {
    date: "Sep 1989",
    emp: "18,027"
  },
  {
    date: "Oct 1989",
    emp: "18,033"
  },
  {
    date: "Nov 1989",
    emp: "18,057"
  },
  {
    date: "Dec 1989",
    emp: "18,075"
  },
  {
    date: "Jan 1990",
    emp: "18,151"
  },
  {
    date: "Feb 1990",
    emp: "18,177"
  },
  {
    date: "Mar 1990",
    emp: "18,294"
  },
  {
    date: "Apr 1990",
    emp: "18,377"
  },
  {
    date: "May 1990",
    emp: "18,599"
  },
  {
    date: "Jun 1990",
    emp: "18,556"
  },
  {
    date: "Jul 1990",
    emp: "18,560"
  },
  {
    date: "Aug 1990",
    emp: "18,457"
  },
  {
    date: "Sep 1990",
    emp: "18,437"
  },
  {
    date: "Oct 1990",
    emp: "18,443"
  },
  {
    date: "Nov 1990",
    emp: "18,450"
  },
  {
    date: "Dec 1990",
    emp: "18,468"
  },
  {
    date: "Jan 1991",
    emp: "18,474"
  },
  {
    date: "Feb 1991",
    emp: "18,482"
  },
  {
    date: "Mar 1991",
    emp: "18,488"
  },
  {
    date: "Apr 1991",
    emp: "18,485"
  },
  {
    date: "May 1991",
    emp: "18,498"
  },
  {
    date: "Jun 1991",
    emp: "18,561"
  },
  {
    date: "Jul 1991",
    emp: "18,598"
  },
  {
    date: "Aug 1991",
    emp: "18,567"
  },
  {
    date: "Sep 1991",
    emp: "18,543"
  },
  {
    date: "Oct 1991",
    emp: "18,593"
  },
  {
    date: "Nov 1991",
    emp: "18,627"
  },
  {
    date: "Dec 1991",
    emp: "18,641"
  },
  {
    date: "Jan 1992",
    emp: "18,688"
  },
  {
    date: "Feb 1992",
    emp: "18,689"
  },
  {
    date: "Mar 1992",
    emp: "18,715"
  },
  {
    date: "Apr 1992",
    emp: "18,739"
  },
  {
    date: "May 1992",
    emp: "18,753"
  },
  {
    date: "Jun 1992",
    emp: "18,762"
  },
  {
    date: "Jul 1992",
    emp: "18,817"
  },
  {
    date: "Aug 1992",
    emp: "18,883"
  },
  {
    date: "Sep 1992",
    emp: "18,829"
  },
  {
    date: "Oct 1992",
    emp: "18,828"
  },
  {
    date: "Nov 1992",
    emp: "18,841"
  },
  {
    date: "Dec 1992",
    emp: "18,878"
  },
  {
    date: "Jan 1993",
    emp: "18,901"
  },
  {
    date: "Feb 1993",
    emp: "18,902"
  },
  {
    date: "Mar 1993",
    emp: "18,907"
  },
  {
    date: "Apr 1993",
    emp: "18,938"
  },
  {
    date: "May 1993",
    emp: "18,951"
  },
  {
    date: "Jun 1993",
    emp: "18,969"
  },
  {
    date: "Jul 1993",
    emp: "19,060"
  },
  {
    date: "Aug 1993",
    emp: "19,028"
  },
  {
    date: "Sep 1993",
    emp: "19,041"
  },
  {
    date: "Oct 1993",
    emp: "19,042"
  },
  {
    date: "Nov 1993",
    emp: "19,068"
  },
  {
    date: "Dec 1993",
    emp: "19,109"
  },
  {
    date: "Jan 1994",
    emp: "19,147"
  },
  {
    date: "Feb 1994",
    emp: "19,150"
  },
  {
    date: "Mar 1994",
    emp: "19,190"
  },
  {
    date: "Apr 1994",
    emp: "19,223"
  },
  {
    date: "May 1994",
    emp: "19,264"
  },
  {
    date: "Jun 1994",
    emp: "19,274"
  },
  {
    date: "Jul 1994",
    emp: "19,301"
  },
  {
    date: "Aug 1994",
    emp: "19,306"
  },
  {
    date: "Sep 1994",
    emp: "19,337"
  },
  {
    date: "Oct 1994",
    emp: "19,344"
  },
  {
    date: "Nov 1994",
    emp: "19,367"
  },
  {
    date: "Dec 1994",
    emp: "19,388"
  },
  {
    date: "Jan 1995",
    emp: "19,397"
  },
  {
    date: "Feb 1995",
    emp: "19,407"
  },
  {
    date: "Mar 1995",
    emp: "19,427"
  },
  {
    date: "Apr 1995",
    emp: "19,434"
  },
  {
    date: "May 1995",
    emp: "19,418"
  },
  {
    date: "Jun 1995",
    emp: "19,445"
  },
  {
    date: "Jul 1995",
    emp: "19,437"
  },
  {
    date: "Aug 1995",
    emp: "19,429"
  },
  {
    date: "Sep 1995",
    emp: "19,430"
  },
  {
    date: "Oct 1995",
    emp: "19,464"
  },
  {
    date: "Nov 1995",
    emp: "19,463"
  },
  {
    date: "Dec 1995",
    emp: "19,466"
  },
  {
    date: "Jan 1996",
    emp: "19,450"
  },
  {
    date: "Feb 1996",
    emp: "19,485"
  },
  {
    date: "Mar 1996",
    emp: "19,532"
  },
  {
    date: "Apr 1996",
    emp: "19,515"
  },
  {
    date: "May 1996",
    emp: "19,529"
  },
  {
    date: "Jun 1996",
    emp: "19,528"
  },
  {
    date: "Jul 1996",
    emp: "19,547"
  },
  {
    date: "Aug 1996",
    emp: "19,504"
  },
  {
    date: "Sep 1996",
    emp: "19,567"
  },
  {
    date: "Oct 1996",
    emp: "19,554"
  },
  {
    date: "Nov 1996",
    emp: "19,565"
  },
  {
    date: "Dec 1996",
    emp: "19,571"
  },
  {
    date: "Jan 1997",
    emp: "19,593"
  },
  {
    date: "Feb 1997",
    emp: "19,598"
  },
  {
    date: "Mar 1997",
    emp: "19,608"
  },
  {
    date: "Apr 1997",
    emp: "19,603"
  },
  {
    date: "May 1997",
    emp: "19,601"
  },
  {
    date: "Jun 1997",
    emp: "19,660"
  },
  {
    date: "Jul 1997",
    emp: "19,686"
  },
  {
    date: "Aug 1997",
    emp: "19,617"
  },
  {
    date: "Sep 1997",
    emp: "19,679"
  },
  {
    date: "Oct 1997",
    emp: "19,738"
  },
  {
    date: "Nov 1997",
    emp: "19,761"
  },
  {
    date: "Dec 1997",
    emp: "19,766"
  },
  {
    date: "Jan 1998",
    emp: "19,770"
  },
  {
    date: "Feb 1998",
    emp: "19,786"
  },
  {
    date: "Mar 1998",
    emp: "19,792"
  },
  {
    date: "Apr 1998",
    emp: "19,816"
  },
  {
    date: "May 1998",
    emp: "19,875"
  },
  {
    date: "Jun 1998",
    emp: "19,879"
  },
  {
    date: "Jul 1998",
    emp: "19,930"
  },
  {
    date: "Aug 1998",
    emp: "19,959"
  },
  {
    date: "Sep 1998",
    emp: "19,985"
  },
  {
    date: "Oct 1998",
    emp: "20,001"
  },
  {
    date: "Nov 1998",
    emp: "20,044"
  },
  {
    date: "Dec 1998",
    emp: "20,079"
  },
  {
    date: "Jan 1999",
    emp: "20,084"
  },
  {
    date: "Feb 1999",
    emp: "20,144"
  },
  {
    date: "Mar 1999",
    emp: "20,168"
  },
  {
    date: "Apr 1999",
    emp: "20,237"
  },
  {
    date: "May 1999",
    emp: "20,229"
  },
  {
    date: "Jun 1999",
    emp: "20,272"
  },
  {
    date: "Jul 1999",
    emp: "20,339"
  },
  {
    date: "Aug 1999",
    emp: "20,375"
  },
  {
    date: "Sep 1999",
    emp: "20,404"
  },
  {
    date: "Oct 1999",
    emp: "20,457"
  },
  {
    date: "Nov 1999",
    emp: "20,496"
  },
  {
    date: "Dec 1999",
    emp: "20,540"
  },
  {
    date: "Jan 2000",
    emp: "20,571"
  },
  {
    date: "Feb 2000",
    emp: "20,599"
  },
  {
    date: "Mar 2000",
    emp: "20,733"
  },
  {
    date: "Apr 2000",
    emp: "20,802"
  },
  {
    date: "May 2000",
    emp: "21,147"
  },
  {
    date: "Jun 2000",
    emp: "20,887"
  },
  {
    date: "Jul 2000",
    emp: "20,867"
  },
  {
    date: "Aug 2000",
    emp: "20,837"
  },
  {
    date: "Sep 2000",
    emp: "20,735"
  },
  {
    date: "Oct 2000",
    emp: "20,743"
  },
  {
    date: "Nov 2000",
    emp: "20,760"
  },
  {
    date: "Dec 2000",
    emp: "20,804"
  },
  {
    date: "Jan 2001",
    emp: "20,835"
  },
  {
    date: "Feb 2001",
    emp: "20,906"
  },
  {
    date: "Mar 2001",
    emp: "20,945"
  },
  {
    date: "Apr 2001",
    emp: "20,992"
  },
  {
    date: "May 2001",
    emp: "21,029"
  },
  {
    date: "Jun 2001",
    emp: "21,137"
  },
  {
    date: "Jul 2001",
    emp: "21,185"
  },
  {
    date: "Aug 2001",
    emp: "21,218"
  },
  {
    date: "Sep 2001",
    emp: "21,242"
  },
  {
    date: "Oct 2001",
    emp: "21,275"
  },
  {
    date: "Nov 2001",
    emp: "21,326"
  },
  {
    date: "Dec 2001",
    emp: "21,355"
  },
  {
    date: "Jan 2002",
    emp: "21,377"
  },
  {
    date: "Feb 2002",
    emp: "21,390"
  },
  {
    date: "Mar 2002",
    emp: "21,431"
  },
  {
    date: "Apr 2002",
    emp: "21,443"
  },
  {
    date: "May 2002",
    emp: "21,514"
  },
  {
    date: "Jun 2002",
    emp: "21,549"
  },
  {
    date: "Jul 2002",
    emp: "21,544"
  },
  {
    date: "Aug 2002",
    emp: "21,589"
  },
  {
    date: "Sep 2002",
    emp: "21,546"
  },
  {
    date: "Oct 2002",
    emp: "21,559"
  },
  {
    date: "Nov 2002",
    emp: "21,581"
  },
  {
    date: "Dec 2002",
    emp: "21,588"
  },
  {
    date: "Jan 2003",
    emp: "21,626"
  },
  {
    date: "Feb 2003",
    emp: "21,624"
  },
  {
    date: "Mar 2003",
    emp: "21,610"
  },
  {
    date: "Apr 2003",
    emp: "21,595"
  },
  {
    date: "May 2003",
    emp: "21,567"
  },
  {
    date: "Jun 2003",
    emp: "21,606"
  },
  {
    date: "Jul 2003",
    emp: "21,633"
  },
  {
    date: "Aug 2003",
    emp: "21,556"
  },
  {
    date: "Sep 2003",
    emp: "21,504"
  },
  {
    date: "Oct 2003",
    emp: "21,558"
  },
  {
    date: "Nov 2003",
    emp: "21,535"
  },
  {
    date: "Dec 2003",
    emp: "21,546"
  },
  {
    date: "Jan 2004",
    emp: "21,538"
  },
  {
    date: "Feb 2004",
    emp: "21,550"
  },
  {
    date: "Mar 2004",
    emp: "21,588"
  },
  {
    date: "Apr 2004",
    emp: "21,614"
  },
  {
    date: "May 2004",
    emp: "21,614"
  },
  {
    date: "Jun 2004",
    emp: "21,601"
  },
  {
    date: "Jul 2004",
    emp: "21,606"
  },
  {
    date: "Aug 2004",
    emp: "21,626"
  },
  {
    date: "Sep 2004",
    emp: "21,635"
  },
  {
    date: "Oct 2004",
    emp: "21,656"
  },
  {
    date: "Nov 2004",
    emp: "21,692"
  },
  {
    date: "Dec 2004",
    emp: "21,693"
  },
  {
    date: "Jan 2005",
    emp: "21,735"
  },
  {
    date: "Feb 2005",
    emp: "21,744"
  },
  {
    date: "Mar 2005",
    emp: "21,740"
  },
  {
    date: "Apr 2005",
    emp: "21,754"
  },
  {
    date: "May 2005",
    emp: "21,781"
  },
  {
    date: "Jun 2005",
    emp: "21,763"
  },
  {
    date: "Jul 2005",
    emp: "21,857"
  },
  {
    date: "Aug 2005",
    emp: "21,863"
  },
  {
    date: "Sep 2005",
    emp: "21,845"
  },
  {
    date: "Oct 2005",
    emp: "21,829"
  },
  {
    date: "Nov 2005",
    emp: "21,859"
  },
  {
    date: "Dec 2005",
    emp: "21,879"
  },
  {
    date: "Jan 2006",
    emp: "21,847"
  },
  {
    date: "Feb 2006",
    emp: "21,878"
  },
  {
    date: "Mar 2006",
    emp: "21,903"
  },
  {
    date: "Apr 2006",
    emp: "21,919"
  },
  {
    date: "May 2006",
    emp: "21,926"
  },
  {
    date: "Jun 2006",
    emp: "21,922"
  },
  {
    date: "Jul 2006",
    emp: "21,973"
  },
  {
    date: "Aug 2006",
    emp: "22,011"
  },
  {
    date: "Sep 2006",
    emp: "22,082"
  },
  {
    date: "Oct 2006",
    emp: "22,068"
  },
  {
    date: "Nov 2006",
    emp: "22,083"
  },
  {
    date: "Dec 2006",
    emp: "22,088"
  },
  {
    date: "Jan 2007",
    emp: "22,095"
  },
  {
    date: "Feb 2007",
    emp: "22,131"
  },
  {
    date: "Mar 2007",
    emp: "22,149"
  },
  {
    date: "Apr 2007",
    emp: "22,175"
  },
  {
    date: "May 2007",
    emp: "22,193"
  },
  {
    date: "Jun 2007",
    emp: "22,207"
  },
  {
    date: "Jul 2007",
    emp: "22,171"
  },
  {
    date: "Aug 2007",
    emp: "22,226"
  },
  {
    date: "Sep 2007",
    emp: "22,279"
  },
  {
    date: "Oct 2007",
    emp: "22,297"
  },
  {
    date: "Nov 2007",
    emp: "22,334"
  },
  {
    date: "Dec 2007",
    emp: "22,376"
  },
  {
    date: "Jan 2008",
    emp: "22,388"
  },
  {
    date: "Feb 2008",
    emp: "22,417"
  },
  {
    date: "Mar 2008",
    emp: "22,443"
  },
  {
    date: "Apr 2008",
    emp: "22,450"
  },
  {
    date: "May 2008",
    emp: "22,483"
  },
  {
    date: "Jun 2008",
    emp: "22,517"
  },
  {
    date: "Jul 2008",
    emp: "22,568"
  },
  {
    date: "Aug 2008",
    emp: "22,567"
  },
  {
    date: "Sep 2008",
    emp: "22,537"
  },
  {
    date: "Oct 2008",
    emp: "22,549"
  },
  {
    date: "Nov 2008",
    emp: "22,560"
  },
  {
    date: "Dec 2008",
    emp: "22,556"
  },
  {
    date: "Jan 2009",
    emp: "22,579"
  },
  {
    date: "Feb 2009",
    emp: "22,576"
  },
  {
    date: "Mar 2009",
    emp: "22,560"
  },
  {
    date: "Apr 2009",
    emp: "22,677"
  },
  {
    date: "May 2009",
    emp: "22,617"
  },
  {
    date: "Jun 2009",
    emp: "22,576"
  },
  {
    date: "Jul 2009",
    emp: "22,521"
  },
  {
    date: "Aug 2009",
    emp: "22,537"
  },
  {
    date: "Sep 2009",
    emp: "22,451"
  },
  {
    date: "Oct 2009",
    emp: "22,524"
  },
  {
    date: "Nov 2009",
    emp: "22,533"
  },
  {
    date: "Dec 2009",
    emp: "22,482"
  },
  {
    date: "Jan 2010",
    emp: "22,491"
  },
  {
    date: "Feb 2010",
    emp: "22,476"
  },
  {
    date: "Mar 2010",
    emp: "22,518"
  },
  {
    date: "Apr 2010",
    emp: "22,569"
  },
  {
    date: "May 2010",
    emp: "22,996"
  },
  {
    date: "Jun 2010",
    emp: "22,740"
  },
  {
    date: "Jul 2010",
    emp: "22,569"
  },
  {
    date: "Aug 2010",
    emp: "22,420"
  },
  {
    date: "Sep 2010",
    emp: "22,247"
  },
  {
    date: "Oct 2010",
    emp: "22,297"
  },
  {
    date: "Nov 2010",
    emp: "22,287"
  },
  {
    date: "Dec 2010",
    emp: "22,266"
  },
  {
    date: "Jan 2011",
    emp: "22,258"
  },
  {
    date: "Feb 2011",
    emp: "22,215"
  },
  {
    date: "Mar 2011",
    emp: "22,192"
  },
  {
    date: "Apr 2011",
    emp: "22,184"
  },
  {
    date: "May 2011",
    emp: "22,129"
  },
  {
    date: "Jun 2011",
    emp: "22,164"
  },
  {
    date: "Jul 2011",
    emp: "22,049"
  },
  {
    date: "Aug 2011",
    emp: "22,017"
  },
  {
    date: "Sep 2011",
    emp: "21,983"
  },
  {
    date: "Oct 2011",
    emp: "21,998"
  },
  {
    date: "Nov 2011",
    emp: "21,971"
  },
  {
    date: "Dec 2011",
    emp: "21,954"
  },
  {
    date: "Jan 2012",
    emp: "21,945"
  },
  {
    date: "Feb 2012",
    emp: "21,941"
  },
  {
    date: "Mar 2012",
    emp: "21,943"
  },
  {
    date: "Apr 2012",
    emp: "21,928"
  },
  {
    date: "May 2012",
    emp: "21,913"
  },
  {
    date: "Jun 2012",
    emp: "21,928"
  },
  {
    date: "Jul 2012",
    emp: "21,911"
  },
  {
    date: "Aug 2012",
    emp: "21,927"
  },
  {
    date: "Sep 2012",
    emp: "21,928"
  },
  {
    date: "Oct 2012",
    emp: "21,896"
  },
  {
    date: "Nov 2012",
    emp: "21,874"
  },
  {
    date: "Dec 2012",
    emp: "21,884"
  },
  {
    date: "Jan 2013",
    emp: "21,871"
  },
  {
    date: "Feb 2013",
    emp: "21,885"
  },
  {
    date: "Mar 2013",
    emp: "21,870"
  },
  {
    date: "Apr 2013",
    emp: "21,869"
  },
  {
    date: "May 2013",
    emp: "21,862"
  },
  {
    date: "Jun 2013",
    emp: "21,835"
  },
  {
    date: "Jul 2013",
    emp: "21,813"
  },
  {
    date: "Aug 2013",
    emp: "21,840"
  },
  {
    date: "Sep 2013",
    emp: "21,846"
  },
  {
    date: "Oct 2013",
    emp: "21,832"
  },
  {
    date: "Nov 2013",
    emp: "21,843"
  },
  {
    date: "Dec 2013",
    emp: "21,817"
  },
  {
    date: "Jan 2014",
    emp: "21,807"
  },
  {
    date: "Feb 2014",
    emp: "21,817"
  },
  {
    date: "Mar 2014",
    emp: "21,828"
  },
  {
    date: "Apr 2014",
    emp: "21,856"
  },
  {
    date: "May 2014",
    emp: "21,854"
  },
  {
    date: "Jun 2014",
    emp: "21,893"
  },
  {
    date: "Jul 2014",
    emp: "21,881"
  },
  {
    date: "Aug 2014",
    emp: "21,868"
  },
  {
    date: "Sep 2014",
    emp: "21,917"
  },
  {
    date: "Oct 2014",
    emp: "21,927"
  },
  {
    date: "Nov 2014",
    emp: "21,934"
  },
  {
    date: "Dec 2014",
    emp: "21,947"
  },
  {
    date: "Jan 2015",
    emp: "21,954"
  },
  {
    date: "Feb 2015",
    emp: "21,967"
  },
  {
    date: "Mar 2015",
    emp: "21,961"
  },
  {
    date: "Apr 2015",
    emp: "21,971"
  },
  {
    date: "May 2015",
    emp: "21,988"
  },
  {
    date: "Jun 2015",
    emp: "21,990"
  },
  {
    date: "Jul 2015",
    emp: "22,022"
  },
  {
    date: "Aug 2015",
    emp: "22,049"
  },
  {
    date: "Sep 2015",
    emp: "22,036"
  },
  {
    date: "Oct 2015",
    emp: "22,027"
  },
  {
    date: "Nov 2015",
    emp: "22,028"
  },
  {
    date: "Dec 2015",
    emp: "22,040"
  }
];*/
class BalancedPortfolioAgainstDollars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.wholething = React.createRef();
  }
  handleTooltipMove = (
    event,
    lowestDates,
    highestDates,
    highestValues,
    lowestValues,
    touch
  ) => {
    var e = null;
    if (touch) {
      e = event.touches[0];
    } else {
      e = event;
    }
    const tooltipLeft = e.pageX - this.wholething.current.offsetLeft;
    const tooltipValue =
      (highestValues - lowestValues) *
      ((e.pageY - this.wholething.current.offsetTop) /
        this.wholething.current.offsetTop);
    this.setState({
      tooltipMove: true,
      tooltipLeft,
      tooltipValue
    });
    var width = Math.min(600, this.props.width - 60);
    clearTimeout(this.stopTooltip);
    this.stopTooltip = setTimeout(() => {
      var tooltipDate = new Date(
        Math.round(
          lowestDates + (tooltipLeft / width) * (highestDates - lowestDates)
        ) + "-01-01"
      ).toLocaleDateString();
      this.setState({
        tooltipMove: false,
        tooltipDate
      });
    }, 200);
  };
  render() {
    var populationDates = [];
    var dates = [];
    var corpBondBaaValueLastTrades = [];
    var tBondValueLastTrades = [];
    var tBill3MoValueLastTrades = [];
    var top500PublicValueLastTrades = [];
    //var employment = [];
    //var employments = [];
    /*employmentdata.map((da) => {
      const year = Number(da.date.split(" ")[1]);
      const emp = Number(da.emp.replace(",", ""));
      employments.push(emp);
      return employment.push({ year, emp });
    });*/
    var population = [];
    censusPopData.map((da) => {
      const year = new Date(da.date).getFullYear();
      populationDates.push(year);
      return population.push({ year, pop: da.pop });
    });
    var historicalData = [];
    historicaldata.map((da, i) => {
      if (historicaldata[i - 1]) {
        const popEmp = population.find((x) => x.year === da.year);
        da.population = Math.round(
          Number(popEmp.pop) //* 1000000
        );
        /*const empDa = employment.find((x) => x.year === da.year);
        da.employment = 0;
        if (empDa) {
          da.employment = Math.round(
            (empDa.emp / (da.population * 1000)) * 100
          );
        }
        employments.push(da.employment);*/
        dates.push(da.year);
        const tb3mvlt = Math.round(
          (historicaldata[i - 1].tBill3MoValueLastTrade +
            historicaldata[i - 1].tBill3MoValueLastTrade *
              (da.tBill3MoValueNetYear / 100)) /
            da.population
        );
        const tbvlt = Math.round(
          (historicaldata[i - 1].tBondValueLastTrade +
            historicaldata[i - 1].tBondValueLastTrade *
              (da.tBill3MoValueNetYear / 100)) /
            da.population
        );
        const cbbvlt = Math.round(
          (historicaldata[i - 1].corpBondBaaValueLastTrade +
            historicaldata[i - 1].corpBondBaaValueLastTrade *
              (da.corpBondBaaValueNetYear / 100)) /
            da.population
        );
        const t5pvlt = Math.round(
          (historicaldata[i - 1].top500PublicValueLastTrade +
            historicaldata[i - 1].top500PublicValueLastTrade *
              (da.top500PublicValueNetYear / 100)) /
            da.population
        );
        const tBill3MoValueLastTrade =
          !isNaN(tb3mvlt) && isFinite(tb3mvlt) ? tb3mvlt : 0;
        const tBondValueLastTrade =
          !isNaN(tbvlt) && isFinite(tbvlt) ? tbvlt : 0;
        const corpBondBaaValueLastTrade =
          !isNaN(cbbvlt) && isFinite(cbbvlt) ? cbbvlt : 0;
        const top500PublicValueLastTrade =
          !isNaN(t5pvlt) && isFinite(t5pvlt) ? t5pvlt : 0;
        top500PublicValueLastTrades.push(tBill3MoValueLastTrade);
        corpBondBaaValueLastTrades.push(tBondValueLastTrade);
        tBondValueLastTrades.push(corpBondBaaValueLastTrade);
        tBill3MoValueLastTrades.push(top500PublicValueLastTrade);
        return historicalData.push({
          year: da.year,
          population: da.population,
          employment: da.employment,
          tBill3MoValueLastTrade,
          tBondValueLastTrade,
          corpBondBaaValueLastTrade,
          top500PublicValueLastTrade
        });
      } else return null;
    });
    /*top500PublicValueNetYearsAsPercentage.map((va, i) => {
      const endTotal =
        top500PublicValueNetYearsAsPercentage[i - 1] +
        top500PublicValueNetYearsAsPercentage[i - 1] * (va / 100);
      console.log(endTotal);
      return top500PublicValueNetYears.push(endTotal);
    });*/
    const values = [
      ...top500PublicValueLastTrades,
      ...corpBondBaaValueLastTrades,
      ...tBondValueLastTrades,
      ...tBill3MoValueLastTrades
    ];
    var lowestDates = Math.min(...dates);
    var highestDates = Math.max(...dates);
    var lowestValues = Math.min(...values);
    var highestValues = Math.max(...values);
    //var lowestEmployment = Math.min(...employments);
    //var highestEmployment = Math.max(...employments);
    //console.log(historicalData);
    var width = Math.min(600, this.props.width - 60);
    if (width) {
      return (
        <div
          style={{
            width: "140%"
          }}
        >
          <div
            style={{
              opacity: ".7",
              width: "90%",
              display: "flex",
              flexWrap: "wrap",
              height: "min-content"
            }}
          >
            <div
              style={{
                margin: "0px 4px",
                padding: "0px 4px",
                height: "44px",
                color: "rgb(255,120,50)",
                fontSize: "14px",
                display: "flex",
                width: "max-content)",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgb(25,20,50)"
              }}
            >
              top500PublicValue+Dividends
            </div>
            <div
              style={{
                margin: "0px 4px",
                padding: "0px 4px",
                height: "44px",
                color: "rgb(5,230,50)",
                fontSize: "14px",
                display: "flex",
                width: "max-content",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgb(25,20,50)"
              }}
            >
              sovereignBondReturn
            </div>
            <div
              style={{
                margin: "0px 4px",
                padding: "0px 4px",
                height: "44px",
                color: "rgb(195,70,240)",
                fontSize: "14px",
                display: "flex",
                width: "max-content)",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgb(25,20,50)"
              }}
            >
              corporateBondReturn
            </div>
            <div
              style={{
                margin: "0px 4px",
                padding: "0px 4px",
                height: "44px",
                color: "rgb(230,230,230)",
                fontSize: "14px",
                display: "flex",
                width: "max-content)",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgb(25,20,50)"
              }}
            >
              tBill3moReturn
            </div>
          </div>
          Per person
          <br />
          <div style={{ position: "relative" }}>
            {this.state.tooltipLeft && (
              <div
                style={{
                  left: this.state.tooltipLeft,
                  position: "absolute",
                  color: this.state.tooltipMove ? "grey" : ""
                }}
              >
                {this.state.tooltipDate}
                <br />
                {this.state.tooltipValue}
              </div>
            )}
          </div>
          <div ref={this.wholething}>
            <svg
              onTouchMove={(e) => {
                this.handleTooltipMove(
                  e,
                  lowestDates,
                  highestDates,
                  highestValues,
                  lowestValues,
                  true
                );
              }}
              onTouchEnd={() =>
                this.setState({ tooltipLeft: null, tooltipDate: null })
              }
              onDrag={(e) => {
                this.handleTooltipMove(
                  e,
                  lowestDates,
                  highestDates,
                  highestValues,
                  lowestValues
                );
              }}
              onDragExit={() =>
                this.setState({ tooltipLeft: null, tooltipDate: null })
              }
              style={{
                transform: "scale(1,-1)",
                display: "flex",

                width: "100%",
                height: "260px"
              }}
              xmlns="https://www.w3.org/2000/svg"
            >
              {width && (
                <g>
                  {historicalData
                    .map((x, i) => [
                      ((x.year - lowestDates) / (highestDates - lowestDates)) *
                        width,
                      ((x.top500PublicValueLastTrade - lowestValues) /
                        (highestValues - lowestValues)) *
                        260
                    ])
                    .map(
                      ([x, y], i) =>
                        !isNaN(x) &&
                        !isNaN(y) &&
                        y > 0 && (
                          <rect
                            x={x}
                            y={y}
                            width={3}
                            height={3}
                            stroke="rgb(255,120,50)"
                            fill="transparent"
                            strokeWidth=""
                            key={i}
                          />
                        )
                    )}
                  {historicalData
                    .map((x, i) => [
                      ((x.year - lowestDates) / (highestDates - lowestDates)) *
                        width,
                      ((x.corpBondBaaValueLastTrade - lowestValues) /
                        (highestValues - lowestValues)) *
                        260
                    ])
                    .map(
                      ([x, y], i) =>
                        !isNaN(x) &&
                        !isNaN(y) &&
                        y > 0 && (
                          <rect
                            x={x}
                            y={y}
                            width={3}
                            height={3}
                            stroke="rgb(5,230,50)"
                            fill="transparent"
                            strokeWidth=""
                            key={i}
                          />
                        )
                    )}
                  {historicalData
                    .map((x, i) => [
                      ((x.year - lowestDates) / (highestDates - lowestDates)) *
                        width,
                      ((x.tBondValueLastTrade - lowestValues) /
                        (highestValues - lowestValues)) *
                        260
                    ])
                    .map(
                      ([x, y], i) =>
                        !isNaN(x) &&
                        !isNaN(y) &&
                        y > 0 && (
                          <rect
                            x={x}
                            y={y}
                            width={3}
                            height={3}
                            stroke="rgb(195,70,240)"
                            fill="transparent"
                            strokeWidth=""
                            key={i}
                          />
                        )
                    )}
                  {historicalData
                    .map((x, i) => [
                      ((x.year - lowestDates) / (highestDates - lowestDates)) *
                        width,
                      ((x.tBill3MoValueLastTrade - lowestValues) /
                        (highestValues - lowestValues)) *
                        260
                    ])
                    .map(
                      ([x, y], i) =>
                        !isNaN(x) &&
                        !isNaN(y) &&
                        y > 0 && (
                          <rect
                            x={x}
                            y={y}
                            width={3}
                            height={3}
                            stroke="rgb(55,20,250)"
                            fill="transparent"
                            strokeWidth=""
                            key={i}
                          />
                        )
                    )}
                </g>
              )}
              {/* <NaturalCurve
                showPoints={false}
                strokeWidth={3}
                stroke="rgb(55,20,250)"
                data={historicalData.map((x, i) => [
                  ((x.year - lowestDates) / (highestDates - lowestDates)) *
                    width,
                  ((x.employment - lowestEmployment) /
                    (highestEmployment - lowestEmployment)) *
                    260
                ])}
              />*/}
            </svg>
          </div>
          <div style={{ position: "relative" }}>
            {" "}
            <div
              style={{
                color: "white",
                position: "absolute",
                left: "0px",
                bottom: "10px",
                backgroundColor: "rgb(20,20,20)"
              }}
            >
              1928
            </div>
          </div>
        </div>
      );
    } else return null;
  }
}
export default BalancedPortfolioAgainstDollars;
