// <!--

// 100% made by Eric W!!
// This took forever to make, hope you hate it!

// declare a ton of global variables

// first, do rows

var row1 = document.getElementById("row1");
var row2 = document.getElementById("row2");
var row3 = document.getElementById("row3");

var row1total = 3;
var row2total = 5;
var row3total = 7;

var rowtotal = 15;

// next, individual lines

// note: if I put the document.getElementById there,
// it'd come up as null when returned

var a1 = "1,1";
var a2 = "1,2";
var a3 = "1,3";

var b1 = "2,1";
var b2 = "2,2";
var b3 = "2,3";
var b4 = "2,4";
var b5 = "2,5";

var c1 = "3,1";
var c2 = "3,2";
var c3 = "3,3";
var c4 = "3,4";
var c5 = "3,5";
var c6 = "3,6";
var c7 = "3,7";

// declare a variable to check if the computer made a move
// NOTE: if haveIMovedYet is false, that means that the
// COMPUTER hasn't moved yet

var haveIMovedYet = false;

// declare a variable to toggle between crossed-out lines
// and invisible lines

var invisibleLine = false;

// declare a global variable for later use

var tempa = "";

// declare a global variable to keep track of what move the human just made

var linecrossed = {
    row: 0,
    place: 0,
    amount: 0
};

// make a function that makes lines invisible if need be

var lineType = function () {

    if (document.getElementById("nocrossout").checked) {
        invisibleLine = true;

        for (i = 1; i <= 3; i++) {
            tempa = "1,".concat(i.toString());

            if (document.getElementById(tempa).style.textDecoration === "line-through") {
                document.getElementById(tempa).style.color = "#e6e6e6";
            }

        }

        for (i = 1; i <= 5; i++) {
            tempa = "2,".concat(i.toString());

            if (document.getElementById(tempa).style.textDecoration === "line-through") {
                document.getElementById(tempa).style.color = "#e6e6e6";
            }

        }

   for (i = 1; i <= 7; i++) {
      tempa = "3,".concat(i.toString());

      if (document.getElementById(tempa).style.textDecoration == "line-through") {
	document.getElementById(tempa).style.color = "#e6e6e6";
      }

   }

}

if (document.getElementById("crossout").checked) {

   invisibleLine = false;

   for (i = 1; i <= 3; i++) {
      tempa = "1,".concat(i.toString());

      if (document.getElementById(tempa).style.textDecoration == "line-through") {
	document.getElementById(tempa).style.color = "#145f12";
      }

   }

   for (i = 1; i <= 5; i++) {
      tempa = "2,".concat(i.toString());

      if (document.getElementById(tempa).style.textDecoration == "line-through") {
	document.getElementById(tempa).style.color = "#145f12";
      }

   }

   for (i = 1; i <= 7; i++) {
      tempa = "3,".concat(i.toString());

      if (document.getElementById(tempa).style.textDecoration == "line-through") {
	document.getElementById(tempa).style.color = "#145f12";
      }

   }

}


} // end of function


// make an important function that crosses out the
// chosen line (and everything to the right of it)
// and also records which player made that move

