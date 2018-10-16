module.exports = {
    type: [{
        name: "algemeen",
        selects: [{
                name: "Geslacht",
                options: [{
                        "coefficients": "GESLACHT Mannen",
                        "categorie": "Geslacht",
                        "name": "Man",
                        "gewicht": "-0,12611"
                    },
                    {
                        "coefficients": "GESLACHT Vrouwen",
                        "categorie": "Geslacht",
                        "name": "Vrouw",
                        "gewicht": "0"
                    }
                ]
            },
            {
                name: "Leeftijd moeder geboorte",
                options: [{
                        "coefficients": "Leeftijd moederbij _geboorte_cat 0 tot 20 jaar",
                        "categorie": "Leeftijd moeder",
                        "name": "Jonger dan 20 jaar",
                        "gewicht": "0,45150"
                    },
                    {
                        "coefficients": "Leeftijd moederbij _geboorte_cat 20 tot 25 jaar",
                        "categorie": "Leeftijd moeder",
                        "name": "20 tot 25 jaar",
                        "gewicht": "0,10852"
                    },
                    {
                        "coefficients": "Leeftijd moederbij _geboorte_cat 25 tot 30 jaar",
                        "categorie": "Leeftijd moeder",
                        "name": "25 tot 30 jaar",
                        "gewicht": "-0,08841"
                    },
                    {
                        "coefficients": "Leeftijd moederbij _geboorte_cat 30 tot 35 jaar",
                        "categorie": "Leeftijd moeder",
                        "name": "30 tot 35 jaar",
                        "gewicht": "0,23988"
                    },
                    {
                        "coefficients": "Leeftijd moederbij _geboorte_cat 35 tot 40 jaar",
                        "categorie": "Leeftijd moeder",
                        "name": "35 tot 40 jaar",
                        "gewicht": "0,23988"
                    },
                    {
                        "coefficients": "Leeftijd moederbij _geboorte_cat ouder dan 40 jaar",
                        "categorie": "Leeftijd moeder",
                        "name": "40 jaar en ouder",
                        "gewicht": "-0,11153"
                    },



                ]

            },
            {
                name: "Leeftijd vader bij geboorte",
                options: [{
                        "coefficients": "Leeftijd vaderbij _geboorte_cat 0 tot 25 jaar",
                        "categorie": "Leeftijd vader",
                        "name": "Jonger dan 25 jaar",
                        "gewicht": "-0,00587"
                    },
                    {
                        "coefficients": "Leeftijd vaderbij _geboorte_cat 25 tot 30 jaar",
                        "categorie": "Leeftijd vader",
                        "name": "25 tot 30 jaar",
                        "gewicht": "0,03107"
                    },
                    {
                        "coefficients": "Leeftijd vaderbij _geboorte_cat 25 tot 30 jaar",
                        "categorie": "Leeftijd vader",
                        "name": "30 tot 35 jaar",
                        "gewicht": "0"
                    },
                    {
                        "coefficients": "Leeftijd vaderbij _geboorte_cat 35 tot 40 jaar",
                        "categorie": "Leeftijd vader",
                        "name": "35 tot 40 jaar",
                        "gewicht": "-0,21624"
                    },

                ]
            },
            {
                name: "Leeftijdsverschil ouders",
                options: [{
                        "coefficients": "Leeftijdsverschil ouders meer dan 5 jaar",
                        "categorie": "Leeftijdsverschil ouders",
                        "name": "Minder dan 5 jaar",
                        "gewicht": "0,28581"
                    },
                    {
                        "coefficients": "Leeftijdsverschil ouders meer dan 5 jaar",
                        "categorie": "Leeftijdsverschil ouders",
                        "name": "Meer dan 5 jaar",
                        "gewicht": "0,28581"
                    }
                ]
            }

        ]
    }]











}
