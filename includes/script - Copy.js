// Variables


var vitals = {
    age: 0,
    height: 0,
    weight: 0,
    gender: 0
}
var strength = {
  bench: 0,
  deadlift: 0,
  squat: 0
}
var aerobic = {
  beepLevel: 0,
  beepShuttles:0,
  stepBPM: 0
}
var speed = {
  speed: 0
}
var agility = {
  illinois: 0
}
var flexibility = {
  sitreach: 0,
  calf: 0,
  groin: 0,
  trunk: 0
}
var results = {
  bench: 0,
  deadlift: 0,
  squat: 0,
  strength: 0,
  beepVO2: 0,
  stepVO2: 0,
  beep: 0,
  step: 0,
  aerobic:0,
  speed: 0,
  flex: 0
}


init();



// Vitals/profile form
function vitalsStore() {
    if(parseInt(document.getElementById('vitals-age').value) >= 0) {
      vitals.age = parseInt(document.getElementById('vitals-age').value);
    } else {
      vitals.age;
    };
    if(parseInt(document.getElementById("vitals-weight").value) >= 0) {
      vitals.weight = parseInt(document.getElementById("vitals-weight").value);
    } else {
      vitals.weight;
    };
    if(parseInt(document.getElementById('vitals-height').value) >= 0) {
      vitals.height = parseInt(document.getElementById('vitals-height').value);
    } else {
      vitals.height;
    };
    if(document.getElementById("vitals-gender").value > 0) {
      vitals.gender = document.getElementById("vitals-gender").value;
    } else {
      vitals.gender;
    };

    localStorage.vitals_age = vitals.age;
    localStorage.vitals_weight = vitals.weight;
    localStorage.vitals_height = vitals.height;
    localStorage.vitals_gender = vitals.gender;

    writeResults();
    document.querySelector('.profile_list').classList.add('hidden');
    document.querySelector('.profile_list-results').classList.remove('hidden');
};




// Strength form
document.querySelector('#submit-strength').addEventListener('click', function() {
    if(parseInt(document.getElementById("strength-bench").value) >= 0){
      strength.bench = parseInt(document.getElementById("strength-bench").value);
    } else {
      strength.bench;
    };
    if(parseInt(document.getElementById("strength-deadlift").value) >= 0){
      strength.deadlift = parseInt(document.getElementById("strength-deadlift").value);
    } else {
      strength.deadlift;
    };
    if(parseInt(document.getElementById("strength-squat").value) >= 0){
      strength.squat = parseInt(document.getElementById("strength-squat").value);
    } else {
      strength.squat;
    };
    

    localStorage.strength_bench = strength.bench;
    localStorage.strength_deadlift = strength.deadlift;
    localStorage.strength_squat = strength.squat;


    document.querySelector('.strength_list').classList.add('hidden');
    document.querySelector('.strength_list-results').classList.remove('hidden');

    writeResults()
});
document.querySelector('#submit-strength-edit').addEventListener('click', function() {
    document.querySelector('.strength_list').classList.remove('hidden');
    document.querySelector('.strength_list-results').classList.add('hidden');
    writeResults()
});
document.querySelector('#cancel-strength').addEventListener('click', function() {
    document.querySelector('.strength_list').classList.add('hidden');
    document.querySelector('.strength_list-results').classList.remove('hidden');
    writeResults()
});


// Aerobic form
function aerobicStore() {
    if(parseInt(document.getElementById('aerobic-beep-level').value) >= 0){
      aerobic.beepLevel = parseInt(document.getElementById('aerobic-beep-level').value);
    } else {
      aerobic.beepLevel;
    };
    if(parseInt(document.getElementById('aerobic-beep-shuttles').value) >= 0){
      aerobic.beepShuttles = parseInt(document.getElementById('aerobic-beep-shuttles').value);
    } else {
      aerobic.beepShuttles;
    };
    if(parseInt(document.getElementById('aerobic-step').value) >= 0){
      aerobic.stepBPM = parseInt(document.getElementById('aerobic-step').value);
    } else {
      aerobic.stepBPM;
    }

    
    localStorage.aerobic_beepLevel = aerobic.beepLevel;
    localStorage.aerobic_beepShuttles = aerobic.beepShuttles;
    localStorage.aerobic_stepBPM = aerobic.stepBPM;

    

    writeResults()
};

