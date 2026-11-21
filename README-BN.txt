Sonic YT Personal Assistant — প্রাথমিক AI Chat Starter

এখন কী আছে:
- ChatGPT-এর মতো বাংলা চ্যাট পেজ
- Express backend-এর /api/chat endpoint
- OpenAI Responses API দিয়ে টেক্সট-চ্যাটের সংযোগের নমুনা

এখনো কী নেই:
- ভিডিও ফাইল আপলোড/এডিটিং
- থাম্বনেইল ইমেজ জেনারেশন
- YouTube OAuth ও অটো-পাবলিশ
- Cloud hosting

চালানোর জন্য:
1) Node.js 20+ থাকা কম্পিউটার বা Cloud hosting লাগবে।
2) এই ফোল্ডারে npm install চালাও।
3) .env.example কপি করে .env বানিয়ে OPENAI_API_KEY সেট করো।
4) npm start চালাও।

গুরুত্বপূর্ণ নিরাপত্তা:
- API key কখনো public HTML/JavaScript-এ রাখবে না।
- API key বা Google password/OTP চ্যাটে পাঠাবে না।
- API ব্যবহারে খরচ হতে পারে; API billing ও model availability অ্যাকাউন্টভেদে বদলাতে পারে।
- অপ্রাপ্তবয়স্ক হলে কোনো পেইড অ্যাকাউন্ট বা পেমেন্টের আগে অভিভাবকের সাহায্য নাও।
- YouTube আপলোডের আগে OAuth অনুমতি, review এবং ব্যবহারকারীর নিয়ন্ত্রণ যোগ করতে হবে।
