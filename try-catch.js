function checkAge() {
    const ageField = document.getElementById("age")
    const textAge = ageField.value

    const errorTag = document.getElementById("error")

    try {
        const age = parseInt(textAge)
        if (isNaN(age)) {
            throw "Please enter a number"


        }

        else if (age < 18) {
            throw "Baccha kaccha not allow"
        }
        else if (age > 30) {
            throw " murrubi ra ekhane aisen nah"

        }
        errorTag.innerHTML = ""
    }
    catch (err) {
        // console.log("ERRRO", err);
        errorTag.innerHTML = 'Error :' + err;

    }
    finally {
        console.log("All Done inside try catch")
    }
}