document.querySelector('#submit-aerobic-edit').addEventListener('click', function() {
    document.querySelector('.aerobic_list').classList.remove('hidden');
    document.querySelector('.aerobic_list-results').classList.add('hidden');
    writeResults()
});
document.querySelector('#cancel-aerobic').addEventListener('click', function() {
    document.querySelector('.aerobic_list').classList.add('hidden');
    document.querySelector('.aerobic_list-results').classList.remove('hidden');
    writeResults()
});


// Speed form
document.getElementById('submit-speed').addEventListener('click', function() {
    if(parseInt(document.getElementById('speed-input').value) >= 0){
      speed.speed = parseInt(document.getElementById('speed-input').value);
    } else {
      speed.speed;
    };
   
    localStorage.speed = speed.speed;

    document.querySelector('.speed_list').classList.add('hidden');
    document.querySelector('.speed_list-results').classList.remove('hidden');
    
    writeResults();
});

document.querySelector('#submit-speed-edit').addEventListener('click', function() {
    document.querySelector('.speed_list').classList.remove('hidden');
    document.querySelector('.speed_list-results').classList.add('hidden');
    writeResults()
});
document.querySelector('#cancel-speed').addEventListener('click', function() {
    document.querySelector('.speed_list').classList.add('hidden');
    document.querySelector('.speed_list-results').classList.remove('hidden');
    writeResults();
});

// Agility form
document.getElementById('submit-agility').addEventListener('click', function() {
    if(parseInt(document.getElementById('agility-illinois').value) >= 0){
      agility.illinois = parseInt(document.getElementById('agility-illinois').value);
    } else {
      agility.illinois;
    };
   
    localStorage.agility_illinois = agility.illinois;

    document.querySelector('.agility_list').classList.add('hidden');
    document.querySelector('.agility_list-results').classList.remove('hidden');
    
    writeResults();
});

document.querySelector('#submit-agility-edit').addEventListener('click', function() {
    document.querySelector('.agility_list').classList.remove('hidden');
    document.querySelector('.agility_list-results').classList.add('hidden');
    writeResults()
});
document.querySelector('#cancel-agility').addEventListener('click', function() {
    document.querySelector('.agility_list').classList.add('hidden');
    document.querySelector('.agility_list-results').classList.remove('hidden');
    writeResults();
});

// Flexibility form
document.getElementById('submit-flexibility').addEventListener('click', function() {
    if(parseInt(document.getElementById('flexibility-sitreach').value) >= 0 || parseInt(document.getElementById('flexibility-sitreach').value) < 0){
      flexibility.sitreach = parseInt(document.getElementById('flexibility-sitreach').value);
    } else {
      flexibility.sitreach;
    };
    if(parseInt(document.getElementById('flexibility-calf').value) >= 0){
      flexibility.calf = parseInt(document.getElementById('flexibility-calf').value);
    } else {
      flexibility.calf;
    };
    if(parseInt(document.getElementById('flexibility-groin').value) >= 0){
      flexibility.groin = parseInt(document.getElementById('flexibility-groin').value);
    } else {
      flexibility.groin;
    };
    if(parseInt(document.getElementById('flexibility-trunk').value) >= 0){
      flexibility.trunk = parseInt(document.getElementById('flexibility-trunk').value);
    } else {
      flexibility.trunk;
    };

    localStorage.flexibility_sitreach = flexibility.sitreach;
    localStorage.flexibility_calf = flexibility.calf;
    localStorage.flexibility_groin = flexibility.groin;
    localStorage.flexibility_trunk = flexibility.trunk;

    document.querySelector('.flexibility_list').classList.add('hidden');
    document.querySelector('.flexibility_list-results').classList.remove('hidden');
    
    writeResults();
});

document.querySelector('#submit-flexibility-edit').addEventListener('click', function() {
    document.querySelector('.flexibility_list').classList.remove('hidden');
    document.querySelector('.flexibility_list-results').classList.add('hidden');
    writeResults()
});
document.querySelector('#cancel-flexibility').addEventListener('click', function() {
    document.querySelector('.flexibility_list').classList.add('hidden');
    document.querySelector('.flexibility_list-results').classList.remove('hidden');
    writeResults();
});









