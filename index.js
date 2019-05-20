function takeANumber(line, customer)
{
  line.push(customer);
  var welcomeMessage = `Welcome, ${customer}. You are number ${line.length} in line.`;
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
  var customers = `The line is currently`;
  
  if(katzDeliLine === undefined || katzDeliLine.length === 0)
  {
    customers+= "empty";
  }
  
  else
  {
    for(var i = 0; i < katzDeliLine.length; i++)
    {
      customers += `${(i+1)}. ${katzDeliLine[i]},`;
    }
    return customers.slice(-2);
  }
}