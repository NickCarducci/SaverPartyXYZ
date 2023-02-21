import React from "react";
import { gdpP, gdpPD } from "./gdpPdebt";
import { inimports } from "./indiaimports";
const trade = {
  Austria: [
    {
      date: "1980-01-01",
      imports: 138.5427221,
      exports: 147.112772
    },
    {
      date: "1980-04-01",
      imports: 140.9574468,
      exports: 149.9965958
    },
    {
      date: "1980-07-01",
      imports: 142.5151976,
      exports: 153.9140651
    },
    {
      date: "1980-10-01",
      imports: 144.9594732,
      exports: 165.666473
    },
    {
      date: "1981-01-01",
      imports: 152.2711922,
      exports: 155.9341577
    },
    {
      date: "1981-04-01",
      imports: 156.9993246,
      exports: 157.3076319
    },
    {
      date: "1981-07-01",
      imports: 162.8208376,
      exports: 164.0617266
    },
    {
      date: "1981-10-01",
      imports: 154.6352584,
      exports: 165.2275277
    },
    {
      date: "1982-01-01",
      imports: 160.2034786,
      exports: 165.1472904
    },
    {
      date: "1982-04-01",
      imports: 156.8684566,
      exports: 167.7856823
    },
    {
      date: "1982-07-01",
      imports: 160.0346167,
      exports: 169.7208178
    },
    {
      date: "1982-10-01",
      imports: 157.7085444,
      exports: 169.4329074
    },
    {
      date: "1983-01-01",
      imports: 154.964539,
      exports: 165.1472904
    },
    {
      date: "1983-04-01",
      imports: 151.5873016,
      exports: 167.2193012
    },
    {
      date: "1983-07-01",
      imports: 156.4040865,
      exports: 166.8322741
    },
    {
      date: "1983-10-01",
      imports: 158.7681527,
      exports: 170.9904554
    },
    {
      date: "1984-01-01",
      imports: 158.7259372,
      exports: 173.2135013
    },
    {
      date: "1984-04-01",
      imports: 158.7259372,
      exports: 170.0936853
    },
    {
      date: "1984-07-01",
      imports: 164.0028707,
      exports: 174.4831389
    },
    {
      date: "1984-10-01",
      imports: 164.167511,
      exports: 177.5604762
    },
    {
      date: "1985-01-01",
      imports: 169.8750422,
      exports: 177.598235
    },
    {
      date: "1985-04-01",
      imports: 171.2217156,
      exports: 174.2565865
    },
    {
      date: "1985-07-01",
      imports: 169.6555218,
      exports: 177.6029548
    },
    {
      date: "1985-10-01",
      imports: 164.8514016,
      exports: 175.4837455
    },
    {
      date: "1986-01-01",
      imports: 158.7639311,
      exports: 171.4718794
    },
    {
      date: "1986-04-01",
      imports: 151.0891591,
      exports: 167.4033751
    },
    {
      date: "1986-07-01",
      imports: 149.776258,
      exports: 166.3697296
    },
    {
      date: "1986-10-01",
      imports: 147.7879095,
      exports: 171.7031516
    },
    {
      date: "1987-01-01",
      imports: 145.9768659,
      exports: 166.3697296
    },
    {
      date: "1987-04-01",
      imports: 143.954745,
      exports: 163.7218979
    },
    {
      date: "1987-07-01",
      imports: 145.2085444,
      exports: 164.5761894
    },
    {
      date: "1987-10-01",
      imports: 145.4280648,
      exports: 165.9921422
    },
    {
      date: "1989-01-01",
      imports: 131.8389058,
      exports: 135.4925197
    },
    {
      date: "1989-04-01",
      imports: 131.2056738,
      exports: 137.191663
    },
    {
      date: "1989-07-01",
      imports: 129.8125633,
      exports: 140.7315449
    },
    {
      date: "1989-10-01",
      imports: 129.9392097,
      exports: 138.48018
    },
    {
      date: "1990-01-01",
      imports: 124.9873354,
      exports: 140.0235685
    },
    {
      date: "1990-04-01",
      imports: 111.689463,
      exports: 132.9438047
    },
    {
      date: "1990-07-01",
      imports: 110.9422492,
      exports: 131.2446614
    },
    {
      date: "1990-10-01",
      imports: 112.2087133,
      exports: 130.1118992
    },
    {
      date: "1991-01-01",
      imports: 126.5070922,
      exports: 136.7810367
    },
    {
      date: "1991-04-01",
      imports: 126.1398176,
      exports: 135.7757103
    },
    {
      date: "1991-07-01",
      imports: 126.6464032,
      exports: 140.8872997
    },
    {
      date: "1991-10-01",
      imports: 128.0395137,
      exports: 130.9756304
    },
    {
      date: "1992-01-01",
      imports: 128.2928065,
      exports: 136.2004961
    },
    {
      date: "1992-04-01",
      imports: 124.6073962,
      exports: 135.7757103
    },
    {
      date: "1992-07-01",
      imports: 125.2406282,
      exports: 133.5243454
    },
    {
      date: "1992-10-01",
      imports: 120.3140831,
      exports: 133.6517811
    },
    {
      date: "1993-01-01",
      imports: 122.2137791,
      exports: 130.536685
    },
    {
      date: "1993-04-01",
      imports: 121.1879433,
      exports: 126.5720173
    },
    {
      date: "1993-07-01",
      imports: 120.6940223,
      exports: 131.1172257
    },
    {
      date: "1993-10-01",
      imports: 119.9214792,
      exports: 125.0286288
    },
    {
      date: "1994-01-01",
      imports: 120.5547113,
      exports: 123.3294855
    },
    {
      date: "1994-04-01",
      imports: 118.7943262,
      exports: 101.6654082
    },
    {
      date: "1994-07-01",
      imports: 118.275076,
      exports: 126.9968031
    },
    {
      date: "1994-10-01",
      imports: 118.0217832,
      exports: 127.8605343
    },
    {
      date: "1996-01-01",
      imports: 116.7173252,
      exports: 111.3149847
    },
    {
      date: "1996-04-01",
      imports: 110.6382979,
      exports: 117.4311927
    },
    {
      date: "1996-07-01",
      imports: 116.7173252,
      exports: 117.4311927
    },
    {
      date: "1996-10-01",
      imports: 119.1489362,
      exports: 113.7614679
    },
    {
      date: "1997-01-01",
      imports: 106.9908815,
      exports: 108.8685015
    },
    {
      date: "1997-04-01",
      imports: 105.775076,
      exports: 114.9847095
    },
    {
      date: "1997-07-01",
      imports: 115.5015198,
      exports: 113.7614679
    },
    {
      date: "1997-10-01",
      imports: 116.7173252,
      exports: 112.5382263
    },
    {
      date: "1998-01-01",
      imports: 100.9118541,
      exports: 107.6452599
    },
    {
      date: "1998-04-01",
      imports: 98.48024316,
      exports: 110.0917431
    },
    {
      date: "1998-07-01",
      imports: 110.6382979,
      exports: 111.3149847
    },
    {
      date: "1998-10-01",
      imports: 111.8541033,
      exports: 105.1987768
    },
    {
      date: "1999-01-01",
      imports: 93.61702128,
      exports: 97.85932722
    },
    {
      date: "1999-04-01",
      imports: 91.18541033,
      exports: 105.1987768
    },
    {
      date: "1999-07-01",
      imports: 106.9908815,
      exports: 106.4220184
    },
    {
      date: "1999-10-01",
      imports: 106.9908815,
      exports: 96.63608563
    },
    {
      date: "2000-01-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-04-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-07-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-10-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2001-01-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2001-04-01",
      imports: 100,
      exports: 99
    },
    {
      date: "2001-07-01",
      imports: 100,
      exports: 97
    },
    {
      date: "2001-10-01",
      imports: 99,
      exports: 96
    },
    {
      date: "2002-01-01",
      imports: 99.2,
      exports: 98.7
    },
    {
      date: "2002-04-01",
      imports: 98.7,
      exports: 98
    },
    {
      date: "2002-07-01",
      imports: 97.7,
      exports: 95.7
    },
    {
      date: "2002-10-01",
      imports: 94.8,
      exports: 102.21
    },
    {
      date: "2003-01-01",
      imports: 98,
      exports: 95
    },
    {
      date: "2003-04-01",
      imports: 92,
      exports: 94
    },
    {
      date: "2003-07-01",
      imports: 91,
      exports: 89
    },
    {
      date: "2003-10-01",
      imports: 92,
      exports: 92
    },
    {
      date: "2004-01-01",
      imports: 95,
      exports: 94
    },
    {
      date: "2004-04-01",
      imports: 90,
      exports: 95
    },
    {
      date: "2004-07-01",
      imports: 90,
      exports: 90
    },
    {
      date: "2004-10-01",
      imports: 94,
      exports: 93
    }
  ],
  Belgium: [
    {
      date: "1972-01-01",
      imports: 0,
      exports: 32.76263074
    },
    {
      date: "1972-04-01",
      imports: 0,
      exports: 32.89932597
    },
    {
      date: "1972-07-01",
      imports: 0,
      exports: 33.09632792
    },
    {
      date: "1972-10-01",
      imports: 0,
      exports: 33.50239317
    },
    {
      date: "1973-01-01",
      imports: 0,
      exports: 34.19793068
    },
    {
      date: "1973-04-01",
      imports: 0,
      exports: 35.42014687
    },
    {
      date: "1973-07-01",
      imports: 0,
      exports: 36.27650229
    },
    {
      date: "1973-10-01",
      imports: 0,
      exports: 38.34703301
    },
    {
      date: "1974-01-01",
      imports: 0,
      exports: 41.70008664
    },
    {
      date: "1974-04-01",
      imports: 0,
      exports: 45.5074509
    },
    {
      date: "1974-07-01",
      imports: 0,
      exports: 46.7055444
    },
    {
      date: "1974-10-01",
      imports: 0,
      exports: 46.73770798
    },
    {
      date: "1975-01-01",
      imports: 0,
      exports: 46.16278392
    },
    {
      date: "1975-04-01",
      imports: 0,
      exports: 45.44714418
    },
    {
      date: "1975-07-01",
      imports: 0,
      exports: 46.64121723
    },
    {
      date: "1975-10-01",
      imports: 0,
      exports: 47.91971969
    },
    {
      date: "1976-01-01",
      imports: 0,
      exports: 48.05239448
    },
    {
      date: "1976-04-01",
      imports: 0,
      exports: 48.70370705
    },
    {
      date: "1976-07-01",
      imports: 0,
      exports: 49.81737115
    },
    {
      date: "1976-10-01",
      imports: 0,
      exports: 49.05348603
    },
    {
      date: "1977-01-01",
      imports: 0,
      exports: 49.44748993
    },
    {
      date: "1977-04-01",
      imports: 0,
      exports: 49.88571877
    },
    {
      date: "1977-07-01",
      imports: 0,
      exports: 49.22234485
    },
    {
      date: "1977-10-01",
      imports: 0,
      exports: 49.56006248
    },
    {
      date: "1978-01-01",
      imports: 0,
      exports: 49.33893784
    },
    {
      date: "1978-04-01",
      imports: 0,
      exports: 49.99025041
    },
    {
      date: "1978-07-01",
      imports: 0,
      exports: 50.50486776
    },
    {
      date: "1978-10-01",
      imports: 0,
      exports: 50.28374312
    },
    {
      date: "1979-01-01",
      imports: 0,
      exports: 52.66384833
    },
    {
      date: "1979-04-01",
      imports: 0,
      exports: 54.89921742
    },
    {
      date: "1979-07-01",
      imports: 0,
      exports: 58.06330999
    },
    {
      date: "1980-01-01",
      imports: 0,
      exports: 70.89658001
    },
    {
      date: "1980-04-01",
      imports: 0,
      exports: 70.89658001
    },
    {
      date: "1980-07-01",
      imports: 0,
      exports: 71.88561021
    },
    {
      date: "1980-10-01",
      imports: 0,
      exports: 77.79566877
    },
    {
      date: "1981-01-01",
      imports: 0,
      exports: 80.75069805
    },
    {
      date: "1981-04-01",
      imports: 0,
      exports: 82.71669712
    },
    {
      date: "1981-07-01",
      imports: 0,
      exports: 85.6717264
    },
    {
      date: "1981-10-01",
      imports: 0,
      exports: 84.68269619
    },
    {
      date: "1982-01-01",
      imports: 0,
      exports: 90.59275475
    },
    {
      date: "1982-04-01",
      imports: 0,
      exports: 93.54778403
    },
    {
      date: "1982-07-01",
      imports: 0,
      exports: 97.49184352
    },
    {
      date: "1982-10-01",
      imports: 0,
      exports: 99.45784259
    },
    {
      date: "1983-01-01",
      imports: 0,
      exports: 99.45784259
    },
    {
      date: "1983-04-01",
      imports: 0,
      exports: 100.4468728
    },
    {
      date: "1983-07-01",
      imports: 0,
      exports: 103.4019021
    },
    {
      date: "1983-10-01",
      imports: 0,
      exports: 104.3788709
    },
    {
      date: "1984-01-01",
      imports: 0,
      exports: 110.2889295
    },
    {
      date: "1984-04-01",
      imports: 0,
      exports: 108.3229304
    },
    {
      date: "1984-07-01",
      imports: 0,
      exports: 110.2889295
    },
    {
      date: "1984-10-01",
      imports: 0,
      exports: 113.2439588
    },
    {
      date: "1985-01-01",
      imports: 0,
      exports: 114.232989
    },
    {
      date: "1985-04-01",
      imports: 0,
      exports: 116.1989881
    },
    {
      date: "1985-07-01",
      imports: 0,
      exports: 111.2779597
    },
    {
      date: "1985-10-01",
      imports: 0,
      exports: 109.2998993
    },
    {
      date: "1986-01-01",
      imports: 0,
      exports: 103.4019021
    },
    {
      date: "1986-04-01",
      imports: 0,
      exports: 97.49184352
    },
    {
      date: "1986-07-01",
      imports: 0,
      exports: 92.55875382
    },
    {
      date: "1986-10-01",
      imports: 0,
      exports: 93.54778403
    },
    {
      date: "1987-01-01",
      imports: 0,
      exports: 90.59275475
    },
    {
      date: "1987-04-01",
      imports: 0,
      exports: 90.59275475
    },
    {
      date: "1987-07-01",
      imports: 0,
      exports: 91.58178496
    },
    {
      date: "1987-10-01",
      imports: 0,
      exports: 91.58178496
    },
    {
      date: "1988-01-01",
      imports: 0,
      exports: 92.55875382
    },
    {
      date: "1988-04-01",
      imports: 0,
      exports: 92.55875382
    },
    {
      date: "1988-07-01",
      imports: 0,
      exports: 95.5137831
    },
    {
      date: "1988-10-01",
      imports: 0,
      exports: 95.5137831
    },
    {
      date: "1989-01-01",
      imports: 0,
      exports: 99.45784259
    },
    {
      date: "1989-04-01",
      imports: 0,
      exports: 102.4128719
    },
    {
      date: "1989-07-01",
      imports: 0,
      exports: 100.4468728
    },
    {
      date: "1989-10-01",
      imports: 0,
      exports: 99.45784259
    },
    {
      date: "1990-01-01",
      imports: 0,
      exports: 99.45784259
    },
    {
      date: "1990-04-01",
      imports: 0,
      exports: 98.46881238
    },
    {
      date: "1990-07-01",
      imports: 0,
      exports: 98.46881238
    },
    {
      date: "1990-10-01",
      imports: 0,
      exports: 101.4238417
    },
    {
      date: "1991-01-01",
      imports: 0,
      exports: 97.49184352
    },
    {
      date: "1991-04-01",
      imports: 0,
      exports: 97.49184352
    },
    {
      date: "1991-07-01",
      imports: 0,
      exports: 97.49184352
    },
    {
      date: "1991-10-01",
      imports: 0,
      exports: 97.49184352
    },
    {
      date: "1992-01-01",
      imports: 0,
      exports: 96.50281331
    },
    {
      date: "1992-04-01",
      imports: 0,
      exports: 97.49184352
    },
    {
      date: "1992-07-01",
      imports: 0,
      exports: 93.54778403
    },
    {
      date: "1992-10-01",
      imports: 0,
      exports: 92.55875382
    },
    {
      date: "1993-01-01",
      imports: 99.66976165,
      exports: 99.45784259
    },
    {
      date: "1993-04-01",
      imports: 98.66468843,
      exports: 99.31310646
    },
    {
      date: "1993-07-01",
      imports: 100.4355317,
      exports: 100.1574005
    },
    {
      date: "1993-10-01",
      imports: 101.2371973,
      exports: 101.1584921
    },
    {
      date: "1994-01-01",
      imports: 102.1704796,
      exports: 101.2187988
    },
    {
      date: "1994-04-01",
      imports: 102.3978176,
      exports: 100.8569585
    },
    {
      date: "1994-07-01",
      imports: 101.368814,
      exports: 100.6880997
    },
    {
      date: "1994-10-01",
      imports: 101.9311764,
      exports: 101.9183568
    },
    {
      date: "1995-01-01",
      imports: 105.3053508,
      exports: 103.5225155
    },
    {
      date: "1995-04-01",
      imports: 104.5635111,
      exports: 102.1837063
    },
    {
      date: "1995-07-01",
      imports: 104.9703264,
      exports: 103.0159391
    },
    {
      date: "1995-10-01",
      imports: 105.3053508,
      exports: 103.1847979
    },
    {
      date: "1996-01-01",
      imports: 108.7752465,
      exports: 105.223165
    },
    {
      date: "1996-04-01",
      imports: 108.2727099,
      exports: 106.3207473
    },
    {
      date: "1996-07-01",
      imports: 108.5718388,
      exports: 105.5488213
    },
    {
      date: "1996-10-01",
      imports: 110.0674835,
      exports: 105.4885146
    },
    {
      date: "1997-01-01",
      imports: 114.0997416,
      exports: 109.7582304
    },
    {
      date: "1997-04-01",
      imports: 115.0090935,
      exports: 110.9523034
    },
    {
      date: "1997-07-01",
      imports: 117.3662295,
      exports: 112.5926462
    },
    {
      date: "1997-10-01",
      imports: 116.1338183,
      exports: 111.7604135
    },
    {
      date: "1998-01-01",
      imports: 115.8705849,
      exports: 113.7264125
    },
    {
      date: "1998-04-01",
      imports: 114.4706614,
      exports: 112.3876034
    },
    {
      date: "1998-07-01",
      imports: 113.0348425,
      exports: 110.6507698
    },
    {
      date: "1998-10-01",
      imports: 110.4982292,
      exports: 107.7560473
    },
    {
      date: "1999-01-01",
      imports: 110.7375323,
      exports: 108.1540716
    },
    {
      date: "1999-04-01",
      imports: 113.4775534,
      exports: 109.5170035
    },
    {
      date: "1999-07-01",
      imports: 115.6073514,
      exports: 111.3865118
    },
    {
      date: "1999-10-01",
      imports: 119.376376,
      exports: 113.0509773
    },
    {
      date: "2000-01-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-04-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-07-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-10-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2001-01-01",
      imports: 102.5653298,
      exports: 101.85805
    },
    {
      date: "2001-04-01",
      imports: 104.5036853,
      exports: 103.7516811
    },
    {
      date: "2001-07-01",
      imports: 103.1396573,
      exports: 102.4249332
    },
    {
      date: "2001-10-01",
      imports: 99.4304585,
      exports: 100.7484064
    },
    {
      date: "2002-01-01",
      imports: 100.6748349,
      exports: 101.5806391
    },
    {
      date: "2002-04-01",
      imports: 100.0406815,
      exports: 101.6168232
    },
    {
      date: "2002-07-01",
      imports: 99.63386618,
      exports: 101.2187988
    },
    {
      date: "2002-10-01",
      imports: 99.59797071,
      exports: 100.6519156
    },
    {
      date: "2003-01-01",
      imports: 99.7415526,
      exports: 100.2177073
    },
    {
      date: "2003-04-01",
      imports: 97.33655595,
      exports: 98.25170819
    },
    {
      date: "2003-07-01",
      imports: 97.63568489,
      exports: 98.04666534
    },
    {
      date: "2003-10-01",
      imports: 96.43916914,
      exports: 96.68373347
    },
    {
      date: "2004-01-01",
      imports: 95.63750359,
      exports: 98.34819894
    },
    {
      date: "2004-04-01",
      imports: 100.531253,
      exports: 100.9172652
    },
    {
      date: "2004-07-01",
      imports: 101.440605,
      exports: 99.59051737
    },
    {
      date: "2004-10-01",
      imports: 100.1722983,
      exports: 101.5565164
    },
    {
      date: "2005-01-01",
      imports: 103.4746817,
      exports: 103.3536567
    },
    {
      date: "2005-04-01",
      imports: 103.6062985,
      exports: 105.5246986
    },
    {
      date: "2005-07-01",
      imports: 107.6026611,
      exports: 103.8240491
    },
    {
      date: "2005-10-01",
      imports: 108.1410931,
      exports: 107.4183296
    },
    {
      date: "2006-01-01",
      imports: 112.8807313,
      exports: 109.6577594
    },
    {
      date: "2006-04-01",
      imports: 111.1291519,
      exports: 109.4902273
    },
    {
      date: "2006-07-01",
      imports: 113.7228391,
      exports: 111.9360266
    },
    {
      date: "2006-10-01",
      imports: 110.7922131,
      exports: 109.3226952
    },
    {
      date: "2007-01-01",
      imports: 111.4322294,
      exports: 113.1086305
    },
    {
      date: "2007-04-01",
      imports: 112.3418206,
      exports: 112.5725038
    },
    {
      date: "2007-07-01",
      imports: 115.7439935,
      exports: 117.4641024
    },
    {
      date: "2007-10-01",
      imports: 118.7757251,
      exports: 116.0233749
    },
    {
      date: "2008-01-01",
      imports: 118.1694506,
      exports: 118.1676406
    },
    {
      date: "2008-04-01",
      imports: 120.5609266,
      exports: 118.4356437
    },
    {
      date: "2008-07-01",
      imports: 124.468747,
      exports: 121.4179316
    },
    {
      date: "2008-10-01",
      imports: 118.068345,
      exports: 118.5027048
    },
    {
      date: "2009-01-01",
      imports: 111.6006988,
      exports: 113.8456992
    },
    {
      date: "2009-04-01",
      imports: 106.9857375,
      exports: 109.7582304
    },
    {
      date: "2009-07-01",
      imports: 110.8259548,
      exports: 113.4101641
    },
    {
      date: "2009-10-01",
      imports: 108.5353451,
      exports: 111.3663694
    },
    {
      date: "2010-01-01",
      imports: 115.2387049,
      exports: 118.7707078
    },
    {
      date: "2010-04-01",
      imports: 120.2917105,
      exports: 120.1108438
    },
    {
      date: "2010-07-01",
      imports: 123.1549727,
      exports: 121.6856934
    },
    {
      date: "2010-10-01",
      imports: 124.9401742,
      exports: 124.2318432
    },
    {
      date: "2011-01-01",
      imports: 128.612281,
      exports: 129.893438
    },
    {
      date: "2011-04-01",
      imports: 130.8689097,
      exports: 129.659448
    },
    {
      date: "2011-07-01",
      imports: 131.8117641,
      exports: 130.6641579
    },
    {
      date: "2011-10-01",
      imports: 133.3277496,
      exports: 131.7701832
    },
    {
      date: "2012-01-01",
      imports: 134.001388,
      exports: 132.7085557
    },
    {
      date: "2012-04-01",
      imports: 133.2272423,
      exports: 133.3116229
    },
    {
      date: "2012-07-01",
      imports: 136.0223031,
      exports: 133.8133748
    },
    {
      date: "2012-10-01",
      imports: 136.3262181,
      exports: 133.1439702
    },
    {
      date: "2013-01-01",
      imports: 135.8882933,
      exports: 134.3838764
    },
    {
      date: "2013-04-01",
      imports: 134.3388054,
      exports: 131.9378358
    },
    {
      date: "2013-07-01",
      imports: 133.8326792,
      exports: 132.9763176
    },
    {
      date: "2013-10-01",
      imports: 132.5871064,
      exports: 132.6072404
    },
    {
      date: "2014-01-01",
      imports: 132.6206088,
      exports: 132.8424366
    },
    {
      date: "2014-04-01",
      imports: 130.5661913,
      exports: 131.3009969
    },
    {
      date: "2014-07-01",
      imports: 131.7782617,
      exports: 133.5118412
    },
    {
      date: "2014-10-01",
      imports: 128.1743563,
      exports: 133.2778512
    },
    {
      date: "2015-01-01",
      imports: 129.217718,
      exports: 132.0717168
    },
    {
      date: "2015-04-01",
      imports: 136.057002,
      exports: 136.8624826
    },
    {
      date: "2015-07-01",
      imports: 130.9024122,
      exports: 133.3453947
    },
    {
      date: "2015-10-01",
      imports: 129.7573466,
      exports: 131.8702923
    },
    {
      date: "2016-01-01",
      imports: 124.8731693,
      exports: 129.022609
    },
    {
      date: "2016-04-01",
      imports: 128.1408538,
      exports: 127.2809509
    },
    {
      date: "2016-07-01",
      imports: 129.9930602,
      exports: 130.6641579
    },
    {
      date: "2016-10-01",
      imports: 130.430985,
      exports: 131.9716076
    },
    {
      date: "2017-01-01",
      imports: 120.16,
      exports: 118.83
    },
    {
      date: "2017-04-01",
      imports: 117.68,
      exports: 115.71
    },
    {
      date: "2017-07-01",
      imports: 115.55,
      exports: 116.96
    },
    {
      date: "2017-10-01",
      imports: 120.17,
      exports: 117.26
    },
    {
      date: "2018-01-01",
      imports: 123.65,
      exports: 121.7
    },
    {
      date: "2018-04-01",
      imports: 125.41,
      exports: 122.81
    },
    {
      date: "2018-07-01",
      imports: 129.04,
      exports: 126.59
    },
    {
      date: "2018-10-01",
      imports: 130.18,
      exports: 124.79
    },
    {
      date: "2019-01-01",
      imports: 130.24,
      exports: 127.76
    },
    {
      date: "2019-04-01",
      imports: 130.28,
      exports: 125.51
    },
    {
      date: "2019-07-01",
      imports: 129.83,
      exports: 127.14
    },
    {
      date: "2019-10-01",
      imports: 132.26,
      exports: 126.68
    },
    {
      date: "2020-01-01",
      imports: 132.79,
      exports: 132.79
    },
    {
      date: "2020-04-01",
      imports: 124.36,
      exports: 123.54
    },
    {
      date: "2020-07-01",
      imports: 127.88,
      exports: 124.21
    },
    {
      date: "2020-10-01",
      imports: 129.25,
      exports: 122.66
    }
  ],
  Brazil: [
    {
      date: "2006-01-01",
      imports: 141.6036226,
      exports: 133.4551981
    },
    {
      date: "2006-04-01",
      imports: 166.8323203,
      exports: 154.5179314
    },
    {
      date: "2006-07-01",
      imports: 144.0751659,
      exports: 139.9247296
    },
    {
      date: "2006-10-01",
      imports: 144.2329933,
      exports: 151.9589428
    },
    {
      date: "2007-01-01",
      imports: 148.7447717,
      exports: 145.4941925
    },
    {
      date: "2007-04-01",
      imports: 164.1586014,
      exports: 155.198746
    },
    {
      date: "2007-07-01",
      imports: 171.3547509,
      exports: 149.8225818
    },
    {
      date: "2007-10-01",
      imports: 185.1059574,
      exports: 164.9975582
    },
    {
      date: "2008-01-01",
      imports: 199.8756511,
      exports: 178.1080629
    },
    {
      date: "2008-04-01",
      imports: 224.5193437,
      exports: 178.9191663
    },
    {
      date: "2008-07-01",
      imports: 255.5000478,
      exports: 197.7931157
    },
    {
      date: "2008-10-01",
      imports: 239.3651249,
      exports: 199.1660149
    },
    {
      date: "2009-01-01",
      imports: 210.0774789,
      exports: 143.7765316
    },
    {
      date: "2009-04-01",
      imports: 195.8614858,
      exports: 150.441411
    },
    {
      date: "2009-07-01",
      imports: 197.2595414,
      exports: 142.5516801
    },
    {
      date: "2009-10-01",
      imports: 212.6201097,
      exports: 157.9056115
    },
    {
      date: "2010-01-01",
      imports: 213.0209828,
      exports: 150.8869202
    },
    {
      date: "2010-04-01",
      imports: 211.6303185,
      exports: 175.929183
    },
    {
      date: "2010-07-01",
      imports: 216.7736241,
      exports: 175.8181899
    },
    {
      date: "2010-10-01",
      imports: 228.1476361,
      exports: 180.3996435
    },
    {
      date: "2011-01-01",
      imports: 242.8977643,
      exports: 195.9455075
    },
    {
      date: "2011-04-01",
      imports: 251.5630571,
      exports: 220.6235422
    },
    {
      date: "2011-07-01",
      imports: 253.1022009,
      exports: 210.6102571
    },
    {
      date: "2011-10-01",
      imports: 256.708754,
      exports: 202.9363651
    },
    {
      date: "2012-01-01",
      imports: 280.7915721,
      exports: 212.372486
    },
    {
      date: "2012-04-01",
      imports: 265.1653493,
      exports: 203.8243099
    },
    {
      date: "2012-07-01",
      imports: 252.715241,
      exports: 196.9973806
    },
    {
      date: "2012-10-01",
      imports: 247.8760685,
      exports: 177.3396491
    },
    {
      date: "2013-01-01",
      imports: 250.8043548,
      exports: 194.6033448
    },
    {
      date: "2013-04-01",
      imports: 254.0913399,
      exports: 205.086216
    },
    {
      date: "2013-07-01",
      imports: 246.0434439,
      exports: 180.9733924
    },
    {
      date: "2013-10-01",
      imports: 244.0608179,
      exports: 187.8139824
    },
    {
      date: "2014-01-01",
      imports: 253.5109001,
      exports: 183.1027523
    },
    {
      date: "2014-04-01",
      imports: 230.1063488,
      exports: 182.8875964
    },
    {
      date: "2014-07-01",
      imports: 229.2650371,
      exports: 178.2122256
    },
    {
      date: "2014-10-01",
      imports: 222.3410638,
      exports: 151.7794755
    },
    {
      date: "2015-01-01",
      imports: 212.631849,
      exports: 141.5213226
    },
    {
      date: "2015-04-01",
      imports: 197.7008496,
      exports: 142.7958649
    },
    {
      date: "2015-07-01",
      imports: 209.130949,
      exports: 130.9356547
    },
    {
      date: "2015-10-01",
      imports: 168.5453787,
      exports: 119.5226614
    },
    {
      date: "2016-01-01",
      imports: 160.6535709,
      exports: 114.7156357
    },
    {
      date: "2016-04-01",
      imports: 162.8709815,
      exports: 129.7082418
    },
    {
      date: "2016-07-01",
      imports: 157.0231046,
      exports: 127.6079109
    },
    {
      date: "2016-10-01",
      imports: 165.6101357,
      exports: 135.0871381
    },
    {
      date: "2017-01-01",
      imports: 156.2187497,
      exports: 139.5951655
    },
    {
      date: "2017-04-01",
      imports: 164.4144732,
      exports: 144.1885722
    },
    {
      date: "2017-07-01",
      imports: 170.6536579,
      exports: 136.4019794
    },
    {
      date: "2017-10-01",
      imports: 176.7863199,
      exports: 137.563138
    },
    {
      date: "2018-01-01",
      imports: 197.6538926,
      exports: 158.4639921
    },
    {
      date: "2018-04-01",
      imports: 197.7625892,
      exports: 146.1181445
    },
    {
      date: "2018-07-01",
      imports: 200.6973974,
      exports: 146.3742824
    },
    {
      date: "2018-10-01",
      imports: 185.9363995,
      exports: 146.4596617
    },
    {
      date: "2019-01-01",
      imports: 191.0451395,
      exports: 146.92071
    },
    {
      date: "2019-04-01",
      imports: 193.3277681,
      exports: 161.6059506
    },
    {
      date: "2019-07-01",
      imports: 192.6321098,
      exports: 140.1074413
    },
    {
      date: "2019-10-01",
      imports: 177.6971974,
      exports: 142.856655
    },
    {
      date: "2020-01-01",
      imports: 199.5669528,
      exports: 148.508765
    },
    {
      date: "2020-04-01",
      imports: 166.784059,
      exports: 129.7936211
    },
    {
      date: "2020-07-01",
      imports: 167.4579779,
      exports: 120.8458699
    },
    {
      date: "2020-10-01",
      imports: 187.9146775,
      exports: 137.3411518
    }
  ],
  Canada: [
    {
      date: "1957-01-01",
      imports: 15.49529101,
      exports: 15.63170927
    },
    {
      date: "1957-04-01",
      imports: 15.59596921,
      exports: 15.60916895
    },
    {
      date: "1957-07-01",
      imports: 15.47698588,
      exports: 15.47392705
    },
    {
      date: "1957-10-01",
      imports: 15.6508846,
      exports: 15.38376579
    },
    {
      date: "1958-01-01",
      imports: 15.89800383,
      exports: 15.44011658
    },
    {
      date: "1958-04-01",
      imports: 15.55935895,
      exports: 15.4063061
    },
    {
      date: "1958-07-01",
      imports: 15.42207049,
      exports: 15.34995531
    },
    {
      date: "1958-10-01",
      imports: 15.44952819,
      exports: 15.46265689
    },
    {
      date: "1959-01-01",
      imports: 15.44037562,
      exports: 15.59789879
    },
    {
      date: "1959-04-01",
      imports: 15.32139229,
      exports: 15.69933021
    },
    {
      date: "1959-07-01",
      imports: 15.21156152,
      exports: 15.69933021
    },
    {
      date: "1959-10-01",
      imports: 15.18410383,
      exports: 15.72187053
    },
    {
      date: "1960-01-01",
      imports: 15.22986665,
      exports: 15.63170927
    },
    {
      date: "1960-04-01",
      imports: 15.56851152,
      exports: 15.755681
    },
    {
      date: "1960-07-01",
      imports: 15.58681665,
      exports: 15.69933021
    },
    {
      date: "1960-10-01",
      imports: 15.46783331,
      exports: 15.69933021
    },
    {
      date: "1961-01-01",
      imports: 15.66918972,
      exports: 15.71060037
    },
    {
      date: "1961-04-01",
      imports: 15.72410511,
      exports: 15.72187053
    },
    {
      date: "1961-07-01",
      imports: 16.1085128,
      exports: 15.90219306
    },
    {
      date: "1961-10-01",
      imports: 16.21834357,
      exports: 16.04870512
    },
    {
      date: "1962-01-01",
      imports: 16.43800511,
      exports: 16.18394701
    },
    {
      date: "1962-04-01",
      imports: 16.78580254,
      exports: 16.42062033
    },
    {
      date: "1962-07-01",
      imports: 16.78580254,
      exports: 16.47697112
    },
    {
      date: "1962-10-01",
      imports: 16.72173459,
      exports: 16.46570096
    },
    {
      date: "1963-01-01",
      imports: 16.97800639,
      exports: 16.47697112
    },
    {
      date: "1963-04-01",
      imports: 17.22512562,
      exports: 16.49951144
    },
    {
      date: "1963-07-01",
      imports: 17.41732946,
      exports: 16.49951144
    },
    {
      date: "1963-10-01",
      imports: 17.38987177,
      exports: 16.46570096
    },
    {
      date: "1964-01-01",
      imports: 17.71021152,
      exports: 16.52205175
    },
    {
      date: "1964-04-01",
      imports: 17.71936408,
      exports: 16.66856381
    },
    {
      date: "1964-07-01",
      imports: 17.35326152,
      exports: 16.80380571
    },
    {
      date: "1964-10-01",
      imports: 17.33495639,
      exports: 16.87142666
    },
    {
      date: "1965-01-01",
      imports: 17.61868587,
      exports: 16.73618476
    },
    {
      date: "1965-04-01",
      imports: 17.3074987,
      exports: 16.88269681
    },
    {
      date: "1965-07-01",
      imports: 17.50885511,
      exports: 17.01793871
    },
    {
      date: "1965-10-01",
      imports: 17.5363128,
      exports: 17.0742895
    },
    {
      date: "1966-01-01",
      imports: 17.67360126,
      exports: 17.31096282
    },
    {
      date: "1966-04-01",
      imports: 17.74682177,
      exports: 17.51382567
    },
    {
      date: "1966-07-01",
      imports: 17.71936408,
      exports: 17.80684978
    },
    {
      date: "1966-10-01",
      imports: 17.82919485,
      exports: 17.86320057
    },
    {
      date: "1967-01-01",
      imports: 17.7651269,
      exports: 17.82939009
    },
    {
      date: "1967-04-01",
      imports: 17.87495767,
      exports: 17.86320057
    },
    {
      date: "1967-07-01",
      imports: 17.83834741,
      exports: 17.93082152
    },
    {
      date: "1967-10-01",
      imports: 17.84749998,
      exports: 18.15622468
    },
    {
      date: "1968-01-01",
      imports: 18.34173844,
      exports: 18.24638594
    },
    {
      date: "1968-04-01",
      imports: 18.26851793,
      exports: 18.43797863
    },
    {
      date: "1968-07-01",
      imports: 18.11292434,
      exports: 18.38162784
    },
    {
      date: "1968-10-01",
      imports: 18.26851793,
      exports: 18.41543831
    },
    {
      date: "1969-01-01",
      imports: 18.53394228,
      exports: 18.62957132
    },
    {
      date: "1969-04-01",
      imports: 18.61631536,
      exports: 18.75354306
    },
    {
      date: "1969-07-01",
      imports: 18.707841,
      exports: 18.77608337
    },
    {
      date: "1969-10-01",
      imports: 18.88173972,
      exports: 18.94513574
    },
    {
      date: "1970-01-01",
      imports: 19.25699485,
      exports: 19.45229286
    },
    {
      date: "1970-04-01",
      imports: 19.23868972,
      exports: 19.55372428
    },
    {
      date: "1970-07-01",
      imports: 18.79021408,
      exports: 19.23815985
    },
    {
      date: "1970-10-01",
      imports: 18.88173972,
      exports: 19.29451064
    },
    {
      date: "1971-01-01",
      imports: 19.05563844,
      exports: 19.12545827
    },
    {
      date: "1971-04-01",
      imports: 19.34852049,
      exports: 19.51991381
    },
    {
      date: "1971-07-01",
      imports: 19.62309741,
      exports: 19.74531697
    },
    {
      date: "1971-10-01",
      imports: 19.52241921,
      exports: 19.71150649
    },
    {
      date: "1972-01-01",
      imports: 19.778691,
      exports: 19.9256395
    },
    {
      date: "1972-04-01",
      imports: 19.778691,
      exports: 20.03834108
    },
    {
      date: "1972-07-01",
      imports: 19.85191151,
      exports: 20.18485313
    },
    {
      date: "1972-10-01",
      imports: 19.93428459,
      exports: 20.59057882
    },
    {
      date: "1973-01-01",
      imports: 20.35530254,
      exports: 21.31186894
    },
    {
      date: "1973-04-01",
      imports: 21.04174484,
      exports: 22.32618317
    },
    {
      date: "1973-07-01",
      imports: 21.70072946,
      exports: 23.59971103
    },
    {
      date: "1973-10-01",
      imports: 22.22242561,
      exports: 24.95213
    },
    {
      date: "1974-01-01",
      imports: 23.69598843,
      exports: 27.69077842
    },
    {
      date: "1974-04-01",
      imports: 25.39836535,
      exports: 30.27164462
    },
    {
      date: "1974-07-01",
      imports: 27.43938714,
      exports: 31.75930549
    },
    {
      date: "1974-10-01",
      imports: 28.72074612,
      exports: 32.52567624
    },
    {
      date: "1975-01-01",
      imports: 30.0753256,
      exports: 33.40474857
    },
    {
      date: "1975-04-01",
      imports: 30.52380124,
      exports: 33.40474857
    },
    {
      date: "1975-07-01",
      imports: 30.99058201,
      exports: 34.15984916
    },
    {
      date: "1975-10-01",
      imports: 30.3315974,
      exports: 34.47541359
    },
    {
      date: "1976-01-01",
      imports: 30.6610897,
      exports: 34.82478849
    },
    {
      date: "1976-04-01",
      imports: 30.59702176,
      exports: 34.36271201
    },
    {
      date: "1976-07-01",
      imports: 30.67939483,
      exports: 34.66700627
    },
    {
      date: "1976-10-01",
      imports: 30.5604115,
      exports: 34.65573612
    },
    {
      date: "1977-01-01",
      imports: 32.6746538,
      exports: 35.88418335
    },
    {
      date: "1977-04-01",
      imports: 33.66313073,
      exports: 36.44769125
    },
    {
      date: "1977-07-01",
      imports: 35.1733038,
      exports: 37.6986788
    },
    {
      date: "1977-10-01",
      imports: 35.79567816,
      exports: 37.66486833
    },
    {
      date: "1978-01-01",
      imports: 37.35161405,
      exports: 38.91585587
    },
    {
      date: "1978-04-01",
      imports: 37.83669995,
      exports: 39.2314203
    },
    {
      date: "1978-07-01",
      imports: 39.43839867,
      exports: 40.69654085
    },
    {
      date: "1978-10-01",
      imports: 41.13162302,
      exports: 41.83482682
    },
    {
      date: "1979-01-01",
      imports: 42.46789738,
      exports: 44.84395903
    },
    {
      date: "1979-04-01",
      imports: 42.412982,
      exports: 47.2445027
    },
    {
      date: "1979-07-01",
      imports: 45.60722686,
      exports: 50.21982443
    },
    {
      date: "1979-10-01",
      imports: 47.5109602,
      exports: 51.89907799
    },
    {
      date: "1980-01-01",
      imports: 50.45808583,
      exports: 56.49730249
    },
    {
      date: "1980-04-01",
      imports: 51.06215506,
      exports: 56.14792759
    },
    {
      date: "1980-07-01",
      imports: 52.78283711,
      exports: 57.21859261
    },
    {
      date: "1980-10-01",
      imports: 53.87199224,
      exports: 58.25544715
    },
    {
      date: "1981-01-01",
      imports: 67.53677043,
      exports: 72.39949555
    },
    {
      date: "1981-04-01",
      imports: 68.14083966,
      exports: 73.32364851
    },
    {
      date: "1981-07-01",
      imports: 69.21168965,
      exports: 73.42507993
    },
    {
      date: "1981-10-01",
      imports: 69.34897812,
      exports: 73.6504831
    },
    {
      date: "1982-01-01",
      imports: 70.31914991,
      exports: 73.17713646
    },
    {
      date: "1982-04-01",
      imports: 71.75610247,
      exports: 74.01112815
    },
    {
      date: "1982-07-01",
      imports: 72.30525632,
      exports: 74.11255958
    },
    {
      date: "1982-10-01",
      imports: 71.43576273,
      exports: 73.67302341
    },
    {
      date: "1983-01-01",
      imports: 71.00559222,
      exports: 73.39126946
    },
    {
      date: "1983-04-01",
      imports: 70.72186273,
      exports: 73.3799993
    },
    {
      date: "1983-07-01",
      imports: 70.91406658,
      exports: 73.68429357
    },
    {
      date: "1983-10-01",
      imports: 71.60966145,
      exports: 73.88715642
    },
    {
      date: "1984-01-01",
      imports: 73.06491914,
      exports: 75.84816392
    },
    {
      date: "1984-04-01",
      imports: 74.97780503,
      exports: 77.44852637
    },
    {
      date: "1984-07-01",
      imports: 76.31407939,
      exports: 77.6288489
    },
    {
      date: "1984-10-01",
      imports: 76.40560503,
      exports: 76.81739752
    },
    {
      date: "1985-01-01",
      imports: 76.79001272,
      exports: 77.05407084
    },
    {
      date: "1985-04-01",
      imports: 77.66865887,
      exports: 78.15854633
    },
    {
      date: "1985-07-01",
      imports: 77.2293358,
      exports: 77.66265937
    },
    {
      date: "1985-10-01",
      imports: 78.6296781,
      exports: 77.33582479
    },
    {
      date: "1986-01-01",
      imports: 78.02560887,
      exports: 76.85120799
    },
    {
      date: "1986-04-01",
      imports: 76.7442499,
      exports: 75.44243823
    },
    {
      date: "1986-07-01",
      imports: 76.67102939,
      exports: 75.36354712
    },
    {
      date: "1986-10-01",
      imports: 76.82662298,
      exports: 75.97213566
    },
    {
      date: "1987-01-01",
      imports: 75.60933195,
      exports: 75.47624871
    },
    {
      date: "1987-04-01",
      imports: 75.78323067,
      exports: 76.9300991
    },
    {
      date: "1987-07-01",
      imports: 76.26831657,
      exports: 77.83171175
    },
    {
      date: "1987-10-01",
      imports: 76.54289349,
      exports: 78.56427202
    },
    {
      date: "1988-01-01",
      imports: 75.18831401,
      exports: 77.08788131
    },
    {
      date: "1988-04-01",
      imports: 74.49271914,
      exports: 76.68215562
    },
    {
      date: "1988-07-01",
      imports: 74.5018717,
      exports: 77.88806254
    },
    {
      date: "1988-10-01",
      imports: 74.93204221,
      exports: 78.85729613
    },
    {
      date: "1989-01-01",
      imports: 74.74899093,
      exports: 79.87161036
    },
    {
      date: "1989-04-01",
      imports: 75.48119606,
      exports: 80.26606589
    },
    {
      date: "1989-07-01",
      imports: 74.87712683,
      exports: 79.18413072
    },
    {
      date: "1989-10-01",
      imports: 74.84966913,
      exports: 78.66570344
    },
    {
      date: "1990-01-01",
      imports: 76.36899477,
      exports: 79.09396945
    },
    {
      date: "1990-04-01",
      imports: 75.62763708,
      exports: 77.96695364
    },
    {
      date: "1990-07-01",
      imports: 75.72831529,
      exports: 78.18108665
    },
    {
      date: "1990-10-01",
      imports: 77.80594734,
      exports: 80.28860621
    },
    {
      date: "1991-01-01",
      imports: 76.25001144,
      exports: 77.9782238
    },
    {
      date: "1991-04-01",
      imports: 75.17916144,
      exports: 76.17499851
    },
    {
      date: "1991-07-01",
      imports: 74.80390631,
      exports: 75.1268738
    },
    {
      date: "1991-10-01",
      imports: 75.02356785,
      exports: 75.10433349
    },
    {
      date: "1992-01-01",
      imports: 76.26831657,
      exports: 75.80308329
    },
    {
      date: "1992-04-01",
      imports: 77.39408195,
      exports: 77.04280068
    },
    {
      date: "1992-07-01",
      imports: 78.51984734,
      exports: 78.1134657
    },
    {
      date: "1992-10-01",
      imports: 81.76900759,
      exports: 80.50273921
    },
    {
      date: "1993-01-01",
      imports: 81.21985374,
      exports: 80.130824
    },
    {
      date: "1993-04-01",
      imports: 81.63171913,
      exports: 81.02116648
    },
    {
      date: "1993-07-01",
      imports: 83.57206271,
      exports: 81.84388802
    },
    {
      date: "1993-10-01",
      imports: 84.64291271,
      exports: 82.83566194
    },
    {
      date: "1994-01-01",
      imports: 85.27443963,
      exports: 84.15427043
    },
    {
      date: "1994-04-01",
      imports: 88.04766655,
      exports: 86.41957221
    },
    {
      date: "1994-07-01",
      imports: 88.75241399,
      exports: 88.31295877
    },
    {
      date: "1994-10-01",
      imports: 89.82326399,
      exports: 89.86824058
    },
    {
      date: "1995-01-01",
      imports: 92.59649091,
      exports: 93.97057813
    },
    {
      date: "1995-04-01",
      imports: 91.28767424,
      exports: 93.94803781
    },
    {
      date: "1995-07-01",
      imports: 90.63784219,
      exports: 94.46646508
    },
    {
      date: "1995-10-01",
      imports: 90.52801142,
      exports: 94.33122318
    },
    {
      date: "1996-01-01",
      imports: 90.92157168,
      exports: 94.18471113
    },
    {
      date: "1996-04-01",
      imports: 90.58292681,
      exports: 94.18471113
    },
    {
      date: "1996-07-01",
      imports: 91.31513193,
      exports: 95.14267457
    },
    {
      date: "1996-10-01",
      imports: 90.87580886,
      exports: 95.55967042
    },
    {
      date: "1997-01-01",
      imports: 91.92835373,
      exports: 93.4408807
    },
    {
      date: "1997-04-01",
      imports: 91.56225116,
      exports: 94.4890054
    },
    {
      date: "1997-07-01",
      imports: 91.0680127,
      exports: 94.10582002
    },
    {
      date: "1997-10-01",
      imports: 91.49818322,
      exports: 95.26664631
    },
    {
      date: "1998-01-01",
      imports: 90.46394347,
      exports: 95.33426725
    },
    {
      date: "1998-04-01",
      imports: 90.83004604,
      exports: 95.70618247
    },
    {
      date: "1998-07-01",
      imports: 92.1388627,
      exports: 99.00833879
    },
    {
      date: "1998-10-01",
      imports: 92.20293065,
      exports: 100.3607578
    },
    {
      date: "1999-01-01",
      imports: 91.13208065,
      exports: 98.23069788
    },
    {
      date: "1999-04-01",
      imports: 91.58970886,
      exports: 96.46128306
    },
    {
      date: "1999-07-01",
      imports: 94.27141014,
      exports: 97.75735124
    },
    {
      date: "1999-10-01",
      imports: 94.45446142,
      exports: 97.81370203
    },
    {
      date: "2000-01-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-04-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-07-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-10-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2001-01-01",
      imports: 105.9317768,
      exports: 102.727491
    },
    {
      date: "2001-04-01",
      imports: 103.8816024,
      exports: 103.2233779
    },
    {
      date: "2001-07-01",
      imports: 100.3121024,
      exports: 102.727491
    },
    {
      date: "2001-10-01",
      imports: 97.08124731,
      exports: 103.1895674
    },
    {
      date: "2002-01-01",
      imports: 98.60057295,
      exports: 101.9160396
    },
    {
      date: "2002-04-01",
      imports: 97.58463834,
      exports: 103.584023
    },
    {
      date: "2002-07-01",
      imports: 98.39921654,
      exports: 103.9221277
    },
    {
      date: "2002-10-01",
      imports: 98.93006526,
      exports: 105.5901111
    },
    {
      date: "2003-01-01",
      imports: 97.38328193,
      exports: 108.4865417
    },
    {
      date: "2003-04-01",
      imports: 91.9100486,
      exports: 101.2961809
    },
    {
      date: "2003-07-01",
      imports: 90.53716399,
      exports: 101.1271285
    },
    {
      date: "2003-10-01",
      imports: 87.7822422,
      exports: 98.77166547
    },
    {
      date: "2004-01-01",
      imports: 88.6974986,
      exports: 102.0963621
    },
    {
      date: "2004-04-01",
      imports: 92.79784732,
      exports: 106.5593447
    },
    {
      date: "2004-07-01",
      imports: 91.84598065,
      exports: 106.796018
    },
    {
      date: "2004-10-01",
      imports: 89.25580501,
      exports: 103.7530753
    },
    {
      date: "2005-01-01",
      imports: 89.44800886,
      exports: 104.6884985
    },
    {
      date: "2005-04-01",
      imports: 91.7819127,
      exports: 107.2130139
    },
    {
      date: "2005-07-01",
      imports: 91.18699604,
      exports: 109.6022874
    },
    {
      date: "2005-10-01",
      imports: 90.50055373,
      exports: 112.994605
    },
    {
      date: "2006-01-01",
      imports: 90.37360767,
      exports: 108.4281623
    },
    {
      date: "2006-04-01",
      imports: 90.24245142,
      exports: 108.220566
    },
    {
      date: "2006-07-01",
      imports: 91.84964168,
      exports: 109.742939
    },
    {
      date: "2006-10-01",
      imports: 91.61991232,
      exports: 109.8121377
    },
    {
      date: "2007-01-01",
      imports: 94.59358039,
      exports: 114.3774534
    },
    {
      date: "2007-04-01",
      imports: 91.36098628,
      exports: 112.8221716
    },
    {
      date: "2007-07-01",
      imports: 88.48726421,
      exports: 108.8217162
    },
    {
      date: "2007-10-01",
      imports: 85.31416176,
      exports: 108.4512662
    },
    {
      date: "2008-01-01",
      imports: 88.81657346,
      exports: 117.3031864
    },
    {
      date: "2008-04-01",
      imports: 93.0376445,
      exports: 126.3046617
    },
    {
      date: "2008-07-01",
      imports: 98.39555551,
      exports: 131.6377005
    },
    {
      date: "2008-10-01",
      imports: 104.172654,
      exports: 124.044995
    },
    {
      date: "2009-01-01",
      imports: 101.7280041,
      exports: 115.1889048
    },
    {
      date: "2009-04-01",
      imports: 96.50189,
      exports: 109.2422058
    },
    {
      date: "2009-07-01",
      imports: 92.77313539,
      exports: 108.9429831
    },
    {
      date: "2009-10-01",
      imports: 91.56957322,
      exports: 110.7755109
    },
    {
      date: "2010-01-01",
      imports: 91.18800282,
      exports: 112.9450163
    },
    {
      date: "2010-04-01",
      imports: 91.01190749,
      exports: 112.0471228
    },
    {
      date: "2010-07-01",
      imports: 92.07937104,
      exports: 112.0097059
    },
    {
      date: "2010-10-01",
      imports: 91.86337052,
      exports: 113.8049293
    },
    {
      date: "2011-01-01",
      imports: 93.0669327,
      exports: 116.6100717
    },
    {
      date: "2011-04-01",
      imports: 94.12405385,
      exports: 118.629684
    },
    {
      date: "2011-07-01",
      imports: 95.88500718,
      exports: 119.6011717
    },
    {
      date: "2011-10-01",
      imports: 98.49806423,
      exports: 120.2751271
    },
    {
      date: "2012-01-01",
      imports: 97.61758757,
      exports: 118.554174
    },
    {
      date: "2012-04-01",
      imports: 98.17497872,
      exports: 117.3200917
    },
    {
      date: "2012-07-01",
      imports: 96.61904282,
      exports: 115.7490316
    },
    {
      date: "2012-10-01",
      imports: 96.38473718,
      exports: 116.9459224
    },
    {
      date: "2013-01-01",
      imports: 96.91284013,
      exports: 118.5169824
    },
    {
      date: "2013-04-01",
      imports: 98.23447039,
      exports: 118.5169824
    },
    {
      date: "2013-07-01",
      imports: 99.40874436,
      exports: 119.3025125
    },
    {
      date: "2013-10-01",
      imports: 100.3770856,
      exports: 119.7882563
    },
    {
      date: "2014-01-01",
      imports: 103.930111,
      exports: 127.2310687
    },
    {
      date: "2014-04-01",
      imports: 103.5484491,
      exports: 125.398541
    },
    {
      date: "2014-07-01",
      imports: 103.7534665,
      exports: 124.3887348
    },
    {
      date: "2014-10-01",
      imports: 105.1922496,
      exports: 124.9499887
    },
    {
      date: "2015-01-01",
      imports: 107.5700858,
      exports: 125.4357325
    },
    {
      date: "2015-04-01",
      imports: 108.391986,
      exports: 122.2192294
    },
    {
      date: "2015-07-01",
      imports: 112.7961999,
      exports: 124.9499887
    },
    {
      date: "2015-10-01",
      imports: 113.20715,
      exports: 123.4533117
    },
    {
      date: "2016-01-01",
      imports: 114.2349829,
      exports: 121.620784
    },
    {
      date: "2016-04-01",
      imports: 111.7683669,
      exports: 119.7138732
    },
    {
      date: "2016-07-01",
      imports: 113.5302355,
      exports: 123.117461
    },
    {
      date: "2016-10-01",
      imports: 116.1130891,
      exports: 125.6600086
    },
    {
      date: "2017-01-01",
      imports: 112.6540065,
      exports: 123.8984052
    },
    {
      date: "2017-04-01",
      imports: 115.0515897,
      exports: 124.9136458
    },
    {
      date: "2017-07-01",
      imports: 109.0576319,
      exports: 118.2364862
    },
    {
      date: "2017-10-01",
      imports: 110.9692184,
      exports: 122.5707828
    },
    {
      date: "2018-01-01",
      imports: 111.6496136,
      exports: 125.6165047
    },
    {
      date: "2018-04-01",
      imports: 114.5655931,
      exports: 128.740322
    },
    {
      date: "2018-07-01",
      imports: 116.5095794,
      exports: 130.4584216
    },
    {
      date: "2018-10-01",
      imports: 117.6111716,
      exports: 130.3412784
    },
    {
      date: "2019-01-01",
      imports: 117.9999689,
      exports: 127.8031768
    },
    {
      date: "2019-04-01",
      imports: 118.5831648,
      exports: 128.3888926
    },
    {
      date: "2019-07-01",
      imports: 117.4815725,
      exports: 126.2022205
    },
    {
      date: "2019-10-01",
      imports: 117.6111716,
      exports: 126.397459
    },
    {
      date: "2020-01-01",
      imports: 118.7451636,
      exports: 125.8117433
    },
    {
      date: "2020-04-01",
      imports: 119.2311602,
      exports: 118.1974385
    },
    {
      date: "2020-07-01",
      imports: 118.3563664,
      exports: 124.7184072
    },
    {
      date: "2020-10-01",
      imports: 118.1943675,
      exports: 125.2650753
    }
  ],
  China: [
    // Hong Kong SAR
    {
      date: "1969-01-01",
      imports: 33.875,
      exports: 33.60959651
    },
    {
      date: "1969-04-01",
      imports: 34.20454545,
      exports: 34.91821156
    },
    {
      date: "1969-07-01",
      imports: 35.84090909,
      exports: 35.57251908
    },
    {
      date: "1969-10-01",
      imports: 35.84090909,
      exports: 36.22682661
    },
    {
      date: "1970-01-01",
      imports: 35.84090909,
      exports: 35.89967285
    },
    {
      date: "1970-04-01",
      imports: 36.48863636,
      exports: 37.19738277
    },
    {
      date: "1970-07-01",
      imports: 36.81818182,
      exports: 38.17884406
    },
    {
      date: "1970-10-01",
      imports: 36.48863636,
      exports: 39.16030534
    },
    {
      date: "1971-01-01",
      imports: 37.13636364,
      exports: 39.16030534
    },
    {
      date: "1971-04-01",
      imports: 37.13636364,
      exports: 39.48745911
    },
    {
      date: "1971-07-01",
      imports: 37.13636364,
      exports: 40.78516903
    },
    {
      date: "1971-10-01",
      imports: 36.48863636,
      exports: 40.78516903
    },
    {
      date: "1972-01-01",
      imports: 37.46590909,
      exports: 39.81461287
    },
    {
      date: "1972-04-01",
      imports: 37.79545455,
      exports: 41.76663032
    },
    {
      date: "1972-07-01",
      imports: 38.11363636,
      exports: 44.71101418
    },
    {
      date: "1972-10-01",
      imports: 38.77272727,
      exports: 43.72955289
    },
    {
      date: "1973-01-01",
      imports: 40.06818182,
      exports: 45.03816794
    },
    {
      date: "1973-04-01",
      imports: 43.32954545,
      exports: 48.6259542
    },
    {
      date: "1973-07-01",
      imports: 46.59090909,
      exports: 51.55943293
    },
    {
      date: "1973-10-01",
      imports: 52.45454545,
      exports: 56.12868048
    },
    {
      date: "1974-01-01",
      imports: 57.01136364,
      exports: 60.69792803
    },
    {
      date: "1974-04-01",
      imports: 62.22727273,
      exports: 65.59432933
    },
    {
      date: "1974-07-01",
      imports: 60.60227273,
      exports: 64.94002181
    },
    {
      date: "1974-10-01",
      imports: 59.29545455,
      exports: 63.95856052
    },
    {
      date: "1975-01-01",
      imports: 40.72727273,
      exports: 37.52453653
    },
    {
      date: "1975-04-01",
      imports: 40.72727273,
      exports: 36.87022901
    },
    {
      date: "1975-07-01",
      imports: 41.04545455,
      exports: 39.16030534
    },
    {
      date: "1975-10-01",
      imports: 40.72727273,
      exports: 40.14176663
    },
    {
      date: "1976-01-01",
      imports: 39.75,
      exports: 40.78516903
    },
    {
      date: "1976-04-01",
      imports: 41.04545455,
      exports: 41.76663032
    },
    {
      date: "1976-07-01",
      imports: 41.70454545,
      exports: 43.40239913
    },
    {
      date: "1976-10-01",
      imports: 42.35227273,
      exports: 43.07524537
    },
    {
      date: "1977-01-01",
      imports: 42.35227273,
      exports: 42.7480916
    },
    {
      date: "1977-04-01",
      imports: 43,
      exports: 42.7480916
    },
    {
      date: "1977-07-01",
      imports: 43.65909091,
      exports: 43.72955289
    },
    {
      date: "1977-10-01",
      imports: 43.65909091,
      exports: 43.07524537
    },
    {
      date: "1978-01-01",
      imports: 44.30681818,
      exports: 43.72955289
    },
    {
      date: "1978-04-01",
      imports: 45.61363636,
      exports: 44.38386041
    },
    {
      date: "1978-07-01",
      imports: 46.26136364,
      exports: 45.68157034
    },
    {
      date: "1978-10-01",
      imports: 47.56818182,
      exports: 46.99018539
    },
    {
      date: "1979-01-01",
      imports: 50.17045455,
      exports: 49.28026172
    },
    {
      date: "1979-04-01",
      imports: 52.78409091,
      exports: 52.21374046
    },
    {
      date: "1979-07-01",
      imports: 56.03409091,
      exports: 55.14721919
    },
    {
      date: "1979-10-01",
      imports: 56.69318182,
      exports: 55.80152672
    },
    {
      date: "1980-01-01",
      imports: 56.69318182,
      exports: 56.94656489
    },
    {
      date: "1980-04-01",
      imports: 57.98863636,
      exports: 57.58996728
    },
    {
      date: "1980-07-01",
      imports: 59.29545455,
      exports: 59.50926936
    },
    {
      date: "1980-10-01",
      imports: 60.60227273,
      exports: 60.78516903
    },
    {
      date: "1981-01-01",
      imports: 61.89772727,
      exports: 60.78516903
    },
    {
      date: "1981-04-01",
      imports: 63.85227273,
      exports: 62.7044711
    },
    {
      date: "1981-07-01",
      imports: 66.46590909,
      exports: 65.91057797
    },
    {
      date: "1981-10-01",
      imports: 68.42045455,
      exports: 65.91057797
    },
    {
      date: "1982-01-01",
      imports: 69.65909091,
      exports: 68.15703381
    },
    {
      date: "1982-04-01",
      imports: 68.18181818,
      exports: 68.59323882
    },
    {
      date: "1982-07-01",
      imports: 67.61363636,
      exports: 69.24754635
    },
    {
      date: "1982-10-01",
      imports: 69.88636364,
      exports: 68.26608506
    },
    {
      date: "1983-01-01",
      imports: 72.15909091,
      exports: 70.44711014
    },
    {
      date: "1983-04-01",
      imports: 74.31818182,
      exports: 72.95528899
    },
    {
      date: "1983-07-01",
      imports: 77.72727273,
      exports: 76.55398037
    },
    {
      date: "1983-10-01",
      imports: 82.61363636,
      exports: 79.93456925
    },
    {
      date: "1984-01-01",
      imports: 84.31818182,
      exports: 81.57033806
    },
    {
      date: "1984-04-01",
      imports: 86.47727273,
      exports: 84.62377317
    },
    {
      date: "1984-07-01",
      imports: 86.70454545,
      exports: 87.24100327
    },
    {
      date: "1984-10-01",
      imports: 85,
      exports: 87.13195202
    },
    {
      date: "1985-01-01",
      imports: 83.97727273,
      exports: 86.15049073
    },
    {
      date: "1985-04-01",
      imports: 83.29545455,
      exports: 86.04143948
    },
    {
      date: "1985-07-01",
      imports: 83.06818182,
      exports: 86.25954198
    },
    {
      date: "1985-10-01",
      imports: 83.63636364,
      exports: 84.84187568
    },
    {
      date: "1986-01-01",
      imports: 85.90909091,
      exports: 85.93238822
    },
    {
      date: "1986-04-01",
      imports: 87.38636364,
      exports: 87.13195202
    },
    {
      date: "1986-07-01",
      imports: 88.52272727,
      exports: 88.1134133
    },
    {
      date: "1986-10-01",
      imports: 88.18181818,
      exports: 88.44056707
    },
    {
      date: "1987-01-01",
      imports: 88.97727273,
      exports: 88.87677208
    },
    {
      date: "1987-04-01",
      imports: 90.79545455,
      exports: 89.85823337
    },
    {
      date: "1987-07-01",
      imports: 91.59090909,
      exports: 91.60305344
    },
    {
      date: "1987-10-01",
      imports: 92.72727273,
      exports: 92.14830971
    },
    {
      date: "1988-01-01",
      imports: 93.29545455,
      exports: 92.03925845
    },
    {
      date: "1988-04-01",
      imports: 94.65909091,
      exports: 92.80261723
    },
    {
      date: "1988-07-01",
      imports: 95.22727273,
      exports: 94.00218103
    },
    {
      date: "1988-10-01",
      imports: 96.25,
      exports: 95.09269357
    },
    {
      date: "1989-01-01",
      imports: 97.38636364,
      exports: 96.61941112
    },
    {
      date: "1989-04-01",
      imports: 98.18181818,
      exports: 97.81897492
    },
    {
      date: "1989-07-01",
      imports: 98.75,
      exports: 98.90948746
    },
    {
      date: "1989-10-01",
      imports: 99.20454545,
      exports: 99.45474373
    },
    {
      date: "1990-01-01",
      imports: 99.65909091,
      exports: 100.1090513
    },
    {
      date: "1990-04-01",
      imports: 99.77272727,
      exports: 100.6543075
    },
    {
      date: "1990-07-01",
      imports: 100.6818182,
      exports: 101.1995638
    },
    {
      date: "1990-10-01",
      imports: 102.6136364,
      exports: 101.7448201
    },
    {
      date: "1991-01-01",
      imports: 103.2954546,
      exports: 102.8353326
    },
    {
      date: "1991-04-01",
      imports: 102.0454546,
      exports: 102.9443839
    },
    {
      date: "1991-07-01",
      imports: 102.5,
      exports: 104.2529989
    },
    {
      date: "1991-10-01",
      imports: 103.1818182,
      exports: 104.1439477
    },
    {
      date: "1992-01-01",
      imports: 102.9545455,
      exports: 104.4711014
    },
    {
      date: "1992-04-01",
      imports: 102.5,
      exports: 103.8167939
    },
    {
      date: "1992-07-01",
      imports: 103.4090909,
      exports: 105.1254089
    },
    {
      date: "1992-10-01",
      imports: 102.6136364,
      exports: 104.5801527
    },
    {
      date: "1993-01-01",
      imports: 101.4772727,
      exports: 103.7077426
    },
    {
      date: "1993-04-01",
      imports: 102.2727273,
      exports: 104.1439477
    },
    {
      date: "1993-07-01",
      imports: 103.0681818,
      exports: 104.6892039
    },
    {
      date: "1993-10-01",
      imports: 102.3863636,
      exports: 103.9258452
    },
    {
      date: "1994-01-01",
      imports: 103.0681818,
      exports: 104.3620502
    },
    {
      date: "1994-04-01",
      imports: 103.8636364,
      exports: 104.9073064
    },
    {
      date: "1994-07-01",
      imports: 105.9090909,
      exports: 106.2159215
    },
    {
      date: "1994-10-01",
      imports: 107.2727273,
      exports: 106.7611778
    },
    {
      date: "1995-01-01",
      imports: 108.4090909,
      exports: 107.5245365
    },
    {
      date: "1995-04-01",
      imports: 110.7954546,
      exports: 109.0512541
    },
    {
      date: "1995-07-01",
      imports: 111.5909091,
      exports: 110.2508179
    },
    {
      date: "1995-10-01",
      imports: 110.3409091,
      exports: 109.3784079
    },
    {
      date: "1996-01-01",
      imports: 110,
      exports: 108.9422028
    },
    {
      date: "1996-04-01",
      imports: 109.0909091,
      exports: 108.8331516
    },
    {
      date: "1996-07-01",
      imports: 108.5227273,
      exports: 108.8331516
    },
    {
      date: "1996-10-01",
      imports: 108.2954546,
      exports: 108.5059978
    },
    {
      date: "1997-01-01",
      imports: 107.2727273,
      exports: 107.4154853
    },
    {
      date: "1997-04-01",
      imports: 106.5909091,
      exports: 106.9792803
    },
    {
      date: "1997-07-01",
      imports: 106.4772727,
      exports: 106.9792803
    },
    {
      date: "1997-10-01",
      imports: 105.4545455,
      exports: 106.6521265
    },
    {
      date: "1998-01-01",
      imports: 103.0681818,
      exports: 104.7982552
    },
    {
      date: "1998-04-01",
      imports: 101.5909091,
      exports: 103.4896401
    },
    {
      date: "1998-07-01",
      imports: 100.3409091,
      exports: 102.2900763
    },
    {
      date: "1998-10-01",
      imports: 99.88636364,
      exports: 101.5267176
    },
    {
      date: "1999-01-01",
      imports: 99.31818182,
      exports: 100.2181025
    },
    {
      date: "1999-04-01",
      imports: 98.18181818,
      exports: 99.78189749
    },
    {
      date: "1999-07-01",
      imports: 98.97727273,
      exports: 100.1090513
    },
    {
      date: "1999-10-01",
      imports: 100.2272727,
      exports: 100.5452563
    },
    {
      date: "2000-01-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-04-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-07-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-10-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2001-01-01",
      imports: 98.18181818,
      exports: 98.90948746
    },
    {
      date: "2001-04-01",
      imports: 97.27272727,
      exports: 97.81897492
    },
    {
      date: "2001-07-01",
      imports: 96.70454545,
      exports: 97.49182116
    },
    {
      date: "2001-10-01",
      imports: 95.22727273,
      exports: 96.83751363
    },
    {
      date: "2002-01-01",
      imports: 93.40909091,
      exports: 95.52889858
    },
    {
      date: "2002-04-01",
      imports: 92.84090909,
      exports: 95.20174482
    },
    {
      date: "2002-07-01",
      imports: 93.18181818,
      exports: 95.20174482
    },
    {
      date: "2002-10-01",
      imports: 92.95454545,
      exports: 94.5474373
    },
    {
      date: "2003-01-01",
      imports: 93.29545455,
      exports: 94.65648855
    },
    {
      date: "2003-04-01",
      imports: 92.61363636,
      exports: 93.89312977
    },
    {
      date: "2003-07-01",
      imports: 92.38636364,
      exports: 93.45692475
    },
    {
      date: "2003-10-01",
      imports: 92.84090909,
      exports: 93.12977099
    },
    {
      date: "2004-01-01",
      imports: 93.97727273,
      exports: 94.00218103
    },
    {
      date: "2004-04-01",
      imports: 94.77272727,
      exports: 94.32933479
    },
    {
      date: "2004-07-01",
      imports: 96.13636364,
      exports: 95.20174482
    },
    {
      date: "2004-10-01",
      imports: 96.70454545,
      exports: 95.63794984
    },
    {
      date: "2005-01-01",
      imports: 97.72727273,
      exports: 95.9651036
    },
    {
      date: "2005-04-01",
      imports: 97.84090909,
      exports: 96.07415485
    },
    {
      date: "2005-07-01",
      imports: 98.29545455,
      exports: 96.18320611
    },
    {
      date: "2005-10-01",
      imports: 98.29545455,
      exports: 95.9651036
    },
    {
      date: "2006-01-01",
      imports: 98.63636364,
      exports: 95.63794984
    },
    {
      date: "2006-04-01",
      imports: 99.77272727,
      exports: 96.61941112
    },
    {
      date: "2006-07-01",
      imports: 100.9090909,
      exports: 97.49182116
    },
    {
      date: "2006-10-01",
      imports: 101.0227273,
      exports: 97.81897492
    },
    {
      date: "2007-01-01",
      imports: 101.2234091,
      exports: 98.19541985
    },
    {
      date: "2007-04-01",
      imports: 101.7352273,
      exports: 98.5655398
    },
    {
      date: "2007-07-01",
      imports: 102.7589773,
      exports: 99.55245365
    },
    {
      date: "2007-10-01",
      imports: 103.7827273,
      exports: 100.4159215
    },
    {
      date: "2008-01-01",
      imports: 104.9344318,
      exports: 100.7860414
    },
    {
      date: "2008-04-01",
      imports: 106.5980682,
      exports: 102.3849509
    },
    {
      date: "2008-07-01",
      imports: 108.5176136,
      exports: 104.2401309
    },
    {
      date: "2008-10-01",
      imports: 107.4938636,
      exports: 104.5232279
    },
    {
      date: "2009-01-01",
      imports: 105.8442046,
      exports: 103.3846238
    },
    {
      date: "2009-04-01",
      imports: 105.7143182,
      exports: 103.2533261
    },
    {
      date: "2009-07-01",
      imports: 106.8830682,
      exports: 104.5179935
    },
    {
      date: "2009-10-01",
      imports: 108.0519318,
      exports: 105.4738277
    },
    {
      date: "2010-01-01",
      imports: 109.6103409,
      exports: 106.280916
    },
    {
      date: "2010-04-01",
      imports: 112.7272727,
      exports: 107.2883315
    },
    {
      date: "2010-07-01",
      imports: 114.5454546,
      exports: 109.91494
    },
    {
      date: "2010-10-01",
      imports: 117.0125,
      exports: 112.3249727
    },
    {
      date: "2011-01-01",
      imports: 119.3511364,
      exports: 114.3402399
    },
    {
      date: "2011-04-01",
      imports: 121.8181818,
      exports: 116.606325
    },
    {
      date: "2011-07-01",
      imports: 124.4159091,
      exports: 119.2508179
    },
    {
      date: "2011-10-01",
      imports: 125.325,
      exports: 120.7622683
    },
    {
      date: "2012-01-01",
      imports: 125.4545455,
      exports: 121.391494
    },
    {
      date: "2012-04-01",
      imports: 126.4931818,
      exports: 121.6434024
    },
    {
      date: "2012-07-01",
      imports: 127.2727273,
      exports: 121.391494
    },
    {
      date: "2012-10-01",
      imports: 127.9215909,
      exports: 122.6008724
    },
    {
      date: "2013-01-01",
      imports: 126.8829546,
      exports: 122.0218103
    },
    {
      date: "2013-04-01",
      imports: 126.7534091,
      exports: 122.1472192
    },
    {
      date: "2013-07-01",
      imports: 128.0522727,
      exports: 123.4067612
    },
    {
      date: "2013-10-01",
      imports: 129.8704546,
      exports: 125.4220284
    },
    {
      date: "2014-01-01",
      imports: 129.4806818,
      exports: 124.1624864
    },
    {
      date: "2014-04-01",
      imports: 129.2204546,
      exports: 124.4143948
    },
    {
      date: "2014-07-01",
      imports: 131.0386364,
      exports: 126.176663
    },
    {
      date: "2014-10-01",
      imports: 131.5579546,
      exports: 128.2737187
    },
    {
      date: "2015-01-01",
      imports: 130.6488636,
      exports: 126.6804798
    },
    {
      date: "2015-04-01",
      imports: 130,
      exports: 126.0512541
    },
    {
      date: "2015-07-01",
      imports: 130.1295455,
      exports: 125.6728462
    },
    {
      date: "2015-10-01",
      imports: 128.8306818,
      exports: 125.4220284
    },
    {
      date: "2016-01-01",
      imports: 127.0125,
      exports: 123.2802617
    },
    {
      date: "2016-04-01",
      imports: 126.6238636,
      exports: 123.2802617
    },
    {
      date: "2016-07-01",
      imports: 128.3113636,
      exports: 123.6586696
    },
    {
      date: "2016-10-01",
      imports: 128.5715909,
      exports: 124.7917121
    },
    {
      date: "2017-01-01",
      imports: 129.2045455,
      exports: 125.4634678
    },
    {
      date: "2017-04-01",
      imports: 129.0681818,
      exports: 125.2453653
    },
    {
      date: "2017-07-01",
      imports: 131.0227273,
      exports: 126.0414395
    },
    {
      date: "2017-10-01",
      imports: 131.7159091,
      exports: 127.6444929
    },
    {
      date: "2018-01-01",
      imports: 128.687,
      exports: 125.0871974
    },
    {
      date: "2018-04-01",
      imports: 129.33825,
      exports: 125.4654853
    },
    {
      date: "2018-07-01",
      imports: 131.16175,
      exports: 126.0959651
    },
    {
      date: "2018-10-01",
      imports: 131.5525,
      exports: 127.4830207
    },
    {
      date: "2019-01-01",
      imports: 131.5525,
      exports: 127.8613086
    },
    {
      date: "2019-04-01",
      imports: 131.813,
      exports: 127.8613086
    },
    {
      date: "2019-07-01",
      imports: 132.46425,
      exports: 127.3569248
    },
    {
      date: "2019-10-01",
      imports: 131.68275,
      exports: 127.2308288
    },
    {
      date: "2020-01-01",
      imports: 130.64075,
      exports: 126.9786369
    },
    {
      date: "2020-04-01",
      imports: 130.4670833,
      exports: 126.600349
    },
    {
      date: "2020-07-01",
      imports: 130.8578333,
      exports: 126.390189
    },
    {
      date: "2020-10-01",
      imports: 131.5525,
      exports: 127.0206689
    }
  ],
  Denmark: [
    {
      date: "1957-01-01",
      imports: 24.22306098,
      exports: 22.79513205
    },
    {
      date: "1957-04-01",
      imports: 23.49219276,
      exports: 22.56410031
    },
    {
      date: "1957-07-01",
      imports: 23.07455378,
      exports: 23.01516228
    },
    {
      date: "1957-10-01",
      imports: 22.6569148,
      exports: 23.01516228
    },
    {
      date: "1958-01-01",
      imports: 22.03045632,
      exports: 22.11303833
    },
    {
      date: "1958-04-01",
      imports: 21.2995881,
      exports: 21.65097484
    },
    {
      date: "1958-07-01",
      imports: 21.2995881,
      exports: 22.11303833
    },
    {
      date: "1958-10-01",
      imports: 21.09076861,
      exports: 23.47722577
    },
    {
      date: "1959-01-01",
      imports: 20.67312963,
      exports: 22.79513205
    },
    {
      date: "1959-04-01",
      imports: 20.67312963,
      exports: 21.65097484
    },
    {
      date: "1959-07-01",
      imports: 20.67312963,
      exports: 23.01516228
    },
    {
      date: "1959-10-01",
      imports: 20.88194912,
      exports: 23.24619403
    },
    {
      date: "1960-01-01",
      imports: 21.09076861,
      exports: 22.33306856
    },
    {
      date: "1960-04-01",
      imports: 21.2995881,
      exports: 21.88200659
    },
    {
      date: "1960-07-01",
      imports: 20.88194912,
      exports: 22.79513205
    },
    {
      date: "1960-10-01",
      imports: 20.88194912,
      exports: 23.01516228
    },
    {
      date: "1961-01-01",
      imports: 20.88194912,
      exports: 21.88200659
    },
    {
      date: "1961-04-01",
      imports: 21.09076861,
      exports: 22.33306856
    },
    {
      date: "1961-07-01",
      imports: 21.09076861,
      exports: 22.11303833
    },
    {
      date: "1961-10-01",
      imports: 20.88194912,
      exports: 21.88200659
    },
    {
      date: "1962-01-01",
      imports: 20.88194912,
      exports: 22.33306856
    },
    {
      date: "1962-04-01",
      imports: 21.09076861,
      exports: 22.33306856
    },
    {
      date: "1962-07-01",
      imports: 21.2995881,
      exports: 22.33306856
    },
    {
      date: "1962-10-01",
      imports: 20.67312963,
      exports: 22.79513205
    },
    {
      date: "1963-01-01",
      imports: 21.09076861,
      exports: 22.56410031
    },
    {
      date: "1963-04-01",
      imports: 21.09076861,
      exports: 22.33306856
    },
    {
      date: "1963-07-01",
      imports: 21.2995881,
      exports: 23.01516228
    },
    {
      date: "1963-10-01",
      imports: 21.50840759,
      exports: 23.92828775
    },
    {
      date: "1964-01-01",
      imports: 21.50840759,
      exports: 23.70825751
    },
    {
      date: "1964-04-01",
      imports: 21.2995881,
      exports: 23.47722577
    },
    {
      date: "1964-07-01",
      imports: 21.50840759,
      exports: 23.70825751
    },
    {
      date: "1964-10-01",
      imports: 21.71722709,
      exports: 23.70825751
    },
    {
      date: "1965-01-01",
      imports: 21.50840759,
      exports: 23.47722577
    },
    {
      date: "1965-04-01",
      imports: 21.71722709,
      exports: 23.47722577
    },
    {
      date: "1965-07-01",
      imports: 21.71722709,
      exports: 24.15931949
    },
    {
      date: "1965-10-01",
      imports: 21.50840759,
      exports: 24.62138298
    },
    {
      date: "1966-01-01",
      imports: 22.03045632,
      exports: 24.41235426
    },
    {
      date: "1966-04-01",
      imports: 22.03045632,
      exports: 25.36948577
    },
    {
      date: "1966-07-01",
      imports: 22.03045632,
      exports: 24.65438751
    },
    {
      date: "1966-10-01",
      imports: 22.03045632,
      exports: 24.88541926
    },
    {
      date: "1967-01-01",
      imports: 21.71722709,
      exports: 24.65438751
    },
    {
      date: "1967-04-01",
      imports: 21.50840759,
      exports: 24.170321
    },
    {
      date: "1967-07-01",
      imports: 22.03045632,
      exports: 24.170321
    },
    {
      date: "1967-10-01",
      imports: 22.44809531,
      exports: 24.170321
    },
    {
      date: "1968-01-01",
      imports: 23.49219276,
      exports: 24.170321
    },
    {
      date: "1968-04-01",
      imports: 23.28337327,
      exports: 24.65438751
    },
    {
      date: "1968-07-01",
      imports: 23.28337327,
      exports: 24.88541926
    },
    {
      date: "1968-10-01",
      imports: 23.49219276,
      exports: 25.61151902
    },
    {
      date: "1969-01-01",
      imports: 23.28337327,
      exports: 25.84255077
    },
    {
      date: "1969-04-01",
      imports: 23.49219276,
      exports: 25.61151902
    },
    {
      date: "1969-07-01",
      imports: 23.70101225,
      exports: 25.84255077
    },
    {
      date: "1969-10-01",
      imports: 24.11865123,
      exports: 26.79968228
    },
    {
      date: "1970-01-01",
      imports: 24.64069996,
      exports: 27.04171553
    },
    {
      date: "1970-04-01",
      imports: 25.05833895,
      exports: 27.04171553
    },
    {
      date: "1970-07-01",
      imports: 25.26715844,
      exports: 27.52578204
    },
    {
      date: "1970-10-01",
      imports: 25.68479742,
      exports: 28.2408803
    },
    {
      date: "1971-01-01",
      imports: 26.31125589,
      exports: 27.6798032
    },
    {
      date: "1971-04-01",
      imports: 26.52007538,
      exports: 27.954841
    },
    {
      date: "1971-07-01",
      imports: 27.04212411,
      exports: 28.5269196
    },
    {
      date: "1971-10-01",
      imports: 26.52007538,
      exports: 29.08799669
    },
    {
      date: "1972-01-01",
      imports: 26.31125589,
      exports: 29.37403599
    },
    {
      date: "1972-04-01",
      imports: 26.52007538,
      exports: 29.37403599
    },
    {
      date: "1972-07-01",
      imports: 26.83330462,
      exports: 29.64907378
    },
    {
      date: "1972-10-01",
      imports: 27.04212411,
      exports: 30.22115239
    },
    {
      date: "1973-01-01",
      imports: 27.56417284,
      exports: 31.91538517
    },
    {
      date: "1973-04-01",
      imports: 28.19063131,
      exports: 32.76250157
    },
    {
      date: "1973-07-01",
      imports: 29.7567775,
      exports: 33.32357866
    },
    {
      date: "1973-10-01",
      imports: 32.36702114,
      exports: 35.01781145
    },
    {
      date: "1974-01-01",
      imports: 38.0051474,
      exports: 38.13123923
    },
    {
      date: "1974-04-01",
      imports: 39.57129358,
      exports: 39.25339342
    },
    {
      date: "1974-07-01",
      imports: 41.45066901,
      exports: 39.82547202
    },
    {
      date: "1974-10-01",
      imports: 41.97271773,
      exports: 41.23366551
    },
    {
      date: "1975-01-01",
      imports: 41.97271773,
      exports: 42.64185899
    },
    {
      date: "1975-04-01",
      imports: 41.6594885,
      exports: 42.3668212
    },
    {
      date: "1975-07-01",
      imports: 41.97271773,
      exports: 43.48897539
    },
    {
      date: "1975-10-01",
      imports: 42.70358595,
      exports: 44.06105399
    },
    {
      date: "1976-01-01",
      imports: 44.06091265,
      exports: 46.04132608
    },
    {
      date: "1976-04-01",
      imports: 44.06091265,
      exports: 46.31636387
    },
    {
      date: "1976-07-01",
      imports: 45.1050101,
      exports: 46.31636387
    },
    {
      date: "1976-10-01",
      imports: 45.94028807,
      exports: 46.88844247
    },
    {
      date: "1977-01-01",
      imports: 47.610844,
      exports: 48.57167375
    },
    {
      date: "1977-04-01",
      imports: 49.28139993,
      exports: 49.44079316
    },
    {
      date: "1977-07-01",
      imports: 50.11667789,
      exports: 50.73897153
    },
    {
      date: "1977-10-01",
      imports: 50.11667789,
      exports: 51.60809095
    },
    {
      date: "1978-01-01",
      imports: 49.28139993,
      exports: 52.0371499
    },
    {
      date: "1978-04-01",
      imports: 49.28139993,
      exports: 51.60809095
    },
    {
      date: "1978-07-01",
      imports: 49.69903891,
      exports: 52.47721037
    },
    {
      date: "1978-10-01",
      imports: 49.69903891,
      exports: 52.47721037
    },
    {
      date: "1979-01-01",
      imports: 51.36959484,
      exports: 53.34632979
    },
    {
      date: "1979-04-01",
      imports: 55.12834568,
      exports: 54.64450816
    },
    {
      date: "1979-07-01",
      imports: 58.88709652,
      exports: 57.24086489
    },
    {
      date: "1979-10-01",
      imports: 60.87088169,
      exports: 58.97910373
    },
    {
      date: "1980-01-01",
      imports: 66.30018846,
      exports: 61.58646198
    },
    {
      date: "1980-04-01",
      imports: 68.38838337,
      exports: 63.3136993
    },
    {
      date: "1980-07-01",
      imports: 68.80602235,
      exports: 64.18281872
    },
    {
      date: "1980-10-01",
      imports: 71.72949523,
      exports: 66.35011651
    },
    {
      date: "1981-01-01",
      imports: 77.99407997,
      exports: 69.51855185
    },
    {
      date: "1981-04-01",
      imports: 81.43960157,
      exports: 73.34707789
    },
    {
      date: "1981-07-01",
      imports: 82.06606005,
      exports: 74.62325323
    },
    {
      date: "1981-10-01",
      imports: 81.43960157,
      exports: 75.89942858
    },
    {
      date: "1982-01-01",
      imports: 86.24244987,
      exports: 79.07886544
    },
    {
      date: "1982-04-01",
      imports: 87.59977656,
      exports: 80.35504078
    },
    {
      date: "1982-07-01",
      imports: 90.31442995,
      exports: 82.2693038
    },
    {
      date: "1982-10-01",
      imports: 90.31442995,
      exports: 83.54547915
    },
    {
      date: "1983-01-01",
      imports: 88.95710326,
      exports: 82.90739148
    },
    {
      date: "1983-04-01",
      imports: 88.95710326,
      exports: 82.2693038
    },
    {
      date: "1983-07-01",
      imports: 92.61144435,
      exports: 86.31786007
    },
    {
      date: "1983-10-01",
      imports: 95.11727825,
      exports: 88.65018053
    },
    {
      date: "1984-01-01",
      imports: 97.10106341,
      exports: 89.92635588
    },
    {
      date: "1984-04-01",
      imports: 97.83193163,
      exports: 90.77347228
    },
    {
      date: "1984-07-01",
      imports: 99.92012654,
      exports: 92.04964762
    },
    {
      date: "1984-10-01",
      imports: 100.546585,
      exports: 92.47870657
    },
    {
      date: "1985-01-01",
      imports: 103.2612384,
      exports: 94.39296959
    },
    {
      date: "1985-04-01",
      imports: 103.2612384,
      exports: 94.60199831
    },
    {
      date: "1985-07-01",
      imports: 99.92012654,
      exports: 94.39296959
    },
    {
      date: "1985-10-01",
      imports: 99.39807782,
      exports: 94.39296959
    },
    {
      date: "1986-01-01",
      imports: 96.47460494,
      exports: 92.68773529
    },
    {
      date: "1986-04-01",
      imports: 91.67175664,
      exports: 89.92635588
    },
    {
      date: "1986-07-01",
      imports: 89.16592275,
      exports: 89.92635588
    },
    {
      date: "1986-10-01",
      imports: 89.16592275,
      exports: 89.49729693
    },
    {
      date: "1987-01-01",
      imports: 86.45126936,
      exports: 90.00336646
    },
    {
      date: "1987-04-01",
      imports: 86.45126936,
      exports: 89.06823798
    },
    {
      date: "1987-07-01",
      imports: 87.49536682,
      exports: 89.06823798
    },
    {
      date: "1987-10-01",
      imports: 87.49536682,
      exports: 89.06823798
    },
    {
      date: "1988-01-01",
      imports: 87.49536682,
      exports: 88.13310949
    },
    {
      date: "1988-04-01",
      imports: 87.49536682,
      exports: 88.13310949
    },
    {
      date: "1988-07-01",
      imports: 89.47915198,
      exports: 89.06823798
    },
    {
      date: "1988-10-01",
      imports: 88.85269351,
      exports: 90.31140879
    },
    {
      date: "1989-01-01",
      imports: 94.17759054,
      exports: 92.5007096
    },
    {
      date: "1989-04-01",
      imports: 95.84814647,
      exports: 94.38196808
    },
    {
      date: "1989-07-01",
      imports: 94.90845876,
      exports: 95.62513889
    },
    {
      date: "1989-10-01",
      imports: 93.8643613,
      exports: 95.62513889
    },
    {
      date: "1990-01-01",
      imports: 92.50703461,
      exports: 93.75488192
    },
    {
      date: "1990-04-01",
      imports: 90.83647868,
      exports: 92.81975343
    },
    {
      date: "1990-07-01",
      imports: 90.83647868,
      exports: 92.81975343
    },
    {
      date: "1990-10-01",
      imports: 91.88057613,
      exports: 92.81975343
    },
    {
      date: "1991-01-01",
      imports: 91.46293715,
      exports: 92.5007096
    },
    {
      date: "1991-04-01",
      imports: 91.88057613,
      exports: 93.4468396
    },
    {
      date: "1991-07-01",
      imports: 92.50703461,
      exports: 93.75488192
    },
    {
      date: "1991-10-01",
      imports: 92.19380537,
      exports: 93.12779576
    },
    {
      date: "1992-01-01",
      imports: 90.52324944,
      exports: 92.5007096
    },
    {
      date: "1992-04-01",
      imports: 89.79238122,
      exports: 93.4468396
    },
    {
      date: "1992-07-01",
      imports: 88.53946427,
      exports: 92.19266727
    },
    {
      date: "1992-10-01",
      imports: 87.18213758,
      exports: 90.63045262
    },
    {
      date: "1993-01-01",
      imports: 82.48369903,
      exports: 88.13310949
    },
    {
      date: "1993-04-01",
      imports: 85.51158165,
      exports: 89.06823798
    },
    {
      date: "1993-07-01",
      imports: 86.45126936,
      exports: 89.06823798
    },
    {
      date: "1993-10-01",
      imports: 87.49536682,
      exports: 90.00336646
    },
    {
      date: "1994-01-01",
      imports: 87.49536682,
      exports: 90.93849495
    },
    {
      date: "1994-04-01",
      imports: 87.49536682,
      exports: 90.93849495
    },
    {
      date: "1994-07-01",
      imports: 86.45126936,
      exports: 90.93849495
    },
    {
      date: "1994-10-01",
      imports: 87.49536682,
      exports: 90.93849495
    },
    {
      date: "1995-01-01",
      imports: 88.33064478,
      exports: 90.3224103
    },
    {
      date: "1995-04-01",
      imports: 88.74828376,
      exports: 90.87248588
    },
    {
      date: "1995-07-01",
      imports: 88.01741555,
      exports: 90.56444355
    },
    {
      date: "1995-10-01",
      imports: 88.85269351,
      exports: 89.7503317
    },
    {
      date: "1996-01-01",
      imports: 89.68797148,
      exports: 91.32354786
    },
    {
      date: "1996-04-01",
      imports: 90.62765919,
      exports: 92.43470053
    },
    {
      date: "1996-07-01",
      imports: 90.00120071,
      exports: 91.86262192
    },
    {
      date: "1996-10-01",
      imports: 90.62765919,
      exports: 92.85275797
    },
    {
      date: "1997-01-01",
      imports: 91.98498588,
      exports: 92.48970809
    },
    {
      date: "1997-04-01",
      imports: 93.02908333,
      exports: 93.90890308
    },
    {
      date: "1997-07-01",
      imports: 94.07318079,
      exports: 94.60199831
    },
    {
      date: "1997-10-01",
      imports: 94.28200028,
      exports: 94.39296959
    },
    {
      date: "1998-01-01",
      imports: 93.8643613,
      exports: 93.12779576
    },
    {
      date: "1998-04-01",
      imports: 94.07318079,
      exports: 93.40283355
    },
    {
      date: "1998-07-01",
      imports: 93.34231257,
      exports: 92.36869146
    },
    {
      date: "1998-10-01",
      imports: 92.08939562,
      exports: 91.91762948
    },
    {
      date: "1999-01-01",
      imports: 90.83647868,
      exports: 91.29054332
    },
    {
      date: "1999-04-01",
      imports: 92.7158541,
      exports: 92.34668843
    },
    {
      date: "1999-07-01",
      imports: 93.8643613,
      exports: 93.63386529
    },
    {
      date: "1999-10-01",
      imports: 95.74373672,
      exports: 95.14107238
    },
    {
      date: "2000-01-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-04-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-07-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-10-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2001-01-01",
      imports: 100.546585,
      exports: 101.4669416
    },
    {
      date: "2001-04-01",
      imports: 102.4259604,
      exports: 102.6771078
    },
    {
      date: "2001-07-01",
      imports: 101.0686338,
      exports: 102.314058
    },
    {
      date: "2001-10-01",
      imports: 100.2333558,
      exports: 100.7738463
    },
    {
      date: "2002-01-01",
      imports: 98.77161934,
      exports: 100.1137556
    },
    {
      date: "2002-04-01",
      imports: 99.29366807,
      exports: 100.3887934
    },
    {
      date: "2002-07-01",
      imports: 99.08484858,
      exports: 99.54167703
    },
    {
      date: "2002-10-01",
      imports: 99.71130705,
      exports: 99.87172237
    },
    {
      date: "2003-01-01",
      imports: 97.72752189,
      exports: 100.9278675
    },
    {
      date: "2003-04-01",
      imports: 96.47460494,
      exports: 98.06747447
    },
    {
      date: "2003-07-01",
      imports: 96.57901469,
      exports: 97.85844575
    },
    {
      date: "2003-10-01",
      imports: 97.72752189,
      exports: 99.75070575
    },
    {
      date: "2004-01-01",
      imports: 96.37019519,
      exports: 98.55154098
    },
    {
      date: "2004-04-01",
      imports: 97.93634138,
      exports: 100.7518433
    },
    {
      date: "2004-07-01",
      imports: 98.87602909,
      exports: 101.4449385
    },
    {
      date: "2004-10-01",
      imports: 99.29366807,
      exports: 101.9840126
    },
    {
      date: "2005-01-01",
      imports: 99.60689731,
      exports: 102.853132
    },
    {
      date: "2005-04-01",
      imports: 101.6950922,
      exports: 105.4164842
    },
    {
      date: "2005-07-01",
      imports: 102.9480092,
      exports: 107.5507775
    },
    {
      date: "2005-10-01",
      imports: 103.9921066,
      exports: 107.9468319
    },
    {
      date: "2006-01-01",
      imports: 103.8862351,
      exports: 108.5542254
    },
    {
      date: "2006-04-01",
      imports: 105.2721701,
      exports: 108.8855909
    },
    {
      date: "2006-07-01",
      imports: 105.538415,
      exports: 108.8554467
    },
    {
      date: "2006-10-01",
      imports: 104.9182211,
      exports: 106.6566846
    },
    {
      date: "2007-01-01",
      imports: 105.5968844,
      exports: 107.168695
    },
    {
      date: "2007-04-01",
      imports: 106.5699832,
      exports: 106.5963963
    },
    {
      date: "2007-07-01",
      imports: 108.1037624,
      exports: 106.8072953
    },
    {
      date: "2007-10-01",
      imports: 109.7858034,
      exports: 109.126524
    },
    {
      date: "2008-01-01",
      imports: 107.8385617,
      exports: 109.3976012
    },
    {
      date: "2008-04-01",
      imports: 109.2835925,
      exports: 111.2648878
    },
    {
      date: "2008-07-01",
      imports: 109.6375416,
      exports: 113.3430733
    },
    {
      date: "2008-10-01",
      imports: 107.6621092,
      exports: 110.5420885
    },
    {
      date: "2009-01-01",
      imports: 102.7948401,
      exports: 105.7530205
    },
    {
      date: "2009-04-01",
      imports: 102.3818995,
      exports: 104.6385673
    },
    {
      date: "2009-07-01",
      imports: 102.204925,
      exports: 104.6988556
    },
    {
      date: "2009-10-01",
      imports: 100.9955469,
      exports: 105.3614767
    },
    {
      date: "2010-01-01",
      imports: 102.6178656,
      exports: 108.3132923
    },
    {
      date: "2010-04-01",
      imports: 104.1222012,
      exports: 110.2406471
    },
    {
      date: "2010-07-01",
      imports: 105.0069694,
      exports: 111.084463
    },
    {
      date: "2010-10-01",
      imports: 105.892364,
      exports: 110.422172
    },
    {
      date: "2011-01-01",
      imports: 109.6511148,
      exports: 112.2374214
    },
    {
      date: "2011-04-01",
      imports: 110.3088962,
      exports: 113.4695907
    },
    {
      date: "2011-07-01",
      imports: 111.6662229,
      exports: 115.3178447
    },
    {
      date: "2011-10-01",
      imports: 112.3657682,
      exports: 115.2958417
    },
    {
      date: "2012-01-01",
      imports: 115.4458557,
      exports: 120.1035022
    },
    {
      date: "2012-04-01",
      imports: 115.3727689,
      exports: 119.5204221
    },
    {
      date: "2012-07-01",
      imports: 117.0224429,
      exports: 122.9198892
    },
    {
      date: "2012-10-01",
      imports: 116.1871649,
      exports: 122.3808151
    },
    {
      date: "2013-01-01",
      imports: 115.5920294,
      exports: 122.0287668
    },
    {
      date: "2013-04-01",
      imports: 114.2764666,
      exports: 119.5974327
    },
    {
      date: "2013-07-01",
      imports: 113.5455984,
      exports: 119.5204221
    },
    {
      date: "2013-10-01",
      imports: 112.6581155,
      exports: 117.7931848
    },
    {
      date: "2014-01-01",
      imports: 112.4075321,
      exports: 117.023079
    },
    {
      date: "2014-04-01",
      imports: 112.3344453,
      exports: 116.9020623
    },
    {
      date: "2014-07-01",
      imports: 113.5455984,
      exports: 116.59402
    },
    {
      date: "2014-10-01",
      imports: 112.1047439,
      exports: 113.5025953
    },
    {
      date: "2015-01-01",
      imports: 110.3506601,
      exports: 114.7787706
    },
    {
      date: "2015-04-01",
      imports: 112.1465078,
      exports: 117.7161742
    },
    {
      date: "2015-07-01",
      imports: 110.3506601,
      exports: 115.0538084
    },
    {
      date: "2015-10-01",
      imports: 107.6673297,
      exports: 115.4718658
    },
    {
      date: "2016-01-01",
      imports: 104.2218081,
      exports: 112.6994849
    },
    {
      date: "2016-04-01",
      imports: 104.6185651,
      exports: 112.3474365
    },
    {
      date: "2016-07-01",
      imports: 105.5373709,
      exports: 112.6554789
    },
    {
      date: "2016-10-01",
      imports: 106.8216107,
      exports: 114.5147343
    },
    {
      date: "2017-01-01",
      imports: 108.9515695,
      exports: 114.3167071
    },
    {
      date: "2017-04-01",
      imports: 109.4318544,
      exports: 113.3155696
    },
    {
      date: "2017-07-01",
      imports: 108.9515695,
      exports: 112.0393942
    },
    {
      date: "2017-10-01",
      imports: 110.7160942,
      exports: 115.0098024
    },
    {
      date: "2018-01-01",
      imports: 110.6430074,
      exports: 113.733627
    },
    {
      date: "2018-04-01",
      imports: 111.6349,
      exports: 114.9767978
    },
    {
      date: "2018-07-01",
      imports: 113.2114872,
      exports: 114.206692
    },
    {
      date: "2018-10-01",
      imports: 113.4307476,
      exports: 116.4399989
    },
    {
      date: "2019-01-01",
      imports: 113.0653135,
      exports: 116.7480412
    },
    {
      date: "2019-04-01",
      imports: 113.5769213,
      exports: 118.3652634
    },
    {
      date: "2019-07-01",
      imports: 113.9423554,
      exports: 120.1475083
    },
    {
      date: "2019-10-01",
      imports: 113.9841193,
      exports: 120.1035022
    },
    {
      date: "2020-01-01",
      imports: 112.1111076,
      exports: 122.7351906
    },
    {
      date: "2020-04-01",
      imports: 108.3997674,
      exports: 118.1512865
    },
    {
      date: "2020-07-01",
      imports: 109.6552356,
      exports: 117.804021
    },
    {
      date: "2020-10-01",
      imports: 111.0428584,
      exports: 122.5847089
    }
  ],
  Dominica: [
    {
      date: "1991-10-01",
      imports: 0,
      exports: 118.1501069
    }
  ],
  Finland: [
    {
      date: "1980-01-01",
      imports: 50.97639401,
      exports: 42.80674137
    },
    {
      date: "1980-04-01",
      imports: 50.97639401,
      exports: 44.187604
    },
    {
      date: "1980-07-01",
      imports: 51.62993752,
      exports: 44.87803531
    },
    {
      date: "1980-10-01",
      imports: 52.93702455,
      exports: 46.94932925
    },
    {
      date: "1981-01-01",
      imports: 56.20474211,
      exports: 47.63976056
    },
    {
      date: "1981-04-01",
      imports: 57.51182914,
      exports: 49.02062318
    },
    {
      date: "1981-07-01",
      imports: 58.81891616,
      exports: 50.40148581
    },
    {
      date: "1981-10-01",
      imports: 57.51182914,
      exports: 51.09191712
    },
    {
      date: "1982-01-01",
      imports: 58.81891616,
      exports: 51.78234843
    },
    {
      date: "1982-04-01",
      imports: 58.16537265,
      exports: 51.78234843
    },
    {
      date: "1982-07-01",
      imports: 59.47245968,
      exports: 53.16321106
    },
    {
      date: "1982-10-01",
      imports: 64.04726427,
      exports: 56.61536762
    },
    {
      date: "1983-01-01",
      imports: 64.04726427,
      exports: 56.61536762
    },
    {
      date: "1983-04-01",
      imports: 63.39372075,
      exports: 56.61536762
    },
    {
      date: "1983-07-01",
      imports: 64.04726427,
      exports: 56.61536762
    },
    {
      date: "1983-10-01",
      imports: 64.70080778,
      exports: 57.30579893
    },
    {
      date: "1984-01-01",
      imports: 66.00789481,
      exports: 59.37709287
    },
    {
      date: "1984-04-01",
      imports: 66.66143832,
      exports: 59.37709287
    },
    {
      date: "1984-07-01",
      imports: 67.96852534,
      exports: 61.44838681
    },
    {
      date: "1984-10-01",
      imports: 68.62206886,
      exports: 61.44838681
    },
    {
      date: "1985-01-01",
      imports: 71.23624291,
      exports: 62.82924943
    },
    {
      date: "1985-04-01",
      imports: 70.5826994,
      exports: 62.13881812
    },
    {
      date: "1985-07-01",
      imports: 68.62206886,
      exports: 62.13881812
    },
    {
      date: "1985-10-01",
      imports: 67.96852534,
      exports: 60.06752418
    },
    {
      date: "1986-01-01",
      imports: 66.00789481,
      exports: 60.06752418
    },
    {
      date: "1986-04-01",
      imports: 62.08663373,
      exports: 59.37709287
    },
    {
      date: "1986-07-01",
      imports: 61.43309022,
      exports: 62.13881812
    },
    {
      date: "1986-10-01",
      imports: 62.08663373,
      exports: 60.75795549
    },
    {
      date: "1987-01-01",
      imports: 61.43309022,
      exports: 60.75795549
    },
    {
      date: "1987-04-01",
      imports: 60.7795467,
      exports: 61.44838681
    },
    {
      date: "1987-07-01",
      imports: 62.08663373,
      exports: 62.13881812
    },
    {
      date: "1987-10-01",
      imports: 60.7795467,
      exports: 62.13881812
    },
    {
      date: "1988-01-01",
      imports: 60.7795467,
      exports: 62.82924943
    },
    {
      date: "1988-04-01",
      imports: 62.08663373,
      exports: 63.51968074
    },
    {
      date: "1988-07-01",
      imports: 63.39372075,
      exports: 65.59097468
    },
    {
      date: "1988-10-01",
      imports: 64.04726427,
      exports: 68.35269993
    },
    {
      date: "1989-01-01",
      imports: 65.35435129,
      exports: 69.73356256
    },
    {
      date: "1989-04-01",
      imports: 64.04726427,
      exports: 69.73356256
    },
    {
      date: "1989-07-01",
      imports: 64.04726427,
      exports: 69.73356256
    },
    {
      date: "1989-10-01",
      imports: 64.04726427,
      exports: 70.42399387
    },
    {
      date: "1990-01-01",
      imports: 65.35435129,
      exports: 68.35269993
    },
    {
      date: "1990-04-01",
      imports: 64.04726427,
      exports: 69.04313124
    },
    {
      date: "1990-07-01",
      imports: 66.00789481,
      exports: 69.73356256
    },
    {
      date: "1990-10-01",
      imports: 67.96852534,
      exports: 69.04313124
    },
    {
      date: "1991-01-01",
      imports: 66.66143832,
      exports: 69.04313124
    },
    {
      date: "1991-04-01",
      imports: 66.66143832,
      exports: 68.35269993
    },
    {
      date: "1991-07-01",
      imports: 67.31498183,
      exports: 69.73356256
    },
    {
      date: "1991-10-01",
      imports: 68.62206886,
      exports: 70.42399387
    },
    {
      date: "1992-01-01",
      imports: 72.54332993,
      exports: 72.49528781
    },
    {
      date: "1992-04-01",
      imports: 73.19687345,
      exports: 72.49528781
    },
    {
      date: "1992-07-01",
      imports: 72.54332993,
      exports: 73.18571912
    },
    {
      date: "1992-10-01",
      imports: 78.42522155,
      exports: 76.63787568
    },
    {
      date: "1993-01-01",
      imports: 84.30711317,
      exports: 78.70916962
    },
    {
      date: "1993-04-01",
      imports: 84.30711317,
      exports: 78.01873831
    },
    {
      date: "1993-07-01",
      imports: 84.30711317,
      exports: 78.01873831
    },
    {
      date: "1993-10-01",
      imports: 82.34648263,
      exports: 75.94744437
    },
    {
      date: "1994-01-01",
      imports: 82.34648263,
      exports: 75.94744437
    },
    {
      date: "1994-04-01",
      imports: 80.38585209,
      exports: 78.70916962
    },
    {
      date: "1994-07-01",
      imports: 82.34648263,
      exports: 80.09003224
    },
    {
      date: "1994-10-01",
      imports: 80.38585209,
      exports: 78.70916962
    },
    {
      date: "1995-01-01",
      imports: 82.21577393,
      exports: 82.92080062
    },
    {
      date: "1995-04-01",
      imports: 80.64073406,
      exports: 83.40410254
    },
    {
      date: "1995-07-01",
      imports: 79.66041879,
      exports: 84.30166325
    },
    {
      date: "1995-10-01",
      imports: 80.64073406,
      exports: 84.70901772
    },
    {
      date: "1996-01-01",
      imports: 80.89790997,
      exports: 86.23725982
    },
    {
      date: "1996-04-01",
      imports: 83.45819936,
      exports: 85.78780284
    },
    {
      date: "1996-07-01",
      imports: 82.94614148,
      exports: 81.74561404
    },
    {
      date: "1996-10-01",
      imports: 83.45819936,
      exports: 81.74561404
    },
    {
      date: "1997-01-01",
      imports: 82.94614148,
      exports: 82.64385965
    },
    {
      date: "1997-04-01",
      imports: 83.97025723,
      exports: 83.99164578
    },
    {
      date: "1997-07-01",
      imports: 86.01768489,
      exports: 86.68588137
    },
    {
      date: "1997-10-01",
      imports: 86.52974277,
      exports: 87.58479532
    },
    {
      date: "1998-01-01",
      imports: 84.99356913,
      exports: 86.23725982
    },
    {
      date: "1998-04-01",
      imports: 84.99356913,
      exports: 87.58479532
    },
    {
      date: "1998-07-01",
      imports: 82.95016077,
      exports: 87.55221387
    },
    {
      date: "1998-10-01",
      imports: 83.44051447,
      exports: 84.37761069
    },
    {
      date: "1999-01-01",
      imports: 85.20900322,
      exports: 86.04845447
    },
    {
      date: "1999-04-01",
      imports: 85.20900322,
      exports: 87.71929825
    },
    {
      date: "1999-07-01",
      imports: 88.34405145,
      exports: 88.63826232
    },
    {
      date: "1999-10-01",
      imports: 91.55948553,
      exports: 90.05847953
    },
    {
      date: "2000-01-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-04-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-07-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-10-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2001-01-01",
      imports: 102.2508039,
      exports: 98.07852966
    },
    {
      date: "2001-04-01",
      imports: 103.1350482,
      exports: 98.16207185
    },
    {
      date: "2001-07-01",
      imports: 100.8038585,
      exports: 97.91144528
    },
    {
      date: "2001-10-01",
      imports: 97.58842444,
      exports: 98.57978279
    },
    {
      date: "2002-01-01",
      imports: 94.28226367,
      exports: 91.08667419
    },
    {
      date: "2002-04-01",
      imports: 94.73001994,
      exports: 90.55186892
    },
    {
      date: "2002-07-01",
      imports: 93.54726752,
      exports: 90.8065381
    },
    {
      date: "2002-10-01",
      imports: 94.36674598,
      exports: 91.40076617
    },
    {
      date: "2003-01-01",
      imports: 95.71846302,
      exports: 89.7284386
    },
    {
      date: "2003-04-01",
      imports: 92.93054662,
      exports: 86.5875188
    },
    {
      date: "2003-07-01",
      imports: 92.76158199,
      exports: 85.56884211
    },
    {
      date: "2003-10-01",
      imports: 93.01502894,
      exports: 85.65373183
    },
    {
      date: "2004-01-01",
      imports: 92.67709968,
      exports: 84.46527569
    },
    {
      date: "2004-04-01",
      imports: 95.97190997,
      exports: 86.07818045
    },
    {
      date: "2004-07-01",
      imports: 98.928791,
      exports: 86.33284962
    },
    {
      date: "2004-10-01",
      imports: 100.533955,
      exports: 87.94575439
    },
    {
      date: "2005-01-01",
      imports: 101.7167074,
      exports: 91.68090226
    },
    {
      date: "2005-04-01",
      imports: 106.447717,
      exports: 93.29380702
    },
    {
      date: "2005-07-01",
      imports: 112.0235498,
      exports: 95.07649123
    },
    {
      date: "2005-10-01",
      imports: 112.4459614,
      exports: 94.31248371
    }
  ],
  Iceland: [
    {
      date: "2017-01-01",
      imports: 222.924618,
      exports: 188.6829673
    },
    {
      date: "2017-04-01",
      imports: 214.2392433,
      exports: 186.6790677
    },
    {
      date: "2017-07-01",
      imports: 220.363546,
      exports: 193.9563873
    },
    {
      date: "2017-10-01",
      imports: 233.1689061,
      exports: 202.7102645
    },
    {
      date: "2018-01-01",
      imports: 238.5137521,
      exports: 201.7610489
    },
    {
      date: "2018-04-01",
      imports: 245.3061606,
      exports: 207.9836845
    },
    {
      date: "2018-07-01",
      imports: 259.6704342,
      exports: 217.4758404
    },
    {
      date: "2018-10-01",
      imports: 284.9471016,
      exports: 233.0851636
    },
    {
      date: "2019-01-01",
      imports: 271.1395828,
      exports: 228.7609592
    },
    {
      date: "2019-04-01",
      imports: 276.8184817,
      exports: 233.6125056
    },
    {
      date: "2019-07-01",
      imports: 272.6984962,
      exports: 232.0304796
    },
    {
      date: "2019-10-01",
      imports: 265.9060878,
      exports: 227.917212
    },
    {
      date: "2020-01-01",
      imports: 277.9319913,
      exports: 237.0929628
    },
    {
      date: "2020-04-01",
      imports: 300.5362358,
      exports: 245.5304348
    },
    {
      date: "2020-07-01",
      imports: 305.4356779,
      exports: 239.9406096
    },
    {
      date: "2020-10-01",
      imports: 301.8724473,
      exports: 247.1124608
    }
  ],
  India: [
    {
      date: "1957-01-01",
      imports: 4.47700088,
      exports: 3.84538807
    },
    {
      date: "1957-04-01",
      imports: 4.81572134,
      exports: 3.76730913
    },
    {
      date: "1957-07-01",
      imports: 4.66845158,
      exports: 3.96250649
    },
    {
      date: "1957-10-01",
      imports: 4.66845158,
      exports: 4.04058544
    },
    {
      date: "1958-01-01",
      imports: 4.43281995,
      exports: 3.65019071
    },
    {
      date: "1958-04-01",
      imports: 4.38863902,
      exports: 3.72826965
    },
    {
      date: "1958-07-01",
      imports: 4.81572134,
      exports: 3.84538807
    },
    {
      date: "1958-10-01",
      imports: 4.43281995,
      exports: 3.92346702
    },
    {
      date: "1959-01-01",
      imports: 4.38863902,
      exports: 3.72826965
    },
    {
      date: "1959-04-01",
      imports: 4.28555019,
      exports: 3.68923018
    },
    {
      date: "1959-07-01",
      imports: 3.85846786,
      exports: 3.76730913
    },
    {
      date: "1959-10-01",
      imports: 4.13828042,
      exports: 3.8063486
    },
    {
      date: "1960-01-01",
      imports: 4.43281995,
      exports: 4.07962491
    },
    {
      date: "1960-04-01",
      imports: 4.47700088,
      exports: 4.11866438
    },
    {
      date: "1960-07-01",
      imports: 4.38863902,
      exports: 4.17722359
    },
    {
      date: "1960-10-01",
      imports: 4.38863902,
      exports: 4.21626306
    },
    {
      date: "1961-01-01",
      imports: 4.56536274,
      exports: 4.33338148
    },
    {
      date: "1961-04-01",
      imports: 4.56536274,
      exports: 4.41146043
    },
    {
      date: "1961-07-01",
      imports: 4.2119153,
      exports: 4.21626306
    },
    {
      date: "1961-10-01",
      imports: 4.47700088,
      exports: 4.00154596
    },
    {
      date: "1962-01-01",
      imports: 4.25609623,
      exports: 4.07962491
    },
    {
      date: "1962-04-01",
      imports: 4.25609623,
      exports: 4.11866438
    },
    {
      date: "1962-07-01",
      imports: 4.25609623,
      exports: 4.00154596
    },
    {
      date: "1962-10-01",
      imports: 4.2119153,
      exports: 3.96250649
    },
    {
      date: "1963-01-01",
      imports: 4.30027716,
      exports: 4.07962491
    },
    {
      date: "1963-04-01",
      imports: 4.25609623,
      exports: 4.11866438
    },
    {
      date: "1963-07-01",
      imports: 4.30027716,
      exports: 4.04058544
    },
    {
      date: "1963-10-01",
      imports: 4.71263251,
      exports: 3.92346702
    },
    {
      date: "1964-01-01",
      imports: 4.38863902,
      exports: 3.92346702
    },
    {
      date: "1964-04-01",
      imports: 4.38863902,
      exports: 4.11866438
    },
    {
      date: "1964-07-01",
      imports: 4.43281995,
      exports: 4.00154596
    },
    {
      date: "1964-10-01",
      imports: 4.8451753,
      exports: 4.07962491
    },
    {
      date: "1965-01-01",
      imports: 4.62427065,
      exports: 4.17722359
    },
    {
      date: "1965-04-01",
      imports: 4.66845158,
      exports: 4.25530254
    },
    {
      date: "1965-07-01",
      imports: 4.62427065,
      exports: 4.33338148
    },
    {
      date: "1965-10-01",
      imports: 4.71263251,
      exports: 4.25530254
    },
    {
      date: "1966-01-01",
      imports: 4.8451753,
      exports: 4.25530254
    },
    {
      date: "1966-04-01",
      imports: 4.75681344,
      exports: 4.84089463
    },
    {
      date: "1966-07-01",
      imports: 6.43568877,
      exports: 6.81238801
    },
    {
      date: "1966-10-01",
      imports: 7.56966596,
      exports: 6.48055249
    },
    {
      date: "1967-01-01",
      imports: 7.4813041,
      exports: 6.20727618
    },
    {
      date: "1967-04-01",
      imports: 7.28985341,
      exports: 6.65623011
    },
    {
      date: "1967-07-01",
      imports: 6.70077434,
      exports: 6.63671038
    },
    {
      date: "1967-10-01",
      imports: 6.39150784,
      exports: 6.36343407
    },
    {
      date: "1968-01-01",
      imports: 6.64186644,
      exports: 6.14871697
    },
    {
      date: "1968-04-01",
      imports: 6.70077434,
      exports: 6.20727618
    },
    {
      date: "1968-07-01",
      imports: 6.36205388,
      exports: 6.26583539
    },
    {
      date: "1968-10-01",
      imports: 6.49459667,
      exports: 6.14871697
    },
    {
      date: "1969-01-01",
      imports: 7.09840271,
      exports: 6.51959196
    },
    {
      date: "1969-04-01",
      imports: 7.09840271,
      exports: 6.71478932
    },
    {
      date: "1969-07-01",
      imports: 6.22951109,
      exports: 6.59767091
    },
    {
      date: "1969-10-01",
      imports: 6.77440923,
      exports: 6.59767091
    },
    {
      date: "1970-01-01",
      imports: 6.49459667,
      exports: 6.46103275
    },
    {
      date: "1970-04-01",
      imports: 7.03949481,
      exports: 6.65623011
    },
    {
      date: "1970-07-01",
      imports: 7.1720376,
      exports: 6.90998669
    },
    {
      date: "1970-10-01",
      imports: 6.22951109,
      exports: 6.34391433
    },
    {
      date: "1971-01-01",
      imports: 6.30314598,
      exports: 6.59767091
    },
    {
      date: "1971-04-01",
      imports: 6.70077434,
      exports: 6.90998669
    },
    {
      date: "1971-07-01",
      imports: 6.90695202,
      exports: 6.9685459
    },
    {
      date: "1971-10-01",
      imports: 6.64186644,
      exports: 6.59767091
    },
    {
      date: "1972-01-01",
      imports: 6.22951109,
      exports: 7.04662484
    },
    {
      date: "1972-04-01",
      imports: 7.09840271,
      exports: 7.6126972
    },
    {
      date: "1972-07-01",
      imports: 7.03949481,
      exports: 7.55413799
    },
    {
      date: "1972-10-01",
      imports: 6.64186644,
      exports: 7.24182221
    },
    {
      date: "1973-01-01",
      imports: 7.1720376,
      exports: 8.51060507
    },
    {
      date: "1973-04-01",
      imports: 8.37964967,
      exports: 8.95955901
    },
    {
      date: "1973-07-01",
      imports: 8.90982083,
      exports: 9.79890768
    },
    {
      date: "1973-10-01",
      imports: 10.79487383,
      exports: 8.76436165
    },
    {
      date: "1974-01-01",
      imports: 11.66376545,
      exports: 9.99410504
    },
    {
      date: "1974-04-01",
      imports: 15.69895704,
      exports: 11.08721028
    },
    {
      date: "1974-07-01",
      imports: 14.34407519,
      exports: 12.74638787
    },
    {
      date: "1974-10-01",
      imports: 15.36023657,
      exports: 11.59472342
    },
    {
      date: "1975-01-01",
      imports: 16.43530586,
      exports: 12.10223657
    },
    {
      date: "1975-04-01",
      imports: 17.77546073,
      exports: 12.74638787
    },
    {
      date: "1975-07-01",
      imports: 17.77546073,
      exports: 12.68782866
    },
    {
      date: "1975-10-01",
      imports: 20.11705001,
      exports: 12.29743394
    },
    {
      date: "1976-01-01",
      imports: 19.45433606,
      exports: 12.74638787
    },
    {
      date: "1976-04-01",
      imports: 18.04054631,
      exports: 13.1367826
    },
    {
      date: "1976-07-01",
      imports: 18.90943793,
      exports: 13.50765759
    },
    {
      date: "1976-10-01",
      imports: 18.30563189,
      exports: 13.50765759
    },
    {
      date: "1977-01-01",
      imports: 17.09801981,
      exports: 14.09324968
    },
    {
      date: "1977-04-01",
      imports: 18.24672398,
      exports: 15.75242728
    },
    {
      date: "1977-07-01",
      imports: 15.49277936,
      exports: 15.69386807
    },
    {
      date: "1977-10-01",
      imports: 15.83149982,
      exports: 14.93259835
    },
    {
      date: "1978-01-01",
      imports: 17.64291794,
      exports: 14.8545194
    },
    {
      date: "1978-04-01",
      imports: 16.56784865,
      exports: 14.67884178
    },
    {
      date: "1978-07-01",
      imports: 17.0391119,
      exports: 15.38155229
    },
    {
      date: "1978-10-01",
      imports: 18.1730891,
      exports: 15.18635492
    },
    {
      date: "1979-01-01",
      imports: 18.30563189,
      exports: 16.0842628
    },
    {
      date: "1979-04-01",
      imports: 21.58974767,
      exports: 16.0842628
    },
    {
      date: "1979-07-01",
      imports: 23.34225788,
      exports: 16.84553252
    },
    {
      date: "1979-10-01",
      imports: 26.36128808,
      exports: 16.00618385
    },
    {
      date: "1980-01-01",
      imports: 34.69675683,
      exports: 17.99719697
    },
    {
      date: "1980-04-01",
      imports: 30.38175269,
      exports: 17.88007855
    },
    {
      date: "1980-07-01",
      imports: 29.08577875,
      exports: 18.30951275
    },
    {
      date: "1980-10-01",
      imports: 30.45538757,
      exports: 18.25095354
    },
    {
      date: "1981-01-01",
      imports: 32.84115778,
      exports: 18.79750616
    },
    {
      date: "1983-10-01",
      imports: 28.7372403,
      exports: 0
    },
    {
      date: "1984-01-01",
      imports: 30.04303223,
      exports: 0
    },
    {
      date: "1984-04-01",
      imports: 31.34391516,
      exports: 0
    },
    {
      date: "1984-07-01",
      imports: 35.78655309,
      exports: 0
    },
    {
      date: "1984-10-01",
      imports: 35.51164953,
      exports: 0
    },
    {
      date: "1985-01-01",
      imports: 33.2682401,
      exports: 27.07387439
    },
    {
      date: "1985-04-01",
      imports: 35.97800379,
      exports: 29.27960461
    },
    {
      date: "1985-07-01",
      imports: 35.38892472,
      exports: 28.81113093
    },
    {
      date: "1985-10-01",
      imports: 28.4230648,
      exports: 23.15040738
    },
    {
      date: "1986-01-01",
      imports: 35.25638194,
      exports: 29.41624276
    },
    {
      date: "1986-04-01",
      imports: 32.51716429,
      exports: 27.11291387
    },
    {
      date: "1986-07-01",
      imports: 31.58936477,
      exports: 26.35164415
    },
    {
      date: "1986-10-01",
      imports: 32.04590104,
      exports: 26.74203888
    },
    {
      date: "1987-01-01",
      imports: 30.11666711,
      exports: 30.25559143
    },
    {
      date: "1987-04-01",
      imports: 29.92521641,
      exports: 30.0799138
    },
    {
      date: "1987-07-01",
      imports: 28.14325225,
      exports: 28.28409805
    },
    {
      date: "1987-10-01",
      imports: 25.99311367,
      exports: 26.11740731
    },
    {
      date: "1988-01-01",
      imports: 36.15472751,
      exports: 35.19408474
    },
    {
      date: "1988-04-01",
      imports: 35.10911217,
      exports: 34.17905845
    },
    {
      date: "1988-07-01",
      imports: 40.33718886,
      exports: 39.27370965
    },
    {
      date: "1988-10-01",
      imports: 41.17662652,
      exports: 40.07401884
    },
    {
      date: "1989-01-01",
      imports: 46.81705855,
      exports: 44.38788059
    },
    {
      date: "1990-01-01",
      imports: 48.45175295,
      exports: 41.34280171
    },
    {
      date: "1990-04-01",
      imports: 50.73443432,
      exports: 43.29477535
    },
    {
      date: "1990-07-01",
      imports: 61.70603188,
      exports: 52.64472909
    },
    {
      date: "1990-10-01",
      imports: 59.21717283,
      exports: 50.53659755
    },
    {
      date: "1991-01-01",
      imports: 61.54403513,
      exports: 57.50514345
    },
    {
      date: "1991-04-01",
      imports: 56.27177752,
      exports: 52.58616988
    },
    {
      date: "1991-07-01",
      imports: 69.3640597,
      exports: 64.8250446
    },
    {
      date: "1991-10-01",
      imports: 66.62484205,
      exports: 62.26795913
    },
    {
      date: "1992-01-01",
      imports: 64.34216068,
      exports: 63.63434068
    },
    {
      date: "1992-04-01",
      imports: 84.72429627,
      exports: 83.79822839
    },
    {
      date: "1992-07-01",
      imports: 76.24155776,
      exports: 75.40474173
    },
    {
      date: "1992-10-01",
      imports: 48.20139435,
      exports: 47.6671963
    },
    {
      date: "1993-01-01",
      imports: 59.87988678,
      exports: 67.73348533
    },
    {
      date: "1993-04-01",
      imports: 72.36836292,
      exports: 81.86577448
    },
    {
      date: "1993-07-01",
      imports: 65.25523323,
      exports: 73.82364309
    },
    {
      date: "1993-10-01",
      imports: 71.07238898,
      exports: 80.40179425
    },
    {
      date: "1994-01-01",
      imports: 65.04905556,
      exports: 77.3176759
    },
    {
      date: "1994-04-01",
      imports: 66.68374996,
      exports: 79.26964954
    },
    {
      date: "1994-07-01",
      imports: 69.76168806,
      exports: 82.91984025
    },
    {
      date: "1994-10-01",
      imports: 65.44668393,
      exports: 77.80566931
    },
    {
      date: "1995-01-01",
      imports: 53.85655336,
      exports: 57.97361712
    },
    {
      date: "1995-04-01",
      imports: 59.77679794,
      exports: 64.35657093
    },
    {
      date: "1995-07-01",
      imports: 61.76493978,
      exports: 66.4842222
    },
    {
      date: "1995-10-01",
      imports: 112.8970025,
      exports: 121.5493986
    },
    {
      date: "1996-01-01",
      imports: 70.08568155,
      exports: 69.04130767
    },
    {
      date: "1996-04-01",
      imports: 90.07018877,
      exports: 88.7367217
    },
    {
      date: "1996-07-01",
      imports: 81.9998056,
      exports: 80.79218898
    },
    {
      date: "1996-10-01",
      imports: 86.22644788,
      exports: 84.94989284
    },
    {
      date: "1997-01-01",
      imports: 87.7875074,
      exports: 99.90201092
    },
    {
      date: "1997-04-01",
      imports: 74.9603108,
      exports: 85.30124809
    },
    {
      date: "1997-07-01",
      imports: 94.97427197,
      exports: 108.0807805
    },
    {
      date: "1997-10-01",
      imports: 74.2681429,
      exports: 84.52045864
    },
    {
      date: "1998-01-01",
      imports: 83.79649675,
      exports: 98.08667544
    },
    {
      date: "1998-04-01",
      imports: 80.17366051,
      exports: 93.85089264
    },
    {
      date: "1998-07-01",
      imports: 86.96279671,
      exports: 101.8149451
    },
    {
      date: "1998-10-01",
      imports: 84.0174014,
      exports: 98.35995175
    },
    {
      date: "1999-01-01",
      imports: 85.66682277,
      exports: 89.75174799
    },
    {
      date: "1999-04-01",
      imports: 95.4602622,
      exports: 99.99960961
    },
    {
      date: "1999-07-01",
      imports: 95.94625243,
      exports: 100.5071228
    },
    {
      date: "1999-10-01",
      imports: 92.52959386,
      exports: 96.91549125
    },
    {
      date: "2000-01-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-04-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-07-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-10-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2001-01-01",
      imports: 91.51343248,
      exports: 89.51751116
    },
    {
      date: "2001-04-01",
      imports: 101.9843128,
      exports: 99.76537277
    },
    {
      date: "2001-07-01",
      imports: 116.946921,
      exports: 114.4051751
    },
    {
      date: "2001-10-01",
      imports: 94.50300872,
      exports: 92.44547162
    },
    {
      date: "2002-01-01",
      imports: 95.51917011,
      exports: 84.65709679
    },
    {
      date: "2002-04-01",
      imports: 118.1692601,
      exports: 104.7233858
    },
    {
      date: "2002-07-01",
      imports: 118.7583392,
      exports: 105.2504187
    },
    {
      date: "2002-10-01",
      imports: 116.0043945,
      exports: 102.8104517
    },
    {
      date: "2003-01-01",
      imports: 105.5924221,
      exports: 101.600228
    },
    {
      date: "2003-04-01",
      imports: 102.3524872,
      exports: 98.4965899
    },
    {
      date: "2003-07-01",
      imports: 127.4325284,
      exports: 122.6229841
    },
    {
      date: "2003-10-01",
      imports: 112.2637425,
      exports: 108.041741
    },
    {
      date: "2004-01-01",
      imports: 129.7741176,
      exports: 111.8285699
    },
    {
      date: "2004-04-01",
      imports: 145.7087063,
      exports: 125.5509446
    },
    {
      date: "2004-07-01",
      imports: 139.3024715,
      exports: 120.0268592
    },
    {
      date: "2004-10-01",
      imports: 128.7432293,
      exports: 129.6305695
    },
    {
      date: "2005-01-01",
      imports: 137.1523329,
      exports: 110.8916225
    },
    {
      date: "2005-04-01",
      imports: 140.6426264,
      exports: 127.5614774
    },
    {
      date: "2005-07-01",
      imports: 150.7158783,
      exports: 132.6756484
    },
    {
      date: "2005-10-01",
      imports: 134.0743948,
      exports: 137.6531811
    },
    {
      date: "2006-01-01",
      imports: 121.9711764,
      exports: 136.538409
    },
    {
      date: "2006-04-01",
      imports: 155.0308825,
      exports: 149.0384578
    },
    {
      date: "2006-07-01",
      imports: 129.7741176,
      exports: 156.0897674
    },
    {
      date: "2006-10-01",
      imports: 138.8089705,
      exports: 155.1282252
    },
    {
      date: "2007-01-01",
      imports: 174.7429406,
      exports: 146.1538311
    },
    {
      date: "2007-04-01",
      imports: 142.9157352,
      exports: 147.1153734
    },
    {
      date: "2007-07-01",
      imports: 121.3551469,
      exports: 147.5961445
    },
    {
      date: "2007-10-01",
      imports: 126.0779411,
      exports: 144.0704897
    },
    {
      date: "2008-01-01",
      imports: 160.6020977,
      exports: 171.563648
    },
    {
      date: "2008-04-01",
      imports: 183.026865,
      exports: 182.9428735
    },
    {
      date: "2008-07-01",
      imports: 163.0276308,
      exports: 167.1869327
    },
    {
      date: "2008-10-01",
      imports: 143.633528,
      exports: 155.8077072
    },
    {
      date: "2009-01-01",
      imports: 123.0278369,
      exports: 161.0596875
    },
    {
      date: "2009-04-01",
      imports: 133.3306825,
      exports: 168.0623929
    },
    {
      date: "2009-07-01",
      imports: 159.3900675,
      exports: 169.8129229
    },
    {
      date: "2009-10-01",
      imports: 147.8765173,
      exports: 184.6934035
    },
    {
      date: "2010-01-01",
      imports: 147.2697658,
      exports: 187.3193936
    },
    {
      date: "2010-04-01",
      imports: 147.2697658,
      exports: 185.5688637
    },
    {
      date: "2010-07-01",
      imports: 163.0276308,
      exports: 195.1973641
    },
    {
      date: "2010-10-01",
      imports: 176.9667141,
      exports: 198.6992048
    },
    {
      date: "2011-01-01",
      imports: 232.7230474,
      exports: 228.4589949
    },
    {
      date: "2011-04-01",
      imports: 298.7823736,
      exports: 252.0934917
    },
    {
      date: "2011-07-01",
      imports: 243.0260402,
      exports: 244.2153261
    },
    {
      date: "2011-10-01",
      imports: 287.2673506,
      exports: 249.4680872
    },
    {
      date: "2012-01-01",
      imports: 288.4793808,
      exports: 265.2224664
    },
    {
      date: "2012-04-01",
      imports: 280.6004483,
      exports: 262.5970619
    },
    {
      date: "2012-07-01",
      imports: 283.6312601,
      exports: 224.9591062
    },
    {
      date: "2012-10-01",
      imports: 288.4793808,
      exports: 281.8552338
    },
    {
      date: "2013-01-01",
      imports: 293.9327802,
      exports: 268.7243072
    },
    {
      date: "2013-04-01",
      imports: 323.0244497,
      exports: 293.2332882
    },
    {
      date: "2013-07-01",
      imports: 334.538,
      exports: 298.4860492
    },
    {
      date: "2013-10-01",
      imports: 326.0537888,
      exports: 305.4877787
    },
    {
      date: "2014-01-01",
      imports: 313.9334871,
      exports: 287.1060429
    },
    {
      date: "2014-04-01",
      imports: 323.6297285,
      exports: 294.9842085
    },
    {
      date: "2014-07-01",
      imports: 354.5387069,
      exports: 300.2369696
    },
    {
      date: "2014-10-01",
      imports: 328.0286764,
      exports: 267.849823
    },
    {
      date: "2015-01-01",
      imports: 356.4517412,
      exports: 278.0781648
    },
    {
      date: "2015-04-01",
      imports: 314.7154895,
      exports: 344.933262
    },
    {
      date: "2015-07-01",
      imports: 311.7553673,
      exports: 286.1202962
    },
    {
      date: "2015-10-01",
      imports: 309.5757747,
      exports: 264.7266651
    },
    {
      date: "2016-01-01",
      imports: 314.7154895,
      exports: 289.8876054
    },
    {
      date: "2016-04-01",
      imports: 371.7677968,
      exports: 332.9091044
    },
    {
      date: "2016-07-01",
      imports: 333.7280163,
      exports: 328.5952427
    },
    {
      date: "2016-10-01",
      imports: 320.8566388,
      exports: 332.6163084
    },
    {
      date: "2017-01-01",
      imports: 319.6637537,
      exports: 332.9091044
    },
    {
      date: "2017-04-01",
      imports: 316.4974537,
      exports: 323.1492362
    },
    {
      date: "2017-07-01",
      imports: 313.5226044,
      exports: 324.0081046
    },
    {
      date: "2017-10-01",
      imports: 310.5624821,
      exports: 327.4630979
    },
    {
      date: "2018-01-01",
      imports: 321.6813495,
      exports: 325.159769
    },
    {
      date: "2018-04-01",
      imports: 328.3821238,
      exports: 335.4857096
    },
    {
      date: "2018-07-01",
      imports: 355.1852212,
      exports: 355.8447947
    },
    {
      date: "2018-10-01",
      imports: 374.0799321,
      exports: 369.8990049
    },
    {
      date: "2019-01-01",
      imports: 341.7836725,
      exports: 352.4093211
    },
    {
      date: "2019-04-01",
      imports: 341.9898502,
      exports: 348.0954593
    },
    {
      date: "2019-07-01",
      imports: 306.910192,
      exports: 304.6835656
    },
    {
      date: "2019-10-01",
      imports: 313.4342426,
      exports: 320.7483086
    },
    {
      date: "2020-01-01",
      imports: 320.5620992,
      exports: 298.4567696
    },
    {
      date: "2020-04-01",
      imports: 294.4806237,
      exports: 365.81938
    },
    {
      date: "2020-07-01",
      imports: 311.5050086,
      exports: 334.1583675
    }
  ],
  Ireland: [
    {
      date: "1957-01-01",
      imports: 10.46286289,
      exports: 10.42773937
    },
    {
      date: "1957-04-01",
      imports: 10.34174338,
      exports: 10.6473632
    },
    {
      date: "1957-07-01",
      imports: 10.28584206,
      exports: 10.49801899
    },
    {
      date: "1957-10-01",
      imports: 10.28584206,
      exports: 10.53315881
    },
    {
      date: "1958-01-01",
      imports: 10.08087057,
      exports: 10.5155889
    },
    {
      date: "1958-04-01",
      imports: 9.79204711,
      exports: 10.58586852
    },
    {
      date: "1958-07-01",
      imports: 9.79204711,
      exports: 10.88455693
    },
    {
      date: "1958-10-01",
      imports: 9.80136399,
      exports: 11.02511618
    },
    {
      date: "1959-01-01",
      imports: 9.95043417,
      exports: 11.17446038
    },
    {
      date: "1959-04-01",
      imports: 9.80136399,
      exports: 11.18324534
    },
    {
      date: "1959-07-01",
      imports: 9.86658219,
      exports: 11.27987982
    },
    {
      date: "1959-10-01",
      imports: 9.97838482,
      exports: 11.13053562
    },
    {
      date: "1960-01-01",
      imports: 9.95043417,
      exports: 10.96362151
    },
    {
      date: "1960-04-01",
      imports: 9.94111728,
      exports: 10.85820207
    },
    {
      date: "1960-07-01",
      imports: 9.94111728,
      exports: 11.00754627
    },
    {
      date: "1960-10-01",
      imports: 10.11813811,
      exports: 10.81427731
    },
    {
      date: "1961-01-01",
      imports: 9.91316662,
      exports: 10.88455693
    },
    {
      date: "1961-04-01",
      imports: 9.9318004,
      exports: 10.93726665
    },
    {
      date: "1961-07-01",
      imports: 10.09950434,
      exports: 10.70007292
    },
    {
      date: "1961-10-01",
      imports: 10.11813811,
      exports: 10.71764282
    },
    {
      date: "1962-01-01",
      imports: 9.9318004,
      exports: 10.78792245
    },
    {
      date: "1962-04-01",
      imports: 10.04360303,
      exports: 10.90212684
    },
    {
      date: "1962-07-01",
      imports: 9.95975105,
      exports: 10.91969674
    },
    {
      date: "1962-10-01",
      imports: 9.97838482,
      exports: 10.86698702
    },
    {
      date: "1963-01-01",
      imports: 10.10882123,
      exports: 10.98997637
    },
    {
      date: "1963-04-01",
      imports: 10.11813811,
      exports: 11.0778259
    },
    {
      date: "1963-07-01",
      imports: 10.20199009,
      exports: 11.12175067
    },
    {
      date: "1963-10-01",
      imports: 10.23925763,
      exports: 11.18324534
    },
    {
      date: "1964-01-01",
      imports: 10.30447583,
      exports: 11.47314879
    },
    {
      date: "1964-04-01",
      imports: 10.34174338,
      exports: 11.82454692
    },
    {
      date: "1964-07-01",
      imports: 10.37901092,
      exports: 11.84211682
    },
    {
      date: "1964-10-01",
      imports: 10.40696158,
      exports: 11.69277262
    },
    {
      date: "1965-01-01",
      imports: 10.43491223,
      exports: 11.79819206
    },
    {
      date: "1965-04-01",
      imports: 10.54671487,
      exports: 11.89482654
    },
    {
      date: "1965-07-01",
      imports: 10.52808109,
      exports: 11.91239645
    },
    {
      date: "1965-10-01",
      imports: 10.52808109,
      exports: 11.74548234
    },
    {
      date: "1966-01-01",
      imports: 10.54671487,
      exports: 11.87725663
    },
    {
      date: "1966-04-01",
      imports: 10.63988373,
      exports: 12.2022999
    },
    {
      date: "1966-07-01",
      imports: 10.50013044,
      exports: 12.09688046
    },
    {
      date: "1966-10-01",
      imports: 10.56534864,
      exports: 11.78062215
    },
    {
      date: "1967-01-01",
      imports: 10.48149666,
      exports: 12.14959018
    },
    {
      date: "1967-04-01",
      imports: 10.47217978,
      exports: 12.14080523
    },
    {
      date: "1967-07-01",
      imports: 10.40696158,
      exports: 11.96510617
    },
    {
      date: "1967-10-01",
      imports: 10.44422912,
      exports: 12.16716009
    },
    {
      date: "1968-01-01",
      imports: 11.13367868,
      exports: 12.86995634
    },
    {
      date: "1968-04-01",
      imports: 11.3200164,
      exports: 13.03687045
    },
    {
      date: "1968-07-01",
      imports: 11.55293855,
      exports: 13.0280855
    },
    {
      date: "1968-10-01",
      imports: 11.3852346,
      exports: 13.10715007
    },
    {
      date: "1969-01-01",
      imports: 11.75791004,
      exports: 13.24770932
    },
    {
      date: "1969-04-01",
      imports: 11.77654381,
      exports: 13.57275259
    },
    {
      date: "1969-07-01",
      imports: 12.03741661,
      exports: 13.89779586
    },
    {
      date: "1969-10-01",
      imports: 12.13990236,
      exports: 13.95929053
    },
    {
      date: "1970-01-01",
      imports: 12.46599337,
      exports: 14.38096828
    },
    {
      date: "1970-04-01",
      imports: 12.66164797,
      exports: 14.7323664
    },
    {
      date: "1970-07-01",
      imports: 12.71754929,
      exports: 14.76750622
    },
    {
      date: "1970-10-01",
      imports: 12.85730258,
      exports: 14.70601154
    },
    {
      date: "1971-01-01",
      imports: 13.27656244,
      exports: 15.08376453
    },
    {
      date: "1971-04-01",
      imports: 13.50948459,
      exports: 15.64600153
    },
    {
      date: "1971-07-01",
      imports: 13.56538591,
      exports: 15.94468994
    },
    {
      date: "1971-10-01",
      imports: 13.57470279,
      exports: 16.23459339
    },
    {
      date: "1972-01-01",
      imports: 13.52811836,
      exports: 16.94617459
    },
    {
      date: "1972-04-01",
      imports: 13.57470279,
      exports: 17.64018589
    },
    {
      date: "1972-07-01",
      imports: 14.1616666,
      exports: 18.24634766
    },
    {
      date: "1972-10-01",
      imports: 14.39458875,
      exports: 19.01942353
    },
    {
      date: "1973-01-01",
      imports: 15.38217866,
      exports: 21.42650069
    },
    {
      date: "1973-04-01",
      imports: 16.0157269,
      exports: 22.46312516
    },
    {
      date: "1973-07-01",
      imports: 16.89151418,
      exports: 23.73694336
    },
    {
      date: "1973-10-01",
      imports: 17.9350054,
      exports: 23.94778224
    },
    {
      date: "1974-01-01",
      imports: 20.88845824,
      exports: 24.79992269
    },
    {
      date: "1974-04-01",
      imports: 22.75183543,
      exports: 26.58326818
    },
    {
      date: "1974-07-01",
      imports: 24.2891216,
      exports: 27.43540863
    },
    {
      date: "1974-10-01",
      imports: 25.66802072,
      exports: 28.1909146
    },
    {
      date: "1975-01-01",
      imports: 26.22703388,
      exports: 29.73706635
    },
    {
      date: "1975-04-01",
      imports: 26.89784966,
      exports: 32.06507893
    },
    {
      date: "1975-07-01",
      imports: 27.39164462,
      exports: 31.90694978
    },
    {
      date: "1975-10-01",
      imports: 28.26743189,
      exports: 33.41796172
    },
    {
      date: "1976-01-01",
      imports: 28.93824768,
      exports: 35.16616739
    },
    {
      date: "1976-04-01",
      imports: 30.382365,
      exports: 38.425385
    },
    {
      date: "1976-07-01",
      imports: 32.46003056,
      exports: 40.16480572
    },
    {
      date: "1976-10-01",
      imports: 34.37930906,
      exports: 42.361044
    },
    {
      date: "1977-01-01",
      imports: 36.19610181,
      exports: 43.35374371
    },
    {
      date: "1977-04-01",
      imports: 37.3327619,
      exports: 45.4357776
    },
    {
      date: "1977-07-01",
      imports: 37.80792308,
      exports: 45.83110049
    },
    {
      date: "1977-10-01",
      imports: 38.1246972,
      exports: 45.55876694
    },
    {
      date: "1978-01-01",
      imports: 38.29240115,
      exports: 45.37428293
    },
    {
      date: "1978-04-01",
      imports: 39.28930794,
      exports: 47.3860372
    },
    {
      date: "1978-07-01",
      imports: 39.88558864,
      exports: 48.10640335
    },
    {
      date: "1978-10-01",
      imports: 40.50050311,
      exports: 48.73013502
    },
    {
      date: "1979-01-01",
      imports: 41.85145157,
      exports: 50.20600715
    },
    {
      date: "1979-04-01",
      imports: 43.90116647,
      exports: 51.6028147
    },
    {
      date: "1979-07-01",
      imports: 47.124809,
      exports: 52.53401973
    },
    {
      date: "1979-10-01",
      imports: 47.62792084,
      exports: 53.03476206
    },
    {
      date: "1980-01-01",
      imports: 50.62795811,
      exports: 55.59996837
    },
    {
      date: "1980-04-01",
      imports: 53.10624977,
      exports: 57.51508816
    },
    {
      date: "1980-07-01",
      imports: 53.70253047,
      exports: 58.27937908
    },
    {
      date: "1980-10-01",
      imports: 56.60008199,
      exports: 59.09637972
    },
    {
      date: "1981-01-01",
      imports: 61.03491969,
      exports: 61.67915594
    },
    {
      date: "1981-04-01",
      imports: 63.77408415,
      exports: 65.52696541
    },
    {
      date: "1981-07-01",
      imports: 65.28341967,
      exports: 67.93404257
    },
    {
      date: "1981-10-01",
      imports: 65.23683524,
      exports: 69.33963507
    },
    {
      date: "1982-01-01",
      imports: 67.12816308,
      exports: 70.62223823
    },
    {
      date: "1982-04-01",
      imports: 68.48842843,
      exports: 73.45977809
    },
    {
      date: "1982-07-01",
      imports: 70.04434838,
      exports: 74.68088658
    },
    {
      date: "1982-10-01",
      imports: 70.4915589,
      exports: 75.726296
    },
    {
      date: "1983-01-01",
      imports: 68.09711922,
      exports: 75.43639255
    },
    {
      date: "1983-04-01",
      imports: 70.18410167,
      exports: 78.73074997
    },
    {
      date: "1983-07-01",
      imports: 74.10651064,
      exports: 81.67370927
    },
    {
      date: "1983-10-01",
      imports: 75.90466962,
      exports: 83.68546354
    },
    {
      date: "1984-01-01",
      imports: 77.60965975,
      exports: 84.53760399
    },
    {
      date: "1984-04-01",
      imports: 78.21525733,
      exports: 85.74992752
    },
    {
      date: "1984-07-01",
      imports: 81.1500764,
      exports: 87.91981095
    },
    {
      date: "1984-10-01",
      imports: 82.13766631,
      exports: 90.05455456
    },
    {
      date: "1985-01-01",
      imports: 81.97927925,
      exports: 89.08820971
    },
    {
      date: "1985-04-01",
      imports: 82.87370029,
      exports: 91.53921164
    },
    {
      date: "1985-07-01",
      imports: 82.15630008,
      exports: 92.1453734
    },
    {
      date: "1985-10-01",
      imports: 79.88297991,
      exports: 89.85250064
    },
    {
      date: "1986-01-01",
      imports: 76.92021019,
      exports: 85.80263724
    },
    {
      date: "1986-04-01",
      imports: 73.35184288,
      exports: 85.30189491
    },
    {
      date: "1986-07-01",
      imports: 73.52886371,
      exports: 85.01199146
    },
    {
      date: "1986-10-01",
      imports: 73.75246897,
      exports: 84.23013063
    },
    {
      date: "1987-01-01",
      imports: 70.88286811,
      exports: 81.36623591
    },
    {
      date: "1987-04-01",
      imports: 71.47914881,
      exports: 82.0251074
    },
    {
      date: "1987-07-01",
      imports: 72.04747885,
      exports: 82.79818327
    },
    {
      date: "1987-10-01",
      imports: 72.2151828,
      exports: 82.4555701
    },
    {
      date: "1988-01-01",
      imports: 72.64375955,
      exports: 85.44245416
    },
    {
      date: "1988-04-01",
      imports: 73.63134946,
      exports: 85.46880902
    },
    {
      date: "1988-07-01",
      imports: 76.28666195,
      exports: 87.41906862
    },
    {
      date: "1988-10-01",
      imports: 79.67800842,
      exports: 91.83790004
    },
    {
      date: "1989-01-01",
      imports: 82.46375731,
      exports: 94.55245056
    },
    {
      date: "1989-04-01",
      imports: 82.86438341,
      exports: 96.45878539
    },
    {
      date: "1989-07-01",
      imports: 83.14388999,
      exports: 97.96979733
    },
    {
      date: "1989-10-01",
      imports: 80.66559833,
      exports: 94.5260957
    },
    {
      date: "1990-01-01",
      imports: 78.06618716,
      exports: 90.67828623
    },
    {
      date: "1990-04-01",
      imports: 75.53199419,
      exports: 88.76316645
    },
    {
      date: "1990-07-01",
      imports: 78.95129132,
      exports: 86.88318648
    },
    {
      date: "1990-10-01",
      imports: 79.99478254,
      exports: 83.89630241
    },
    {
      date: "1991-01-01",
      imports: 79.12831215,
      exports: 84.2740554
    },
    {
      date: "1991-04-01",
      imports: 79.4916707,
      exports: 85.05591623
    },
    {
      date: "1991-07-01",
      imports: 80.53516193,
      exports: 86.64599274
    },
    {
      date: "1991-10-01",
      imports: 80.6190139,
      exports: 87.17308993
    },
    {
      date: "1992-01-01",
      imports: 80.11590206,
      exports: 86.32973443
    },
    {
      date: "1992-04-01",
      imports: 79.51962136,
      exports: 88.82466112
    },
    {
      date: "1992-07-01",
      imports: 77.72146238,
      exports: 84.79236763
    },
    {
      date: "1992-10-01",
      imports: 75.79286699,
      exports: 81.52436507
    },
    {
      date: "1993-01-01",
      imports: 80.76808408,
      exports: 85.1174109
    },
    {
      date: "1993-04-01",
      imports: 81.78362464,
      exports: 87.5157031
    },
    {
      date: "1993-07-01",
      imports: 83.24637573,
      exports: 88.30634889
    },
    {
      date: "1993-10-01",
      imports: 83.5351992,
      exports: 88.71045673
    },
    {
      date: "1994-01-01",
      imports: 83.84265643,
      exports: 89.8964254
    },
    {
      date: "1994-04-01",
      imports: 84.91409831,
      exports: 91.72369565
    },
    {
      date: "1994-07-01",
      imports: 84.44825402,
      exports: 92.68125555
    },
    {
      date: "1994-10-01",
      imports: 84.62527485,
      exports: 89.29026364
    },
    {
      date: "1995-01-01",
      imports: 87.28058734,
      exports: 90.41473764
    },
    {
      date: "1995-04-01",
      imports: 88.84582417,
      exports: 93.37526684
    },
    {
      date: "1995-07-01",
      imports: 87.64394589,
      exports: 91.81154519
    },
    {
      date: "1995-10-01",
      imports: 88.45451496,
      exports: 91.72369565
    },
    {
      date: "1996-01-01",
      imports: 88.61290202,
      exports: 93.98142861
    },
    {
      date: "1996-04-01",
      imports: 87.62531212,
      exports: 92.68125555
    },
    {
      date: "1996-07-01",
      imports: 86.81474304,
      exports: 90.24782353
    },
    {
      date: "1996-10-01",
      imports: 85.27745686,
      exports: 88.58746739
    },
    {
      date: "1997-01-01",
      imports: 86.58182089,
      exports: 90.94183483
    },
    {
      date: "1997-04-01",
      imports: 87.39238997,
      exports: 92.50555648
    },
    {
      date: "1997-07-01",
      imports: 88.40793053,
      exports: 92.84816966
    },
    {
      date: "1997-10-01",
      imports: 87.67189655,
      exports: 93.02386872
    },
    {
      date: "1998-01-01",
      imports: 89.57254127,
      exports: 95.54515027
    },
    {
      date: "1998-04-01",
      imports: 90.30857526,
      exports: 95.45730074
    },
    {
      date: "1998-07-01",
      imports: 90.80237022,
      exports: 96.3270111
    },
    {
      date: "1998-10-01",
      imports: 87.4389744,
      exports: 92.06630883
    },
    {
      date: "1999-01-01",
      imports: 91.00734171,
      exports: 94.9389885
    },
    {
      date: "1999-04-01",
      imports: 92.36760705,
      exports: 94.7896443
    },
    {
      date: "1999-07-01",
      imports: 92.61916297,
      exports: 95.98439792
    },
    {
      date: "1999-10-01",
      imports: 92.93593709,
      exports: 95.11468756
    },
    {
      date: "2000-01-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-04-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-07-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-10-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2001-01-01",
      imports: 102.0571684,
      exports: 102.6433924
    },
    {
      date: "2001-04-01",
      imports: 103.2217792,
      exports: 104.9977598
    },
    {
      date: "2001-07-01",
      imports: 104.0882495,
      exports: 106.0695241
    },
    {
      date: "2001-10-01",
      imports: 102.5509634,
      exports: 106.649331
    },
    {
      date: "2002-01-01",
      imports: 100.7528044,
      exports: 103.460393
    },
    {
      date: "2002-04-01",
      imports: 99.01054671,
      exports: 102.5906827
    },
    {
      date: "2002-07-01",
      imports: 97.83661909,
      exports: 102.4149836
    },
    {
      date: "2002-10-01",
      imports: 98.3583647,
      exports: 103.5482426
    },
    {
      date: "2003-01-01",
      imports: 92.88003578,
      exports: 96.59055969
    },
    {
      date: "2003-04-01",
      imports: 90.97939105,
      exports: 93.63881544
    },
    {
      date: "2003-07-01",
      imports: 89.60049193,
      exports: 93.55096591
    },
    {
      date: "2003-10-01",
      imports: 89.33961913,
      exports: 91.66220098
    },
    {
      date: "2004-01-01",
      imports: 88.64085268,
      exports: 90.67828623
    },
    {
      date: "2004-04-01",
      imports: 88.40793053,
      exports: 91.54799659
    },
    {
      date: "2004-07-01",
      imports: 89.75887899,
      exports: 90.94183483
    },
    {
      date: "2004-10-01",
      imports: 87.96072001,
      exports: 88.6226072
    },
    {
      date: "2005-01-01",
      imports: 89.13464764,
      exports: 88.09551001
    },
    {
      date: "2005-04-01",
      imports: 89.26508404,
      exports: 90.03698465
    },
    {
      date: "2005-07-01",
      imports: 88.94830992,
      exports: 92.18929817
    },
    {
      date: "2005-10-01",
      imports: 90.2806246,
      exports: 93.08536339
    },
    {
      date: "2006-01-01",
      imports: 92.2636306,
      exports: 92.42122093
    },
    {
      date: "2006-04-01",
      imports: 92.44605523,
      exports: 90.1028718
    },
    {
      date: "2006-07-01",
      imports: 91.82089218,
      exports: 90.13186215
    },
    {
      date: "2006-10-01",
      imports: 91.32588604,
      exports: 90.33479456
    },
    {
      date: "2007-01-01",
      imports: 91.11756047,
      exports: 89.4650842
    },
    {
      date: "2007-04-01",
      imports: 91.58638617,
      exports: 89.40710351
    },
    {
      date: "2007-07-01",
      imports: 91.87297358,
      exports: 88.59537384
    },
    {
      date: "2007-10-01",
      imports: 92.02921775,
      exports: 87.0018712
    },
    {
      date: "2008-01-01",
      imports: 93.35799202,
      exports: 84.91518128
    },
    {
      date: "2008-04-01",
      imports: 92.2636306,
      exports: 82.04601558
    },
    {
      date: "2008-07-01",
      imports: 93.20146834,
      exports: 83.95876343
    },
    {
      date: "2008-10-01",
      imports: 95.28565572,
      exports: 89.95792007
    },
    {
      date: "2009-01-01",
      imports: 92.70646219,
      exports: 88.62436419
    },
    {
      date: "2009-04-01",
      imports: 89.21598405,
      exports: 87.46554102
    },
    {
      date: "2009-07-01",
      imports: 87.54891365,
      exports: 84.68334636
    },
    {
      date: "2009-10-01",
      imports: 86.48091902,
      exports: 83.08931662
    },
    {
      date: "2010-01-01",
      imports: 90.85706034,
      exports: 87.23370611
    },
    {
      date: "2010-04-01",
      imports: 95.94715462,
      exports: 89.18133022
    },
    {
      date: "2010-07-01",
      imports: 85.6414676,
      exports: 89.26917975
    },
    {
      date: "2010-10-01",
      imports: 98.80278016,
      exports: 90.26539343
    },
    {
      date: "2011-01-01",
      imports: 93.30861253,
      exports: 82.92117262
    },
    {
      date: "2011-04-01",
      imports: 91.5384042,
      exports: 81.66492432
    },
    {
      date: "2011-07-01",
      imports: 90.60671561,
      exports: 87.46299338
    },
    {
      date: "2011-10-01",
      imports: 92.0042485,
      exports: 87.26093946
    },
    {
      date: "2012-01-01",
      imports: 87.81164983,
      exports: 89.7470812
    },
    {
      date: "2012-04-01",
      imports: 91.04460925,
      exports: 88.45569309
    },
    {
      date: "2012-07-01",
      imports: 88.58495137,
      exports: 93.75301983
    },
    {
      date: "2012-10-01",
      imports: 90.26199083,
      exports: 87.40149871
    },
    {
      date: "2013-01-01",
      imports: 86.19982857,
      exports: 88.98279028
    },
    {
      date: "2013-04-01",
      imports: 86.85201058,
      exports: 84.0105068
    },
    {
      date: "2013-07-01",
      imports: 86.41411695,
      exports: 84.23891559
    },
    {
      date: "2013-10-01",
      imports: 85.60354787,
      exports: 83.24621588
    },
    {
      date: "2014-01-01",
      imports: 89.86136474,
      exports: 82.34136571
    },
    {
      date: "2014-04-01",
      imports: 88.43588119,
      exports: 85.94319649
    },
    {
      date: "2014-07-01",
      imports: 92.12536802,
      exports: 86.84804667
    },
    {
      date: "2014-10-01",
      imports: 92.62847986,
      exports: 89.88764045
    },
    {
      date: "2015-01-01",
      imports: 91.9390303,
      exports: 90.7397809
    },
    {
      date: "2015-04-01",
      imports: 95.38627809,
      exports: 96.01075278
    },
    {
      date: "2015-07-01",
      imports: 93.9887452,
      exports: 91.9960292
    },
    {
      date: "2015-10-01",
      imports: 87.87686804,
      exports: 93.6651703
    },
    {
      date: "2016-01-01",
      imports: 83.32091082,
      exports: 88.4908329
    },
    {
      date: "2016-04-01",
      imports: 88.2961279,
      exports: 89.58016709
    },
    {
      date: "2016-07-01",
      imports: 87.79301606,
      exports: 91.03846931
    },
    {
      date: "2016-10-01",
      imports: 88.20295904,
      exports: 91.89060976
    },
    {
      date: "2017-01-01",
      imports: 91.70610815,
      exports: 90.57286679
    },
    {
      date: "2017-04-01",
      imports: 89.04147878,
      exports: 89.54502728
    },
    {
      date: "2017-07-01",
      imports: 88.44519808,
      exports: 86.20674509
    },
    {
      date: "2017-10-01",
      imports: 88.88309172,
      exports: 82.37650552
    },
    {
      date: "2018-01-01",
      imports: 89.32098535,
      exports: 85.97833631
    },
    {
      date: "2018-04-01",
      imports: 90.96075728,
      exports: 85.06470118
    },
    {
      date: "2018-07-01",
      imports: 96.89561361,
      exports: 89.10577962
    },
    {
      date: "2018-10-01",
      imports: 93.16885924,
      exports: 88.05158524
    },
    {
      date: "2019-01-01",
      imports: 89.53527373,
      exports: 87.20530143
    },
    {
      date: "2019-04-01",
      imports: 88.94520429,
      exports: 87.26386778
    },
    {
      date: "2019-07-01",
      imports: 89.69055516,
      exports: 87.35171731
    },
    {
      date: "2019-10-01",
      imports: 90.49801861,
      exports: 87.73239861
    },
    {
      date: "2020-01-01",
      imports: 89.28682344,
      exports: 84.59909866
    },
    {
      date: "2020-04-01",
      imports: 89.84583659,
      exports: 84.33555007
    },
    {
      date: "2020-07-01",
      imports: 88.72781028,
      exports: 82.90067439
    },
    {
      date: "2020-10-01",
      imports: 84.53521162,
      exports: 83.0178071
    }
  ],
  Italy: [
    {
      date: "1957-01-01",
      imports: 7.78885586,
      exports: 7.62438788
    },
    {
      date: "1957-04-01",
      imports: 7.77535698,
      exports: 7.59763564
    },
    {
      date: "1957-07-01",
      imports: 7.57287372,
      exports: 7.58425952
    },
    {
      date: "1957-10-01",
      imports: 7.46488265,
      exports: 7.46387445
    },
    {
      date: "1958-01-01",
      imports: 6.96542396,
      exports: 7.43712221
    },
    {
      date: "1958-04-01",
      imports: 6.74944182,
      exports: 7.41036997
    },
    {
      date: "1958-07-01",
      imports: 6.50646192,
      exports: 7.14284759
    },
    {
      date: "1958-10-01",
      imports: 6.50646192,
      exports: 6.9422058
    },
    {
      date: "1959-01-01",
      imports: 6.41196973,
      exports: 6.76831625
    },
    {
      date: "1959-04-01",
      imports: 6.22298536,
      exports: 6.71481178
    },
    {
      date: "1959-07-01",
      imports: 6.33097643,
      exports: 6.64793118
    },
    {
      date: "1959-10-01",
      imports: 6.27698089,
      exports: 6.50079387
    },
    {
      date: "1960-01-01",
      imports: 6.0205021,
      exports: 6.86194909
    },
    {
      date: "1960-04-01",
      imports: 6.04749987,
      exports: 6.83519685
    },
    {
      date: "1960-07-01",
      imports: 6.20948648,
      exports: 6.55429835
    },
    {
      date: "1960-10-01",
      imports: 6.03400099,
      exports: 6.50079387
    },
    {
      date: "1961-01-01",
      imports: 6.0205021,
      exports: 6.51416999
    },
    {
      date: "1961-04-01",
      imports: 5.89901215,
      exports: 6.59442671
    },
    {
      date: "1961-07-01",
      imports: 5.95300769,
      exports: 6.54092223
    },
    {
      date: "1961-10-01",
      imports: 5.95300769,
      exports: 6.42053716
    },
    {
      date: "1962-01-01",
      imports: 5.96650657,
      exports: 6.43391328
    },
    {
      date: "1962-04-01",
      imports: 5.9395088,
      exports: 6.35365656
    },
    {
      date: "1962-07-01",
      imports: 5.87201438,
      exports: 6.42053716
    },
    {
      date: "1962-10-01",
      imports: 5.87201438,
      exports: 6.46066552
    },
    {
      date: "1963-01-01",
      imports: 5.98000545,
      exports: 6.74156402
    },
    {
      date: "1963-04-01",
      imports: 6.00700322,
      exports: 6.68805954
    },
    {
      date: "1963-07-01",
      imports: 6.10149541,
      exports: 6.62117894
    },
    {
      date: "1963-10-01",
      imports: 6.10149541,
      exports: 6.75494014
    },
    {
      date: "1964-01-01",
      imports: 6.23648424,
      exports: 6.7281879
    },
    {
      date: "1964-04-01",
      imports: 6.22298536,
      exports: 6.74156402
    },
    {
      date: "1964-07-01",
      imports: 6.23648424,
      exports: 6.80844461
    },
    {
      date: "1964-10-01",
      imports: 6.24998313,
      exports: 6.84857297
    },
    {
      date: "1965-01-01",
      imports: 6.27698089,
      exports: 6.7281879
    },
    {
      date: "1965-04-01",
      imports: 6.27698089,
      exports: 6.64793118
    },
    {
      date: "1965-07-01",
      imports: 6.29047978,
      exports: 6.70143566
    },
    {
      date: "1965-10-01",
      imports: 6.27698089,
      exports: 6.58105059
    },
    {
      date: "1966-01-01",
      imports: 6.31747754,
      exports: 6.68805954
    },
    {
      date: "1966-04-01",
      imports: 6.3579742,
      exports: 6.60780283
    },
    {
      date: "1966-07-01",
      imports: 6.4389675,
      exports: 6.62117894
    },
    {
      date: "1966-10-01",
      imports: 6.41196973,
      exports: 6.54092223
    },
    {
      date: "1967-01-01",
      imports: 6.42546861,
      exports: 6.70143566
    },
    {
      date: "1967-04-01",
      imports: 6.33097643,
      exports: 6.58105059
    },
    {
      date: "1967-07-01",
      imports: 6.45246638,
      exports: 6.70143566
    },
    {
      date: "1967-10-01",
      imports: 6.6009541,
      exports: 6.6613073
    },
    {
      date: "1968-01-01",
      imports: 6.54695857,
      exports: 6.68805954
    },
    {
      date: "1968-04-01",
      imports: 6.4389675,
      exports: 6.63455506
    },
    {
      date: "1968-07-01",
      imports: 6.41196973,
      exports: 6.52754611
    },
    {
      date: "1968-10-01",
      imports: 6.33097643,
      exports: 6.56767447
    },
    {
      date: "1969-01-01",
      imports: 6.42546861,
      exports: 6.63455506
    },
    {
      date: "1969-04-01",
      imports: 6.46596526,
      exports: 6.71481178
    },
    {
      date: "1969-07-01",
      imports: 6.53345968,
      exports: 6.9422058
    },
    {
      date: "1969-10-01",
      imports: 6.53345968,
      exports: 6.95558192
    },
    {
      date: "1970-01-01",
      imports: 6.54695857,
      exports: 7.03583864
    },
    {
      date: "1970-04-01",
      imports: 6.61445298,
      exports: 7.14284759
    },
    {
      date: "1970-07-01",
      imports: 6.72244405,
      exports: 7.11609535
    },
    {
      date: "1970-10-01",
      imports: 6.93842619,
      exports: 7.18297595
    },
    {
      date: "1971-01-01",
      imports: 6.85743289,
      exports: 7.46387445
    },
    {
      date: "1971-04-01",
      imports: 7.00592061,
      exports: 7.47725057
    },
    {
      date: "1971-07-01",
      imports: 7.16790721,
      exports: 7.51737892
    },
    {
      date: "1971-10-01",
      imports: 7.23540163,
      exports: 7.54413116
    },
    {
      date: "1972-01-01",
      imports: 7.07341503,
      exports: 7.61101176
    },
    {
      date: "1972-04-01",
      imports: 7.1814061,
      exports: 7.65114011
    },
    {
      date: "1972-07-01",
      imports: 7.32989382,
      exports: 7.77152519
    },
    {
      date: "1972-10-01",
      imports: 7.51887819,
      exports: 7.86515802
    },
    {
      date: "1973-01-01",
      imports: 8.03183577,
      exports: 8.18618488
    },
    {
      date: "1973-04-01",
      imports: 8.9092632,
      exports: 8.6944774
    },
    {
      date: "1973-07-01",
      imports: 9.77319176,
      exports: 9.41678783
    },
    {
      date: "1973-10-01",
      imports: 10.58312478,
      exports: 9.8180714
    },
    {
      date: "1974-01-01",
      imports: 13.99834234,
      exports: 11.15568331
    },
    {
      date: "1974-04-01",
      imports: 16.10416819,
      exports: 12.45316686
    },
    {
      date: "1974-07-01",
      imports: 17.17057999,
      exports: 13.45637579
    },
    {
      date: "1974-10-01",
      imports: 17.44055767,
      exports: 14.21881458
    },
    {
      date: "1975-01-01",
      imports: 17.30556883,
      exports: 14.40608025
    },
    {
      date: "1975-04-01",
      imports: 16.95459785,
      exports: 14.15193399
    },
    {
      date: "1975-07-01",
      imports: 17.06258892,
      exports: 14.72710711
    },
    {
      date: "1975-10-01",
      imports: 17.38656213,
      exports: 14.83411606
    },
    {
      date: "1976-01-01",
      imports: 18.30448622,
      exports: 15.4226653
    },
    {
      date: "1976-04-01",
      imports: 22.13816917,
      exports: 17.54946823
    },
    {
      date: "1976-07-01",
      imports: 22.57013345,
      exports: 18.09788911
    },
    {
      date: "1976-10-01",
      imports: 22.96160108,
      exports: 18.90045626
    },
    {
      date: "1977-01-01",
      imports: 24.39248274,
      exports: 20.17118757
    },
    {
      date: "1977-04-01",
      imports: 25.08092581,
      exports: 20.82661741
    },
    {
      date: "1977-07-01",
      imports: 25.82336441,
      exports: 21.56230396
    },
    {
      date: "1977-10-01",
      imports: 25.29690795,
      exports: 21.28140546
    },
    {
      date: "1978-01-01",
      imports: 26.09334208,
      exports: 21.95021141
    },
    {
      date: "1978-04-01",
      imports: 26.12033985,
      exports: 22.0839726
    },
    {
      date: "1978-07-01",
      imports: 26.37681864,
      exports: 22.67252184
    },
    {
      date: "1978-10-01",
      imports: 26.53880524,
      exports: 23.02030094
    },
    {
      date: "1979-01-01",
      imports: 28.21266681,
      exports: 24.55855463
    },
    {
      date: "1979-04-01",
      imports: 29.88652838,
      exports: 25.85603818
    },
    {
      date: "1979-07-01",
      imports: 32.26233191,
      exports: 26.96625606
    },
    {
      date: "1979-10-01",
      imports: 34.20617115,
      exports: 28.21023514
    },
    {
      date: "1980-01-01",
      imports: 37.16242667,
      exports: 30.02938733
    },
    {
      date: "1980-04-01",
      imports: 40.57764423,
      exports: 31.80841117
    },
    {
      date: "1980-07-01",
      imports: 41.02310739,
      exports: 32.47721713
    },
    {
      date: "1980-10-01",
      imports: 43.53389975,
      exports: 33.61418725
    },
    {
      date: "1981-01-01",
      imports: 47.67805702,
      exports: 36.74419911
    },
    {
      date: "1981-04-01",
      imports: 51.60623216,
      exports: 38.88437816
    },
    {
      date: "1981-07-01",
      imports: 55.25093075,
      exports: 40.63664976
    },
    {
      date: "1981-10-01",
      imports: 55.46691289,
      exports: 41.225199
    },
    {
      date: "1982-01-01",
      imports: 57.30276106,
      exports: 44.20807356
    },
    {
      date: "1982-04-01",
      imports: 57.62673427,
      exports: 44.68961384
    },
    {
      date: "1982-07-01",
      imports: 59.92154449,
      exports: 46.17436306
    },
    {
      date: "1982-10-01",
      imports: 61.44691834,
      exports: 46.62915111
    },
    {
      date: "1983-01-01",
      imports: 60.2455177,
      exports: 46.8297929
    },
    {
      date: "1983-04-01",
      imports: 60.00253779,
      exports: 47.53872721
    },
    {
      date: "1983-07-01",
      imports: 62.56732568,
      exports: 49.66553014
    },
    {
      date: "1983-10-01",
      imports: 64.79464148,
      exports: 51.110151
    },
    {
      date: "1984-01-01",
      imports: 66.80597515,
      exports: 52.98280767
    },
    {
      date: "1984-04-01",
      imports: 67.65640482,
      exports: 52.16686441
    },
    {
      date: "1984-07-01",
      imports: 69.72173401,
      exports: 54.0528972
    },
    {
      date: "1984-10-01",
      imports: 71.44959112,
      exports: 54.60131808
    },
    {
      date: "1985-01-01",
      imports: 74.14936785,
      exports: 57.2096613
    },
    {
      date: "1985-04-01",
      imports: 75.22927854,
      exports: 57.58419264
    },
    {
      date: "1985-07-01",
      imports: 74.17636561,
      exports: 58.64090604
    },
    {
      date: "1985-10-01",
      imports: 72.61049511,
      exports: 57.71795383
    },
    {
      date: "1986-01-01",
      imports: 67.72389923,
      exports: 56.7147449
    },
    {
      date: "1986-04-01",
      imports: 60.89346411,
      exports: 54.49430913
    },
    {
      date: "1986-07-01",
      imports: 57.22176776,
      exports: 54.03952108
    },
    {
      date: "1986-10-01",
      imports: 57.89671194,
      exports: 55.13636285
    },
    {
      date: "1987-01-01",
      imports: 58.57165612,
      exports: 55.06948225
    },
    {
      date: "1987-04-01",
      imports: 59.65156682,
      exports: 55.41726135
    },
    {
      date: "1987-07-01",
      imports: 61.04195183,
      exports: 55.32362851
    },
    {
      date: "1987-10-01",
      imports: 60.77197416,
      exports: 56.72812102
    },
    {
      date: "1988-01-01",
      imports: 60.6504842,
      exports: 57.12940459
    },
    {
      date: "1988-04-01",
      imports: 62.09486475,
      exports: 57.41030309
    },
    {
      date: "1988-07-01",
      imports: 63.57974196,
      exports: 59.60398662
    },
    {
      date: "1988-10-01",
      imports: 63.71473079,
      exports: 59.871509
    },
    {
      date: "1989-01-01",
      imports: 65.73956334,
      exports: 61.30275374
    },
    {
      date: "1989-04-01",
      imports: 68.39884342,
      exports: 62.13207312
    },
    {
      date: "1989-07-01",
      imports: 67.41342491,
      exports: 62.62698953
    },
    {
      date: "1989-10-01",
      imports: 67.57541151,
      exports: 62.70724624
    },
    {
      date: "1990-01-01",
      imports: 66.87346956,
      exports: 63.44293279
    },
    {
      date: "1990-04-01",
      imports: 64.59215823,
      exports: 62.38621939
    },
    {
      date: "1990-07-01",
      imports: 65.33459683,
      exports: 63.5900701
    },
    {
      date: "1990-10-01",
      imports: 70.35618154,
      exports: 64.66015963
    },
    {
      date: "1991-01-01",
      imports: 66.64398854,
      exports: 65.63661632
    },
    {
      date: "1991-04-01",
      imports: 66.06353655,
      exports: 64.86080142
    },
    {
      date: "1991-07-01",
      imports: 66.14452985,
      exports: 65.74362528
    },
    {
      date: "1991-10-01",
      imports: 66.29301757,
      exports: 65.28883723
    },
    {
      date: "1992-01-01",
      imports: 64.99712474,
      exports: 65.73024916
    },
    {
      date: "1992-04-01",
      imports: 65.79355887,
      exports: 65.18182827
    },
    {
      date: "1992-07-01",
      imports: 64.33567944,
      exports: 64.82067306
    },
    {
      date: "1992-10-01",
      imports: 68.46633783,
      exports: 67.69653866
    },
    {
      date: "1993-01-01",
      imports: 72.34051744,
      exports: 72.12403408
    },
    {
      date: "1993-04-01",
      imports: 74.41934552,
      exports: 73.42151763
    },
    {
      date: "1993-07-01",
      imports: 73.00196274,
      exports: 73.79604896
    },
    {
      date: "1993-10-01",
      imports: 74.64882654,
      exports: 73.99669075
    },
    {
      date: "1994-01-01",
      imports: 75.25627631,
      exports: 75.72221011
    },
    {
      date: "1994-04-01",
      imports: 76.10670598,
      exports: 75.84259518
    },
    {
      date: "1994-07-01",
      imports: 76.16070151,
      exports: 76.11011756
    },
    {
      date: "1994-10-01",
      imports: 78.79298382,
      exports: 76.45789666
    },
    {
      date: "1995-01-01",
      imports: 82.82915003,
      exports: 78.97260705
    },
    {
      date: "1995-04-01",
      imports: 87.10829614,
      exports: 82.31663682
    },
    {
      date: "1995-07-01",
      imports: 86.62233633,
      exports: 84.71096213
    },
    {
      date: "1995-10-01",
      imports: 87.54026042,
      exports: 86.39635313
    },
    {
      date: "1996-01-01",
      imports: 88.41768786,
      exports: 88.79067845
    },
    {
      date: "1996-04-01",
      imports: 86.40635419,
      exports: 86.46323373
    },
    {
      date: "1996-07-01",
      imports: 85.01596918,
      exports: 86.3696009
    },
    {
      date: "1996-10-01",
      imports: 84.40851942,
      exports: 85.12562182
    },
    {
      date: "1997-01-01",
      imports: 86.82481959,
      exports: 89.53974112
    },
    {
      date: "1997-04-01",
      imports: 86.91931177,
      exports: 88.6836695
    },
    {
      date: "1997-07-01",
      imports: 88.62017111,
      exports: 90.4359411
    },
    {
      date: "1997-10-01",
      imports: 87.74274368,
      exports: 89.20533814
    },
    {
      date: "1998-01-01",
      imports: 88.44468562,
      exports: 93.47232013
    },
    {
      date: "1998-04-01",
      imports: 87.29728051,
      exports: 92.30859777
    },
    {
      date: "1998-07-01",
      imports: 85.73141001,
      exports: 93.20479775
    },
    {
      date: "1998-10-01",
      imports: 83.11262659,
      exports: 91.05124257
    },
    {
      date: "1999-01-01",
      imports: 83.53109198,
      exports: 93.92710818
    },
    {
      date: "1999-04-01",
      imports: 85.97438992,
      exports: 94.30163951
    },
    {
      date: "1999-07-01",
      imports: 89.56509297,
      exports: 95.79976485
    },
    {
      date: "1999-10-01",
      imports: 91.42793891,
      exports: 95.96027828
    },
    {
      date: "2000-01-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-04-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-07-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-10-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2001-01-01",
      imports: 101.0796407,
      exports: 101.5648722
    },
    {
      date: "2001-04-01",
      imports: 102.5780168,
      exports: 101.9795319
    },
    {
      date: "2001-07-01",
      imports: 101.0391441,
      exports: 102.782099
    },
    {
      date: "2001-10-01",
      imports: 97.36744771,
      exports: 102.3406871
    },
    {
      date: "2002-01-01",
      imports: 98.63634277,
      exports: 103.7451796
    },
    {
      date: "2002-04-01",
      imports: 100.6881731,
      exports: 103.1432542
    },
    {
      date: "2002-07-01",
      imports: 99.70275458,
      exports: 103.6247945
    },
    {
      date: "2002-10-01",
      imports: 99.87824007,
      exports: 102.7954751
    },
    {
      date: "2003-01-01",
      imports: 101.1876318,
      exports: 103.9591975
    },
    {
      date: "2003-04-01",
      imports: 98.67683943,
      exports: 102.0196602
    },
    {
      date: "2003-07-01",
      imports: 98.25837403,
      exports: 102.9827408
    },
    {
      date: "2003-10-01",
      imports: 98.10988631,
      exports: 102.7954751
    },
    {
      date: "2004-01-01",
      imports: 98.56884836,
      exports: 103.5846662
    },
    {
      date: "2004-04-01",
      imports: 102.3620347,
      exports: 104.7885169
    },
    {
      date: "2004-07-01",
      imports: 104.1978828,
      exports: 106.7013019
    },
    {
      date: "2004-10-01",
      imports: 104.9808181,
      exports: 106.4337795
    },
    {
      date: "2005-01-01",
      imports: 105.5072746,
      exports: 108.400069
    },
    {
      date: "2005-04-01",
      imports: 107.9505725,
      exports: 109.0554989
    },
    {
      date: "2005-07-01",
      imports: 113.579607,
      exports: 111.5167048
    },
    {
      date: "2005-10-01",
      imports: 114.7675087,
      exports: 112.0116212
    },
    {
      date: "2006-01-01",
      imports: 118.5214133,
      exports: 114.0140262
    },
    {
      date: "2006-04-01",
      imports: 121.1023998,
      exports: 114.9658708
    },
    {
      date: "2006-07-01",
      imports: 123.3594132,
      exports: 117.7296446
    },
    {
      date: "2006-10-01",
      imports: 121.0141171,
      exports: 117.0276658
    },
    {
      date: "2007-01-01",
      imports: 120.9992684,
      exports: 120.0010433
    },
    {
      date: "2007-04-01",
      imports: 123.7902975,
      exports: 121.3535027
    },
    {
      date: "2007-07-01",
      imports: 126.190804,
      exports: 122.7610718
    },
    {
      date: "2007-10-01",
      imports: 127.3175558,
      exports: 123.0808948
    },
    {
      date: "2008-01-01",
      imports: 131.7983753,
      exports: 126.5907884
    },
    {
      date: "2008-04-01",
      imports: 134.9982856,
      exports: 127.8696792
    },
    {
      date: "2008-07-01",
      imports: 142.8816337,
      exports: 131.3648591
    },
    {
      date: "2008-10-01",
      imports: 133.5325769,
      exports: 128.531262
    },
    {
      date: "2009-01-01",
      imports: 124.7107864,
      exports: 127.5169509
    },
    {
      date: "2009-04-01",
      imports: 121.6215669,
      exports: 125.8850644
    },
    {
      date: "2009-07-01",
      imports: 121.5921393,
      exports: 125.7931704
    },
    {
      date: "2009-10-01",
      imports: 120.6789399,
      exports: 125.337446
    },
    {
      date: "2010-01-01",
      imports: 128.1044058,
      exports: 129.5253752
    },
    {
      date: "2010-04-01",
      imports: 136.0242008,
      exports: 133.7611908
    },
    {
      date: "2010-07-01",
      imports: 137.6886132,
      exports: 135.5897063
    },
    {
      date: "2010-10-01",
      imports: 138.138126,
      exports: 136.1688922
    },
    {
      date: "2011-01-01",
      imports: 147.182378,
      exports: 141.6972423
    },
    {
      date: "2011-04-01",
      imports: 149.7930621,
      exports: 142.7231906
    },
    {
      date: "2011-07-01",
      imports: 150.1521324,
      exports: 144.2387049
    },
    {
      date: "2011-10-01",
      imports: 151.1874968,
      exports: 144.5062273
    },
    {
      date: "2012-01-01",
      imports: 156.5425039,
      exports: 149.7229137
    },
    {
      date: "2012-04-01",
      imports: 155.1467194,
      exports: 149.2333477
    },
    {
      date: "2012-07-01",
      imports: 157.2619944,
      exports: 150.9267644
    },
    {
      date: "2012-10-01",
      imports: 155.5975821,
      exports: 150.1696761
    },
    {
      date: "2013-01-01",
      imports: 155.2371619,
      exports: 152.3539963
    },
    {
      date: "2013-04-01",
      imports: 153.3473182,
      exports: 151.4618092
    },
    {
      date: "2013-07-01",
      imports: 152.986898,
      exports: 151.2397656
    },
    {
      date: "2013-10-01",
      imports: 151.3224856,
      exports: 151.5514292
    },
    {
      date: "2014-01-01",
      imports: 151.4574745,
      exports: 152.5773775
    },
    {
      date: "2014-04-01",
      imports: 149.1181179,
      exports: 152.3539963
    },
    {
      date: "2014-07-01",
      imports: 149.1626643,
      exports: 154.7616978
    },
    {
      date: "2014-10-01",
      imports: 147.0028429,
      exports: 154.7175566
    },
    {
      date: "2015-01-01",
      imports: 144.6634863,
      exports: 155.5201237
    },
    {
      date: "2015-04-01",
      imports: 147.4982519,
      exports: 157.1693992
    },
    {
      date: "2015-07-01",
      imports: 142.6832001,
      exports: 155.7421673
    },
    {
      date: "2015-10-01",
      imports: 139.5784569,
      exports: 155.9214073
    },
    {
      date: "2016-01-01",
      imports: 136.1132934,
      exports: 154.0928918
    },
    {
      date: "2016-04-01",
      imports: 135.5287918,
      exports: 154.9396001
    },
    {
      date: "2016-07-01",
      imports: 137.3241433,
      exports: 156.0993097
    },
    {
      date: "2016-10-01",
      imports: 139.3530255,
      exports: 157.8382051
    },
    {
      date: "2017-01-01",
      imports: 146.2833524,
      exports: 162.4302268
    },
    {
      date: "2017-04-01",
      imports: 145.1534958,
      exports: 161.5433901
    },
    {
      date: "2017-07-01",
      imports: 143.857603,
      exports: 161.4096289
    },
    {
      date: "2017-10-01",
      imports: 146.638373,
      exports: 162.4797185
    },
    {
      date: "2018-01-01",
      imports: 150.2588802,
      exports: 166.0782797
    },
    {
      date: "2018-04-01",
      imports: 152.9873785,
      exports: 167.7432249
    },
    {
      date: "2018-07-01",
      imports: 157.3912705,
      exports: 170.1365836
    },
    {
      date: "2018-10-01",
      imports: 157.6784809,
      exports: 170.5007903
    },
    {
      date: "2019-01-01",
      imports: 155.6201401,
      exports: 171.1251447
    },
    {
      date: "2019-04-01",
      imports: 155.7637452,
      exports: 173.9867692
    },
    {
      date: "2019-07-01",
      imports: 152.8916418,
      exports: 173.9867692
    },
    {
      date: "2019-10-01",
      imports: 154.3276935,
      exports: 175.5996849
    },
    {
      date: "2020-01-01",
      imports: 152.8437734,
      exports: 176.8483937
    },
    {
      date: "2020-04-01",
      imports: 142.5520692,
      exports: 174.9233009
    },
    {
      date: "2020-07-01",
      imports: 145.4720411,
      exports: 174.7672123
    },
    {
      date: "2020-10-01",
      imports: 147.9133291,
      exports: 176.484187
    }
  ],
  Jordan: [
    {
      date: "1986-01-01",
      imports: 46.45027124,
      exports: 48.42408958
    },
    {
      date: "1986-04-01",
      imports: 41.34851551,
      exports: 43.1105161
    },
    {
      date: "1986-07-01",
      imports: 40.91122216,
      exports: 42.65388088
    },
    {
      date: "1986-10-01",
      imports: 38.62757912,
      exports: 38.02526023
    },
    {
      date: "1987-01-01",
      imports: 42.12592591,
      exports: 41.63682971
    },
    {
      date: "1987-04-01",
      imports: 44.11804005,
      exports: 35.9081333
    },
    {
      date: "1987-07-01",
      imports: 44.87115637,
      exports: 38.85550609
    },
    {
      date: "1987-10-01",
      imports: 42.22310221,
      exports: 38.06677252
    },
    {
      date: "1988-01-01",
      imports: 41.78580886,
      exports: 40.32919248
    },
    {
      date: "1988-04-01",
      imports: 42.22310221,
      exports: 42.98597922
    },
    {
      date: "1988-07-01",
      imports: 46.76609422,
      exports: 44.0030304
    },
    {
      date: "1988-10-01",
      imports: 50.53167583,
      exports: 50.31289891
    },
    {
      date: "1989-01-01",
      imports: 56.55660641,
      exports: 62.2061708
    },
    {
      date: "1989-04-01",
      imports: 62.36289031,
      exports: 64.8006891
    },
    {
      date: "1989-07-01",
      imports: 67.17311715,
      exports: 73.12390382
    },
    {
      date: "1989-10-01",
      imports: 77.49809899,
      exports: 79.10167398
    },
    {
      date: "1990-01-01",
      imports: 83.69308809,
      exports: 80.30553048
    },
    {
      date: "1990-04-01",
      imports: 85.02926221,
      exports: 85.70212854
    },
    {
      date: "1990-07-01",
      imports: 92.43895506,
      exports: 93.15358511
    },
    {
      date: "1990-10-01",
      imports: 90.10672387,
      exports: 90.82889671
    },
    {
      date: "1991-01-01",
      imports: 97.85653377,
      exports: 88.91933124
    },
    {
      date: "1991-04-01",
      imports: 86.41402448,
      exports: 94.56500306
    },
    {
      date: "1991-07-01",
      imports: 88.45472678,
      exports: 94.64802765
    },
    {
      date: "1991-10-01",
      imports: 89.8880772,
      exports: 94.27441701
    },
    {
      date: "1992-01-01",
      imports: 82.59985472,
      exports: 92.63468145
    },
    {
      date: "1992-04-01",
      imports: 84.95637999,
      exports: 89.50050334
    },
    {
      date: "1992-07-01",
      imports: 86.94849413,
      exports: 89.16840499
    },
    {
      date: "1992-10-01",
      imports: 83.25579474,
      exports: 87.23808338
    },
    {
      date: "1993-01-01",
      imports: 82.5269725,
      exports: 91.61763027
    },
    {
      date: "1993-04-01",
      imports: 84.08179329,
      exports: 90.80814056
    },
    {
      date: "1993-07-01",
      imports: 87.06996451,
      exports: 89.16840499
    },
    {
      date: "1993-10-01",
      imports: 87.67731638,
      exports: 93.54795189
    },
    {
      date: "1997-01-01",
      imports: 102.3995258,
      exports: 116.2551761
    },
    {
      date: "1997-04-01",
      imports: 100.6503524,
      exports: 122.8556306
    },
    {
      date: "1997-07-01",
      imports: 99.07123752,
      exports: 113.5983893
    },
    {
      date: "1997-10-01",
      imports: 101.5735272,
      exports: 101.788142
    },
    {
      date: "1998-01-01",
      imports: 104.9989918,
      exports: 111.5227747
    },
    {
      date: "1998-04-01",
      imports: 100.7475287,
      exports: 106.3129819
    },
    {
      date: "1998-07-01",
      imports: 98.73112047,
      exports: 106.5205434
    },
    {
      date: "1998-10-01",
      imports: 95.81583148,
      exports: 104.7147587
    },
    {
      date: "1999-01-01",
      imports: 95.64577295,
      exports: 103.19956
    },
    {
      date: "1999-04-01",
      imports: 98.14806267,
      exports: 105.6695414
    },
    {
      date: "1999-07-01",
      imports: 98.48817972,
      exports: 104.6109779
    },
    {
      date: "1999-10-01",
      imports: 98.14806267,
      exports: 105.0883693
    },
    {
      date: "2000-01-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-04-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-07-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-10-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2001-01-01",
      imports: 105.6792259,
      exports: 100.7088224
    },
    {
      date: "2001-04-01",
      imports: 102.5209962,
      exports: 100.7503347
    },
    {
      date: "2001-07-01",
      imports: 102.4967021,
      exports: 101.082433
    },
    {
      date: "2001-10-01",
      imports: 100.6746465,
      exports: 102.8259493
    },
    {
      date: "2002-01-01",
      imports: 100.4074116,
      exports: 102.7014125
    },
    {
      date: "2002-04-01",
      imports: 101.9865265,
      exports: 103.9675374
    },
    {
      date: "2002-07-01",
      imports: 105.6792259,
      exports: 101.1239453
    },
    {
      date: "2002-10-01",
      imports: 104.6588748,
      exports: 101.8711666
    },
    {
      date: "2003-01-01",
      imports: 109.930689,
      exports: 94.68953994
    },
    {
      date: "2003-04-01",
      imports: 115.2753855,
      exports: 105.5657607
    },
    {
      date: "2003-07-01",
      imports: 115.6155025,
      exports: 104.6109779
    },
    {
      date: "2003-10-01",
      imports: 120.1099064,
      exports: 102.7221686
    },
    {
      date: "2004-01-01",
      imports: 120.2799649,
      exports: 110.1943813
    },
    {
      date: "2004-04-01",
      imports: 129.6574778,
      exports: 107.9319614
    },
    {
      date: "2004-07-01",
      imports: 135.3179973,
      exports: 114.0757807
    },
    {
      date: "2004-10-01",
      imports: 135.1479388,
      exports: 122.48202
    },
    {
      date: "2005-01-01",
      imports: 137.1157588,
      exports: 125.6992227
    },
    {
      date: "2005-04-01",
      imports: 143.1163953,
      exports: 126.2596386
    },
    {
      date: "2005-07-01",
      imports: 155.5063736,
      exports: 131.1165769
    },
    {
      date: "2005-10-01",
      imports: 156.0894314,
      exports: 140.6851604
    },
    {
      date: "2006-01-01",
      imports: 152.4365742,
      exports: 136.7045466
    },
    {
      date: "2006-04-01",
      imports: 162.2110524,
      exports: 140.42218
    },
    {
      date: "2006-07-01",
      imports: 165.9705604,
      exports: 144.8959598
    },
    {
      date: "2006-10-01",
      imports: 167.8640406,
      exports: 151.6699358
    },
    {
      date: "2007-01-01",
      imports: 175.0767085,
      exports: 171.424183
    },
    {
      date: "2007-04-01",
      imports: 176.9424935,
      exports: 169.754351
    },
    {
      date: "2007-07-01",
      imports: 184.4612667,
      exports: 168.8406654
    },
    {
      date: "2007-10-01",
      imports: 199.3596082,
      exports: 169.6912523
    },
    {
      date: "2008-01-01",
      imports: 217.2096797,
      exports: 188.909991
    },
    {
      date: "2008-04-01",
      imports: 240.9357592,
      exports: 240.20258
    },
    {
      date: "2008-07-01",
      imports: 238.0673578,
      exports: 307.2781427
    },
    {
      date: "2008-10-01",
      imports: 190.0306834,
      exports: 309.2624303
    },
    {
      date: "2009-01-01",
      imports: 207.8251215,
      exports: 278.9543053
    },
    {
      date: "2009-04-01",
      imports: 181.6484988,
      exports: 245.0532914
    },
    {
      date: "2009-07-01",
      imports: 197.1318415,
      exports: 213.9896427
    },
    {
      date: "2009-10-01",
      imports: 201.9772948,
      exports: 211.4677709
    },
    {
      date: "2010-01-01",
      imports: 196.4355733,
      exports: 203.9067219
    },
    {
      date: "2010-04-01",
      imports: 222.862668,
      exports: 205.4821134
    },
    {
      date: "2010-07-01",
      imports: 254.5241641,
      exports: 202.9301452
    },
    {
      date: "2010-10-01",
      imports: 297.9401054,
      exports: 217.9270837
    },
    {
      date: "2011-01-01",
      imports: 296.1301968,
      exports: 218.4625922
    },
    {
      date: "2011-04-01",
      imports: 303.8702891,
      exports: 232.8922652
    },
    {
      date: "2011-07-01",
      imports: 302.7284676,
      exports: 230.3392592
    },
    {
      date: "2011-10-01",
      imports: 317.2927655,
      exports: 251.8280976
    },
    {
      date: "2012-01-01",
      imports: 316.8749074,
      exports: 250.2215719
    },
    {
      date: "2012-04-01",
      imports: 332.4133977,
      exports: 269.6908372
    },
    {
      date: "2012-07-01",
      imports: 283.5142837,
      exports: 239.2872339
    },
    {
      date: "2012-10-01",
      imports: 270.8157707,
      exports: 248.4240896
    },
    {
      date: "2013-01-01",
      imports: 288.7763803,
      exports: 245.1487697
    },
    {
      date: "2013-04-01",
      imports: 292.0633687,
      exports: 234.5942692
    },
    {
      date: "2013-07-01",
      imports: 310.4709892,
      exports: 214.6808224
    },
    {
      date: "2013-10-01",
      imports: 324.2821708,
      exports: 228.2927032
    },
    {
      date: "2014-01-01",
      imports: 329.0729624,
      exports: 229.3637203
    },
    {
      date: "2014-04-01",
      imports: 329.0729624,
      exports: 225.8040412
    },
    {
      date: "2014-07-01",
      imports: 325.8710033,
      exports: 233.3655054
    },
    {
      date: "2014-10-01",
      imports: 303.5083074,
      exports: 233.6789232
    },
    {
      date: "2015-01-01",
      imports: 290.8097944,
      exports: 233.6789232
    },
    {
      date: "2015-04-01",
      imports: 287.4693591,
      exports: 230.4347375
    },
    {
      date: "2015-07-01",
      imports: 285.0739633,
      exports: 222.7798707
    },
    {
      date: "2015-10-01",
      imports: 274.0736062,
      exports: 223.6287971
    },
    {
      date: "2016-01-01",
      imports: 269.1443384,
      exports: 213.7675519
    },
    {
      date: "2016-04-01",
      imports: 300.918559,
      exports: 212.7608788
    },
    {
      date: "2016-07-01",
      imports: 299.0114741,
      exports: 215.0959453
    },
    {
      date: "2016-10-01",
      imports: 318.9083215,
      exports: 212.4765196
    },
    {
      date: "2017-01-01",
      imports: 323.937195,
      exports: 210.1352263
    },
    {
      date: "2017-04-01",
      imports: 257.5900764,
      exports: 212.2315971
    },
    {
      date: "2017-07-01",
      imports: 279.7705668,
      exports: 211.2145459
    }
  ],
  Kenya: [
    {
      date: "1986-01-01",
      imports: 22.32747,
      exports: 25.96769
    },
    {
      date: "1987-01-01",
      imports: 21.244926,
      exports: 21.12899
    },
    {
      date: "1987-04-01",
      imports: 16.373478,
      exports: 20.16125
    },
    {
      date: "1987-07-01",
      imports: 20.027064,
      exports: 19.67738
    },
    {
      date: "1987-10-01",
      imports: 23.00406,
      exports: 20.32254
    }
  ],
  Korea: [
    //, Republic of
    {
      date: "1969-01-01",
      imports: 8.03037,
      exports: 12.4201
    },
    {
      date: "1969-04-01",
      imports: 8.05911,
      exports: 12.3152
    },
    {
      date: "1969-07-01",
      imports: 8.22238,
      exports: 12.5317
    },
    {
      date: "1969-10-01",
      imports: 8.58515,
      exports: 12.7117
    },
    {
      date: "1970-01-01",
      imports: 8.76438,
      exports: 13.3231
    },
    {
      date: "1970-04-01",
      imports: 9.00388,
      exports: 13.9437
    },
    {
      date: "1970-07-01",
      imports: 9.04843,
      exports: 14.3208
    },
    {
      date: "1970-10-01",
      imports: 9.75348,
      exports: 14.4115
    },
    {
      date: "1971-01-01",
      imports: 9.41172,
      exports: 14.2834
    },
    {
      date: "1971-04-01",
      imports: 9.73013,
      exports: 14.693
    },
    {
      date: "1971-07-01",
      imports: 10.8854,
      exports: 16.4918
    },
    {
      date: "1971-10-01",
      imports: 11.0089,
      exports: 16.5956
    },
    {
      date: "1972-01-01",
      imports: 11.4032,
      exports: 16.963
    },
    {
      date: "1972-04-01",
      imports: 11.7716,
      exports: 17.8506
    },
    {
      date: "1972-07-01",
      imports: 12.1115,
      exports: 18.4724
    },
    {
      date: "1972-10-01",
      imports: 12.2186,
      exports: 18.0939
    },
    {
      date: "1973-01-01",
      imports: 13.1733,
      exports: 19.3204
    },
    {
      date: "1973-04-01",
      imports: 15.073,
      exports: 21.7141
    },
    {
      date: "1973-07-01",
      imports: 16.2381,
      exports: 23.0827
    },
    {
      date: "1973-10-01",
      imports: 18.5127,
      exports: 25.1251
    },
    {
      date: "1974-01-01",
      imports: 21.9204,
      exports: 28.1681
    },
    {
      date: "1974-04-01",
      imports: 25.1669,
      exports: 29.621
    },
    {
      date: "1974-07-01",
      imports: 25.8405,
      exports: 29.0801
    },
    {
      date: "1974-10-01",
      imports: 27.6848,
      exports: 29.8254
    },
    {
      date: "1975-01-01",
      imports: 33.1214,
      exports: 34.1796
    },
    {
      date: "1975-04-01",
      imports: 31.7294,
      exports: 32.3172
    },
    {
      date: "1975-07-01",
      imports: 29.9533,
      exports: 31.4408
    },
    {
      date: "1975-10-01",
      imports: 29.0892,
      exports: 32.7007
    },
    {
      date: "1976-01-01",
      imports: 29.4733,
      exports: 34.1796
    },
    {
      date: "1976-04-01",
      imports: 29.9053,
      exports: 35.7681
    },
    {
      date: "1976-07-01",
      imports: 30.5293,
      exports: 36.6992
    },
    {
      date: "1976-10-01",
      imports: 31.1533,
      exports: 37.5756
    },
    {
      date: "1977-01-01",
      imports: 30.5293,
      exports: 38.2329
    },
    {
      date: "1977-04-01",
      imports: 31.0093,
      exports: 38.7807
    },
    {
      date: "1977-07-01",
      imports: 31.0573,
      exports: 39.1093
    },
    {
      date: "1977-10-01",
      imports: 30.6733,
      exports: 40.9169
    },
    {
      date: "1978-01-01",
      imports: 30.9133,
      exports: 41.1908
    },
    {
      date: "1978-04-01",
      imports: 31.6814,
      exports: 42.1767
    },
    {
      date: "1978-07-01",
      imports: 33.3134,
      exports: 43.7652
    },
    {
      date: "1978-10-01",
      imports: 34.3215,
      exports: 47.8733
    },
    {
      date: "1979-01-01",
      imports: 36.0015,
      exports: 50.0096
    },
    {
      date: "1979-04-01",
      imports: 38.2576,
      exports: 51.2694
    },
    {
      date: "1979-07-01",
      imports: 41.3298,
      exports: 52.8031
    },
    {
      date: "1979-10-01",
      imports: 44.5459,
      exports: 54.5559
    },
    {
      date: "1980-01-01",
      imports: 55.2157,
      exports: 63.6527
    },
    {
      date: "1980-04-01",
      imports: 58.2701,
      exports: 65.954
    },
    {
      date: "1980-07-01",
      imports: 62.6539,
      exports: 70.0365
    },
    {
      date: "1980-10-01",
      imports: 66.2114,
      exports: 73.1949
    },
    {
      date: "1981-01-01",
      imports: 71.3299,
      exports: 77.6191
    },
    {
      date: "1981-04-01",
      imports: 72.195,
      exports: 79.9155
    },
    {
      date: "1981-07-01",
      imports: 70.8141,
      exports: 80.4176
    },
    {
      date: "1981-10-01",
      imports: 72.4807,
      exports: 80.0521
    },
    {
      date: "1982-01-01",
      imports: 70.7756,
      exports: 82.2083
    },
    {
      date: "1982-04-01",
      imports: 71.2177,
      exports: 82.6674
    },
    {
      date: "1982-07-01",
      imports: 70.6532,
      exports: 82.9712
    },
    {
      date: "1982-10-01",
      imports: 70.2374,
      exports: 81.6647
    },
    {
      date: "1983-01-01",
      imports: 70.6884,
      exports: 80.4066
    },
    {
      date: "1983-04-01",
      imports: 69.9866,
      exports: 83.7806
    },
    {
      date: "1983-07-01",
      imports: 71.1035,
      exports: 85.4906
    },
    {
      date: "1983-10-01",
      imports: 74.0159,
      exports: 87.2477
    },
    {
      date: "1984-01-01",
      imports: 74.2622,
      exports: 87.7122
    },
    {
      date: "1984-04-01",
      imports: 74.8864,
      exports: 89.9691
    },
    {
      date: "1984-07-01",
      imports: 76.0444,
      exports: 92.0025
    },
    {
      date: "1984-10-01",
      imports: 75.2605,
      exports: 92.3715
    },
    {
      date: "1985-01-01",
      imports: 75.4467,
      exports: 92.2618
    },
    {
      date: "1985-04-01",
      imports: 78.0802,
      exports: 94.6902
    },
    {
      date: "1985-07-01",
      imports: 78.5491,
      exports: 94.3286
    },
    {
      date: "1985-10-01",
      imports: 79.475,
      exports: 94.8246
    },
    {
      date: "1986-01-01",
      imports: 77.4215,
      exports: 95.8749
    },
    {
      date: "1986-04-01",
      imports: 73.4597,
      exports: 96.1724
    },
    {
      date: "1986-07-01",
      imports: 72.9236,
      exports: 97.0793
    },
    {
      date: "1986-10-01",
      imports: 72.9647,
      exports: 98.5981
    },
    {
      date: "1987-01-01",
      imports: 73.1066,
      exports: 99.8063
    },
    {
      date: "1987-04-01",
      imports: 74.1304,
      exports: 98.2535
    },
    {
      date: "1987-07-01",
      imports: 73.2559,
      exports: 99.0794
    },
    {
      date: "1987-10-01",
      imports: 75.1485,
      exports: 101.431
    },
    {
      date: "1988-01-01",
      imports: 73.0886,
      exports: 99.6564
    },
    {
      date: "1988-04-01",
      imports: 72.9857,
      exports: 100.198
    },
    {
      date: "1988-07-01",
      imports: 72.8928,
      exports: 102.693
    },
    {
      date: "1988-10-01",
      imports: 72.2689,
      exports: 100.712
    },
    {
      date: "1989-01-01",
      imports: 69.5768,
      exports: 98.791
    },
    {
      date: "1989-04-01",
      imports: 67.5353,
      exports: 101.717
    },
    {
      date: "1989-07-01",
      imports: 67.6463,
      exports: 102.914
    },
    {
      date: "1989-10-01",
      imports: 68.4486,
      exports: 103.585
    },
    {
      date: "1990-01-01",
      imports: 71.1315,
      exports: 98.3782
    },
    {
      date: "1990-04-01",
      imports: 72.2446,
      exports: 100.941
    },
    {
      date: "1990-07-01",
      imports: 73.7915,
      exports: 102.876
    },
    {
      date: "1990-10-01",
      imports: 80.5164,
      exports: 104.063
    },
    {
      date: "1991-01-01",
      imports: 78.2007,
      exports: 105.019
    },
    {
      date: "1991-04-01",
      imports: 75.4327,
      exports: 104.427
    },
    {
      date: "1991-07-01",
      imports: 74.9209,
      exports: 105.672
    },
    {
      date: "1991-10-01",
      imports: 78.5918,
      exports: 109.169
    },
    {
      date: "1992-01-01",
      imports: 78.8439,
      exports: 109.122
    },
    {
      date: "1992-04-01",
      imports: 77.6673,
      exports: 106.303
    },
    {
      date: "1992-07-01",
      imports: 80.8218,
      exports: 109.008
    },
    {
      date: "1992-10-01",
      imports: 76.4636,
      exports: 107.302
    },
    {
      date: "1993-01-01",
      imports: 75.3258,
      exports: 102.737
    },
    {
      date: "1993-04-01",
      imports: 78.1653,
      exports: 108.234
    },
    {
      date: "1993-07-01",
      imports: 79.3897,
      exports: 111.286
    },
    {
      date: "1993-10-01",
      imports: 77.5534,
      exports: 112.185
    },
    {
      date: "1994-01-01",
      imports: 76.3046,
      exports: 109.02
    },
    {
      date: "1994-04-01",
      imports: 78.2551,
      exports: 111.285
    },
    {
      date: "1994-07-01",
      imports: 80.729,
      exports: 113.077
    },
    {
      date: "1994-10-01",
      imports: 80.2547,
      exports: 113.748
    },
    {
      date: "1995-01-01",
      imports: 81.8422,
      exports: 113.805
    },
    {
      date: "1995-04-01",
      imports: 83.2212,
      exports: 113.126
    },
    {
      date: "1995-07-01",
      imports: 82.7234,
      exports: 113.172
    },
    {
      date: "1995-10-01",
      imports: 82.4684,
      exports: 111.535
    },
    {
      date: "1996-01-01",
      imports: 83.7416,
      exports: 111.173
    },
    {
      date: "1996-04-01",
      imports: 81.9755,
      exports: 100.503
    },
    {
      date: "1996-07-01",
      imports: 84.2497,
      exports: 100.316
    },
    {
      date: "1996-10-01",
      imports: 87.2374,
      exports: 95.2306
    },
    {
      date: "1997-01-01",
      imports: 90.7862,
      exports: 98.0601
    },
    {
      date: "1997-04-01",
      imports: 88.2629,
      exports: 98.4138
    },
    {
      date: "1997-07-01",
      imports: 89.3303,
      exports: 94.1496
    },
    {
      date: "1997-10-01",
      imports: 107.132,
      exports: 110.233
    },
    {
      date: "1998-01-01",
      imports: 143.09,
      exports: 145.757
    },
    {
      date: "1998-04-01",
      imports: 111.935,
      exports: 125.177
    },
    {
      date: "1998-07-01",
      imports: 102.937,
      exports: 112.635
    },
    {
      date: "1998-10-01",
      imports: 97.3627,
      exports: 112.239
    },
    {
      date: "1999-01-01",
      imports: 87.7852,
      exports: 104.117
    },
    {
      date: "1999-04-01",
      imports: 89.205,
      exports: 102.593
    },
    {
      date: "1999-07-01",
      imports: 95.866,
      exports: 105.697
    },
    {
      date: "1999-10-01",
      imports: 101.532,
      exports: 111.041
    },
    {
      date: "2000-01-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-04-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-07-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-10-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2001-01-01",
      imports: 107.48,
      exports: 104.949
    },
    {
      date: "2001-04-01",
      imports: 107.106,
      exports: 102.659
    },
    {
      date: "2001-07-01",
      imports: 103.886,
      exports: 96.4992
    },
    {
      date: "2001-10-01",
      imports: 96.6409,
      exports: 92.4625
    },
    {
      date: "2002-01-01",
      imports: 94.6222,
      exports: 96.7729
    },
    {
      date: "2002-04-01",
      imports: 97.8897,
      exports: 94.0187
    },
    {
      date: "2002-07-01",
      imports: 95.7071,
      exports: 87.6008
    },
    {
      date: "2002-10-01",
      imports: 98.2338,
      exports: 89.1147
    },
    {
      date: "2003-01-01",
      imports: 103.521,
      exports: 90.0696
    },
    {
      date: "2003-04-01",
      imports: 99.9414,
      exports: 89.5242
    },
    {
      date: "2003-07-01",
      imports: 97.476,
      exports: 88.1793
    },
    {
      date: "2003-10-01",
      imports: 101.136,
      exports: 90.7359
    },
    {
      date: "2004-01-01",
      imports: 105.394,
      exports: 93.5366
    },
    {
      date: "2004-04-01",
      imports: 109.114,
      exports: 94.2657
    },
    {
      date: "2004-07-01",
      imports: 111.77,
      exports: 93.8544
    },
    {
      date: "2004-10-01",
      imports: 108.129,
      exports: 89.3326
    }
  ],
  Latvia: [
    {
      date: "1994-01-01",
      imports: 0,
      exports: 81.2302546
    },
    {
      date: "1994-04-01",
      imports: 0,
      exports: 83.05147742
    },
    {
      date: "1994-07-01",
      imports: 0,
      exports: 83.85058539
    },
    {
      date: "1994-10-01",
      imports: 0,
      exports: 87.56736666
    },
    {
      date: "1995-01-01",
      imports: 0,
      exports: 94.4248281
    },
    {
      date: "1995-04-01",
      imports: 0,
      exports: 93.40271325
    },
    {
      date: "1995-07-01",
      imports: 0,
      exports: 98.94071734
    },
    {
      date: "1995-10-01",
      imports: 0,
      exports: 103.0849285
    },
    {
      date: "1996-01-01",
      imports: 0,
      exports: 104.1070433
    },
    {
      date: "1996-04-01",
      imports: 0,
      exports: 103.9026203
    },
    {
      date: "1996-07-01",
      imports: 0,
      exports: 103.9583721
    },
    {
      date: "1996-10-01",
      imports: 0,
      exports: 102.1371492
    },
    {
      date: "1997-01-01",
      imports: 0,
      exports: 107.2477235
    },
    {
      date: "1997-04-01",
      imports: 0,
      exports: 104.9061513
    },
    {
      date: "1997-07-01",
      imports: 0,
      exports: 104.7017283
    },
    {
      date: "1997-10-01",
      imports: 0,
      exports: 103.9583721
    },
    {
      date: "1998-01-01",
      imports: 0,
      exports: 104.3300502
    },
    {
      date: "1998-04-01",
      imports: 0,
      exports: 105.5008363
    },
    {
      date: "1998-07-01",
      imports: 0,
      exports: 105.7795949
    },
    {
      date: "1998-10-01",
      imports: 0,
      exports: 104.5530571
    },
    {
      date: "1999-01-01",
      imports: 0,
      exports: 102.7318342
    },
    {
      date: "1999-04-01",
      imports: 0,
      exports: 101.8583906
    },
    {
      date: "1999-07-01",
      imports: 0,
      exports: 99.96283219
    },
    {
      date: "1999-10-01",
      imports: 0,
      exports: 100.2601747
    },
    {
      date: "2000-01-01",
      imports: 0,
      exports: 100
    },
    {
      date: "2000-04-01",
      imports: 0,
      exports: 100
    },
    {
      date: "2000-07-01",
      imports: 0,
      exports: 100
    },
    {
      date: "2000-10-01",
      imports: 0,
      exports: 100
    },
    {
      date: "2001-01-01",
      imports: 0,
      exports: 102.8061699
    },
    {
      date: "2001-04-01",
      imports: 0,
      exports: 102.3044044
    },
    {
      date: "2001-07-01",
      imports: 0,
      exports: 103.0105928
    },
    {
      date: "2001-10-01",
      imports: 0,
      exports: 102.3973239
    },
    {
      date: "2002-01-01",
      imports: 0,
      exports: 103.8097008
    },
    {
      date: "2002-04-01",
      imports: 0,
      exports: 104.5158892
    },
    {
      date: "2002-07-01",
      imports: 0,
      exports: 106.2999443
    },
    {
      date: "2002-10-01",
      imports: 0,
      exports: 107.0990522
    },
    {
      date: "2003-01-01",
      imports: 0,
      exports: 111.2990151
    },
    {
      date: "2003-04-01",
      imports: 0,
      exports: 115.4060584
    },
    {
      date: "2003-07-01",
      imports: 0,
      exports: 114.3096079
    },
    {
      date: "2003-10-01",
      imports: 0,
      exports: 114.2166884
    },
    {
      date: "2004-01-01",
      imports: 0,
      exports: 122.8024531
    },
    {
      date: "2004-04-01",
      imports: 0,
      exports: 128.7121353
    },
    {
      date: "2004-07-01",
      imports: 0,
      exports: 130.8121167
    },
    {
      date: "2004-10-01",
      imports: 0,
      exports: 134.2129716
    },
    {
      date: "2005-01-01",
      imports: 0,
      exports: 140.2155733
    },
    {
      date: "2005-04-01",
      imports: 0,
      exports: 141.0146813
    },
    {
      date: "2005-07-01",
      imports: 0,
      exports: 142.7058168
    },
    {
      date: "2005-10-01",
      imports: 0,
      exports: 145.4190671
    },
    {
      date: "2006-01-01",
      imports: 0,
      exports: 147.816391
    },
    {
      date: "2006-04-01",
      imports: 0,
      exports: 152.2207768
    },
    {
      date: "2006-07-01",
      imports: 0,
      exports: 158.1862107
    },
    {
      date: "2006-10-01",
      imports: 0,
      exports: 166.0100353
    },
    {
      date: "2007-01-01",
      imports: 0,
      exports: 170.2843338
    },
    {
      date: "2007-04-01",
      imports: 0,
      exports: 175.4134919
    },
    {
      date: "2007-07-01",
      imports: 0,
      exports: 179.3904479
    },
    {
      date: "2007-10-01",
      imports: 0,
      exports: 182.2337855
    },
    {
      date: "2008-01-01",
      imports: 0,
      exports: 186.508084
    },
    {
      date: "2008-04-01",
      imports: 0,
      exports: 190.9124698
    },
    {
      date: "2008-07-01",
      imports: 0,
      exports: 200.594685
    },
    {
      date: "2008-10-01",
      imports: 0,
      exports: 183.5160751
    },
    {
      date: "2009-01-01",
      imports: 0,
      exports: 177.2532986
    },
    {
      date: "2009-04-01",
      imports: 0,
      exports: 170.2843338
    },
    {
      date: "2009-07-01",
      imports: 0,
      exports: 166.864895
    },
    {
      date: "2009-10-01",
      imports: 0,
      exports: 171.8453819
    },
    {
      date: "2010-01-01",
      imports: 0,
      exports: 176.8258688
    },
    {
      date: "2010-04-01",
      imports: 0,
      exports: 184.3709348
    },
    {
      date: "2010-07-01",
      imports: 0,
      exports: 188.496562
    },
    {
      date: "2010-10-01",
      imports: 0,
      exports: 193.6257201
    },
    {
      date: "2011-01-01",
      imports: 0,
      exports: 206.5601189
    },
    {
      date: "2011-04-01",
      imports: 0,
      exports: 209.124698
    },
    {
      date: "2011-07-01",
      imports: 0,
      exports: 209.7007991
    },
    {
      date: "2011-10-01",
      imports: 0,
      exports: 208.4185096
    },
    {
      date: "2012-01-01",
      imports: 0,
      exports: 213.0644862
    },
    {
      date: "2012-04-01",
      imports: 0,
      exports: 214.7184538
    },
    {
      date: "2012-07-01",
      imports: 0,
      exports: 217.0228582
    },
    {
      date: "2012-10-01",
      imports: 0,
      exports: 220.0148671
    },
    {
      date: "2013-01-01",
      imports: 0,
      exports: 221.6688348
    },
    {
      date: "2013-04-01",
      imports: 0,
      exports: 221.5015796
    },
    {
      date: "2013-07-01",
      imports: 0,
      exports: 217.7847984
    },
    {
      date: "2013-10-01",
      imports: 0,
      exports: 217.8963018
    },
    {
      date: "2014-01-01",
      imports: 0,
      exports: 216.1308307
    },
    {
      date: "2014-04-01",
      imports: 0,
      exports: 214.2724401
    },
    {
      date: "2014-07-01",
      imports: 0,
      exports: 214.0308493
    },
    {
      date: "2014-10-01",
      imports: 0,
      exports: 211.6706932
    },
    {
      date: "2015-01-01",
      imports: 0,
      exports: 212.9715666
    },
    {
      date: "2015-04-01",
      imports: 0,
      exports: 218.7325776
    },
    {
      date: "2015-07-01",
      imports: 0,
      exports: 214.6441182
    },
    {
      date: "2015-10-01",
      imports: 0,
      exports: 211.8565322
    },
    {
      date: "2016-01-01",
      imports: 0,
      exports: 207.0247166
    },
    {
      date: "2016-04-01",
      imports: 0,
      exports: 207.5264821
    },
    {
      date: "2016-07-01",
      imports: 0,
      exports: 208.8831072
    },
    {
      date: "2016-10-01",
      imports: 0,
      exports: 211.8565322
    },
    {
      date: "2017-01-01",
      imports: 0,
      exports: 215.5733135
    },
    {
      date: "2017-04-01",
      imports: 0,
      exports: 216.6883479
    },
    {
      date: "2017-07-01",
      imports: 0,
      exports: 218.9184167
    },
    {
      date: "2017-10-01",
      imports: 0,
      exports: 218.7883293
    },
    {
      date: "2018-01-01",
      imports: 0,
      exports: 221.1484854
    },
    {
      date: "2018-04-01",
      imports: 0,
      exports: 223.3228025
    },
    {
      date: "2018-07-01",
      imports: 0,
      exports: 225.2369448
    },
    {
      date: "2018-10-01",
      imports: 0,
      exports: 227.968779
    },
    {
      date: "2019-01-01",
      imports: 0,
      exports: 225.8502137
    },
    {
      date: "2019-04-01",
      imports: 0,
      exports: 224.1219104
    },
    {
      date: "2019-07-01",
      imports: 0,
      exports: 222.9449297
    },
    {
      date: "2019-10-01",
      imports: 0,
      exports: 223.3166078
    },
    {
      date: "2020-01-01",
      imports: 0,
      exports: 222.2035248
    },
    {
      date: "2020-04-01",
      imports: 0,
      exports: 220.0580128
    },
    {
      date: "2020-07-01",
      imports: 0,
      exports: 221.8459394
    },
    {
      date: "2020-10-01",
      imports: 0,
      exports: 223.7053831
    }
  ],
  Lithuania: [
    {
      date: "1996-01-01",
      imports: 106.5,
      exports: 100.4
    },
    {
      date: "1996-04-01",
      imports: 105.4,
      exports: 99.3
    },
    {
      date: "1996-07-01",
      imports: 106.1,
      exports: 99.9
    },
    {
      date: "1996-10-01",
      imports: 105.6,
      exports: 102.7
    },
    {
      date: "1997-01-01",
      imports: 106.6,
      exports: 104.5
    },
    {
      date: "1997-04-01",
      imports: 106.2,
      exports: 101.8
    },
    {
      date: "1997-07-01",
      imports: 105.2,
      exports: 102.7
    },
    {
      date: "1997-10-01",
      imports: 106.6,
      exports: 103.4
    },
    {
      date: "1998-01-01",
      imports: 103.7,
      exports: 101
    },
    {
      date: "1998-04-01",
      imports: 99.8,
      exports: 97.5
    },
    {
      date: "1998-07-01",
      imports: 97.7,
      exports: 96.3
    },
    {
      date: "1998-10-01",
      imports: 98.6,
      exports: 94.6
    },
    {
      date: "1999-01-01",
      imports: 92.8,
      exports: 92.1
    },
    {
      date: "1999-04-01",
      imports: 93.2,
      exports: 91.9
    },
    {
      date: "1999-07-01",
      imports: 97.5,
      exports: 97.1
    },
    {
      date: "1999-10-01",
      imports: 101.9,
      exports: 103.4
    },
    {
      date: "2000-01-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-04-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-07-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-10-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2001-01-01",
      imports: 99.4,
      exports: 99.8
    },
    {
      date: "2001-04-01",
      imports: 98.5,
      exports: 99.8
    },
    {
      date: "2001-07-01",
      imports: 96.5,
      exports: 96.4
    },
    {
      date: "2001-10-01",
      imports: 94.2,
      exports: 92.5
    },
    {
      date: "2002-01-01",
      imports: 91.5,
      exports: 91
    },
    {
      date: "2002-04-01",
      imports: 93.6,
      exports: 93.6
    },
    {
      date: "2002-07-01",
      imports: 92,
      exports: 92.2
    },
    {
      date: "2002-10-01",
      imports: 92.2,
      exports: 92.8
    },
    {
      date: "2003-01-01",
      imports: 91.5,
      exports: 94.3
    },
    {
      date: "2003-04-01",
      imports: 88.7,
      exports: 89.6
    },
    {
      date: "2003-07-01",
      imports: 88.4,
      exports: 90.2
    },
    {
      date: "2003-10-01",
      imports: 88.6,
      exports: 91
    },
    {
      date: "2004-01-01",
      imports: 86.9,
      exports: 91
    },
    {
      date: "2004-04-01",
      imports: 89.1,
      exports: 93.9
    },
    {
      date: "2004-07-01",
      imports: 89,
      exports: 98.2
    },
    {
      date: "2004-10-01",
      imports: 89.6,
      exports: 99.2
    },
    {
      date: "2005-01-01",
      imports: 89.2,
      exports: 97.7
    },
    {
      date: "2005-04-01",
      imports: 93.8,
      exports: 101.9
    },
    {
      date: "2005-07-01",
      imports: 100.8,
      exports: 108.9
    },
    {
      date: "2005-10-01",
      imports: 101.4,
      exports: 110.7
    },
    {
      date: "2006-01-01",
      imports: 101.8,
      exports: 108.6
    },
    {
      date: "2006-04-01",
      imports: 105.1,
      exports: 111.4
    },
    {
      date: "2006-07-01",
      imports: 105.3,
      exports: 112.4
    },
    {
      date: "2006-10-01",
      imports: 103.1,
      exports: 107.4
    },
    {
      date: "2007-01-01",
      imports: 103.92,
      exports: 109.12
    },
    {
      date: "2007-04-01",
      imports: 107.6,
      exports: 115.8
    },
    {
      date: "2007-07-01",
      imports: 110.24,
      exports: 117.46
    },
    {
      date: "2007-10-01",
      imports: 114.9,
      exports: 122.72
    },
    {
      date: "2008-01-01",
      imports: 121,
      exports: 123
    },
    {
      date: "2008-04-01",
      imports: 125.4,
      exports: 128.7
    },
    {
      date: "2008-07-01",
      imports: 127.5,
      exports: 131.4
    },
    {
      date: "2008-10-01",
      imports: 119.1,
      exports: 120.2
    },
    {
      date: "2009-01-01",
      imports: 102.6558,
      exports: 110.3544
    },
    {
      date: "2009-04-01",
      imports: 103.5225,
      exports: 110.564
    },
    {
      date: "2009-07-01",
      imports: 105.3522,
      exports: 109.516
    },
    {
      date: "2009-10-01",
      imports: 107.0856,
      exports: 111.2976
    },
    {
      date: "2010-01-01",
      imports: 111.5154,
      exports: 117.4808
    },
    {
      date: "2010-04-01",
      imports: 116.0415,
      exports: 124.3976
    },
    {
      date: "2010-07-01",
      imports: 116.8119,
      exports: 124.712
    },
    {
      date: "2010-10-01",
      imports: 119.7009,
      exports: 130.0568
    },
    {
      date: "2011-01-01",
      imports: 128.7531,
      exports: 138.86
    },
    {
      date: "2011-04-01",
      imports: 133.0866,
      exports: 141.5848
    },
    {
      date: "2011-07-01",
      imports: 133.857,
      exports: 140.956
    },
    {
      date: "2011-10-01",
      imports: 134.2422,
      exports: 142.004
    },
    {
      date: "2012-01-01",
      imports: 139.3461,
      exports: 145.7768
    },
    {
      date: "2012-04-01",
      imports: 140.0202,
      exports: 147.3488
    },
    {
      date: "2012-07-01",
      imports: 139.2498,
      exports: 147.6632
    },
    {
      date: "2012-10-01",
      imports: 137.4201,
      exports: 144.624
    },
    {
      date: "2013-01-01",
      imports: 137.9733435,
      exports: 146.169276
    },
    {
      date: "2013-04-01",
      imports: 135.536472,
      exports: 143.685516
    },
    {
      date: "2013-07-01",
      imports: 136.3487625,
      exports: 143.43714
    },
    {
      date: "2013-10-01",
      imports: 133.7958495,
      exports: 139.7115
    },
    {
      date: "2014-01-01",
      imports: 133.3316835,
      exports: 140.705004
    },
    {
      date: "2014-04-01",
      imports: 132.519393,
      exports: 139.835688
    },
    {
      date: "2014-07-01",
      imports: 131.126895,
      exports: 139.214748
    },
    {
      date: "2014-10-01",
      imports: 125.9050275,
      exports: 134.868168
    },
    {
      date: "2015-01-01",
      imports: 120.218994,
      exports: 131.887656
    },
    {
      date: "2015-04-01",
      imports: 124.0483635,
      exports: 135.36492
    },
    {
      date: "2015-07-01",
      imports: 119.522745,
      exports: 130.3974
    },
    {
      date: "2015-10-01",
      imports: 115.8442295,
      exports: 127.416888
    },
    {
      date: "2016-01-01",
      imports: 110.239425,
      exports: 122.821932
    },
    {
      date: "2016-04-01",
      imports: 113.7090659,
      exports: 127.541076
    },
    {
      date: "2016-07-01",
      imports: 114.3008775,
      exports: 128.037828
    },
    {
      date: "2016-10-01",
      imports: 116.2967913,
      exports: 130.459494
    },
    {
      date: "2017-01-01",
      imports: 119.3834952,
      exports: 134.0485272
    },
    {
      date: "2017-04-01",
      imports: 117.898164,
      exports: 133.129536
    },
    {
      date: "2017-07-01",
      imports: 117.0046445,
      exports: 131.01834
    },
    {
      date: "2017-10-01",
      imports: 119.4879326,
      exports: 133.9243392
    },
    {
      date: "2018-01-01",
      imports: 121.2014362,
      exports: 134.9946907
    },
    {
      date: "2018-04-01",
      imports: 123.8865436,
      exports: 137.7644184
    },
    {
      date: "2018-07-01",
      imports: 125.9003742,
      exports: 140.980453
    },
    {
      date: "2018-10-01",
      imports: 124.3900013,
      exports: 138.8801855
    },
    {
      date: "2019-01-01",
      imports: 121.9086743,
      exports: 137.0424515
    },
    {
      date: "2019-04-01",
      imports: 123.6228277,
      exports: 140.061586
    },
    {
      date: "2019-07-01",
      imports: 120.7099656,
      exports: 137.1737182
    },
    {
      date: "2019-10-01",
      imports: 121.2733587,
      exports: 137.0818315
    },
    {
      date: "2020-01-01",
      imports: 117.593323,
      exports: 134.4564972
    },
    {
      date: "2020-04-01",
      imports: 113.3978426,
      exports: 130.4791157
    },
    {
      date: "2020-07-01",
      imports: 113.5536747,
      exports: 130.6891425
    },
    {
      date: "2020-10-01",
      imports: 115.2318669,
      exports: 131.3586027
    }
  ],
  Malaysia: [
    {
      date: "1986-01-01",
      imports: 0,
      exports: 83.00153065
    },
    {
      date: "1986-04-01",
      imports: 0,
      exports: 72.01603394
    },
    {
      date: "1986-07-01",
      imports: 0,
      exports: 69.57481245
    },
    {
      date: "1986-10-01",
      imports: 0,
      exports: 74.45725543
    },
    {
      date: "1987-01-01",
      imports: 0,
      exports: 82.07386648
    },
    {
      date: "1987-04-01",
      imports: 0,
      exports: 83.07476729
    },
    {
      date: "1987-07-01",
      imports: 0,
      exports: 91.08197378
    },
    {
      date: "1987-10-01",
      imports: 0,
      exports: 92.08287459
    },
    {
      date: "1988-01-01",
      imports: 0,
      exports: 91.26213592
    },
    {
      date: "1988-04-01",
      imports: 0,
      exports: 97.18446602
    },
    {
      date: "1988-07-01",
      imports: 0,
      exports: 98.9223301
    },
    {
      date: "1988-10-01",
      imports: 0,
      exports: 92.61165049
    },
    {
      date: "1989-01-01",
      imports: 0,
      exports: 100.5825243
    },
    {
      date: "1989-04-01",
      imports: 0,
      exports: 103.9805825
    },
    {
      date: "1989-07-01",
      imports: 0,
      exports: 96.30097087
    },
    {
      date: "1989-10-01",
      imports: 0,
      exports: 91.55339806
    },
    {
      date: "1991-01-01",
      imports: 0,
      exports: 101.3495146
    },
    {
      date: "1991-04-01",
      imports: 0,
      exports: 94.66019417
    },
    {
      date: "1991-07-01",
      imports: 0,
      exports: 95.03883495
    },
    {
      date: "1991-10-01",
      imports: 0,
      exports: 95.9223301
    },
    {
      date: "1992-01-01",
      imports: 0,
      exports: 95.03883495
    }
  ],
  Malta: [
    {
      date: "1970-01-01",
      imports: 30.27184682,
      exports: 0
    },
    {
      date: "1970-04-01",
      imports: 31.119421,
      exports: 0
    },
    {
      date: "1970-07-01",
      imports: 32.27349802,
      exports: 0
    },
    {
      date: "1970-10-01",
      imports: 31.21012082,
      exports: 0
    },
    {
      date: "1971-01-01",
      imports: 30.27184682,
      exports: 0
    },
    {
      date: "1971-04-01",
      imports: 31.119421,
      exports: 0
    },
    {
      date: "1971-07-01",
      imports: 32.27349802,
      exports: 0
    },
    {
      date: "1971-10-01",
      imports: 31.21012082,
      exports: 0
    },
    {
      date: "1972-01-01",
      imports: 39.9501627,
      exports: 0
    },
    {
      date: "1972-04-01",
      imports: 41.1976307,
      exports: 0
    },
    {
      date: "1972-07-01",
      imports: 40.9481371,
      exports: 0
    },
    {
      date: "1972-10-01",
      imports: 41.44400563,
      exports: 0
    },
    {
      date: "1973-01-01",
      imports: 44.65623573,
      exports: 52.1894714
    },
    {
      date: "1973-04-01",
      imports: 48.71050673,
      exports: 53.7645207
    },
    {
      date: "1973-07-01",
      imports: 51.51730973,
      exports: 0
    },
    {
      date: "1973-10-01",
      imports: 58.9740497,
      exports: 70.1535472
    },
    {
      date: "1974-01-01",
      imports: 66.01912523,
      exports: 74.57645591
    },
    {
      date: "1974-04-01",
      imports: 69.4215942,
      exports: 74.66159371
    },
    {
      date: "1974-07-01",
      imports: 71.5111031,
      exports: 84.02675171
    },
    {
      date: "1974-10-01",
      imports: 73.8501056,
      exports: 78.83334591
    },
    {
      date: "1975-01-01",
      imports: 73.72224013,
      exports: 76.1131932
    },
    {
      date: "1975-04-01",
      imports: 73.87817363,
      exports: 85.8189024
    },
    {
      date: "1975-07-01",
      imports: 73.5382386,
      exports: 85.64436991
    },
    {
      date: "1975-10-01",
      imports: 75.06326823,
      exports: 79.6464119
    },
    {
      date: "1976-01-01",
      imports: 74.28360073,
      exports: 83.72876941
    },
    {
      date: "1976-04-01",
      imports: 75.06326823,
      exports: 81.732288
    },
    {
      date: "1976-07-01",
      imports: 78.2162436,
      exports: 94.2901135
    },
    {
      date: "1976-10-01",
      imports: 88.31761573,
      exports: 105.9497352
    },
    {
      date: "1977-01-01",
      imports: 78.4657372,
      exports: 82.157977
    },
    {
      date: "1977-04-01",
      imports: 84.0481565,
      exports: 85.1378
    },
    {
      date: "1977-07-01",
      imports: 86.82065413,
      exports: 98.6747102
    },
    {
      date: "1977-10-01",
      imports: 103.3496051,
      exports: 94.502958
    },
    {
      date: "1978-01-01",
      imports: 83.3620491,
      exports: 101.8205519
    },
    {
      date: "1978-04-01",
      imports: 81.36298163,
      exports: 103.2721514
    },
    {
      date: "1978-07-01",
      imports: 95.49055673,
      exports: 99.0152614
    },
    {
      date: "1978-10-01",
      imports: 106.6242086,
      exports: 106.9288199
    },
    {
      date: "1979-01-01",
      imports: 92.4685655,
      exports: 109.0189529
    },
    {
      date: "1979-04-01",
      imports: 94.3709542,
      exports: 113.0204295
    },
    {
      date: "1979-07-01",
      imports: 110.9279732,
      exports: 108.125006
    },
    {
      date: "1979-10-01",
      imports: 111.8043195,
      exports: 110.253451
    },
    {
      date: "1980-01-01",
      imports: 103.1656036,
      exports: 118.3841109
    },
    {
      date: "1980-04-01",
      imports: 105.0025002,
      exports: 117.9967339
    },
    {
      date: "1980-07-01",
      imports: 118.0728462,
      exports: 111.4836922
    },
    {
      date: "1980-10-01",
      imports: 117.5395536,
      exports: 115.1488745
    },
    {
      date: "1981-01-01",
      imports: 124.4016,
      exports: 125.8488
    },
    {
      date: "1981-04-01",
      imports: 130.38696,
      exports: 127.766496
    },
    {
      date: "1981-07-01",
      imports: 135.186984,
      exports: 131.1104784
    },
    {
      date: "1981-10-01",
      imports: 128.732184,
      exports: 129.44448
    },
    {
      date: "1982-01-01",
      imports: 131.4432,
      exports: 126.567936
    },
    {
      date: "1982-04-01",
      imports: 125.5752,
      exports: 132.44088
    },
    {
      date: "1982-07-01",
      imports: 132.96888,
      exports: 132.0693264
    },
    {
      date: "1982-10-01",
      imports: 134.3772,
      exports: 138.43368
    },
    {
      date: "1983-01-01",
      imports: 127.45296,
      exports: 121.414128
    },
    {
      date: "1983-04-01",
      imports: 131.079384,
      exports: 124.65024
    },
    {
      date: "1983-07-01",
      imports: 131.666184,
      exports: 124.8779664
    },
    {
      date: "1983-10-01",
      imports: 128.732184,
      exports: 125.4772464
    },
    {
      date: "1984-01-01",
      imports: 119.82456,
      exports: 130.403328
    },
    {
      date: "1984-04-01",
      imports: 127.558584,
      exports: 122.7205584
    },
    {
      date: "1984-07-01",
      imports: 125.34048,
      exports: 127.5147984
    },
    {
      date: "1984-10-01",
      imports: 131.4432,
      exports: 127.766496
    },
    {
      date: "1985-01-01",
      imports: 128.86128,
      exports: 129.3126384
    },
    {
      date: "1985-04-01",
      imports: 123.228,
      exports: 119.7241584
    },
    {
      date: "1985-07-01",
      imports: 130.03488,
      exports: 127.04736
    },
    {
      date: "1985-10-01",
      imports: 128.03976,
      exports: 133.2678864
    },
    {
      date: "1986-01-01",
      imports: 119.343384,
      exports: 132.800448
    },
    {
      date: "1986-04-01",
      imports: 120.64608,
      exports: 134.957856
    },
    {
      date: "1986-07-01",
      imports: 116.996184,
      exports: 136.995408
    },
    {
      date: "1986-10-01",
      imports: 123.8148,
      exports: 134.4664464
    },
    {
      date: "1987-01-01",
      imports: 121.925304,
      exports: 145.385328
    },
    {
      date: "1987-04-01",
      imports: 122.40648,
      exports: 140.351376
    },
    {
      date: "1987-07-01",
      imports: 133.90776,
      exports: 140.591088
    },
    {
      date: "1987-10-01",
      imports: 126.27936,
      exports: 136.5039984
    },
    {
      date: "1988-01-01",
      imports: 125.211384,
      exports: 143.587488
    },
    {
      date: "1988-04-01",
      imports: 121.58496,
      exports: 136.8635664
    },
    {
      date: "1989-01-01",
      imports: 122.17176,
      exports: 140.591088
    },
    {
      date: "1989-04-01",
      imports: 122.17176,
      exports: 135.557136
    },
    {
      date: "1989-07-01",
      imports: 132.73416,
      exports: 160.00776
    }
  ],
  Mauritius: [
    {
      date: "1984-01-01",
      imports: 43.75565225,
      exports: 28.72035739
    },
    {
      date: "1984-04-01",
      imports: 44.87021017,
      exports: 30.87589386
    },
    {
      date: "1984-07-01",
      imports: 45.85727254,
      exports: 33.1837094
    },
    {
      date: "1984-10-01",
      imports: 47.0911005,
      exports: 32.58246963
    },
    {
      date: "1985-01-01",
      imports: 49.39424603,
      exports: 33.57753457
    },
    {
      date: "1985-04-01",
      imports: 50.04945872,
      exports: 34.14466474
    },
    {
      date: "1985-07-01",
      imports: 49.7976571,
      exports: 35.94175236
    },
    {
      date: "1985-10-01",
      imports: 46.90660141,
      exports: 36.66497055
    },
    {
      date: "1986-01-01",
      imports: 42.43323674,
      exports: 36.70880195
    },
    {
      date: "1986-04-01",
      imports: 40.93797031,
      exports: 36.94987468
    },
    {
      date: "1986-07-01",
      imports: 37.82930827,
      exports: 37.32244163
    },
    {
      date: "1986-10-01",
      imports: 38.95153527,
      exports: 40.10573587
    },
    {
      date: "1987-01-01",
      imports: 40.25717332,
      exports: 40.30078562
    },
    {
      date: "1989-01-01",
      imports: 51.81250531,
      exports: 48.48054134
    },
    {
      date: "1989-04-01",
      imports: 54.54470837,
      exports: 49.84124787
    },
    {
      date: "1989-07-01",
      imports: 54.54470837,
      exports: 52.10073687
    },
    {
      date: "1989-10-01",
      imports: 53.65053282,
      exports: 49.84124787
    },
    {
      date: "1990-01-01",
      imports: 54.39567911,
      exports: 53.92694826
    },
    {
      date: "1991-01-01",
      imports: 60.52279145,
      exports: 63.3293201
    },
    {
      date: "1991-04-01",
      imports: 60.98661206,
      exports: 65.25420629
    },
    {
      date: "1991-07-01",
      imports: 63.77533346,
      exports: 67.22989593
    },
    {
      date: "1991-10-01",
      imports: 61.92005103,
      exports: 64.28894078
    },
    {
      date: "1992-01-01",
      imports: 60.23290358,
      exports: 61.41572357
    },
    {
      date: "1992-04-01",
      imports: 62.9636474,
      exports: 65.47999939
    },
    {
      date: "1992-07-01",
      imports: 60.69672418,
      exports: 63.22206838
    },
    {
      date: "1992-10-01",
      imports: 63.88549086,
      exports: 66.82911317
    },
    {
      date: "1993-01-01",
      imports: 65.91470601,
      exports: 66.04448215
    },
    {
      date: "1993-04-01",
      imports: 66.5582571,
      exports: 70.56034417
    },
    {
      date: "1993-07-01",
      imports: 70.21084438,
      exports: 71.1812752
    },
    {
      date: "1993-10-01",
      imports: 70.84279996,
      exports: 71.1812752
    },
    {
      date: "1994-01-01",
      imports: 71.89219408,
      exports: 68.75399936
    },
    {
      date: "1994-04-01",
      imports: 72.52994742,
      exports: 74.56817172
    },
    {
      date: "1994-07-01",
      imports: 73.161903,
      exports: 72.59248209
    },
    {
      date: "1994-10-01",
      imports: 75.77089391,
      exports: 75.86083723
    },
    {
      date: "1995-01-01",
      imports: 76.414445,
      exports: 73.72144759
    },
    {
      date: "1995-04-01",
      imports: 77.62617634,
      exports: 77.55428549
    },
    {
      date: "1995-07-01",
      imports: 79.3133238,
      exports: 80.32589581
    },
    {
      date: "1995-10-01",
      imports: 78.03781713,
      exports: 79.02758548
    },
    {
      date: "1996-01-01",
      imports: 81.75397798,
      exports: 79.65039911
    },
    {
      date: "1996-04-01",
      imports: 83.6120584,
      exports: 85.43148273
    },
    {
      date: "1996-07-01",
      imports: 84.23167867,
      exports: 89.28579756
    },
    {
      date: "1996-10-01",
      imports: 84.23167867,
      exports: 91.21256636
    },
    {
      date: "1997-01-01",
      imports: 84.85051856,
      exports: 86.71625434
    },
    {
      date: "1997-04-01",
      imports: 82.99243814,
      exports: 88.64380037
    },
    {
      date: "1997-07-01",
      imports: 85.47013883,
      exports: 89.28579756
    },
    {
      date: "1997-10-01",
      imports: 88.56667941,
      exports: 92.49733797
    },
    {
      date: "1998-01-01",
      imports: 83.6120584,
      exports: 95.06688118
    },
    {
      date: "1998-04-01",
      imports: 87.94705914,
      exports: 100.8479648
    },
    {
      date: "1998-07-01",
      imports: 85.47013883,
      exports: 104.0595052
    },
    {
      date: "1998-10-01",
      imports: 86.70859899,
      exports: 104.0595052
    },
    {
      date: "1999-01-01",
      imports: 96.58116323,
      exports: 100.8930445
    },
    {
      date: "1999-04-01",
      imports: 94.01684056,
      exports: 101.786089
    },
    {
      date: "1999-07-01",
      imports: 96.58116323,
      exports: 100.8930445
    },
    {
      date: "1999-10-01",
      imports: 97.43567733,
      exports: 100.8930445
    },
    {
      date: "2000-01-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-04-01",
      imports: 100,
      exports: 100
    }
  ],
  Morocco: [
    {
      date: "1957-01-01",
      imports: 12.66292225,
      exports: 13.75195158
    },
    {
      date: "1957-04-01",
      imports: 12.91016097,
      exports: 14.02998482
    },
    {
      date: "1957-07-01",
      imports: 12.91016097,
      exports: 14.30801805
    },
    {
      date: "1957-10-01",
      imports: 13.03915509,
      exports: 15.00310114
    },
    {
      date: "1959-01-01",
      imports: 12.91016097,
      exports: 14.86408452
    },
    {
      date: "1959-04-01",
      imports: 13.15739969,
      exports: 15.14211776
    },
    {
      date: "1959-07-01",
      imports: 12.79191637,
      exports: 15.42015099
    },
    {
      date: "1959-10-01",
      imports: 14.5118379,
      exports: 16.2542507
    },
    {
      date: "1960-01-01",
      imports: 15.12455994,
      exports: 15.14211776
    },
    {
      date: "1960-04-01",
      imports: 14.75907662,
      exports: 13.47391834
    },
    {
      date: "1960-07-01",
      imports: 15.37179866,
      exports: 14.7250679
    },
    {
      date: "1960-10-01",
      imports: 15.12455994,
      exports: 14.7250679
    },
    {
      date: "1961-01-01",
      imports: 15.61903738,
      exports: 16.11523408
    },
    {
      date: "1961-04-01",
      imports: 15.50079278,
      exports: 16.11523408
    },
    {
      date: "1961-07-01",
      imports: 15.8662761,
      exports: 16.81031717
    },
    {
      date: "1961-10-01",
      imports: 15.7480315,
      exports: 17.36638364
    },
    {
      date: "1962-01-01",
      imports: 15.99527022,
      exports: 17.22736703
    },
    {
      date: "1962-04-01",
      imports: 14.64083201,
      exports: 17.64441688
    },
    {
      date: "1962-07-01",
      imports: 15.7480315,
      exports: 17.08835041
    },
    {
      date: "1962-10-01",
      imports: 15.37179866,
      exports: 18.20048335
    },
    {
      date: "1963-01-01",
      imports: 15.50079278,
      exports: 16.39326732
    },
    {
      date: "1963-04-01",
      imports: 15.7480315,
      exports: 16.39326732
    },
    {
      date: "1963-07-01",
      imports: 15.50079278,
      exports: 17.08835041
    },
    {
      date: "1963-10-01",
      imports: 15.7480315,
      exports: 19.59064953
    },
    {
      date: "1964-01-01",
      imports: 16.85523098,
      exports: 18.06146673
    },
    {
      date: "1964-04-01",
      imports: 17.1024697,
      exports: 18.6175332
    },
    {
      date: "1964-07-01",
      imports: 17.33895891,
      exports: 17.22736703
    },
    {
      date: "1964-10-01",
      imports: 18.32791379,
      exports: 18.47851659
    },
    {
      date: "1965-01-01",
      imports: 17.83343635,
      exports: 19.03458306
    },
    {
      date: "1965-04-01",
      imports: 20.04783532,
      exports: 17.92245011
    },
    {
      date: "1965-07-01",
      imports: 19.31686867,
      exports: 16.81031717
    },
    {
      date: "1965-10-01",
      imports: 19.8005966,
      exports: 19.72966615
    },
    {
      date: "1966-01-01",
      imports: 17.2207143,
      exports: 19.03458306
    },
    {
      date: "1966-04-01",
      imports: 17.1024697,
      exports: 20.70278247
    },
    {
      date: "1966-07-01",
      imports: 16.23175943,
      exports: 19.45163291
    },
    {
      date: "1966-10-01",
      imports: 17.46795302,
      exports: 19.03458306
    },
    {
      date: "1967-01-01",
      imports: 16.23175943,
      exports: 19.31261629
    },
    {
      date: "1967-04-01",
      imports: 16.36075354,
      exports: 21.25884894
    },
    {
      date: "1967-07-01",
      imports: 16.36075354,
      exports: 18.6175332
    },
    {
      date: "1967-10-01",
      imports: 15.50079278,
      exports: 20.84179909
    },
    {
      date: "1968-01-01",
      imports: 16.23175943,
      exports: 18.89556644
    },
    {
      date: "1968-04-01",
      imports: 16.47899815,
      exports: 20.98081571
    },
    {
      date: "1968-07-01",
      imports: 16.97347559,
      exports: 18.75654982
    },
    {
      date: "1968-10-01",
      imports: 16.36075354,
      exports: 20.98081571
    },
    {
      date: "1969-01-01",
      imports: 16.60799226,
      exports: 18.33949997
    },
    {
      date: "1969-04-01",
      imports: 15.61903738,
      exports: 19.72966615
    },
    {
      date: "1969-07-01",
      imports: 15.7480315,
      exports: 17.92245011
    },
    {
      date: "1969-10-01",
      imports: 16.11351482,
      exports: 20.70278247
    },
    {
      date: "1970-01-01",
      imports: 16.72623687,
      exports: 18.75654982
    },
    {
      date: "1970-04-01",
      imports: 16.97347559,
      exports: 17.64441688
    },
    {
      date: "1970-07-01",
      imports: 16.72623687,
      exports: 17.50540026
    },
    {
      date: "1970-10-01",
      imports: 16.47899815,
      exports: 21.25884894
    },
    {
      date: "1971-01-01",
      imports: 17.2207143,
      exports: 18.20048335
    },
    {
      date: "1971-04-01",
      imports: 17.83343635,
      exports: 19.31261629
    },
    {
      date: "1971-07-01",
      imports: 18.08067507,
      exports: 18.20048335
    },
    {
      date: "1971-10-01",
      imports: 17.71519174,
      exports: 19.86868276
    },
    {
      date: "1972-01-01",
      imports: 18.32791379,
      exports: 18.75654982
    },
    {
      date: "1972-04-01",
      imports: 18.94063583,
      exports: 20.42474924
    },
    {
      date: "1972-07-01",
      imports: 18.44615839,
      exports: 18.75654982
    },
    {
      date: "1972-10-01",
      imports: 20.04783532,
      exports: 19.59064953
    },
    {
      date: "1973-01-01",
      imports: 19.31686867,
      exports: 19.17359967
    },
    {
      date: "1973-04-01",
      imports: 20.27357502,
      exports: 19.86868276
    },
    {
      date: "1973-07-01",
      imports: 22.1654887,
      exports: 18.47851659
    },
    {
      date: "1973-10-01",
      imports: 23.87466072,
      exports: 20.28573262
    },
    {
      date: "1974-01-01",
      imports: 27.28225525,
      exports: 33.26774601
    },
    {
      date: "1974-04-01",
      imports: 30.31361694,
      exports: 36.37957953
    },
    {
      date: "1974-07-01",
      imports: 31.82929779,
      exports: 53.30752615
    },
    {
      date: "1974-10-01",
      imports: 34.29093548,
      exports: 51.94944073
    },
    {
      date: "1975-01-01",
      imports: 35.23689232,
      exports: 48.44194452
    },
    {
      date: "1975-04-01",
      imports: 31.06608261,
      exports: 47.27634365
    },
    {
      date: "1975-07-01",
      imports: 27.46499691,
      exports: 49.03009175
    },
    {
      date: "1975-10-01",
      imports: 30.31361694,
      exports: 41.63013025
    },
    {
      date: "1976-01-01",
      imports: 32.20553062,
      exports: 34.81831597
    },
    {
      date: "1976-04-01",
      imports: 29.74389293,
      exports: 34.81831597
    },
    {
      date: "1976-07-01",
      imports: 29.93738411,
      exports: 39.49141305
    },
    {
      date: "1976-10-01",
      imports: 32.39902179,
      exports: 37.5451804
    },
    {
      date: "1977-01-01",
      imports: 23.11144554,
      exports: 34.24086233
    },
    {
      date: "1977-04-01",
      imports: 25.39034157,
      exports: 36.18709498
    },
    {
      date: "1977-07-01",
      imports: 22.54172153,
      exports: 31.32151336
    },
    {
      date: "1977-10-01",
      imports: 25.19685039,
      exports: 38.71078127
    },
    {
      date: "1978-01-01",
      imports: 30.31361694,
      exports: 36.37957953
    },
    {
      date: "1978-04-01",
      imports: 30.88334095,
      exports: 35.59894775
    },
    {
      date: "1978-07-01",
      imports: 34.66716831,
      exports: 39.6838976
    },
    {
      date: "1978-10-01",
      imports: 0,
      exports: 40.07956028
    },
    {
      date: "1979-01-01",
      imports: 0,
      exports: 0
    },
    {
      date: "1979-04-01",
      imports: 0,
      exports: 0
    },
    {
      date: "1979-07-01",
      imports: 0,
      exports: 0
    },
    {
      date: "1979-10-01",
      imports: 0,
      exports: 0
    },
    {
      date: "1980-01-01",
      imports: 0,
      exports: 0
    },
    {
      date: "1980-04-01",
      imports: 0,
      exports: 0
    },
    {
      date: "1980-07-01",
      imports: 0,
      exports: 0
    },
    {
      date: "1980-10-01",
      imports: 0,
      exports: 0
    },
    {
      date: "1981-01-01",
      imports: 0,
      exports: 0
    },
    {
      date: "1981-04-01",
      imports: 0,
      exports: 0
    },
    {
      date: "1981-07-01",
      imports: 0,
      exports: 0
    },
    {
      date: "1981-10-01",
      imports: 0,
      exports: 0
    },
    {
      date: "1982-01-01",
      imports: 0,
      exports: 0
    },
    {
      date: "1982-04-01",
      imports: 0,
      exports: 0
    },
    {
      date: "1982-07-01",
      imports: 0,
      exports: 0
    },
    {
      date: "1982-10-01",
      imports: 0,
      exports: 0
    },
    {
      date: "1983-01-01",
      imports: 0,
      exports: 0
    },
    {
      date: "1983-04-01",
      imports: 0,
      exports: 0
    },
    {
      date: "1983-07-01",
      imports: 0,
      exports: 0
    },
    {
      date: "1983-10-01",
      imports: 0,
      exports: 0
    },
    {
      date: "1984-01-01",
      imports: 77.35347075,
      exports: 83.17471181
    },
    {
      date: "1984-04-01",
      imports: 84.13641128,
      exports: 84.92845991
    },
    {
      date: "1984-07-01",
      imports: 84.19015882,
      exports: 92.72408409
    },
    {
      date: "1984-10-01",
      imports: 83.39469512,
      exports: 94.80933336
    },
    {
      date: "1985-01-01",
      imports: 80.54607509,
      exports: 88.99202258
    },
    {
      date: "1985-04-01",
      imports: 102.6148182,
      exports: 101.6425348
    },
    {
      date: "1985-07-01",
      imports: 103.6575206,
      exports: 105.7488718
    },
    {
      date: "1985-10-01",
      imports: 94.1764532,
      exports: 102.85091
    },
    {
      date: "1986-01-01",
      imports: 89.34992341,
      exports: 98.54139487
    },
    {
      date: "1986-04-01",
      imports: 85.54459703,
      exports: 96.92666339
    },
    {
      date: "1986-07-01",
      imports: 83.8246755,
      exports: 101.3965823
    },
    {
      date: "1986-10-01",
      imports: 83.36244659,
      exports: 95.57927155
    },
    {
      date: "1987-01-01",
      imports: 82.78197307,
      exports: 100.3699981
    },
    {
      date: "1987-04-01",
      imports: 62.51914756,
      exports: 94.5526873
    },
    {
      date: "1987-07-01",
      imports: 87.2000215,
      exports: 103.6636226
    },
    {
      date: "1987-10-01",
      imports: 44.2234823,
      exports: 76.07417071
    },
    {
      date: "1988-01-01",
      imports: 81.8037677,
      exports: 104.7971427
    },
    {
      date: "1988-04-01",
      imports: 85.69509016,
      exports: 103.9202686
    },
    {
      date: "1988-07-01",
      imports: 86.071323,
      exports: 132.19411
    },
    {
      date: "1988-10-01",
      imports: 80.94380694,
      exports: 113.3520115
    },
    {
      date: "1989-01-01",
      imports: 92.51027922,
      exports: 87.12064504
    },
    {
      date: "1989-04-01",
      imports: 79.68611432,
      exports: 85.98712492
    },
    {
      date: "1989-07-01",
      imports: 94.01521056,
      exports: 104.6153517
    },
    {
      date: "1989-10-01",
      imports: 88.73720137,
      exports: 92.57437389
    },
    {
      date: "1990-01-01",
      imports: 94.87517132,
      exports: 108.7109952
    },
    {
      date: "1990-04-01",
      imports: 101.2281315,
      exports: 118.4421584
    },
    {
      date: "1990-07-01",
      imports: 106.936121,
      exports: 112.2184914
    },
    {
      date: "1990-10-01",
      imports: 103.8402623,
      exports: 108.63614
    },
    {
      date: "1991-01-01",
      imports: 96.41235119,
      exports: 114.5924674
    },
    {
      date: "1991-04-01",
      imports: 98.16452124,
      exports: 113.8973844
    },
    {
      date: "1991-07-01",
      imports: 99.07822956,
      exports: 125.8314263
    },
    {
      date: "1991-10-01",
      imports: 102.0558437,
      exports: 105.9627436
    },
    {
      date: "1992-01-01",
      imports: 92.20929295,
      exports: 114.1219497
    },
    {
      date: "1992-04-01",
      imports: 86.28631319,
      exports: 109.3312231
    },
    {
      date: "1992-07-01",
      imports: 97.33680901,
      exports: 128.7186945
    },
    {
      date: "1992-10-01",
      imports: 0,
      exports: 82.22298266
    },
    {
      date: "1995-07-01",
      imports: 112.2356293,
      exports: 132.2521237
    },
    {
      date: "1995-10-01",
      imports: 114.9337562,
      exports: 101.2682593
    },
    {
      date: "1996-01-01",
      imports: 116.9654135,
      exports: 104.7757555
    },
    {
      date: "1996-04-01",
      imports: 116.0624547,
      exports: 106.4760357
    },
    {
      date: "1996-07-01",
      imports: 115.1594959,
      exports: 101.9847296
    },
    {
      date: "1996-10-01",
      imports: 115.2777405,
      exports: 104.3266249
    },
    {
      date: "1997-01-01",
      imports: 113.8158072,
      exports: 110.3471138
    },
    {
      date: "1997-04-01",
      imports: 115.6109753,
      exports: 108.2725581
    },
    {
      date: "1997-07-01",
      imports: 110.773696,
      exports: 106.572278
    },
    {
      date: "1997-10-01",
      imports: 113.3643278,
      exports: 107.2887482
    },
    {
      date: "2012-01-01",
      imports: 125.6413426,
      exports: 146.8945826
    },
    {
      date: "2012-04-01",
      imports: 130.3743517,
      exports: 153.5192592
    },
    {
      date: "2012-07-01",
      imports: 131.6567682,
      exports: 153.8304425
    },
    {
      date: "2012-10-01",
      imports: 143.8950848,
      exports: 149.4621126
    },
    {
      date: "2013-01-01",
      imports: 128.6985031,
      exports: 131.4701542
    },
    {
      date: "2013-04-01",
      imports: 139.0535057,
      exports: 132.0914516
    },
    {
      date: "2013-07-01",
      imports: 135.9071242,
      exports: 121.7806959
    },
    {
      date: "2013-10-01",
      imports: 130.6387896,
      exports: 119.3725004
    }
  ],
  Netherlands: [
    {
      date: "1957-01-01",
      imports: 46.20484668,
      exports: 45.59231672
    },
    {
      date: "1957-04-01",
      imports: 47.60688181,
      exports: 46.31651143
    },
    {
      date: "1957-07-01",
      imports: 47.04606776,
      exports: 46.61470925
    },
    {
      date: "1957-10-01",
      imports: 45.50902184,
      exports: 46.17806244
    },
    {
      date: "1958-01-01",
      imports: 44.81319699,
      exports: 45.01722092
    },
    {
      date: "1958-04-01",
      imports: 44.53278997,
      exports: 44.7190231
    },
    {
      date: "1958-07-01",
      imports: 43.5565581,
      exports: 43.4197326
    },
    {
      date: "1958-10-01",
      imports: 42.99574404,
      exports: 43.9948284
    },
    {
      date: "1959-01-01",
      imports: 42.86073325,
      exports: 44.14392731
    },
    {
      date: "1959-04-01",
      imports: 42.71533702,
      exports: 43.7072805
    },
    {
      date: "1959-07-01",
      imports: 42.2999192,
      exports: 44.43147521
    },
    {
      date: "1959-10-01",
      imports: 42.58032623,
      exports: 44.7190231
    },
    {
      date: "1960-01-01",
      imports: 42.43492999,
      exports: 43.9948284
    },
    {
      date: "1960-04-01",
      imports: 42.71533702,
      exports: 43.27063369
    },
    {
      date: "1960-07-01",
      imports: 42.43492999,
      exports: 44.14392731
    },
    {
      date: "1960-10-01",
      imports: 42.43492999,
      exports: 43.9948284
    },
    {
      date: "1961-01-01",
      imports: 42.58032623,
      exports: 43.85637941
    },
    {
      date: "1961-04-01",
      imports: 41.45869812,
      exports: 42.83398688
    },
    {
      date: "1961-07-01",
      imports: 41.1782911,
      exports: 42.54643899
    },
    {
      date: "1961-10-01",
      imports: 41.45869812,
      exports: 42.54643899
    },
    {
      date: "1962-01-01",
      imports: 41.60409436,
      exports: 42.68488797
    },
    {
      date: "1962-04-01",
      imports: 41.73910515,
      exports: 43.55818159
    },
    {
      date: "1962-07-01",
      imports: 41.1782911,
      exports: 41.96069327
    },
    {
      date: "1962-10-01",
      imports: 40.89788407,
      exports: 42.54643899
    },
    {
      date: "1963-01-01",
      imports: 41.32368733,
      exports: 43.9948284
    },
    {
      date: "1963-04-01",
      imports: 41.73910515,
      exports: 42.98308579
    },
    {
      date: "1963-07-01",
      imports: 42.15452297,
      exports: 43.55818159
    },
    {
      date: "1963-10-01",
      imports: 42.15452297,
      exports: 43.4197326
    },
    {
      date: "1964-01-01",
      imports: 42.71533702,
      exports: 43.85637941
    },
    {
      date: "1964-04-01",
      imports: 42.86073325,
      exports: 44.14392731
    },
    {
      date: "1964-07-01",
      imports: 42.99574404,
      exports: 44.2823763
    },
    {
      date: "1964-10-01",
      imports: 42.71533702,
      exports: 45.30476882
    },
    {
      date: "1965-01-01",
      imports: 43.41116186,
      exports: 44.43147521
    },
    {
      date: "1965-04-01",
      imports: 42.86073325,
      exports: 45.01722092
    },
    {
      date: "1965-07-01",
      imports: 42.99574404,
      exports: 45.87986462
    },
    {
      date: "1965-10-01",
      imports: 43.14114028,
      exports: 46.17806244
    },
    {
      date: "1966-01-01",
      imports: 43.41116186,
      exports: 45.87986462
    },
    {
      date: "1966-04-01",
      imports: 43.41116186,
      exports: 45.59231672
    },
    {
      date: "1966-07-01",
      imports: 43.27615107,
      exports: 44.7190231
    },
    {
      date: "1966-10-01",
      imports: 43.27615107,
      exports: 45.45386773
    },
    {
      date: "1967-01-01",
      imports: 43.41116186,
      exports: 45.15566991
    },
    {
      date: "1967-04-01",
      imports: 42.99574404,
      exports: 44.7190231
    },
    {
      date: "1967-07-01",
      imports: 42.86073325,
      exports: 45.15566991
    },
    {
      date: "1967-10-01",
      imports: 42.86073325,
      exports: 45.30476882
    },
    {
      date: "1968-01-01",
      imports: 42.71533702,
      exports: 45.01722092
    },
    {
      date: "1968-04-01",
      imports: 41.88450138,
      exports: 44.2823763
    },
    {
      date: "1968-07-01",
      imports: 42.15452297,
      exports: 44.58057412
    },
    {
      date: "1968-10-01",
      imports: 41.88450138,
      exports: 45.15566991
    },
    {
      date: "1969-01-01",
      imports: 42.99574404,
      exports: 45.01722092
    },
    {
      date: "1969-04-01",
      imports: 43.14114028,
      exports: 45.74141563
    },
    {
      date: "1969-07-01",
      imports: 43.41116186,
      exports: 45.74141563
    },
    {
      date: "1969-10-01",
      imports: 44.66780076,
      exports: 46.17806244
    },
    {
      date: "1970-01-01",
      imports: 45.92443965,
      exports: 47.05135605
    },
    {
      date: "1970-04-01",
      imports: 45.92443965,
      exports: 47.05135605
    },
    {
      date: "1970-07-01",
      imports: 46.48525371,
      exports: 47.33890395
    },
    {
      date: "1970-10-01",
      imports: 46.76566073,
      exports: 47.62645185
    },
    {
      date: "1971-01-01",
      imports: 48.78043714,
      exports: 47.79685061
    },
    {
      date: "1971-04-01",
      imports: 49.21662585,
      exports: 48.40389617
    },
    {
      date: "1971-07-01",
      imports: 48.78043714,
      exports: 48.86184282
    },
    {
      date: "1971-10-01",
      imports: 47.76266349,
      exports: 48.71274391
    },
    {
      date: "1972-01-01",
      imports: 48.05345596,
      exports: 48.71274391
    },
    {
      date: "1972-04-01",
      imports: 47.90805973,
      exports: 48.25479726
    },
    {
      date: "1972-07-01",
      imports: 48.1988522,
      exports: 49.01094173
    },
    {
      date: "1972-10-01",
      imports: 48.34424844,
      exports: 49.62863721
    },
    {
      date: "1973-01-01",
      imports: 50.18247228,
      exports: 50.50193083
    },
    {
      date: "1973-04-01",
      imports: 51.2625586,
      exports: 51.60952273
    },
    {
      date: "1973-07-01",
      imports: 53.59928382,
      exports: 52.55736581
    },
    {
      date: "1973-10-01",
      imports: 54.36780678,
      exports: 54.6234507
    },
    {
      date: "1974-01-01",
      imports: 64.94019022,
      exports: 62.05709636
    },
    {
      date: "1974-04-01",
      imports: 70.68334154,
      exports: 66.17861623
    },
    {
      date: "1974-07-01",
      imports: 72.55272171,
      exports: 68.87304654
    },
    {
      date: "1974-10-01",
      imports: 73.33163012,
      exports: 69.98063844
    },
    {
      date: "1975-01-01",
      imports: 73.33163012,
      exports: 70.44923502
    },
    {
      date: "1975-04-01",
      imports: 72.39694003,
      exports: 69.82088961
    },
    {
      date: "1975-07-01",
      imports: 73.02006676,
      exports: 69.02214545
    },
    {
      date: "1975-10-01",
      imports: 74.41171644,
      exports: 70.92848151
    },
    {
      date: "1976-01-01",
      imports: 76.12531494,
      exports: 73.30341415
    },
    {
      date: "1976-04-01",
      imports: 77.51696463,
      exports: 74.25125722
    },
    {
      date: "1976-07-01",
      imports: 79.07478144,
      exports: 75.51859796
    },
    {
      date: "1976-10-01",
      imports: 78.14009135,
      exports: 75.35884913
    },
    {
      date: "1977-01-01",
      imports: 80.12371143,
      exports: 76.12564352
    },
    {
      date: "1977-04-01",
      imports: 81.59844468,
      exports: 77.29713496
    },
    {
      date: "1977-07-01",
      imports: 81.11032874,
      exports: 76.5942401
    },
    {
      date: "1977-10-01",
      imports: 79.88484618,
      exports: 76.82853838
    },
    {
      date: "1978-01-01",
      imports: 79.03323966,
      exports: 75.77419609
    },
    {
      date: "1978-04-01",
      imports: 79.03323966,
      exports: 75.46534835
    },
    {
      date: "1978-07-01",
      imports: 79.69790816,
      exports: 75.77419609
    },
    {
      date: "1978-10-01",
      imports: 78.3581857,
      exports: 75.15650061
    },
    {
      date: "1979-01-01",
      imports: 81.03763062,
      exports: 76.39189158
    },
    {
      date: "1979-04-01",
      imports: 85.73185195,
      exports: 80.41756215
    },
    {
      date: "1979-07-01",
      imports: 90.41568784,
      exports: 84.4325828
    },
    {
      date: "1979-10-01",
      imports: 92.4200788,
      exports: 86.91401466
    },
    {
      date: "1980-01-01",
      imports: 98.45402259,
      exports: 90.31133982
    },
    {
      date: "1980-04-01",
      imports: 100.4584136,
      exports: 93.71931491
    },
    {
      date: "1980-07-01",
      imports: 100.4584136,
      exports: 92.79277168
    },
    {
      date: "1980-10-01",
      imports: 105.1526349,
      exports: 95.88124911
    },
    {
      date: "1981-01-01",
      imports: 112.8586354,
      exports: 100.8334629
    },
    {
      date: "1981-04-01",
      imports: 118.8821937,
      exports: 107.6387632
    },
    {
      date: "1981-07-01",
      imports: 121.2293044,
      exports: 111.0360883
    },
    {
      date: "1981-10-01",
      imports: 116.5350831,
      exports: 111.6537838
    },
    {
      date: "1982-01-01",
      imports: 118.8821937,
      exports: 113.1980225
    },
    {
      date: "1982-04-01",
      imports: 118.2071398,
      exports: 112.2714793
    },
    {
      date: "1982-07-01",
      imports: 120.2219162,
      exports: 112.2714793
    },
    {
      date: "1982-10-01",
      imports: 118.8821937,
      exports: 111.6537838
    },
    {
      date: "1983-01-01",
      imports: 117.8748055,
      exports: 110.1095451
    },
    {
      date: "1983-04-01",
      imports: 117.210137,
      exports: 109.4918496
    },
    {
      date: "1983-07-01",
      imports: 121.5616387,
      exports: 113.1980225
    },
    {
      date: "1983-10-01",
      imports: 123.5660296,
      exports: 115.6794544
    },
    {
      date: "1984-01-01",
      imports: 125.9131403,
      exports: 119.3856273
    },
    {
      date: "1984-04-01",
      imports: 125.580806,
      exports: 120.3121705
    },
    {
      date: "1984-07-01",
      imports: 127.2528628,
      exports: 120.9405159
    },
    {
      date: "1984-10-01",
      imports: 128.260251,
      exports: 122.4847546
    },
    {
      date: "1985-01-01",
      imports: 133.6191408,
      exports: 124.3378411
    },
    {
      date: "1985-04-01",
      imports: 131.6043644,
      exports: 124.9555366
    },
    {
      date: "1985-07-01",
      imports: 127.585197,
      exports: 123.7201456
    },
    {
      date: "1985-10-01",
      imports: 123.2336954,
      exports: 120.6210183
    },
    {
      date: "1986-01-01",
      imports: 116.5350831,
      exports: 113.8263679
    },
    {
      date: "1986-04-01",
      imports: 106.1600231,
      exports: 106.7122199
    },
    {
      date: "1986-07-01",
      imports: 101.798136,
      exports: 101.1423107
    },
    {
      date: "1986-10-01",
      imports: 102.1408557,
      exports: 96.49894459
    },
    {
      date: "1987-01-01",
      imports: 101.4658018,
      exports: 93.41046717
    },
    {
      date: "1987-04-01",
      imports: 99.79374505,
      exports: 94.95470588
    },
    {
      date: "1987-07-01",
      imports: 100.4584136,
      exports: 96.19009685
    },
    {
      date: "1987-10-01",
      imports: 98.12168834,
      exports: 94.95470588
    },
    {
      date: "1988-01-01",
      imports: 97.11430014,
      exports: 93.71931491
    },
    {
      date: "1988-04-01",
      imports: 97.77896864,
      exports: 93.71931491
    },
    {
      date: "1988-07-01",
      imports: 101.5592708,
      exports: 96.85039202
    },
    {
      date: "1988-10-01",
      imports: 100.7076643,
      exports: 96.44569498
    },
    {
      date: "1989-01-01",
      imports: 106.6792954,
      exports: 100.1199181
    },
    {
      date: "1989-04-01",
      imports: 109.2445004,
      exports: 102.5694002
    },
    {
      date: "1989-07-01",
      imports: 110.5219102,
      exports: 102.5694002
    },
    {
      date: "1989-10-01",
      imports: 107.9567052,
      exports: 101.7600061
    },
    {
      date: "1990-01-01",
      imports: 105.4849691,
      exports: 100.279667
    },
    {
      date: "1990-04-01",
      imports: 102.8782223,
      exports: 99.71522108
    },
    {
      date: "1990-07-01",
      imports: 106.648139,
      exports: 99.84302015
    },
    {
      date: "1990-10-01",
      imports: 106.1496377,
      exports: 103.5172433
    },
    {
      date: "1991-01-01",
      imports: 103.4805782,
      exports: 100.7482635
    },
    {
      date: "1991-04-01",
      imports: 103.8544542,
      exports: 100.9506121
    },
    {
      date: "1991-07-01",
      imports: 106.0146269,
      exports: 99.67262139
    },
    {
      date: "1991-10-01",
      imports: 103.3455674,
      exports: 99.71522108
    },
    {
      date: "1992-01-01",
      imports: 102.5770444,
      exports: 97.5106872
    },
    {
      date: "1992-04-01",
      imports: 103.0132331,
      exports: 98.84192747
    },
    {
      date: "1992-07-01",
      imports: 101.7773651,
      exports: 97.54263696
    },
    {
      date: "1992-10-01",
      imports: 98.47479349,
      exports: 95.83864942
    },
    {
      date: "1993-01-01",
      imports: 98.74481507,
      exports: 93.43176701
    },
    {
      date: "1993-04-01",
      imports: 98.27747002,
      exports: 94.27311086
    },
    {
      date: "1993-07-01",
      imports: 97.47779072,
      exports: 93.4743667
    },
    {
      date: "1993-10-01",
      imports: 96.21076638,
      exports: 94.10271211
    },
    {
      date: "1994-01-01",
      imports: 97.04160202,
      exports: 92.60107309
    },
    {
      date: "1994-04-01",
      imports: 98.1113029,
      exports: 94.90145627
    },
    {
      date: "1994-07-01",
      imports: 97.47779072,
      exports: 93.63411553
    },
    {
      date: "1994-10-01",
      imports: 97.07275835,
      exports: 94.97600573
    },
    {
      date: "1995-01-01",
      imports: 97.91397943,
      exports: 95.21030401
    },
    {
      date: "1995-04-01",
      imports: 97.34277993,
      exports: 95.13575456
    },
    {
      date: "1995-07-01",
      imports: 96.97928934,
      exports: 94.36896016
    },
    {
      date: "1995-10-01",
      imports: 97.07275835,
      exports: 95.27420355
    },
    {
      date: "1996-01-01",
      imports: 96.54310064,
      exports: 94.07076234
    },
    {
      date: "1996-04-01",
      imports: 97.47779072,
      exports: 95.94514864
    },
    {
      date: "1996-07-01",
      imports: 97.27008182,
      exports: 95.50850183
    },
    {
      date: "1996-10-01",
      imports: 99.07714932,
      exports: 97.34028844
    },
    {
      date: "1997-01-01",
      imports: 98.00744844,
      exports: 96.30724599
    },
    {
      date: "1997-04-01",
      imports: 98.30862636,
      exports: 97.90473432
    },
    {
      date: "1997-07-01",
      imports: 100.0741521,
      exports: 98.84192747
    },
    {
      date: "1997-10-01",
      imports: 100.0118394,
      exports: 100.1092682
    },
    {
      date: "1998-01-01",
      imports: 97.67511419,
      exports: 97.13793992
    },
    {
      date: "1998-04-01",
      imports: 96.43924618,
      exports: 96.44569498
    },
    {
      date: "1998-07-01",
      imports: 94.83988759,
      exports: 94.7736572
    },
    {
      date: "1998-10-01",
      imports: 93.60401958,
      exports: 93.86841382
    },
    {
      date: "1999-01-01",
      imports: 91.13228357,
      exports: 90.70538694
    },
    {
      date: "1999-04-01",
      imports: 93.00166375,
      exports: 93.13356919
    },
    {
      date: "1999-07-01",
      imports: 94.76718947,
      exports: 94.57130868
    },
    {
      date: "1999-10-01",
      imports: 96.40808985,
      exports: 95.94514864
    },
    {
      date: "2000-01-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-04-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-07-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-10-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2001-01-01",
      imports: 98.91098219,
      exports: 100.6098145
    },
    {
      date: "2001-04-01",
      imports: 99.81451594,
      exports: 101.6109072
    },
    {
      date: "2001-07-01",
      imports: 98.91098219,
      exports: 99.98146914
    },
    {
      date: "2001-10-01",
      imports: 96.93774756,
      exports: 98.63957894
    },
    {
      date: "2002-01-01",
      imports: 93.87404116,
      exports: 96.10489747
    },
    {
      date: "2002-04-01",
      imports: 94.60102234,
      exports: 97.6065365
    },
    {
      date: "2002-07-01",
      imports: 94.26868809,
      exports: 97.07404039
    },
    {
      date: "2002-10-01",
      imports: 93.87404116,
      exports: 97.27638891
    },
    {
      date: "2003-01-01",
      imports: 93.40669612,
      exports: 96.87169187
    },
    {
      date: "2003-04-01",
      imports: 91.56847228,
      exports: 95.47655207
    },
    {
      date: "2003-07-01",
      imports: 91.67232673,
      exports: 94.7736572
    },
    {
      date: "2003-10-01",
      imports: 90.93496011,
      exports: 94.53935892
    },
    {
      date: "2004-01-01",
      imports: 91.03881456,
      exports: 94.20921133
    },
    {
      date: "2004-04-01",
      imports: 93.27168533,
      exports: 96.37114553
    },
    {
      date: "2004-07-01",
      imports: 94.23753175,
      exports: 96.47764475
    },
    {
      date: "2004-10-01",
      imports: 92.50316237,
      exports: 96.44569498
    },
    {
      date: "2005-01-01",
      imports: 93.63517592,
      exports: 97.77693525
    },
    {
      date: "2005-04-01",
      imports: 95.33838897,
      exports: 99.27857427
    },
    {
      date: "2005-07-01",
      imports: 97.14545647,
      exports: 99.74717085
    },
    {
      date: "2005-10-01",
      imports: 96.5119443,
      exports: 100.8760626
    },
    {
      date: "2006-01-01",
      imports: 98.8820068,
      exports: 102.6531086
    },
    {
      date: "2006-04-01",
      imports: 100.2836265,
      exports: 103.4539828
    },
    {
      date: "2006-07-01",
      imports: 100.0166167,
      exports: 102.7532179
    },
    {
      date: "2006-10-01",
      imports: 97.64717734,
      exports: 102.0523465
    },
    {
      date: "2007-01-01",
      imports: 99.74971077,
      exports: 103.9879699
    },
    {
      date: "2007-04-01",
      imports: 101.5183521,
      exports: 104.4218477
    },
    {
      date: "2007-07-01",
      imports: 100.8509834,
      exports: 103.554092
    },
    {
      date: "2007-10-01",
      imports: 101.0845521,
      exports: 105.0558375
    },
    {
      date: "2008-01-01",
      imports: 105.4558899,
      exports: 109.1936518
    },
    {
      date: "2008-04-01",
      imports: 109.2611171,
      exports: 110.8624946
    },
    {
      date: "2008-07-01",
      imports: 108.5268661,
      exports: 110.7293706
    },
    {
      date: "2008-10-01",
      imports: 100.1167324,
      exports: 105.7900432
    },
    {
      date: "2009-01-01",
      imports: 97.38027139,
      exports: 102.252565
    },
    {
      date: "2009-04-01",
      imports: 97.51372437,
      exports: 99.81639534
    },
    {
      date: "2009-07-01",
      imports: 96.14544193,
      exports: 98.31464982
    },
    {
      date: "2009-10-01",
      imports: 96.21222035,
      exports: 99.28251474
    },
    {
      date: "2010-01-01",
      imports: 101.6852462,
      exports: 104.8890598
    },
    {
      date: "2010-04-01",
      imports: 104.2439084,
      exports: 107.529069
    },
    {
      date: "2010-07-01",
      imports: 104.0019275,
      exports: 106.7473647
    },
    {
      date: "2010-10-01",
      imports: 106.3916185,
      exports: 108.488627
    },
    {
      date: "2011-01-01",
      imports: 110.9996407,
      exports: 112.2895842
    },
    {
      date: "2011-04-01",
      imports: 112.731933,
      exports: 113.3556414
    },
    {
      date: "2011-07-01",
      imports: 112.0392238,
      exports: 112.5739371
    },
    {
      date: "2011-10-01",
      imports: 113.4599527,
      exports: 114.5633425
    },
    {
      date: "2012-01-01",
      imports: 115.226517,
      exports: 116.7295367
    },
    {
      date: "2012-04-01",
      imports: 115.6419348,
      exports: 115.6996892
    },
    {
      date: "2012-07-01",
      imports: 116.8196443,
      exports: 116.3748943
    },
    {
      date: "2012-10-01",
      imports: 116.0230806,
      exports: 117.511241
    },
    {
      date: "2013-01-01",
      imports: 115.018808,
      exports: 117.0500994
    },
    {
      date: "2013-04-01",
      imports: 113.5284966,
      exports: 114.3854888
    },
    {
      date: "2013-07-01",
      imports: 113.7019336,
      exports: 114.0659912
    },
    {
      date: "2013-10-01",
      imports: 112.8710979,
      exports: 114.5984873
    },
    {
      date: "2014-01-01",
      imports: 111.6238059,
      exports: 113.8529927
    },
    {
      date: "2014-04-01",
      imports: 111.8657868,
      exports: 111.7208783
    },
    {
      date: "2014-07-01",
      imports: 111.0349512,
      exports: 111.8273775
    },
    {
      date: "2014-10-01",
      imports: 107.9515124,
      exports: 110.5845316
    },
    {
      date: "2015-01-01",
      imports: 105.2834915,
      exports: 108.0977748
    },
    {
      date: "2015-04-01",
      imports: 107.2577647,
      exports: 109.0924775
    },
    {
      date: "2015-07-01",
      imports: 104.8327632,
      exports: 107.8134219
    },
    {
      date: "2015-10-01",
      imports: 102.5813025,
      exports: 105.6821595
    },
    {
      date: "2016-01-01",
      imports: 97.83505005,
      exports: 102.4850528
    },
    {
      date: "2016-04-01",
      imports: 98.94369635,
      exports: 102.4140179
    },
    {
      date: "2016-07-01",
      imports: 100.5026556,
      exports: 104.6519925
    },
    {
      date: "2016-10-01",
      imports: 103.4127612,
      exports: 106.7835744
    },
    {
      date: "2017-01-01",
      imports: 106.7312226,
      exports: 111.2277869
    },
    {
      date: "2017-04-01",
      imports: 103.4494218,
      exports: 107.8837114
    },
    {
      date: "2017-07-01",
      imports: 102.9613059,
      exports: 107.7452624
    },
    {
      date: "2017-10-01",
      imports: 105.3499584,
      exports: 109.6302986
    },
    {
      date: "2018-01-01",
      imports: 105.408499,
      exports: 108.6408239
    },
    {
      date: "2018-04-01",
      imports: 106.0384303,
      exports: 109.3945264
    },
    {
      date: "2018-07-01",
      imports: 107.6132585,
      exports: 111.009603
    },
    {
      date: "2018-10-01",
      imports: 107.0883158,
      exports: 109.8252135
    },
    {
      date: "2019-01-01",
      imports: 106.6683616,
      exports: 110.5789159
    },
    {
      date: "2019-04-01",
      imports: 106.1434189,
      exports: 110.3635724
    },
    {
      date: "2019-07-01",
      imports: 104.4636021,
      exports: 108.9638393
    },
    {
      date: "2019-10-01",
      imports: 104.043648,
      exports: 107.8871215
    },
    {
      date: "2020-01-01",
      imports: 103.4137167,
      exports: 108.102465
    },
    {
      date: "2020-04-01",
      imports: 97.32438108,
      exports: 103.5802504
    },
    {
      date: "2020-07-01",
      imports: 98.05930089,
      exports: 104.4416246
    },
    {
      date: "2020-10-01",
      imports: 98.47925507,
      exports: 103.9032657
    }
  ],
  "New Zealand": [
    {
      date: "1972-01-01",
      imports: 129.0115346,
      exports: 149.5762277
    },
    {
      date: "1972-04-01",
      imports: 130.6319693,
      exports: 154.9947431
    },
    {
      date: "1972-07-01",
      imports: 132.252404,
      exports: 163.6895701
    },
    {
      date: "1972-10-01",
      imports: 132.5017017,
      exports: 174.6526129
    },
    {
      date: "1973-01-01",
      imports: 135.119327,
      exports: 195.5706026
    },
    {
      date: "1973-04-01",
      imports: 137.4876547,
      exports: 207.9197773
    },
    {
      date: "1973-07-01",
      imports: 146.9609654,
      exports: 210.187993
    },
    {
      date: "1973-10-01",
      imports: 146.9609654,
      exports: 209.4319211
    },
    {
      date: "1974-01-01",
      imports: 156.8082227,
      exports: 207.7937653
    },
    {
      date: "1974-04-01",
      imports: 178.4971183,
      exports: 203.2573338
    },
    {
      date: "1974-07-01",
      imports: 190.5880544,
      exports: 194.4364948
    },
    {
      date: "1974-10-01",
      imports: 203.4268835,
      exports: 194.0584588
    },
    {
      date: "1975-01-01",
      imports: 219.3819331,
      exports: 185.6156557
    },
    {
      date: "1975-04-01",
      imports: 217.6368496,
      exports: 187.2538115
    },
    {
      date: "1975-07-01",
      imports: 228.6059462,
      exports: 198.9729263
    },
    {
      date: "1975-10-01",
      imports: 268.6182193,
      exports: 223.9232995
    },
    {
      date: "1976-01-01",
      imports: 276.2217976,
      exports: 244.3372413
    },
    {
      date: "1976-04-01",
      imports: 288.9359779,
      exports: 258.4505838
    },
    {
      date: "1976-07-01",
      imports: 295.4177168,
      exports: 266.8933868
    },
    {
      date: "1976-10-01",
      imports: 298.9078839,
      exports: 280.1246454
    },
    {
      date: "1977-01-01",
      imports: 316.2340707,
      exports: 307.3432344
    },
    {
      date: "1977-04-01",
      imports: 313.11785,
      exports: 301.0426351
    },
    {
      date: "1977-07-01",
      imports: 317.7298566,
      exports: 297.5142995
    },
    {
      date: "1977-10-01",
      imports: 323.9622979,
      exports: 300.6645991
    },
    {
      date: "1978-01-01",
      imports: 320.7214284,
      exports: 303.4368628
    },
    {
      date: "1978-04-01",
      imports: 329.4468462,
      exports: 314.5259176
    },
    {
      date: "1978-07-01",
      imports: 331.6905251,
      exports: 322.0866368
    },
    {
      date: "1978-10-01",
      imports: 334.8067457,
      exports: 341.8705186
    },
    {
      date: "1979-01-01",
      imports: 334.8067457,
      exports: 349.4312378
    },
    {
      date: "1979-04-01",
      imports: 350.3878489,
      exports: 384.210546
    },
    {
      date: "1979-07-01",
      imports: 365.4641995,
      exports: 364.836279
    },
    {
      date: "1979-10-01",
      imports: 390.9123836,
      exports: 388.0132993
    },
    {
      date: "1980-01-01",
      imports: 45.73140144,
      exports: 42.91846793
    },
    {
      date: "1980-04-01",
      imports: 48.11324527,
      exports: 42.81249641
    },
    {
      date: "1980-07-01",
      imports: 50.91191176,
      exports: 43.81392733
    },
    {
      date: "1980-10-01",
      imports: 51.38828053,
      exports: 45.88567066
    },
    {
      date: "1981-01-01",
      imports: 52.21597125,
      exports: 46.83411581
    },
    {
      date: "1981-04-01",
      imports: 54.3000846,
      exports: 48.1110727
    },
    {
      date: "1981-07-01",
      imports: 57.64062057,
      exports: 50.49543203
    },
    {
      date: "1981-10-01",
      imports: 59.01018077,
      exports: 52.92747854
    },
    {
      date: "1982-01-01",
      imports: 59.36150273,
      exports: 53.6745778
    },
    {
      date: "1982-04-01",
      imports: 61.80884726,
      exports: 54.51705143
    },
    {
      date: "1982-07-01",
      imports: 63.52972942,
      exports: 55.15817916
    },
    {
      date: "1982-10-01",
      imports: 64.30978328,
      exports: 55.47079516
    },
    {
      date: "1983-01-01",
      imports: 65.13747401,
      exports: 54.73429306
    },
    {
      date: "1983-04-01",
      imports: 67.81704831,
      exports: 58.44329646
    },
    {
      date: "1983-07-01",
      imports: 68.18027949,
      exports: 58.8141968
    },
    {
      date: "1983-10-01",
      imports: 68.59114755,
      exports: 62.5232002
    },
    {
      date: "1984-01-01",
      imports: 68.53755607,
      exports: 59.97458501
    },
    {
      date: "1984-04-01",
      imports: 69.90116166,
      exports: 60.23951382
    },
    {
      date: "1984-07-01",
      imports: 80.68495957,
      exports: 68.0867053
    },
    {
      date: "1984-10-01",
      imports: 86.99684571,
      exports: 73.96812498
    },
    {
      date: "1985-01-01",
      imports: 86.81820742,
      exports: 74.60395414
    },
    {
      date: "1985-04-01",
      imports: 88.90232077,
      exports: 73.96812498
    },
    {
      date: "1985-07-01",
      imports: 85.8059238,
      exports: 70.36509311
    },
    {
      date: "1985-10-01",
      imports: 77.76720089,
      exports: 72.00235318
    },
    {
      date: "1986-01-01",
      imports: 84.48995508,
      exports: 68.93447751
    },
    {
      date: "1986-04-01",
      imports: 80.32172839,
      exports: 66.86273418
    },
    {
      date: "1986-07-01",
      imports: 82.28674955,
      exports: 69.51202233
    },
    {
      date: "1986-10-01",
      imports: 84.55545579,
      exports: 73.06206844
    },
    {
      date: "1987-01-01",
      imports: 81.93542758,
      exports: 73.48595454
    },
    {
      date: "1987-04-01",
      imports: 79.97040643,
      exports: 74.70992566
    },
    {
      date: "1987-07-01",
      imports: 78.48175403,
      exports: 73.22102573
    },
    {
      date: "1987-10-01",
      imports: 76.81446336,
      exports: 73.85685488
    },
    {
      date: "1988-01-01",
      imports: 73.66295058,
      exports: 73.25395585
    },
    {
      date: "1988-04-01",
      imports: 73.66295058,
      exports: 73.70942086
    },
    {
      date: "1988-07-01",
      imports: 74.56402643,
      exports: 75.5312809
    },
    {
      date: "1988-10-01",
      imports: 78.46868844,
      exports: 81.14109161
    },
    {
      date: "1989-01-01",
      imports: 80.19575048,
      exports: 83.88147276
    },
    {
      date: "1989-04-01",
      imports: 80.8640484,
      exports: 84.86831361
    },
    {
      date: "1989-07-01",
      imports: 81.99039321,
      exports: 87.44169092
    },
    {
      date: "1989-10-01",
      imports: 81.17191598,
      exports: 87.59351259
    },
    {
      date: "1990-01-01",
      imports: 80.72137806,
      exports: 87.14563867
    },
    {
      date: "1990-04-01",
      imports: 81.01422771,
      exports: 85.92347422
    },
    {
      date: "1990-07-01",
      imports: 79.59503325,
      exports: 83.88147276
    },
    {
      date: "1990-10-01",
      imports: 85.07657799,
      exports: 84.17752502
    },
    {
      date: "1991-01-01",
      imports: 83.23384033,
      exports: 81.87074656
    },
    {
      date: "1991-04-01",
      imports: 79.96976816,
      exports: 80.16510601
    },
    {
      date: "1991-07-01",
      imports: 81.60180425,
      exports: 81.01792628
    },
    {
      date: "1991-10-01",
      imports: 84.86587642,
      exports: 83.57638711
    },
    {
      date: "1992-01-01",
      imports: 86.4979125,
      exports: 85.28202767
    },
    {
      date: "1992-04-01",
      imports: 88.12994859,
      exports: 87.8404885
    },
    {
      date: "1992-07-01",
      imports: 88.12994859,
      exports: 89.54612905
    },
    {
      date: "1992-10-01",
      imports: 88.12994859,
      exports: 90.39894933
    },
    {
      date: "1993-01-01",
      imports: 89.76198467,
      exports: 92.95741016
    },
    {
      date: "1993-04-01",
      imports: 88.12994859,
      exports: 92.10458988
    },
    {
      date: "1993-07-01",
      imports: 88.12994859,
      exports: 91.2517696
    },
    {
      date: "1993-10-01",
      imports: 84.86587642,
      exports: 86.98766822
    },
    {
      date: "1994-01-01",
      imports: 84.04985838,
      exports: 86.98766822
    },
    {
      date: "1994-04-01",
      imports: 84.04985838,
      exports: 86.13484794
    },
    {
      date: "1994-07-01",
      imports: 84.86587642,
      exports: 86.98766822
    },
    {
      date: "1994-10-01",
      imports: 84.86587642,
      exports: 88.69330877
    },
    {
      date: "1995-01-01",
      imports: 84.86587642,
      exports: 88.69330877
    },
    {
      date: "1995-04-01",
      imports: 84.04985838,
      exports: 85.28202767
    },
    {
      date: "1995-07-01",
      imports: 84.86587642,
      exports: 85.28202767
    },
    {
      date: "1995-10-01",
      imports: 84.04985838,
      exports: 86.13484794
    },
    {
      date: "1996-01-01",
      imports: 83.58077612,
      exports: 84.62791451
    },
    {
      date: "1996-04-01",
      imports: 82.56436118,
      exports: 82.3384332
    },
    {
      date: "1996-07-01",
      imports: 81.00061356,
      exports: 82.42021866
    },
    {
      date: "1996-10-01",
      imports: 80.29694815,
      exports: 79.72189531
    },
    {
      date: "1997-01-01",
      imports: 79.74961547,
      exports: 79.31313855
    },
    {
      date: "1997-04-01",
      imports: 79.82778184,
      exports: 78.90429651
    },
    {
      date: "1997-07-01",
      imports: 81.86061171,
      exports: 79.9672517
    },
    {
      date: "1997-10-01",
      imports: 82.32977802,
      exports: 81.60253458
    },
    {
      date: "1998-01-01",
      imports: 82.09519487,
      exports: 82.66548977
    },
    {
      date: "1998-04-01",
      imports: 84.28435748,
      exports: 82.91084617
    },
    {
      date: "1998-07-01",
      imports: 84.9878548,
      exports: 84.70969998
    },
    {
      date: "1998-10-01",
      imports: 84.75335569,
      exports: 84.05550154
    },
    {
      date: "1999-01-01",
      imports: 84.28435748,
      exports: 82.17494755
    },
    {
      date: "1999-04-01",
      imports: 84.83152206,
      exports: 83.23790274
    },
    {
      date: "1999-07-01",
      imports: 84.83152206,
      exports: 85.93614082
    },
    {
      date: "1999-10-01",
      imports: 89.52150416,
      exports: 87.74667827
    },
    {
      date: "2000-01-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-04-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-07-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-10-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2001-01-01",
      imports: 100.724,
      exports: 108.893
    },
    {
      date: "2001-04-01",
      imports: 102.945,
      exports: 109.98
    },
    {
      date: "2001-07-01",
      imports: 101.014,
      exports: 109.289
    },
    {
      date: "2001-10-01",
      imports: 101.4,
      exports: 107.312
    },
    {
      date: "2002-01-01",
      imports: 97.8271,
      exports: 105.04
    },
    {
      date: "2002-04-01",
      imports: 96.5717,
      exports: 98.8142
    },
    {
      date: "2002-07-01",
      imports: 94.5437,
      exports: 95.0593
    },
    {
      date: "2002-10-01",
      imports: 92.0328,
      exports: 91.4032
    },
    {
      date: "2003-01-01",
      imports: 87.0111,
      exports: 88.7352
    },
    {
      date: "2003-04-01",
      imports: 84.9831,
      exports: 87.5494
    },
    {
      date: "2003-07-01",
      imports: 83.6311,
      exports: 85.9684
    },
    {
      date: "2003-10-01",
      imports: 80.9271,
      exports: 85.6719
    },
    {
      date: "2004-01-01",
      imports: 77.9334,
      exports: 84.3874
    },
    {
      date: "2004-04-01",
      imports: 81.8,
      exports: 90.5
    },
    {
      date: "2004-07-01",
      imports: 81.1,
      exports: 89.4
    },
    {
      date: "2004-10-01",
      imports: 79.5,
      exports: 88.5
    }
  ],
  Norway: [
    {
      date: "1957-01-01",
      imports: 35.19671397,
      exports: 19.44181639
    },
    {
      date: "1957-04-01",
      imports: 34.20088361,
      exports: 19.72401235
    },
    {
      date: "1957-07-01",
      imports: 33.45133388,
      exports: 19.85768412
    },
    {
      date: "1957-10-01",
      imports: 33.45133388,
      exports: 19.30814462
    },
    {
      date: "1958-01-01",
      imports: 32.80886268,
      exports: 18.93683415
    },
    {
      date: "1958-04-01",
      imports: 32.49833493,
      exports: 18.38729465
    },
    {
      date: "1958-07-01",
      imports: 31.57745954,
      exports: 18.20906562
    },
    {
      date: "1958-10-01",
      imports: 31.26693179,
      exports: 18.20906562
    },
    {
      date: "1959-01-01",
      imports: 30.95640405,
      exports: 18.20906562
    },
    {
      date: "1959-04-01",
      imports: 30.6458763,
      exports: 17.65952612
    },
    {
      date: "1959-07-01",
      imports: 30.0248208,
      exports: 17.83775515
    },
    {
      date: "1959-10-01",
      imports: 30.33534855,
      exports: 18.01598417
    },
    {
      date: "1960-01-01",
      imports: 30.6458763,
      exports: 18.20906562
    },
    {
      date: "1960-04-01",
      imports: 30.95640405,
      exports: 18.01598417
    },
    {
      date: "1960-07-01",
      imports: 30.6458763,
      exports: 18.01598417
    },
    {
      date: "1960-10-01",
      imports: 30.33534855,
      exports: 17.83775515
    },
    {
      date: "1961-01-01",
      imports: 30.0248208,
      exports: 17.65952612
    },
    {
      date: "1961-04-01",
      imports: 30.33534855,
      exports: 17.83775515
    },
    {
      date: "1961-07-01",
      imports: 30.0248208,
      exports: 18.01598417
    },
    {
      date: "1961-10-01",
      imports: 30.0248208,
      exports: 17.83775515
    },
    {
      date: "1962-01-01",
      imports: 30.0248208,
      exports: 17.65952612
    },
    {
      date: "1962-04-01",
      imports: 30.0248208,
      exports: 17.83775515
    },
    {
      date: "1962-07-01",
      imports: 29.71429306,
      exports: 17.65952612
    },
    {
      date: "1962-10-01",
      imports: 29.71429306,
      exports: 17.48129709
    },
    {
      date: "1963-01-01",
      imports: 29.79995588,
      exports: 17.30306806
    },
    {
      date: "1963-04-01",
      imports: 29.79995588,
      exports: 17.30306806
    },
    {
      date: "1963-07-01",
      imports: 29.79995588,
      exports: 17.48129709
    },
    {
      date: "1963-10-01",
      imports: 30.39959567,
      exports: 17.65952612
    },
    {
      date: "1964-01-01",
      imports: 30.39959567,
      exports: 17.83775515
    },
    {
      date: "1964-04-01",
      imports: 30.39959567,
      exports: 17.83775515
    },
    {
      date: "1964-07-01",
      imports: 30.39959567,
      exports: 18.1942132
    },
    {
      date: "1964-10-01",
      imports: 30.71012342,
      exports: 18.37244223
    },
    {
      date: "1965-01-01",
      imports: 30.71012342,
      exports: 18.37244223
    },
    {
      date: "1965-04-01",
      imports: 30.71012342,
      exports: 18.55067126
    },
    {
      date: "1965-07-01",
      imports: 30.39959567,
      exports: 19.08535834
    },
    {
      date: "1965-10-01",
      imports: 30.39959567,
      exports: 19.08535834
    },
    {
      date: "1966-01-01",
      imports: 30.39959567,
      exports: 18.90712931
    },
    {
      date: "1966-04-01",
      imports: 30.71012342,
      exports: 18.72890028
    },
    {
      date: "1966-07-01",
      imports: 30.71012342,
      exports: 19.08535834
    },
    {
      date: "1966-10-01",
      imports: 30.71012342,
      exports: 18.90712931
    },
    {
      date: "1967-01-01",
      imports: 30.39959567,
      exports: 18.90712931
    },
    {
      date: "1967-04-01",
      imports: 30.39959567,
      exports: 18.55067126
    },
    {
      date: "1967-07-01",
      imports: 30.39959567,
      exports: 18.55067126
    },
    {
      date: "1967-10-01",
      imports: 30.39959567,
      exports: 18.55067126
    },
    {
      date: "1968-01-01",
      imports: 30.09977578,
      exports: 18.1942132
    },
    {
      date: "1968-04-01",
      imports: 29.50013599,
      exports: 17.83775515
    },
    {
      date: "1968-07-01",
      imports: 29.50013599,
      exports: 18.1942132
    },
    {
      date: "1968-10-01",
      imports: 29.79995588,
      exports: 18.1942132
    },
    {
      date: "1969-01-01",
      imports: 30.09977578,
      exports: 18.01598417
    },
    {
      date: "1969-04-01",
      imports: 30.39959567,
      exports: 18.1942132
    },
    {
      date: "1969-07-01",
      imports: 30.09977578,
      exports: 18.55067126
    },
    {
      date: "1969-10-01",
      imports: 30.71012342,
      exports: 19.08535834
    },
    {
      date: "1970-01-01",
      imports: 31.6095831,
      exports: 19.79827445
    },
    {
      date: "1970-04-01",
      imports: 32.50904278,
      exports: 19.79827445
    },
    {
      date: "1970-07-01",
      imports: 32.80886268,
      exports: 20.33296153
    },
    {
      date: "1970-10-01",
      imports: 33.41921032,
      exports: 20.68941958
    },
    {
      date: "1971-01-01",
      imports: 33.89035586,
      exports: 20.97161554
    },
    {
      date: "1971-04-01",
      imports: 34.54353492,
      exports: 21.16469699
    },
    {
      date: "1971-07-01",
      imports: 34.21159147,
      exports: 21.16469699
    },
    {
      date: "1971-10-01",
      imports: 34.54353492,
      exports: 20.57060023
    },
    {
      date: "1972-01-01",
      imports: 34.21159147,
      exports: 20.36266637
    },
    {
      date: "1972-04-01",
      imports: 34.86477052,
      exports: 20.36266637
    },
    {
      date: "1972-07-01",
      imports: 34.21159147,
      exports: 20.57060023
    },
    {
      date: "1972-10-01",
      imports: 35.51794957,
      exports: 21.37263085
    },
    {
      date: "1973-01-01",
      imports: 35.19671397,
      exports: 21.37263085
    },
    {
      date: "1973-04-01",
      imports: 35.51794957,
      exports: 22.17466148
    },
    {
      date: "1973-07-01",
      imports: 36.50307208,
      exports: 22.99154452
    },
    {
      date: "1973-10-01",
      imports: 39.42631605,
      exports: 24.19459045
    },
    {
      date: "1974-01-01",
      imports: 43.34539038,
      exports: 27.01655005
    },
    {
      date: "1974-04-01",
      imports: 45.94739874,
      exports: 29.03647903
    },
    {
      date: "1974-07-01",
      imports: 47.25375685,
      exports: 31.056408
    },
    {
      date: "1974-10-01",
      imports: 49.21329401,
      exports: 32.25945394
    },
    {
      date: "1975-01-01",
      imports: 47.57499245,
      exports: 33.06148456
    },
    {
      date: "1975-04-01",
      imports: 49.53452961,
      exports: 32.4673878
    },
    {
      date: "1975-07-01",
      imports: 47.57499245,
      exports: 32.66046925
    },
    {
      date: "1975-10-01",
      imports: 51.16212332,
      exports: 32.25945394
    },
    {
      date: "1976-01-01",
      imports: 51.16212332,
      exports: 32.25945394
    },
    {
      date: "1976-04-01",
      imports: 52.14724583,
      exports: 32.25945394
    },
    {
      date: "1976-07-01",
      imports: 54.09607514,
      exports: 34.68039822
    },
    {
      date: "1976-10-01",
      imports: 53.44289609,
      exports: 34.07144905
    },
    {
      date: "1977-01-01",
      imports: 55.0704898,
      exports: 35.08141353
    },
    {
      date: "1977-04-01",
      imports: 56.70879136,
      exports: 35.2893474
    },
    {
      date: "1977-07-01",
      imports: 57.03002696,
      exports: 35.89829658
    },
    {
      date: "1977-10-01",
      imports: 58.65762067,
      exports: 35.89829658
    },
    {
      date: "1978-01-01",
      imports: 57.68320602,
      exports: 36.29931189
    },
    {
      date: "1978-04-01",
      imports: 59.64274318,
      exports: 39.92330211
    },
    {
      date: "1978-07-01",
      imports: 59.96397878,
      exports: 36.89340864
    },
    {
      date: "1978-10-01",
      imports: 61.27033689,
      exports: 36.7003272
    },
    {
      date: "1979-01-01",
      imports: 61.59157249,
      exports: 39.73022066
    },
    {
      date: "1979-04-01",
      imports: 64.20428871,
      exports: 41.54221577
    },
    {
      date: "1979-07-01",
      imports: 67.45947613,
      exports: 46.38410435
    },
    {
      date: "1979-10-01",
      imports: 69.41901329,
      exports: 47.98816559
    },
    {
      date: "1980-01-01",
      imports: 71.76403318,
      exports: 54.40441057
    },
    {
      date: "1980-04-01",
      imports: 73.98055882,
      exports: 56.69168309
    },
    {
      date: "1980-07-01",
      imports: 74.7194007,
      exports: 58.99380803
    },
    {
      date: "1980-10-01",
      imports: 76.19708447,
      exports: 59.55819995
    },
    {
      date: "1981-01-01",
      imports: 77.67476823,
      exports: 63.56835306
    },
    {
      date: "1981-04-01",
      imports: 77.67476823,
      exports: 65.85562558
    },
    {
      date: "1981-07-01",
      imports: 80.64084361,
      exports: 66.43486992
    },
    {
      date: "1981-10-01",
      imports: 80.64084361,
      exports: 68.72214243
    },
    {
      date: "1982-01-01",
      imports: 81.37968549,
      exports: 69.30138677
    },
    {
      date: "1982-04-01",
      imports: 79.90200173,
      exports: 67.01411425
    },
    {
      date: "1982-07-01",
      imports: 85.0738949,
      exports: 72.16790363
    },
    {
      date: "1982-10-01",
      imports: 85.0738949,
      exports: 75.5988124
    },
    {
      date: "1983-01-01",
      imports: 87.29042054,
      exports: 73.31153988
    },
    {
      date: "1983-04-01",
      imports: 85.0738949,
      exports: 71.58865929
    },
    {
      date: "1983-07-01",
      imports: 85.81273678,
      exports: 73.31153988
    },
    {
      date: "1983-10-01",
      imports: 85.0738949,
      exports: 76.17805674
    },
    {
      date: "1984-01-01",
      imports: 86.55157866,
      exports: 78.46532926
    },
    {
      date: "1984-04-01",
      imports: 87.29042054,
      exports: 79.02972118
    },
    {
      date: "1984-07-01",
      imports: 88.77881216,
      exports: 80.18820985
    },
    {
      date: "1984-10-01",
      imports: 90.9953378,
      exports: 84.19836297
    },
    {
      date: "1985-01-01",
      imports: 92.47302156,
      exports: 87.0500274
    },
    {
      date: "1985-04-01",
      imports: 94.68954721,
      exports: 85.34199922
    },
    {
      date: "1985-07-01",
      imports: 95.43909694,
      exports: 81.89623803
    },
    {
      date: "1985-10-01",
      imports: 94.68954721,
      exports: 81.33184611
    },
    {
      date: "1986-01-01",
      imports: 92.47302156,
      exports: 70.44502303
    },
    {
      date: "1986-04-01",
      imports: 92.47302156,
      exports: 62.4247168
    },
    {
      date: "1986-07-01",
      imports: 95.43909694,
      exports: 58.41456369
    },
    {
      date: "1986-10-01",
      imports: 95.43909694,
      exports: 60.13744428
    },
    {
      date: "1987-01-01",
      imports: 97.5378362,
      exports: 62.21678294
    },
    {
      date: "1987-04-01",
      imports: 100.5253273,
      exports: 59.78098623
    },
    {
      date: "1987-07-01",
      imports: 96.54200584,
      exports: 60.38993541
    },
    {
      date: "1987-10-01",
      imports: 91.56285403,
      exports: 60.99888458
    },
    {
      date: "1988-01-01",
      imports: 94.55034511,
      exports: 60.38993541
    },
    {
      date: "1988-04-01",
      imports: 97.5378362,
      exports: 60.99888458
    },
    {
      date: "1988-07-01",
      imports: 101.5211577,
      exports: 61.60783376
    },
    {
      date: "1988-10-01",
      imports: 103.5128184,
      exports: 60.38993541
    },
    {
      date: "1989-01-01",
      imports: 101.6175283,
      exports: 66.86559006
    },
    {
      date: "1989-04-01",
      imports: 104.8084686,
      exports: 69.06374807
    },
    {
      date: "1989-07-01",
      imports: 105.2046592,
      exports: 67.8309973
    },
    {
      date: "1989-10-01",
      imports: 105.804299,
      exports: 68.02407874
    },
    {
      date: "1990-01-01",
      imports: 105.1082885,
      exports: 68.02407874
    },
    {
      date: "1990-04-01",
      imports: 104.1124582,
      exports: 62.40986438
    },
    {
      date: "1990-07-01",
      imports: 105.1082885,
      exports: 69.59843515
    },
    {
      date: "1990-10-01",
      imports: 106.9928707,
      exports: 82.72797349
    },
    {
      date: "1991-01-01",
      imports: 101.3177084,
      exports: 69.91033595
    },
    {
      date: "1991-04-01",
      imports: 104.5086487,
      exports: 68.08348842
    },
    {
      date: "1991-07-01",
      imports: 104.1124582,
      exports: 67.71217794
    },
    {
      date: "1991-10-01",
      imports: 103.909009,
      exports: 67.77158762
    },
    {
      date: "1992-01-01",
      imports: 101.7246069,
      exports: 61.74150553
    },
    {
      date: "1992-04-01",
      imports: 101.9173482,
      exports: 64.05848288
    },
    {
      date: "1992-07-01",
      imports: 99.32604771,
      exports: 61.97914423
    },
    {
      date: "1992-10-01",
      imports: 101.9173482,
      exports: 63.44953371
    },
    {
      date: "1993-01-01",
      imports: 102.0137189,
      exports: 64.66743206
    },
    {
      date: "1993-04-01",
      imports: 101.9173482,
      exports: 64.29612159
    },
    {
      date: "1993-07-01",
      imports: 103.4164477,
      exports: 62.89999421
    },
    {
      date: "1993-10-01",
      imports: 104.2088288,
      exports: 60.27111606
    },
    {
      date: "1994-01-01",
      imports: 103.7055597,
      exports: 58.87498868
    },
    {
      date: "1994-04-01",
      imports: 103.2129985,
      exports: 61.60783376
    },
    {
      date: "1994-07-01",
      imports: 103.5128184,
      exports: 61.97914423
    },
    {
      date: "1994-10-01",
      imports: 104.8084686,
      exports: 61.86032488
    },
    {
      date: "1995-01-01",
      imports: 104.6050194,
      exports: 63.68717241
    },
    {
      date: "1995-04-01",
      imports: 103.7055597,
      exports: 64.23671191
    },
    {
      date: "1995-07-01",
      imports: 105.1082885,
      exports: 61.66724344
    },
    {
      date: "1995-10-01",
      imports: 104.1124582,
      exports: 62.15737326
    },
    {
      date: "1996-01-01",
      imports: 104.1124582,
      exports: 64.66743206
    },
    {
      date: "1996-04-01",
      imports: 104.3051995,
      exports: 66.49427959
    },
    {
      date: "1996-07-01",
      imports: 102.8168079,
      exports: 68.51420857
    },
    {
      date: "1996-10-01",
      imports: 103.0095493,
      exports: 71.9896746
    },
    {
      date: "1997-01-01",
      imports: 100.2255074,
      exports: 69.4796158
    },
    {
      date: "1997-04-01",
      imports: 100.032766,
      exports: 66.67250862
    },
    {
      date: "1997-07-01",
      imports: 104.0053796,
      exports: 70.0291553
    },
    {
      date: "1997-10-01",
      imports: 102.8168079,
      exports: 69.06374807
    },
    {
      date: "1998-01-01",
      imports: 101.424787,
      exports: 63.68717241
    },
    {
      date: "1998-04-01",
      imports: 100.3218781,
      exports: 61.54842408
    },
    {
      date: "1998-07-01",
      imports: 102.6133587,
      exports: 60.58301685
    },
    {
      date: "1998-10-01",
      imports: 99.03693567,
      exports: 58.32544917
    },
    {
      date: "1999-01-01",
      imports: 97.14164563,
      exports: 57.12240324
    },
    {
      date: "1999-04-01",
      imports: 96.03873673,
      exports: 64.02877805
    },
    {
      date: "1999-07-01",
      imports: 96.24218594,
      exports: 74.63340517
    },
    {
      date: "1999-10-01",
      imports: 97.34509484,
      exports: 80.63378242
    },
    {
      date: "2000-01-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-04-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-07-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-10-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2001-01-01",
      imports: 101.5425734,
      exports: 98.44183273
    },
    {
      date: "2001-04-01",
      imports: 100.8465629,
      exports: 102.4371334
    },
    {
      date: "2001-07-01",
      imports: 97.54854405,
      exports: 96.13970779
    },
    {
      date: "2001-10-01",
      imports: 96.14581526,
      exports: 83.84190491
    },
    {
      date: "2002-01-01",
      imports: 95.34272626,
      exports: 83.33692267
    },
    {
      date: "2002-04-01",
      imports: 91.74488754,
      exports: 83.93101943
    },
    {
      date: "2002-07-01",
      imports: 90.34215875,
      exports: 83.4408896
    },
    {
      date: "2002-10-01",
      imports: 91.03816921,
      exports: 81.43581304
    },
    {
      date: "2003-01-01",
      imports: 90.94179853,
      exports: 87.33222336
    },
    {
      date: "2003-04-01",
      imports: 90.84542785,
      exports: 79.8317518
    },
    {
      date: "2003-07-01",
      imports: 93.5438069,
      exports: 85.13406536
    },
    {
      date: "2003-10-01",
      imports: 93.64017758,
      exports: 84.5399686
    },
    {
      date: "2004-01-01",
      imports: 96.14581526,
      exports: 90.54034585
    },
    {
      date: "2004-04-01",
      imports: 95.64254616,
      exports: 93.83758286
    },
    {
      date: "2004-07-01",
      imports: 96.63837652,
      exports: 103.0460826
    },
    {
      date: "2004-10-01",
      imports: 95.94236605,
      exports: 102.7490342
    },
    {
      date: "2005-01-01",
      imports: 96.24218594,
      exports: 108.0513478
    },
    {
      date: "2005-04-01",
      imports: 95.84599537,
      exports: 112.0466485
    },
    {
      date: "2005-07-01",
      imports: 96.03873673,
      exports: 125.0573675
    },
    {
      date: "2005-10-01",
      imports: 96.54200584,
      exports: 128.161523
    },
    {
      date: "2006-01-01",
      imports: 98.2491589,
      exports: 141.1704597
    },
    {
      date: "2006-04-01",
      imports: 97.54875821,
      exports: 141.7707945
    },
    {
      date: "2006-07-01",
      imports: 100.5502766,
      exports: 144.1719851
    },
    {
      date: "2006-10-01",
      imports: 105.3526417,
      exports: 138.8693745
    },
    {
      date: "2007-01-01",
      imports: 105.3526417,
      exports: 133.966888
    },
    {
      date: "2007-04-01",
      imports: 106.1530538,
      exports: 141.1704597
    },
    {
      date: "2007-07-01",
      imports: 103.4516765,
      exports: 140.6702303
    },
    {
      date: "2007-10-01",
      imports: 103.0515241,
      exports: 151.1753462
    },
    {
      date: "2008-01-01",
      imports: 105.5527715,
      exports: 162.3814963
    },
    {
      date: "2008-04-01",
      imports: 106.8534545,
      exports: 176.9888503
    },
    {
      date: "2008-07-01",
      imports: 109.0541325,
      exports: 178.0894145
    },
    {
      date: "2008-10-01",
      imports: 113.9572585,
      exports: 161.0804244
    },
    {
      date: "2009-01-01",
      imports: 110.8551934,
      exports: 140.6702303
    },
    {
      date: "2009-04-01",
      imports: 107.7541991,
      exports: 130.065009
    },
    {
      date: "2009-07-01",
      imports: 107.0534772,
      exports: 133.2665965
    },
    {
      date: "2009-10-01",
      imports: 105.952924,
      exports: 132.0659269
    },
    {
      date: "2010-01-01",
      imports: 104.6523481,
      exports: 140.6702303
    },
    {
      date: "2010-04-01",
      imports: 107.8537821,
      exports: 146.3731136
    },
    {
      date: "2010-07-01",
      imports: 106.4531949,
      exports: 149.1747253
    },
    {
      date: "2010-10-01",
      imports: 109.3550232,
      exports: 157.8782428
    },
    {
      date: "2011-01-01",
      imports: 111.9559607,
      exports: 173.186631
    },
    {
      date: "2011-04-01",
      imports: 110.7556104,
      exports: 177.1878727
    },
    {
      date: "2011-07-01",
      imports: 110.6549566,
      exports: 172.185578
    },
    {
      date: "2011-10-01",
      imports: 111.9559607,
      exports: 178.5899411
    },
    {
      date: "2012-01-01",
      imports: 112.0555438,
      exports: 188.5945305
    },
    {
      date: "2012-04-01",
      imports: 111.3552502,
      exports: 178.6894523
    },
    {
      date: "2012-07-01",
      imports: 111.455904,
      exports: 176.7883426
    },
    {
      date: "2012-10-01",
      imports: 112.3564345,
      exports: 177.9884181
    },
    {
      date: "2013-01-01",
      imports: 111.9559607,
      exports: 180.8905807
    },
    {
      date: "2013-04-01",
      imports: 113.0567281,
      exports: 176.7883426
    },
    {
      date: "2013-07-01",
      imports: 114.4573153,
      exports: 184.1922735
    },
    {
      date: "2013-10-01",
      imports: 117.7585465,
      exports: 194.1968629
    },
    {
      date: "2014-01-01",
      imports: 119.8594273,
      exports: 191.7952267
    },
    {
      date: "2014-04-01",
      imports: 118.7597308,
      exports: 179.28949
    },
    {
      date: "2014-07-01",
      imports: 119.8594273,
      exports: 173.7866688
    },
    {
      date: "2014-10-01",
      imports: 123.9616059,
      exports: 170.085446
    },
    {
      date: "2015-01-01",
      imports: 126.5636143,
      exports: 168.2838476
    },
    {
      date: "2015-04-01",
      imports: 124.7625534,
      exports: 163.0810452
    },
    {
      date: "2015-07-01",
      imports: 127.8635477,
      exports: 156.5786562
    },
    {
      date: "2015-10-01",
      imports: 130.7653759,
      exports: 151.075835
    },
    {
      date: "2016-01-01",
      imports: 130.4655561,
      exports: 135.8678491
    },
    {
      date: "2016-04-01",
      imports: 130.0650823,
      exports: 140.6702303
    },
    {
      date: "2016-07-01",
      imports: 128.2640214,
      exports: 142.4712346
    },
    {
      date: "2016-10-01",
      imports: 131.2654327,
      exports: 151.5763615
    },
    {
      date: "2017-01-01",
      imports: 133.2056957,
      exports: 164.2677535
    },
    {
      date: "2017-04-01",
      imports: 127.1022193,
      exports: 157.4356408
    },
    {
      date: "2017-07-01",
      imports: 132.7773816,
      exports: 153.2769635
    },
    {
      date: "2017-10-01",
      imports: 132.0278319,
      exports: 153.1284393
    },
    {
      date: "2018-01-01",
      imports: 133.2056957,
      exports: 158.9208827
    },
    {
      date: "2018-04-01",
      imports: 127.1022193,
      exports: 150.7520522
    },
    {
      date: "2018-07-01",
      imports: 132.7773816,
      exports: 151.1976248
    },
    {
      date: "2018-10-01",
      imports: 145.5197271,
      exports: 191.7447285
    },
    {
      date: "2019-01-01",
      imports: 147.3400622,
      exports: 180.7539385
    },
    {
      date: "2019-04-01",
      imports: 147.4471407,
      exports: 171.2483904
    },
    {
      date: "2019-07-01",
      imports: 146.697591,
      exports: 159.8120278
    },
    {
      date: "2019-10-01",
      imports: 153.7647742,
      exports: 172.5851081
    },
    {
      date: "2020-01-01",
      imports: 151.9444391,
      exports: 149.4153345
    },
    {
      date: "2020-04-01",
      imports: 157.6196014,
      exports: 120.007545
    },
    {
      date: "2020-07-01",
      imports: 151.9444391,
      exports: 131.740956
    },
    {
      date: "2020-10-01",
      imports: 154.3001668,
      exports: 145.5537056
    }
  ],
  "Other Asia, nes": [
    {
      date: "1974-01-01",
      imports: 53.93402144,
      exports: 45.91405352
    },
    {
      date: "1974-04-01",
      imports: 60.88136527,
      exports: 51.16247966
    },
    {
      date: "1974-07-01",
      imports: 59.25031775,
      exports: 52.08732994
    },
    {
      date: "1974-10-01",
      imports: 64.62427241,
      exports: 52.18656281
    },
    {
      date: "1975-01-01",
      imports: 61.12763488,
      exports: 52.6023485
    },
    {
      date: "1975-04-01",
      imports: 55.33248101,
      exports: 46.53922056
    },
    {
      date: "1975-07-01",
      imports: 53.76593266,
      exports: 44.87111613
    },
    {
      date: "1975-10-01",
      imports: 55.06666619,
      exports: 46.21274444
    },
    {
      date: "1976-01-01",
      imports: 55.15461962,
      exports: 47.75085382
    },
    {
      date: "1976-04-01",
      imports: 56.13383449,
      exports: 47.87687955
    },
    {
      date: "1976-07-01",
      imports: 59.26106761,
      exports: 49.3584262
    },
    {
      date: "1976-10-01",
      imports: 60.64780005,
      exports: 49.58467713
    },
    {
      date: "1977-01-01",
      imports: 61.15531346,
      exports: 50.28563519
    },
    {
      date: "1977-04-01",
      imports: 62.77362161,
      exports: 51.77113774
    },
    {
      date: "1977-07-01",
      imports: 64.67527631,
      exports: 51.95056187
    },
    {
      date: "1977-10-01",
      imports: 63.09500126,
      exports: 52.63108045
    },
    {
      date: "1978-01-01",
      imports: 67.849138,
      exports: 52.85576473
    },
    {
      date: "1978-04-01",
      imports: 70.79670279,
      exports: 53.85795361
    },
    {
      date: "1978-07-01",
      imports: 67.584808,
      exports: 54.76315647
    },
    {
      date: "1978-10-01",
      imports: 71.59539776,
      exports: 57.86670912
    },
    {
      date: "1979-01-01",
      imports: 78.47748612,
      exports: 62.01932723
    },
    {
      date: "1979-04-01",
      imports: 77.79479208,
      exports: 61.82697163
    },
    {
      date: "1979-07-01",
      imports: 88.31284422,
      exports: 65.28775613
    },
    {
      date: "1979-10-01",
      imports: 91.31555699,
      exports: 66.62616321
    },
    {
      date: "1980-01-01",
      imports: 96.22182611,
      exports: 67.57985908
    },
    {
      date: "1980-04-01",
      imports: 102.7825348,
      exports: 69.58585327
    },
    {
      date: "1980-07-01",
      imports: 103.012635,
      exports: 72.17214715
    },
    {
      date: "1980-10-01",
      imports: 104.2449073,
      exports: 73.28586995
    },
    {
      date: "1981-01-01",
      imports: 113.5287855,
      exports: 74.86835852
    },
    {
      date: "1981-04-01",
      imports: 113.9851827,
      exports: 74.92170083
    },
    {
      date: "1981-07-01",
      imports: 110.0430525,
      exports: 74.3397847
    },
    {
      date: "1981-10-01",
      imports: 111.2467999,
      exports: 75.83821872
    },
    {
      date: "1982-01-01",
      imports: 107.1354224,
      exports: 0
    },
    {
      date: "1982-04-01",
      imports: 107.0042083,
      exports: 79.59319415
    },
    {
      date: "1982-07-01",
      imports: 110.5051546,
      exports: 79.864755
    },
    {
      date: "1982-10-01",
      imports: 111.1859469,
      exports: 79.0581546
    },
    {
      date: "1983-01-01",
      imports: 114.5138427,
      exports: 75.17709735
    },
    {
      date: "1993-01-01",
      imports: 70.37648671,
      exports: 68.09269691
    },
    {
      date: "1993-04-01",
      imports: 72.01618434,
      exports: 69.67598157
    },
    {
      date: "1993-07-01",
      imports: 74.43420443,
      exports: 71.82750732
    },
    {
      date: "1993-10-01",
      imports: 76.14271716,
      exports: 71.89853746
    },
    {
      date: "1994-01-01",
      imports: 76.546116,
      exports: 70.77580304
    },
    {
      date: "1994-04-01",
      imports: 78.06242104,
      exports: 72.26743591
    },
    {
      date: "1994-07-01",
      imports: 83.9259418,
      exports: 74.00194603
    },
    {
      date: "1994-10-01",
      imports: 85.20969928,
      exports: 75.39963581
    },
    {
      date: "1995-01-01",
      imports: 84.37679932,
      exports: 78.01858569
    },
    {
      date: "1995-04-01",
      imports: 86.22768811,
      exports: 80.00972082
    },
    {
      date: "1995-07-01",
      imports: 91.16576448,
      exports: 85.35072884
    },
    {
      date: "1995-10-01",
      imports: 91.80882968,
      exports: 87.22959052
    },
    {
      date: "1996-01-01",
      imports: 89.71827453,
      exports: 88.53562852
    },
    {
      date: "1996-04-01",
      imports: 89.5023375,
      exports: 86.39785054
    },
    {
      date: "1996-07-01",
      imports: 87.43551169,
      exports: 84.67937949
    },
    {
      date: "1996-10-01",
      imports: 87.56127721,
      exports: 84.47316296
    },
    {
      date: "1997-01-01",
      imports: 86.60973054,
      exports: 85.94646547
    },
    {
      date: "1997-04-01",
      imports: 86.77820888,
      exports: 86.37952018
    },
    {
      date: "1997-07-01",
      imports: 88.17824014,
      exports: 85.20866857
    },
    {
      date: "1997-10-01",
      imports: 91.69018297,
      exports: 89.42923347
    },
    {
      date: "1998-01-01",
      imports: 95.54128847,
      exports: 93.23870968
    },
    {
      date: "1998-04-01",
      imports: 90.6707992,
      exports: 91.51827957
    },
    {
      date: "1998-07-01",
      imports: 91.55634271,
      exports: 92.98924731
    },
    {
      date: "1998-10-01",
      imports: 89.608147,
      exports: 91.9483871
    },
    {
      date: "1999-01-01",
      imports: 88.27983175,
      exports: 91.77634409
    },
    {
      date: "1999-04-01",
      imports: 86.68585344,
      exports: 93.49677419
    },
    {
      date: "1999-07-01",
      imports: 88.82001328,
      exports: 92.30107527
    },
    {
      date: "1999-10-01",
      imports: 97.67544831,
      exports: 95.56989247
    },
    {
      date: "2000-01-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-04-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-07-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-10-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2001-01-01",
      imports: 102.1917202,
      exports: 102.7096774
    },
    {
      date: "2001-04-01",
      imports: 103.6971441,
      exports: 104.344086
    },
    {
      date: "2001-07-01",
      imports: 101.5718397,
      exports: 104.172043
    },
    {
      date: "2001-10-01",
      imports: 100.6862962,
      exports: 103.483871
    },
    {
      date: "2002-01-01",
      imports: 101.7493735,
      exports: 103.6351828
    },
    {
      date: "2002-04-01",
      imports: 101.7493735,
      exports: 103.6351828
    },
    {
      date: "2002-07-01",
      imports: 101.7493735,
      exports: 103.6351828
    },
    {
      date: "2002-10-01",
      imports: 101.7493735,
      exports: 103.6351828
    },
    {
      date: "2003-01-01",
      imports: 107.5438034,
      exports: 109.8752688
    },
    {
      date: "2003-04-01",
      imports: 107.5438034,
      exports: 109.8752688
    },
    {
      date: "2003-07-01",
      imports: 107.5438034,
      exports: 109.8752688
    },
    {
      date: "2003-10-01",
      imports: 107.5438034,
      exports: 109.8752688
    },
    {
      date: "2004-01-01",
      imports: 118.3369493,
      exports: 116.4055914
    },
    {
      date: "2004-04-01",
      imports: 119.8671685,
      exports: 119.9298925
    },
    {
      date: "2004-07-01",
      imports: 122.621563,
      exports: 124.076129
    },
    {
      date: "2004-10-01",
      imports: 125.8860306,
      exports: 123.1432258
    },
    {
      date: "2005-01-01",
      imports: 120.6832854,
      exports: 120.2408602
    },
    {
      date: "2005-04-01",
      imports: 120.4792561,
      exports: 119.307957
    },
    {
      date: "2005-07-01",
      imports: 125.0699137,
      exports: 121.0701075
    },
    {
      date: "2005-10-01",
      imports: 130.7827319,
      exports: 127.2894624
    },
    {
      date: "2006-01-01",
      imports: 130.6807173,
      exports: 123.3505376
    },
    {
      date: "2006-04-01",
      imports: 132.6189949,
      exports: 124.9053763
    },
    {
      date: "2006-07-01",
      imports: 140.3925083,
      exports: 127.7455484
    },
    {
      date: "2006-10-01",
      imports: 139.1989374,
      exports: 130.0570753
    },
    {
      date: "2007-01-01",
      imports: 138.0257693,
      exports: 129.7772043
    },
    {
      date: "2007-04-01",
      imports: 142.4123976,
      exports: 129.6735484
    },
    {
      date: "2007-07-01",
      imports: 144.7587337,
      exports: 127.8077419
    },
    {
      date: "2007-10-01",
      imports: 148.9413327,
      exports: 130.2954839
    },
    {
      date: "2008-01-01",
      imports: 156.5924286,
      exports: 133.9234409
    },
    {
      date: "2008-04-01",
      imports: 155.164224,
      exports: 129.8808602
    },
    {
      date: "2008-07-01",
      imports: 169.1402258,
      exports: 137.344086
    },
    {
      date: "2008-10-01",
      imports: 150.1655081,
      exports: 133.3015054
    },
    {
      date: "2009-01-01",
      imports: 131.4993397,
      exports: 122.4915743
    },
    {
      date: "2009-04-01",
      imports: 131.4314795,
      exports: 120.0500919
    },
    {
      date: "2009-07-01",
      imports: 140.1175748,
      exports: 124.3511489
    },
    {
      date: "2009-10-01",
      imports: 143.6734451,
      exports: 128.2727009
    },
    {
      date: "2010-01-01",
      imports: 146.3742779,
      exports: 128.9937605
    },
    {
      date: "2010-04-01",
      imports: 148.0164928,
      exports: 129.6768695
    },
    {
      date: "2010-07-01",
      imports: 152.0338118,
      exports: 132.5737579
    },
    {
      date: "2010-10-01",
      imports: 153.0788577,
      exports: 128.7028066
    },
    {
      date: "2011-01-01",
      imports: 156.7704482,
      exports: 130.6509324
    },
    {
      date: "2011-04-01",
      imports: 163.7871845,
      exports: 135.9387026
    },
    {
      date: "2011-07-01",
      imports: 162.2535458,
      exports: 136.6597621
    },
    {
      date: "2011-10-01",
      imports: 167.1123304,
      exports: 142.7697931
    },
    {
      date: "2012-01-01",
      imports: 164.045053,
      exports: 137.9247789
    },
    {
      date: "2012-04-01",
      imports: 160.3670345,
      exports: 138.1018812
    },
    {
      date: "2012-07-01",
      imports: 158.6841036,
      exports: 139.9488057
    },
    {
      date: "2012-10-01",
      imports: 159.6070012,
      exports: 139.8729047
    },
    {
      date: "2013-01-01",
      imports: 163.249613,
      exports: 142.1403613
    },
    {
      date: "2013-04-01",
      imports: 161.4457498,
      exports: 147.6553638
    },
    {
      date: "2013-07-01",
      imports: 162.1866222,
      exports: 146.4056588
    },
    {
      date: "2013-10-01",
      imports: 160.592136,
      exports: 146.0932326
    },
    {
      date: "2014-01-01",
      imports: 163.861638,
      exports: 145.0472838
    },
    {
      date: "2014-04-01",
      imports: 162.5409525,
      exports: 147.0576788
    },
    {
      date: "2014-07-01",
      imports: 159.9156874,
      exports: 147.0848463
    },
    {
      date: "2014-10-01",
      imports: 158.160142,
      exports: 148.8507338
    },
    {
      date: "2015-01-01",
      imports: 148.5288014,
      exports: 143.9605838
    },
    {
      date: "2015-04-01",
      imports: 143.5842837,
      exports: 143.349315
    },
    {
      date: "2015-07-01",
      imports: 145.0982403,
      exports: 146.7316688
    },
    {
      date: "2015-10-01",
      imports: 147.2242218,
      exports: 146.6229988
    },
    {
      date: "2016-01-01",
      imports: 126.9951853,
      exports: 123.6392936
    },
    {
      date: "2016-04-01",
      imports: 130.4740642,
      exports: 122.7835174
    },
    {
      date: "2016-07-01",
      imports: 131.5853727,
      exports: 121.7783198
    },
    {
      date: "2016-10-01",
      imports: 130.6512293,
      exports: 122.6340961
    },
    {
      date: "2017-01-01",
      imports: 134.6777095,
      exports: 123.7343799
    },
    {
      date: "2017-04-01",
      imports: 129.0084254,
      exports: 119.9445136
    },
    {
      date: "2017-07-01",
      imports: 129.5721326,
      exports: 120.3248586
    },
    {
      date: "2017-10-01",
      imports: 133.5019773,
      exports: 122.5390098
    },
    {
      date: "2018-01-01",
      imports: 135.2248985,
      exports: 121.1180219
    },
    {
      date: "2018-04-01",
      imports: 134.0547325,
      exports: 123.1476597
    },
    {
      date: "2018-07-01",
      imports: 144.020432,
      exports: 125.6052331
    },
    {
      date: "2018-10-01",
      imports: 140.2270367,
      exports: 124.8104954
    },
    {
      date: "2019-01-01",
      imports: 140.3427674,
      exports: 120.9713011
    },
    {
      date: "2019-04-01",
      imports: 142.2458946,
      exports: 121.203609
    },
    {
      date: "2019-07-01",
      imports: 140.7671133,
      exports: 120.8245803
    },
    {
      date: "2019-10-01",
      imports: 137.0508718,
      exports: 117.4744553
    },
    {
      date: "2020-01-01",
      imports: 135.443501,
      exports: 116.1661948
    },
    {
      date: "2020-04-01",
      imports: 124.2304816,
      exports: 112.4125877
    },
    {
      date: "2020-07-01",
      imports: 124.7191224,
      exports: 112.1558263
    },
    {
      date: "2020-10-01",
      imports: 124.449084,
      exports: 111.4099955
    }
  ],
  Pakistan: [
    {
      date: "1970-01-01",
      imports: 1.93310179,
      exports: 2.81346127
    },
    {
      date: "1970-04-01",
      imports: 2.02975688,
      exports: 2.93850399
    },
    {
      date: "1970-07-01",
      imports: 1.8364467,
      exports: 2.54253537
    },
    {
      date: "1970-10-01",
      imports: 1.86866506,
      exports: 3.0218658
    },
    {
      date: "1971-01-01",
      imports: 1.80422834,
      exports: 2.60505673
    },
    {
      date: "1971-04-01",
      imports: 2.12641197,
      exports: 2.64673764
    },
    {
      date: "1971-07-01",
      imports: 2.12641197,
      exports: 2.7509399
    },
    {
      date: "1971-10-01",
      imports: 2.31972215,
      exports: 2.77178036
    },
    {
      date: "1972-01-01",
      imports: 2.48081396,
      exports: 2.93850399
    },
    {
      date: "1972-04-01",
      imports: 3.02852614,
      exports: 4.6474212
    },
    {
      date: "1972-07-01",
      imports: 4.34947903,
      exports: 6.25213615
    },
    {
      date: "1972-10-01",
      imports: 4.44613412,
      exports: 6.46054068
    },
    {
      date: "1973-01-01",
      imports: 4.73609939,
      exports: 7.04407339
    },
    {
      date: "1973-04-01",
      imports: 4.70388102,
      exports: 7.91937245
    },
    {
      date: "1973-07-01",
      imports: 5.2515932,
      exports: 9.71165148
    },
    {
      date: "1973-10-01",
      imports: 5.57377683,
      exports: 10.81619553
    },
    {
      date: "1974-01-01",
      imports: 6.76585627,
      exports: 12.37922957
    },
    {
      date: "1974-04-01",
      imports: 8.82783151,
      exports: 11.75401596
    },
    {
      date: "1974-07-01",
      imports: 9.31110696,
      exports: 11.27468552
    },
    {
      date: "1974-10-01",
      imports: 9.60107223,
      exports: 10.50358873
    },
    {
      date: "1975-01-01",
      imports: 10.37431294,
      exports: 9.89921557
    },
    {
      date: "1975-04-01",
      imports: 10.05212931,
      exports: 9.98257738
    },
    {
      date: "1975-07-01",
      imports: 10.1487844,
      exports: 10.48274827
    },
    {
      date: "1975-10-01",
      imports: 8.50564788,
      exports: 10.1076201
    },
    {
      date: "1976-01-01",
      imports: 9.92325586,
      exports: 10.21182237
    },
    {
      date: "1976-04-01",
      imports: 8.73117642,
      exports: 10.96207871
    },
    {
      date: "1976-07-01",
      imports: 9.15001514,
      exports: 12.10830367
    },
    {
      date: "1976-10-01",
      imports: 9.50441714,
      exports: 12.14998458
    },
    {
      date: "1977-01-01",
      imports: 9.05336005,
      exports: 12.92108137
    },
    {
      date: "1977-04-01",
      imports: 9.50441714,
      exports: 13.87974225
    },
    {
      date: "1977-07-01",
      imports: 10.21322113,
      exports: 13.33789045
    },
    {
      date: "1977-10-01",
      imports: 9.8910375,
      exports: 12.73351729
    },
    {
      date: "1978-01-01",
      imports: 10.08434767,
      exports: 14.19234905
    },
    {
      date: "1978-04-01",
      imports: 10.40653131,
      exports: 13.58797589
    },
    {
      date: "1978-07-01",
      imports: 9.85881913,
      exports: 15.8387449
    },
    {
      date: "1978-10-01",
      imports: 10.5031864,
      exports: 16.73488442
    },
    {
      date: "1979-01-01",
      imports: 10.7609333,
      exports: 16.75572487
    },
    {
      date: "1979-04-01",
      imports: 11.08311693,
      exports: 17.75606666
    },
    {
      date: "1979-07-01",
      imports: 11.82413929,
      exports: 17.54766212
    },
    {
      date: "1979-10-01",
      imports: 12.53294328,
      exports: 17.83942847
    },
    {
      date: "1980-01-01",
      imports: 13.33840236,
      exports: 18.61052526
    },
    {
      date: "1980-04-01",
      imports: 13.95055126,
      exports: 18.44380163
    },
    {
      date: "1980-07-01",
      imports: 14.4338267,
      exports: 18.75640844
    },
    {
      date: "1980-10-01",
      imports: 15.94808977,
      exports: 18.73556799
    },
    {
      date: "1981-01-01",
      imports: 16.20583668,
      exports: 19.23573888
    },
    {
      date: "1981-04-01",
      imports: 16.23805504,
      exports: 19.98599522
    },
    {
      date: "1981-07-01",
      imports: 17.01129576,
      exports: 19.98599522
    },
    {
      date: "1981-10-01",
      imports: 17.14016921,
      exports: 19.88179295
    },
    {
      date: "1982-01-01",
      imports: 17.88119156,
      exports: 20.19439975
    },
    {
      date: "1982-04-01",
      imports: 18.17115683,
      exports: 20.96549654
    },
    {
      date: "1982-07-01",
      imports: 19.20214445,
      exports: 21.48650789
    },
    {
      date: "1982-10-01",
      imports: 19.58876481,
      exports: 22.21592377
    },
    {
      date: "1983-01-01",
      imports: 18.84774246,
      exports: 21.63239107
    },
    {
      date: "1983-04-01",
      imports: 18.01006502,
      exports: 22.09088105
    },
    {
      date: "1983-07-01",
      imports: 18.87996082,
      exports: 23.13290374
    },
    {
      date: "1983-10-01",
      imports: 19.39545463,
      exports: 24.23744779
    },
    {
      date: "1984-01-01",
      imports: 20.13647699,
      exports: 24.86266141
    },
    {
      date: "1984-04-01",
      imports: 20.94193607,
      exports: 25.59207729
    },
    {
      date: "1984-07-01",
      imports: 20.94193607,
      exports: 25.98804592
    },
    {
      date: "1984-10-01",
      imports: 20.52309734,
      exports: 25.07106595
    },
    {
      date: "1985-01-01",
      imports: 21.19968297,
      exports: 23.88316008
    },
    {
      date: "1985-04-01",
      imports: 21.65074006,
      exports: 25.32115139
    },
    {
      date: "1985-07-01",
      imports: 21.61852169,
      exports: 25.32115139
    },
    {
      date: "1985-10-01",
      imports: 21.58630333,
      exports: 26.65494044
    },
    {
      date: "1986-01-01",
      imports: 20.81306261,
      exports: 27.86368676
    },
    {
      date: "1986-04-01",
      imports: 19.84651172,
      exports: 28.90570945
    },
    {
      date: "1986-07-01",
      imports: 18.87996082,
      exports: 32.42774615
    },
    {
      date: "1986-10-01",
      imports: 22.42398077,
      exports: 33.69901383
    },
    {
      date: "1987-01-01",
      imports: 22.45619914,
      exports: 34.49095107
    },
    {
      date: "1987-04-01",
      imports: 23.03612967,
      exports: 34.36590835
    },
    {
      date: "1987-07-01",
      imports: 27.03120671,
      exports: 32.42774615
    },
    {
      date: "1987-10-01",
      imports: 26.83789653,
      exports: 33.69901383
    },
    {
      date: "1988-01-01",
      imports: 26.99898834,
      exports: 34.49095107
    },
    {
      date: "1988-04-01",
      imports: 26.96676998,
      exports: 34.36590835
    },
    {
      date: "1988-07-01",
      imports: 27.67557397,
      exports: 35.13700514
    },
    {
      date: "1988-10-01",
      imports: 28.9643085,
      exports: 32.9904384
    },
    {
      date: "1989-01-01",
      imports: 29.35092886,
      exports: 34.32422744
    },
    {
      date: "1989-04-01",
      imports: 32.89494881,
      exports: 35.92894239
    },
    {
      date: "1989-07-01",
      imports: 33.2493508,
      exports: 37.51281688
    },
    {
      date: "1989-10-01",
      imports: 34.50586696,
      exports: 40.38879951
    },
    {
      date: "1990-01-01",
      imports: 33.44266098,
      exports: 40.84728949
    },
    {
      date: "1990-04-01",
      imports: 35.15023423,
      exports: 40.18039497
    },
    {
      date: "1990-07-01",
      imports: 38.21097873,
      exports: 39.78442635
    },
    {
      date: "1990-10-01",
      imports: 42.5282394,
      exports: 41.40998174
    },
    {
      date: "1991-01-01",
      imports: 40.24073561,
      exports: 39.263415
    },
    {
      date: "1991-04-01",
      imports: 39.30640308,
      exports: 41.86847173
    },
    {
      date: "1991-07-01",
      imports: 38.56538072,
      exports: 44.05671938
    },
    {
      date: "1991-10-01",
      imports: 42.07718231,
      exports: 42.86881351
    },
    {
      date: "1992-01-01",
      imports: 38.85534599,
      exports: 43.55654849
    },
    {
      date: "1992-04-01",
      imports: 41.11063142,
      exports: 42.16023808
    },
    {
      date: "1992-07-01",
      imports: 40.11186216,
      exports: 43.20226077
    },
    {
      date: "1992-10-01",
      imports: 44.17137592,
      exports: 43.61906985
    },
    {
      date: "1993-01-01",
      imports: 41.81943541,
      exports: 44.97369935
    },
    {
      date: "1993-04-01",
      imports: 43.01151484,
      exports: 45.2654657
    },
    {
      date: "1993-07-01",
      imports: 44.10693919,
      exports: 49.45439692
    },
    {
      date: "1993-10-01",
      imports: 46.58775316,
      exports: 48.39153377
    },
    {
      date: "1994-01-01",
      imports: 48.52085495,
      exports: 50.47557916
    },
    {
      date: "1994-04-01",
      imports: 49.16522221,
      exports: 52.47626272
    },
    {
      date: "1994-07-01",
      imports: 53.22473597,
      exports: 58.58251569
    },
    {
      date: "1994-10-01",
      imports: 54.67456231,
      exports: 58.79092023
    },
    {
      date: "1995-01-01",
      imports: 55.7377683,
      exports: 68.31500763
    },
    {
      date: "1995-04-01",
      imports: 57.25203137,
      exports: 68.4608908
    },
    {
      date: "1995-07-01",
      imports: 57.79974354,
      exports: 69.46123259
    },
    {
      date: "1995-10-01",
      imports: 61.56929203,
      exports: 71.29519252
    },
    {
      date: "1996-01-01",
      imports: 62.69693474,
      exports: 72.69150293
    },
    {
      date: "1996-04-01",
      imports: 61.76260221,
      exports: 72.96242883
    },
    {
      date: "1996-07-01",
      imports: 63.95345091,
      exports: 80.50667311
    },
    {
      date: "1996-10-01",
      imports: 74.07001695,
      exports: 77.54732867
    },
    {
      date: "1997-01-01",
      imports: 76.45417582,
      exports: 81.06936537
    },
    {
      date: "1997-04-01",
      imports: 72.52353551,
      exports: 80.46499221
    },
    {
      date: "1997-07-01",
      imports: 76.61526764,
      exports: 93.46943539
    },
    {
      date: "1997-10-01",
      imports: 71.10592753,
      exports: 97.32491935
    },
    {
      date: "1998-01-01",
      imports: 67.33637904,
      exports: 96.92895072
    },
    {
      date: "1998-04-01",
      imports: 67.88409122,
      exports: 95.4075976
    },
    {
      date: "1998-07-01",
      imports: 72.3624437,
      exports: 100.2842638
    },
    {
      date: "1998-10-01",
      imports: 80.70699976,
      exports: 100.846956
    },
    {
      date: "1999-01-01",
      imports: 81.06140176,
      exports: 99.17971974
    },
    {
      date: "1999-04-01",
      imports: 83.67108917,
      exports: 102.7642778
    },
    {
      date: "1999-07-01",
      imports: 87.24732749,
      exports: 104.0563859
    },
    {
      date: "1999-10-01",
      imports: 89.92145163,
      exports: 97.84593069
    },
    {
      date: "2000-01-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-04-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-07-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-10-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2001-01-01",
      imports: 107.3193678,
      exports: 107.0574113
    },
    {
      date: "2001-04-01",
      imports: 108.8658492,
      exports: 110.3710434
    },
    {
      date: "2001-07-01",
      imports: 115.5994871,
      exports: 110.808693
    },
    {
      date: "2001-10-01",
      imports: 102.2610847,
      exports: 105.16093
    },
    {
      date: "2002-01-01",
      imports: 99.1359035,
      exports: 103.0560442
    },
    {
      date: "2002-04-01",
      imports: 107.8348616,
      exports: 103.9730241
    },
    {
      date: "2002-07-01",
      imports: 105.5473578,
      exports: 98.13769705
    },
    {
      date: "2002-10-01",
      imports: 109.4457797,
      exports: 94.94910761
    },
    {
      date: "2003-01-01",
      imports: 114.4718444,
      exports: 98.28358022
    },
    {
      date: "2003-04-01",
      imports: 110.9600428,
      exports: 104.8691636
    },
    {
      date: "2003-07-01",
      imports: 119.852311,
      exports: 102.9726823
    },
    {
      date: "2003-10-01",
      imports: 122.0109414,
      exports: 108.2453172
    },
    {
      date: "2004-01-01",
      imports: 128.7767976,
      exports: 111.913237
    },
    {
      date: "2004-04-01",
      imports: 135.1238152,
      exports: 113.0803024
    },
    {
      date: "2004-07-01",
      imports: 126.9725693,
      exports: 111.683992
    },
    {
      date: "2004-10-01",
      imports: 138.216778,
      exports: 110.7461716
    },
    {
      date: "2005-01-01",
      imports: 146.4002423,
      exports: 112.0174393
    },
    {
      date: "2005-04-01",
      imports: 146.8512994,
      exports: 116.1230087
    },
    {
      date: "2005-07-01",
      imports: 159.062059,
      exports: 115.4977951
    },
    {
      date: "2005-10-01",
      imports: 158.2888183,
      exports: 115.4352737
    },
    {
      date: "2006-01-01",
      imports: 160.9890393,
      exports: 115.7866438
    },
    {
      date: "2006-04-01",
      imports: 176.8288754,
      exports: 120.1898149
    },
    {
      date: "2006-07-01",
      imports: 175.6300301,
      exports: 118.6686701
    },
    {
      date: "2006-10-01",
      imports: 167.0196725,
      exports: 121.7809835
    },
    {
      date: "2007-01-01",
      imports: 171.2608979,
      exports: 120.6462208
    },
    {
      date: "2007-04-01",
      imports: 191.0213866,
      exports: 122.557082
    },
    {
      date: "2007-07-01",
      imports: 194.1739534,
      exports: 121.9137372
    },
    {
      date: "2007-10-01",
      imports: 200.5425572,
      exports: 131.0126793
    },
    {
      date: "2008-01-01",
      imports: 226.4619082,
      exports: 138.7309414
    },
    {
      date: "2008-04-01",
      imports: 278.6888415,
      exports: 154.9748247
    },
    {
      date: "2008-07-01",
      imports: 326.0981629,
      exports: 175.5908269
    },
    {
      date: "2008-10-01",
      imports: 293.2728058,
      exports: 178.7187706
    },
    {
      date: "2009-01-01",
      imports: 248.2792172,
      exports: 177.7086338
    },
    {
      date: "2009-04-01",
      imports: 258.1560786,
      exports: 170.6299652
    },
    {
      date: "2009-07-01",
      imports: 286.5804074,
      exports: 172.8490568
    },
    {
      date: "2009-10-01",
      imports: 293.1374886,
      exports: 182.9660551
    },
    {
      date: "2010-01-01",
      imports: 304.3984509,
      exports: 186.3201177
    },
    {
      date: "2010-04-01",
      imports: 310.7741428,
      exports: 203.6679199
    },
    {
      date: "2010-07-01",
      imports: 328.4017759,
      exports: 215.6653523
    },
    {
      date: "2010-10-01",
      imports: 345.1617684,
      exports: 227.9653882
    },
    {
      date: "2011-01-01",
      imports: 370.1052252,
      exports: 232.6253137
    },
    {
      date: "2011-04-01",
      imports: 398.1513103,
      exports: 249.1434574
    },
    {
      date: "2011-07-01",
      imports: 413.3358249,
      exports: 255.005877
    },
    {
      date: "2011-10-01",
      imports: 435.9788905,
      exports: 262.6647438
    },
    {
      date: "2012-01-01",
      imports: 440.5281234,
      exports: 265.3594145
    },
    {
      date: "2012-04-01",
      imports: 465.6294502,
      exports: 276.9321185
    },
    {
      date: "2012-07-01",
      imports: 451.6015748,
      exports: 267.0245667
    },
    {
      date: "2012-10-01",
      imports: 472.2181054,
      exports: 276.5486541
    },
    {
      date: "2013-01-01",
      imports: 480.7753027,
      exports: 284.0928984
    },
    {
      date: "2013-04-01",
      imports: 487.5927083,
      exports: 288.4631416
    },
    {
      date: "2013-07-01",
      imports: 582.5498901,
      exports: 290.8556257
    },
    {
      date: "2013-10-01",
      imports: 485.7755927,
      exports: 290.7806
    },
    {
      date: "2014-01-01",
      imports: 500.924667,
      exports: 300.8944723
    },
    {
      date: "2014-04-01",
      imports: 500.9633291,
      exports: 291.97059
    },
    {
      date: "2014-07-01",
      imports: 513.0452153,
      exports: 293.7837094
    },
    {
      date: "2014-10-01",
      imports: 498.7273747,
      exports: 297.4578814
    },
    {
      date: "2015-01-01",
      imports: 489.7996662,
      exports: 299.9420635
    },
    {
      date: "2015-04-01",
      imports: 497.5771791,
      exports: 293.214765
    },
    {
      date: "2015-07-01",
      imports: 472.5628419,
      exports: 278.0345785
    },
    {
      date: "2015-10-01",
      imports: 440.7085462,
      exports: 273.7456131
    },
    {
      date: "2016-01-01",
      imports: 433.3595376,
      exports: 273.9435974
    },
    {
      date: "2016-04-01",
      imports: 435.6277104,
      exports: 273.8977484
    },
    {
      date: "2016-07-01",
      imports: 434.906019,
      exports: 271.8387116
    },
    {
      date: "2016-10-01",
      imports: 435.8081332,
      exports: 274.4937854
    },
    {
      date: "2017-01-01",
      imports: 438.8785432,
      exports: 274.3645746
    },
    {
      date: "2017-04-01",
      imports: 438.330831,
      exports: 274.3228937
    },
    {
      date: "2017-07-01",
      imports: 428.4397935,
      exports: 275.9484491
    },
    {
      date: "2017-10-01",
      imports: 430.1151484,
      exports: 278.9077935
    },
    {
      date: "2018-01-01",
      imports: 457.661849,
      exports: 293.1001426
    },
    {
      date: "2018-04-01",
      imports: 478.7648768,
      exports: 299.456481
    },
    {
      date: "2018-07-01",
      imports: 465.8775316,
      exports: 294.5172934
    },
    {
      date: "2018-10-01",
      imports: 474.8020182,
      exports: 310.3560383
    },
    {
      date: "2019-01-01",
      imports: 472.6756062,
      exports: 315.1076618
    },
    {
      date: "2019-04-01",
      imports: 496.968252,
      exports: 319.8801257
    },
    {
      date: "2019-07-01",
      imports: 487.7538002,
      exports: 323.7356097
    },
    {
      date: "2019-10-01",
      imports: 493.5208872,
      exports: 333.5723039
    },
    {
      date: "2020-01-01",
      imports: 486.8839044,
      exports: 331.4257371
    },
    {
      date: "2020-04-01",
      imports: 481.1490357,
      exports: 323.9440142
    },
    {
      date: "2020-07-01",
      imports: 490.4279243,
      exports: 345.9098525
    }
  ],
  "Papua New Guinea": [
    {
      date: "1972-07-01",
      imports: 0,
      exports: 6.03472815
    },
    {
      date: "1972-10-01",
      imports: 0,
      exports: 6.60404213
    },
    {
      date: "1973-01-01",
      imports: 0,
      exports: 7.03102761
    },
    {
      date: "1973-04-01",
      imports: 0,
      exports: 8.90976373
    },
    {
      date: "1973-07-01",
      imports: 0,
      exports: 10.58923997
    },
    {
      date: "1973-10-01",
      imports: 0,
      exports: 10.87389695
    },
    {
      date: "1974-01-01",
      imports: 0,
      exports: 16.19698264
    },
    {
      date: "1974-04-01",
      imports: 0,
      exports: 14.43210931
    },
    {
      date: "1974-07-01",
      imports: 0,
      exports: 13.17961856
    },
    {
      date: "1974-10-01",
      imports: 0,
      exports: 13.49274125
    },
    {
      date: "1975-01-01",
      imports: 0,
      exports: 11.89866211
    },
    {
      date: "1975-04-01",
      imports: 0,
      exports: 10.44691147
    },
    {
      date: "1975-07-01",
      imports: 0,
      exports: 9.735269
    },
    {
      date: "1975-10-01",
      imports: 0,
      exports: 10.27611728
    },
    {
      date: "1976-01-01",
      imports: 0,
      exports: 11.89866211
    },
    {
      date: "1976-04-01",
      imports: 0,
      exports: 12.63877028
    },
    {
      date: "1976-07-01",
      imports: 0,
      exports: 13.09422146
    },
    {
      date: "1976-10-01",
      imports: 0,
      exports: 14.37517791
    },
    {
      date: "1977-01-01",
      imports: 0,
      exports: 16.56703672
    },
    {
      date: "1977-04-01",
      imports: 0,
      exports: 18.81582693
    },
    {
      date: "1977-07-01",
      imports: 0,
      exports: 17.73413037
    },
    {
      date: "1977-10-01",
      imports: 0,
      exports: 15.91232565
    },
    {
      date: "1978-01-01",
      imports: 0,
      exports: 15.54227156
    },
    {
      date: "1978-04-01",
      imports: 0,
      exports: 15.05835468
    },
    {
      date: "1978-07-01",
      imports: 0,
      exports: 14.85909479
    },
    {
      date: "1978-10-01",
      imports: 0,
      exports: 15.62766866
    },
    {
      date: "1979-01-01",
      imports: 0,
      exports: 17.25021349
    },
    {
      date: "1979-04-01",
      imports: 0,
      exports: 20.97922004
    },
    {
      date: "1979-07-01",
      imports: 0,
      exports: 20.97922004
    },
    {
      date: "1979-10-01",
      imports: 0,
      exports: 23.45573584
    },
    {
      date: "1980-01-01",
      imports: 0,
      exports: 21.9185881
    },
    {
      date: "1980-04-01",
      imports: 0,
      exports: 22.37403928
    },
    {
      date: "1980-07-01",
      imports: 0,
      exports: 21.9470538
    },
    {
      date: "1980-10-01",
      imports: 0,
      exports: 19.69826359
    },
    {
      date: "1981-01-01",
      imports: 0,
      exports: 18.18958155
    },
    {
      date: "1981-04-01",
      imports: 0,
      exports: 17.42100769
    },
    {
      date: "1981-07-01",
      imports: 0,
      exports: 17.27867919
    },
    {
      date: "1981-10-01",
      imports: 0,
      exports: 17.39254199
    },
    {
      date: "1982-01-01",
      imports: 0,
      exports: 17.27867919
    },
    {
      date: "1982-04-01",
      imports: 0,
      exports: 16.48163962
    },
    {
      date: "1982-07-01",
      imports: 0,
      exports: 16.45317393
    },
    {
      date: "1982-10-01",
      imports: 0,
      exports: 16.82322801
    },
    {
      date: "1983-01-01",
      imports: 0,
      exports: 18.01878736
    },
    {
      date: "1983-04-01",
      imports: 0,
      exports: 19.95445488
    },
    {
      date: "1983-07-01",
      imports: 0,
      exports: 21.46313692
    },
    {
      date: "1983-10-01",
      imports: 0,
      exports: 20.38144036
    },
    {
      date: "1984-01-01",
      imports: 0,
      exports: 21.46313692
    },
    {
      date: "1984-04-01",
      imports: 0,
      exports: 21.71932821
    },
    {
      date: "1984-07-01",
      imports: 0,
      exports: 21.49160262
    },
    {
      date: "1984-10-01",
      imports: 0,
      exports: 21.63393111
    },
    {
      date: "1985-01-01",
      imports: 0,
      exports: 22.68716197
    },
    {
      date: "1985-04-01",
      imports: 0,
      exports: 23.00028466
    },
    {
      date: "1985-07-01",
      imports: 0,
      exports: 21.60546541
    },
    {
      date: "1985-10-01",
      imports: 0,
      exports: 20.75149445
    },
    {
      date: "1986-01-01",
      imports: 0,
      exports: 22.71562767
    },
    {
      date: "1986-04-01",
      imports: 0,
      exports: 22.63023057
    },
    {
      date: "1986-07-01",
      imports: 0,
      exports: 21.00768574
    },
    {
      date: "1986-10-01",
      imports: 0,
      exports: 21.49160262
    },
    {
      date: "1987-01-01",
      imports: 0,
      exports: 21.49160262
    },
    {
      date: "1987-04-01",
      imports: 0,
      exports: 21.57699972
    },
    {
      date: "1987-07-01",
      imports: 0,
      exports: 24.16737831
    },
    {
      date: "1987-10-01",
      imports: 0,
      exports: 27.12781099
    },
    {
      date: "1988-01-01",
      imports: 0,
      exports: 26.58696271
    },
    {
      date: "1988-04-01",
      imports: 0,
      exports: 27.35553658
    },
    {
      date: "1988-07-01",
      imports: 0,
      exports: 26.98548249
    },
    {
      date: "1988-10-01",
      imports: 0,
      exports: 29.2342727
    },
    {
      date: "1989-01-01",
      imports: 0,
      exports: 26.15997723
    },
    {
      date: "1989-04-01",
      imports: 0,
      exports: 21.32080843
    },
    {
      date: "1989-07-01",
      imports: 0,
      exports: 22.60176487
    },
    {
      date: "1989-10-01",
      imports: 0,
      exports: 22.0609166
    },
    {
      date: "1990-01-01",
      imports: 0,
      exports: 23.17107885
    },
    {
      date: "1990-04-01",
      imports: 0,
      exports: 24.90748648
    },
    {
      date: "1990-07-01",
      imports: 0,
      exports: 24.53743239
    },
    {
      date: "1990-10-01",
      imports: 0,
      exports: 23.68346143
    },
    {
      date: "1991-01-01",
      imports: 0,
      exports: 23.34187304
    },
    {
      date: "1991-04-01",
      imports: 0,
      exports: 24.08198121
    },
    {
      date: "1991-07-01",
      imports: 0,
      exports: 23.71192713
    },
    {
      date: "1991-10-01",
      imports: 0,
      exports: 24.90748648
    },
    {
      date: "1992-01-01",
      imports: 0,
      exports: 24.05351551
    },
    {
      date: "1992-04-01",
      imports: 0,
      exports: 23.17107885
    },
    {
      date: "1992-07-01",
      imports: 0,
      exports: 25.78992314
    },
    {
      date: "1992-10-01",
      imports: 0,
      exports: 24.19584401
    },
    {
      date: "1993-01-01",
      imports: 0,
      exports: 30.74295474
    },
    {
      date: "1993-04-01",
      imports: 0,
      exports: 25.90378594
    },
    {
      date: "1993-07-01",
      imports: 0,
      exports: 26.41616852
    },
    {
      date: "1993-10-01",
      imports: 0,
      exports: 25.70452605
    },
    {
      date: "1994-01-01",
      imports: 0,
      exports: 27.27013948
    },
    {
      date: "1994-04-01",
      imports: 0,
      exports: 28.60802733
    },
    {
      date: "1994-07-01",
      imports: 0,
      exports: 33.53259323
    },
    {
      date: "1994-10-01",
      imports: 0,
      exports: 38.14403644
    },
    {
      date: "1995-01-01",
      imports: 0,
      exports: 41.18986621
    },
    {
      date: "1995-04-01",
      imports: 0,
      exports: 46.99686877
    },
    {
      date: "1995-07-01",
      imports: 0,
      exports: 46.65528039
    },
    {
      date: "1995-10-01",
      imports: 0,
      exports: 47.02533447
    },
    {
      date: "1996-01-01",
      imports: 0,
      exports: 48.8186735
    },
    {
      date: "1996-04-01",
      imports: 0,
      exports: 47.25306006
    },
    {
      date: "1996-07-01",
      imports: 0,
      exports: 44.43495588
    },
    {
      date: "1996-10-01",
      imports: 0,
      exports: 48.96100199
    },
    {
      date: "1997-01-01",
      imports: 0,
      exports: 52.06376317
    },
    {
      date: "1997-04-01",
      imports: 0,
      exports: 52.06376317
    },
    {
      date: "1997-07-01",
      imports: 0,
      exports: 51.43751779
    },
    {
      date: "1997-10-01",
      imports: 0,
      exports: 47.82237404
    },
    {
      date: "1998-01-01",
      imports: 0,
      exports: 54.34101907
    },
    {
      date: "1998-04-01",
      imports: 0,
      exports: 59.15172217
    },
    {
      date: "1998-07-01",
      imports: 0,
      exports: 65.38571022
    },
    {
      date: "1998-10-01",
      imports: 0,
      exports: 63.22231711
    },
    {
      date: "1999-01-01",
      imports: 0,
      exports: 60.66040421
    },
    {
      date: "1999-04-01",
      imports: 0,
      exports: 70.28181042
    },
    {
      date: "1999-07-01",
      imports: 0,
      exports: 81.24110447
    },
    {
      date: "1999-10-01",
      imports: 0,
      exports: 87.8451466
    },
    {
      date: "2000-01-01",
      imports: 0,
      exports: 100
    },
    {
      date: "2000-04-01",
      imports: 0,
      exports: 100
    },
    {
      date: "2000-07-01",
      imports: 0,
      exports: 100
    },
    {
      date: "2000-10-01",
      imports: 0,
      exports: 100
    },
    {
      date: "2001-01-01",
      imports: 0,
      exports: 111.3008824
    },
    {
      date: "2001-04-01",
      imports: 0,
      exports: 105.4938799
    },
    {
      date: "2001-07-01",
      imports: 0,
      exports: 111.6140051
    },
    {
      date: "2001-10-01",
      imports: 0,
      exports: 107.2302875
    },
    {
      date: "2002-01-01",
      imports: 0,
      exports: 97.77967549
    },
    {
      date: "2002-04-01",
      imports: 0,
      exports: 117.4494734
    },
    {
      date: "2002-07-01",
      imports: 0,
      exports: 128.7218901
    },
    {
      date: "2002-10-01",
      imports: 0,
      exports: 134.7281526
    },
    {
      date: "2003-01-01",
      imports: 0,
      exports: 141.019072
    },
    {
      date: "2003-04-01",
      imports: 0,
      exports: 128.636493
    },
    {
      date: "2003-07-01",
      imports: 0,
      exports: 122.2317108
    },
    {
      date: "2003-10-01",
      imports: 0,
      exports: 125.5621976
    },
    {
      date: "2004-01-01",
      imports: 0,
      exports: 133.1056077
    },
    {
      date: "2004-04-01",
      imports: 0,
      exports: 142.1292343
    },
    {
      date: "2004-07-01",
      imports: 0,
      exports: 145.8582408
    },
    {
      date: "2004-10-01",
      imports: 0,
      exports: 162.9945915
    },
    {
      date: "2005-01-01",
      imports: 0,
      exports: 148.3062909
    },
    {
      date: "2005-04-01",
      imports: 0,
      exports: 169.7978935
    },
    {
      date: "2005-07-01",
      imports: 0,
      exports: 183.7745517
    },
    {
      date: "2005-10-01",
      imports: 0,
      exports: 197.2388272
    },
    {
      date: "2006-01-01",
      imports: 0,
      exports: 225.578423
    },
    {
      date: "2006-04-01",
      imports: 0,
      exports: 273.4130373
    },
    {
      date: "2006-07-01",
      imports: 0,
      exports: 302.3171079
    },
    {
      date: "2006-10-01",
      imports: 0,
      exports: 287.8337603
    },
    {
      date: "2007-01-01",
      imports: 0,
      exports: 253.5932252
    },
    {
      date: "2007-04-01",
      imports: 0,
      exports: 294.725306
    },
    {
      date: "2007-07-01",
      imports: 0,
      exports: 300.6660974
    },
    {
      date: "2007-10-01",
      imports: 0,
      exports: 309.940222
    },
    {
      date: "2008-01-01",
      imports: 0,
      exports: 321.6595502
    },
    {
      date: "2008-04-01",
      imports: 0,
      exports: 352.6302306
    },
    {
      date: "2008-07-01",
      imports: 0,
      exports: 358.9496157
    },
    {
      date: "2008-10-01",
      imports: 0,
      exports: 244.6359237
    },
    {
      date: "2009-01-01",
      imports: 0,
      exports: 190.2900655
    },
    {
      date: "2009-04-01",
      imports: 0,
      exports: 203.2809565
    },
    {
      date: "2009-07-01",
      imports: 0,
      exports: 233.7731284
    },
    {
      date: "2009-10-01",
      imports: 0,
      exports: 253.2436664
    },
    {
      date: "2010-01-01",
      imports: 0,
      exports: 267.0922289
    },
    {
      date: "2010-04-01",
      imports: 0,
      exports: 287.5149445
    },
    {
      date: "2010-07-01",
      imports: 0,
      exports: 278.9080558
    },
    {
      date: "2010-10-01",
      imports: 0,
      exports: 305.1124395
    },
    {
      date: "2011-01-01",
      imports: 0,
      exports: 334.3666382
    },
    {
      date: "2011-04-01",
      imports: 0,
      exports: 351.5798463
    },
    {
      date: "2011-07-01",
      imports: 0,
      exports: 323.3134073
    },
    {
      date: "2011-10-01",
      imports: 0,
      exports: 286.8175349
    },
    {
      date: "2012-01-01",
      imports: 0,
      exports: 280.5912326
    },
    {
      date: "2012-04-01",
      imports: 0,
      exports: 284.0216339
    },
    {
      date: "2012-07-01",
      imports: 0,
      exports: 268.4580131
    },
    {
      date: "2012-10-01",
      imports: 0,
      exports: 287.5149445
    },
    {
      date: "2013-01-01",
      imports: 0,
      exports: 290.7884999
    },
    {
      date: "2013-04-01",
      imports: 0,
      exports: 266.9017933
    },
    {
      date: "2013-07-01",
      imports: 0,
      exports: 279.5750071
    },
    {
      date: "2013-10-01",
      imports: 0,
      exports: 273.3495588
    },
    {
      date: "2014-01-01",
      imports: 0,
      exports: 286.3079989
    },
    {
      date: "2014-04-01",
      imports: 0,
      exports: 283.4816396
    },
    {
      date: "2014-07-01",
      imports: 0,
      exports: 279.5750071
    },
    {
      date: "2014-10-01",
      imports: 0,
      exports: 236.2189012
    },
    {
      date: "2015-01-01",
      imports: 0,
      exports: 229.8027327
    },
    {
      date: "2015-04-01",
      imports: 0,
      exports: 236.4930259
    },
    {
      date: "2015-07-01",
      imports: 0,
      exports: 227.5547965
    },
    {
      date: "2015-10-01",
      imports: 0,
      exports: 210.9040706
    },
    {
      date: "2016-01-01",
      imports: 0,
      exports: 232.7884999
    },
    {
      date: "2016-04-01",
      imports: 0,
      exports: 248.1616852
    },
    {
      date: "2016-07-01",
      imports: 0,
      exports: 258.2305722
    },
    {
      date: "2016-10-01",
      imports: 0,
      exports: 252.4053516
    },
    {
      date: "2017-01-01",
      imports: 0,
      exports: 260.5465414
    },
    {
      date: "2017-04-01",
      imports: 0,
      exports: 272.5021349
    },
    {
      date: "2017-07-01",
      imports: 0,
      exports: 285.7956163
    }
  ],
  Moldova: [
    //Republic of
    {
      date: "1995-01-01",
      imports: 35.42545533,
      exports: 37.88181221
    },
    {
      date: "1995-04-01",
      imports: 48.04274079,
      exports: 33.18114938
    },
    {
      date: "1995-07-01",
      imports: 44.64577932,
      exports: 36.22275474
    },
    {
      date: "1995-10-01",
      imports: 49.01330121,
      exports: 40.92341757
    },
    {
      date: "1996-01-01",
      imports: 49.15281927,
      exports: 49.65005985
    },
    {
      date: "1996-04-01",
      imports: 48.71000108,
      exports: 48.16796851
    },
    {
      date: "1996-07-01",
      imports: 50.03845566,
      exports: 46.68587718
    },
    {
      date: "1996-10-01",
      imports: 44.28181917,
      exports: 44.09221733
    },
    {
      date: "1997-01-01",
      imports: 50.92852022,
      exports: 52.80691441
    },
    {
      date: "1997-04-01",
      imports: 49.96760475,
      exports: 49.50648226
    },
    {
      date: "1997-07-01",
      imports: 49.00668927,
      exports: 52.80691441
    },
    {
      date: "1997-10-01",
      imports: 49.00668927,
      exports: 48.56350164
    },
    {
      date: "1998-01-01",
      imports: 48.2355546,
      exports: 53.97621037
    },
    {
      date: "1998-04-01",
      imports: 52.71101843,
      exports: 62.12356288
    },
    {
      date: "1998-07-01",
      imports: 50.7219234,
      exports: 58.04988662
    },
    {
      date: "1998-10-01",
      imports: 65.64013616,
      exports: 67.72486772
    },
    {
      date: "1999-01-01",
      imports: 81.49073722,
      exports: 86.47014361
    },
    {
      date: "1999-04-01",
      imports: 91.81289727,
      exports: 94.33106576
    },
    {
      date: "1999-07-01",
      imports: 100.5052426,
      exports: 101.5873016
    },
    {
      date: "1999-10-01",
      imports: 72.25512033,
      exports: 79.21390779
    },
    {
      date: "2000-01-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-04-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-07-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-10-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2001-01-01",
      imports: 99,
      exports: 99
    },
    {
      date: "2001-04-01",
      imports: 94,
      exports: 97
    },
    {
      date: "2001-07-01",
      imports: 97,
      exports: 95
    },
    {
      date: "2001-10-01",
      imports: 98,
      exports: 95
    },
    {
      date: "2002-01-01",
      imports: 94.09,
      exports: 91.675
    },
    {
      date: "2002-04-01",
      imports: 93.12,
      exports: 93.605
    },
    {
      date: "2002-07-01",
      imports: 94.09,
      exports: 96.5
    },
    {
      date: "2002-10-01",
      imports: 97,
      exports: 97.465
    },
    {
      date: "2003-01-01",
      imports: 93.62925,
      exports: 95.7593625
    },
    {
      date: "2003-04-01",
      imports: 102.141,
      exports: 97.6555875
    },
    {
      date: "2003-07-01",
      imports: 99.30375,
      exports: 98.6037
    },
    {
      date: "2003-10-01",
      imports: 101.19525,
      exports: 99.5518125
    },
    {
      date: "2004-01-01",
      imports: 108.9740438,
      exports: 102.7872464
    },
    {
      date: "2004-04-01",
      imports: 112.9367363,
      exports: 104.7450987
    },
    {
      date: "2004-07-01",
      imports: 112.9367363,
      exports: 103.7661726
    },
    {
      date: "2004-10-01",
      imports: 114.9180825,
      exports: 106.702951
    },
    {
      date: "2005-01-01",
      imports: 130.4320236,
      exports: 106.5903745
    },
    {
      date: "2005-04-01",
      imports: 120.3122977,
      exports: 104.5003672
    },
    {
      date: "2005-07-01",
      imports: 125.9343677,
      exports: 106.5903745
    },
    {
      date: "2005-10-01",
      imports: 115.8146417,
      exports: 105.5453709
    }
  ],
  Russia: [
    //n Federation
    {
      date: "2001-01-01",
      imports: 89.3,
      exports: 103.8
    },
    {
      date: "2001-04-01",
      imports: 91.5,
      exports: 103.4
    },
    {
      date: "2001-07-01",
      imports: 90.8,
      exports: 93.3
    },
    {
      date: "2001-10-01",
      imports: 90.5,
      exports: 80.3
    },
    {
      date: "2002-01-01",
      imports: 82.0336,
      exports: 76.0032
    },
    {
      date: "2002-04-01",
      imports: 85.904,
      exports: 82.1808
    },
    {
      date: "2002-07-01",
      imports: 87.5088,
      exports: 97.0632
    },
    {
      date: "2002-10-01",
      imports: 87.5088,
      exports: 103.8024
    },
    {
      date: "2003-01-01",
      imports: 88.2700416,
      exports: 111.087756
    },
    {
      date: "2003-04-01",
      imports: 86.3261568,
      exports: 98.1350136
    }
  ],
  Slovenia: [
    {
      date: "2004-01-01",
      imports: 118.4134144,
      exports: 120.948471
    },
    {
      date: "2004-04-01",
      imports: 120.263624,
      exports: 122.4809565
    },
    {
      date: "2004-07-01",
      imports: 123.8484051,
      exports: 124.8386265
    },
    {
      date: "2004-10-01",
      imports: 125.9298909,
      exports: 125.0743935
    },
    {
      date: "2005-01-01",
      imports: 128.5858668,
      exports: 126.2654884
    },
    {
      date: "2005-04-01",
      imports: 130.5396881,
      exports: 128.8549173
    },
    {
      date: "2005-07-01",
      imports: 133.3483063,
      exports: 129.1015296
    },
    {
      date: "2005-10-01",
      imports: 134.9357861,
      exports: 131.5676525
    },
    {
      date: "2006-01-01",
      imports: 138.4770873,
      exports: 134.0083742
    },
    {
      date: "2006-04-01",
      imports: 139.4002679,
      exports: 136.0720258
    },
    {
      date: "2006-07-01",
      imports: 143.488639,
      exports: 138.522612
    },
    {
      date: "2006-10-01",
      imports: 143.0929902,
      exports: 138.2646556
    },
    {
      date: "2007-01-01",
      imports: 147.3237949,
      exports: 141.0918582
    },
    {
      date: "2007-04-01",
      imports: 148.8760571,
      exports: 141.9121597
    },
    {
      date: "2007-07-01",
      imports: 143.937041,
      exports: 141.7754428
    },
    {
      date: "2007-10-01",
      imports: 146.6182212,
      exports: 140.4082737
    },
    {
      date: "2008-01-01",
      imports: 152.7030185,
      exports: 142.9924968
    },
    {
      date: "2008-04-01",
      imports: 154.9033502,
      exports: 142.9924968
    },
    {
      date: "2008-07-01",
      imports: 156.8103043,
      exports: 144.5467631
    },
    {
      date: "2008-10-01",
      imports: 148.3023551,
      exports: 143.2750907
    },
    {
      date: "2009-01-01",
      imports: 143.9544998,
      exports: 141.2651418
    },
    {
      date: "2009-04-01",
      imports: 135.9910593,
      exports: 134.8114044
    },
    {
      date: "2009-07-01",
      imports: 134.4596285,
      exports: 135.8153191
    },
    {
      date: "2009-10-01",
      imports: 142.2699258,
      exports: 133.5206569
    },
    {
      date: "2010-01-01",
      imports: 143.475116,
      exports: 134.7098082
    },
    {
      date: "2010-04-01",
      imports: 152.65975,
      exports: 147.9353663
    },
    {
      date: "2010-07-01",
      imports: 151.8247832,
      exports: 143.2996037
    },
    {
      date: "2010-10-01",
      imports: 152.9380722,
      exports: 150.2532476
    },
    {
      date: "2011-01-01",
      imports: 170.0540551,
      exports: 158.3104076
    },
    {
      date: "2011-04-01",
      imports: 162.5428336,
      exports: 155.861566
    },
    {
      date: "2011-07-01",
      imports: 160.7401405,
      exports: 152.2603283
    },
    {
      date: "2011-10-01",
      imports: 158.7872229,
      exports: 149.6674372
    },
    {
      date: "2012-01-01",
      imports: 169.8861944,
      exports: 158.6531013
    },
    {
      date: "2012-04-01",
      imports: 163.2016128,
      exports: 154.9563301
    },
    {
      date: "2012-07-01",
      imports: 165.81023,
      exports: 156.9587478
    },
    {
      date: "2012-10-01",
      imports: 164.5059214,
      exports: 153.8781051
    },
    {
      date: "2013-01-01",
      imports: 164.5322684,
      exports: 153.3015628
    },
    {
      date: "2013-04-01",
      imports: 164.2005502,
      exports: 156.4237942
    },
    {
      date: "2013-07-01",
      imports: 162.2102405,
      exports: 152.5210049
    },
    {
      date: "2013-10-01",
      imports: 161.5468039,
      exports: 155.3310132
    },
    {
      date: "2014-01-01",
      imports: 159.370649,
      exports: 150.2256965
    },
    {
      date: "2014-04-01",
      imports: 159.696894,
      exports: 150.3800909
    },
    {
      date: "2014-07-01",
      imports: 161.6543635,
      exports: 154.8575268
    },
    {
      date: "2014-10-01",
      imports: 164.1012005,
      exports: 154.0855551
    },
    {
      date: "2015-01-01",
      imports: 159.7630075,
      exports: 151.7776685
    },
    {
      date: "2015-04-01",
      imports: 161.2139329,
      exports: 157.1112211
    },
    {
      date: "2015-07-01",
      imports: 158.63451,
      exports: 153.6063151
    },
    {
      date: "2015-10-01",
      imports: 157.3447985,
      exports: 151.3205068
    },
    {
      date: "2016-01-01",
      imports: 157.1609501,
      exports: 155.7097006
    },
    {
      date: "2016-04-01",
      imports: 167.5141089,
      exports: 164.4565745
    },
    {
      date: "2016-07-01",
      imports: 160.9836549,
      exports: 156.2160986
    },
    {
      date: "2016-10-01",
      imports: 173.4074454,
      exports: 163.8887949
    },
    {
      date: "2017-01-01",
      imports: 183.1050557,
      exports: 175.1621849
    },
    {
      date: "2017-04-01",
      imports: 188.1139585,
      exports: 181.6769441
    },
    {
      date: "2017-07-01",
      imports: 183.665262,
      exports: 178.8437442
    },
    {
      date: "2017-10-01",
      imports: 199.6970463,
      exports: 188.9920422
    },
    {
      date: "2018-01-01",
      imports: 202.3598462,
      exports: 193.542553
    },
    {
      date: "2018-04-01",
      imports: 210.528189,
      exports: 202.0031327
    },
    {
      date: "2018-07-01",
      imports: 201.9070974,
      exports: 192.2743719
    },
    {
      date: "2018-10-01",
      imports: 224.8086405,
      exports: 203.9959887
    },
    {
      date: "2019-01-01",
      imports: 221.1775933,
      exports: 211.2859846
    },
    {
      date: "2019-04-01",
      imports: 237.8231121,
      exports: 217.8187659
    },
    {
      date: "2019-07-01",
      imports: 229.6997631,
      exports: 213.0676522
    },
    {
      date: "2019-10-01",
      imports: 241.6643857,
      exports: 214.789931
    },
    {
      date: "2020-01-01",
      imports: 228.7922237,
      exports: 225.8809885
    },
    {
      date: "2020-04-01",
      imports: 186.6932141,
      exports: 185.3181047
    },
    {
      date: "2020-07-01",
      imports: 212.1231867,
      exports: 207.3134712
    },
    {
      date: "2020-10-01",
      imports: 247.4770512,
      exports: 221.1676956
    }
  ],
  "South Africa": [
    {
      date: "1960-01-01",
      imports: 2.26167293,
      exports: 2.26102536
    },
    {
      date: "1960-04-01",
      imports: 2.22222514,
      exports: 2.26102536
    },
    {
      date: "1960-07-01",
      imports: 2.26167293,
      exports: 2.14654306
    },
    {
      date: "1960-10-01",
      imports: 2.27482219,
      exports: 2.28964593
    },
    {
      date: "1961-01-01",
      imports: 2.27482219,
      exports: 2.23240479
    },
    {
      date: "1961-04-01",
      imports: 2.26167293,
      exports: 2.17516364
    },
    {
      date: "1961-07-01",
      imports: 2.28797145,
      exports: 2.2180945
    },
    {
      date: "1961-10-01",
      imports: 2.27482219,
      exports: 2.27533565
    },
    {
      date: "1962-01-01",
      imports: 2.27482219,
      exports: 2.17516364
    },
    {
      date: "1962-04-01",
      imports: 2.3405685,
      exports: 2.18947393
    },
    {
      date: "1962-07-01",
      imports: 2.28797145,
      exports: 2.18947393
    },
    {
      date: "1962-10-01",
      imports: 2.27482219,
      exports: 2.11792249
    },
    {
      date: "1963-01-01",
      imports: 2.3405685,
      exports: 2.11792249
    },
    {
      date: "1963-04-01",
      imports: 2.32741923,
      exports: 2.14654306
    },
    {
      date: "1963-07-01",
      imports: 2.36686702,
      exports: 2.18947393
    },
    {
      date: "1963-10-01",
      imports: 2.48521037,
      exports: 2.2180945
    },
    {
      date: "1964-01-01",
      imports: 2.3405685,
      exports: 2.24671507
    },
    {
      date: "1964-04-01",
      imports: 2.3405685,
      exports: 2.20378421
    },
    {
      date: "1964-07-01",
      imports: 2.38001628,
      exports: 2.14654306
    },
    {
      date: "1964-10-01",
      imports: 2.35371776,
      exports: 2.18947393
    },
    {
      date: "1965-01-01",
      imports: 2.41946406,
      exports: 2.16085335
    },
    {
      date: "1965-04-01",
      imports: 2.44576258,
      exports: 2.18947393
    },
    {
      date: "1965-07-01",
      imports: 2.49835963,
      exports: 2.14654306
    },
    {
      date: "1965-10-01",
      imports: 2.52465815,
      exports: 2.24671507
    },
    {
      date: "1966-01-01",
      imports: 2.52465815,
      exports: 2.20378421
    },
    {
      date: "1966-04-01",
      imports: 2.55095667,
      exports: 2.28964593
    },
    {
      date: "1966-07-01",
      imports: 2.55095667,
      exports: 2.34688708
    },
    {
      date: "1966-10-01",
      imports: 2.59040446,
      exports: 2.3325768
    },
    {
      date: "1967-01-01",
      imports: 2.62985224,
      exports: 2.30395622
    },
    {
      date: "1967-04-01",
      imports: 2.55095667,
      exports: 2.30395622
    },
    {
      date: "1967-07-01",
      imports: 2.60355372,
      exports: 2.36119737
    },
    {
      date: "1967-10-01",
      imports: 2.52465815,
      exports: 2.41843852
    },
    {
      date: "1968-01-01",
      imports: 2.55095667,
      exports: 2.46136938
    },
    {
      date: "1968-04-01",
      imports: 2.56410594,
      exports: 2.44705909
    },
    {
      date: "1968-07-01",
      imports: 2.56410594,
      exports: 2.46136938
    },
    {
      date: "1968-10-01",
      imports: 2.5772552,
      exports: 2.44705909
    },
    {
      date: "1969-01-01",
      imports: 2.55095667,
      exports: 2.47567967
    },
    {
      date: "1969-04-01",
      imports: 2.59040446,
      exports: 2.71895455
    },
    {
      date: "1969-07-01",
      imports: 2.60355372,
      exports: 2.51861053
    },
    {
      date: "1969-10-01",
      imports: 2.66930003,
      exports: 2.41843852
    },
    {
      date: "1970-01-01",
      imports: 2.68244929,
      exports: 2.48998995
    },
    {
      date: "1970-04-01",
      imports: 2.78764338,
      exports: 2.47567967
    },
    {
      date: "1970-07-01",
      imports: 2.76134485,
      exports: 2.44705909
    },
    {
      date: "1970-10-01",
      imports: 2.74819559,
      exports: 2.53292082
    },
    {
      date: "1971-01-01",
      imports: 0,
      exports: 2.48998995
    },
    {
      date: "1971-04-01",
      imports: 0,
      exports: 2.59016196
    },
    {
      date: "1971-07-01",
      imports: 0,
      exports: 2.67602369
    },
    {
      date: "1971-10-01",
      imports: 0,
      exports: 2.76188541
    },
    {
      date: "1972-01-01",
      imports: 3.16897195,
      exports: 2.99085
    },
    {
      date: "1972-04-01",
      imports: 3.07692712,
      exports: 3.13395287
    },
    {
      date: "1972-07-01",
      imports: 3.30046456,
      exports: 3.34860718
    },
    {
      date: "1972-10-01",
      imports: 3.30046456,
      exports: 3.53464091
    },
    {
      date: "1973-01-01",
      imports: 3.43195718,
      exports: 3.8780878
    },
    {
      date: "1973-04-01",
      imports: 3.44510644,
      exports: 4.30739641
    },
    {
      date: "1973-07-01",
      imports: 3.51085274,
      exports: 4.42187871
    },
    {
      date: "1973-10-01",
      imports: 3.68179314,
      exports: 4.49343015
    },
    {
      date: "1974-01-01",
      imports: 4.20776359,
      exports: 5.52377082
    },
    {
      date: "1974-04-01",
      imports: 4.58909216,
      exports: 5.99601029
    },
    {
      date: "1974-07-01",
      imports: 4.62853995,
      exports: 5.96738972
    },
    {
      date: "1974-10-01",
      imports: 4.93097295,
      exports: 6.4253189
    },
    {
      date: "1975-01-01",
      imports: 5.44379414,
      exports: 6.78307608
    },
    {
      date: "1975-04-01",
      imports: 5.44379414,
      exports: 6.51118063
    },
    {
      date: "1975-07-01",
      imports: 5.52268971,
      exports: 6.31083661
    },
    {
      date: "1975-10-01",
      imports: 5.87771976,
      exports: 6.99773039
    },
    {
      date: "1976-01-01",
      imports: 6.67982469,
      exports: 6.89755838
    },
    {
      date: "1976-04-01",
      imports: 6.73242174,
      exports: 7.16945383
    },
    {
      date: "1976-07-01",
      imports: 6.65352617,
      exports: 7.18376412
    },
    {
      date: "1976-10-01",
      imports: 6.745571,
      exports: 7.67031388
    },
    {
      date: "1977-01-01",
      imports: 7.31098923,
      exports: 7.88496819
    },
    {
      date: "1977-04-01",
      imports: 7.50822815,
      exports: 8.41444881
    },
    {
      date: "1977-07-01",
      imports: 7.58712372,
      exports: 8.60048254
    },
    {
      date: "1977-10-01",
      imports: 6.9822577,
      exports: 8.52893111
    },
    {
      date: "1978-01-01",
      imports: 8.31033308,
      exports: 9.34461747
    },
    {
      date: "1978-04-01",
      imports: 8.48127348,
      exports: 9.58789235
    },
    {
      date: "1978-07-01",
      imports: 8.53387052,
      exports: 10.27478613
    },
    {
      date: "1978-10-01",
      imports: 8.78370649,
      exports: 10.37495814
    },
    {
      date: "1979-01-01",
      imports: 9.49376659,
      exports: 11.33374738
    },
    {
      date: "1979-04-01",
      imports: 9.67785625,
      exports: 11.57702226
    },
    {
      date: "1979-07-01",
      imports: 10.82184197,
      exports: 13.05098183
    },
    {
      date: "1979-10-01",
      imports: 11.3215139,
      exports: 14.13856365
    },
    {
      date: "1980-01-01",
      imports: 11.87378287,
      exports: 16.49976102
    },
    {
      date: "1980-04-01",
      imports: 12.45235036,
      exports: 15.64114379
    },
    {
      date: "1980-07-01",
      imports: 12.80738042,
      exports: 17.47286054
    },
    {
      date: "1980-10-01",
      imports: 12.6101415,
      exports: 17.12941365
    },
    {
      date: "1981-01-01",
      imports: 13.42539569,
      exports: 16.32803757
    },
    {
      date: "1981-04-01",
      imports: 13.92506762,
      exports: 16.57131245
    },
    {
      date: "1981-07-01",
      imports: 14.50363511,
      exports: 15.05442202
    },
    {
      date: "1981-10-01",
      imports: 14.99015778,
      exports: 16.4138993
    },
    {
      date: "1982-01-01",
      imports: 16.23933759,
      exports: 16.17062442
    },
    {
      date: "1982-04-01",
      imports: 16.80475582,
      exports: 16.37096843
    },
    {
      date: "1982-07-01",
      imports: 17.30442775,
      exports: 18.0738926
    },
    {
      date: "1982-10-01",
      imports: 16.97569622,
      exports: 19.24733614
    },
    {
      date: "1983-01-01",
      imports: 17.56741297,
      exports: 19.7338859
    },
    {
      date: "1983-04-01",
      imports: 17.97504007,
      exports: 18.70354523
    },
    {
      date: "1983-07-01",
      imports: 17.51481593,
      exports: 18.94682011
    },
    {
      date: "1983-10-01",
      imports: 18.33007013,
      exports: 18.44596006
    },
    {
      date: "1984-01-01",
      imports: 19.06642875,
      exports: 20.43508997
    },
    {
      date: "1984-04-01",
      imports: 19.36886176,
      exports: 20.6211237
    },
    {
      date: "1984-07-01",
      imports: 19.85538443,
      exports: 22.92507992
    },
    {
      date: "1984-10-01",
      imports: 21.36754946,
      exports: 25.21472586
    },
    {
      date: "1985-01-01",
      imports: 22.97175933,
      exports: 26.87471916
    },
    {
      date: "1985-04-01",
      imports: 24.12889432,
      exports: 26.41678997
    },
    {
      date: "1985-07-01",
      imports: 24.4050288,
      exports: 29.50781199
    },
    {
      date: "1985-10-01",
      imports: 27.87643376,
      exports: 32.3698694
    },
    {
      date: "1986-01-01",
      imports: 28.16571751,
      exports: 33.11400433
    },
    {
      date: "1986-04-01",
      imports: 27.81068746,
      exports: 32.49866199
    },
    {
      date: "1986-07-01",
      imports: 27.2189707,
      exports: 36.00468233
    },
    {
      date: "1986-10-01",
      imports: 29.36230028,
      exports: 34.7024462
    },
    {
      date: "1987-01-01",
      imports: 28.11312046,
      exports: 34.91710051
    },
    {
      date: "1987-04-01",
      imports: 29.76992738,
      exports: 36.46261151
    },
    {
      date: "1987-07-01",
      imports: 30.32219635,
      exports: 39.76828783
    },
    {
      date: "1987-10-01",
      imports: 30.86131606,
      exports: 39.6967364
    },
    {
      date: "1988-01-01",
      imports: 31.19004759,
      exports: 36.8060584
    },
    {
      date: "1988-04-01",
      imports: 32.57072001,
      exports: 39.9113907
    },
    {
      date: "1988-07-01",
      imports: 34.43791511,
      exports: 41.67155601
    },
    {
      date: "1988-10-01",
      imports: 34.85869146,
      exports: 42.37276008
    },
    {
      date: "1989-01-01",
      imports: 36.50234912,
      exports: 41.92914118
    },
    {
      date: "1989-04-01",
      imports: 38.14600677,
      exports: 43.53189334
    },
    {
      date: "1989-07-01",
      imports: 38.59308165,
      exports: 43.38879047
    },
    {
      date: "1989-10-01",
      imports: 38.89551466,
      exports: 44.54792372
    },
    {
      date: "1990-01-01",
      imports: 40.31563487,
      exports: 44.73395745
    },
    {
      date: "1990-04-01",
      imports: 40.53917231,
      exports: 46.49412277
    },
    {
      date: "1990-07-01",
      imports: 39.86855998,
      exports: 45.24912779
    },
    {
      date: "1990-10-01",
      imports: 42.26172552,
      exports: 45.70705697
    },
    {
      date: "1991-01-01",
      imports: 42.39321814,
      exports: 44.76257803
    },
    {
      date: "1991-04-01",
      imports: 43.53720386,
      exports: 46.92343138
    },
    {
      date: "1991-07-01",
      imports: 44.02372653,
      exports: 48.36877037
    },
    {
      date: "1991-10-01",
      imports: 44.86527924,
      exports: 49.97152253
    },
    {
      date: "1992-01-01",
      imports: 45.20716004,
      exports: 49.35618018
    },
    {
      date: "1992-04-01",
      imports: 45.49644378,
      exports: 49.79979908
    },
    {
      date: "1992-07-01",
      imports: 47.19269848,
      exports: 49.54221392
    },
    {
      date: "1992-10-01",
      imports: 47.16639996,
      exports: 49.71393736
    },
    {
      date: "1993-01-01",
      imports: 48.29723642,
      exports: 52.0035833
    },
    {
      date: "1993-04-01",
      imports: 49.40177436,
      exports: 53.69219717
    },
    {
      date: "1993-07-01",
      imports: 51.90013399,
      exports: 55.73856823
    },
    {
      date: "1993-10-01",
      imports: 51.62399951,
      exports: 55.16615674
    },
    {
      date: "1994-01-01",
      imports: 51.83438768,
      exports: 53.79236918
    },
    {
      date: "1994-04-01",
      imports: 54.22755322,
      exports: 61.14785675
    },
    {
      date: "1994-07-01",
      imports: 56.81795768,
      exports: 72.20970867
    },
    {
      date: "1994-10-01",
      imports: 56.64701729,
      exports: 59.02993426
    },
    {
      date: "1995-01-01",
      imports: 58.14603307,
      exports: 58.40028163
    },
    {
      date: "1995-04-01",
      imports: 60.28936264,
      exports: 64.45353307
    },
    {
      date: "1995-07-01",
      imports: 59.75024293,
      exports: 62.0923357
    },
    {
      date: "1995-10-01",
      imports: 60.03952668,
      exports: 63.70939814
    },
    {
      date: "1996-01-01",
      imports: 60.78903457,
      exports: 66.35680125
    },
    {
      date: "1996-04-01",
      imports: 63.86596169,
      exports: 70.87885197
    },
    {
      date: "1996-07-01",
      imports: 66.28542575,
      exports: 72.20970867
    },
    {
      date: "1996-10-01",
      imports: 69.23086026,
      exports: 73.79815054
    },
    {
      date: "1997-01-01",
      imports: 69.37550214,
      exports: 73.99849456
    },
    {
      date: "1997-04-01",
      imports: 68.03427749,
      exports: 73.69797853
    },
    {
      date: "1997-07-01",
      imports: 67.78444153,
      exports: 78.32020126
    },
    {
      date: "1997-10-01",
      imports: 70.42744303,
      exports: 75.12900724
    },
    {
      date: "1998-01-01",
      imports: 71.3873391,
      exports: 76.88917255
    },
    {
      date: "1998-04-01",
      imports: 71.49253319,
      exports: 77.99106466
    },
    {
      date: "1998-07-01",
      imports: 82.77459931,
      exports: 86.10499744
    },
    {
      date: "1998-10-01",
      imports: 80.13159781,
      exports: 84.45931442
    },
    {
      date: "1999-01-01",
      imports: 80.84165791,
      exports: 86.36258261
    },
    {
      date: "1999-04-01",
      imports: 81.81470324,
      exports: 86.41982375
    },
    {
      date: "1999-07-01",
      imports: 86.48269097,
      exports: 85.79017112
    },
    {
      date: "1999-10-01",
      imports: 90.08558854,
      exports: 88.95274457
    },
    {
      date: "2000-01-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-04-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-07-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-10-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2001-01-01",
      imports: 109.6253907,
      exports: 110.704381
    },
    {
      date: "2001-04-01",
      imports: 111.9659592,
      exports: 112.8938549
    },
    {
      date: "2001-07-01",
      imports: 115.1217819,
      exports: 116.0850489
    },
    {
      date: "2001-10-01",
      imports: 125.5622953,
      exports: 128.3060341
    },
    {
      date: "2002-01-01",
      imports: 139.7371989,
      exports: 145.1778626
    },
    {
      date: "2002-04-01",
      imports: 139.1849299,
      exports: 144.2333836
    },
    {
      date: "2002-07-01",
      imports: 139.7634974,
      exports: 147.4531982
    },
    {
      date: "2002-10-01",
      imports: 142.866723,
      exports: 144.9202774
    },
    {
      date: "2003-01-01",
      imports: 129.6385663,
      exports: 139.4966786
    },
    {
      date: "2003-04-01",
      imports: 125.4571012,
      exports: 132.5418791
    },
    {
      date: "2003-07-01",
      imports: 121.9856962,
      exports: 131.0822298
    },
    {
      date: "2003-10-01",
      imports: 119.5267844,
      exports: 129.3363748
    },
    {
      date: "2004-01-01",
      imports: 121.1572928,
      exports: 137.0639298
    },
    {
      date: "2004-04-01",
      imports: 127.9028638,
      exports: 138.1372013
    },
    {
      date: "2004-07-01",
      imports: 126.2723554,
      exports: 136.4485874
    },
    {
      date: "2004-10-01",
      imports: 128.1789983,
      exports: 134.0587695
    },
    {
      date: "2005-01-01",
      imports: 125.7726835,
      exports: 133.8584255
    },
    {
      date: "2005-04-01",
      imports: 131.4005673,
      exports: 144.4337276
    },
    {
      date: "2005-07-01",
      imports: 134.5432407,
      exports: 144.5911408
    },
    {
      date: "2005-10-01",
      imports: 134.2145092,
      exports: 149.5138796
    },
    {
      date: "2006-01-01",
      imports: 132.5129948,
      exports: 151.0651147
    },
    {
      date: "2010-01-01",
      imports: 141,
      exports: 153
    },
    {
      date: "2010-04-01",
      imports: 141,
      exports: 153
    },
    {
      date: "2010-07-01",
      imports: 141,
      exports: 153
    },
    {
      date: "2010-10-01",
      imports: 141,
      exports: 153
    },
    {
      date: "2011-01-01",
      imports: 133.5411,
      exports: 164.0925
    },
    {
      date: "2011-04-01",
      imports: 140.9577,
      exports: 173.9151
    },
    {
      date: "2011-07-01",
      imports: 143.4393,
      exports: 182.5137
    },
    {
      date: "2011-10-01",
      imports: 152.2518,
      exports: 192.8718
    },
    {
      date: "2012-01-01",
      imports: 158.202,
      exports: 192.7953
    },
    {
      date: "2012-04-01",
      imports: 158.202,
      exports: 191.4948
    },
    {
      date: "2012-07-01",
      imports: 160.0209,
      exports: 189.7965
    },
    {
      date: "2012-10-01",
      imports: 163.8561,
      exports: 190.332
    },
    {
      date: "2013-01-01",
      imports: 170.892,
      exports: 201.6234
    },
    {
      date: "2013-04-01",
      imports: 174.4734,
      exports: 211.2165
    },
    {
      date: "2013-07-01",
      imports: 181.3965,
      exports: 215.9748
    },
    {
      date: "2013-10-01",
      imports: 196.5822,
      exports: 217.7343
    },
    {
      date: "2014-01-01",
      imports: 206.4804,
      exports: 223.1046
    },
    {
      date: "2014-04-01",
      imports: 211.7115,
      exports: 223.3341
    },
    {
      date: "2014-07-01",
      imports: 209.8221,
      exports: 225.4914
    },
    {
      date: "2014-10-01",
      imports: 206.4804,
      exports: 225.7974
    },
    {
      date: "2015-01-01",
      imports: 198.3447,
      exports: 219.8916
    },
    {
      date: "2015-04-01",
      imports: 193.1841,
      exports: 211.446
    },
    {
      date: "2015-07-01",
      imports: 195.7926,
      exports: 216.6633
    },
    {
      date: "2015-10-01",
      imports: 199.0074,
      exports: 220.1211
    },
    {
      date: "2016-01-01",
      imports: 199.7406,
      exports: 221.7276
    },
    {
      date: "2016-04-01",
      imports: 194.2134,
      exports: 223.1811
    },
    {
      date: "2016-07-01",
      imports: 189.4758,
      exports: 219.9681
    },
    {
      date: "2016-10-01",
      imports: 183.8922,
      exports: 226.3329
    },
    {
      date: "2017-01-01",
      imports: 182.1297,
      exports: 227.8629
    },
    {
      date: "2017-04-01",
      imports: 178.4214,
      exports: 222.1866
    },
    {
      date: "2017-07-01",
      imports: 173.2044,
      exports: 214.1235
    },
    {
      date: "2017-10-01",
      imports: 177.3357,
      exports: 221.0391
    },
    {
      date: "2018-01-01",
      imports: 169.3692,
      exports: 208.6767
    },
    {
      date: "2018-04-01",
      imports: 167.9169,
      exports: 212.058
    },
    {
      date: "2018-07-01",
      imports: 175.5168,
      exports: 224.4969
    },
    {
      date: "2018-10-01",
      imports: 178.3086,
      exports: 227.0979
    },
    {
      date: "2019-01-01",
      imports: 163.3626,
      exports: 219.8151
    },
    {
      date: "2019-04-01",
      imports: 167.1273,
      exports: 221.8041
    },
    {
      date: "2019-07-01",
      imports: 159.9081,
      exports: 221.5746
    },
    {
      date: "2019-10-01",
      imports: 157.0458,
      exports: 220.5036
    },
    {
      date: "2020-01-01",
      imports: 152.7312,
      exports: 232.3152
    },
    {
      date: "2020-04-01",
      imports: 148.50261,
      exports: 246.5136
    },
    {
      date: "2020-07-01",
      imports: 142.4664,
      exports: 245.1366
    }
  ],
  Spain: [
    {
      date: "1957-01-01",
      imports: 12.86089938,
      exports: 12.80756052
    },
    {
      date: "1957-04-01",
      imports: 13.27080853,
      exports: 13.29933664
    },
    {
      date: "1957-07-01",
      imports: 13.06585395,
      exports: 12.97861308
    },
    {
      date: "1957-10-01",
      imports: 12.89164257,
      exports: 13.96216531
    },
    {
      date: "1958-01-01",
      imports: 12.92238575,
      exports: 12.64719875
    },
    {
      date: "1958-04-01",
      imports: 12.686688,
      exports: 13.19242879
    },
    {
      date: "1958-07-01",
      imports: 12.52272434,
      exports: 13.69489568
    },
    {
      date: "1958-10-01",
      imports: 12.26653112,
      exports: 13.35279056
    },
    {
      date: "1959-01-01",
      imports: 11.60042876,
      exports: 12.16611342
    },
    {
      date: "1959-04-01",
      imports: 12.09231974,
      exports: 12.00575164
    },
    {
      date: "1959-07-01",
      imports: 11.41596965,
      exports: 12.20887656
    },
    {
      date: "1959-10-01",
      imports: 11.39547419,
      exports: 12.70065267
    },
    {
      date: "1960-01-01",
      imports: 11.26225372,
      exports: 12.61512639
    },
    {
      date: "1960-04-01",
      imports: 11.11878552,
      exports: 11.05427177
    },
    {
      date: "1960-07-01",
      imports: 11.06754688,
      exports: 11.02219942
    },
    {
      date: "1960-10-01",
      imports: 11.50819921,
      exports: 11.79193594
    },
    {
      date: "1961-01-01",
      imports: 11.06754688,
      exports: 11.16117962
    },
    {
      date: "1961-04-01",
      imports: 10.95482186,
      exports: 10.89390999
    },
    {
      date: "1961-07-01",
      imports: 11.24175826,
      exports: 10.86183764
    },
    {
      date: "1961-10-01",
      imports: 11.59018104,
      exports: 11.65295573
    },
    {
      date: "1962-01-01",
      imports: 11.37497874,
      exports: 12.31578441
    },
    {
      date: "1962-04-01",
      imports: 11.53894239,
      exports: 11.54604788
    },
    {
      date: "1962-07-01",
      imports: 11.12903325,
      exports: 11.9629885
    },
    {
      date: "1962-10-01",
      imports: 11.06754688,
      exports: 13.12828408
    },
    {
      date: "1963-01-01",
      imports: 11.40572192,
      exports: 12.72203424
    },
    {
      date: "1963-04-01",
      imports: 10.82160139,
      exports: 12.13404106
    },
    {
      date: "1963-07-01",
      imports: 11.15977644,
      exports: 12.43338305
    },
    {
      date: "1963-10-01",
      imports: 11.55943785,
      exports: 13.76973118
    },
    {
      date: "1964-01-01",
      imports: 11.42621738,
      exports: 12.72203424
    },
    {
      date: "1964-04-01",
      imports: 11.56968558,
      exports: 11.92022536
    },
    {
      date: "1964-07-01",
      imports: 12.03083337,
      exports: 11.41775846
    },
    {
      date: "1964-10-01",
      imports: 12.17430157,
      exports: 13.12828408
    },
    {
      date: "1965-01-01",
      imports: 12.01033791,
      exports: 12.40131069
    },
    {
      date: "1965-04-01",
      imports: 11.46720829,
      exports: 12.74341581
    },
    {
      date: "1965-07-01",
      imports: 11.14952871,
      exports: 13.56660626
    },
    {
      date: "1965-10-01",
      imports: 11.78488788,
      exports: 14.66775713
    },
    {
      date: "1966-01-01",
      imports: 11.61067649,
      exports: 13.87663903
    },
    {
      date: "1966-04-01",
      imports: 11.82587879,
      exports: 13.54522469
    },
    {
      date: "1966-07-01",
      imports: 12.27677885,
      exports: 13.94078374
    },
    {
      date: "1966-10-01",
      imports: 12.32801749,
      exports: 15.60854621
    },
    {
      date: "1967-01-01",
      imports: 11.68241059,
      exports: 13.54522469
    },
    {
      date: "1967-04-01",
      imports: 11.40572192,
      exports: 13.37417213
    },
    {
      date: "1967-07-01",
      imports: 11.43646511,
      exports: 14.57154006
    },
    {
      date: "1967-10-01",
      imports: 12.02058564,
      exports: 15.57647386
    },
    {
      date: "1968-01-01",
      imports: 12.51247661,
      exports: 15.48025679
    },
    {
      date: "1968-04-01",
      imports: 12.67644027,
      exports: 15.7582172
    },
    {
      date: "1968-07-01",
      imports: 12.74817437,
      exports: 15.50163836
    },
    {
      date: "1968-10-01",
      imports: 12.59445844,
      exports: 15.9078882
    },
    {
      date: "1969-01-01",
      imports: 12.62520162,
      exports: 15.23436874
    },
    {
      date: "1969-04-01",
      imports: 12.7584221,
      exports: 14.73190184
    },
    {
      date: "1969-07-01",
      imports: 13.0453585,
      exports: 15.7582172
    },
    {
      date: "1969-10-01",
      imports: 13.20932215,
      exports: 15.71545406
    },
    {
      date: "1970-01-01",
      imports: 13.06585395,
      exports: 16.02548683
    },
    {
      date: "1970-04-01",
      imports: 13.6909654,
      exports: 15.59785543
    },
    {
      date: "1970-07-01",
      imports: 13.73195631,
      exports: 14.95640832
    },
    {
      date: "1970-10-01",
      imports: 13.95740634,
      exports: 15.56578307
    },
    {
      date: "1971-01-01",
      imports: 14.02914044,
      exports: 15.66200014
    },
    {
      date: "1971-04-01",
      imports: 14.49028823,
      exports: 14.49670457
    },
    {
      date: "1971-07-01",
      imports: 14.49028823,
      exports: 15.3305858
    },
    {
      date: "1971-10-01",
      imports: 14.35706776,
      exports: 15.7582172
    },
    {
      date: "1972-01-01",
      imports: 14.1931041,
      exports: 15.52301993
    },
    {
      date: "1972-04-01",
      imports: 14.6235087,
      exports: 15.39473051
    },
    {
      date: "1972-07-01",
      imports: 14.22384728,
      exports: 16.08963154
    },
    {
      date: "1972-10-01",
      imports: 14.16236091,
      exports: 16.19653939
    },
    {
      date: "1973-01-01",
      imports: 14.75672917,
      exports: 16.49588138
    },
    {
      date: "1973-04-01",
      imports: 15.73026339,
      exports: 17.29769026
    },
    {
      date: "1973-07-01",
      imports: 17.0624681,
      exports: 18.79440017
    },
    {
      date: "1973-10-01",
      imports: 17.96426822,
      exports: 19.26479471
    },
    {
      date: "1974-01-01",
      imports: 19.93183211,
      exports: 20.39801793
    },
    {
      date: "1974-04-01",
      imports: 23.7644826,
      exports: 21.69160292
    },
    {
      date: "1974-07-01",
      imports: 24.22563039,
      exports: 22.02301726
    },
    {
      date: "1974-10-01",
      imports: 25.21966006,
      exports: 24.25739134
    },
    {
      date: "1975-01-01",
      imports: 25.45535782,
      exports: 23.19900362
    },
    {
      date: "1975-04-01",
      imports: 24.88148502,
      exports: 23.19900362
    },
    {
      date: "1975-07-01",
      imports: 24.57405316,
      exports: 23.29522068
    },
    {
      date: "1975-10-01",
      imports: 24.83024638,
      exports: 23.06002341
    },
    {
      date: "1976-01-01",
      imports: 26.02923062,
      exports: 23.23107597
    },
    {
      date: "1976-04-01",
      imports: 27.93530814,
      exports: 24.03288485
    },
    {
      date: "1976-07-01",
      imports: 27.35118761,
      exports: 25.3585422
    },
    {
      date: "1976-10-01",
      imports: 28.94983327,
      exports: 25.4333777
    },
    {
      date: "1977-01-01",
      imports: 28.85760371,
      exports: 26.25656815
    },
    {
      date: "1977-04-01",
      imports: 30.2512948,
      exports: 26.66281798
    },
    {
      date: "1977-07-01",
      imports: 35.32392045,
      exports: 30.36182962
    },
    {
      date: "1977-10-01",
      imports: 36.34869331,
      exports: 32.0937368
    },
    {
      date: "1978-01-01",
      imports: 36.8815752,
      exports: 31.6661054
    },
    {
      date: "1978-04-01",
      imports: 36.60488653,
      exports: 31.69817776
    },
    {
      date: "1978-07-01",
      imports: 35.93878417,
      exports: 32.5962037
    },
    {
      date: "1978-10-01",
      imports: 33.97122028,
      exports: 33.43008494
    },
    {
      date: "1979-01-01",
      imports: 34.68856128,
      exports: 34.12498597
    },
    {
      date: "1979-04-01",
      imports: 35.11896588,
      exports: 34.62745287
    },
    {
      date: "1979-07-01",
      imports: 37.56817301,
      exports: 35.93172865
    },
    {
      date: "1979-10-01",
      imports: 39.83292103,
      exports: 37.09702422
    },
    {
      date: "1980-01-01",
      imports: 45.36669447,
      exports: 39.59866793
    },
    {
      date: "1980-04-01",
      imports: 49.53752001,
      exports: 41.2664304
    },
    {
      date: "1980-07-01",
      imports: 51.23864295,
      exports: 43.06248229
    },
    {
      date: "1980-10-01",
      imports: 54.27197062,
      exports: 44.66610006
    },
    {
      date: "1981-01-01",
      imports: 64.04830369,
      exports: 44.1315608
    },
    {
      date: "1981-04-01",
      imports: 67.71699053,
      exports: 47.53123046
    },
    {
      date: "1981-07-01",
      imports: 69.26439755,
      exports: 47.83057244
    },
    {
      date: "1981-10-01",
      imports: 68.55730427,
      exports: 47.15705298
    },
    {
      date: "1982-01-01",
      imports: 72.33871612,
      exports: 49.79767689
    },
    {
      date: "1982-04-01",
      imports: 73.64017765,
      exports: 51.43336701
    },
    {
      date: "1982-07-01",
      imports: 76.78623033,
      exports: 52.89800456
    },
    {
      date: "1982-10-01",
      imports: 79.30717157,
      exports: 53.99915543
    },
    {
      date: "1983-01-01",
      imports: 86.23463609,
      exports: 55.96625988
    },
    {
      date: "1983-04-01",
      imports: 89.59589107,
      exports: 59.02382441
    },
    {
      date: "1983-07-01",
      imports: 94.40207578,
      exports: 62.8297439
    },
    {
      date: "1983-10-01",
      imports: 99.63866509,
      exports: 65.39553232
    },
    {
      date: "1984-01-01",
      imports: 102.2723313,
      exports: 66.65704496
    },
    {
      date: "1984-04-01",
      imports: 100.8171539,
      exports: 66.29355827
    },
    {
      date: "1984-07-01",
      imports: 106.6788546,
      exports: 69.49010301
    },
    {
      date: "1984-10-01",
      imports: 104.3526202,
      exports: 71.45720746
    },
    {
      date: "1985-01-01",
      imports: 108.400473,
      exports: 72.82562795
    },
    {
      date: "1985-04-01",
      imports: 107.7958571,
      exports: 73.06082522
    },
    {
      date: "1985-07-01",
      imports: 102.4260473,
      exports: 73.8626341
    },
    {
      date: "1985-10-01",
      imports: 100.6941811,
      exports: 72.96460816
    },
    {
      date: "1986-01-01",
      imports: 71.08849324,
      exports: 71.08302998
    },
    {
      date: "1986-04-01",
      imports: 70.70932728,
      exports: 70.7088525
    },
    {
      date: "1986-07-01",
      imports: 69.8587658,
      exports: 69.8535897
    },
    {
      date: "1986-10-01",
      imports: 69.91000445,
      exports: 69.91773441
    },
    {
      date: "1987-01-01",
      imports: 69.99198628,
      exports: 69.9925699
    },
    {
      date: "1987-04-01",
      imports: 72.78961618,
      exports: 72.79355559
    },
    {
      date: "1987-07-01",
      imports: 73.22002078,
      exports: 73.221187
    },
    {
      date: "1987-10-01",
      imports: 72.62565252,
      exports: 72.63319382
    },
    {
      date: "1988-01-01",
      imports: 73.19952533,
      exports: 73.19980543
    },
    {
      date: "1988-04-01",
      imports: 75.42328243,
      exports: 75.42348872
    },
    {
      date: "1988-07-01",
      imports: 77.75976455,
      exports: 77.75407987
    },
    {
      date: "1988-10-01",
      imports: 77.78026001,
      exports: 77.77546144
    },
    {
      date: "1989-01-01",
      imports: 78.06719641,
      exports: 78.06411264
    },
    {
      date: "1989-04-01",
      imports: 80.34219215,
      exports: 80.34124986
    },
    {
      date: "1989-07-01",
      imports: 80.74185357,
      exports: 80.73680891
    },
    {
      date: "1989-10-01",
      imports: 79.11246472,
      exports: 79.11180958
    },
    {
      date: "1990-01-01",
      imports: 78.11843505,
      exports: 78.11756656
    },
    {
      date: "1990-04-01",
      imports: 77.97496685,
      exports: 77.96789557
    },
    {
      date: "1990-07-01",
      imports: 77.14490083,
      exports: 77.14470512
    },
    {
      date: "1990-10-01",
      imports: 78.81528059,
      exports: 78.81246759
    },
    {
      date: "1991-01-01",
      imports: 75.00312556,
      exports: 75.72283071
    },
    {
      date: "1991-04-01",
      imports: 75.39253924,
      exports: 77.34783004
    },
    {
      date: "1991-07-01",
      imports: 77.4215895,
      exports: 77.08056041
    },
    {
      date: "1991-10-01",
      imports: 76.4173121,
      exports: 79.17595429
    },
    {
      date: "1992-01-01",
      imports: 74.25504137,
      exports: 76.67431058
    },
    {
      date: "1992-04-01",
      imports: 74.60346414,
      exports: 78.07480342
    },
    {
      date: "1992-07-01",
      imports: 74.1218209,
      exports: 77.48681024
    },
    {
      date: "1992-10-01",
      imports: 77.45233269,
      exports: 80.08467102
    },
    {
      date: "1993-01-01",
      imports: 76.31483482,
      exports: 79.78532904
    },
    {
      date: "1993-04-01",
      imports: 78.67181239,
      exports: 81.39963758
    },
    {
      date: "1993-07-01",
      imports: 80.18847622,
      exports: 82.80013043
    },
    {
      date: "1993-10-01",
      imports: 80.6803672,
      exports: 84.11509699
    },
    {
      date: "1994-01-01",
      imports: 83.15006979,
      exports: 84.06164307
    },
    {
      date: "1994-04-01",
      imports: 83.29353799,
      exports: 86.65950384
    },
    {
      date: "1994-07-01",
      imports: 82.62743563,
      exports: 83.99749836
    },
    {
      date: "1994-10-01",
      imports: 85.37382689,
      exports: 87.35440487
    },
    {
      date: "1995-01-01",
      imports: 86.61380205,
      exports: 89.13976598
    },
    {
      date: "1995-04-01",
      imports: 88.0997227,
      exports: 91.50242948
    },
    {
      date: "1995-07-01",
      imports: 86.65479297,
      exports: 91.2030875
    },
    {
      date: "1995-10-01",
      imports: 87.82303402,
      exports: 92.41114621
    },
    {
      date: "1996-01-01",
      imports: 87.73080447,
      exports: 90.16608135
    },
    {
      date: "1996-04-01",
      imports: 87.10569302,
      exports: 92.28285679
    },
    {
      date: "1996-07-01",
      imports: 85.50704736,
      exports: 91.128252
    },
    {
      date: "1996-10-01",
      imports: 89.97505703,
      exports: 94.44239538
    },
    {
      date: "1997-01-01",
      imports: 88.85805461,
      exports: 94.90209914
    },
    {
      date: "1997-04-01",
      imports: 90.07753431,
      exports: 95.23351347
    },
    {
      date: "1997-07-01",
      imports: 92.01435502,
      exports: 94.0682179
    },
    {
      date: "1997-10-01",
      imports: 92.01435502,
      exports: 95.69321723
    },
    {
      date: "1998-01-01",
      imports: 90.78462759,
      exports: 95.34042132
    },
    {
      date: "1998-04-01",
      imports: 88.48913638,
      exports: 95.89634215
    },
    {
      date: "1998-07-01",
      imports: 88.64285231,
      exports: 94.94486228
    },
    {
      date: "1998-10-01",
      imports: 86.69578388,
      exports: 94.03614554
    },
    {
      date: "1999-01-01",
      imports: 85.78373603,
      exports: 92.5608172
    },
    {
      date: "1999-04-01",
      imports: 86.19364518,
      exports: 93.72611278
    },
    {
      date: "1999-07-01",
      imports: 90.99982989,
      exports: 94.12167182
    },
    {
      date: "1999-10-01",
      imports: 91.38924357,
      exports: 96.39880905
    },
    {
      date: "2000-01-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-04-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-07-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-10-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2001-01-01",
      imports: 99.49519689,
      exports: 99.91607734
    },
    {
      date: "2001-04-01",
      imports: 98.6753786,
      exports: 100.8461756
    },
    {
      date: "2001-07-01",
      imports: 100.2432811,
      exports: 100.6430507
    },
    {
      date: "2001-10-01",
      imports: 97.58911937,
      exports: 100.6751231
    },
    {
      date: "2002-01-01",
      imports: 94.70950764,
      exports: 100.8461756
    },
    {
      date: "2002-04-01",
      imports: 96.91276928,
      exports: 98.77216333
    },
    {
      date: "2002-07-01",
      imports: 95.5908123,
      exports: 99.36015651
    },
    {
      date: "2002-10-01",
      imports: 96.47211696,
      exports: 99.05012375
    },
    {
      date: "2003-01-01",
      imports: 96.44137377,
      exports: 98.22693329
    },
    {
      date: "2003-04-01",
      imports: 94.34058941,
      exports: 97.94897288
    },
    {
      date: "2003-07-01",
      imports: 93.55151431,
      exports: 97.77792032
    },
    {
      date: "2003-10-01",
      imports: 94.34058941,
      exports: 98.1520978
    },
    {
      date: "2004-01-01",
      imports: 93.25433018,
      exports: 96.46295376
    },
    {
      date: "2004-04-01",
      imports: 96.57459424,
      exports: 99.18910395
    },
    {
      date: "2004-07-01",
      imports: 98.54215813,
      exports: 98.87907118
    },
    {
      date: "2004-10-01",
      imports: 99.18776503,
      exports: 101.2951886
    },
    {
      date: "2005-01-01",
      imports: 97.14846704,
      exports: 100.9851558
    },
    {
      date: "2005-04-01",
      imports: 99.9665924,
      exports: 101.9900896
    },
    {
      date: "2005-07-01",
      imports: 104.6498044,
      exports: 104.9300555
    },
    {
      date: "2005-10-01",
      imports: 105.3978886,
      exports: 106.5122917
    },
    {
      date: "2006-01-01",
      imports: 104.7594551,
      exports: 105.6558529
    },
    {
      date: "2006-04-01",
      imports: 106.1172791,
      exports: 107.0714198
    },
    {
      date: "2006-07-01",
      imports: 106.9309488,
      exports: 109.9728989
    },
    {
      date: "2006-10-01",
      imports: 105.5741495,
      exports: 110.5951026
    },
    {
      date: "2007-01-01",
      imports: 105.2687672,
      exports: 109.6970766
    },
    {
      date: "2007-04-01",
      imports: 105.2349497,
      exports: 110.3877013
    },
    {
      date: "2007-07-01",
      imports: 107.7794607,
      exports: 112.425365
    },
    {
      date: "2007-10-01",
      imports: 108.5941551,
      exports: 111.976352
    },
    {
      date: "2008-01-01",
      imports: 109.2049197,
      exports: 112.3911544
    },
    {
      date: "2008-04-01",
      imports: 109.8833194,
      exports: 111.976352
    },
    {
      date: "2008-07-01",
      imports: 115.1096609,
      exports: 114.6362193
    },
    {
      date: "2008-10-01",
      imports: 110.6641963,
      exports: 112.8059569
    },
    {
      date: "2009-01-01",
      imports: 99.87272321,
      exports: 106.8301288
    },
    {
      date: "2009-04-01",
      imports: 97.59905967,
      exports: 104.5850639
    },
    {
      date: "2009-07-01",
      imports: 97.53111723,
      exports: 104.5505327
    },
    {
      date: "2009-10-01",
      imports: 96.9203526,
      exports: 105.20684
    },
    {
      date: "2010-01-01",
      imports: 98.14198433,
      exports: 103.6179755
    },
    {
      date: "2010-04-01",
      imports: 101.6373821,
      exports: 106.3811158
    },
    {
      date: "2010-07-01",
      imports: 104.7932726,
      exports: 108.8332612
    },
    {
      date: "2010-10-01",
      imports: 105.3364022,
      exports: 108.7990507
    },
    {
      date: "2011-01-01",
      imports: 109.0009899,
      exports: 110.1803001
    },
    {
      date: "2011-04-01",
      imports: 109.1372847,
      exports: 111.3552174
    },
    {
      date: "2011-07-01",
      imports: 112.3612201,
      exports: 112.6327662
    },
    {
      date: "2011-10-01",
      imports: 114.3636263,
      exports: 114.1177162
    },
    {
      date: "2012-01-01",
      imports: 116.8743198,
      exports: 114.1177162
    },
    {
      date: "2012-04-01",
      imports: 114.8042786,
      exports: 112.2179637
    },
    {
      date: "2012-07-01",
      imports: 116.9419548,
      exports: 114.6362193
    },
    {
      date: "2012-10-01",
      imports: 116.5689375,
      exports: 116.6043928
    },
    {
      date: "2013-01-01",
      imports: 113.0734373,
      exports: 112.8743779
    },
    {
      date: "2013-04-01",
      imports: 108.9671724,
      exports: 113.841894
    },
    {
      date: "2013-07-01",
      imports: 112.0558378,
      exports: 114.7741304
    },
    {
      date: "2013-10-01",
      imports: 111.2073259,
      exports: 115.3963341
    },
    {
      date: "2014-01-01",
      imports: 107.4402609,
      exports: 112.943868
    },
    {
      date: "2014-04-01",
      imports: 108.5603376,
      exports: 112.7022563
    },
    {
      date: "2014-07-01",
      imports: 109.5779371,
      exports: 113.0475687
    },
    {
      date: "2014-10-01",
      imports: 109.3063722,
      exports: 113.4965816
    },
    {
      date: "2015-01-01",
      imports: 105.9471668,
      exports: 113.7039829
    },
    {
      date: "2015-04-01",
      imports: 106.8294962,
      exports: 114.3251175
    },
    {
      date: "2015-07-01",
      imports: 105.7770545,
      exports: 113.0122891
    },
    {
      date: "2015-10-01",
      imports: 105.2349497,
      exports: 113.5650027
    },
    {
      date: "2016-01-01",
      imports: 101.2640573,
      exports: 111.5968291
    },
    {
      date: "2016-04-01",
      imports: 102.3839291,
      exports: 111.6652501
    },
    {
      date: "2016-07-01",
      imports: 103.4702908,
      exports: 112.2179637
    },
    {
      date: "2016-10-01",
      imports: 105.8457143,
      exports: 112.7022563
    },
    {
      date: "2017-01-01",
      imports: 109.1034672,
      exports: 112.425365
    },
    {
      date: "2017-04-01",
      imports: 106.5251387,
      exports: 111.6652501
    },
    {
      date: "2017-07-01",
      imports: 106.9965342,
      exports: 112.766401
    },
    {
      date: "2017-10-01",
      imports: 109.4457414,
      exports: 114.2524201
    },
    {
      date: "2018-01-01",
      imports: 110.1460623,
      exports: 114.9027314
    },
    {
      date: "2018-04-01",
      imports: 111.0622495,
      exports: 115.3171687
    },
    {
      date: "2018-07-01",
      imports: 114.5234012,
      exports: 116.7676991
    },
    {
      date: "2018-10-01",
      imports: 115.7449842,
      exports: 117.5965736
    },
    {
      date: "2019-01-01",
      imports: 112.0802353,
      exports: 116.8713084
    },
    {
      date: "2019-04-01",
      imports: 112.4161706,
      exports: 115.7316059
    },
    {
      date: "2019-07-01",
      imports: 111.4694438,
      exports: 116.5604804
    },
    {
      date: "2019-10-01",
      imports: 115.2359913,
      exports: 118.4254481
    },
    {
      date: "2020-01-01",
      imports: 113.0982211,
      exports: 117.389355
    },
    {
      date: "2020-04-01",
      imports: 106.5831121,
      exports: 115.6279966
    },
    {
      date: "2020-07-01",
      imports: 107.3975007,
      exports: 114.4882941
    },
    {
      date: "2020-10-01",
      imports: 109.3316737,
      exports: 116.5604804
    }
  ],
  "Sri Lanka": [
    {
      date: "1976-01-01",
      imports: 0,
      exports: 49.93519419
    },
    {
      date: "1976-04-01",
      imports: 0,
      exports: 50.45595519
    },
    {
      date: "1976-07-01",
      imports: 0,
      exports: 50.5909673
    },
    {
      date: "1976-10-01",
      imports: 0,
      exports: 54.77634279
    },
    {
      date: "1977-01-01",
      imports: 0,
      exports: 63.62927988
    },
    {
      date: "1977-04-01",
      imports: 0,
      exports: 77.90198892
    },
    {
      date: "1977-07-01",
      imports: 0,
      exports: 79.07852304
    },
    {
      date: "1977-10-01",
      imports: 0,
      exports: 93.75626842
    },
    {
      date: "1978-01-01",
      imports: 0,
      exports: 140.933358
    },
    {
      date: "1978-04-01",
      imports: 0,
      exports: 147.8575507
    },
    {
      date: "1978-07-01",
      imports: 0,
      exports: 139.6989616
    },
    {
      date: "1978-10-01",
      imports: 0,
      exports: 152.0429261
    },
    {
      date: "1998-04-01",
      imports: 0,
      exports: 91.09460106
    },
    {
      date: "1998-07-01",
      imports: 0,
      exports: 97.82591924
    },
    {
      date: "1998-10-01",
      imports: 0,
      exports: 87.33354935
    },
    {
      date: "1999-01-01",
      imports: 0,
      exports: 83.57249765
    },
    {
      date: "1999-04-01",
      imports: 0,
      exports: 90.70885217
    },
    {
      date: "1999-07-01",
      imports: 0,
      exports: 99.11817803
    },
    {
      date: "1999-10-01",
      imports: 0,
      exports: 95.820025
    },
    {
      date: "2000-01-01",
      imports: 0,
      exports: 100
    },
    {
      date: "2000-04-01",
      imports: 0,
      exports: 100
    },
    {
      date: "2000-07-01",
      imports: 0,
      exports: 100
    },
    {
      date: "2000-10-01",
      imports: 0,
      exports: 100
    },
    {
      date: "2001-01-01",
      imports: 0,
      exports: 108.877625
    },
    {
      date: "2001-04-01",
      imports: 0,
      exports: 112.4072274
    },
    {
      date: "2001-07-01",
      imports: 0,
      exports: 119.0421084
    },
    {
      date: "2001-10-01",
      imports: 0,
      exports: 106.4666944
    },
    {
      date: "2002-01-01",
      imports: 0,
      exports: 107.6818035
    },
    {
      date: "2002-04-01",
      imports: 0,
      exports: 107.6046537
    },
    {
      date: "2002-07-01",
      imports: 0,
      exports: 125.7734265
    },
    {
      date: "2002-10-01",
      imports: 0,
      exports: 109.5141107
    },
    {
      date: "2003-01-01",
      imports: 0,
      exports: 115.2810566
    },
    {
      date: "2003-04-01",
      imports: 0,
      exports: 124.9633539
    },
    {
      date: "2003-07-01",
      imports: 0,
      exports: 131.5403725
    },
    {
      date: "2003-10-01",
      imports: 0,
      exports: 111.3657054
    },
    {
      date: "2004-01-01",
      imports: 0,
      exports: 120.5658165
    },
    {
      date: "2004-04-01",
      imports: 0,
      exports: 133.7005663
    },
    {
      date: "2004-07-01",
      imports: 0,
      exports: 143.3057137
    },
    {
      date: "2004-10-01",
      imports: 0,
      exports: 130.0938141
    },
    {
      date: "2005-01-01",
      imports: 0,
      exports: 128.6472558
    },
    {
      date: "2005-04-01",
      imports: 0,
      exports: 140.1039979
    },
    {
      date: "2005-07-01",
      imports: 0,
      exports: 143.1514142
    },
    {
      date: "2005-10-01",
      imports: 0,
      exports: 127.7793208
    },
    {
      date: "2006-01-01",
      imports: 141.034,
      exports: 141.3131278
    },
    {
      date: "2006-04-01",
      imports: 153.716,
      exports: 148.59896
    },
    {
      date: "2006-07-01",
      imports: 161.874,
      exports: 155.8047493
    },
    {
      date: "2006-10-01",
      imports: 149.192,
      exports: 138.3507692
    },
    {
      date: "2007-01-01",
      imports: 158.158,
      exports: 158.2866577
    },
    {
      date: "2007-04-01",
      imports: 174.313,
      exports: 161.6494237
    },
    {
      date: "2007-07-01",
      imports: 178.11,
      exports: 173.7391797
    },
    {
      date: "2007-10-01",
      imports: 173.102,
      exports: 152.9224336
    },
    {
      date: "2008-01-01",
      imports: 186.43,
      exports: 168.6951272
    },
    {
      date: "2008-04-01",
      imports: 214.863,
      exports: 171.3371214
    },
    {
      date: "2008-07-01",
      imports: 220.436,
      exports: 182.3861269
    },
    {
      date: "2008-10-01",
      imports: 180.048,
      exports: 146.9977164
    },
    {
      date: "2009-01-01",
      imports: 155.543,
      exports: 158.2066148
    },
    {
      date: "2009-04-01",
      imports: 180.42,
      exports: 177.02171
    },
    {
      date: "2009-07-01",
      imports: 177.104,
      exports: 184.6279066
    },
    {
      date: "2009-10-01",
      imports: 174.53,
      exports: 181.8256338
    },
    {
      date: "2010-01-01",
      imports: 200.458,
      exports: 174.29948
    },
    {
      date: "2010-04-01",
      imports: 214.3,
      exports: 197.3587773
    },
    {
      date: "2010-07-01",
      imports: 198.36,
      exports: 190.472581
    },
    {
      date: "2010-10-01",
      imports: 0,
      exports: 209.3671404
    }
  ],
  Switzerland: [
    {
      date: "2005-01-01",
      imports: 120.8626218,
      exports: 118.1771347
    },
    {
      date: "2005-04-01",
      imports: 120.9785016,
      exports: 120.8427843
    },
    {
      date: "2005-07-01",
      imports: 122.7166984,
      exports: 120.1763719
    },
    {
      date: "2005-10-01",
      imports: 124.4548953,
      exports: 120.3985094
    },
    {
      date: "2006-01-01",
      imports: 127.2360103,
      exports: 124.5080526
    },
    {
      date: "2006-04-01",
      imports: 128.8583274,
      exports: 122.1756092
    },
    {
      date: "2006-07-01",
      imports: 129.4377263,
      exports: 125.2855338
    },
    {
      date: "2006-10-01",
      imports: 128.9742071,
      exports: 124.5080526
    },
    {
      date: "2007-01-01",
      imports: 130.712404,
      exports: 127.3958397
    },
    {
      date: "2007-04-01",
      imports: 134.5364371,
      exports: 129.7282832
    },
    {
      date: "2007-07-01",
      imports: 134.3046775,
      exports: 131.505383
    },
    {
      date: "2007-10-01",
      imports: 135.4634754,
      exports: 127.9511834
    },
    {
      date: "2008-01-01",
      imports: 134.7681967,
      exports: 133.2824827
    },
    {
      date: "2008-04-01",
      imports: 134.8840765,
      exports: 134.7263763
    },
    {
      date: "2008-07-01",
      imports: 136.274634,
      exports: 133.9488951
    },
    {
      date: "2008-10-01",
      imports: 131.291803,
      exports: 130.9500393
    },
    {
      date: "2009-01-01",
      imports: 126.7724911,
      exports: 135.9481324
    },
    {
      date: "2009-04-01",
      imports: 127.0042507,
      exports: 138.0584384
    },
    {
      date: "2009-07-01",
      imports: 128.6265678,
      exports: 136.2813386
    },
    {
      date: "2009-10-01",
      imports: 128.9742071,
      exports: 133.9488951
    },
    {
      date: "2010-01-01",
      imports: 126.7724911,
      exports: 140.2798131
    },
    {
      date: "2010-04-01",
      imports: 129.3218465,
      exports: 138.613782
    },
    {
      date: "2010-07-01",
      imports: 124.3390155,
      exports: 132.8382078
    },
    {
      date: "2010-10-01",
      imports: 126.5407315,
      exports: 132.2828641
    },
    {
      date: "2011-01-01",
      imports: 125.9613326,
      exports: 131.7275204
    },
    {
      date: "2011-04-01",
      imports: 125.1501741,
      exports: 129.9504207
    },
    {
      date: "2011-07-01",
      imports: 120.5149824,
      exports: 124.3969839
    },
    {
      date: "2011-10-01",
      imports: 125.2660538,
      exports: 128.3954584
    },
    {
      date: "2012-01-01",
      imports: 123.7596166,
      exports: 130.9500393
    },
    {
      date: "2012-04-01",
      imports: 126.0772124,
      exports: 128.3954584
    },
    {
      date: "2012-07-01",
      imports: 125.8454528,
      exports: 131.061108
    },
    {
      date: "2012-10-01",
      imports: 127.6995295,
      exports: 131.2832455
    },
    {
      date: "2013-01-01",
      imports: 129.5536061,
      exports: 132.6160703
    },
    {
      date: "2013-04-01",
      imports: 126.8883709,
      exports: 131.2832455
    },
    {
      date: "2013-07-01",
      imports: 127.4677699,
      exports: 128.950802
    },
    {
      date: "2013-10-01",
      imports: 129.9012455,
      exports: 128.7286646
    },
    {
      date: "2014-01-01",
      imports: 130.5965242,
      exports: 131.1721768
    },
    {
      date: "2014-04-01",
      imports: 128.9742071,
      exports: 132.1717954
    },
    {
      date: "2014-07-01",
      imports: 129.5536061,
      exports: 132.2828641
    },
    {
      date: "2014-10-01",
      imports: 129.2059667,
      exports: 134.7263763
    },
    {
      date: "2015-01-01",
      imports: 122.2531793,
      exports: 131.6164517
    },
    {
      date: "2015-04-01",
      imports: 118.7767856,
      exports: 126.8404961
    },
    {
      date: "2015-07-01",
      imports: 120.3991026,
      exports: 130.0614894
    },
    {
      date: "2015-10-01",
      imports: 122.2531793,
      exports: 132.8382078
    },
    {
      date: "2016-01-01",
      imports: 122.8325782,
      exports: 136.1702699
    },
    {
      date: "2016-04-01",
      imports: 125.3819336,
      exports: 136.0592011
    },
    {
      date: "2016-07-01",
      imports: 123.4119772,
      exports: 137.2809572
    },
    {
      date: "2016-10-01",
      imports: 125.729573,
      exports: 136.5034761
    },
    {
      date: "2017-01-01",
      imports: 126.8883709,
      exports: 139.6134007
    },
    {
      date: "2017-04-01",
      imports: 129.7853657,
      exports: 139.058057
    },
    {
      date: "2017-07-01",
      imports: 129.9012455,
      exports: 140.2798131
    },
    {
      date: "2017-10-01",
      imports: 126.4248518,
      exports: 142.6122565
    },
    {
      date: "2018-01-01",
      imports: 131.7553221,
      exports: 147.8324871
    },
    {
      date: "2018-04-01",
      imports: 129.0900869,
      exports: 145.8332499
    },
    {
      date: "2018-07-01",
      imports: 130.4806444,
      exports: 145.1668374
    },
    {
      date: "2018-10-01",
      imports: 132.1029615,
      exports: 146.4996623
    },
    {
      date: "2019-01-01",
      imports: 132.1029615,
      exports: 149.8317243
    },
    {
      date: "2019-04-01",
      imports: 131.4076828,
      exports: 151.6088241
    },
    {
      date: "2019-07-01",
      imports: 133.3776392,
      exports: 155.0519549
    },
    {
      date: "2019-10-01",
      imports: 135.1158361,
      exports: 155.8294361
    },
    {
      date: "2020-01-01",
      imports: 137.2827881,
      exports: 162.6379495
    },
    {
      date: "2020-04-01",
      imports: 131.7205582,
      exports: 157.3066502
    },
    {
      date: "2020-07-01",
      imports: 136.7381531,
      exports: 154.8298174
    },
    {
      date: "2020-10-01",
      imports: 140.4463064,
      exports: 157.0511921
    }
  ],
  Thailand: [
    {
      date: "1957-01-01",
      imports: 0,
      exports: 13.90923626
    },
    {
      date: "1957-04-01",
      imports: 0,
      exports: 13.92118577
    },
    {
      date: "1957-07-01",
      imports: 0,
      exports: 13.94508481
    },
    {
      date: "1957-10-01",
      imports: 0,
      exports: 13.94508481
    },
    {
      date: "1958-01-01",
      imports: 0,
      exports: 13.96898384
    },
    {
      date: "1958-04-01",
      imports: 0,
      exports: 14.08847899
    },
    {
      date: "1958-07-01",
      imports: 0,
      exports: 14.45891398
    },
    {
      date: "1958-10-01",
      imports: 0,
      exports: 14.72180333
    },
    {
      date: "1959-01-01",
      imports: 0,
      exports: 14.59035865
    },
    {
      date: "1959-04-01",
      imports: 0,
      exports: 14.92494509
    },
    {
      date: "1959-07-01",
      imports: 0,
      exports: 15.34317814
    },
    {
      date: "1959-10-01",
      imports: 0,
      exports: 14.98469267
    },
    {
      date: "1960-01-01",
      imports: 0,
      exports: 15.62996652
    },
    {
      date: "1960-04-01",
      imports: 0,
      exports: 15.6897141
    },
    {
      date: "1960-07-01",
      imports: 0,
      exports: 15.95260344
    },
    {
      date: "1960-10-01",
      imports: 0,
      exports: 15.12808686
    },
    {
      date: "1961-01-01",
      imports: 8.2620055,
      exports: 15.09223831
    },
    {
      date: "1961-04-01",
      imports: 8.27419135,
      exports: 15.64191603
    },
    {
      date: "1961-07-01",
      imports: 8.15233286,
      exports: 15.06833928
    },
    {
      date: "1961-10-01",
      imports: 8.15233286,
      exports: 15.15198589
    },
    {
      date: "1962-01-01",
      imports: 7.94517343,
      exports: 15.14003637
    },
    {
      date: "1962-04-01",
      imports: 7.78675739,
      exports: 15.24758202
    },
    {
      date: "1962-07-01",
      imports: 7.67708476,
      exports: 14.74570236
    },
    {
      date: "1962-10-01",
      imports: 7.738014,
      exports: 14.76960139
    },
    {
      date: "1963-01-01",
      imports: 7.72582815,
      exports: 14.93689461
    },
    {
      date: "1963-04-01",
      imports: 7.75019985,
      exports: 14.74570236
    },
    {
      date: "1963-07-01",
      imports: 7.78675739,
      exports: 14.87714703
    },
    {
      date: "1963-10-01",
      imports: 7.79894324,
      exports: 14.67400526
    },
    {
      date: "1964-01-01",
      imports: 7.7623857,
      exports: 14.50671204
    },
    {
      date: "1964-04-01",
      imports: 7.75019985,
      exports: 14.3991664
    },
    {
      date: "1964-07-01",
      imports: 7.7136423,
      exports: 14.81739945
    },
    {
      date: "1964-10-01",
      imports: 7.62834136,
      exports: 15.11613734
    },
    {
      date: "1965-01-01",
      imports: 7.75019985,
      exports: 14.87714703
    },
    {
      date: "1965-04-01",
      imports: 7.57959796,
      exports: 14.92494509
    },
    {
      date: "1965-07-01",
      imports: 7.55522627,
      exports: 14.69790429
    },
    {
      date: "1965-10-01",
      imports: 7.72582815,
      exports: 15.02054122
    },
    {
      date: "1966-01-01",
      imports: 7.61615551,
      exports: 15.22368298
    },
    {
      date: "1966-04-01",
      imports: 7.53085457,
      exports: 15.94065393
    },
    {
      date: "1966-07-01",
      imports: 7.61615551,
      exports: 15.58216845
    },
    {
      date: "1966-10-01",
      imports: 7.57959796,
      exports: 15.0085917
    },
    {
      date: "1967-01-01",
      imports: 7.55522627,
      exports: 15.47462281
    },
    {
      date: "1967-04-01",
      imports: 7.55522627,
      exports: 15.76141119
    },
    {
      date: "1967-07-01",
      imports: 7.75019985,
      exports: 16.08404811
    },
    {
      date: "1967-10-01",
      imports: 7.75019985,
      exports: 15.21173347
    },
    {
      date: "1968-01-01",
      imports: 7.33588099,
      exports: 15.24758202
    },
    {
      date: "1968-04-01",
      imports: 7.42118193,
      exports: 14.72180333
    },
    {
      date: "1968-07-01",
      imports: 7.62834136,
      exports: 15.49852184
    },
    {
      date: "1968-10-01",
      imports: 7.46992533,
      exports: 14.853248
    },
    {
      date: "1969-01-01",
      imports: 7.36025269,
      exports: 16.27524036
    },
    {
      date: "1969-04-01",
      imports: 7.32369514,
      exports: 15.89285586
    },
    {
      date: "1969-07-01",
      imports: 7.60396966,
      exports: 15.33122863
    },
    {
      date: "1969-10-01",
      imports: 7.54304042,
      exports: 15.10418783
    },
    {
      date: "1970-01-01",
      imports: 7.40899608,
      exports: 15.4626733
    },
    {
      date: "1970-04-01",
      imports: 7.53085457,
      exports: 14.59035865
    },
    {
      date: "1970-07-01",
      imports: 7.7136423,
      exports: 14.50671204
    },
    {
      date: "1970-10-01",
      imports: 7.738014,
      exports: 14.94884412
    },
    {
      date: "1971-01-01",
      imports: 7.79894324,
      exports: 14.60230817
    },
    {
      date: "1971-04-01",
      imports: 7.87205834,
      exports: 14.45891398
    },
    {
      date: "1971-07-01",
      imports: 8.12796116,
      exports: 13.77779159
    },
    {
      date: "1971-10-01",
      imports: 8.18889041,
      exports: 13.49100321
    },
    {
      date: "1972-01-01",
      imports: 8.15233286,
      exports: 14.63815672
    },
    {
      date: "1972-04-01",
      imports: 8.2863772,
      exports: 15.06833928
    },
    {
      date: "1972-07-01",
      imports: 8.29856304,
      exports: 15.24758202
    },
    {
      date: "1972-10-01",
      imports: 8.2376338,
      exports: 15.98845199
    },
    {
      date: "1973-01-01",
      imports: 8.51790832,
      exports: 19.66890282
    },
    {
      date: "1973-04-01",
      imports: 9.50496208,
      exports: 21.66447194
    },
    {
      date: "1973-07-01",
      imports: 10.82103375,
      exports: 22.64433223
    },
    {
      date: "1973-10-01",
      imports: 11.74715826,
      exports: 28.17695799
    },
    {
      date: "1974-01-01",
      imports: 14.87892141,
      exports: 32.46683412
    },
    {
      date: "1974-04-01",
      imports: 16.93832986,
      exports: 37.53342877
    },
    {
      date: "1974-07-01",
      imports: 17.75478173,
      exports: 33.04041087
    },
    {
      date: "1974-10-01",
      imports: 17.92538361,
      exports: 31.18823594
    },
    {
      date: "1975-01-01",
      imports: 18.05942795,
      exports: 33.85297794
    },
    {
      date: "1975-04-01",
      imports: 17.32827702,
      exports: 30.96119514
    },
    {
      date: "1975-07-01",
      imports: 17.4988789,
      exports: 29.94548631
    },
    {
      date: "1975-10-01",
      imports: 17.37702041,
      exports: 29.35996004
    },
    {
      date: "1976-01-01",
      imports: 18.36407417,
      exports: 28.45179685
    },
    {
      date: "1976-04-01",
      imports: 18.20565813,
      exports: 29.64674842
    },
    {
      date: "1976-07-01",
      imports: 18.29095908,
      exports: 30.81780095
    },
    {
      date: "1976-10-01",
      imports: 18.71746378,
      exports: 30.25617372
    },
    {
      date: "1977-01-01",
      imports: 19.86293357,
      exports: 30.35176984
    },
    {
      date: "1977-04-01",
      imports: 20.05790715,
      exports: 31.58256996
    },
    {
      date: "1977-07-01",
      imports: 20.31380998,
      exports: 30.96119514
    },
    {
      date: "1977-10-01",
      imports: 20.93528827,
      exports: 30.87754853
    },
    {
      date: "1978-01-01",
      imports: 21.84922693,
      exports: 32.59827879
    },
    {
      date: "1978-04-01",
      imports: 21.37397883,
      exports: 32.99261281
    },
    {
      date: "1978-07-01",
      imports: 22.36103258,
      exports: 33.05236039
    },
    {
      date: "1978-10-01",
      imports: 22.49507692,
      exports: 35.08377805
    },
    {
      date: "1979-01-01",
      imports: 23.51868822,
      exports: 36.21898204
    },
    {
      date: "1979-04-01",
      imports: 24.7372731,
      exports: 40.52080769
    },
    {
      date: "1979-07-01",
      imports: 26.67482306,
      exports: 41.53651652
    },
    {
      date: "1979-10-01",
      imports: 27.57657587,
      exports: 41.65601168
    },
    {
      date: "1980-01-01",
      imports: 30.19653337,
      exports: 44.66728963
    },
    {
      date: "1980-04-01",
      imports: 31.29325976,
      exports: 46.94964713
    },
    {
      date: "1980-07-01",
      imports: 32.62151728,
      exports: 47.18863744
    },
    {
      date: "1980-10-01",
      imports: 33.37703991,
      exports: 47.81001226
    },
    {
      date: "1981-01-01",
      imports: 34.03507575,
      exports: 47.3081326
    },
    {
      date: "1981-04-01",
      imports: 35.26584648,
      exports: 46.32827232
    },
    {
      date: "1981-07-01",
      imports: 37.03279456,
      exports: 47.55907243
    },
    {
      date: "1981-10-01",
      imports: 38.44635302,
      exports: 46.94964713
    },
    {
      date: "1982-01-01",
      imports: 38.47072472,
      exports: 43.25724678
    },
    {
      date: "1982-04-01",
      imports: 37.88580397,
      exports: 42.36103311
    },
    {
      date: "1982-07-01",
      imports: 37.88580397,
      exports: 41.38117282
    },
    {
      date: "1982-10-01",
      imports: 36.25290023,
      exports: 40.6761514
    },
    {
      date: "1983-01-01",
      imports: 46.19655287,
      exports: 44.29685465
    },
    {
      date: "1983-04-01",
      imports: 45.68474722,
      exports: 46.55531311
    },
    {
      date: "1983-07-01",
      imports: 44.39304724,
      exports: 45.68299847
    },
    {
      date: "1983-10-01",
      imports: 44.74643686,
      exports: 46.06538297
    },
    {
      date: "1984-01-01",
      imports: 44.70987931,
      exports: 44.82263334
    },
    {
      date: "1984-04-01",
      imports: 45.29480005,
      exports: 45.58740234
    },
    {
      date: "1984-07-01",
      imports: 45.3313576,
      exports: 43.17360017
    },
    {
      date: "1984-10-01",
      imports: 49.14552828,
      exports: 45.63520041
    },
    {
      date: "1985-01-01",
      imports: 40.51794732,
      exports: 48.22824531
    },
    {
      date: "1985-04-01",
      imports: 39.92084073,
      exports: 47.70246662
    },
    {
      date: "1985-07-01",
      imports: 39.09220301,
      exports: 46.23267619
    },
    {
      date: "1985-10-01",
      imports: 38.6169549,
      exports: 43.84277305
    },
    {
      date: "1986-01-01",
      imports: 39.05564546,
      exports: 45.95783733
    },
    {
      date: "1986-04-01",
      imports: 36.26508608,
      exports: 47.48737534
    },
    {
      date: "1986-07-01",
      imports: 35.94825401,
      exports: 48.70622594
    },
    {
      date: "1986-10-01",
      imports: 36.37475872,
      exports: 49.57854058
    },
    {
      date: "1987-01-01",
      imports: 37.80050303,
      exports: 49.62633864
    },
    {
      date: "1987-04-01",
      imports: 38.53165396,
      exports: 50.54645135
    },
    {
      date: "1987-07-01",
      imports: 40.11581431,
      exports: 51.69360486
    },
    {
      date: "1987-10-01",
      imports: 41.29784164,
      exports: 53.23509238
    },
    {
      date: "1988-01-01",
      imports: 41.49281522,
      exports: 55.49355085
    },
    {
      date: "1988-04-01",
      imports: 42.97948878,
      exports: 58.32956924
    },
    {
      date: "1988-07-01",
      imports: 44.39304724,
      exports: 60.40081862
    },
    {
      date: "1988-10-01",
      imports: 44.70987931,
      exports: 59.1142541
    },
    {
      date: "1989-01-01",
      imports: 46.31841136,
      exports: 59.12620361
    },
    {
      date: "1989-04-01",
      imports: 47.02519059,
      exports: 58.32956924
    },
    {
      date: "1989-07-01",
      imports: 47.09830568,
      exports: 57.47318728
    },
    {
      date: "1989-10-01",
      imports: 47.14704907,
      exports: 57.50106948
    },
    {
      date: "1990-01-01",
      imports: 47.62229718,
      exports: 57.29792771
    },
    {
      date: "1990-04-01",
      imports: 47.86601416,
      exports: 58.07066306
    },
    {
      date: "1990-07-01",
      imports: 48.84088206,
      exports: 57.76395883
    },
    {
      date: "1990-10-01",
      imports: 51.43646786,
      exports: 59.09035507
    },
    {
      date: "1991-01-01",
      imports: 51.68018483,
      exports: 58.86331427
    },
    {
      date: "1991-04-01",
      imports: 51.19275088,
      exports: 59.46079005
    },
    {
      date: "1991-07-01",
      imports: 50.75406032,
      exports: 60.14191245
    },
    {
      date: "1991-10-01",
      imports: 50.90029051,
      exports: 60.72743872
    },
    {
      date: "1992-01-01",
      imports: 50.60783014,
      exports: 60.14191245
    },
    {
      date: "1992-04-01",
      imports: 51.58269804,
      exports: 60.40480179
    },
    {
      date: "1992-07-01",
      imports: 51.48521125,
      exports: 60.95447951
    },
    {
      date: "1992-10-01",
      imports: 51.82641502,
      exports: 61.00227758
    },
    {
      date: "1993-01-01",
      imports: 51.39991031,
      exports: 60.81108533
    },
    {
      date: "1993-04-01",
      imports: 52.17980464,
      exports: 60.70353969
    },
    {
      date: "1993-07-01",
      imports: 51.08307824,
      exports: 60.61989308
    },
    {
      date: "1993-10-01",
      imports: 51.25368013,
      exports: 61.44440966
    },
    {
      date: "1994-01-01",
      imports: 51.75329993,
      exports: 62.20917866
    },
    {
      date: "1994-04-01",
      imports: 51.60706974,
      exports: 62.55571462
    },
    {
      date: "1994-07-01",
      imports: 54.00768196,
      exports: 62.85445251
    },
    {
      date: "1994-10-01",
      imports: 54.36107157,
      exports: 63.47582732
    },
    {
      date: "1995-01-01",
      imports: 57.83403849,
      exports: 65.39969935
    },
    {
      date: "1995-04-01",
      imports: 58.11431301,
      exports: 67.51476363
    },
    {
      date: "1995-07-01",
      imports: 58.89420733,
      exports: 69.05625115
    },
    {
      date: "1995-10-01",
      imports: 63.79291856,
      exports: 69.94051531
    },
    {
      date: "1996-01-01",
      imports: 66.64440718,
      exports: 74.60082643
    },
    {
      date: "1996-04-01",
      imports: 67.72894773,
      exports: 75.17440318
    },
    {
      date: "1996-07-01",
      imports: 67.41211566,
      exports: 75.48509059
    },
    {
      date: "1996-10-01",
      imports: 69.08157695,
      exports: 75.62848478
    },
    {
      date: "1997-01-01",
      imports: 70.75103823,
      exports: 77.87499373
    },
    {
      date: "1997-04-01",
      imports: 68.41135526,
      exports: 77.15802279
    },
    {
      date: "1997-07-01",
      imports: 84.19202948,
      exports: 96.55208674
    },
    {
      date: "1997-10-01",
      imports: 102.0808555,
      exports: 114.3807642
    },
    {
      date: "1998-01-01",
      imports: 115.8752364,
      exports: 124.0718214
    },
    {
      date: "1998-04-01",
      imports: 98.57133108,
      exports: 103.7695942
    },
    {
      date: "1998-07-01",
      imports: 95.07399247,
      exports: 106.0161032
    },
    {
      date: "1998-10-01",
      imports: 85.15471154,
      exports: 93.64835443
    },
    {
      date: "1999-01-01",
      imports: 83.98487005,
      exports: 96.2175003
    },
    {
      date: "1999-04-01",
      imports: 83.66803798,
      exports: 94.80745745
    },
    {
      date: "1999-07-01",
      imports: 87.99401431,
      exports: 93.94709232
    },
    {
      date: "1999-10-01",
      imports: 91.94222933,
      exports: 93.98294087
    },
    {
      date: "2000-01-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-04-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-07-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2000-10-01",
      imports: 100,
      exports: 100
    },
    {
      date: "2001-01-01",
      imports: 108.8196299,
      exports: 103.184068
    },
    {
      date: "2001-04-01",
      imports: 113.5477393,
      exports: 104.0324836
    },
    {
      date: "2001-07-01",
      imports: 112.7069157,
      exports: 102.5387941
    },
    {
      date: "2001-10-01",
      imports: 110.7449941,
      exports: 100.2683861
    },
    {
      date: "2002-01-01",
      imports: 109.4411082,
      exports: 98.84639376
    },
    {
      date: "2002-04-01",
      imports: 107.7472752,
      exports: 99.67091034
    },
    {
      date: "2002-07-01",
      imports: 105.8828404,
      exports: 99.81430453
    },
    {
      date: "2002-10-01",
      imports: 109.4045507,
      exports: 101.284095
    },
    {
      date: "2003-01-01",
      imports: 111.3421007,
      exports: 103.6859476
    },
    {
      date: "2003-04-01",
      imports: 109.4411082,
      exports: 102.3953999
    },
    {
      date: "2003-07-01",
      imports: 107.6619743,
      exports: 101.6664795
    },
    {
      date: "2003-10-01",
      imports: 104.0793348,
      exports: 100.4954269
    },
    {
      date: "2004-01-01",
      imports: 104.6886272,
      exports: 100.5312755
    },
    {
      date: "2004-04-01",
      imports: 108.5515413,
      exports: 104.0802816
    },
    {
      date: "2004-07-01",
      imports: 112.9993761,
      exports: 108.0953189
    },
    {
      date: "2004-10-01",
      imports: 111.5736318,
      exports: 108.0236218
    },
    {
      date: "2005-01-01",
      imports: 107.930063,
      exports: 105.8368604
    },
    {
      date: "2005-04-01",
      imports: 113.8645714,
      exports: 111.6443251
    },
    {
      date: "2005-07-01",
      imports: 121.6757004,
      exports: 116.7826168
    },
    {
      date: "2005-10-01",
      imports: 121.0298505,
      exports: 116.8662634
    },
    {
      date: "2006-01-01",
      imports: 117.3009807,
      exports: 113.8071874
    },
    {
      date: "2006-04-01",
      imports: 117.3984675,
      exports: 112.9348728
    },
    {
      date: "2006-07-01",
      imports: 118.5561232,
      exports: 112.2179018
    },
    {
      date: "2006-10-01",
      imports: 113.0968629,
      exports: 108.2028645
    },
    {
      date: "2007-01-01",
      imports: 109.6848252,
      exports: 107.7487829
    },
    {
      date: "2007-04-01",
      imports: 110.5134629,
      exports: 107.9997228
    },
    {
      date: "2007-07-01",
      imports: 111.5005167,
      exports: 105.9683051
    },
    {
      date: "2007-10-01",
      imports: 115.8630506,
      exports: 110.090888
    },
    {
      date: "2008-01-01",
      imports: 115.4609176,
      exports: 107.82048
    },
    {
      date: "2008-04-01",
      imports: 121.0420363,
      exports: 113.1380145
    },
    {
      date: "2008-07-01",
      imports: 128.6094484,
      exports: 121.1919881
    },
    {
      date: "2008-10-01",
      imports: 121.5050986,
      exports: 116.9738091
    },
    {
      date: "2009-01-01",
      imports: 119.6041061,
      exports: 116.988029
    },
    {
      date: "2009-04-01",
      imports: 121.3223108,
      exports: 117.850545
    },
    {
      date: "2009-07-01",
      imports: 123.1648112,
      exports: 118.8164244
    },
    {
      date: "2009-10-01",
      imports: 123.7412018,
      exports: 120.1619398
    },
    {
      date: "2010-01-01",
      imports: 123.57913,
      exports: 122.0129198
    },
    {
      date: "2010-04-01",
      imports: 123.4036538,
      exports: 120.9207341
    },
    {
      date: "2010-07-01",
      imports: 121.5911307,
      exports: 118.7937203
    },
    {
      date: "2010-10-01",
      imports: 118.8607694,
      exports: 116.2542092
    },
    {
      date: "2011-01-01",
      imports: 125.1657275,
      exports: 121.0497889
    },
    {
      date: "2011-04-01",
      imports: 128.8665698,
      exports: 121.0940021
    },
    {
      date: "2011-07-01",
      imports: 129.4575835,
      exports: 120.552689
    },
    {
      date: "2011-10-01",
      imports: 133.1133381,
      exports: 123.2090663
    },
    {
      date: "2012-01-01",
      imports: 134.44647,
      exports: 124.2152156
    },
    {
      date: "2012-04-01",
      imports: 135.3604087,
      exports: 125.6491574
    },
    {
      date: "2012-07-01",
      imports: 134.0930804,
      exports: 125.3743186
    },
    {
      date: "2012-10-01",
      imports: 131.0953616,
      exports: 123.1397592
    },
    {
      date: "2013-01-01",
      imports: 126.9156154,
      exports: 119.8655919
    },
    {
      date: "2013-04-01",
      imports: 125.3923843,
      exports: 119.5429549
    },
    {
      date: "2013-07-01",
      imports: 131.8508842,
      exports: 125.1233788
    },
    {
      date: "2013-10-01",
      imports: 133.6178323,
      exports: 125.8284002
    },
    {
      date: "2014-01-01",
      imports: 137.1761001,
      exports: 129.2220626
    },
    {
      date: "2014-04-01",
      imports: 135.9209577,
      exports: 128.6126373
    },
    {
      date: "2014-07-01",
      imports: 133.9102927,
      exports: 127.0233517
    },
    {
      date: "2014-10-01",
      imports: 130.4616974,
      exports: 126.7843614
    },
    {
      date: "2015-01-01",
      imports: 122.2118778,
      exports: 124.2749631
    },
    {
      date: "2015-04-01",
      imports: 125.7701457,
      exports: 127.2025945
    },
    {
      date: "2015-07-01",
      imports: 129.8280333,
      exports: 132.544028
    },
    {
      date: "2015-10-01",
      imports: 127.2080758,
      exports: 133.308797
    }
  ]
};

class Trade extends React.Component {
  constructor(props) {
    super(props);

    let noData = [];
    let date = [];
    let exported = [];
    let imported = [];
    //let exportss = [];
    let countries = [];
    var countri = {};
    const laborExchange = true;
    Object.keys(trade).forEach((country) => {
      if (!countri[country])
        countri[country] = {
          exportedData: [],
          importedData: [],
          exported: [],
          imported: []
          //exportsData: []
        };
      /*if (
        ["Saudi Arabia", "Russia", "India", "Germany", "China"].includes(
          country
        )
      ) {
        const usimport = usimports.filter((x) => x[0] === country);
        usimport.forEach((x) => {
          exportss.push(x[2] / 1000000);
          countri[country].exportsData.push([
            new Date(x[1] + "-01-01").getTime(),
            x[2] / 1000000
          ]);
        });
      }*/
      //countries.push(country);
      trade[country].forEach((data) => {
        const year = new Date(data.date).getTime();
        const fullyear = new Date(data.date).getFullYear();
        if (fullyear > 1979) {
          /*const data2 = gdpP[fullyear];
          if (!data2) return console.log(country, fullyear);
          const USD = data2[laborExchange ? "United States" : country];
          const data3 = gdpPD[fullyear];
          if (!data3) return console.log(country, fullyear);
          const FN = data3[country];*/
          var coefficience = 1; //0
          //if (!isNaN(USD) && !isNaN(FN)) coefficience = USD / FN;
          date.push(year);
          countri[country].year = fullyear;
          /*exported.push(data.exports * coefficience);
          countri[country].exported.push(data.exports * coefficience);
          countri[country].exportedData.push([
            year,
            data.exports * coefficience
          ]);*/
          imported.push(data.imports * coefficience);
          countri[country].imported.push(data.imports * coefficience);
          countri[country].importedData.push([
            year,
            data.imports * coefficience
          ]);
        }
      });
    });
    const arr = [
      ...Object.keys(countri).map((name, i) => {
        return { name, ...countri[name] };
      })
    ].sort((a, b) =>
      b.imported[b.imported.length - 1] > a.imported[a.imported.length - 1]
        ? //||b.year > a.year
          1
        : -1
    );
    //console.log(arr);
    arr.forEach((x) => {
      countries.push(x.name);
    });
    const all = [...exported, ...imported];
    var lowCurrency = Math.min(...all);
    var lowDate = Math.min(...date);
    var highCurrency = Math.max(...all);
    var highDate = Math.max(...date);
    const country = countries[0];
    var state = {
      country,
      lastcountry: country,
      laborExchange,
      ...countri,
      //"engl churchill; Is H; mlk pearl harbor, 911"
      date,
      countries,
      highCurrency,
      noData,
      yAxis: highCurrency - lowCurrency,
      xAxis: highDate - lowDate,
      lowCurrency,
      highDate,
      lowDate,
      exportToINData: []
    };
    this.state = state;
  }
  componentDidUpdate = () => {
    if (
      this.state.laborExchange !== this.state.laststate ||
      this.state.country !== this.state.lastcountry
    ) {
      this.setState(
        {
          laststate: this.state.laborExchange,
          lastcountry: this.state.country
        },
        () => {
          let noData = [];
          let date = [];
          let exported = [];
          let imported = [];
          //let exportss = [];
          var countri = {};
          let exportToIN = [];
          let exportToINData = [];
          Object.keys(trade).forEach((country) => {
            if (!countri[country])
              countri[country] = {
                exportedData: [],
                importedData: [],
                exported: [],
                imported: []
                //exportsData: []
              };
            /*if (
            ["Saudi Arabia", "Russia", "India", "Germany", "China"].includes(
              country
            )
          ) {
            const usimport = usimports.filter((x) => x[0] === country);
            usimport.forEach((x) => {
              exportss.push(x[2] / 1000000);
              countri[country].exportsData.push([
                new Date(x[1] + "-01-01").getTime(),
                x[2] / 1000000
              ]);
            });
          }*/
            //countries.push(country);
            trade[country].forEach((data) => {
              const year = new Date(data.date).getTime();
              const fullyear = new Date(data.date).getFullYear();
              if (fullyear > 1979) {
                /*const data2 = gdpP[fullyear];
                if (!data2) return console.log(country, fullyear);
                const USD = data2[laborExchange ? "United States" : country];
                const data3 = gdpPD[fullyear];
                if (!data3) return console.log(country, fullyear);
                const FN = data3[country];*/
                var coefficience = 1; //0
                //if (!isNaN(USD) && !isNaN(FN)) coefficience = USD / FN;
                date.push(year);
                countri[country].year = fullyear;
                /*exported.push(data.exports * coefficience);
                countri[country].exported.push(data.exports * coefficience);
                countri[country].exportedData.push([
                  year,
                  data.exports * coefficience
                ]);*/
                imported.push(data.imports * coefficience);
                countri[country].imported.push(data.imports * coefficience);
                countri[country].importedData.push([
                  year,
                  data.imports * coefficience
                ]);
              }
            });
          });
          const inexporter = inimports[this.state.country];
          inexporter &&
            Object.keys(inexporter).forEach((yr) => {
              const data2 = gdpP[yr];
              const indiagdp = gdpPD[yr]["India"];
              exportToIN.push(
                inexporter[yr] *
                  100000 *
                  (data2[
                    this.state.laborExchange
                      ? "United States"
                      : this.state.country
                  ] /
                    indiagdp)
              );
              exportToINData.push([
                new Date(yr + "-01-01").getTime(),
                inexporter[yr] *
                  100000 *
                  (data2[
                    this.state.laborExchange
                      ? "United States"
                      : this.state.country
                  ] /
                    indiagdp)
              ]);
            });
          const all = [...exported, ...imported]; //...exportToIN
          var lowCurrency = Math.min(...all);
          var lowDate = Math.min(...date);
          var highCurrency = Math.max(...all);
          var highDate = Math.max(...date);
          //console.log(dataData);
          //console.log(exportToINData);
          var state = {
            //exportToINData,
            ...countri,
            //"engl churchill; Is H; mlk pearl harbor, 911"
            date,
            highCurrency,
            noData,
            yAxis: highCurrency - lowCurrency,
            xAxis: highDate - lowDate,
            lowCurrency,
            highDate,
            lowDate
          };
          this.setState(state);
        }
      );
    }
  };
  render() {
    const countries = this.state.countries.filter(
      (name) =>
        this.state.laborExchange === "US" ||
        (!this.state.laborExchange &&
          !["France", "Germany", "United Kingdom", "United States"].includes(
            name
          )) ||
        (this.state.laborExchange && !["United States"].includes(name))
    );
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
    const noData = this.state.noData.map(([x, y]) => [
      (this.state.lowDate / this.state.xAxis) * 0.9 * this.props.lastWidth,
      0
    ]);
    //console.log(this.state.oilprice);

    var exps = {};
    countries.forEach((name) => {
      if (!this.state[name]) return console.log(name);
      exps[name] = this.state[name].exportedData.map(([x, y]) => [
        ((x - this.state.lowDate) / this.state.xAxis) *
          0.9 *
          this.props.lastWidth,
        ((y - this.state.lowCurrency) / this.state.yAxis) * 150
      ]);
    });
    var imps = {};
    countries.forEach((name) => {
      if (!this.state[name]) return console.log(name);
      imps[name] = this.state[name].importedData.map(([x, y]) => [
        ((x - this.state.lowDate) / this.state.xAxis) *
          0.9 *
          this.props.lastWidth,
        ((y - this.state.lowCurrency) / this.state.yAxis) * 150
      ]);
    });
    const exportToINData = this.state.exportToINData
      .filter((x) => x[1] !== 0)
      .map(([x, y]) => [
        ((x - this.state.lowDate) / this.state.xAxis) *
          0.9 *
          this.props.lastWidth,
        ((y - this.state.lowCurrency) / this.state.yAxis) * 150
      ]);
    /*var exps = {};
    countries.forEach((name) => {
      if (!this.state[name]) return console.log(name);
      exps[name] = this.state[name].exportsData.map(([x, y]) => [
        ((x - this.state.lowDate) / this.state.xAxis) *
          0.9 *
          this.props.lastWidth,
        ((y - this.state.lowCurrency) / this.state.yAxis) * 150
      ]);
    });*/
    const labelitem = {
      fontSize: "10px",
      color: "white",
      width: "max-content",
      margin: "0px 4px"
    };

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
            color: "white",
            bottom: "0px",
            zIndex: "1",
            backgroundColor: "rgba(255,255,255,.3)",
            padding: "4px 8px",
            position: "absolute",
            right: "0px"
          }}
        >
          import national currency
          <a
            style={{ color: "grey" }}
            href={"https://unstats.un.org/unsd/trade/data/tables.asp"}
          >
            {new Date(this.state.lowDate).getFullYear()}
            &nbsp;-&nbsp;
            {new Date(this.state.highDate).getFullYear()}
          </a>
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
              fontSize: "12px",
              backgroundColor: "rgba(250,250,250,.6)",
              color: "white",
              padding: "4px",
              maxWidth: "max-content",
              width: "calc(100% - 80px)"
            }}
          >
            <select
              value={this.state.country}
              onChange={(name) => {
                this.setState({ country: name.target.value });
              }}
            >
              {countries.map((name) => (
                <option key={name}>{name}</option>
              ))}
            </select>
            <div style={{ display: "flex", alignItems: "center" }}>
              {/*<input
                type="checkbox"
                checked={this.state.laborExchange === "US"}
                onChange={(x) =>
                  this.setState({
                    laborExchange: this.state.laborExchange !== "US" ? "US" : true
                  })
                }
              />{" "}
              U.S.{" "}
              <input
                type="checkbox"
                checked={this.state.laborExchange}
                onChange={(x) =>
                  this.setState({
                    laborExchange: this.state.laborExchange ? false : true
                  })
                }
              />{" "}
              U.K. GE FR <br />*/}
              <div
                style={{
                  border: "1px solid",
                  padding: "4px 10px",
                  userSelect: "none"
                }}
                onClick={() => {
                  const country = countries.find(
                    (x, i) => i === countries.indexOf(this.state.country) - 1
                  );

                  this.setState({
                    country: country ? country : countries[countries.length - 1]
                  });
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
                  const country = countries.find(
                    (x, i) => i === countries.indexOf(this.state.country) + 1
                  );

                  this.setState({
                    country: country ? country : countries[0]
                  });
                }}
              >
                {">"}
              </div>{" "}
              <span>
                {/*<a href="https://qr.ae/pG0Uat" style={{ color: "white" }}>
                  (saver-consumer)/labor
                </a>
              <br />
                <input
                  type="checkbox"
                  checked={this.state.laborExchange}
                  onChange={(x) =>
                    this.setState({
                      laborExchange: !this.state.laborExchange
                    })
                  }
                />
                import*(
                {this.state.laborExchange
                  ? `($GDP/p)/(GDP/p)`
                  : `USD/${
                      this.state.country && this.state.country.substring(0, 4)
                    }`}
                )*/}
              </span>
            </div>
            index{shortNumber(this.state.lowCurrency)}-
            {shortNumber(this.state.highCurrency)}
          </div>
        </div>
        <div style={{ transform: "translate(0px,230px)" }}>
          <svg style={linecss} xmlns="http://www.w3.org/2000/svg">
            {noData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={4}
                    height={4}
                    stroke="rgb(230,230,230)"
                    fill="transparent"
                    strokeWidth={0}
                    key={i}
                  />
                )
            )}
            {countries
              .sort((a, b) => b - a)
              .map((name, i) => {
                return exps[name].map(([x, y], i) => {
                  return (
                    !isNaN(x) &&
                    !isNaN(y) && (
                      <rect
                        style={{ zIndex: this.state.country === name ? 1 : 0 }}
                        x={x}
                        y={y}
                        width={2}
                        height={1}
                        stroke={this.state.country === name ? "red" : "thistle"}
                        fill="blue"
                        strokeWidth={1}
                        key={i}
                      />
                    )
                  );
                });
              })}
            {countries
              .sort((a, b) => b - a)
              .map((name, i) => {
                return imps[name].map(([x, y], i) => {
                  return (
                    !isNaN(x) &&
                    !isNaN(y) && (
                      <rect
                        style={{ zIndex: this.state.country === name ? 1 : 0 }}
                        x={x}
                        y={y}
                        width={2}
                        height={1}
                        stroke={
                          this.state.country === name
                            ? "royalblue"
                            : "lightsteelblue"
                        }
                        fill="blue"
                        strokeWidth={1}
                        key={i}
                      />
                    )
                  );
                });
              })}
            {exportToINData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={1}
                    stroke="orange"
                    fill="blue"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
          </svg>
        </div>
        {/*<div
          style={{
            backgroundColor: "rgba(250,250,250,0.6)",
            top: "10px",
            height: "40px",
            display: "flex",
            position: "relative",
            width: "100%",
            left: "2px",
            zIndex: "0",
            overflowX: "auto",
            overflowY: "hidden"
          }}
        >
          <div
            style={{
              fontSize: "15px",
              display: "flex",
              position: "absolute",
              width: "max-content"
            }}
          ></div>
          </div>*/}
      </div>
    );
  }
}

export default Trade; /**

        const basics =
          expense -
          poverty[yr].clothing +
          poverty[yr].food +
          poverty[yr].rentandutilities +
          poverty[yr].standardizedguaranteeschemesmedicine;
        var last2 = null;
        var lastexp = null;
        Object.keys(flows).forEach((x, i) => {
          if (yr === x) {
            const yar = Object.keys(flows)[i - 1];
            //var flo = flows[Object.keys(flows)[i - 1]];
            //if (flo) last3 = flo.income;
            var povert = flows[yar];
            if (povert) lastexp = povert.expenses;
          }
        });
        //var last3 = null;
        Object.keys(poverty).forEach((x, i) => {
          if (yr === x) {
            const yar = Object.keys(poverty)[i - 1];
            //var flo = flows[Object.keys(flows)[i - 1]];
            //if (flo) last3 = flo.income;
            var povert = poverty[yar];
            if (povert)
              last2 =
                lastexp -
                povert.clothing +
                povert.food +
                povert.rentandutilities +
                povert.standardizedguaranteeschemesmedicine;
          }
        });
        if (last2) {
          growthdebt.push((basics - last2) / last2);
          growthdebtData.push([year, (basics - last2) / last2]);
          //growthcurren.push((income - last3) / last3);
          //growthcurrenData.push([year, (income - last3) / last3]);
        }
* */