// Reusable functions



function init() {
      

      if(localStorage.vitals_age != undefined){vitals.age = localStorage.vitals_age;}else{vitals.age}
      if(localStorage.vitals_weight != undefined){vitals.weight = localStorage.vitals_weight}else{vitals.weight};
      if(localStorage.vitals_height != undefined){vitals.height = localStorage.vitals_height;}else{vitals.height};
      if(localStorage.vitals_gender != undefined){vitals.gender = localStorage.vitals_gender;}else{vitals.genger};
      if(localStorage.strength_bench != undefined){strength.bench = localStorage.strength_bench}else{strength.bench};
      if(localStorage.strength_deadlift != undefined){strength.deadlift = localStorage.strength_deadlift}else{strength.deadlift};
      if(localStorage.strength_squat != undefined){strength.squat = localStorage.strength_squat;}else{strength.squat};
      if(localStorage.aerobic_beepLevel != undefined){aerobic.beepLevel = localStorage.aerobic_beepLevel}else{aerobic.beepLevel};
      if(localStorage.aerobic_beepShuttles != undefined){aerobic.beepShuttles = localStorage.aerobic_beepShuttles}else{aerobic.beepShuttles};
      if(localStorage.aerobic_stepBPM != undefined){aerobic.stepBPM = localStorage.aerobic_stepBPM}else{aerobic.stepBPM};
      if(localStorage.speed != undefined){speed.speed = localStorage.speed}else{speed.speed};
      if(localStorage.agility_illinois != undefined){agility.illinois = localStorage.agility_illinois}else{agility.illinois};
      if(localStorage.flexibility_sitreach != undefined){flexibility.sitreach = localStorage.flexibility_sitreach}else{flexibility.sitreach};
      if(localStorage.flexibility_calf != undefined){flexibility.calf = localStorage.flexibility_calf}else{flexibility.calf};
      if(localStorage.flexibility_groin != undefined){flexibility.groin = localStorage.flexibility_groin}else{flexibility.groin};
      if(localStorage.flexibility_trunk != undefined){flexibility.trunk = localStorage.flexibility_trunk}else{flexibility.trunk};

    


    writeResults();

    return vitals.age = localStorage.vitals_age, 
            vitals.weight = localStorage.vitals_weight, 
            vitals.height = localStorage.vitals_height, 
            vitals.gender = localStorage.vitals_gender, 
            strength.age = localStorage.strength_age,
            strength.weight = localStorage.strength_weight,
            strength.height = localStorage.strength_height,
            aerobic.beepLevel = localStorage.aerobic_beepLevel,
            aerobic.beepShuttles = localStorage.aerobic_beepShuttles,
            aerobic.stepBPM = localStorage.aerobic_stepBPM,
            speed.speed = localStorage.speed,
            agility.illinois = localStorage.agility_illinois,
            flexibility.sitreach = localStorage.flexibility_sitreach,
            flexibility.calf = localStorage.flexibility_calf,
            flexibility.groin = localStorage.flexibility_groin,
            flexibility.trunk = localStorage.flexibility_trunk
};

//Calculations
  //Bench 1RM
