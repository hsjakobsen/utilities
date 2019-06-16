export async function trimStringAndCheckLength(stringToCheck, field, lengthRequirement, matchLength) {
    var trimmedString = stringToCheck.trim();
    let response;

    var matchesRequirement = matchLength === true ? trimmedString.length != lengthRequirement : trimmedString.length < lengthRequirement;
    var feedback = matchLength === true ? " " : " at least ";

    if (matchesRequirement) {
        response = {
            success: false,
            result: trimmedString,
            feedback: field + " must be" + feedback + mininumLength + " characters."
        }
    } else {
        response = {
            success: true,
            result: trimmedString,
            feedback: ""
        }
    }
    return response;
}

export async function verifyLoginCredentials(username, password) {
    if (!username || username === '') {
        return helpersResponse.handleServerError("Username cannot be empty");
      }
      if (!password || password === '') {
        return helpersResponse.handleServerError("Password cannot be empty");    
      }
    
      return {
        username: username,
        password: password
      }
}