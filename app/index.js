const headerElement = document.getElementById("heading");
const adviceElement = document.getElementById("advice");
const btn = document.getElementById("btn");

let adviceData;
const api = "https://api.adviceslip.com/advice";
const apiEndPoint = async () => {
	try {
		const apiResponse = await fetch(api);
		if (!apiResponse.ok) {
			throw newError("API request failed");
		}
		const jsonResponse = await apiResponse.json();
		adviceData = jsonResponse.slip;
		headerElement.innerHTML = `Advice #${adviceData.id}`;
		adviceElement.innerHTML = `\"${adviceData.advice}\"`;
	} catch (error) {
		console.error("Error fetching advice:", error);
	}
};

btn.addEventListener("click", () => {
	if (!adviceData) {
		apiEndPoint();
	} else {
		headerElement.innerHTML = `ADVICE #${adviceData.id}`;
		adviceElement.innerHTML = `\"${adviceData.advice}\"`;
	}
});
