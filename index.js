
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
	
	commandName = command.split(' ')[0];

    //Функции, зависящие от команды
	if (commandName === 'ADD') {
		return AddContact(command);
	} else if (commandName === 'REMOVE_PHONE') {
		return RemovePhone(command);
	} else if (commandName === "SHOW") {
		return showList(command);
	}

};

function AddContact(command) 
{
	var Arr = command.split(' ');
	var Name = Arr[1];
	var number = Arr[2].split(',');
	if (!phoneBook.hasOwnProperty(Name)) 
    {
		phoneBook[Name] = number;
	} else {
		phoneBook[Name] = phoneBook[Name].concat(number);
	}

	return phoneBook[Name];
}

function RemovePhone(command) {
	var Arr = command.split(' ');
	var number = Arr[1];
	var isExist = false;
	var keys = Object.keys(phoneBook);
	for (var i = 0; i < keys.length; ++i) {
		var key = keys[i];
		for (var j = 0; j < phoneBook[key].length; ++j) {
			if (number === phoneBook[key][j]) {
				phoneBook[key].splice(j, 1);
                isExist = true;
				break;
			}
		}
	}

	return isExist;
}

function showList(command) {

	var mass = [];
	var keys = Object.keys(phoneBook);
	for (var i = 0; i < keys.length; ++i) 
    {
		var key = keys[i];
		if (phoneBook[key].length > 0) 
        {
			var contact = key + ":" + " " + phoneBook[key].join(', ');
			mass.push(contact);
		}
	}
	return mass.sort();
}