var crossOut = function (line, player) {

    // before anything else happens, let's make sure that
    // the human player doesn't move twice

    if (haveIMovedYet === false && player === "human") {
        line = "Good try.";
        document.getElementById("test").innerHTML = "Hey, you can't move twice in a row!";
    }

    // quick check to see if human wants lines visible or not

    lineType();

    // declaring a temporary local variable for later use

var otherrowtotal = rowtotal;

// change the line's style to text-decoration:line-through
// to make it look like it's crossed out
// or change its font color to white to just make it invisible

// This next part looks complicated, but the concept is simple:
// If the chosen line is not the last line in the row, cross out everything
// to the right of it until the last line is crossed out

// More programmer-y answer:
// check what the first character of the parameter called "line" is. 1 = row 1, etc.
// this character will correspond to the row it's in.
// if the chosen line isn't the last line, cross it off, take the 3rd character of "line"
// (which corresponds to the column the line is in), make it into a number, add 1,
// and repeat until the last line.

// Note that if the line is the eastmost line in the row, though, it doesn't go
// to the trouble of the huge "for" loop; instead, it just crosses it out.

// Also note that if invisibleLine is true then it makes the lines white
// instead of just crossing them out.

if (line.charAt(0) == "1") {
  if (line != a3) {
    for (i = parseInt(line.charAt(2)); i <= 3; i++) {
	tempa = "1,".concat(i.toString());

	// make sure the line isn't already crossed out so that 1) it doesn't need to
	// cross it out again, and 2) so it can accurately figure out the row total

	if (document.getElementById(tempa).style.textDecoration == "line-through") {
	   break;
	}

	// now cross out or whiten/blue-en the lines, and calculate row totals

	document.getElementById(tempa).style.textDecoration = "line-through";
	if (invisibleLine == true) {
	   document.getElementById(tempa).style.color = "#e6e6e6";
	}
	if (invisibleLine == false) {
	   document.getElementById(tempa).style.color = "#145f12";
	}
	row1total -= 1;
	rowtotal -= 1;
    }

  } else {
    if (document.getElementById(line).style.textDecoration != "line-through") {
       row1total -= 1;
       rowtotal -= 1;
    }
    document.getElementById(line).style.textDecoration = "line-through";

    if (invisibleLine == true) {
	document.getElementById(line).style.color = "#e6e6e6";
    }

  }
} else if (line.charAt(0) == "2") {
  if (line != b5) {
    for (i = parseInt(line.charAt(2)); i <= 5; i++) {
	tempa = "2,".concat(i.toString());

	// makes sure the line isn't already crossed out so that 1) it doesn't need to
	// cross it out again, and 2) so it can accurately figure out the row total

	if (document.getElementById(tempa).style.textDecoration == "line-through") {
	   break;
	}

	// now cross out or whiten/blue-en the lines, and calculate row totals

	document.getElementById(tempa).style.textDecoration = "line-through";
	if (invisibleLine == true) {
	   document.getElementById(tempa).style.color = "#e6e6e6";
	}
	if (invisibleLine == false) {
	   document.getElementById(tempa).style.color = "#145f12";
	}
	row2total -= 1;
	rowtotal -= 1;
	
    }

  } else {
    if (document.getElementById(line).style.textDecoration != "line-through") {
       row2total -= 1;
       rowtotal -= 1;
    }
    document.getElementById(line).style.textDecoration = "line-through";
    if (invisibleLine == true) {
	document.getElementById(line).style.color = "#e6e6e6";
    }
    if (invisibleLine == false) {
	document.getElementById(tempa).style.color = "#145f12";
    }
  }
} else if (line.charAt(0) == "3") {
  if (line != c7) {
    for (i = parseInt(line.charAt(2)); i <= 7; i++) {
	tempa = "3,".concat(i.toString());

	// makes sure the line isn't already crossed out so that 1) it doesn't need to
	// cross it out again, and 2) so it can accurately figure out the row total

	if (document.getElementById(tempa).style.textDecoration == "line-through") {
	   break;
	}

	// now cross out or whiten/blue-en the lines, and calculate row totals

	document.getElementById(tempa).style.textDecoration = "line-through";
	if (invisibleLine == true) {
	   document.getElementById(tempa).style.color = "#e6e6e6";
	}
	if (invisibleLine == false) {
	   document.getElementById(tempa).style.color = "#145f12";
	}
	row3total -= 1;
	rowtotal -= 1;
    }

  } else {
    if (document.getElementById(line).style.textDecoration != "line-through") {
       row3total -= 1;
       rowtotal -= 1;
    }
    document.getElementById(line).style.textDecoration = "line-through";
    if (invisibleLine == true) {
	document.getElementById(line).style.color = "#e6e6e6";
    }
  }
}

// make sure computer knows when its turn has ended/started

if (player == "computer") {
   haveIMovedYet = true;
   document.getElementById("test").innerHTML = "<br />";
   document.getElementById("checkboxundo").innerHTML = "<br />";
} else if (player == "human") {
   if (otherrowtotal != rowtotal) {
      haveIMovedYet = false;
      document.getElementById("test").innerHTML = "<br />";
   } else if (line != "Good try.") {
      document.getElementById("test").innerHTML = "Please make a valid move.";
   }

   // This bit here is for the purposes of undoing your move.
   // It gets more useful in the function undoThis()

   if (line != "Good try." && line != "you jokester" && rowtotal != 0) {

      linecrossed.row = parseInt(line.charAt(0));
      linecrossed.place = parseInt(line.charAt(2));
      linecrossed.amount = otherrowtotal - rowtotal;
	if (linecrossed.amount != 0) {
		document.getElementById("checkboxundo").innerHTML = "<input type='checkbox' id='checkmeout' value='' onClick='undoThis(linecrossed.row, linecrossed.place, linecrossed.amount);' /><span style='font-family:Noto Sans JP; font-size:13.5px; color:black;'>Undo?</span>";
	}
   }

}
if (line == "you jokester") {
   // i don't know what I'm going to do here yet
}
   // Note: the otherrowtotal variable makes sure that the human
   // has actually crossed out a line and made a move before
   // the computer takes a turn

// check if human crossed out the last line

if (rowtotal == 0 && player == "human") {
   endGame("human");
} else if (rowtotal == 0 && player == "computer") {
   endGame("computer");
}

} // end of function

