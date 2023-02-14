function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6jXXwNZqN54":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbz3dF1jbCojDM225jqu7PrJT44pKSKpk6hexhsGvBDSfF03bjwN4DzLdXthXpAZnVhU/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

