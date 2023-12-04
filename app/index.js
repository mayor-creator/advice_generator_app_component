const headerElement = document.getElementById("headling");
const adviceElement = document.getElementById("advice");
const buttonElement = document.getElementsByClassName("imageContainer")[0];
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

buttonElement.addEventListener("click", () =>
	setTimeout(() => {
		apiEndPoint();
	}, 2000)
);