var makeMove = function () {

// random variable from 1-3 and from 1-2 for use later

var randNum = Math.ceil(Math.random() * 3);
var randNum2 = Math.ceil(Math.random() * 2);

// check if human should go first instead

if (rowtotal == 15) {
   haveIMovedYet = true;
   document.getElementById("test").innerHTML = "<br />";
}

// make the first move if the human chooses not to

if (haveIMovedYet == false) {

   if (row1total + row2total + row3total == 15) {

     if (randNum === 1) {
       crossOut(a3, "computer");
     } else if (randNum === 2) {
       crossOut(b5, "computer");
     } else if (randNum === 3) {
       crossOut(c7, "computer");
     }
  
   }

}

/*

GENERAL LINE GAME STRATEGY:

ZERO:
if there's only 1 row remaining, cross out all but the last line

ONE:
If all rows can equal 1 after you cross out, do it.

TWO:
If the rows can be 1-2-3 in one move (in no particular order), make that move.
POSSIBLE COMBOS:
1-2-3, 1-3-2, 2-1-3, 2-3-1, 3-1-2, 3-2-1

THREE:
If 2 rows are equal & don't equal 1, & the third isn't crossed out, cross out that whole row.

FOUR:
If only 2 lines are crossed out (both in diff. rows), cross out 1 line in the untouchd row.

FIVE:
1-4-5 (or 1-5-4) is a very good position to put your opponent in.

SIX:
if one row = 1, another equals 0, and another is > 0, cross the latter out.
don't forget obvious rules!

SEVEN:
If 2 rows don't equal each other & are both greater than 1, & the other = 0, make them equal.
(Note the "greater than 1" part)

(Eight on down are all potential losing situations)

EIGHT:
If rowtotal == 14, cross out one line in an untouched row.

NINE:
If the rows are 2-4-6, cross out just one line in either the top or bottom row.

TEN:
If the rows are 1-4-5 or 1-5-4, you'll prolly lose, but cross out 1 line in the row w/ 4.

ELEVEN:
If the rows are 1-2-3 or some form of that, cross out one line in the 3 row. (?)

TWELVE:
If the rows are 1-1-1 cross one out.

THIRTEEN:
If two rows are equal and the other row = 0, cross out one line in either row.

FOURTEEN:
If one line is left just cross it out and face it: you lost.

*/

// ZERO: THE ONLY ROW RULE
if (haveIMovedYet == false) {

   if (row1total == 0 && row2total == 0 && row3total != 0 && row3total != 1) {
      crossOut(c2, "computer");
   } else if (row1total == 0 && row2total != 0 && row3total == 0 && row2total != 1) {
      crossOut(b2, "computer");
   } else if (row1total != 0 && row2total == 0 && row3total == 0 && row1total != 1) {
      crossOut(a2, "computer");
   }

}

// ONE: THE 1-1-1 RULE
if (haveIMovedYet == false) {

   if (row1total == 1 && row2total == 1 && row3total > 1) {
      crossOut(c2, "computer");
   } else if (row1total == 1 && row3total == 1 && row2total > 1) {
      crossOut(b2, "computer");
   } else if (row2total == 1 && row3total == 1 && row1total > 1) {
      crossOut(a2, "computer");
   }
}


// TWO: THE 1-2-3 RULE

if (haveIMovedYet == false) {

   // 1-2-3
   if (row1total == 1 && row2total == 2 && row3total > 3) { 
      crossOut(c4, "computer");
   } else if (row1total == 1 && row2total > 2 && row3total == 3) {
      crossOut(b3, "computer");
   } else if (row1total > 1 && row2total == 2 && row3total == 3) {
      crossOut(a2, "computer");
   }

   // 1-3-2
   else if (row1total == 1 && row2total == 3 && row3total > 2) { 
      crossOut(c3, "computer");
   } else if (row1total == 1 && row2total > 3 && row3total == 2) {
      crossOut(b4, "computer");
   } else if (row1total > 1 && row2total == 3 && row3total == 2) {
      crossOut(a2, "computer");
   }

   // 2-1-3
   else if (row1total == 2 && row2total == 1 && row3total > 3) { 
      crossOut(c4, "computer");
   } else if (row1total == 2 && row2total > 1 && row3total == 3) {
      crossOut(b2, "computer");
   } else if (row1total > 2 && row2total == 1 && row3total == 3) {
      crossOut(a3, "computer");
   }

   // 2-3-1
   else if (row1total == 2 && row2total == 3 && row3total > 1) { 
      crossOut(c2, "computer");
   } else if (row1total == 2 && row2total > 3 && row3total == 1) {
      crossOut(b4, "computer");
   } else if (row1total > 2 && row2total == 3 && row3total == 1) {
      crossOut(a3, "computer");
   }

   // 3-1-2
   else if (row1total == 3 && row2total == 1 && row3total > 2) { 
      crossOut(c3, "computer");
   } else if (row1total == 3 && row2total > 1 && row3total == 2) {
      crossOut(b2, "computer");
   } else if (row1total > 3 && row2total == 1 && row3total == 2) {
      crossOut(a4, "computer");
   }

   // 3-2-1
   else if (row1total == 3 && row2total == 2 && row3total > 1) { 
      crossOut(c2, "computer");
   } else if (row1total == 3 && row2total > 2 && row3total == 1) {
      crossOut(b3, "computer");
   } else if (row1total > 3 && row2total == 2 && row3total == 1) {
      crossOut(a4, "computer");
   }
}


// THREE: THE TWO EQUAL ROWS RULE

if (haveIMovedYet == false) {

   if (row1total == row2total && row1total != 1 && row3total != 0) {
      crossOut(c1, "computer");
   } else if (row1total == row3total && row3total != 1 && row2total != 0) {
      crossOut(b1, "computer");
   } else if (row2total == row3total && row2total != 1 && row1total != 0) {
      crossOut(a1, "computer");
   }
}


// FOUR: THE 2-4-6 RULE

if (haveIMovedYet == false) {

   if (row1total == 2 && row2total == 4 && row3total > 6) {
      crossOut(c7, "computer");
   } else if (row1total == 2 && row2total > 4 && row3total == 6) {
      crossOut(b5, "computer");
   } else if (row1total > 2 && row2total == 4 && row3total == 6) {
      crossOut(a3, "computer");
   }
}


// FIVE: THE 1-4-5 RULE

if (haveIMovedYet == false) {

   if (row1total == 1 && row2total == 4 && row3total > 5) {
      crossOut(c6, "computer");
   } else if (row1total == 1 && row2total > 4 && row3total == 5) {
      crossOut(b5, "computer");
   } else if (row1total > 1 && row2total == 4 && row3total == 5) {
      crossOut(a2, "computer");
   }

   // here we switch to 1-5-4 instead of 1-4-5, which is
   // essentially the same thing but in a different order

   else if (row1total == 1 && row2total == 5 && row3total > 4) {
      crossOut(c5, "computer");
   } else if (row1total > 1 && row2total == 5 && row3total == 4) {
      crossOut(a2, "computer");
   } // (note that there's here no crossOut(b5) because row 2 has 5 lines to begin with)
}


// SIX: THE OBVIOUS LONE LINE RULE

if (haveIMovedYet == false) {

   if (row1total == 1 && row2total == 0 && row3total != 0) {
      crossOut(c1, "computer");
   } else if (row1total == 0 && row2total == 1 && row3total != 0) {
      crossOut(c1, "computer");
   } else if (row1total == 1 && row2total != 0 && row3total == 0) {
      crossOut(b1, "computer");
   } else if (row1total == 0 && row2total != 0 && row3total == 1) {
      crossOut(b1, "computer");
   } else if (row1total != 0 && row2total == 0 && row3total == 1) {
      crossOut(a1, "computer");
   } else if (row1total != 0 && row2total == 1 && row3total == 0) {
      crossOut(a1, "computer");
   }
}

// SEVEN: THE OTHER TWO EQUAL ROWS RULE

if (haveIMovedYet == false) {

   if (row1total > 1 && row2total > 1 && row3total == 0 && row1total != row2total) {
      if (row1total > row2total) {
	if (row2total == 2) {
	   crossOut(a3, "computer");
	}
      } else if (row1total < row2total) {
	if (row1total == 2) {
	   crossOut(b3, "computer");
	} else if (row1total == 3) {
	   crossOut(b4, "computer");
	}
      }
   }

   else if (row1total > 1 && row3total > 1 && row2total == 0 && row1total != row3total) {
      if (row1total > row3total) {
	if (row3total == 2) {
	   crossOut(a3, "computer");
	}
      } else if (row1total < row3total) {
	if (row1total == 2) {
	   crossOut(c3, "computer");
	} else if (row1total == 3) {
	   crossOut(c4, "computer");
	}
      }
   }

   else if (row2total > 1 && row3total > 1 && row1total == 0 && row2total != row3total) {
      if (row2total > row3total) {
	if (row3total == 2) {
	   crossOut(b3, "computer");
	} else if (row3total == 3) {
	   crossOut(b4, "computer");
	} else if (row3total == 4) {
	   crossOut(b5, "computer");
	}
      } else if (row2total < row3total) {
	if (row2total == 2) {
	   crossOut(c3, "computer");
	} else if (row2total == 3) {
	   crossOut(c4, "computer");
	} else if (row2total == 4) {
	   crossOut(c5, "computer");
	} else if (row2total == 5) {
	   crossOut(c6, "computer");
	}
      }
   }
   


}

// EIGHT: THE ONE-LINE-CROSSED-OUT RULE

if (haveIMovedYet == false) {

   if (rowtotal == 14) {
      if (row1total == 2) {
	if (randNum2 == 1) {
	   crossOut(b5, "computer");
	} else if (randNum2 == 2) {
	   crossOut(c7, "computer");
	}
      } else if (row2total == 4) {
	if (randNum2 == 1) {
	   crossOut(a3, "computer");
	} else if (randNum2 == 2) {
	   crossOut(c7, "computer");
	}
      } else if (row3total == 6) {
	if (randNum2 == 1) {
	   crossOut(a3, "computer");
	} else if (randNum2 == 2) {
	   crossOut(b5, "computer");
	}
      }
   }


}

// NINE: THE OTHER 2-4-6 RULE

if (haveIMovedYet == false) {

   if (row1total == 2 && row2total == 4 && row3total == 6) {
      if (randNum2 == 1) {
	crossOut(a2, "computer");
      } else if (randNum2 == 2) {
	crossOut(c6, "computer");
      }
   }

}

// TEN: THE OTHER 1-4-5 RULE

if (haveIMovedYet == false) {

   if (row1total == 1 && row2total == 4 && row3total == 5) {
      crossOut(b4, "computer");
   } else if (row1total == 1 && row2total == 5 && row3total == 4) {
      crossOut(c4, "computer");
   }

}

// ELEVEN: THE OTHER 1-2-3 RULE

if (haveIMovedYet == false) {

   // 1-2-3
   if (row1total == 1 && row2total == 2 && row3total == 3) { 
      crossOut(c3, "computer");
   }

   // 1-3-2
   else if (row1total == 1 && row2total == 3 && row3total == 2) { 
      crossOut(b3, "computer");
   }

   // 2-1-3
   else if (row1total == 2 && row2total == 1 && row3total == 3) { 
      crossOut(c3, "computer");
   }

   // 2-3-1
   else if (row1total == 2 && row2total == 3 && row3total == 1) { 
      crossOut(b3, "computer");
   }

   // 3-1-2
   else if (row1total == 3 && row2total == 1 && row3total == 2) { 
      crossOut(a3, "computer");
   }

   // 3-2-1
   else if (row1total == 3 && row2total == 2 && row3total == 1) { 
      crossOut(a3, "computer");
   }

}

// TWELVE: THE OTHER 1-1-1 RULE

if (haveIMovedYet == false) {

   if (row1total == 1 && row2total == 1 && row3total == 1) {
      if (randNum == 1) {
	crossOut(a1, "computer");
      } else if (randNum == 2) {
	crossOut(b1, "computer");
      } else if (randNum == 3) {
	crossOut(c1, "computer");
      }
   }

}

// THIRTEEN: THE ALREADY TWO EQUAL ROWS RULE

if (haveIMovedYet == false) {

   if (row1total == row2total && row3total == 0) {
      if (randNum2 == 1) {
	if (row1total == 3) {
	   crossOut(a3, "computer");
	} else if (row1total == 2) {
	   crossOut(a2, "computer");
	}
      } else if (randNum2 == 2) {
	if (row2total == 3) {
	   crossOut(b3, "computer");
	} else if (row2total == 2) {
	   crossOut(b2, "computer");
	}
      }

   } else if (row1total == row3total && row2total == 0) {
      if (randNum2 == 1) {
	if (row1total == 3) {
	   crossOut(a3, "computer");
	} else if (row1total == 2) {
	   crossOut(a2, "computer");
	}
      } else if (randNum2 == 2) {
	if (row3total == 3) {
	   crossOut(c3, "computer");
	} else if (row3total == 2) {
	   crossOut(c2, "computer");
	}
      }

   } else if (row2total == row3total && row1total == 0) {
      if (randNum2 == 1) {
	if (row2total == 5) {
	   crossOut(b5, "computer");
	} else if (row2total == 4) {
	   crossOut(b4, "computer");
	} else if (row2total == 3) {
	   crossOut(b3, "computer");
	} else if (row2total == 2) {
	   crossOut(b2, "computer");
	}
      } else if (randNum2 == 2) {
	if (row3total == 5) {
	   crossOut(c5, "computer");
	} else if (row3total == 4) {
	   crossOut(c4, "computer");
	} else if (row3total == 3) {
	   crossOut(c3, "computer");
	} else if (row3total == 2) {
	   crossOut(c2, "computer");
	}
      }
   }

}

// FOURTEEN: IN THE SLIM CHANCE THE COMPUTER ACTUALLY LOSES

if (haveIMovedYet == false) {

   if (row1total == 1 && row2total == 0 && row3total == 0) {
      crossOut(a1, "computer");
   } else if (row1total == 0 && row2total == 1 && row3total == 0) {
      crossOut(b1, "computer");
   } else if (row1total == 0 && row2total == 0 && row3total == 0) {
      crossOut(c1, "computer");
   }

}

// FIFTEEN: ???

if (haveIMovedYet == false) {

   if (row1total == 0 && row2total == 0 && row3total == 0) {
	document.location.reload(true);
   }

}

if (haveIMovedYet == false) {
   document.getElementById("test").innerHTML = "Error: The computer is stuck.";
}
if (haveIMovedYet == true) {
   crossOut("you jokester", "computer");
}

} // end of function

