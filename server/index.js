const express = require("express");
const cors = require("cors");
const fs = require("fs");
const OpenAI = require("openai").default;
const pdfService = require("./service/pdf-service");
require("dotenv").config({ path: ".env.local" });
const app = express();
const PORT = process.env.PORT || 3001;
const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
	res.send("Hello World!");
});
app.post("/submit-form", async (req, res) => {
	const { goals, height, age, gender } = req.body;
	const formData = { goals, height, age, gender };
	console.log(formData);
	// Creates the custom workout call to OpenAI
	const response = await openai.chat.completions.create({
		model: "gpt-3.5-turbo",
		messages: [
			{
				role: "system",
				content: "You are a online personal trainer",
			},
			{
				role: "user",
				content: `Define a workout/nutrition regimen based on the provided data. Also, before giving a regimen, provide a health disclaimer that users should consult a physician and proceed at their own risk. This is only a health AI project. Goals: '${goals}', Height: '${height}'Age: '${age}', Gender: '${gender}'`,
			},
			{
				role: "assistant",
				content:
					"Health Disclaimer: Please consult with a physician before starting any new workout or nutrition regimen. Proceed with the following suggestions at your own risk. This is only a health AI project and may not be suitable for everyone.\n\nBased on the provided data (individual looking for body recomposition, 22 years old, 74 inches tall, male), here is a workout and nutrition regimen for you:\n\nWorkout Regimen:\n1. Strength Training: Incorporate full-body strength training exercises 3-4 times a week. Focus on compound movements like squats, deadlifts, bench press, and rows to build muscle and burn fat.\n2. Cardio: Include cardio sessions 2-3 times a week to help with fat loss. High-intensity interval training (HIIT) or steady-state cardio can be effective.\n3. Rest and Recovery: Make sure to give your body enough time to rest and recover between workouts to prevent injury and facilitate muscle growth.\n\nNutrition Regimen:\n1. Macronutrient Balance: Aim for a balanced diet that includes adequate protein, carbohydrates, and healthy fats to support muscle growth and fat loss.\n2. Caloric Deficit: To achieve body recomposition, you may need to be in a slight caloric deficit. Monitor your calorie intake and adjust as needed based on progress.\n3. Whole Foods: Focus on whole, nutrient-dense foods like lean protein sources, fruits, vegetables, whole grains, and healthy fats. Limit processed foods and sugary beverages.\n4. Hydration: Stay well-hydrated by drinking plenty of water throughout the day to support overall health and performance.\n\nRemember to listen to your body, track your progress, and make adjustments as needed to reach your body recomposition goals. This regimen is a general guideline and may need to be personalized based on individual needs and preferences.",
			},
		],
		temperature: 1,
		max_tokens: 3050,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0,
	});
	console.log("OpenAI Object", response);
	// Form response
	console.log("OpenAI Response:", response.choices[0].message.content);
	// Generate Form into a PDF
	const stream = fs.createWriteStream("TrAIner-workout.pdf");
	pdfService.buildPDF(response.choices[0].message.content, stream);
	stream.on("finish", () => {
		res.setHeader("Content-Type", "application/pdf");
		res.setHeader(
			"Content-Disposition",
			"attachment;filename=TrAIner-workout.pdf",
			"inline; filename=TrAIner-workout.pdf"
		);

		fs.createReadStream("TrAIner-workout.pdf").pipe(res);
	});
});
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
