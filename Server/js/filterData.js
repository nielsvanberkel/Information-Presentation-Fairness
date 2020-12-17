function filterData(input, var_one, var_two, scenario) {
    data_filter = [];
    // format the data
    var counter = 0;
    dataset.forEach(function (d) {
        var include = false;

        if (scenario == "recidivism") {
            if (var_two == "age") {
                d.x = +d.age;
            } else if (var_two == "juv_fel_count") {
                d.x = +d.juv_fel_count;
            } else if (var_two == "priors_count") {
                d.x = +d.priors_count;
            } else if (var_two == "height") {
                d.x = +d.height;
            }

            if (var_one == "race") {
                if (unique_var_ones.indexOf(d.race) === -1) {
                    unique_var_ones.push(d.race);
                }
                if (d.race == input) {
                    include = true;
                }
            }
            if (var_one == "sex") {
                if (unique_var_ones.indexOf(d.sex) === -1) {
                    unique_var_ones.push(d.sex);
                }
                if (d.sex == input) {
                    include = true;
                }
            }
            if (var_one == "charge") {
                if (unique_var_ones.indexOf(d.charge) === -1) {
                    unique_var_ones.push(d.charge);
                }
                if (d.charge == input) {
                    include = true;
                }
            }
            if (var_one == "violent") {
                if (unique_var_ones.indexOf(d.violent) === -1) {
                    unique_var_ones.push(d.violent);
                }
                if (d.violent == input) {
                    include = true;
                }
            }
            if (var_one == "hand") {
                if (unique_var_ones.indexOf(d.hand) === -1) {
                    unique_var_ones.push(d.hand);
                }
                if (d.hand == input) {
                    include = true;
                }
            }

            if (include == true) {
                d.y = +d.risk_recidivism_score;
                d.race = d.race;
                d.two_year_recid = d.two_year_recid;
                d.age = d.age;
                d.sex = d.sex;
                d.charge = d.charge;
                d.violent = d.violent;
                data_filter.push(d);
            }
        } else if (scenario == "lending") {
            // Lending data
            if (var_two == "age") {
                d.x = +d.age;
            } 
            if (var_two == "loan_amnt") {
                d.x = +d.loan_amnt;
            }
            if (var_two == "weight") {
                d.x = +d.weight;
            }

            
            if (var_one == "region") {
                if (unique_var_ones.indexOf(d.region) === -1) {
                    unique_var_ones.push(d.region);
                }
                if (d.region == input) {
                    include = true;
                }
            }

            if (var_one == "sex") {
                if (unique_var_ones.indexOf(d.sex) === -1) {
                    unique_var_ones.push(d.sex);
                }
                if (d.sex == input) {
                    include = true;
                }
            }

            if (var_one == "term") {
                if (unique_var_ones.indexOf(d.term) === -1) {
                    unique_var_ones.push(d.term);
                }
                if (d.term == input) {
                    include = true;
                }
            }

            if (var_one == "home_ownership") {
                if (unique_var_ones.indexOf(d.home_ownership) === -1) {
                    unique_var_ones.push(d.home_ownership);
                }
                if (d.home_ownership == input) {
                    include = true;
                }
            }

            if (var_one == "vegetarian") {
                if (unique_var_ones.indexOf(d.vegetarian) === -1) {
                    unique_var_ones.push(d.vegetarian);
                }
                if (d.vegetarian == input) {
                    include = true;
                }
            }
            

            if (include == true) {
                d.y = +d.sub_grade_int_map;
                d.term = d.term;
                d.region = d.region;
                d.sex = d.sex;
                d.home_ownership = d.home_ownership;
                d.weight = d.weight;
                d.vegetarian = d.vegetarian
                d.age = d.age;
                data_filter.push(d);
            }
        }

        // jitter (consistent)
        d.x = d.x + offset_x[counter];
        d.y = (d.y + offset_y[counter]) / 10;
        counter++;
    });

    unique_var_ones.sort();

    return data_filter;
}