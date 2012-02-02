//http://dtm.livejournal.com/38725.html
function shuffle(list) {
  var i, j, t;
  for (i = 1; i < list.length; i++) {
    j = Math.floor(Math.random()*(1+i));  // choose j in [0..i]
    if (j != i) {
      t = list[i];                        // swap list[i] and list[j]
      list[i] = list[j];
      list[j] = t;
    }
  }
}

var deck1 = [];
var deck2 = [];
var deck1_face_ups = 0;
var deck2_face_ups = 0;
var deck_size = 52
var number_of_face_ups = 16
for (var i=0;i<number_of_face_ups;i++)
{
	deck1.push(true); 
}
for (var i=0;i<(deck_size - number_of_face_ups);i++)
{
	deck1.push(false); 
}

shuffle(deck1);

for (var i=0; i < number_of_face_ups; i++)
{
	deck2.push(!deck1.pop());
}

for (var i=0; i < deck1.length; i++)
{
	if (deck1[i] === true) 
	{
		deck1_face_ups++;
	}
}

for (var i=0; i < deck2.length; i++)
{
	if (deck2[i] === true) 
	{
		deck2_face_ups++;
	}
}

if (deck1_face_ups === deck2_face_ups)
{
	console.log("Equal numbers of face-ups! It works every time.");
}
else
{
	console.log("We can write anything we want here because it will never see the light of day.")
}