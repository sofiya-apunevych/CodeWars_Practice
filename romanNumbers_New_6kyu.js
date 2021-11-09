function solution(number){
    //Object = {key:value}
  
    let rom = {MM:2000, M:1000, CM:900, XC:90, XX:20, X:10, IX:9, VIII:8, VII:7, VI:6, V:5, IV:4, III:3, II:2, I:1}
    
    let output = '';
    
    for(let keyR in rom) {
        //console.log(rom[keyR]);

        while(number >= rom[keyR]){
             output += keyR;
             number -= rom[keyR]
            // console.log(rom[keyR])
        }
    }
    
  
    
    return output;
  }
   
  let sol = solution(1990)
  console.log(sol)