module.exports = {
    type: [{
        name: "algemeen",
        selects: [{
                name: "Geslacht",
                options: [{
                        "coefficients": "GESLACHT Mannen",
                        "Categorie": "Geslacht",
                        "name": "Man",
                        "Gewicht": "-0,12611"
                    },
                    {
                        "coefficients": "GESLACHT Vrouwen",
                        "Categorie": "Geslacht",
                        "name": "Vrouw",
                        "Gewicht": "0"
                    }
                ]
            },
            {
                name: "Leeftijd moeder geboorte",
                options: [{
                        "coefficients": "Leeftijd moederbij _geboorte_cat 0 tot 20 jaar",
                        "Categorie": "Leeftijd moeder",
                        "name": "Jonger dan 20 jaar",
                        "Gewicht": "0,45150"
                    },
                    {
                        "coefficients": "Leeftijd moederbij _geboorte_cat 20 tot 25 jaar",
                        "Categorie": "Leeftijd moeder",
                        "name": "20 tot 25 jaar",
                        "Gewicht": "0,10852"
                    },
                    {
                        "coefficients": "Leeftijd moederbij _geboorte_cat 25 tot 30 jaar",
                        "Categorie": "Leeftijd moeder",
                        "name": "25 tot 30 jaar",
                        "Gewicht": "-0,08841"
                    },
                    {
                        "coefficients": "Leeftijd moederbij _geboorte_cat 30 tot 35 jaar",
                        "Categorie": "Leeftijd moeder",
                        "name": "30 tot 35 jaar",
                        "Gewicht": "0,23988"
                    },
                    {
                        "coefficients": "Leeftijd moederbij _geboorte_cat 35 tot 40 jaar",
                        "Categorie": "Leeftijd moeder",
                        "name": "35 tot 40 jaar",
                        "Gewicht": "0,23988"
                    },
                    {
                        "coefficients": "Leeftijd moederbij _geboorte_cat ouder dan 40 jaar",
                        "Categorie": "Leeftijd moeder",
                        "name": "40 jaar en ouder",
                        "Gewicht": "-0,11153"
                    },



                ]

            },
            {
                name: "Leeftijd vader bij geboorte",
                options: [{
                        "coefficients": "Leeftijd vaderbij _geboorte_cat 0 tot 25 jaar",
                        "Categorie": "Leeftijd vader",
                        "name": "Jonger dan 25 jaar",
                        "Gewicht": "-0,00587"
                    },
                    {
                        "coefficients": "Leeftijd vaderbij _geboorte_cat 25 tot 30 jaar",
                        "Categorie": "Leeftijd vader",
                        "name": "25 tot 30 jaar",
                        "Gewicht": "0,03107"
                    },
                    {
                        "coefficients": "Leeftijd vaderbij _geboorte_cat 25 tot 30 jaar",
                        "Categorie": "Leeftijd vader",
                        "name": "30 tot 35 jaar",
                        "Gewicht": "0"
                    },
                    {
                        "coefficients": "Leeftijd vaderbij _geboorte_cat 35 tot 40 jaar",
                        "Categorie": "Leeftijd vader",
                        "name": "35 tot 40 jaar",
                        "Gewicht": "-0,21624"
                    },

                ]
            },
            {
                name: "Leeftijdsverschil ouders",
                options: [{
                        "coefficients": "Leeftijdsverschil ouders meer dan 5 jaar",
                        "Categorie": "Leeftijdsverschil ouders",
                        "name": "Minder dan 5 jaar",
                        "Gewicht": "0,28581"
                    },
                    {
                        "coefficients": "Leeftijdsverschil ouders meer dan 5 jaar",
                        "Categorie": "Leeftijdsverschil ouders",
                        "name": "Meer dan 5 jaar",
                        "Gewicht": "0,28581"
                    }
                ]
            }

        ]
    }]











}