function writeResults(){

  // write vitals results 
    document.getElementById("vitals-age-result").textContent = vitals.age;
    document.getElementById("vitals-weight-result").textContent = vitals.weight + ' kg';
    document.getElementById("vitals-height-result").textContent = vitals.height + ' cm';
    
    if(vitals.gender == 1){
        document.getElementById("vitals-gender-result").textContent = "Male";
      } else if (vitals.gender == 2){
        document.getElementById("vitals-gender-result").textContent = "Female";
      } else {
        document.getElementById("vitals-gender-result").textContent = "Details missing";
      }

  // write stength results
    document.getElementById("strength-bench-result").textContent = strength.bench + ' kg';
    document.getElementById("strength-bench-result").value = strength.bench;
    document.getElementById("strength-deadlift-result").textContent = strength.deadlift + ' kg';
    document.getElementById("strength-squat-result").textContent = strength.squat + ' kg';


  //Overall Strength Calcs
  //bench
if(strength.bench > 0){  
  if (vitals.gender == "1") {
    if ((strength.bench/vitals.weight) < 0.68) {
        results.bench = 1;
        document.getElementById("strength-bench-result").textContent = "(weak) " + strength.bench + ' kg';
      } else if ((strength.bench/vitals.weight) < 0.91) {
        results.bench = 2;
        document.getElementById("strength-bench-result").textContent = "(below average) " + strength.bench + ' kg';
      } else if ((strength.bench/vitals.weight) < 1.19) {
        results.bench = 3;
        document.getElementById("strength-bench-result").textContent = "(average) " + strength.bench + ' kg';
      } else if ((strength.bench/vitals.weight) < 1.51) {
        results.bench = 4;
        document.getElementById("strength-bench-result").textContent = "(above average) " + strength.bench + ' kg';
      } else if ((strength.bench/vitals.weight) < 1.85) {
        results.bench = 5;
        document.getElementById("strength-bench-result").textContent = "(good) " + strength.bench + ' kg';
      } else {
        results.bench = 6;
        document.getElementById("strength-bench-result").textContent = "(excellent) " + strength.bench + ' kg';
      } 
  } else {
    if ((strength.bench/vitals.weight) < 0.28) {
      results.bench = 1;
      document.getElementById("strength-bench-result").textContent = "(weak) " + strength.bench + ' kg';
    } else if ((strength.bench/vitals.weight) < 0.46) {
      results.bench = 2;
      document.getElementById("strength-bench-result").textContent = "(below average) " + strength.bench + ' kg';
    } else if ((strength.bench/vitals.weight) < 0.71) {
      results.bench = 3;
      document.getElementById("strength-bench-result").textContent = "(average) " + strength.bench + ' kg';
    } else if ((strength.bench/vitals.weight) < 1.01) {
      results.bench = 4;
      document.getElementById("strength-bench-result").textContent = "(above average) " + strength.bench + ' kg';
    } else if ((strength.bench/vitals.weight) < 1.34) {
      results.bench = 5;
      document.getElementById("strength-bench-result").textContent = "(good) " + strength.bench + ' kg';
    } else {
      results.bench = 6;
      document.getElementById("strength-bench-result").textContent = "(excellent) " + strength.bench + ' kg';
    } 
  }
} else {
  document.getElementById("strength-bench-result").textContent = "Unknown" ;
}
//deadlift calc
if(strength.deadlift > 0){  
  if (vitals.gender == "1") {
    if ((strength.deadlift/vitals.weight) < 0.99) {
        results.deadlift = 1;
        document.getElementById("strength-deadlift-result").textContent = "(weak) " + strength.deadlift + ' kg';
      } else if ((strength.deadlift/vitals.weight) < 1.41) {
        results.deadlift = 2;
        document.getElementById("strength-deadlift-result").textContent = "(below average) " + strength.deadlift + ' kg';
      } else if ((strength.deadlift/vitals.weight) < 1.80) {
        results.deadlift = 3;
        document.getElementById("strength-deadlift-result").textContent = "(average) " + strength.deadlift + ' kg';
      } else if ((strength.deadlift/vitals.weight) < 2.24) {
        results.deadlift = 4;
        document.getElementById("strength-deadlift-result").textContent = "(above average) " + strength.deadlift + ' kg';
      } else if ((strength.deadlift/vitals.weight) < 2.70) {
        results.deadlift = 5;
        document.getElementById("strength-deadlift-result").textContent = "(good) " + strength.deadlift + ' kg';
      } else {
        results.deadlift = 6;
        document.getElementById("strength-deadlift-result").textContent = "(excellent) " + strength.deadlift + ' kg';
      } 
    } else {
      if ((strength.deadlift/vitals.weight) < 0.56) {
        results.deadlift = 1;
        document.getElementById("strength-deadlift-result").textContent = "(weak) " + strength.deadlift + ' kg';
      } else if ((strength.deadlift/vitals.weight) < 0.73) {
        results.deadlift = 2;
        document.getElementById("strength-deadlift-result").textContent = "(below average) " + strength.deadlift + ' kg';
      } else if ((strength.deadlift/vitals.weight) < 1.21) {
        results.deadlift = 3;
        document.getElementById("strength-deadlift-result").textContent = "(average) " + strength.deadlift + ' kg';
      } else if ((strength.deadlift/vitals.weight) < 1.64) {
        results.deadlift = 4;
        document.getElementById("strength-deadlift-result").textContent = "(above average) " + strength.deadlift + ' kg';
      } else if ((strength.deadlift/vitals.weight) < 2.11) {
        results.deadlift = 5;
        document.getElementById("strength-deadlift-result").textContent = "(good) " + strength.deadlift + ' kg';
      } else {
        results.deadlift = 6;
        document.getElementById("strength-deadlift-result").textContent = "(excellent) " + strength.deadlift + ' kg';
      } 
    }
  } else {
      results.deadlift = 6;
      document.getElementById("strength-deadlift-result").textContent = 'Unknown'; 
  }
  //squat
if(strength.squat > 0) { 
  if (vitals.gender == "1") {
    if ((strength.squat/vitals.weight) < 0.91) {
        results.squat = 1;
        document.getElementById("strength-squat-result").textContent = "(weak) " + strength.squat + ' kg';
      } else if ((strength.squat/vitals.weight) < 1.20) {
        results.squat = 2;
        document.getElementById("strength-squat-result").textContent = "(below average) " + strength.squat + ' kg';
      } else if ((strength.squat/vitals.weight) < 1.56) {
        results.squat = 3;
        document.getElementById("strength-squat-result").textContent = "(average) " + strength.squat + ' kg';
      } else if ((strength.squat/vitals.weight) < 1.97) {
        results.squat = 4;
        document.getElementById("strength-squat-result").textContent = "(above average) " + strength.squat + ' kg';
      } else if ((strength.squat/vitals.weight) < 2.40) {
        results.squat = 5;
        document.getElementById("strength-squat-result").textContent = "(good) " + strength.squat + ' kg';
      } else {
        results.squat = 6;
        document.getElementById("strength-squat-result").textContent = "(excellent) " + strength.squat + ' kg';
      } 
    } else {
      if ((strength.squat/vitals.weight) < 0.44) {
        results.squat = 1;
        document.getElementById("strength-squat-result").textContent = "(weak) " + strength.squat + ' kg';
      } else if ((strength.squat/vitals.weight) < 0.69) {
        results.squat = 2;
        document.getElementById("strength-squat-result").textContent = "(below average) " + strength.squat + ' kg';
      } else if ((strength.squat/vitals.weight) < 1.03) {
        results.squat = 3;
        document.getElementById("strength-squat-result").textContent = "(average) " + strength.squat + ' kg';
      } else if ((strength.squat/vitals.weight) < 1.42) {
        results.squat = 4;
        document.getElementById("strength-squat-result").textContent = "(above average) " + strength.squat + ' kg';
      } else if ((strength.squat/vitals.weight) < 1.87) {
        results.squat = 5;
        document.getElementById("strength-squat-result").textContent = "(good) " + strength.squat + ' kg';
      } else {
        results.squat = 6;
        document.getElementById("strength-squat-result").textContent = "(excellent) " + strength.squat + ' kg';
      } 
    }
  } else {
      results.squat = 0;
      document.getElementById("strength-squat-result").textContent = 'Unknown';
  }

results.strength = Math.round((results.bench + results.deadlift + results.squat) / 3);

if(results.strength >= 0){
  if (results.strength <= 1) {
      document.querySelector(".test_strength_result").textContent = "Weak";
      document.querySelector("#strength-overall").textContent = "Weak";
    } else if (results.strength <= 2) {
      document.querySelector(".test_strength_result").textContent = "Below Average";
      document.querySelector("#strength-overall").textContent = "Below Average";
    } else if (results.strength <= 3) {
      document.querySelector(".test_strength_result").textContent = "Average";
      document.querySelector("#strength-overall").textContent = "Average";
    } else if (results.strength <= 4) {
      document.querySelector(".test_strength_result").textContent = "Above Average";
      document.querySelector("#strength-overall").textContent = "Above Average";
    } else if (results.strength <= 5) {
      document.querySelector(".test_strength_result").textContent = "Good";
      document.querySelector("#strength-overall").textContent = "Good";
    } else {
      document.querySelector('.test_strength_result').textContent = "Excellent";
      document.querySelector('#strength-overall').textContent = "Excellent";
    };
}  else {
    document.querySelector(".test_strength_result").textContent = "Unknown";
    document.querySelector("#strength-overall").textContent = "Unknown";
}



// aerobic results
    if(+aerobic.beepLevel > 0 && +aerobic.beepLevel > 0){
        results.beepVO2 = (3.46 * (+aerobic.beepLevel + +aerobic.beepShuttles / (+aerobic.beepLevel * 0.4325 + 7.0048)) + 12.2).toFixed(2);
    } else {
      results.beepVO2 = 0;
    }
    
//aerobic results for each person

var ageGp;

    if(vitals.age<=25){ageGp=0;}
    else if(vitals.age<=35){ageGp=1;}
    else if(vitals.age<=45){ageGp=2;}
    else if(vitals.age<=55){ageGp=3;}
    else if(vitals.age<=65){ageGp=4;}
    else {ageGp=5;};
  
  if(results.beepVO2 > 0) {    
    if(vitals.gender == 1){
            var maleValB=[[61,57,52,46,42,38],[52,49,43,39,36,33],[47,43,39,36,32,29],[42,40,35,32,30,26],[37,35,31,29,26,22],[30,30,26,25,22,20],[0,0,0,0,0,0]];
            
      if(results.beepVO2 >= maleValB[ageGp][0]){
            results.beep = 7;
        } else if (results.beepVO2 >= maleValB[ageGp][1]){
            results.beep = 6;
        } else if (results.beepVO2 >= maleValB[ageGp][2]){
            results.beep = 5;
        } else if (results.beepVO2 >= maleValB[ageGp][3]){
            results.beep = 4;
        } else if (results.beepVO2 >= maleValB[ageGp][4]){
            results.beep = 3;
        } else if (results.beepVO2 >= maleValB[ageGp][5]){
            results.beep = 2;
        } else {
            results.beep = 1;
        } 
    } else {
            var femValB=[[57,53,46,41,38,33],[47,45,38,34,32,28],[42,39,34,31,28,25],[38,35,31,28,25,22],[33,31,27,25,22,19],[28,26,22,20,18,17],[0,0,0,0,0,0]];
        if(results.beepVO2 >= femValB[ageGp][0]){
            results.beep = 7;
        } else if (results.beepVO2 >= femValB[ageGp][1]){
            results.beep = 6;
        } else if (results.beepVO2 >= femValB[ageGp][2]){
            results.beep = 5;
        } else if (results.beepVO2 >= femValB[ageGp][3]){
            results.beep = 4;
        } else if (results.beepVO2 >= femValB[ageGp][4]){
            results.beep = 3;
        } else if (results.beepVO2 >= femValB[ageGp][5]){
            results.beep = 2;
        } else {
            results.beep = 1;
        }
    }
  } else {
    results.beep = 0;
  }

 if(aerobic.stepBPM > 50){
    if(vitals.gender == 1){
      
      var maleValS = [[78,89,99,105,116,128],[80,89,99,107,117,128],[82,96,103,112,119,130],[86,97,105,116,122,132],[85,97,103,112,120,129],[87,96,103,113,120,130]];

 
      if (aerobic.stepBPM <= maleValS[ageGp][0]) {
        results.step = 7;
      } else if (aerobic.stepBPM <= maleValS[ageGp][1]){
        results.step = 6;
      } else if (aerobic.stepBPM <= maleValS[ageGp][2]){
        results.step = 5;
      } else if (aerobic.stepBPM <= maleValS[ageGp][3]){
        results.step = 4;
      } else if (aerobic.stepBPM <= maleValS[ageGp][4]){
        results.step = 3;
      } else if (aerobic.stepBPM <= maleValS[ageGp][5]){
        results.step = 2;
      } else{
        results.step = 1;
      } 
    } else {
      var femValS = [[84,98,108,117,126,140],[87,99,111,119,126,138],[89,102,110,118,128,140],[93,104,115,120,129,135],[94,97,112,118,128,139],[89,102,115,122,128,134]];
  
      if (aerobic.stepBPM <= femValS[ageGp][0]) {
        results.step = 7;
      } else if (aerobic.stepBPM <= femValS[ageGp][1]){
        results.step = 6;
      } else if (aerobic.stepBPM <= femValS[ageGp][2]){
        results.step = 5;
      } else if (aerobic.stepBPM <= femValS[ageGp][3]){
        results.step = 4;
      } else if (aerobic.stepBPM <= femValS[ageGp][4]){
        results.step = 3;
      } else if (aerobic.stepBPM <= femValS[ageGp][5]){
        results.step = 2;
      } else{
        results.step = 1;
      } 
    }
  } else {
      results.step = 0;
    }



//write VO2Max result
  if (results.beepVO2 > 0) {
    document.getElementById("aerobic-beep-result").textContent = results.beepVO2 + ' ml/kg/min';
  } else {
    document.getElementById("aerobic-beep-result").textContent = 'Unknown';
  }
  
if (results.step == 7){
  document.getElementById("aerobic-step-result").textContent = 'Excellent';
} else if (results.step == 6){
  document.getElementById("aerobic-step-result").textContent = 'Good';
} else if (results.step == 5){
  document.getElementById("aerobic-step-result").textContent = 'Above Average';
} else if (results.step == 4){
  document.getElementById("aerobic-step-result").textContent = 'Average';
} else if (results.step == 3){
  document.getElementById("aerobic-step-result").textContent = 'Below Average';
} else if (results.step == 2){
  document.getElementById("aerobic-step-result").textContent = 'Poor';
} else if (results.step == 1){
  document.getElementById("aerobic-step-result").textContent = 'Very Poor';
} else {
  document.getElementById("aerobic-step-result").textContent = 'Unknown';
};

//ratings part


if(results.beep > 0){
  results.aerobic = results.beep;
} else if (results.step > 0 ) {
  results.aerobic = results.step;
} else {
  results.aerobic = 'Unknown';
}

if (results.aerobic != 'Unknown'){
var VO2rating;
  if(results.aerobic <= 1){
    VO2rating = 'Very Poor';
  } else if(results.aerobic <= 2){
    VO2rating = 'Poor';
  } else if(results.aerobic <= 3){
    VO2rating = 'Below average';
  } else if(results.aerobic <= 4){
    VO2rating = 'Average'; 
  } else if(results.aerobic <= 5){
    VO2rating = 'Above Average'  
  } else if(results.aerobic <= 6){
    VO2rating = 'Good';
  } else if(results.aerobic == 7){
    VO2rating = 'Excellent'; 
  }
} else {
  VO2rating = 'Unknown';
}

document.getElementById("aerobic-overall").textContent = VO2rating;
document.querySelector(".test_aerobic_result").textContent = VO2rating;



// Speed working
var speedRating;

if(speed.speed > 0) {
  if(vitals.gender == 1) {
    if(speed.speed < 4) {
      speedRating = 'Excellent';
    } else if (speed.speed < 4.3) {
      speedRating = 'Above Average';
    } else if (speed.speed < 4.5) {
      speedRating = 'Average';
    } else if (speed.speed < 4.6) {
      speedRating = 'Below Average';
    } else {
      speedRating = 'Poor';
    }
  } else if (gender == 2) {
    if(speed.speed < 4.2) {
      speedRating = 'Excellent';
    } else if (speed.speed < 4.5) {
      speedRating = 'Above Average';
    } else if (speed.speed < 4.7) {
      speedRating = 'Average';
    } else if (speed.speed < 5) {
      speedRating = 'Below Average';
    } else {
      speedRating = 'Poor';
    }
  } else {
    document.getElementById("speed-rating").textContent = 'Gender Details Require';
  }
} else {
  speedRating = 'Unknown';
  speed.speed = 'Unknown'
}

 
document.getElementById("speed-result").textContent = speed.speed;
document.getElementById("speed-rating").textContent = speedRating;
document.querySelector(".test_speed_result").textContent = speedRating;


//Agility Working

var illinoisRating;

if(agility.illinois > 0) {
  if(vitals.gender == 1) {
    if(agility.illinois < 15.2) {
      illinoisRating = 'Excellent';
    } else if (agility.illinois < 16.2) {
      illinoisRating = 'Above Average';
    } else if (agility.illinois < 18.2) {
      illinoisRating = 'Average';
    } else if (agility.illinois < 19.3) {
      illinoisRating = 'Below Average';
    } else {
      illinoisRating = 'Poor';
    }
  } else if (vitals.gender == 2) {
    if(agility.illinois < 17) {
      illinoisRating = 'Excellent';
    } else if (agility.illinois < 18) {
      illinoisRating = 'Above Average';
    } else if (agility.illinois < 21.8) {
      illinoisRating = 'Average';
    } else if (agility.illinois < 23) {
      illinoisRating = 'Below Average';
    } else {
      illinoisRating = 'Poor';
    }
  } else {  
     document.getElementById("agility-rating").textContent = 'Gender Details Required';
  }
} else {
  agility.illinois = 'Unknown';
  illinoisRating = 'Unknown';
}

document.getElementById("agility-result").textContent = agility.illinois;
document.getElementById("agility-rating").textContent = illinoisRating;
document.querySelector(".test_agility_result").textContent = illinoisRating;


// Flexibility workings



var flexSitReach = 'Unknown';
if (flexibility.sitreach != undefined ) {
  if (vitals.gender == 1) {
    if (flexibility.sitreach > 17) {
      flexSitReach = 'Excellent';
      document.getElementById("flexibility-sitreach-result").textContent = flexibility.sitreach + ' cm';
    } else if (flexibility.sitreach + 6) {
      flexSitReach = 'Above Average';
      document.getElementById("flexibility-sitreach-result").textContent = flexibility.sitreach + ' cm';
    } else if (flexibility.sitreach + 0) {
      flexSitReach = 'Average';
      document.getElementById("flexibility-sitreach-result").textContent = flexibility.sitreach + ' cm';
    } else if (flexibility.sitreach  > -8 ) {
      flexSitReach = 'Below Average';
      document.getElementById("flexibility-sitreach-result").textContent = flexibility.sitreach + ' cm';
    } else if (flexibility.sitreach + -20) {
      flexSitReach = 'Poor';
      document.getElementById("flexibility-sitreach-result").textContent = flexibility.sitreach + ' cm';
    } else {
      flexSitReach = 'Very Poor';
      document.getElementById("flexibility-sitreach-result").textContent = flexibility.sitreach + ' cm';
    }
  } else if (vitals.gender == 2){
    if (flexibility.sitreach > 21) {
      flexSitReach = 'Excellent';
      document.getElementById("flexibility-sitreach-result").textContent = flexibility.sitreach + ' cm';
    } else if (flexibility.sitreach + 11) {
      flexSitReach = 'Above Average';
      document.getElementById("flexibility-sitreach-result").textContent = flexibility.sitreach + ' cm';
    } else if (flexibility.sitreach + 1) {
      flexSitReach = 'Average';
      document.getElementById("flexibility-sitreach-result").textContent = flexibility.sitreach + ' cm';
    } else if (flexibility.sitreach + -7) {
      flexSitReach = 'Below Average';
      document.getElementById("flexibility-sitreach-result").textContent = flexibility.sitreach + ' cm';
    } else if (flexibility.sitreach + -15) {
      flexSitReach = 'Poor';
      document.getElementById("flexibility-sitreach-result").textContent = flexibility.sitreach + ' cm';
    } else {
      flexSitReach = 'Very Poor';
      document.getElementById("flexibility-sitreach-result").textContent = flexibility.sitreach + ' cm';
    }
  } else {
    document.getElementById("flexibility-sitreach-result").textContent = 'Gender Details Required';
  }
} else {
  document.getElementById("flexibility-sitreach-result").textContent = flexSitReach;
}


document.querySelector(".test_flexibility_result").textContent = flexSitReach;
document.getElementById("flexibility-rating").textContent = flexSitReach;

};

