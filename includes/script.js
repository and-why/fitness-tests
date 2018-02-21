// Variables

localStorage.age;
localStorage.height;
localStorage.weight;
localStorage.gender;



//VITALS PAGE
function vitalsStore() {
    if(parseInt(document.getElementById('vitals-age').value) >= 0) {
      localStorage.age = parseInt(document.getElementById('vitals-age').value);
    } else {
      localStorage.age;
    };
    if(parseInt(document.getElementById("vitals-weight").value) >= 0) {
      localStorage.weight = parseInt(document.getElementById("vitals-weight").value);
    } else {
      localStorage.weight;
    };
    if(parseInt(document.getElementById('vitals-height').value) >= 0) {
      localStorage.height = parseInt(document.getElementById('vitals-height').value);
    } else {
      localStorage.height;
    };
    if(document.getElementById("vitals-gender").value > 0) {
      localStorage.gender = document.getElementById("vitals-gender").value;
    } else {
      localStorage.gender;
    };
};
function vitalsWrite() {
  // write vitals results 
    if(localStorage.age){
      document.getElementById("vitals-age-result").textContent = localStorage.age;
    } else {
      document.getElementById("vitals-age-result").textContent = "Unknown";
    }
     if(localStorage.height){
      document.getElementById("vitals-height-result").textContent = localStorage.height + ' cm';
    } else {
      document.getElementById("vitals-height-result").textContent = "Unknown";
    }
     if(localStorage.weight){
      document.getElementById("vitals-weight-result").textContent = localStorage.weight + ' kg';
    } else {
      document.getElementById("vitals-weight-result").textContent = "Unknown";
    }
    if(localStorage.gender == 1){
        document.getElementById("vitals-gender-result").textContent = "Male";
      } else if (localStorage.gender == 2){
        document.getElementById("vitals-gender-result").textContent = "Female";
      } else {
        document.getElementById("vitals-gender-result").textContent = "Unknown";
      }

    if(localStorage.age == undefined || localStorage.weight == undefined || localStorage.height == undefined || localStorage.gender == 0 || localStorage.gender == undefined) {
          document.querySelector(".page-copy-above").classList.remove('hidden');
      } else {
          document.querySelector(".page-copy-above").classList.add('hidden');
      }

}

function strengthStore() {
   if(parseInt(document.getElementById("strength-pushup").value) >= 0) {
    localStorage.pushup = parseInt(document.getElementById("strength-pushup").value);
  } else {
    localStorage.pushup;
  }
  if(parseInt(document.getElementById("strength-bench").value) >= 0) {
    localStorage.bench = parseInt(document.getElementById("strength-bench").value);
  } else {
    localStorage.bench;
  }
  if(parseInt(document.getElementById("strength-deadlift").value) >= 0) {
    localStorage.deadlift = parseInt(document.getElementById("strength-deadlift").value);
  } else {
    localStorage.deadlift;
  }
  if(parseInt(document.getElementById("strength-squat").value) >= 0) {
    localStorage.squat = parseInt(document.getElementById("strength-squat").value);
  } else {
    localStorage.squat;
  }
}



