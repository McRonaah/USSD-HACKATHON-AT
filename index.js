const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  // Read variables sent via POST from our SDK
  const { sessionId, serviceCode, phoneNumber, text } = req.body;

  console.log('####################', req.body);
  let response = "";

  if (text === "") {1
    console.log(text);
    // This is the first request. Note how we start the response with CON
    response = `CON What would you like to check
        1. Emergency Contact
        2. Safety tips
     `;
  } else if (text === "1") {
    // Business logic for first level response
    response = `CON Choose Emergency Contact
        1. 102
        2. 201`;
  } else if (text === "2") {
    // Business logic for first level response
    // This is a terminal request. Note how we start the response with END
    // response = `END Your phone number is ${phoneNumber}`;

    response = ` END Here are the safety tips
    Trust your instincts: Always trust your gut feelings and intuition. If something or someone feels off or makes you uncomfortable, remove yourself from the situation.

    Be aware of your surroundings: Stay vigilant and aware of what's happening around you. Avoid distractions such as excessive phone usage or wearing headphones that can limit your awareness.
    
    Share your plans: Inform a trusted friend or family member about your whereabouts and plans, especially if you're going out alone or to unfamiliar places. Consider using a safety app that allows you to share your location in real-time.
    
    Learn self-defense techniques: Enroll in self-defense classes to gain skills and confidence in protecting yourself. Knowing how to react in threatening situations can be empowering.`;

  } 

  res.set("Content-Type: text/plain");
  res.send(response);
});

module.exports = router;