console.log(typeof null);

/*
the output is object
Reason - 
typeof null returns "object" because of a historical bug in early JavaScript that was never fixed for compatibility.
Although null represents an empty value, JavaScript incorrectly treats it as an object type.
*/