function strengthWrite() {
  var ageGP;

  localStorage.squat_rating = 0;
  localStorage.deadlift_rating  = 0;
  localStorage.bench_rating  = 0;
  localStorage.pushup_rating = 0;
  localStorage.pushup = 0;
  localStorage.bench = 0;
  localStorage.deadlift = 0;
  localStorage.squat = 0;


   if (localStorage.age > 16 && localStorage.age <= 19){ageGP = 0}
      else if (localStorage.age <=29){ageGP = 1}
      else if (localStorage.age <=39){ageGP = 2}
      else if (localStorage.age <=49){ageGP = 3}
      else if (localStorage.age <=59){ageGP = 4}
      else {ageGP = 5}
  
  if (localStorage.gender > 0) {
    if (localStorage.age > 16){
      if (localStorage.pushup > 0) {
        if (localStorage.gender == 1) {
          var maleValP=[[56,47,35,19,11,4],[47,39,30,17,10,4],[41,34,25,13,8,2],[34,28,21,11,6,1],[31,25,18,9,5,1],[30,24,17,6,3,1]]; 
          
          if(localStorage.pushup >= maleValP[ageGP][0]){
            document.getElementById("strength-pushup-result").textContent = localStorage.pushup + " (Excellent)";
            localStorage.pushup_rating = 6;
          } else if (localStorage.pushup >= maleValP[ageGP][1]) {
            document.getElementById("strength-pushup-result").textContent = localStorage.pushup + " (Good)";
            localStorage.pushup_rating = 5;
          } else if (localStorage.pushup >= maleValP[ageGP][2]) {
            document.getElementById("strength-pushup-result").textContent = localStorage.pushup + " (Above Average)";
            localStorage.pushup_rating = 4;
          } else if (localStorage.pushup >= maleValP[ageGP][3]) {
            document.getElementById("strength-pushup-result").textContent = localStorage.pushup + " (Average)";
            localStorage.pushup_rating = 3;
          } else if (localStorage.pushup >= maleValP[ageGP][4]) {
            document.getElementById("strength-pushup-result").textContent = localStorage.pushup + " (Below Average)";
            localStorage.pushup_rating = 2;
          } else if (localStorage.pushup >= maleValP[ageGP][5]) {
            document.getElementById("strength-pushup-result").textContent = localStorage.pushup + " (Poor)";
            localStorage.pushup_rating = 1;
          } else  {
            document.getElementById("strength-pushup-result").textContent = localStorage.pushup + " (Very Poor)";
            localStorage.pushup_rating = 1; 
          }
        }
       if (localStorage.gender == 2) {
          var maleValP=[[35,27,21,11,6,2],[36,30,23,12,7,2],[37,30,22,10,5,1],[31,25,18,8,4,1],[25,21,15,7,3,1],[23,19,13,5,2,1]]; 
          
          if(localStorage.pushup >= maleValP[ageGP][0]){
            document.getElementById("strength-pushup-result").textContent = localStorage.pushup + " (Excellent)";
            localStorage.pushup_rating = 6;
          } else if (localStorage.pushup >= maleValP[ageGP][1]) {
            document.getElementById("strength-pushup-result").textContent = localStorage.pushup + " (Good)";
            localStorage.pushup_rating = 5;
          } else if (localStorage.pushup >= maleValP[ageGP][2]) {
            document.getElementById("strength-pushup-result").textContent = localStorage.pushup + " (Above Average)";
            localStorage.pushup_rating = 4;
          } else if (localStorage.pushup >= maleValP[ageGP][3]) {
            document.getElementById("strength-pushup-result").textContent = localStorage.pushup + " (Average)";
            localStorage.pushup_rating = 3;
          } else if (localStorage.pushup >= maleValP[ageGP][4]) {
            document.getElementById("strength-pushup-result").textContent = localStorage.pushup + " (Below Average)";
            localStorage.pushup_rating = 2;
          } else if (localStorage.pushup >= maleValP[ageGP][5]) {
            document.getElementById("strength-pushup-result").textContent = localStorage.pushup + " (Poor)";
            localStorage.pushup_rating = 1;
          } else  {
            document.getElementById("strength-pushup-result").textContent = localStorage.pushup + " (Very Poor)";
            localStorage.pushup_rating = 1; 
          }
        } 
      }
    } else {
      document.getElementById("strength-pushup-result").textContent = localStorage.pushup + " (Age Required)";
      localStorage.pushup_rating = 0;
    }
  } else {
    document.getElementById("strength-pushup-result").textContent = "Please fill out personal details";
    localStorage.pushup_rating = 0;
  }
  

  if(localStorage.weight > 0) {
    if(localStorage.bench > 0){  
      if (localStorage.gender == 1) {
        if ((localStorage.bench / localStorage.weight) < 0.68) {
            localStorage.bench_rating = 1;
            document.getElementById("strength-bench-result").textContent = localStorage.bench + ' kg (Poor)';
          } else if ((localStorage.bench/localStorage.weight) < 0.91) {
            localStorage.bench_rating = 2;
            document.getElementById("strength-bench-result").textContent = localStorage.bench + ' kg (Below Average)';
          } else if ((localStorage.bench/localStorage.weight) < 1.19) {
            localStorage.bench_rating = 3;
            document.getElementById("strength-bench-result").textContent = localStorage.bench + ' kg (Average)';
          } else if ((localStorage.bench/localStorage.weight) < 1.51) {
            localStorage.bench_rating = 4;
            document.getElementById("strength-bench-result").textContent = localStorage.bench + ' kg (Above Average)';
          } else if ((localStorage.bench/localStorage.weight) < 1.85) {
            localStorage.bench_rating = 5;
            document.getElementById("strength-bench-result").textContent = localStorage.bench + ' kg (Good)';
          } else {
            localStorage.bench_rating = 6;
            document.getElementById("strength-bench-result").textContent = localStorage.bench + ' kg (Excellent)';
          } 
      } else if (localStorage.gender == 2){
        if ((localStorage.bench / localStorage.weight) < 0.28) {
          localStorage.bench_rating = 1;
          document.getElementById("strength-bench-result").textContent = localStorage.bench + ' kg (Poor)';
        } else if ((localStorage.bench/localStorage.weight) < 0.46) {
          localStorage.bench_rating = 2;
          document.getElementById("strength-bench-result").textContent = localStorage.bench + ' kg (Below Average)';
        } else if ((localStorage.bench/localStorage.weight) < 0.71) {
          localStorage.bench_rating = 3;
          document.getElementById("strength-bench-result").textContent = localStorage.bench + ' kg (Average)';
        } else if ((localStorage.bench/localStorage.weight) < 1.01) {
          localStorage.bench_rating = 4;
          document.getElementById("strength-bench-result").textContent = localStorage.bench + ' kg (Above Average)';
        } else if ((localStorage.bench/localStorage.weight) < 1.34) {
          localStorage.bench_rating = 5;
          document.getElementById("strength-bench-result").textContent = localStorage.bench + ' kg (Good)';
        } else {
          localStorage.bench_rating = 6;
          document.getElementById("strength-bench-result").textContent = localStorage.bench + ' kg (Excellent)';
        } 
      } else {
        document.getElementById("strength-bench-result").textContent = localStorage.bench + ' kg (Weight Required' ;
      }
    } else {
      document.getElementById("strength-bench-result").textContent = localStorage.bench + ' kg (Gender Required)'  ;
    }
  } else {
    document.getElementById("strength-bench-result").textContent = "Please fill out personal details" ;
  }

  if(localStorage.weight > 0){
    if(localStorage.deadlift > 0){  
      if (localStorage.gender == 1) {
        if ((localStorage.deadlift/localStorage.weight) < 0.99) {
            localStorage.deadlift_rating = 1;
            document.getElementById("strength-deadlift-result").textContent = localStorage.deadlift + ' kg (Poor)';
          } else if ((localStorage.deadlift/localStorage.weight) < 1.41) {
            localStorage.deadlift_rating = 2;
            document.getElementById("strength-deadlift-result").textContent = localStorage.deadlift + ' kg (Below Average)';
          } else if ((localStorage.deadlift/localStorage.weight) < 1.80) {
            localStorage.deadlift_rating = 3;
            document.getElementById("strength-deadlift-result").textContent = localStorage.deadlift + ' kg (Average)';
          } else if ((localStorage.deadlift/localStorage.weight) < 2.24) {
            localStorage.deadlift_rating = 4;
            document.getElementById("strength-deadlift-result").textContent = localStorage.deadlift + ' kg (Above Average)';
          } else if ((localStorage.deadlift/localStorage.weight) < 2.70) {
            localStorage.deadlift_rating = 5;
            document.getElementById("strength-deadlift-result").textContent = localStorage.deadlift + ' kg (Good)';
          } else {
            localStorage.deadlift_rating = 6;
            document.getElementById("strength-deadlift-result").textContent = localStorage.deadlift + ' kg (Excellent)';
          } 
        } else if (localStorage.gender == 2){
          if ((localStorage.deadlift/localStorage.weight) < 0.56) {
            localStorage.deadlift = 1;
            document.getElementById("strength-deadlift-result").textContent = localStorage.deadlift + ' kg (Poor)';
          } else if ((localStorage.deadlift/localStorage.weight) < 0.73) {
            localStorage.deadlift_rating = 2;
            document.getElementById("strength-deadlift-result").textContent = localStorage.deadlift + ' kg (Below Average)';
          } else if ((localStorage.deadlift/localStorage.weight) < 1.21) {
            localStorage.deadlift_rating = 3;
            document.getElementById("strength-deadlift-result").textContent = localStorage.deadlift + ' kg (Average)';
          } else if ((localStorage.deadlift/localStorage.weight) < 1.64) {
            localStorage.deadlift_rating = 4;
            document.getElementById("strength-deadlift-result").textContent = localStorage.deadlift + ' kg (Above Average)';
          } else if ((localStorage.deadlift/localStorage.weight) < 2.11) {
            localStorage.deadlift_rating = 5;
            document.getElementById("strength-deadlift-result").textContent = localStorage.deadlift + ' kg (Good)';
          } else {
            localStorage.deadlift_rating = 6;
            document.getElementById("strength-deadlift-result").textContent = localStorage.deadlift + ' kg (Excellent)';
          } 
        } else {
          document.getElementById("strength-deadlift-result").textContent = localStorage.deadlift +' kg (Weight Required)' ;
        }
      } else {
        document.getElementById("strength-deadlift-result").textContent = localStorage.deadlift + " (Gender Required)";;
      }
    } else {
      document.getElementById("strength-deadlift-result").textContent = "Please fill out personal details";
    }
  
  if(localStorage.squat > 0){
      if(localStorage.weight > 0) { 
        if (localStorage.gender == 1) {
          if ((localStorage.squat/localStorage.weight) < 0.91) {
              localStorage.squat_rating = 1;
              document.getElementById("strength-squat-result").textContent = localStorage.squat + ' kg (Poor)';
            } else if ((localStorage.squat/localStorage.weight) < 1.20) {
              localStorage.squat_rating = 2;
              document.getElementById("strength-squat-result").textContent = localStorage.squat + ' kg (Below Average)';
            } else if ((localStorage.squat/localStorage.weight) < 1.56) {
              localStorage.squat_rating = 3;
              document.getElementById("strength-squat-result").textContent = localStorage.squat + ' kg (Average)';
            } else if ((localStorage.squat/localStorage.weight) < 1.97) {
              localStorage.squat_rating = 4;
              document.getElementById("strength-squat-result").textContent = localStorage.squat + ' kg (Above Average)';
            } else if ((localStorage.squat/localStorage.weight) < 2.40) {
              localStorage.squat_rating = 5;
              document.getElementById("strength-squat-result").textContent = localStorage.squat + ' kg (Good)';
            } else {
              localStorage.squat_rating = 6;
              document.getElementById("strength-squat-result").textContent = localStorage.squat + ' kg (Excellent)';
            } 
          } else if (localStorage.gender == 2) {
            if ((localStorage.squat/localStorage.weight) < 0.44) {
              localStorage.squat_rating = 1;
              document.getElementById("strength-squat-result").textContent = localStorage.squat + ' kg (Poor)';
            } else if ((localStorage.squat/localStorage.weight) < 0.69) {
              localStorage.squat_rating = 2;
              document.getElementById("strength-squat-result").textContent = localStorage.squat + ' kg (Below Average)';
            } else if ((localStorage.squat/localStorage.weight) < 1.03) {
              localStorage.squat_rating = 3;
              document.getElementById("strength-squat-result").textContent = localStorage.squat + ' kg (Average)';
            } else if ((localStorage.squat/localStorage.weight) < 1.42) {
              localStorage.squat_rating = 4;
              document.getElementById("strength-squat-result").textContent = localStorage.squat + ' kg (Above Average)';
            } else if ((localStorage.squat/localStorage.weight) < 1.87) {
              localStorage.squat_rating = 5;
              document.getElementById("strength-squat-result").textContent = localStorage.squat + ' kg (Good)';
            } else {
              localStorage.squat_rating = 6;
              document.getElementById("strength-squat-result").textContent = localStorage.squat + ' kg (Excellent)';
            } 
          } else {
            document.getElementById("strength-squat-result").textContent = localStorage.squat + ' kg (Gender Required)' ;
          }
        } else {
            document.getElementById("strength-squat-result").textContent = localStorage.squat + " kg (Weight Required)";
        }
      } else {
        document.getElementById("strength-squat-result").textContent = "Please fill out personal details";
      }

      var count = 0;

      if (localStorage.pushup_rating > 0){count++}
      if (localStorage.bench_rating > 0){count++}
      if (localStorage.deadlift_rating > 0){count++}
      if (localStorage.squat_rating > 0){count++}

      if(count > 0) {
        localStorage.strength_rating = (+localStorage.pushup_rating + +localStorage.bench_rating + +localStorage.deadlift_rating + +localStorage.squat_rating)/count;
      }

      if(localStorage.strength_rating > 0) {
    if(localStorage.strength_rating >= 6) {
        document.getElementById("strength-overall").textContent = "Excellent";
      } else if(localStorage.strength_rating >= 5) {
        document.getElementById("strength-overall").textContent = "Good";
      } else if(localStorage.strength_rating >= 4) {
        document.getElementById("strength-overall").textContent = "Above Average";
      } else if(localStorage.strength_rating >= 3) {
        document.getElementById("strength-overall").textContent = "Average";
      } else if(localStorage.strength_rating >= 2) {
        document.getElementById("strength-overall").textContent = "Below Average";
      } else if(localStorage.strength_rating > 0){
        document.getElementById("strength-overall").textContent = "Poor";
    }
  } else {
    document.getElementById("strength-overall").textContent = "Unknown";
  }
  
}


function resultsWrite() {
  if(localStorage.strength_rating > 0) {
    if(localStorage.strength_rating >= 6) {
        document.getElementById("test_strength_result").textContent = "Excellent";
      } else if(localStorage.strength_rating >= 5) {
        document.getElementById("test_strength_result").textContent = "Good";
      } else if(localStorage.strength_rating >= 4) {
        document.getElementById("test_strength_result").textContent = "Above Average";
      } else if(localStorage.strength_rating >= 3) {
        document.getElementById("test_strength_result").textContent = "Average";
      } else if(localStorage.strength_rating >= 2) {
        document.getElementById("test_strength_result").textContent = "Below Average";
      } else if(localStorage.strength_rating > 0){
        document.getElementById("test_strength_result").textContent = "Poor";
    }
  } else {
    document.getElementById("test_strength_result").textContent = "Unknown";
  }
}


function checkVitals() {
  if(localStorage.age == undefined || localStorage.weight == undefined || localStorage.height == undefined || localStorage.gender == 0 || localStorage.gender == undefined) {
      location.replace("profile.html");
  } else {
      location.replace("home.html");
  }

}

