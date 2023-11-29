const headerElement = document.getElementById("headling");
const adviceElement = document.getElementById("advice");
const api = "https://api.adviceslip.com/advice";
const apiEndPoint = async () => {
	try {
		const apiResponse = await fetch(api);
		if (apiResponse.ok) {
			const jsonResponse = await apiResponse.json();
			headerElement.innerHTML = `ADVICE #${jsonResponse.slip.id}`;
			adviceElement.innerHTML = `\"${jsonResponse.slip.advice}\"`;
		}
	} catch (error) {
		console.log(error);
	}
};

apiEndPoint();