var endGame = function (player) {

var randnumber = Math.floor(Math.random() * 5);

var loseGreeting = [];
   loseGreeting[0] = "You lose.";
   loseGreeting[1] = "You lost. Don't worry, this'll happen pretty often.";
   loseGreeting[2] = "You are the weakest link. Goodbye.";
   loseGreeting[3] = "You have lost the line game.";
   loseGreeting[4] = "Sorry, but you were not victorious this time.";

var winGreeting = [];
   winGreeting[0] = "You win! Nicely done!";
   winGreeting[1] = "Congratulations! You have won the line game!";
   winGreeting[2] = "YOU WIN! YAY!";
   winGreeting[3] = "You have emerged victorious!";
   winGreeting[4] = "You have won! Great job!";

if (player == "human") {
   alert(loseGreeting[randnumber]);
   document.location.reload(true);
}
if (player == "computer") {
   alert(winGreeting[randnumber]);
   document.location.reload(true);
   rowtotal = -1;
}


} // end of function


var goFirst = function () {

// this isn't much at all, I know

alert("Changes will take place next game.");

} // end of function

var undoThis = function (row, place, amount) {

  // This function is the exact opposite of crossOut().
  // A few variables are changed but it undoes your move if you so wish.

  var originalrowtotal = rowtotal;
  var firstpartline = row.toString();
  var undoline = firstpartline.concat(",",place);

if (row == 1) {
  if (place != 3) {
    for (i = place; i < amount + place; i++) {
	tempa = "1,".concat(i.toString());

	// make sure the line isn't already crossed out so that 1) it doesn't need to
	// cross it out again, and 2) so it can accurately figure out the row total

	if (document.getElementById(tempa).style.textDecoration != "line-through") {
	   break;
	}

	// now cross out or whiten/blue-en the lines, and calculate row totals

	document.getElementById(tempa).style.textDecoration = "none";
	if (invisibleLine == true) {
	   document.getElementById(tempa).style.color = "#145f12";
	}
	if (invisibleLine == false) {
	   document.getElementById(tempa).style.color = "#145f12";
	}
	row1total += 1;
	rowtotal += 1;
    }

  } else {
    if (document.getElementById(undoline).style.textDecoration == "line-through") {
       row1total += 1;
       rowtotal += 1;
    }
    document.getElementById(undoline).style.textDecoration = "none";

    if (invisibleLine == true) {
	document.getElementById(undoline).style.color = "#145f12";
    }
    if (invisibleLine == false) {
	document.getElementById(tempa).style.color = "#145f12";
    }

  }
} else if (row == 2) {
  if (place != 5) {
    for (i = place; i < amount + place; i++) {
	tempa = "2,".concat(i.toString());

	// makes sure the line isn't already crossed out so that 1) it doesn't need to
	// cross it out again, and 2) so it can accurately figure out the row total

	if (document.getElementById(tempa).style.textDecoration != "line-through") {
	   break;
	}

	// now cross out or whiten/blue-en the lines, and calculate row totals

	document.getElementById(tempa).style.textDecoration = "none";
	if (invisibleLine == true) {
	   document.getElementById(tempa).style.color = "#145f12";
	}
	if (invisibleLine == false) {
	   document.getElementById(tempa).style.color = "#145f12";
	}
	row2total += 1;
	rowtotal += 1;
	
    }

  } else {
    if (document.getElementById(undoline).style.textDecoration == "line-through") {
       row2total += 1;
       rowtotal += 1;
    }
    document.getElementById(undoline).style.textDecoration = "none";
    if (invisibleLine == true) {
	document.getElementById(undoline).style.color = "#145f12";
    }
    if (invisibleLine == false) {
	document.getElementById(tempa).style.color = "#145f12";
    }
  }
} else if (row == 3) {
  if (place != 7) {
    for (i = place; i < amount + place; i++) {
	tempa = "3,".concat(i.toString());

	// makes sure the line isn't already crossed out so that 1) it doesn't need to
	// cross it out again, and 2) so it can accurately figure out the row total

	if (document.getElementById(tempa).style.textDecoration != "line-through") {
	   break;
	}

	// now cross out or whiten/blue-en the lines, and calculate row totals

	document.getElementById(tempa).style.textDecoration = "none";
	if (invisibleLine == true) {
	   document.getElementById(tempa).style.color = "#145f12";
	}
	if (invisibleLine == false) {
	   document.getElementById(tempa).style.color = "#145f12";
	}
	row3total += 1;
	rowtotal += 1;
    }

  } else {
    if (document.getElementById(undoline).style.textDecoration == "line-through") {
       row3total += 1;
       rowtotal += 1;
    }
    document.getElementById(undoline).style.textDecoration = "none";
    if (invisibleLine == true) {
	document.getElementById(undoline).style.color = "#145f12";
    }
  }
}

if (originalrowtotal != rowtotal) {
      haveIMovedYet = true;
      document.getElementById("checkboxundo").innerHTML = "<br />";
}
document.getElementById("test").innerHTML = "<br />";

} // end of function

// -->