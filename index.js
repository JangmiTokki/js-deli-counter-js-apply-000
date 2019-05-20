var customerNum = 0;

  
  //customerNum++;
function takeANumber( customerNum)
{
  customerNum++;
  //line.push(customerNum);
  
  var welcomeMessage = `Welcome, you are number ${customerNum} in line.`;
  return welcomeMessage;
}

function nowServing(katzDeliLine)
{
  var nowServingMessage;
  
  var currentCustomer = (katzDeliLine[0]);
  
  if(katzDeliLine === undefined || katzDeliLine.length === 0)
  {
    nowServingMessage = "There is nobody waiting to be served!";
    return nowServingMessage;
  }
  else
  {
    nowServingMessage = `Currently serving ${currentCustomer}.`;
    katzDeliLine.shift();
    return nowServingMessage;
    
  }
}

function currentLine(katzDeliLine)
{
  var emptyLine= "The line is currently empty.";
  var currentCustomer = "The line is currently: "
  
  if(katzDeliLine === undefined || katzDeliLine.length === 0)
  {
    return emptyLine;
  }
  
  else
  {
    for(var i = 0; i < katzDeliLine.length; i++)
    {
      currentCustomer +=` ${(i+1)}. ${katzDeliLine[i]},`;
    }
    return currentCustomer.slice(0,-1);
  }
}