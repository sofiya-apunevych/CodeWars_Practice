/* list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns '' */

function list(names){

    let chainOfNames = names.map(n => n.name)
    if(chainOfNames.length>1 ){
        return chainOfNames.slice(0, names.length-1).join(', ')+ ' & ' + chainOfNames.slice(-1)+ ''
      } else {
          return chainOfNames.splice(-1)+''
           
       } }

    //let chainOfNames = names.map(i => names[i].name)

   // console.log(chainOfNames)
    //console.log(names[0].name)
    //your code here
  





 let gh =  list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
 console.log(gh)