const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Task name is required"],
		trim: true,
		maxlength: [50, "Name must be less than 50 characters"],
	},
	completed: {
		type: Boolean,
		default: false,
	},
});

module.exports = mongoose.model("Task", TaskSchema);
