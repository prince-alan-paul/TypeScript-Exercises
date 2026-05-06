export const colorCode = (color:string):number=> {
  let resVal:Array<string>=['black','brown','red','orange','yellow','green','blue','violet','grey','white']
for(let i=0;i<resVal.length;i++){
  if(resVal[i]===color){
    return i;
  }
}
return 0;
}

export const COLORS = ['black','brown','red','orange','yellow','green','blue','violet','grey','white']
