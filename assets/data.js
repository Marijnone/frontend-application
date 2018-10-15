module.exports = {
    type: [{
        name: "algemeen",
        selects: [{
                name: "Geslacht",
                options: [{
                        "Coefficients": "GESLACHT Mannen",
                        "Categorie": "Geslacht",
                        "name": "Man",
                        "Gewicht": "-0,12611"
                    },
                    {
                        "Coefficients": "GESLACHT Vrouwen",
                        "Categorie": "Geslacht",
                        "Name": "Vrouw",
                        "Gewicht": "0"
                    }
                ]
            },
            {
                name: "Leeftijd moeder geboorte",
                options: [{
                        "Coefficients": "Leeftijd moederbij _geboorte_cat 0 tot 20 jaar",
                        "Categorie": "Leeftijd moeder",
                        "Name": "Jonger dan 20 jaar",
                        "Gewicht": "0,45150"
                    },
                    {
                        "Coefficients": "Leeftijd moederbij _geboorte_cat 20 tot 25 jaar",
                        "Categorie": "Leeftijd moeder",
                        "Name": "20 tot 25 jaar",
                        "Gewicht": "0,10852"
                    },
                    {
                        "Coefficients": "Leeftijd moederbij _geboorte_cat 25 tot 30 jaar",
                        "Categorie": "Leeftijd moeder",
                        "Name": "25 tot 30 jaar",
                        "Gewicht": "-0,08841"
                    },
                    {
                        "Coefficients": "Leeftijd moederbij _geboorte_cat 30 tot 35 jaar",
                        "Categorie": "Leeftijd moeder",
                        "Name": "30 tot 35 jaar",
                        "Gewicht": "0,23988"
                    },
                    {
                        "Coefficients": "Leeftijd moederbij _geboorte_cat 35 tot 40 jaar",
                        "Categorie": "Leeftijd moeder",
                        "Name": "35 tot 40 jaar",
                        "Gewicht": "0,23988"
                    },
                    {
                        "Coefficients": "Leeftijd moederbij _geboorte_cat ouder dan 40 jaar",
                        "Categorie": "Leeftijd moeder",
                        "Name": "40 jaar en ouder",
                        "Gewicht": "-0,11153"
                    },



                ]

            },
            {
                name: "Leeftijd vader bij geboorte",
                options: [{
                        "Coefficients": "Leeftijd vaderbij _geboorte_cat 0 tot 25 jaar",
                        "Categorie": "Leeftijd vader",
                        "Name": "Jonger dan 25 jaar",
                        "Gewicht": "-0,00587"
                    },
                    {
                        "Coefficients": "Leeftijd vaderbij _geboorte_cat 25 tot 30 jaar",
                        "Categorie": "Leeftijd vader",
                        "Name": "25 tot 30 jaar",
                        "Gewicht": "0,03107"
                    },
                    {
                        "Coefficients": "Leeftijd vaderbij _geboorte_cat 25 tot 30 jaar",
                        "Categorie": "Leeftijd vader",
                        "Name": "30 tot 35 jaar",
                        "Gewicht": "0"
                    },
                    {
                        "Coefficients": "Leeftijd vaderbij _geboorte_cat 35 tot 40 jaar",
                        "Categorie": "Leeftijd vader",
                        "Name": "35 tot 40 jaar",
                        "Gewicht": "-0,21624"
                    },

                ]
            },
            {
                name: "Leeftijdsverschil ouders",
                options: [{
                        "Coefficients": "Leeftijdsverschil ouders meer dan 5 jaar",
                        "Categorie": "Leeftijdsverschil ouders",
                        "Name": "Minder dan 5 jaar",
                        "Gewicht": "0,28581"
                    },
                    {
                        "Coefficients": "Leeftijdsverschil ouders meer dan 5 jaar",
                        "Categorie": "Leeftijdsverschil ouders",
                        "Name": "Meer dan 5 jaar",
                        "Gewicht": "0,28581"
                    }
                ]
            }

        ]
    }]











}
