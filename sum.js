function add(x,y){
  /*
  if(((typeof x) === 'number') && ((typeof y) === 'number')){
  
    return x + y;
 
  } else{
    
    return NaN;
  
  }
  */
  //程序出BUG的原因是测试用例不足。需要进行特殊测试
  return Number (x) + Number (y);
}

module.exports = add;
