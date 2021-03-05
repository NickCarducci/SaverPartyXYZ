import React from "react";
import { NaturalCurve } from "react-svg-curve";

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
class BalancedPortfolioAgainstDollars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.wholething = React.createRef();
  }
  handleTooltipMove = (e, lowestDates, highestDates) => {
    const tooltipLeft = e.pageX - this.wholething.current.offsetLeft;
    this.setState({
      tooltipMove: true,
      tooltipLeft
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
    var population = [];
    censusPopData.map((da) => {
      const year = new Date(da.date).getFullYear();
      populationDates.push(year);
      return population.push({ year, pop: da.pop });
    });
    var historicalData = [];
    historicaldata.map((da, i) => {
      if (historicaldata[i - 1]) {
        da.population = Math.round(
          Number(population.find((x) => x.year === da.year).pop) //* 1000000
        );
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
                width: "min-content)",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgb(25,20,50)"
              }}
            >
              top500PublicReturn
            </div>
            <div
              style={{
                margin: "0px 4px",
                padding: "0px 4px",
                height: "44px",
                color: "rgb(5,230,50)",
                fontSize: "14px",
                display: "flex",
                width: "min-content",
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
                width: "min-content)",
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
                width: "min-content)",
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
              </div>
            )}
          </div>
          <div ref={this.wholething}>
            <svg
              onMouseMove={(e) => {
                this.handleTooltipMove(e, lowestDates, highestDates);
              }}
              onMouseLeave={() =>
                this.setState({ tooltipLeft: null, tooltipDate: null })
              }
              onDrag={(e) => {
                this.handleTooltipMove(e, lowestDates, highestDates);
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
              <NaturalCurve
                showPoints={false}
                strokeWidth={3}
                stroke="rgb(255,120,50)"
                data={historicalData.map((x, i) => [
                  ((x.year - lowestDates) / (highestDates - lowestDates)) *
                    width,
                  ((x.top500PublicValueLastTrade - lowestValues) /
                    (highestValues - lowestValues)) *
                    260
                ])}
              />
              <NaturalCurve
                showPoints={false}
                strokeWidth={3}
                stroke="rgb(5,230,50)"
                data={historicalData.map((x, i) => [
                  ((x.year - lowestDates) / (highestDates - lowestDates)) *
                    width,
                  ((x.corpBondBaaValueLastTrade - lowestValues) /
                    (highestValues - lowestValues)) *
                    260
                ])}
              />
              <NaturalCurve
                showPoints={false}
                strokeWidth={3}
                stroke="rgb(195,70,240)"
                data={historicalData.map((x, i) => [
                  ((x.year - lowestDates) / (highestDates - lowestDates)) *
                    width,
                  ((x.tBondValueLastTrade - lowestValues) /
                    (highestValues - lowestValues)) *
                    260
                ])}
              />
              <NaturalCurve
                showPoints={false}
                strokeWidth={3}
                stroke="rgb(55,20,250)"
                data={historicalData.map((x, i) => [
                  ((x.year - lowestDates) / (highestDates - lowestDates)) *
                    width,
                  ((x.tBill3MoValueLastTrade - lowestValues) /
                    (highestValues - lowestValues)) *
                    260
                ])}
              />
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
